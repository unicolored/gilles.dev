import{j as q}from"./chunk-P7UDLD4U.js";import{a as L}from"./chunk-YOVB3TP3.js";import{a as W,c as y,d as N,e as U}from"./chunk-CEQFU6JX.js";import{R}from"./chunk-YVYQ67W6.js";import{A as k,Ab as a,Ha as C,Ia as P,Ib as S,Jb as M,K as z,Ka as n,Lb as H,Q as E,Ta as w,W as p,Wa as m,Yb as f,Zb as $,bb as T,cb as F,db as A,hb as s,jb as g,ka as h,kc as D,lb as v,lc as x,ma as c,mb as b,nb as r,ob as l,pb as d,s as j,t as I,tc as O}from"./chunk-GBRLF56M.js";var u=class i{wordpressService=p(y);blogUrl="https://www.wrkng.io";getPortfolioPostMedias(e){return this.wordpressService.fetchSinglePostMedias(e,this.blogUrl).pipe(I(t=>{if(!t)throw new Error("Invalid response from the App Service");return t}))}getPortfolioPosts(e){return this.wordpressService.fetchPosts({categories:e},this.blogUrl).pipe(z(),k(t=>{let o=t;throw console.error("\u{1F6D1} ERROR loadPageService",o.name),new Error(`\u{1F6D1} ERROR loadPageService ${o.name}`)}),I(t=>{if(!t)throw new Error("Invalid response from the App Service");return t}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=E({token:i,factory:i.\u0275fac})};var J=(i,e)=>e.id;function K(i,e){if(i&1&&d(0,"img",2),i&2){let t=a().$implicit;s("src",t.media_details.sizes.large.source_url,P)("alt",t.alt_text)}}function Q(i,e){if(i&1&&d(0,"img",2),i&2){let t=a().$implicit;s("src",t.media_details.sizes.medium.source_url,P)("alt",t.alt_text)}}function X(i,e){if(i&1&&(r(0,"div",1),m(1,K,1,2,"img",2)(2,Q,1,2,"img",2),l()),i&2){let t=e.$implicit;n(),g(t.media_details.sizes.large?1:t.media_details.sizes.medium?2:-1)}}function Y(i,e){if(i&1&&(r(0,"div",0),v(1,X,3,1,"div",1,J),l()),i&2){let t=a(2);n(),b(t.attachments())}}function Z(i,e){if(i&1&&m(0,Y,3,0,"div",0),i&2){let t=a();g(t.attachments().length>1?0:-1)}}var _=class i{title=h();name=f(()=>{let e=this.title();return e?e.toLocaleLowerCase().replace(/ /g,"-"):Math.random().toString(36)});subtitle=h();itemId=h(null);objectId=h(null);items=h([]);attachments=c([]);appService=p(u);constructor(){$(async()=>{let e=this.itemId();if(e){let t=await j(this.appService.getPortfolioPostMedias(e));this.attachments.set(t)}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["gilles-nx-portfolio-item-attachments"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],itemId:[1,"itemId"],objectId:[1,"objectId"],items:[1,"items"]},features:[H([u,y])],decls:3,vars:0,consts:[[1,"portfolio-attachments"],[1,"attachment","my-1"],["fill","",3,"src","alt"]],template:function(t,o){t&1&&(m(0,Z,1,1),T(1,0),A(100),F())},dependencies:[x],styles:[`@layer theme,base,components,utilities;@layer theme{:root,:host{--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--spacing: .25rem;--text-xl: 1.25rem;--text-xl--line-height: calc(1.75 / 1.25);--text-4xl: 2.25rem;--text-4xl--line-height: calc(2.5 / 2.25);--text-5xl: 3rem;--text-5xl--line-height: 1;--font-weight-normal: 400;--font-weight-bold: 700;--leading-snug: 1.375;--ease-in: cubic-bezier(.4, 0, 1, 1);--aspect-video: 16 / 9;--default-transition-duration: .15s;--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);--default-font-family: var(--font-sans);--default-font-feature-settings: var(--font-sans--font-feature-settings);--default-font-variation-settings: var( --font-sans--font-variation-settings );--default-mono-font-family: var(--font-mono);--default-mono-font-feature-settings: var( --font-mono--font-feature-settings );--default-mono-font-variation-settings: var( --font-mono--font-variation-settings )}}@layer base{*,:after,:before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings, normal);font-variation-settings:var(--default-font-variation-settings, normal);-webkit-tap-highlight-color:transparent}body{line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings, normal);font-variation-settings:var(--default-mono-font-variation-settings, normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1;color:color-mix(in oklab,currentColor 50%,transparent)}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.static{position:static}.sticky{position:sticky}.container{width:100%}@media (width >= 40rem){.container{max-width:40rem}}@media (width >= 48rem){.container{max-width:48rem}}@media (width >= 64rem){.container{max-width:64rem}}@media (width >= 80rem){.container{max-width:80rem}}@media (width >= 96rem){.container{max-width:96rem}}.m-auto{margin:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-12{margin-top:calc(var(--spacing) * 12)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-10{margin-bottom:calc(var(--spacing) * 10)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-430{height:calc(var(--spacing) * 430)}.w-10\\/12{width:calc(10/12 * 100%)}.w-242{width:calc(var(--spacing) * 242)}.w-full{width:100%}.grow{flex-grow:1}.cursor-default{cursor:default}.resize{resize:both}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.p-4{padding:calc(var(--spacing) * 4)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pt-8{padding-top:calc(var(--spacing) * 8)}.pb-0{padding-bottom:calc(var(--spacing) * 0)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-10{padding-bottom:calc(var(--spacing) * 10)}.text-center{text-align:center}.text-left{text-align:left}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-mono)}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading, var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading, var(--text-5xl--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading, var(--text-xl--line-height))}.leading-snug{--tw-leading: var(--leading-snug);line-height:var(--leading-snug)}.font-bold{--tw-font-weight: var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-normal{--tw-font-weight: var(--font-weight-normal);font-weight:var(--font-weight-normal)}.uppercase{text-transform:uppercase}.no-underline{text-decoration-line:none}.shadow-md{--tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / .1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration))}@media (hover: hover){.hover\\:scale-125:hover{--tw-scale-x: 125%;--tw-scale-y: 125%;--tw-scale-z: 125%;scale:var(--tw-scale-x) var(--tw-scale-y)}}}h2,h2 span{color:var(--color-primary)}p,p span{color:var(--color-content)}.portfolio-items{display:grid;gap:calc(var(--spacing) * 6)}@media (width >= 40rem){.portfolio-items{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width >= 80rem){.portfolio-items{grid-template-columns:repeat(3,minmax(0,1fr))}}.portfolio-items .portfolio-item{background:var(--color-content);cursor:pointer;--tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / .1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);transition-property:all;transition-timing-function:var(--tw-ease, var(--default-transition-timing-function));transition-duration:var(--tw-duration, var(--default-transition-duration));--tw-ease: var(--ease-in);transition-timing-function:var(--ease-in);position:relative;display:flex;aspect-ratio:var(--aspect-video);overflow:hidden;border-radius:.25rem;color:transparent;align-items:center;justify-content:center;text-align:center;vertical-align:middle}.portfolio-items .portfolio-item:hover{--tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / .1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.portfolio-items .portfolio-item:hover img{border:1px solid var(--color--content)}.portfolio-items .portfolio-item.placeholder{background:none;opacity:.25;border:1px solid var(--color-primary)}.portfolio-items .portfolio-item img{margin:calc(var(--spacing) * 0);background:var(--color-content);border:1px solid var(--color--bkg);height:100%}.portfolio-attachments{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.portfolio-attachments .attachment{display:flex}@property --tw-leading{syntax: "*"; inherits: false;}@property --tw-font-weight{syntax: "*"; inherits: false;}@property --tw-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-shadow-color{syntax: "*"; inherits: false;}@property --tw-inset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-shadow-color{syntax: "*"; inherits: false;}@property --tw-ring-color{syntax: "*"; inherits: false;}@property --tw-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-inset-ring-color{syntax: "*"; inherits: false;}@property --tw-inset-ring-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-ring-inset{syntax: "*"; inherits: false;}@property --tw-ring-offset-width{syntax: "<length>"; inherits: false; initial-value: 0px;}@property --tw-ring-offset-color{syntax: "*"; inherits: false; initial-value: #fff;}@property --tw-ring-offset-shadow{syntax: "*"; inherits: false; initial-value: 0 0 #0000;}@property --tw-scale-x{syntax: "*"; inherits: false; initial-value: 1;}@property --tw-scale-y{syntax: "*"; inherits: false; initial-value: 1;}@property --tw-scale-z{syntax: "*"; inherits: false; initial-value: 1;}@property --tw-ease{syntax: "*"; inherits: false;}
/*! tailwindcss v4.0.14 | MIT License | https://tailwindcss.com */
`],encapsulation:2})};var tt=(i,e)=>e.objectID;function et(i,e){if(i&1&&d(0,"img",4),i&2){let t=a(2).$implicit;s("ngSrc",t.images.full.url)("alt",t.post_title)("title",t.post_title)}}function it(i,e){if(i&1&&m(0,et,1,3,"img",13),i&2){let t=a().$implicit;s("ngIf",t.images.full==null?null:t.images.full.url)}}function ot(i,e){if(i&1&&d(0,"img",4),i&2){let t=a(2).$implicit;s("ngSrc",t.images.thumbnail.url)("alt",t.post_title)("title",t.post_title)}}function nt(i,e){if(i&1&&m(0,ot,1,3,"img",13),i&2){let t=a().$implicit;s("ngIf",t.images.thumbnail==null?null:t.images.thumbnail.url)}}function at(i,e){if(i&1&&(r(0,"div",9),S(1),l()),i&2){let t=a().$implicit;n(),M(t.taxonomies.post_tag.join(", "))}}function rt(i,e){if(i&1&&(r(0,"div",10),S(1),l()),i&2){let t=a().$implicit;n(),M(t.taxonomies.category.join(" | "))}}function st(i,e){if(i&1&&d(0,"div",12),i&2){let t=a().$implicit;s("innerHTML",t.content,C)}}function lt(i,e){if(i&1&&(r(0,"figure",3),m(1,it,1,1,"img",4)(2,nt,1,1,"img",4),l(),r(3,"header",5)(4,"h1",6),d(5,"span",7),l()(),r(6,"div",8),m(7,at,2,1,"div",9)(8,rt,2,1,"div",10),l(),r(9,"main",11),m(10,st,1,1,"div",12),l()),i&2){let t=e.$implicit;n(),g(t.images.full?1:t.images.thumbnail?2:-1),n(4),s("innerHTML",t.post_title,C),n(2),g(t.taxonomies.post_tag?7:-1),n(),g(t.taxonomies.category?8:-1),n(2),g(t.content?10:-1)}}var B=class i{pageId="portfolio";route=p(R);webPageService=p(N);webPageMetasMap=p(U);portfolioHits=c([]);category=c(null);categoryComputed=f(()=>this.category()==="web"?"dev":this.category());objectId=c(null);itemId=f(()=>{let e=this.objectId();if(e){let t=e.split("-").shift();if(t)return parseInt(t)}return null});facetFilter=f(()=>{let e=this.categoryComputed();return e?`taxonomies.category:${e}`:[["taxonomies.category:dev","taxonomies.category:design"]]});title=c("");titleComputed=f(()=>this.title());subtitle=c("");subtitleComputed=f(()=>this.subtitle());items=c([]);itemsComputed=f(()=>this.items().map(e=>{let t=e.images.thumbnail?.url;if(!t)e.images.thumbnail={url:"missing.jpg",width:430,height:215};else{let o=L(t);o?(e.images.thumbnail={url:`f_webp,q_auto,w_600,c_fill,ar_16:9/${o}.webp`,width:2,height:1},e.images.full={url:`q_auto:best,w_1280,c_fit,ar_16:9/${o}.jpg`}):e.images.thumbnail={url:"missing.jpg",width:430,height:215}}return e}).filter(e=>e.images.thumbnail?.url));searchService=p(q);ngOnInit(){this.webPageMetasMap.has(this.pageId)&&this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId),W.endpoints?._self);let e=this.route.snapshot.paramMap.get("category"),t=this.route.snapshot.paramMap.get("objectId");console.log("paramMap",e,t),this.category.set(e),t&&this.objectId.set(t),this.route.paramMap.subscribe(()=>{this.searchService.requests(this.facetFilter(),this.objectId()).then(o=>{this.items.set(o.results[0].hits)})})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["gilles-nx-portfolio-item"]],decls:6,vars:3,consts:[[1,"page-prose"],[1,"mb-6"],[3,"items","itemId","objectId"],[1,"p-4"],["priority","","width","600","height","300",1,"img-thumbnail","m-auto",3,"ngSrc","alt","title"],[1,"flex","justify-center","mb-2"],[1,"font-bold","text-xl","mb-1"],[3,"innerHTML"],[1,"flex","justify-between"],[1,"uppercase"],[1,"text-center","uppercase"],[1,"flex","p-4","w-full"],[1,"prose",3,"innerHTML"],["priority","","width","600","height","300","class","img-thumbnail m-auto",3,"ngSrc","alt","title",4,"ngIf"]],template:function(t,o){t&1&&(r(0,"main",0)(1,"article",1),v(2,lt,11,5,null,null,tt),r(4,"section"),d(5,"gilles-nx-portfolio-item-attachments",2),l()()()),t&2&&(n(2),b(o.items()),n(3),s("items",o.itemsComputed())("itemId",o.itemId())("objectId",o.objectId()))},dependencies:[x,D,_,O],encapsulation:2})};export{B as PortfolioItemComponent};
