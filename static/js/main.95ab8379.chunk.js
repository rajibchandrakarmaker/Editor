(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),o=n(29),r=n.n(o),l=(n(94),n(21)),s=n(22),c=n(25),u=n(23),d=n(24),m=n(12),p=n(11),f=n(2),b=n(13),k=n(14);function v(){var e=Object(b.a)(["\n      display: block;\n      max-width: 100%;\n      max-height: 20em;\n      box-shadow: ",";\n   "]);return v=function(){return e},e}var g=n(83),h=n(39),y=n(84),O=n.n(y),x=n(85);function L(e){var t=e.insertImage,n=function(e,n,i){var a=Object(p.b)(e,n);if(!a&&"drop"===e.type)return i();var o=Object(p.c)(e),r=o.type,l=o.text,s=o.files;if("files"!==r)return"text"===r&&O()(l)&&function(e){var t=e.slice(2+(e.lastIndexOf(".")-1>>>0)).toLowerCase();return!!x.find(function(e){return e===t})}(l)?(console.log(l,n),void n.command(t,l,a)):i();var c=!0,u=!1,d=void 0;try{for(var m,f=function(){var e=m.value,i=new FileReader,o=e.type.split("/");if("image"!==Object(h.a)(o,1)[0])return"continue";i.addEventListener("load",function(){n.command(t,i.result,a)}),i.readAsDataURL(e)},b=s[Symbol.iterator]();!(c=(m=b.next()).done);c=!0)f()}catch(k){u=!0,d=k}finally{try{c||null==b.return||b.return()}finally{if(u)throw d}}};return Object(g.a)({},e.handlerType,function(e,t,i){n(e,t,i)})}var B=n(86),j=n(9),C=Object(j.isKeyHotkey)("mod+b"),w=Object(j.isKeyHotkey)("mod+i"),E=Object(j.isKeyHotkey)("mod+u"),I=Object(j.isKeyHotkey)("mod+`"),S=Object(j.isKeyHotkey)("tab"),N=Object(j.isKeyHotkey)("shift+tab"),J=Object(j.isKeyHotkey)("mod+s");function V(){var e=Object(b.a)(["\n  font-size : 12px;\n  display: block;\n  width: 100%;\n  top: 14px;\n  position: fixed;\n  right: 0;\n  left: 348px;\n"]);return V=function(){return e},e}var D=Object(k.a)("span")(V());var M=n(88);function _(){var e=Object(b.a)(["\n  cursor: pointer;\n  color: ",";\n"]);return _=function(){return e},e}function A(){var e=Object(b.a)(["\n  position: fixed;\n  padding: 10px 18px 0px;\n  left: -90px;\n  right: 0;\n  border-bottom: 2px solid rgb(238, 238, 238);\n  z-index: 100;\n  margin-bottom: 20px;\n  width: 100%;\n  display: block;\n  height: 30px;\n"]);return A=function(){return e},e}function H(){var e=Object(b.a)(["\n  vertical-align: bottom;\n  font-size: 18px;\n"]);return H=function(){return e},e}function K(){var e=Object(b.a)(["\n  & > * {\n    display: inline-block;\n  }\n  & > * + * {\n    margin-left: 13px;\n  }\n"]);return K=function(){return e},e}function R(){var e=Object(b.a)([""]);return R=function(){return e},e}var T=Object(k.a)("input")(R()),U=Object(k.a)("div")(K()),F=Object(k.a)(function(e){var t=e.className,n=Object(M.a)(e,["className"]);return a.a.createElement("span",Object.assign({className:"material-icons ".concat(t)},n))})(H()),z=Object(k.a)(U)(A()),q=Object(k.a)("span")(_(),function(e){return e.reversed?e.active?"white":"#aaa":e.active?"black":"#ccc"}),P="paragraph",W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).editor=null,n.insertImage=null,n.hasMark=function(e){return n.props.context.state.value.activeMarks.some(function(t){return t.type===e})},n.hasBlock=function(e){return n.props.context.state.value.blocks.some(function(t){return t.type===e})},n.hasListTypeParent=function(e,t){return e.getClosest(t.key,function(e){return"bulleted-list"===e.type||"numbered-list"===e.type})},n.renderBlocksLimitInputBox=function(){return n.props.isLimit?a.a.createElement("span",{className:"limit-box"},a.a.createElement("label",null,"Maximum Blocks:",a.a.createElement(T,{type:"number",min:1,value:n.props.blocksLimit,onChange:n.onBlocksLimitChange,style:{position:"absolute",width:"55px",height:"20px",padding:"10px",marginLeft:"5px"}}))):null},n.renderMarkButton=function(e,t,i){var o=n.hasMark(t);return a.a.createElement(q,{active:o,title:e,onMouseDown:function(e){return n.onClickMark(e,t)}},a.a.createElement(F,null,i))},n.renderBlockButton=function(e,t,i){var o=n.hasBlock(t);if(["numbered-list","bulleted-list"].includes(t)){var r=n.props.context.state.value,l=r.blocks.first()?r.document.getParent(r.blocks.first().key):null;o=n.hasBlock("list-item")&&l&&l.type===t}return a.a.createElement(q,{active:o,title:e,onMouseDown:function(e){return n.onClickBlock(e,t)}},a.a.createElement(F,null,i))},n.onFileSelect=function(){var e=!0,t=!1,i=void 0;try{for(var a,o=function(){var e=a.value,t=new FileReader,i=e.type.split("/");if("image"!==Object(h.a)(i,1)[0])return"continue";t.addEventListener("load",function(){n.editor.command(n.insertImage,t.result)}),t.readAsDataURL(e)},r=n.refs.fileInput.files[Symbol.iterator]();!(e=(a=r.next()).done);e=!0)o()}catch(l){t=!0,i=l}finally{try{e||null==r.return||r.return()}finally{if(t)throw i}}},n.onClickLimit=function(e){n.props.context.setIsBlocksLimit(e.target.checked)},n.onBlocksLimitChange=function(e){n.props.context.setBlocksLimit(e.target.value)},n.onClickSave=function(e){if(n.props.documentIsValid){e.preventDefault();var t=n.props.context.state.value.toJSON(),i=JSON.stringify({blocksLimit:n.props.blocksLimit,isLimit:n.props.isLimit,value:t});localStorage.setItem("content",i),n.props.context.updateContent({blocksLimit:n.props.blocksLimit,isLimit:n.props.isLimit,value:t})}},n.onClickRevertChanges=function(e){document.getElementById("twiskerEditor").classList.toggle("block-limit-active"),e.preventDefault(),n.props.context.reloadContent()},n.onClickImage=function(e){e.preventDefault();var t=window.prompt("Enter the URL of the image:");t&&(console.log(t),n.editor.command(n.insertImage,t))},n.onClickUpload=function(e){e.preventDefault(),n.refs.fileInput.click()},n.onClickMark=function(e,t){e.preventDefault(),console.log(Object(m.a)(Object(m.a)(n))),n.editor.toggleMark(t)},n.onClickBlock=function(e,t){e.preventDefault();var i=Object(m.a)(Object(m.a)(n)).editor,a=i.value,o=a.document;if("image"!==i.value.focusBlock.type)if("bulleted-list"!==t&&"numbered-list"!==t){var r=n.hasBlock(t);if(n.hasBlock("list-item"))for(var l=o.getClosest(i.value.focusBlock.key,function(e){return"bulleted-list"===e.type||"numbered-list"===e.type});l;){var s=l.type;i.setBlocks(r?P:t).unwrapBlock(s),l=o.getClosest(l.key,function(e){return"bulleted-list"===e.type||"numbered-list"===e.type})}else i.setBlocks(r?P:t)}else{var c=n.hasBlock("list-item"),u=a.blocks.some(function(e){return!!o.getClosest(e.key,function(e){return e.type===t})});if(c&&u){var d=o.getClosest(i.value.focusBlock.key,function(e){return"bulleted-list"===e.type||"numbered-list"===e.type}),p=d.type;i.setBlocks(n.hasListTypeParent(o,d)?"list-item":P).unwrapBlock(p)}else c?i.unwrapBlock("bulleted-list"===t?"numbered-list":"bulleted-list").setBlocks("list-item").wrapBlock(t):i.setBlocks("list-item").wrapBlock(t)}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.editor=this.props.editor,this.insertImage=this.props.context.insertImage}},{key:"render",value:function(){return a.a.createElement(z,{className:"toolbar"},this.renderMarkButton("Bold","bold","format_bold"),this.renderMarkButton("Italic","italic","format_italic"),this.renderMarkButton("Underlined","underlined","format_underlined"),this.renderMarkButton("Code","code","code"),this.renderBlockButton("Heading One","heading-one","looks_one"),this.renderBlockButton("Heading Two","heading-two","looks_two"),this.renderBlockButton("Block Quote","block-quote","format_quote"),this.renderBlockButton("Numbered List","numbered-list","format_list_numbered"),this.renderBlockButton("Bulleted List","bulleted-list","format_list_bulleted"),a.a.createElement(q,{onMouseDown:this.onClickUpload,active:!0},a.a.createElement(F,null,"cloud_upload"),a.a.createElement("input",{ref:"fileInput",type:"file",id:"file-input",onChange:this.onFileSelect,accept:"image/*",multiple:!0})),a.a.createElement(q,{onMouseDown:this.onClickImage,active:!0},a.a.createElement(F,null,"image")),a.a.createElement(q,{active:this.props.documentIsChanged&&this.props.documentIsValid,onMouseDown:this.onClickSave},a.a.createElement(F,null,"save")),a.a.createElement(q,{active:this.props.documentIsChanged,onMouseDown:this.onClickRevertChanges},a.a.createElement(F,null,"cancel")),a.a.createElement("span",null,a.a.createElement("label",null,"Blocks Limit:",a.a.createElement(T,{type:"checkbox",active:this.props.isLimit,onChange:this.onClickLimit,checked:this.props.isLimit,onMouseDown:this.onClickRevertChanges,style:{height:"13px",width:"20px",marginLeft:"5px",position:"relative",top:"2px"}}))),this.renderBlocksLimitInputBox())}}]),t}(i.Component),Q={document:{last:{type:"paragraph"},normalize:function(e,t){var n=t.code,i=t.node;switch(n){case"last_child_type_invalid":var a=f.a.create("paragraph");return e.insertNodeByKey(i.key,i.nodes.size,a)}}},blocks:{image:{isVoid:!0}}},Y=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).editor={},n.plugins=[],n.reloadContent=function(){n.setState({value:f.m.fromJSON(n.state.oldJSONValue.value),newJSONValue:n.state.oldJSONValue,documentIsValid:!0,isLimit:n.state.oldJSONValue.isLimit,blocksLimit:n.state.oldJSONValue.blocksLimit,documentIsChanged:!1})},n.updateContent=function(e){n.setState({oldJSONValue:e,newJSONValue:e,documentIsChanged:!1})},n.setIsBlocksLimit=function(e){var t=Object.assign({},n.state.oldJSONValue,{isLimit:e}),i=JSON.stringify(t)!==JSON.stringify(n.state.oldJSONValue),a=!(e&&n.editor.getBlocksCount(t.value.document.nodes)>n.state.blocksLimit);n.setState({isLimit:e,newJSONValue:t,documentIsChanged:i,documentIsValid:a})},n.setBlocksLimit=function(e){var t=Object.assign({},n.state.oldJSONValue,{blocksLimit:e}),i=JSON.stringify(t)!==JSON.stringify(n.state.oldJSONValue),a=!(n.state.isLimit&&n.editor.getBlocksCount(t.value.document.nodes)>e);n.setState({blocksLimit:e,newJSONValue:t,documentIsChanged:i,documentIsValid:a})},n.insertImage=function(e,t,n){n&&e.select(n),e.insertBlock({type:"image",data:{src:t}})},n.ref=function(e){n.editor=e,n.setState({editor:e})},n.onChange=function(e){var t=e.value,i={blocksLimit:n.state.blocksLimit,isLimit:n.state.isLimit,value:t.toJSON()},a=JSON.stringify(i)!==JSON.stringify(n.state.oldJSONValue),o=!(n.state.isLimit&&n.editor.getBlocksCount(t.toJSON().document.nodes)>n.state.blocksLimit);n.setState({value:t,documentIsChanged:a,newJSONValue:i,documentIsValid:o})};var i=localStorage.getItem("content");if(i)try{i=JSON.parse(i)}catch(s){console.log("local storage value Corrupted "),i=null}var o=i||B,r=f.m.fromJSON(o.value);return n.state={oldJSONValue:o,newJSONValue:o,value:r,isLimit:o.isLimit,blocksLimit:o.blocksLimit,documentIsChanged:!1,documentIsValid:!0,editor:{}},n.plugins=[function(e){var t=function(e,t){for(var n=0,i=e.getClosest(t.key,function(e){return"bulleted-list"===e.type||"numbered-list"===e.type});i&&n<3;)n++,i=e.getClosest(i.key,function(e){return"bulleted-list"===e.type||"numbered-list"===e.type});return n};return{onKeyDown:function(n,i,a){var o;if(C(n))o="bold";else if(w(n))o="italic";else if(E(n))o="underlined";else{if(!I(n)){if(S(n)||N(n)){if(n.preventDefault(),"list-item"===i.value.focusBlock.type){var r=i.value.document,l=r.getClosest(i.value.focusBlock.key,function(e){return"bulleted-list"===e.type||"numbered-list"===e.type}).type;S(n)&&t(r,i.value.focusBlock)<3?i.wrapBlock(l):N(n)&&t(r,i.value.focusBlock)>1&&i.unwrapBlock(l)}return}if(J(n)){if(n.preventDefault(),!e.context.state.documentIsValid)return;var s=e.context.state.value.toJSON(),c=JSON.stringify({blocksLimit:e.context.state.blocksLimit,isLimit:e.context.state.isLimit,value:s});return localStorage.setItem("content",c),void e.context.updateContent({blocksLimit:e.context.state.blocksLimit,isLimit:e.context.state.isLimit,value:s})}return a()}o="code"}n.preventDefault(),i.toggleMark(o)}}}({context:Object(m.a)(Object(m.a)(n))}),function(e){var t=Object(k.a)("img")(v(),function(e){return e.selected?"0 0 0 2px red;":"none"});return{renderNode:function(e,n,i){var o=e.attributes,r=e.children,l=e.node,s=e.isFocused;switch(l.type){case"title":return a.a.createElement("h2",Object.assign({style:{textAlign:"center"}},o),r);case"paragraph":return a.a.createElement("p",Object.assign({style:{textAlign:"left"}},o),r);case"block-quote":return a.a.createElement("blockquote",Object.assign({style:{textAlign:"left"}},o),r);case"bulleted-list":return a.a.createElement("ul",Object.assign({style:{textAlign:"left"}},o),r);case"heading-one":return a.a.createElement("h1",Object.assign({style:{textAlign:"left"}},o),r);case"heading-two":return a.a.createElement("h2",Object.assign({style:{textAlign:"left"}},o),r);case"list-item":return a.a.createElement("li",Object.assign({style:{textAlign:"left"}},o),r);case"numbered-list":return a.a.createElement("ol",Object.assign({style:{textAlign:"left"}},o),r);case"image":var c=l.data.get("src");return a.a.createElement(t,Object.assign({src:c,selected:s},o));default:return i()}}}}(),{renderMark:function(e,t,n){var i=e.children,o=e.mark,r=e.attributes;switch(o.type){case"bold":return a.a.createElement("strong",r,i);case"code":return a.a.createElement("code",r,i);case"italic":return a.a.createElement("em",r,i);case"underlined":return a.a.createElement("u",r,i);default:return n()}}},L({handlerType:"onDrop",insertImage:n.insertImage}),L({handlerType:"onPaste",insertImage:n.insertImage}),function(e){var t=function(e){return e.reduce(function(e,t){return e+("block"===t.object?1:0)},0)};return{renderEditor:function(e,n,i){var o=i(),r=t(e.value.document.nodes);return n.getBlocksCount=t,a.a.createElement("div",null,a.a.createElement(D,null,"Total Blocks: ",r),a.a.createElement("div",null,o))}}}()],n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(W,{editor:this.state.editor,context:this,isLimit:this.state.isLimit,blocksLimit:this.state.blocksLimit,documentIsChanged:this.state.documentIsChanged,documentIsValid:this.state.documentIsValid}),a.a.createElement("div",{style:{top:"40px",position:"relative",overflowY:"auto",maxHeight:"calc(100vh - 60px)",background:"white"},className:"content-body"},a.a.createElement(p.a,{style:{padding:"20px",minHeight:"300px"},spellCheck:!0,autoFocus:!0,plugins:this.plugins,placeholder:"Enter some rich text...",ref:this.ref,schema:Q,value:this.state.value,onChange:this.onChange})))}}]),t}(i.Component),$=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"twiskerEditor"},a.a.createElement(Y,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=document.getElementById("root");null!=G&&r.a.render(a.a.createElement($,null),G),navigator.serviceWorker&&null!=navigator.serviceWorker.ready&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e){e.exports={blocksLimit:1,isLimit:!1,value:{document:{nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",leaves:[{text:"Write your content here"}]}]}]}}}},89:function(e,t,n){e.exports=n(201)},94:function(e,t,n){}},[[89,2,1]]]);
//# sourceMappingURL=main.95ab8379.chunk.js.map