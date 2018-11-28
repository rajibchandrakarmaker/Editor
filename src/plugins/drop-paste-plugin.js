import { Editor, getEventRange, getEventTransfer } from 'slate-react'
import isUrl from 'is-url'
import imageExtensions from 'image-extensions'

export default function DropPastePlugin(options: any) {


   /**
    * A function to determine whether a URL has an image extension.
    *
    * @param {String} url
    * @return {Boolean}
    */
   let isImage = (url: string) => {
      let ext = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase()
      return !!imageExtensions.find((el: string) => {
         return el === ext
      })
   }

   let insertImage = options.insertImage

   /**
   * On drop, insert the image wherever it is dropped.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */
   let onDropOrPaste = (event: Event, editor: Editor, next: any) => {
      const target = getEventRange(event, editor)
      if (!target && event.type === 'drop') return next()

      const transfer = getEventTransfer(event)
      const { type, text, files } = transfer

      if (type === 'files') {
         for (const file of files) {
            const reader = new FileReader()
            const [mime] = file.type.split('/')
            if (mime !== 'image') continue

            reader.addEventListener('load', () => {
               editor.command(insertImage, reader.result, target)
            })

            reader.readAsDataURL(file)
         }
         return
      }

      if (type === 'text') {
         if (!isUrl(text)) return next()
         if (!isImage(text)) return next()
         console.log(text, editor)
         editor.command(insertImage, text, target)
         return
      }

      return next()
   }

   return ({
      [options.handlerType]: (event: Event, editor: Editor, next: any) => {
         onDropOrPaste(event, editor, next)
      }
   })
}
