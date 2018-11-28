// import libaries
import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value, Block } from 'slate';

// import components and plugins
import NodeRenderer from '../plugins/node-renderer';
import MarkRenderer from '../plugins/mark-renderer';
import DropPastePlugin from '../plugins/drop-paste-plugin';
import initialValue from '../jsonData/value';
import KeyPressPlugin from '../plugins/keypress-plugin';
import BlocksCount from '../plugins/top-block-nodes-counter';
import Toolbar from './twiskerToolbar';


/**
 * editor's schema.
 */

const schema = {
  document: {
    last: { type: 'paragraph' },
    normalize: (editor, { code, node }) => {
      switch (code) {
        case 'last_child_type_invalid': {
          const paragraph = Block.create('paragraph');
          return editor.insertNodeByKey(node.key, node.nodes.size, paragraph);
        }
      }
    }
  },
  blocks: {
    image: {
      isVoid: true
    }
  }
};

// TwiskerEditor component
class TwiskerEditor extends Component {
  editor: Editor = {};
  plugins = [];

  constructor(props) {
    super(props);
    let existingValue= localStorage.getItem('content');
    if (existingValue) {
      try {
        existingValue = JSON.parse(existingValue);
      } catch (e) {
        console.log('local storage value Corrupted ');
        existingValue = null;
      }
    }
    let storedJSON = existingValue || initialValue;

    // Set the initial value when the app is first constructed
    let value = Value.fromJSON(storedJSON.value);
    this.state = {
      oldJSONValue: storedJSON,
      newJSONValue: storedJSON,
      value: value,
      isLimit: storedJSON.isLimit,
      blocksLimit: storedJSON.blocksLimit,
      documentIsChanged: false,
      documentIsValid: true,
      editor: {}
    };
    this.plugins = [
      KeyPressPlugin({ context: this }),
      NodeRenderer(),
      MarkRenderer(),
      DropPastePlugin({ handlerType: 'onDrop', insertImage: this.insertImage }),
      DropPastePlugin({
        handlerType: 'onPaste',
        insertImage: this.insertImage
      }),
      BlocksCount()
    ];
  }

  /**
   * discards all changes
   */
  reloadContent = () => {
    this.setState({
      value: Value.fromJSON(this.state.oldJSONValue.value),
      newJSONValue: this.state.oldJSONValue,
      documentIsValid: true,
      isLimit: this.state.oldJSONValue.isLimit,
      blocksLimit: this.state.oldJSONValue.blocksLimit,
      documentIsChanged: false
    });
  };

  /**
   * Updates the state with the new contents
   */
  updateContent = (content: JSON) => {
    this.setState({
      oldJSONValue: content,
      newJSONValue: content,
      documentIsChanged: false
    });
  };

  /**
   * Sets limit the total number of total level blocks
   */
  setIsBlocksLimit = (isLimit: boolean) => {
    let newJSONValue = Object.assign({}, this.state.oldJSONValue, {
      isLimit: isLimit
    });
    let documentIsChanged =
      JSON.stringify(newJSONValue) !== JSON.stringify(this.state.oldJSONValue);
    let documentIsValid = !(
      isLimit &&
      this.editor.getBlocksCount(newJSONValue.value.document.nodes) >
        this.state.blocksLimit
    );
    this.setState({
      isLimit: isLimit,
      newJSONValue: newJSONValue,
      documentIsChanged: documentIsChanged,
      documentIsValid: documentIsValid
    });
  };

  /**
   * Sets the maximum allowed number for total block
   */
  setBlocksLimit = (limit: number) => {
    let newJSONValue = Object.assign({}, this.state.oldJSONValue, {
      blocksLimit: limit
    });
    let documentIsChanged =
      JSON.stringify(newJSONValue) !== JSON.stringify(this.state.oldJSONValue);
    let documentIsValid = !(
      this.state.isLimit &&
      this.editor.getBlocksCount(newJSONValue.value.document.nodes) > limit
    );
    this.setState({
      blocksLimit: limit,
      newJSONValue: newJSONValue,
      documentIsChanged: documentIsChanged,
      documentIsValid: documentIsValid
    });
  };

  /**
   * inserting images
   */
  insertImage = (editor: Editor, src: string, target: Range) => {
    if (target) {
      editor.select(target);
    }

    editor.insertBlock({
      type: 'image',
      data: { src }
    });
  };

  /**
   * Store a reference to the `editor`.
   */
  ref = (editor: Editor) => {
    this.editor = editor;
    this.setState({ editor });
  };

  render() {
    return (
      <div>
        <Toolbar
          editor={this.state.editor}
          context={this}
          isLimit={this.state.isLimit}
          blocksLimit={this.state.blocksLimit}
          documentIsChanged={this.state.documentIsChanged}
          documentIsValid={this.state.documentIsValid}
        />
        <div
          style={{
            top: '40px',
            position: 'relative',
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 60px)',
            background: 'white'
          }}
          className="content-body"
        >
          <Editor
            style={{ padding: '20px', minHeight: '300px' }}
            spellCheck
            autoFocus
            plugins={this.plugins}
            placeholder="Enter some rich text..."
            ref={this.ref}
            schema={schema}
            value={this.state.value}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }

  /**
   *  save the new `value` on change.
   */
  onChange = ({ value }: { value: Value }) => {
    let newJSONValue = {
      blocksLimit: this.state.blocksLimit,
      isLimit: this.state.isLimit,
      value: value.toJSON()
    };
    let documentIsChanged =
      JSON.stringify(newJSONValue) !== JSON.stringify(this.state.oldJSONValue);
    let documentIsValid = !(
      this.state.isLimit &&
      this.editor.getBlocksCount(value.toJSON().document.nodes) >
        this.state.blocksLimit
    );
    this.setState({
      value: value,
      documentIsChanged: documentIsChanged,
      newJSONValue: newJSONValue,
      documentIsValid: documentIsValid
    });
  };
}
export default TwiskerEditor