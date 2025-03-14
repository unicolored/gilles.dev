import{h as ie}from"./chunk-YVYQ67W6.js";import{$ as Q,Bb as ee,Cb as ne,Ha as Kt,Na as qt,Oa as P,Q as ct,R as Vt,Ta as ut,Ua as Qt,Va as Jt,W as Gt,cc as ae,gb as Zt,la as Xt,tb as te}from"./chunk-GBRLF56M.js";function xn(t,e,n){return(e=kn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?re(Object(n),!0).forEach(function(a){xn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function An(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function kn(t){var e=An(t,"string");return typeof e=="symbol"?e:e+""}var se=()=>{},Dt={},Te={},Me=null,De={mark:se,measure:se};try{typeof window<"u"&&(Dt=window),typeof document<"u"&&(Te=document),typeof MutationObserver<"u"&&(Me=MutationObserver),typeof performance<"u"&&(De=performance)}catch{}var{userAgent:oe=""}=Dt.navigator||{},N=Dt,p=Te,le=Me,J=De,Mi=!!N.document,O=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",_e=~oe.indexOf("MSIE")||~oe.indexOf("Trident/"),Cn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ze={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},In={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Le=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],g="classic",it="duotone",Sn="sharp",On="sharp-duotone",Re=[g,it,Sn,On],En={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Pn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Fn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Nn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Tn=["fak","fa-kit","fakd","fa-kit-duotone"],fe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mn=["kit"],Dn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},_n=["fak","fakd"],zn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ce={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Rn=["fak","fa-kit","fakd","fa-kit-duotone"],jn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Hn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},yt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Yn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],bt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ln,...Yn],$n=["solid","regular","light","thin","duotone","brands"],je=[1,2,3,4,5,6,7,8,9,10],Un=je.concat([11,12,13,14,15,16,17,18,19,20]),Bn=[...Object.keys(Hn),...$n,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY].concat(je.map(t=>"".concat(t,"x"))).concat(Un.map(t=>"w-".concat(t))),Vn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I="___FONT_AWESOME___",vt=16,We="fa",He="svg-inline--fa",z="data-fa-i2svg",xt="data-fa-pseudo-element",Gn="data-fa-pseudo-element-pending",_t="data-prefix",zt="data-icon",ue="fontawesome-i2svg",Xn="async",Kn=["HTML","HEAD","STYLE","SCRIPT"],Ye=(()=>{try{return!0}catch{return!1}})();function K(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[g]}})}var $e=o({},ze);$e[g]=o(o(o(o({},{"fa-duotone":"duotone"}),ze[g]),fe.kit),fe["kit-duotone"]);var qn=K($e),At=o({},Nn);At[g]=o(o(o(o({},{duotone:"fad"}),At[g]),ce.kit),ce["kit-duotone"]);var de=K(At),kt=o({},yt);kt[g]=o(o({},kt[g]),zn.kit);var Lt=K(kt),Ct=o({},Wn);Ct[g]=o(o({},Ct[g]),Dn.kit);var Di=K(Ct),Qn=Cn,Ue="fa-layers-text",Jn=wn,Zn=o({},En),_i=K(Zn),ta=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt=In,ea=[...Mn,...Bn],B=N.FontAwesomeConfig||{};function na(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function aa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,i=aa(na(n));i!=null&&(B[a]=i)});var Be={styleDefault:"solid",familyDefault:g,cssPrefix:We,replacementClass:He,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B.familyPrefix&&(B.cssPrefix=B.familyPrefix);var Y=o(o({},Be),B);Y.autoReplaceSvg||(Y.observeMutations=!1);var f={};Object.keys(Be).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){Y[t]=e,V.forEach(n=>n(f))},get:function(){return Y[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){Y.cssPrefix=t,V.forEach(e=>e(f))},get:function(){return Y.cssPrefix}});N.FontAwesomeConfig=f;var V=[];function ia(t){return V.push(t),()=>{V.splice(V.indexOf(t),1)}}var F=vt,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ra(t){if(!t||!O)return;let e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=p.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let r=n[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return p.head.insertBefore(e,a),t}var sa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function G(){let t=12,e="";for(;t-- >0;)e+=sa[Math.random()*62|0];return e}function $(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rt(t){return t.classList?$(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ve(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ve(t[n]),'" '),"").trim()}function rt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function jt(t){return t.size!==k.size||t.x!==k.x||t.y!==k.y||t.rotate!==k.rotate||t.flipX||t.flipY}function la(t){let{transform:e,containerWidth:n,iconWidth:a}=t,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(r," ").concat(s," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:u,path:c}}function fa(t){let{transform:e,width:n=vt,height:a=vt,startCentered:i=!1}=t,r="";return i&&_e?r+="translate(".concat(e.x/F-n/2,"em, ").concat(e.y/F-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):r+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),r+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var ca=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ge(){let t=We,e=He,n=f.cssPrefix,a=f.replacementClass,i=ca;if(n!==t||a!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return i}var me=!1;function mt(){f.autoAddCss&&!me&&(ra(Ge()),me=!0)}var ua={mixout(){return{dom:{css:Ge,insertCss:mt}}},hooks(){return{beforeDOMElementCreation(){mt()},beforeI2svg(){mt()}}}},S=N||{};S[I]||(S[I]={});S[I].styles||(S[I].styles={});S[I].hooks||(S[I].hooks={});S[I].shims||(S[I].shims=[]);var C=S[I],Xe=[],Ke=function(){p.removeEventListener("DOMContentLoaded",Ke),nt=1,Xe.map(t=>t())},nt=!1;O&&(nt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),nt||p.addEventListener("DOMContentLoaded",Ke));function da(t){O&&(nt?setTimeout(t,0):Xe.push(t))}function q(t){let{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ve(t):"<".concat(e," ").concat(oa(n),">").concat(a.map(q).join(""),"</").concat(e,">")}function he(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ma=function(e,n){return function(a,i,r,s){return e.call(n,a,i,r,s)}},ht=function(e,n,a,i){var r=Object.keys(e),s=r.length,l=i!==void 0?ma(n,i):n,u,c,d;for(a===void 0?(u=1,d=e[r[0]]):(u=0,d=a);u<s;u++)c=r[u],d=l(d,e[c],c,e);return d};function ha(t){let e=[],n=0,a=t.length;for(;n<a;){let i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){let r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function wt(t){let e=ha(t);return e.length===1?e[0].toString(16):null}function pa(t,e){let n=t.length,a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function pe(t){return Object.keys(t).reduce((e,n)=>{let a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function It(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,i=pe(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,pe(e)):C.styles[t]=o(o({},C.styles[t]||{}),i),t==="fas"&&It("fa",e)}var{styles:X,shims:ga}=C,qe=Object.keys(Lt),ya=qe.reduce((t,e)=>(t[e]=Object.keys(Lt[e]),t),{}),Wt=null,Qe={},Je={},Ze={},tn={},en={};function ba(t){return~ea.indexOf(t)}function va(t,e){let n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!ba(i)?i:null}var nn=()=>{let t=a=>ht(X,(i,r,s)=>(i[s]=ht(r,a,{}),i),{});Qe=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),Je=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),en=t((a,i,r)=>{let s=i[2];return a[r]=r,s.forEach(l=>{a[l]=r}),a});let e="far"in X||f.autoFetchSvg,n=ht(ga,(a,i)=>{let r=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof r=="string"&&(a.names[r]={prefix:s,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ze=n.names,tn=n.unicodes,Wt=st(f.styleDefault,{family:f.familyDefault})};ia(t=>{Wt=st(t.styleDefault,{family:f.familyDefault})});nn();function Ht(t,e){return(Qe[t]||{})[e]}function xa(t,e){return(Je[t]||{})[e]}function _(t,e){return(en[t]||{})[e]}function an(t){return Ze[t]||{prefix:null,iconName:null}}function Aa(t){let e=tn[t],n=Ht("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function T(){return Wt}var rn=()=>({prefix:null,iconName:null,rest:[]});function ka(t){let e=g,n=qe.reduce((a,i)=>(a[i]="".concat(f.cssPrefix,"-").concat(i),a),{});return Re.forEach(a=>{(t.includes(n[a])||t.some(i=>ya[a].includes(i)))&&(e=a)}),e}function st(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=g}=e,a=qn[n][t];if(n===it&&!t)return"fad";let i=de[n][t]||de[n][a],r=t in C.styles?t:null;return i||r||null}function Ca(t){let e=[],n=null;return t.forEach(a=>{let i=va(f.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function ge(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ot(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a=null,i=bt.concat(Rn),r=ge(t.filter(h=>i.includes(h))),s=ge(t.filter(h=>!bt.includes(h))),l=r.filter(h=>(a=h,!Le.includes(h))),[u=null]=l,c=ka(r),d=o(o({},Ca(s)),{},{prefix:st(u,{family:c})});return o(o(o({},d),Oa({values:t,family:c,styles:X,config:f,canonical:d,givenPrefix:a})),wa(n,a,d))}function wa(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};let r=e==="fa"?an(i):{},s=_(a,i);return i=r.iconName||s||i,a=r.prefix||a,a==="far"&&!X.far&&X.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var Ia=Re.filter(t=>t!==g||t!==it),Sa=Object.keys(yt).filter(t=>t!==g).map(t=>Object.keys(yt[t])).flat();function Oa(t){let{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:s={}}=t,l=n===it,u=e.includes("fa-duotone")||e.includes("fad"),c=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||c||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ia.includes(n)&&(Object.keys(r).find(m=>Sa.includes(m))||s.autoFetchSvg)){let m=Fn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=_(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=T()||"fas"),a}var St=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=o(o({},this.definitions[r]||{}),i[r]),It(r,i[r]);let s=Lt[g][r];s&&It(s,i[r]),nn()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{let{prefix:r,iconName:s,icon:l}=a[i],u=l[2];e[r]||(e[r]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[r][c]=l)}),e[r][s]=l}),e}},ye=[],W={},H={},Ea=Object.keys(H);function Pa(t,e){let{mixoutsTo:n}=e;return ye=t,W={},Object.keys(H).forEach(a=>{Ea.indexOf(a)===-1&&delete H[a]}),ye.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(s=>{n[r]||(n[r]={}),n[r][s]=i[r][s]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(s=>{W[s]||(W[s]=[]),W[s].push(r[s])})}a.provides&&a.provides(H)}),n}function Ot(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(W[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function L(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(W[t]||[]).forEach(r=>{r.apply(null,n)})}function M(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function Et(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||T();if(e)return e=_(n,e)||e,he(sn.definitions,n,e)||he(C.styles,n,e)}var sn=new St,Fa=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,L("noAuto")},Na={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(L("beforeI2svg",t),M("pseudoElements2svg",t),M("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,da(()=>{Ma({autoReplaceSvgRoot:e}),L("watch",t)})}},Ta={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=st(t[0]);return{prefix:n,iconName:_(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Qn))){let e=ot(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||T(),iconName:_(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=T();return{prefix:e,iconName:_(e,t)||t}}}},v={noAuto:Fa,config:f,dom:Na,parse:Ta,library:sn,findIconDefinition:Et,toHtml:q},Ma=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=p}=t;(Object.keys(C.styles).length>0||f.autoFetchSvg)&&O&&f.autoReplaceSvg&&v.dom.i2svg({node:e})};function lt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>q(n))}}),Object.defineProperty(t,"node",{get:function(){if(!O)return;let n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Da(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:s}=t;if(jt(s)&&n.found&&!a.found){let{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=rt(o(o({},r),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function _a(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t,s=r===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},i),{},{id:s}),children:a}]}]}function Yt(t){let{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:s,title:l,maskId:u,titleId:c,extra:d,watchable:h=!1}=t,{width:m,height:y}=n.found?n:e,E=_n.includes(a),D=[f.replacementClass,i?"".concat(f.cssPrefix,"-").concat(i):""].filter(j=>d.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(d.classes).join(" "),x={children:[],attributes:o(o({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:D,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})},w=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};h&&(x.attributes[z]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||G())},children:[l]}),delete x.attributes.title);let b=o(o({},x),{},{prefix:a,iconName:i,main:e,mask:n,maskId:u,transform:r,symbol:s,styles:o(o({},w),d.styles)}),{children:A,attributes:R}=n.found&&e.found?M("generateAbstractMask",b)||{children:[],attributes:{}}:M("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=A,b.attributes=R,s?_a(b):Da(b)}function be(t){let{content:e,width:n,height:a,transform:i,title:r,extra:s,watchable:l=!1}=t,u=o(o(o({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});l&&(u[z]="");let c=o({},s.styles);jt(i)&&(c.transform=fa({transform:i,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);let d=rt(c);d.length>0&&(u.style=d);let h=[];return h.push({tag:"span",attributes:u,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function za(t){let{content:e,title:n,extra:a}=t,i=o(o(o({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=rt(a.styles);r.length>0&&(i.style=r);let s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var{styles:pt}=C;function Pt(t){let e=t[0],n=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}var La={found:!1,width:512,height:512};function Ra(t,e){!Ye&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ft(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=T()),new Promise((a,i)=>{if(n==="fa"){let r=an(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&pt[e]&&pt[e][t]){let r=pt[e][t];return a(Pt(r))}Ra(t,e),a(o(o({},La),{},{icon:f.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var ve=()=>{},Nt=f.measurePerformance&&J&&J.mark&&J.measure?J:{mark:ve,measure:ve},U='FA "6.7.2"',ja=t=>(Nt.mark("".concat(U," ").concat(t," begins")),()=>on(t)),on=t=>{Nt.mark("".concat(U," ").concat(t," ends")),Nt.measure("".concat(U," ").concat(t),"".concat(U," ").concat(t," begins"),"".concat(U," ").concat(t," ends"))},$t={begin:ja,end:on},tt=()=>{};function xe(t){return typeof(t.getAttribute?t.getAttribute(z):null)=="string"}function Wa(t){let e=t.getAttribute?t.getAttribute(_t):null,n=t.getAttribute?t.getAttribute(zt):null;return e&&n}function Ha(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function Ya(){return f.autoReplaceSvg===!0?et.replace:et[f.autoReplaceSvg]||et.replace}function $a(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function Ua(t){return p.createElement(t)}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?$a:Ua}=e;if(typeof t=="string")return p.createTextNode(t);let a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(ln(r,{ceFn:n}))}),a}function Ba(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var et={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ln(n),e)}),e.getAttribute(z)===null&&f.keepOriginalSource){let n=p.createComment(Ba(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~Rt(e).indexOf(f.replacementClass))return et.replace(t);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((s,l)=>(l===f.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let i=n.map(r=>q(r)).join(`
`);e.setAttribute(z,""),e.innerHTML=i}};function Ae(t){t()}function fn(t,e){let n=typeof e=="function"?e:tt;if(t.length===0)n();else{let a=Ae;f.mutateApproach===Xn&&(a=N.requestAnimationFrame||Ae),a(()=>{let i=Ya(),r=$t.begin("mutate");t.map(i),r(),n()})}}var Ut=!1;function cn(){Ut=!0}function Tt(){Ut=!1}var at=null;function ke(t){if(!le||!f.observeMutations)return;let{treeCallback:e=tt,nodeCallback:n=tt,pseudoElementsCallback:a=tt,observeMutationsRoot:i=p}=t;at=new le(r=>{if(Ut)return;let s=T();$(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!xe(l.addedNodes[0])&&(f.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&f.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&xe(l.target)&&~ta.indexOf(l.attributeName))if(l.attributeName==="class"&&Wa(l.target)){let{prefix:u,iconName:c}=ot(Rt(l.target));l.target.setAttribute(_t,u||s),c&&l.target.setAttribute(zt,c)}else Ha(l.target)&&n(l.target)})}),O&&at.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Va(){at&&at.disconnect()}function Ga(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,i)=>{let r=i.split(":"),s=r[0],l=r.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Xa(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=ot(Rt(t));return i.prefix||(i.prefix=T()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=xa(i.prefix,t.innerText)||Ht(i.prefix,wt(t.innerText))),!i.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ka(t){let e=$(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||G()):(e["aria-hidden"]="true",e.focusable="false")),e}function qa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ce(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:i}=Xa(t),r=Ka(t),s=Ot("parseNodeAttributes",{},t),l=e.styleParser?Ga(t):[];return o({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},s)}var{styles:Qa}=C;function un(t){let e=f.autoReplaceSvg==="nest"?Ce(t,{styleParser:!1}):Ce(t);return~e.extra.classes.indexOf(Ue)?M("generateLayersText",t,e):M("generateSvgReplacementMutation",t,e)}function Ja(){return[...Tn,...bt]}function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();let n=p.documentElement.classList,a=d=>n.add("".concat(ue,"-").concat(d)),i=d=>n.remove("".concat(ue,"-").concat(d)),r=f.autoFetchSvg?Ja():Le.concat(Object.keys(Qa));r.includes("fa")||r.push("fa");let s=[".".concat(Ue,":not([").concat(z,"])")].concat(r.map(d=>".".concat(d,":not([").concat(z,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=$(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let u=$t.begin("onTree"),c=l.reduce((d,h)=>{try{let m=un(h);m&&d.push(m)}catch(m){Ye||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,h)=>{Promise.all(c).then(m=>{fn(m,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),h(m)})})}function Za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;un(t).then(n=>{n&&fn([n],e)})}function ti(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Et(e||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:Et(i||{})),t(a,o(o({},n),{},{mask:i}))}}var ei=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=k,symbol:a=!1,mask:i=null,maskId:r=null,title:s=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;let{prefix:h,iconName:m,icon:y}=t;return lt(o({type:"icon"},t),()=>(L("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(s?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(l||G()):(c["aria-hidden"]="true",c.focusable="false")),Yt({icons:{main:Pt(y),mask:i?Pt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:o(o({},k),n),symbol:a,title:s,maskId:r,titleId:l,extra:{attributes:c,styles:d,classes:u}})))},ni={mixout(){return{icon:ti(ei)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=we,t.nodeCallback=Za,t}}},provides(t){t.i2svg=function(e){let{node:n=p,callback:a=()=>{}}=e;return we(n,a)},t.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:i,titleId:r,prefix:s,transform:l,symbol:u,mask:c,maskId:d,extra:h}=n;return new Promise((m,y)=>{Promise.all([Ft(a,s),c.iconName?Ft(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[D,x]=E;m([e,Yt({icons:{main:D,mask:x},prefix:s,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:r,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:s}=e,l=rt(s);l.length>0&&(a.style=l);let u;return jt(r)&&(u=M("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:a}}}},ai={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return lt({type:"layer"},()=>{L("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ii={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return lt({type:"counter",content:t},()=>(L("beforeDOMElementCreation",{content:t,params:e}),za({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},ri={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=k,title:a=null,classes:i=[],attributes:r={},styles:s={}}=e;return lt({type:"text",content:t},()=>(L("beforeDOMElementCreation",{content:t,params:e}),be({content:t,transform:o(o({},k),n),title:a,extra:{attributes:r,styles:s,classes:["".concat(f.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:a,transform:i,extra:r}=n,s=null,l=null;if(_e){let u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,l=c.height/u}return f.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,be({content:e.innerHTML,width:s,height:l,transform:i,title:a,extra:r,watchable:!0})])}}},si=new RegExp('"',"ug"),Ie=[1105920,1112319],Se=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),Pn),Vn),jn),Mt=Object.keys(Se).reduce((t,e)=>(t[e.toLowerCase()]=Se[e],t),{}),oi=Object.keys(Mt).reduce((t,e)=>{let n=Mt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function li(t){let e=t.replace(si,""),n=pa(e,0),a=n>=Ie[0]&&n<=Ie[1],i=e.length===2?e[0]===e[1]:!1;return{value:wt(i?e[0]:e),isSecondary:a||i}}function fi(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(Mt[n]||{})[i]||oi[n]}function Oe(t,e){let n="".concat(Gn).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();let s=$(t.children).filter(m=>m.getAttribute(xt)===e)[0],l=N.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(Jn),d=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&h!=="none"&&h!==""){let m=l.getPropertyValue("content"),y=fi(u,d),{value:E,isSecondary:D}=li(m),x=c[0].startsWith("FontAwesome"),w=Ht(y,E),b=w;if(x){let A=Aa(E);A.iconName&&A.prefix&&(w=A.iconName,y=A.prefix)}if(w&&!D&&(!s||s.getAttribute(_t)!==y||s.getAttribute(zt)!==b)){t.setAttribute(n,b),s&&t.removeChild(s);let A=qa(),{extra:R}=A;R.attributes[xt]=e,Ft(w,y).then(j=>{let bn=Yt(o(o({},A),{},{icons:{main:j,mask:rn()},prefix:y,iconName:b,extra:R,watchable:!0})),ft=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ft,t.firstChild):t.appendChild(ft),ft.outerHTML=bn.map(vn=>q(vn)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function ci(t){return Promise.all([Oe(t,"::before"),Oe(t,"::after")])}function ui(t){return t.parentNode!==document.head&&!~Kn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ee(t){if(O)return new Promise((e,n)=>{let a=$(t.querySelectorAll("*")).filter(ui).map(ci),i=$t.begin("searchPseudoElements");cn(),Promise.all(a).then(()=>{i(),Tt(),e()}).catch(()=>{i(),Tt(),n()})})}var di={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ee,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=p}=e;f.searchPseudoElements&&Ee(n)}}},Pe=!1,mi={mixout(){return{dom:{unwatch(){cn(),Pe=!0}}}},hooks(){return{bootstrap(){ke(Ot("mutationObserverCallbacks",{}))},noAuto(){Va()},watch(t){let{observeMutationsRoot:e}=t;Pe?Tt():ke(Ot("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Fe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{let i=a.toLowerCase().split("-"),r=i[0],s=i.slice(1).join("-");if(r&&s==="h")return n.flipX=!0,n;if(r&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(r){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)},hi={mixout(){return{parse:{transform:t=>Fe(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=Fe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(r/2*-1," -256)")},m={outer:s,inner:d,path:h};return{tag:"g",attributes:o({},m.outer),children:[{tag:"g",attributes:o({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:o(o({},n.icon.attributes),m.path)}]}]}}}},gt={x:0,y:0,width:"100%",height:"100%"};function Ne(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pi(t){return t.tag==="g"?t.children:[t]}var gi={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),a=n?ot(n.split(" ").map(i=>i.trim())):rn();return a.prefix||(a.prefix=T()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:s,transform:l}=e,{width:u,icon:c}=i,{width:d,icon:h}=r,m=la({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:o(o({},gt),{},{fill:"white"})},E=c.children?{children:c.children.map(Ne)}:{},D={tag:"g",attributes:o({},m.inner),children:[Ne(o({tag:c.tag,attributes:o(o({},c.attributes),m.path)},E))]},x={tag:"g",attributes:o({},m.outer),children:[D]},w="mask-".concat(s||G()),b="clip-".concat(s||G()),A={tag:"mask",attributes:o(o({},gt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:pi(h)},A]};return n.push(R,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")")},gt)}),{children:n,attributes:a}}}},yi={provides(t){let e=!1;N.matchMedia&&(e=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:o(o({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=o(o({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:o(o({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:o(o({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:o(o({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},bi={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},vi=[ua,ni,ai,ii,ri,di,mi,hi,gi,yi,bi];Pa(vi,{mixoutsTo:v});var zi=v.noAuto,dn=v.config,Li=v.library,mn=v.dom,hn=v.parse,Ri=v.findIconDefinition,ji=v.toHtml,pn=v.icon,Wi=v.layer,xi=v.text,Ai=v.counter;var ki=["*"],Ci=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},wi=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},yn=t=>t!=null&&(t===90||t===180||t===270||t==="90"||t==="180"||t==="270"),Ii=t=>{let e=yn(t.rotate),n={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:e,"fa-rotate-by":t.rotate!=null&&!e,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(n).map(a=>n[a]?a:null).filter(a=>a)},Bt=new WeakSet,gn="fa-auto-css";function Si(t,e){if(!e.autoAddCss||Bt.has(t))return;if(t.getElementById(gn)!=null){e.autoAddCss=!1,Bt.add(t);return}let n=t.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",gn),n.innerHTML=mn.css();let a=t.head.childNodes,i=null;for(let r=a.length-1;r>-1;r--){let s=a[r],l=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(i=s)}t.head.insertBefore(n,i),e.autoAddCss=!1,Bt.add(t)}var Oi=t=>t.prefix!==void 0&&t.iconName!==void 0,Ei=(t,e)=>Oi(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:e,iconName:t},Pi=(()=>{class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){dn.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=ct({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Fi=(()=>{class t{constructor(){this.definitions={}}addIcons(...n){for(let a of n){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let i of a.icon[2])typeof i=="string"&&(this.definitions[a.prefix][i]=a)}}addIconPacks(...n){for(let a of n){let i=Object.keys(a).map(r=>a[r]);this.addIcons(...i)}}getIconDefinition(n,a){return n in this.definitions&&a in this.definitions[n]?this.definitions[n][a]:null}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=ct({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ni=(()=>{class t{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275dir=Jt({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[Q]})}}return t})(),Ti=(()=>{class t{constructor(n,a){this.renderer=n,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||t)(P(qt),P(Xt))}}static{this.\u0275cmp=ut({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},features:[Q],ngContentSelectors:ki,decls:1,vars:0,template:function(a,i){a&1&&(ee(),ne(0))},encapsulation:2})}}return t})(),ar=(()=>{class t{constructor(n,a,i,r,s){this.sanitizer=n,this.config=a,this.iconLibrary=i,this.stackItem=r,this.document=Gt(ae),s!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){wi();return}if(n){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let i=this.buildParams();Si(this.document,this.config);let r=pn(a,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let a=Ei(n,this.config.defaultPrefix);if("icon"in a)return a;let i=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return i??(Ci(a),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?hn.transform(this.transform):this.transform,i={};return n.rotate!=null&&!yn(n.rotate)&&(i["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title,transform:a,classes:Ii(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:i}}static{this.\u0275fac=function(a){return new(a||t)(P(ie),P(Pi),P(Fi),P(Ni,8),P(Ti,8))}}static{this.\u0275cmp=ut({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,i){a&2&&(te("innerHTML",i.renderedIconHTML,Kt),Zt("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[Q],decls:0,vars:0,template:function(a,i){},encapsulation:2})}}return t})();var ir=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=Qt({type:t})}static{this.\u0275inj=Vt({})}}return t})();export{Fi as a,ar as b,ir as c};
