!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),u=r(a),o=n(2),i=r(o),l=n(4),c=r(l),s=n(14),d=r(s);new u["default"]({el:"body",data:d["default"],ready:function(){this.progress=!1},components:{menu:i["default"],tool:c["default"]}})},function(e,t){e.exports=window.Vue},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),u=r(a);t["default"]={data:function(){return u["default"]},template:"#menu"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={items:[{name:"Home",url:"#"},{name:"Data URL Generator",url:"#data-url-generator"},{name:"Unicode Generator",url:"#unicode-generator"},{name:"HTML Special Chars",url:"#html-special-chars"}]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),u=r(a),o=n(7),i=r(o),l=n(9),c=r(l),s=n(11),d=r(s),f=n(13),h=r(f);t["default"]={data:function(){return h["default"]},template:"#tool",components:{home:u["default"],"data-url-generator":i["default"],"unicode-generator":c["default"],"html-special-chars":d["default"]},ready:function(){this.bind(),this.change()},beforeDestory:function(){this.unbind()},methods:{change:function(e){var t=window.location.hash.replace(/^#/,"")||"home",n=this.tools[t];n&&t!==this.currentView&&(this.currentView=t,this.$root.subtitle=n,e&&this.triggerClick())},triggerClick:function(){var e=window.Event,t=void 0;e&&(t=document.body.querySelector(".mdl-layout__obfuscator"),t&&t.className.indexOf("is-visible")>-1&&t.dispatchEvent(new e("click")))},bind:function(){window.addEventListener("hashchange",this.change,!1)},unbind:function(e){window.removeEventListener("hashchange",this.change,!1)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),u=r(a);t["default"]={data:function(){return u["default"]},template:"#home"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={tools:[{name:"Data URL Generator",description:"A simple tool for generating Data URLs.",url:"#data-url-generator"},{name:"Unicode Generator",description:"A simple tool for generating unicode.",url:"#unicode-generator"},{name:"HTML Special Chars",description:"A simple tool for espacing HTML special chars.",url:"#html-special-chars"}]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),u=r(a);t["default"]={data:function(){return u["default"]},template:"#data-url-generator",methods:{read:function(e,t){var n=void 0;e?(n=new FileReader,n.onload=function(e){t(e.target.result)},n.readAsDataURL(e)):t()},change:function(e){var t=this,n=e.target,r=n.files;this.read(r&&r[0],function(e){t.dataURL=e,n.value=""})},dragover:function(e){e.preventDefault()},drop:function(e){var t=this,n=e.dataTransfer.files;e.preventDefault(),this.read(n&&n[0],function(e){t.dataURL=e})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={dataURL:""}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),u=r(a);t["default"]={data:function(){return u["default"]},computed:{unicode:function(){return this.parse(this.content)}},template:"#unicode-generator",methods:{parse:function(e){for(var t=e.length,n=[],r=0;t>r;)n.push(this.format(e.charCodeAt(r++).toString(16)));return n.join("")},format:function(e){var t={0:"\\u",1:"\\u0",2:"\\u00",3:"\\u000"};return t[Math.max(0,4-e.length)]+e.toUpperCase()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={content:""}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),u=r(a);t["default"]={data:function(){return u["default"]},computed:{result:function(){return this.espace(this.source)}},template:"#html-special-chars",methods:{espace:function(e){var t=this;return e.replace(this.regexp,function(e){return t.chars[e]})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={source:"",regexp:/[&'"<>]/g,chars:{"&":"&amp;","'":"&#039;",'"':"&quot;","<":"&lt;",">":"&gt;"}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={currentView:"",tools:{home:"Home","data-url-generator":"Data URL Generator","unicode-generator":"Unicode Generator","html-special-chars":"HTML Special Chars"}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={title:"Tools",subtitle:"Tools",progress:!0,year:(new Date).getFullYear(),links:[{name:"GitHub",url:"https://github.com/fengyuanchen/tool"},{name:"About",url:"http://chenfengyuan.com"}]}}]);