import { isKeyHotkey } from 'is-hotkey'
import { Editor } from 'slate-react'

/**
 * Define hotkey matchers.
 *
 * @type {Function}
 */
const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')
const isTabKey = isKeyHotkey('tab')
const isShiftTabKey = isKeyHotkey('shift+tab')
const isSaveHotkey = isKeyHotkey('mod+s')

export default function KeyPressPlugin(options: any) {
   let indentationLevel = (document, node) => {
      let lvl = 0
      let parent = document.getClosest(node.key, parent => 
         (parent.type==='bulleted-list' || parent.type==='numbered-list'))
      while (parent && lvl < 3) {
         lvl ++
         parent = document.getClosest(parent.key, parent => 
            (parent.type==='bulleted-list' || parent.type==='numbered-list'))
      }
      return lvl
   }
   return ({
      /**
       * On key down, if it's a formatting command toggle a mark.
       *
       * @param {Event} event
       * @param {Editor} editor
       * @return {Change}
       */
      onKeyDown: (event: Event, editor: Editor, next: any) => {
         let mark

         if (isBoldHotkey(event)) {
            mark = 'bold'
         } else if (isItalicHotkey(event)) {
            mark = 'italic'
         } else if (isUnderlinedHotkey(event)) {
            mark = 'underlined'
         } else if (isCodeHotkey(event)) {
            mark = 'code'
         } else if (isTabKey(event) || isShiftTabKey(event)) {
            event.preventDefault()
            let type = editor.value.focusBlock.type
            if (type === 'list-item') {
               const { value } = editor
               const { document } = value
               const parentType = document.getClosest(editor.value.focusBlock.key, parent => 
                  (parent.type==='bulleted-list' || parent.type==='numbered-list')).type
               if (isTabKey(event) && indentationLevel(document, editor.value.focusBlock) < 3) {
                  editor.wrapBlock(parentType)
               } else if (isShiftTabKey(event) && indentationLevel(document, editor.value.focusBlock) > 1) {
                  editor.unwrapBlock(parentType)
               }
            }
            return
         } else if (isSaveHotkey(event)) {
            event.preventDefault()
            if (!options.context.state.documentIsValid) return
            const contentJSON = options.context.state.value.toJSON()
            const content = JSON.stringify({blocksLimit: options.context.state.blocksLimit, 
               isLimit: options.context.state.isLimit, value: contentJSON})
            localStorage.setItem('content', content)
            options.context.updateContent({blocksLimit: options.context.state.blocksLimit, 
               isLimit: options.context.state.isLimit, value: contentJSON})
            return
         } else {
            return next()
         }

         event.preventDefault()
         editor.toggleMark(mark)
      }
   })
}
