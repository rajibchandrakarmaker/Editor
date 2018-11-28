// import libaries
import React from 'react';
import { Editor } from 'slate-react';
import styled from 'react-emotion';

// Total node counter
const BlocksCounter = styled('span')`
  font-size : 12px;
  display: block;
  width: 100%;
  top: 14px;
  position: fixed;
  right: 0;
  left: 348px;
`;

export default function BlocksCount(options: any) {
  let getBlocksCount = nodes => {
    return nodes.reduce((memo, b) => memo + (b.object === 'block' ? 1 : 0), 0);
  };
  return {
    renderEditor(props: Props, editor: Editor, next: any) {
      const children = next();
      const blocksCount = getBlocksCount(props.value.document.nodes);
      editor.getBlocksCount = getBlocksCount;
      return (
        <div>
          <BlocksCounter>Total Blocks: {blocksCount}</BlocksCounter>
          <div>{children}</div>
        </div>
      );
    }
  };
}
