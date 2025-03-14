import{a as B,b as v,c as _}from"./chunk-WVP35RYH.js";import{a as y,d as P,e as T}from"./chunk-CEQFU6JX.js";import"./chunk-YVYQ67W6.js";import{Ab as u,Eb as h,Fb as g,Gb as S,Ib as t,Jb as b,Ka as f,Mb as w,Ta as M,W as i,Wa as C,aa as L,ba as m,hb as z,ib as p,kc as k,lc as A,nb as e,ob as o,pb as x,sb as N,wb as r,zb as d}from"./chunk-GBRLF56M.js";var H={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var F={prefix:"fas",iconName:"mobile-screen-button",icon:[384,512,["mobile-alt"],"f3cd","M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"]};var R={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var D={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]};var q=["emailElement"],U=()=>["fas","envelope"];function G(n,l){if(n&1&&(e(0,"span",12),r(1,3),o()),n&2){let c=u();p("show",c.copySuccess)}}var E=class n{pageId="contact";myEmail="contact@gilles.dev";emailElement;copySuccess=!1;webPageService=i(P);webPageMetasMap=i(T);library=i(B);ngOnInit(){this.library.addIcons(D,F,H,R),this.webPageMetasMap.has(this.pageId)&&this.webPageService.setMetas(this.webPageMetasMap.get(this.pageId),y.endpoints?._self)}async copyEmailToClipboard(){if(this.emailElement?.nativeElement)try{await navigator.clipboard.writeText(this.myEmail),this.copySuccess=!0}catch(l){console.log(l),this.copySuccess=!1}setTimeout(()=>{this.copySuccess=!1},1e3)}static \u0275fac=function(c){return new(c||n)};static \u0275cmp=M({type:n,selectors:[["ng-component"]],viewQuery:function(c,s){if(c&1&&h(q,7),c&2){let a;g(a=S())&&(s.emailElement=a.first)}},decls:17,vars:5,consts:()=>{let l;l=$localize`Call me`;let c;c=$localize` Whether you have a creative venture or an everyday challenge, I would be happy to discuss 😇 `;let s;return s=$localize`Copied!`,[["emailElement",""],l,c,s,[1,"page-prose"],[1,"main","contact"],[1,"hero-title","pt-2","pb-5"],[1,"mb-10"],[1,"pt-2","pb-5","content"],[1,"myEmail",3,"click"],[3,"icon","fixedWidth"],["class","copy-success-tooltip",3,"show",4,"ngIf"],[1,"copy-success-tooltip"]]},template:function(c,s){if(c&1){let a=N();e(0,"main",4)(1,"section",5)(2,"div",6)(3,"h1")(4,"span"),r(5,1),o(),t(6," \u260E\uFE0F "),o(),e(7,"p",7),r(8,2),o()(),e(9,"div",8)(10,"div",9,0),d("click",function(){return L(a),m(s.copyEmailToClipboard())}),e(12,"a"),x(13,"fa-icon",10),e(14,"span"),t(15),o()(),C(16,G,2,2,"span",11),o()()()()}c&2&&(f(13),z("icon",w(4,U))("fixedWidth",!0),f(2),b(s.myEmail),f(),z("ngIf",s.copySuccess))},dependencies:[A,k,_,v],styles:['section.main.contact[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-areas:"title" "content"}section.main.contact[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;min-height:120px;padding-top:60px;grid-area:title}section.main.contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center;grid-area:content}.myEmail[_ngcontent-%COMP%]{position:relative}.myPhone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .myEmail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;border:1px solid var(--color-primary);background:var(--color-bkg);color:var(--color-primary)!important;padding:.5rem 1rem;display:inline-block;width:100%;margin:0 auto 2rem;border-radius:33px;position:relative;z-index:0;text-align:left;text-decoration:none!important;font-size:1.4rem}.myPhone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .myEmail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border:1px solid var(--color-accent)}.myPhone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .highlight[_ngcontent-%COMP%], .myEmail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .highlight[_ngcontent-%COMP%]{color:var(--color-accent)!important}.myPhone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .myEmail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{border:1px solid #38d749}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:0}25%{opacity:1}85%{opacity:.9}to{opacity:0}}.copy-success-tooltip[_ngcontent-%COMP%]{z-index:0;position:absolute;top:-1.5em;left:0;font-size:.8em;letter-spacing:.05rem;text-transform:uppercase;width:100%;opacity:0;color:var(--color-accent)!important}.copy-success-tooltip.show[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOut 1s ease-in}']})};export{E as ContactComponent};
