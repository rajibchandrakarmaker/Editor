// import libaries
import React, { Component } from 'react';
import { Editor } from 'slate-react';

// import components
import { Button, Icon, Toolbar, Input } from './components';

/**
 * Default node type.
 */
const DEFAULT_NODE = 'paragraph';

type Props = any;
type State = any;

// twiskerEditor 
export default class twiskerEditor extends Component<Props, State> {
  editor: Editor = null;
  insertImage = null;

  componentDidUpdate() {
    this.editor = this.props.editor;
    this.insertImage = this.props.context.insertImage;
  }

  render() {
    return (
      // Toolbar actions list
      <Toolbar className="toolbar">
        {this.renderMarkButton('Bold', 'bold', 'format_bold')}
        {this.renderMarkButton('Italic', 'italic', 'format_italic')}
        {this.renderMarkButton('Underlined', 'underlined', 'format_underlined')}
        {this.renderMarkButton('Code', 'code', 'code')}
        {this.renderBlockButton('Heading One', 'heading-one', 'looks_one')}
        {this.renderBlockButton('Heading Two', 'heading-two', 'looks_two')}
        {this.renderBlockButton('Block Quote', 'block-quote', 'format_quote')}
        {this.renderBlockButton(
          'Numbered List',
          'numbered-list',
          'format_list_numbered'
        )}
        {this.renderBlockButton(
          'Bulleted List',
          'bulleted-list',
          'format_list_bulleted'
        )}
        <Button onMouseDown={this.onClickUpload} active={true}>
          <Icon>cloud_upload</Icon>
          <input
            ref="fileInput"
            type="file"
            id="file-input"
            onChange={this.onFileSelect}
            accept="image/*"
            multiple
          />
        </Button>
        <Button onMouseDown={this.onClickImage} active={true}>
          <Icon>image</Icon>
        </Button>
        <Button
          active={this.props.documentIsChanged && this.props.documentIsValid}
          onMouseDown={this.onClickSave}
        >
          <Icon>save</Icon>
        </Button>
        <Button
          active={this.props.documentIsChanged}
          onMouseDown={this.onClickRevertChanges}
        >
          <Icon>cancel</Icon>
        </Button>
        <span>
          <label>
            Blocks Limit:
            <Input
              type="checkbox"
              active={this.props.isLimit}
              onChange={this.onClickLimit}
              checked={this.props.isLimit}
              onMouseDown={this.onClickRevertChanges}
              style={{ height: '13px', width: '20px', marginLeft: '5px', position:'relative', top: '2px' }}
            />
          </label>
        </span>
        {this.renderBlocksLimitInputBox()}
      </Toolbar>
    );
  }

  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @return {Boolean}
   */
  hasMark = (type: string) => {
    const { value } = this.props.context.state;
    return value.activeMarks.some(mark => mark.type === type);
  };

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @return {Boolean}
   */
  hasBlock = (type: string) => {
    const { value } = this.props.context.state;
    return value.blocks.some(node => node.type === type);
  };

  hasListTypeParent = (document: any, node: any) => {
    let parentNode = document.getClosest(
      node.key,
      parent => parent.type === 'bulleted-list' || parent.type === 'numbered-list'
    );
    return parentNode;
  };

  /**
   * Render the input box to set the maximum number of allowed top level blocks
   */
  renderBlocksLimitInputBox = () => {
    if (this.props.isLimit) {
      return (
        <span className="limit-box">
          <label>
            Maximum Blocks:
            <Input
              type="number"
              min={1}
              value={this.props.blocksLimit}
              onChange={this.onBlocksLimitChange}
              style={{
                position: 'absolute',
                width: '55px',
                height: '20px',
                padding: '10px',
                marginLeft: '5px'
              }}
            />
          </label>
        </span>
      );
    } else {
      return null;
    }
  };

  /**
   * Render a mark-toggling toolbar button.
   */
  renderMarkButton = (title: string, type: string, icon: string) => {
    const isActive = this.hasMark(type);

    return (
      <Button
        active={isActive}
        title={title}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  /**
   * toolbar button.
   */
  renderBlockButton = (title: string, type: string, icon: string) => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value } = this.props.context.state;
      const parent = value.blocks.first()
        ? value.document.getParent(value.blocks.first().key)
        : null;
      isActive = this.hasBlock('list-item') && parent && parent.type === type;
    }

    return (
      <Button
        active={isActive}
        title={title}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  /**
   * File upload from browser
   */
  onFileSelect = () => {
    for (const file of this.refs.fileInput.files) {
      const reader = new FileReader();
      const [mime] = file.type.split('/');
      if (mime !== 'image') continue;

      reader.addEventListener('load', () => {
        this.editor.command(this.insertImage, reader.result);
      });

      reader.readAsDataURL(file);
    }
  };

  /**
   * allow limit on change inout button
   */
  onClickLimit = (event: any) => {
    this.props.context.setIsBlocksLimit(event.target.checked);
  };

  /**
   * maximum allowed number of top level blocks
   */
  onBlocksLimitChange = (event: any) => {
    this.props.context.setBlocksLimit(event.target.value);
  };

  /**
   * ave the content in local store
   */
  onClickSave = (event: Event) => {
    if (!this.props.documentIsValid) return;
    event.preventDefault();
    const contentJSON = this.props.context.state.value.toJSON();
    const content = JSON.stringify({
      blocksLimit: this.props.blocksLimit,
      isLimit: this.props.isLimit,
      value: contentJSON
    });
    localStorage.setItem('content', content);
    this.props.context.updateContent({
      blocksLimit: this.props.blocksLimit,
      isLimit: this.props.isLimit,
      value: contentJSON
    });
  };

  /**
   * Discard changes button
   */
  onClickRevertChanges = (event: Event) => {
    let twiskerEditor = document.getElementById('twiskerEditor');
    twiskerEditor.classList.toggle('block-limit-active');
    event.preventDefault();
    this.props.context.reloadContent();
  };

  /**
   * Insert image through link
   */
  onClickImage = (event: Event) => {
    event.preventDefault();
    const src = window.prompt('Enter the URL of the image:');
    if (!src) return;
    console.log(src);
    this.editor.command(this.insertImage, src);
  };

  /**
   * On clicking the upload button, open the file browser.
   */
  onClickUpload = (event: Event) => {
    event.preventDefault();
    let fileInput = this.refs.fileInput;
    fileInput.click();
  };

  /**
   * When a mark button is clicked, toggle the current mark.
   */
  onClickMark = (event: Event, type: string) => {
    event.preventDefault();
    console.log(this);
    this.editor.toggleMark(type);
  };

  /**
   * When a block button is clicked, toggle the block type.
   */
  onClickBlock = (event: Event, type: string) => {
    event.preventDefault();

    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    if (editor.value.focusBlock.type === 'image') return;

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');
      if (isList) {
        let parentNode = document.getClosest(
          editor.value.focusBlock.key,
          parent =>
            parent.type === 'bulleted-list' || parent.type === 'numbered-list'
        );
        while (parentNode) {
          const parentType = parentNode.type;
          editor
            .setBlocks(isActive ? DEFAULT_NODE : type)
            .unwrapBlock(parentType);
          // .unwrapBlock('numbered-list')
          parentNode = document.getClosest(
            parentNode.key,
            parent =>
              parent.type === 'bulleted-list' || parent.type === 'numbered-list'
          );
        }
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      if (isList && isType) {
        let parentNode = document.getClosest(
          editor.value.focusBlock.key,
          parent =>
            parent.type === 'bulleted-list' || parent.type === 'numbered-list'
        );
        const parentType = parentNode.type;
        editor
          .setBlocks(
            this.hasListTypeParent(document, parentNode)
              ? 'list-item'
              : DEFAULT_NODE
          )
          .unwrapBlock(parentType);
      } else if (isList) {
        editor
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .setBlocks('list-item')
          .wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  };
}
