import { Editor } from 'slate-react'
import React from 'react'
import styled from 'react-emotion'

type Props = any

export default function NodeRenderer(options: any) {

   const Image = styled('img')`
      display: block;
      max-width: 100%;
      max-height: 20em;
      box-shadow: ${props => (props.selected ? '0 0 0 2px red;' : 'none')};
   `
   // const BulletedListWrapper = styled('ul')`
   //    ${props =>({...props.attributes}) }
   //    padding-left: ${props => (props.level ? 0.75 * props.level : 0.75)}em;
   // `
   
   return ({
      /**
       * Render a Slate node.
       *
       * @param {Object} props
       * @return {Element}
       */

      renderNode: (props: Props, editor: Editor, next: any) => {
         const { attributes, children, node, isFocused } = props

         switch (node.type) {
            case 'title':
               return <h2 style={{textAlign: "center"}} {...attributes}>{children}</h2>
            case 'paragraph':
               return <p style={{textAlign: "left"}} {...attributes}>{children}</p>
            case 'block-quote':
               return <blockquote style={{textAlign: "left"}} {...attributes}>{children}</blockquote>
            case 'bulleted-list':
               return <ul style={{textAlign: "left"}} {...attributes}>{children}</ul>
            case 'heading-one':
               return <h1 style={{textAlign: "left"}} {...attributes}>{children}</h1>
            case 'heading-two':
               return <h2 style={{textAlign: "left"}} {...attributes}>{children}</h2>
            case 'list-item': 
               return <li style={{textAlign: "left"}} {...attributes}>{children}</li>
            case 'numbered-list':
               return <ol style={{textAlign: "left"}} {...attributes}>{children}</ol>
            case 'image': {
               const src = node.data.get('src')
               return <Image src={src} selected={isFocused} {...attributes} />
            }
            default:
               return next()
         }
      }
   })
}
