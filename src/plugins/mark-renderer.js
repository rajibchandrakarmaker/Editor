import { Editor } from 'slate-react'
import React from 'react'

type Props = any

export default function MarkRenderer(options: any) {
   return ({
      /**
       * Render a Slate mark.
       *
       * @param {Object} props
       * @return {Element}
       */

      renderMark: (props: Props, editor: Editor, next: any) => {
         const { children, mark, attributes } = props

         switch (mark.type) {
            case 'bold':
               return <strong {...attributes}>{children}</strong>
            case 'code':
               return <code {...attributes}>{children}</code>
            case 'italic':
               return <em {...attributes}>{children}</em>
            case 'underlined':
               return <u {...attributes}>{children}</u>
            default:
               return next()
         }
      }
   })
}
