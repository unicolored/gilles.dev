import{h as Ne}from"./chunk-HIWKWLU6.js";import{$ as Z,Ab as Te,Fa as _e,La as Ee,Ma as I,Ob as Me,Q as Tt,R as Mt,Ra as tt,Sa as Nt,Ta as Oe,Ua as Se,W as Ce,aa as we,ac as Fe,fb as Ie,ja as Ft,rb as Pe,zb as ke}from"./chunk-II4QDBMF.js";var w=class{constructor(t){this.values=[],this.delimiter=":",this.hasValue(t)&&this.addValue(t)}toString(){return this.values.join(this.delimiter)}hasValue(t){return typeof t<"u"&&t!==null&&t!==""}addValue(t){return Array.isArray(t)?this.values=this.values.concat(t):this.values.push(t),this.values=this.values.filter(n=>this.hasValue(n)),this}setDelimiter(t){return this.delimiter=t,this}};var Dt=class extends Error{constructor(t="Unsupported"){super(t)}};function B(e){return new Dt(e)}function De(){return this._qualifierModel||{error:B(`unsupported qualifier ${this.constructor.name}`)}}var ct=class{constructor(){this._qualifierModel={}}toJson(){return De.apply(this)}};var _=class extends ct{constructor(t,n){super(),this.delimiter="_",this.key=t,n instanceof w?this.qualifierValue=n:(this.qualifierValue=new w,this.qualifierValue.addValue(n))}toString(){let{key:t,delimiter:n,qualifierValue:r}=this;return`${t}${n}${r.toString()}`}addValue(t){return this.qualifierValue.addValue(t),this}};var g=class extends _{constructor(t,n){let r;n?r=new w([t,`${n}`]).setDelimiter(":"):r=t,super("fl",r),this.flagValue=n}toString(){return super.toString().replace(/\./g,"%2E")}getFlagValue(){return this.flagValue}};function Le(e,t){let n=Array.from(e.entries());return t.forEach(r=>{n.push(["fl",r])}),n.sort().map(r=>r[1])}function Re(){var e,t,n;let r=this._actionModel&&Object.keys(this._actionModel).length,i=(n=(t=(e=this._actionModel)===null||e===void 0?void 0:e.source)===null||t===void 0?void 0:t.transformation)===null||n===void 0?void 0:n.error;return i&&i instanceof Error?{error:i}:r?this._actionModel:{error:B(`unsupported action ${this.constructor.name}`)}}var ft=class{constructor(){this._actionModel={}}toJson(){return Re.apply(this)}};var F=class extends ft{constructor(){super(...arguments),this.qualifiers=new Map,this.flags=[],this.delimiter=",",this.actionTag=""}prepareQualifiers(){}getActionTag(){return this.actionTag}setActionTag(t){return this.actionTag=t,this}toString(){return this.prepareQualifiers(),Le(this.qualifiers,this.flags).join(this.delimiter)}addQualifier(t){if(typeof t=="string"){let[n,r]=t.toLowerCase().split("_");n==="fl"?this.flags.push(new g(r)):this.qualifiers.set(n,new _(n,r))}else this.qualifiers.set(t.key,t);return this}addFlag(t){return typeof t=="string"?this.flags.push(new g(t)):t instanceof g&&this.flags.push(t),this}addValueToQualifier(t,n){return this.qualifiers.get(t).addValue(n),this}};function je(e){return e&&(e.match(/^#/)?`rgb:${e.substr(1)}`:e)}var ut=class extends F{constructor(t){super(),this._actionModel={},this.addQualifier(new _("b",new w(je(t)).setDelimiter("_"))),this._actionModel.color=t,this._actionModel.actionType="backgroundColor"}static fromJson(t){let{color:n}=t;return new this(n)}};var et=class{constructor(t){this.raw=t}toString(){return this.raw}toJson(){return{error:B(`unsupported action ${this.constructor.name}`)}}};function ze(e){let t=e;return"error"in t&&!!t.error}function Po(){return new g("ignore_aspect_ratio")}function Ve(){return new g("lossy")}function Ue(){return new g("preserve_transparency")}function $e(e){return new g("progressive",e)}function ko(){return new g("region_relative")}function To(){return new g("relative")}var dt=class extends w{constructor(t){super(t),this.val=t}getValue(){return this.val}};function N(e){let t={};return Object.keys(e).forEach(n=>{t[e[n]]=n}),t}var Ar={limitFit:"limit",limitFill:"lfill",minimumFit:"mfit",thumbnail:"thumb",limitPad:"lpad",minimumPad:"mpad",autoPad:"auto_pad"},Cr={colorSpace:"cs",dpr:"dpr",density:"dn",defaultImage:"d",format:"f",quality:"q"},wr={redEye:"redeye",advancedRedEye:"adv_redeye",oilPaint:"oil_paint",unsharpMask:"unsharp_mask",makeTransparent:"make_transparent",generativeRestore:"gen_restore",upscale:"upscale"},_r={autoBest:"auto:best",autoEco:"auto:eco",autoGood:"auto:good",autoLow:"auto:low",jpegminiHigh:"jpegmini:1",jpegminiMedium:"jpegmini:2",jpegminiBest:"jpegmini:0"},Er={fullHd:"full_hd",fullHdWifi:"full_hd_wifi",fullHdLean:"full_hd_lean",hdLean:"hd_lean"},Or={444:"CHROMA_444",420:"CHROMA_420"},Sr={noCmyk:"no_cmyk",keepCmyk:"keep_cmyk",tinySrgb:"tinysrgb",srgbTrueColor:"srgb:truecolor"};var Ro=N(Or),jo=N(Sr),zo=N(Ar),Ye=N(Cr),Vo=N(wr),Uo=N(_r),$o=N(Er);var mt=class extends F{constructor(t,n,r){super(),this._actionModel={};let i;n instanceof dt?i=n.getValue():i=n,this._actionModel.actionType=Ye[t],this._actionModel[r]=i,this.addQualifier(new _(t,n))}};var pt=class extends g{constructor(t){super("progressive",t)}};var D=class extends mt{constructor(t,n){super(t,n,"formatType")}lossy(){return this._actionModel.lossy=!0,this.addFlag(Ve()),this}progressive(t){return t instanceof pt?(this._actionModel.progressive={mode:t.getFlagValue()},this.addFlag(t)):(this._actionModel.progressive={mode:t},this.addFlag($e(t))),this}preserveTransparency(){return this._actionModel.preserveTransparency=!0,this.addFlag(Ue()),this}static fromJson(t){let{formatType:n,lossy:r,progressive:i,preserveTransparency:a}=t,o;return n?o=new this("f",n):o=new this("f"),i&&(i.mode?o.progressive(i.mode):o.progressive()),r&&o.lossy(),a&&o.preserveTransparency(),o}};var ht=class e{constructor(){this.actions=[]}addAction(t){let n;if(typeof t=="string"){if(t.indexOf("/")>=0)throw"addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";n=new et(t)}else n=t;return this.actions.push(n),this}addTransformation(t){return t instanceof e?this.actions=this.actions.concat(t.actions):this.actions.push(new et(t)),this}toString(){return this.actions.map(t=>t.toString()).filter(t=>t).join("/")}animated(t){return this.addAction(t)}border(t){return this.addAction(t)}reshape(t){return this.addAction(t)}resize(t){return this.addAction(t)}quality(t){return this.addAction(new D("q",t)),this}format(t){return this.addAction(new D("f",t)),this}roundCorners(t){return this.addAction(t)}overlay(t){return this.addAction(t)}underlay(t){return t.setLayerType("u"),this.addAction(t)}addVariable(t){return this.addAction(t)}conditional(t){return this.addAction(t)}effect(t){return this.addAction(t)}adjust(t){return this.addAction(t)}rotate(t){return this.addAction(t)}namedTransformation(t){return this.addAction(t)}delivery(t){return this.addAction(t)}backgroundColor(t){return this.addAction(new ut(t))}psdTools(t){return this.addAction(t)}extract(t){return this.addAction(t)}addFlag(t){let n=new F,r=t;return typeof t=="string"&&(r=new g(t)),n.addQualifier(r),this.addAction(n)}customFunction(t){return this.addAction(t)}transcode(t){return this.addAction(t)}videoEdit(t){return this.addAction(t)}toJson(){let t=[];for(let n of this.actions){let r=n.toJson();if(ze(r))return r;t.push(r)}return{actions:t}}};var gt=class extends ht{};function We(e){return e.match(/^https?:\//)}function He(e){return e.indexOf("/")<0}function Be(e){return e.match(/^v[0-9]+/)}function qe(e,t){let n=t.secure,r=t.privateCdn,i=t.cname,a=t.secureDistribution;return!n&&!i?`http://res.cloudinary.com/${e}`:n&&!a&&r?`https://${e}-res.cloudinary.com`:n&&!a?`https://res.cloudinary.com/${e}`:n&&a&&r?`https://${a}`:n&&a?`https://${a}/${e}`:!n&&i?`http://${i}/${e}`:"ERROR"}function Ge(e){return e||"image"}function Xe(e){return e||"upload"}function Ke(e,t,n){let r=n!==!1;return t?`v${t}`:Be(e)||We(e)||He(e)?"":r?"v1":""}function Ir(e){return!(typeof e!="object"||e instanceof Array)}var Lt=class{filterOutNonSupportedKeys(t,n){let r=Object.create({});return Ir(t)?(Object.keys(t).forEach(i=>{n.indexOf(i)>=0?r[i]=t[i]:console.warn("Warning - unsupported key provided to configuration: ",i)}),r):Object.create({})}},Qe=Lt;var Rt=["cname","secureDistribution","privateCdn","signUrl","longUrlSignature","shorten","useRootPath","secure","forceVersion","analytics","queryParams"];var jt=class e extends Qe{constructor(t){super();let n=this.filterOutNonSupportedKeys(t,Rt);Object.assign(this,{secure:!0},n)}extend(t){let n=this.filterOutNonSupportedKeys(t,Rt);return new e(Object.assign({},this,n))}setCname(t){return this.cname=t,this}setSecureDistribution(t){return this.secureDistribution=t,this}setPrivateCdn(t){return this.privateCdn=t,this}setSignUrl(t){return this.signUrl=t,this}setLongUrlSignature(t){return this.longUrlSignature=t,this}setShorten(t){return this.shorten=t,this}setUseRootPath(t){return this.useRootPath=t,this}setSecure(t){return this.secure=t,this}setForceVersion(t){return this.forceVersion=t,this}setQueryParams(t){return this.queryParams=t,this}},Je=jt;function q(e,t,n){let r=t>>0,i=String(typeof n<"u"?n:" ");return e.length>r?String(e):(r=r-e.length,r>i.length&&(i+=Pr(i,r/i.length)),i.slice(0,r)+String(e))}function Pr(e,t){let n=t,r="";for(;n>0;)r+=e,n--;return r}var kr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G={},Ze=0;kr.split("").forEach(e=>{let t=Ze.toString(2);t=q(t,6,"0"),G[t]=e,Ze++});function tn(e){if(e.split(".").length<2)throw new Error("invalid semVer, must have at least two segments");return e.split(".").reverse().join(".")}function en(e){if(e.split(".").length<2)throw new Error("invalid semVer, must have at least two segments");return e.split(".").map(t=>{let n=+t;if(isNaN(n)||n<0)throw"Invalid version number provided";return q(t,2,"0")}).join(".")}function zt(e){let t="",r=e.split(".").length*6,i=tn(e),a=en(i),s=parseInt(a.split(".").join("")).toString(2);if(s=q(s,r,"0"),s.length%6!==0)throw"Version must be smaller than 43.21.26)";return s.match(/.{1,6}/g).forEach(u=>{t+=G[u]}),t}function nn(e){let t={sdkSemver:e.sdkSemver,techVersion:e.techVersion,sdkCode:e.sdkCode,product:e.product,feature:"0",osType:e.osType,osVersion:e.osVersion};return e.accessibility&&(t.feature="D"),e.lazyload&&(t.feature="C"),e.responsive&&(t.feature="A"),e.placeholder&&(t.feature="B"),t}var rn="1.21.0";function an(e){let[t,n]=e.split("."),r=parseInt(t).toString(2),i=parseInt(n).toString(2),a=r.padStart(6,"0"),o=i.padStart(6,"0");return G[a]+G[o]}function Tr(){let e="0.0.0";if(typeof window<"u")return e;try{return process.versions.node||e}catch{return e}}function Mr(e){let t={techVersion:Tr(),sdkCode:"T",sdkSemver:rn.split("-")[0],product:"A",osType:"Z",osVersion:"0.0",responsive:!1,placeholder:!1,lazyload:!1,accessibility:!1};return e?Object.assign(Object.assign({},t),e):t}function Vt(e){let t=Mr(e),n=nn(t);try{let r=Fr(n.techVersion),i=zt(n.sdkSemver),a=zt(r),o=an(n.osVersion),s=n.feature,u=n.sdkCode,{product:c,osType:d}=n;return`D${c}${u}${i}${a}${d}${o}${s}`}catch{return"E"}}function Fr(e){let t=e.split(".");return`${t[0]}.${t[1]}`}var on={"image/upload":"images","image/private":"private_images","image/authenticated":"authenticated_images","raw/upload":"files","video/upload":"videos"},yt=class{constructor(t,n={},r){this.setPublicID(t),this.setCloudConfig(n),this.setURLConfig(r)}setURLConfig(t){return this.urlConfig=new Je(t),this}setCloudConfig(t){return this.cloudName=t.cloudName,this.apiKey=t.apiKey,this.apiSecret=t.apiSecret,this.authToken=t.authToken,this}setPublicID(t){return this.publicID=t?t.toString():"",this}setDeliveryType(t){return this.deliveryType=t,this}setSuffix(t){return this.suffix=t,this}setSignature(t){return this.signature=t,this}setVersion(t){return t&&(this.version=t),this}setAssetType(t){return t&&(this.assetType=t),this}sign(){return this}toURL(t={}){return this.createCloudinaryURL(null,t.trackedAnalytics)}validateAssetForURLCreation(){if(typeof this.cloudName>"u")throw"You must supply a cloudName when initializing the asset";let t=this.suffix&&this.suffix.indexOf(".")>=0,n=this.suffix&&this.suffix.indexOf("/")>=0;if(t||n)throw"`suffix`` should not include . or /"}getResourceType(){let t=Ge(this.assetType),n=Xe(this.deliveryType),r=!!this.suffix,i=`${t}/${n}`,a=on[`${t}/${n}`],o=this.urlConfig.useRootPath,s=this.urlConfig.shorten;if(o){if(i==="image/upload")return"";throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${i} instead`)}if(s&&i==="image/upload")return"iu";if(r){if(a)return a;throw new Error(`URL Suffix only supported for ${Object.keys(on).join(", ")}, Provided: ${i} instead`)}return i}getSignature(){return this.signature?`s--${this.signature}--`:""}createCloudinaryURL(t,n){if(!this.publicID)return"";this.validateAssetForURLCreation();let r=qe(this.cloudName,this.urlConfig),i=t?t.toString():"",a=Ke(this.publicID,this.version,this.urlConfig.forceVersion),o=this.publicID;if(typeof t=="string")return[r,this.getResourceType(),this.getSignature(),i,a,o.replace(/,/g,"%2C"),this.suffix].filter(u=>u).join("/");{let s=[encodeURI(r),this.getResourceType(),this.getSignature(),encodeURI(i),a,encodeURI(o).replace(/,/g,"%2C"),this.suffix&&encodeURI(this.suffix)].filter(d=>d).join("/").replace(/\?/g,"%3F").replace(/=/g,"%3D"),u=this.urlConfig.analytics!==!1&&!o.includes("?"),c="";if(typeof this.urlConfig.queryParams=="object")try{let d=new URLSearchParams(this.urlConfig.queryParams);u&&d.set("_a",Vt(n)),c=d.toString()}catch{console.error("Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string")}else c=this.urlConfig.queryParams||"",u&&(c+=`${c.length>0?"&":""}_a=${Vt(n)}`);return c?`${s}?${c}`:s}}};var vt=class extends yt{constructor(t,n,r,i){super(t,n,r),this.transformation=i}animated(t){return this.transformation.animated(t),this}border(t){return this.transformation.border(t),this}reshape(t){return this.transformation.reshape(t),this}resize(t){return this.transformation.resize(t),this}quality(t){return this.addAction(new D("q",t)),this}format(t){return this.addAction(new D("f",t)),this}roundCorners(t){return this.transformation.roundCorners(t),this}overlay(t){return this.transformation.overlay(t),this}addVariable(t){return this.transformation.addVariable(t),this}conditional(t){return this.transformation.conditional(t),this}effect(t){return this.transformation.effect(t),this}adjust(t){return this.transformation.adjust(t),this}rotate(t){return this.transformation.rotate(t),this}namedTransformation(t){return this.transformation.namedTransformation(t),this}delivery(t){return this.transformation.delivery(t),this}backgroundColor(t){return this.transformation.backgroundColor(t),this}psdTools(t){return this.transformation.psdTools(t),this}extract(t){return this.transformation.extract(t),this}addFlag(t){return this.transformation.addFlag(t),this}customFunction(t){return this.transformation.customFunction(t),this}addAction(t){return this.transformation.addAction(t),this}addTransformation(t){return this.transformation.addTransformation(t),this}toString(){return this.transformation.toString()}underlay(t){return this.transformation.underlay(t),this}toURL(t={}){return this.createCloudinaryURL(this.transformation,t?.trackedAnalytics)}};var Ut=class extends vt{constructor(t,n,r){super(t,n,r,new gt)}};var Dr="2.1.2",fl={sdkSemver:Dr,techVersion:Me.full,sdkCode:"K"};var ul=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Nt({type:e}),e.\u0275inj=Mt({imports:[[]]}),e})();function Lr(e,t,n){return(t=jr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sn(Object(n),!0).forEach(function(r){Lr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jr(e){var t=Rr(e,"string");return typeof t=="symbol"?t:t+""}var ln=()=>{},fe={},Nn={},Dn=null,Ln={mark:ln,measure:ln};try{typeof window<"u"&&(fe=window),typeof document<"u"&&(Nn=document),typeof MutationObserver<"u"&&(Dn=MutationObserver),typeof performance<"u"&&(Ln=performance)}catch{}var{userAgent:cn=""}=fe.navigator||{},R=fe,h=Nn,fn=Dn,bt=Ln,ml=!!R.document,T=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Rn=~cn.indexOf("MSIE")||~cn.indexOf("Trident/"),zr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Vr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,jn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ur={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],y="classic",Et="duotone",$r="sharp",Yr="sharp-duotone",Vn=[y,Et,$r,Yr],Wr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Hr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Br=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),qr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Gr=["fak","fa-kit","fakd","fa-kit-duotone"],un={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xr=["kit"],Kr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Qr=["fak","fakd"],Jr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},dn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ti=["fak","fa-kit","fakd","fa-kit-duotone"],ei={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ni={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ri={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},qt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ii=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Gt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zr,...ii],ai=["solid","regular","light","thin","duotone","brands"],Un=[1,2,3,4,5,6,7,8,9,10],oi=Un.concat([11,12,13,14,15,16,17,18,19,20]),si=[...Object.keys(ri),...ai,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xt.GROUP,xt.SWAP_OPACITY,xt.PRIMARY,xt.SECONDARY].concat(Un.map(e=>"".concat(e,"x"))).concat(oi.map(e=>"w-".concat(e))),li={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",Xt=16,$n="fa",Yn="svg-inline--fa",$="data-fa-i2svg",Kt="data-fa-pseudo-element",ci="data-fa-pseudo-element-pending",ue="data-prefix",de="data-icon",mn="fontawesome-i2svg",fi="async",ui=["HTML","HEAD","STYLE","SCRIPT"],Wn=(()=>{try{return!0}catch{return!1}})();function st(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[y]}})}var Hn=l({},jn);Hn[y]=l(l(l(l({},{"fa-duotone":"duotone"}),jn[y]),un.kit),un["kit-duotone"]);var di=st(Hn),Qt=l({},qr);Qt[y]=l(l(l(l({},{duotone:"fad"}),Qt[y]),dn.kit),dn["kit-duotone"]);var pn=st(Qt),Jt=l({},qt);Jt[y]=l(l({},Jt[y]),Jr.kit);var me=st(Jt),Zt=l({},ni);Zt[y]=l(l({},Zt[y]),Kr.kit);var pl=st(Zt),mi=zr,Bn="fa-layers-text",pi=Vr,hi=l({},Wr),hl=st(hi),gi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$t=Ur,yi=[...Xr,...si],rt=R.FontAwesomeConfig||{};function vi(e){var t=h.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function bi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t,i=bi(vi(n));i!=null&&(rt[r]=i)});var qn={styleDefault:"solid",familyDefault:y,cssPrefix:$n,replacementClass:Yn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var Q=l(l({},qn),rt);Q.autoReplaceSvg||(Q.observeMutations=!1);var f={};Object.keys(qn).forEach(e=>{Object.defineProperty(f,e,{enumerable:!0,set:function(t){Q[e]=t,it.forEach(n=>n(f))},get:function(){return Q[e]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(e){Q.cssPrefix=e,it.forEach(t=>t(f))},get:function(){return Q.cssPrefix}});R.FontAwesomeConfig=f;var it=[];function xi(e){return it.push(e),()=>{it.splice(it.indexOf(e),1)}}var L=Xt,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ai(e){if(!e||!T)return;let t=h.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;let n=h.head.childNodes,r=null;for(let i=n.length-1;i>-1;i--){let a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return h.head.insertBefore(t,r),e}var Ci="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function at(){let e=12,t="";for(;e-- >0;)t+=Ci[Math.random()*62|0];return t}function J(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function pe(e){return e.classList?J(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Gn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wi(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Gn(e[n]),'" '),"").trim()}function Ot(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function he(e){return e.size!==E.size||e.x!==E.x||e.y!==E.y||e.rotate!==E.rotate||e.flipX||e.flipY}function _i(e){let{transform:t,containerWidth:n,iconWidth:r}=e,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function Ei(e){let{transform:t,width:n=Xt,height:r=Xt,startCentered:i=!1}=e,a="";return i&&Rn?a+="translate(".concat(t.x/L-n/2,"em, ").concat(t.y/L-r/2,"em) "):i?a+="translate(calc(-50% + ".concat(t.x/L,"em), calc(-50% + ").concat(t.y/L,"em)) "):a+="translate(".concat(t.x/L,"em, ").concat(t.y/L,"em) "),a+="scale(".concat(t.size/L*(t.flipX?-1:1),", ").concat(t.size/L*(t.flipY?-1:1),") "),a+="rotate(".concat(t.rotate,"deg) "),a}var Oi=`:root, :host {
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
}`;function Xn(){let e=$n,t=Yn,n=f.cssPrefix,r=f.replacementClass,i=Oi;if(n!==e||r!==t){let a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var hn=!1;function Yt(){f.autoAddCss&&!hn&&(Ai(Xn()),hn=!0)}var Si={mixout(){return{dom:{css:Xn,insertCss:Yt}}},hooks(){return{beforeDOMElementCreation(){Yt()},beforeI2svg(){Yt()}}}},k=R||{};k[P]||(k[P]={});k[P].styles||(k[P].styles={});k[P].hooks||(k[P].hooks={});k[P].shims||(k[P].shims=[]);var O=k[P],Kn=[],Qn=function(){h.removeEventListener("DOMContentLoaded",Qn),wt=1,Kn.map(e=>e())},wt=!1;T&&(wt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),wt||h.addEventListener("DOMContentLoaded",Qn));function Ii(e){T&&(wt?setTimeout(e,0):Kn.push(e))}function lt(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Gn(e):"<".concat(t," ").concat(wi(n),">").concat(r.map(lt).join(""),"</").concat(t,">")}function gn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pi=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Wt=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Pi(n,i):n,u,c,d;for(r===void 0?(u=1,d=t[a[0]]):(u=0,d=r);u<o;u++)c=a[u],d=s(d,t[c],c,t);return d};function ki(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function te(e){let t=ki(e);return t.length===1?t[0].toString(16):null}function Ti(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function yn(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function ee(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:r=!1}=n,i=yn(t);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(e,yn(t)):O.styles[e]=l(l({},O.styles[e]||{}),i),e==="fas"&&ee("fa",t)}var{styles:ot,shims:Mi}=O,Jn=Object.keys(me),Fi=Jn.reduce((e,t)=>(e[t]=Object.keys(me[t]),e),{}),ge=null,Zn={},tr={},er={},nr={},rr={};function Ni(e){return~yi.indexOf(e)}function Di(e,t){let n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Ni(i)?i:null}var ir=()=>{let e=r=>Wt(ot,(i,a,o)=>(i[o]=Wt(a,r,{}),i),{});Zn=e((r,i,a)=>(i[3]&&(r[i[3]]=a),i[2]&&i[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=a}),r)),tr=e((r,i,a)=>(r[a]=a,i[2]&&i[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=a}),r)),rr=e((r,i,a)=>{let o=i[2];return r[a]=a,o.forEach(s=>{r[s]=a}),r});let t="far"in ot||f.autoFetchSvg,n=Wt(Mi,(r,i)=>{let a=i[0],o=i[1],s=i[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:s}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});er=n.names,nr=n.unicodes,ge=St(f.styleDefault,{family:f.familyDefault})};xi(e=>{ge=St(e.styleDefault,{family:f.familyDefault})});ir();function ye(e,t){return(Zn[e]||{})[t]}function Li(e,t){return(tr[e]||{})[t]}function U(e,t){return(rr[e]||{})[t]}function ar(e){return er[e]||{prefix:null,iconName:null}}function Ri(e){let t=nr[e],n=ye("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function j(){return ge}var or=()=>({prefix:null,iconName:null,rest:[]});function ji(e){let t=y,n=Jn.reduce((r,i)=>(r[i]="".concat(f.cssPrefix,"-").concat(i),r),{});return Vn.forEach(r=>{(e.includes(n[r])||e.some(i=>Fi[r].includes(i)))&&(t=r)}),t}function St(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=y}=t,r=di[n][e];if(n===Et&&!e)return"fad";let i=pn[n][e]||pn[n][r],a=e in O.styles?e:null;return i||a||null}function zi(e){let t=[],n=null;return e.forEach(r=>{let i=Di(f.cssPrefix,r);i?n=i:r&&t.push(r)}),{iconName:n,rest:t}}function vn(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=t,r=null,i=Gt.concat(ti),a=vn(e.filter(p=>i.includes(p))),o=vn(e.filter(p=>!Gt.includes(p))),s=a.filter(p=>(r=p,!zn.includes(p))),[u=null]=s,c=ji(a),d=l(l({},zi(o)),{},{prefix:St(u,{family:c})});return l(l(l({},d),Yi({values:e,family:c,styles:ot,config:f,canonical:d,givenPrefix:r})),Vi(n,r,d))}function Vi(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t==="fa"?ar(i):{},o=U(r,i);return i=a.iconName||o||i,r=a.prefix||r,r==="far"&&!ot.far&&ot.fas&&!f.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}var Ui=Vn.filter(e=>e!==y||e!==Et),$i=Object.keys(qt).filter(e=>e!==y).map(e=>Object.keys(qt[e])).flat();function Yi(e){let{values:t,family:n,canonical:r,givenPrefix:i="",styles:a={},config:o={}}=e,s=n===Et,u=t.includes("fa-duotone")||t.includes("fad"),c=o.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(u||c||d)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ui.includes(n)&&(Object.keys(a).find(m=>$i.includes(m))||o.autoFetchSvg)){let m=Br.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=U(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=j()||"fas"),r}var ne=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(a=>{this.definitions[a]=l(l({},this.definitions[a]||{}),i[a]),ee(a,i[a]);let o=me[y][a];o&&ee(o,i[a]),ir()})}reset(){this.definitions={}}_pullDefinitions(t,n){let r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{let{prefix:a,iconName:o,icon:s}=r[i],u=s[2];t[a]||(t[a]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(t[a][c]=s)}),t[a][o]=s}),t}},bn=[],X={},K={},Wi=Object.keys(K);function Hi(e,t){let{mixoutsTo:n}=t;return bn=e,X={},Object.keys(K).forEach(r=>{Wi.indexOf(r)===-1&&delete K[r]}),bn.forEach(r=>{let i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(a=>{typeof i[a]=="function"&&(n[a]=i[a]),typeof i[a]=="object"&&Object.keys(i[a]).forEach(o=>{n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){let a=r.hooks();Object.keys(a).forEach(o=>{X[o]||(X[o]=[]),X[o].push(a[o])})}r.provides&&r.provides(K)}),n}function re(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(X[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function Y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(X[e]||[]).forEach(a=>{a.apply(null,n)})}function z(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function ie(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e,n=e.prefix||j();if(t)return t=U(n,t)||t,gn(sr.definitions,n,t)||gn(O.styles,n,t)}var sr=new ne,Bi=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,Y("noAuto")},qi={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(Y("beforeI2svg",e),z("pseudoElements2svg",e),z("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Ii(()=>{Xi({autoReplaceSvgRoot:t}),Y("watch",e)})}},Gi={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:U(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=St(e[0]);return{prefix:n,iconName:U(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(f.cssPrefix,"-"))>-1||e.match(mi))){let t=It(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||j(),iconName:U(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){let t=j();return{prefix:t,iconName:U(t,e)||e}}}},x={noAuto:Bi,config:f,dom:qi,parse:Gi,library:sr,findIconDefinition:ie,toHtml:lt},Xi=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=h}=e;(Object.keys(O.styles).length>0||f.autoFetchSvg)&&T&&f.autoReplaceSvg&&x.dom.i2svg({node:t})};function Pt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>lt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!T)return;let n=h.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ki(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(he(o)&&n.found&&!r.found){let{width:s,height:u}=n,c={x:s/u/2,y:.5};i.style=Ot(l(l({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Qi(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?"".concat(t,"-").concat(f.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},i),{},{id:o}),children:r}]}]}function ve(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:u,titleId:c,extra:d,watchable:p=!1}=e,{width:m,height:v}=n.found?n:t,M=Qr.includes(r),V=[f.replacementClass,i?"".concat(f.cssPrefix,"-").concat(i):""].filter(H=>d.classes.indexOf(H)===-1).filter(H=>H!==""||!!H).concat(d.classes).join(" "),A={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:V,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)})},S=M&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};p&&(A.attributes[$]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||at())},children:[s]}),delete A.attributes.title);let b=l(l({},A),{},{prefix:r,iconName:i,main:t,mask:n,maskId:u,transform:a,symbol:o,styles:l(l({},S),d.styles)}),{children:C,attributes:W}=n.found&&t.found?z("generateAbstractMask",b)||{children:[],attributes:{}}:z("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=C,b.attributes=W,o?Qi(b):Ki(b)}function xn(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,u=l(l(l({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[$]="");let c=l({},o.styles);he(i)&&(c.transform=Ei({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);let d=Ot(c);d.length>0&&(u.style=d);let p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function Ji(e){let{content:t,title:n,extra:r}=e,i=l(l(l({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ot(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:Ht}=O;function ae(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat($t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat($t.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat($t.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}var Zi={found:!1,width:512,height:512};function ta(e,t){!Wn&&!f.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oe(e,t){let n=t;return t==="fa"&&f.styleDefault!==null&&(t=j()),new Promise((r,i)=>{if(n==="fa"){let a=ar(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ht[t]&&Ht[t][e]){let a=Ht[t][e];return r(ae(a))}ta(e,t),r(l(l({},Zi),{},{icon:f.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var An=()=>{},se=f.measurePerformance&&bt&&bt.mark&&bt.measure?bt:{mark:An,measure:An},nt='FA "6.7.2"',ea=e=>(se.mark("".concat(nt," ").concat(e," begins")),()=>lr(e)),lr=e=>{se.mark("".concat(nt," ").concat(e," ends")),se.measure("".concat(nt," ").concat(e),"".concat(nt," ").concat(e," begins"),"".concat(nt," ").concat(e," ends"))},be={begin:ea,end:lr},At=()=>{};function Cn(e){return typeof(e.getAttribute?e.getAttribute($):null)=="string"}function na(e){let t=e.getAttribute?e.getAttribute(ue):null,n=e.getAttribute?e.getAttribute(de):null;return t&&n}function ra(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(f.replacementClass)}function ia(){return f.autoReplaceSvg===!0?Ct.replace:Ct[f.autoReplaceSvg]||Ct.replace}function aa(e){return h.createElementNS("http://www.w3.org/2000/svg",e)}function oa(e){return h.createElement(e)}function cr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=e.tag==="svg"?aa:oa}=t;if(typeof e=="string")return h.createTextNode(e);let r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){r.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){r.appendChild(cr(a,{ceFn:n}))}),r}function sa(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ct={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(cr(n),t)}),t.getAttribute($)===null&&f.keepOriginalSource){let n=h.createComment(sa(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~pe(t).indexOf(f.replacementClass))return Ct.replace(e);let r=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let a=n[0].attributes.class.split(" ").reduce((o,s)=>(s===f.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}let i=n.map(a=>lt(a)).join(`
`);t.setAttribute($,""),t.innerHTML=i}};function wn(e){e()}function fr(e,t){let n=typeof t=="function"?t:At;if(e.length===0)n();else{let r=wn;f.mutateApproach===fi&&(r=R.requestAnimationFrame||wn),r(()=>{let i=ia(),a=be.begin("mutate");e.map(i),a(),n()})}}var xe=!1;function ur(){xe=!0}function le(){xe=!1}var _t=null;function _n(e){if(!fn||!f.observeMutations)return;let{treeCallback:t=At,nodeCallback:n=At,pseudoElementsCallback:r=At,observeMutationsRoot:i=h}=e;_t=new fn(a=>{if(xe)return;let o=j();J(a).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Cn(s.addedNodes[0])&&(f.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&f.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&Cn(s.target)&&~gi.indexOf(s.attributeName))if(s.attributeName==="class"&&na(s.target)){let{prefix:u,iconName:c}=It(pe(s.target));s.target.setAttribute(ue,u||o),c&&s.target.setAttribute(de,c)}else ra(s.target)&&n(s.target)})}),T&&_t.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function la(){_t&&_t.disconnect()}function ca(e){let t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((r,i)=>{let a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function fa(e){let t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=It(pe(e));return i.prefix||(i.prefix=j()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Li(i.prefix,e.innerText)||ye(i.prefix,te(e.innerText))),!i.iconName&&f.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function ua(e){let t=J(e.attributes).reduce((i,a)=>(i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return f.autoA11y&&(n?t["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(r||at()):(t["aria-hidden"]="true",t.focusable="false")),t}function da(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function En(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=fa(e),a=ua(e),o=re("parseNodeAttributes",{},e),s=t.styleParser?ca(e):[];return l({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var{styles:ma}=O;function dr(e){let t=f.autoReplaceSvg==="nest"?En(e,{styleParser:!1}):En(e);return~t.extra.classes.indexOf(Bn)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}function pa(){return[...Gr,...Gt]}function On(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();let n=h.documentElement.classList,r=d=>n.add("".concat(mn,"-").concat(d)),i=d=>n.remove("".concat(mn,"-").concat(d)),a=f.autoFetchSvg?pa():zn.concat(Object.keys(ma));a.includes("fa")||a.push("fa");let o=[".".concat(Bn,":not([").concat($,"])")].concat(a.map(d=>".".concat(d,":not([").concat($,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=J(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();let u=be.begin("onTree"),c=s.reduce((d,p)=>{try{let m=dr(p);m&&d.push(m)}catch(m){Wn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(m=>{fr(m,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),u(),d()})}).catch(m=>{u(),p(m)})})}function ha(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dr(e).then(n=>{n&&fr([n],t)})}function ga(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ie(t||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:ie(i||{})),e(r,l(l({},n),{},{mask:i}))}}var ya=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=E,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:d={}}=t;if(!e)return;let{prefix:p,iconName:m,icon:v}=e;return Pt(l({type:"icon"},e),()=>(Y("beforeDOMElementCreation",{iconDefinition:e,params:t}),f.autoA11y&&(o?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(s||at()):(c["aria-hidden"]="true",c.focusable="false")),ve({icons:{main:ae(v),mask:i?ae(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:l(l({},E),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:c,styles:d,classes:u}})))},va={mixout(){return{icon:ga(ya)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=On,e.nodeCallback=ha,e}}},provides(e){e.i2svg=function(t){let{node:n=h,callback:r=()=>{}}=t;return On(n,r)},e.generateSvgReplacementMutation=function(t,n){let{iconName:r,title:i,titleId:a,prefix:o,transform:s,symbol:u,mask:c,maskId:d,extra:p}=n;return new Promise((m,v)=>{Promise.all([oe(r,o),c.iconName?oe(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[V,A]=M;m([t,ve({icons:{main:V,mask:A},prefix:o,iconName:r,transform:s,symbol:u,maskId:d,title:i,titleId:a,extra:p,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:a,styles:o}=t,s=Ot(o);s.length>0&&(r.style=s);let u;return he(a)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},ba={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Pt({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(a=>{r=r.concat(a.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},xa={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Pt({type:"counter",content:e},()=>(Y("beforeDOMElementCreation",{content:e,params:t}),Ji({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:["".concat(f.cssPrefix,"-layers-counter"),...r]}})))}}}},Aa={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=E,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return Pt({type:"text",content:e},()=>(Y("beforeDOMElementCreation",{content:e,params:t}),xn({content:e,transform:l(l({},E),n),title:r,extra:{attributes:a,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){let{title:r,transform:i,extra:a}=n,o=null,s=null;if(Rn){let u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/u,s=c.height/u}return f.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,xn({content:t.innerHTML,width:o,height:s,transform:i,title:r,extra:a,watchable:!0})])}}},Ca=new RegExp('"',"ug"),Sn=[1105920,1112319],In=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Hr),li),ei),ce=Object.keys(In).reduce((e,t)=>(e[t.toLowerCase()]=In[t],e),{}),wa=Object.keys(ce).reduce((e,t)=>{let n=ce[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function _a(e){let t=e.replace(Ca,""),n=Ti(t,0),r=n>=Sn[0]&&n<=Sn[1],i=t.length===2?t[0]===t[1]:!1;return{value:te(i?t[0]:t),isSecondary:r||i}}function Ea(e,t){let n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(ce[n]||{})[i]||wa[n]}function Pn(e,t){let n="".concat(ci).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let o=J(e.children).filter(m=>m.getAttribute(Kt)===t)[0],s=R.getComputedStyle(e,t),u=s.getPropertyValue("font-family"),c=u.match(pi),d=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&p!=="none"&&p!==""){let m=s.getPropertyValue("content"),v=Ea(u,d),{value:M,isSecondary:V}=_a(m),A=c[0].startsWith("FontAwesome"),S=ye(v,M),b=S;if(A){let C=Ri(M);C.iconName&&C.prefix&&(S=C.iconName,v=C.prefix)}if(S&&!V&&(!o||o.getAttribute(ue)!==v||o.getAttribute(de)!==b)){e.setAttribute(n,b),o&&e.removeChild(o);let C=da(),{extra:W}=C;W.attributes[Kt]=t,oe(S,v).then(H=>{let br=ve(l(l({},C),{},{icons:{main:H,mask:or()},prefix:v,iconName:b,extra:W,watchable:!0})),kt=h.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(kt,e.firstChild):e.appendChild(kt),kt.outerHTML=br.map(xr=>lt(xr)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Oa(e){return Promise.all([Pn(e,"::before"),Pn(e,"::after")])}function Sa(e){return e.parentNode!==document.head&&!~ui.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function kn(e){if(T)return new Promise((t,n)=>{let r=J(e.querySelectorAll("*")).filter(Sa).map(Oa),i=be.begin("searchPseudoElements");ur(),Promise.all(r).then(()=>{i(),le(),t()}).catch(()=>{i(),le(),n()})})}var Ia={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=kn,e}}},provides(e){e.pseudoElements2svg=function(t){let{node:n=h}=t;f.searchPseudoElements&&kn(n)}}},Tn=!1,Pa={mixout(){return{dom:{unwatch(){ur(),Tn=!0}}}},hooks(){return{bootstrap(){_n(re("mutationObserverCallbacks",{}))},noAuto(){la()},watch(e){let{observeMutationsRoot:t}=e;Tn?le():_n(re("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Mn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{let i=r.toLowerCase().split("-"),a=i[0],o=i.slice(1).join("-");if(a&&o==="h")return n.flipX=!0,n;if(a&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(a){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)},ka={mixout(){return{parse:{transform:e=>Mn(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-transform");return n&&(e.transform=Mn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:a}=t,o={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:l({},m.outer),children:[{tag:"g",attributes:l({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),m.path)}]}]}}}},Bt={x:0,y:0,width:"100%",height:"100%"};function Fn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ta(e){return e.tag==="g"?e.children:[e]}var Ma={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-mask"),r=n?It(n.split(" ").map(i=>i.trim())):or();return r.prefix||(r.prefix=j()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:a,maskId:o,transform:s}=t,{width:u,icon:c}=i,{width:d,icon:p}=a,m=_i({transform:s,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:l(l({},Bt),{},{fill:"white"})},M=c.children?{children:c.children.map(Fn)}:{},V={tag:"g",attributes:l({},m.inner),children:[Fn(l({tag:c.tag,attributes:l(l({},c.attributes),m.path)},M))]},A={tag:"g",attributes:l({},m.outer),children:[V]},S="mask-".concat(o||at()),b="clip-".concat(o||at()),C={tag:"mask",attributes:l(l({},Bt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,A]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Ta(p)},C]};return n.push(W,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(S,")")},Bt)}),{children:n,attributes:r}}}},Fa={provides(e){let t=!1;R.matchMedia&&(t=R.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let a=l(l({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:l(l({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},a),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Na={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Da=[Si,va,ba,xa,Aa,Ia,Pa,ka,Ma,Fa,Na];Hi(Da,{mixoutsTo:x});var gl=x.noAuto,mr=x.config,yl=x.library,pr=x.dom,hr=x.parse,vl=x.findIconDefinition,bl=x.toHtml,gr=x.icon,xl=x.layer,La=x.text,Ra=x.counter;var ja=["*"],za=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},Va=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},vr=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),Ua=e=>{let t=vr(e.rotate),n={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:t,"fa-rotate-by":e.rotate!=null&&!t,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(n).map(r=>n[r]?r:null).filter(r=>r)},Ae=new WeakSet,yr="fa-auto-css";function $a(e,t){if(!t.autoAddCss||Ae.has(e))return;if(e.getElementById(yr)!=null){t.autoAddCss=!1,Ae.add(e);return}let n=e.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",yr),n.innerHTML=pr.css();let r=e.head.childNodes,i=null;for(let a=r.length-1;a>-1;a--){let o=r[a],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=o)}e.head.insertBefore(n,i),t.autoAddCss=!1,Ae.add(e)}var Ya=e=>e.prefix!==void 0&&e.iconName!==void 0,Wa=(e,t)=>Ya(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:t,iconName:e},Ha=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){mr.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=Tt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ba=(()=>{class e{constructor(){this.definitions={}}addIcons(...n){for(let r of n){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...n){for(let r of n){let i=Object.keys(r).map(a=>r[a]);this.addIcons(...i)}}getIconDefinition(n,r){return n in this.definitions&&r in this.definitions[n]?this.definitions[n][r]:null}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=Tt({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),qa=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=Oe({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[Z]})}}return e})(),Ga=(()=>{class e{constructor(n,r){this.renderer=n,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}static{this.\u0275fac=function(r){return new(r||e)(I(Ee),I(Ft))}}static{this.\u0275cmp=tt({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},features:[Z],ngContentSelectors:ja,decls:1,vars:0,template:function(r,i){r&1&&(ke(),Te(0))},encapsulation:2})}}return e})(),Xa=(()=>{class e{constructor(n,r,i,a,o){this.sanitizer=n,this.config=r,this.iconLibrary=i,this.stackItem=a,this.document=Ce(Fe),o!=null&&a==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){Va();return}if(n){let r=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(r!=null){let i=this.buildParams();$a(this.document,this.config);let a=gr(r,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let r=Wa(n,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(za(r),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?hr.transform(this.transform):this.transform,i={};return n.rotate!=null&&!vr(n.rotate)&&(i["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title,transform:r,classes:Ua(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:i}}static{this.\u0275fac=function(r){return new(r||e)(I(Ne),I(Ha),I(Ba),I(qa,8),I(Ga,8))}}static{this.\u0275cmp=tt({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(Pe("innerHTML",i.renderedIconHTML,_e),Ie("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[Z],decls:0,vars:0,template:function(r,i){},encapsulation:2})}}return e})(),Nl=(()=>{class e extends Xa{findIconDefinition(n){let r=super.findIconDefinition(n);if(r!=null&&!Array.isArray(r.icon[4]))throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${r.iconName}']"></fa-duotone-icon> or use: <fa-icon icon="${r.iconName}"></fa-icon> instead.`);return r}buildParams(){let n=super.buildParams();return(this.swapOpacity===!0||this.swapOpacity==="true")&&(Array.isArray(n.classes)?n.classes.push("fa-swap-opacity"):typeof n.classes=="string"?n.classes=[n.classes,"fa-swap-opacity"]:n.classes=["fa-swap-opacity"]),n.styles==null&&(n.styles={}),this.primaryOpacity!=null&&(n.styles["--fa-primary-opacity"]=this.primaryOpacity.toString()),this.secondaryOpacity!=null&&(n.styles["--fa-secondary-opacity"]=this.secondaryOpacity.toString()),this.primaryColor!=null&&(n.styles["--fa-primary-color"]=this.primaryColor),this.secondaryColor!=null&&(n.styles["--fa-secondary-color"]=this.secondaryColor),n}static{this.\u0275fac=(()=>{let n;return function(i){return(n||(n=we(e)))(i||e)}})()}static{this.\u0275cmp=tt({type:e,selectors:[["fa-duotone-icon"]],inputs:{swapOpacity:"swapOpacity",primaryOpacity:"primaryOpacity",secondaryOpacity:"secondaryOpacity",primaryColor:"primaryColor",secondaryColor:"secondaryColor"},features:[Se],decls:0,vars:0,template:function(r,i){},encapsulation:2})}}return e})();export{w as a,_ as b,g as c,F as d,Po as e,ko as f,To as g,Ar as h,zo as i,Ut as j,ul as k,Ba as l,Xa as m,Nl as n};
