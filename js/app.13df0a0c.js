(function(){"use strict";var e={2002:function(e,t,n){var o=n(9963),i=n(6252);function r(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var u=n(3744);const a={},l=(0,u.Z)(a,[["render",r]]);var d=l,c=n(2201),s=n(3577);const p={class:"home"},f=(0,i._)("h1",null,"My Recipes",-1),g={class:"recipes"},v=(0,i._)("button",null,"View Recipe",-1),h={key:0,class:"add-recipe-popup"},m={class:"popup-content"},w=(0,i._)("h2",null,"Add new Todo",-1),b={class:"group"},y=(0,i._)("label",null,"Title",-1),k={class:"group"},_=(0,i._)("label",null,"Description",-1),R={class:"group"},A=(0,i._)("label",null,"Ingredients",-1),C=["onUpdate:modelValue"],O={class:"group"},N=(0,i._)("label",null,"Method",-1),D=["onClick"],E=(0,i._)("button",{type:"submit"},"Add Recipe",-1);function P(e,t,n,r,u,a){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",p,[f,(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>r.togglePopup&&r.togglePopup(...e))},"Add new Recipe"),(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.$store.state.recipes,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"card",key:e.slug},[(0,i._)("h2",null,(0,s.zw)(e.title),1),(0,i._)("p",null,(0,s.zw)(e.description),1),(0,i.Wm)(l,{to:`/recipe/${e.slug}`},{default:(0,i.w5)((()=>[v])),_:2},1032,["to"])])))),128))]),r.popupOpen?((0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",m,[w,(0,i._)("form",{onSubmit:t[6]||(t[6]=(0,o.iM)(((...e)=>r.addNewRecipe&&r.addNewRecipe(...e)),["prevent"]))},[(0,i._)("div",b,[y,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.newRecipe.title=e)},null,512),[[o.nr,r.newRecipe.title]])]),(0,i._)("div",k,[_,(0,i.wy)((0,i._)("textarea",{onUpdate:"modelValue","onUpdate:modelValue":t[2]||(t[2]=e=>r.newRecipe.description=e)},null,512),[[o.nr,r.newRecipe.description]])]),(0,i._)("div",R,[A,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.newRecipe.ingredientRows,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"ingredient",key:e},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t=>r.newRecipe.ingredients[e-1]=t},null,8,C),[[o.nr,r.newRecipe.ingredients[e-1]]])])))),128)),(0,i._)("button",{type:"button",onClick:t[3]||(t[3]=(...e)=>r.addNewIngredient&&r.addNewIngredient(...e))},"Add Ingredient")]),(0,i._)("div",O,[N,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.newRecipe.methodRows,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"method",key:e},[(0,i._)("textarea",{onClick:r.newRecipe.methodRows[e-1]},null,8,D)])))),128)),(0,i._)("button",{type:"button",onClick:t[4]||(t[4]=(...e)=>r.addNewStep&&r.addNewStep(...e))},"Add Step")]),E,(0,i._)("button",{type:"button",onClick:t[5]||(t[5]=(...e)=>r.togglePopup&&r.togglePopup(...e))},"Close")],32)])])):(0,i.kq)("",!0)])}var S=n(2262),j=n(3907),T={name:"HomeView",setup(){const e=(0,S.iH)({title:"",description:"",ingredients:[],method:[],ingredientRows:"",methodRows:""}),t=(0,S.iH)(!1),n=(0,j.oR)(),o=()=>{t.value=!t.value},i=()=>{e.value.ingredientRows++},r=()=>{e.value.methodRows++},u=()=>{e.value.slug=e.value.title.toLowerCase().replace(/\s/g,"-"),e.value.slug?(n.commit("ADD_RECIPE",{...e.value}),e.value={title:"",description:"",ingredients:[],method:[],ingredientRows:1,methodRows:1},o()):alert("please enter a title")};return{newRecipe:e,addNewRecipe:u,togglePopup:o,popupOpen:t,addNewStep:r,addNewIngredient:i}}};const x=(0,u.Z)(T,[["render",P]]);var H=x;const I=[{path:"/",name:"home",component:H},{path:"/recipe/:slug",name:"Recipe",component:()=>n.e(386).then(n.bind(n,1386))}],V=(0,c.p7)({history:(0,c.PO)("/vue-pages/"),routes:I});var L=V,M=(n(7658),(0,j.MT)({state:{recipes:[{slug:"katsu-curry",title:"Katsu Curry",description:"A delicious curry made with chicken, potatoes, and a special sauce",ingredients:["1 tablespoon olive oil","1 onion, chopped","2 cloves garlic, chopped","1 tablespoon curry powder"],method:["Heat oil in a large skillet over medium heat.","Add onion and garlic and cook, stirring often, until softened, about 5 minutes.","Add curry powder and cook, stirring, until fragrant, about 1 minute.","Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes."]},{slug:"ramen-noodle-soup",title:"Ramen noodle soup",description:"A delicious curry made with chicken, potatoes, and a special sauce",ingredients:["1 tablespoon olive oil","1 onion, chopped","2 cloves garlic, chopped","1 tablespoon curry powder"],method:["Heat oil in a large skillet over medium heat.","Add onion and garlic and cook, stirring often, until softened, about 5 minutes.","Add curry powder and cook, stirring, until fragrant, about 1 minute.","Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes."]}]},mutations:{ADD_RECIPE(e,t){e.recipes.push(t)}}}));(0,o.ri)(d).use(M).use(L).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||u>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,r<u&&(u=r));if(a){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".f8f2ec09.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".e2b904d7.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue:";n.l=function(o,i,r,u){if(e[o])e[o].push(i);else{var a,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var s=d[c];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==t+r){a=s;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=o),e[o]=[i];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(f);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-pages/"}(),function(){var e=function(e,t,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=a,i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){i=u[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var u=n.miniCssF(o),a=n.p+u;if(t(u,a))return i();e(o,a,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={386:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var u=n.p+n.u(t),a=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",a.name="ChunkLoadError",a.type=r,a.request=u,i[1](a)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,u=o[0],a=o[1],l=o[2],d=0;if(u.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(o);d<u.length;d++)r=u[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkvue"]=self["webpackChunkvue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2002)}));o=n.O(o)})();
//# sourceMappingURL=app.13df0a0c.js.map