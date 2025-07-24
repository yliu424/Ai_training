"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[287],{3287:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Cs,searchItemsByLesson:()=>ks}),a(1999),a(921);var i=a(6936),r=a(8350);function o(){return{externalLinksDisabled:!1,isExternalLink:e=>!1}}const n="ItemRenderingContext";function l(){const e=(0,r.getContext)(n);if(!e)throw new Error("This component must be provided with an ItemRenderingContext");return e}var s=i.vs('<link rel="prefetch" as="image">');const c="isLearn",d=()=>(0,r.getContext)(c)??!1;function p(e){return`assets/${e}`}var h=a(5076);function u(e){return h.z.preprocess((t=>{if(!t||"object"!=typeof t||Array.isArray(t))return{};const a={};for(const i in e.shape)if(i in t){const r=t[i];e.shape[i].safeParse(r).success&&(a[i]=r)}return a}),e.partial())}function m(e,t,a){return{name:e,deps:t,factory:a}}function g(e){const t=new Map(e.map((e=>[e.name,{name:e.name,module:e,state:"new",value:0}])));function a(e){const i=t.get(e);if(!i)throw new Error(`Unknown require ${e}`);if("finished"===i.state)return i.value;if("pending"===i.state)throw new Error("Circular require!");i.state="pending";const r=i.module.deps.map(a),o=i.module.factory(...r);return i.state="finished",i.value=o,o}const i={};for(const{name:t}of e)i[t]=a(t);return i}const f=m("Auth",[],(()=>({JWTClaims:h.z.intersection(h.z.object({aud:h.z.string(),cid:h.z.union([h.z.number(),h.z.string()]).optional(),exp:h.z.number(),iat:h.z.number(),iss:h.z.string(),jti:h.z.number().optional(),scp:h.z.unknown().optional(),sub:h.z.string(),uid:h.z.number().optional(),aid:h.z.string().optional()}),h.z.record(h.z.string(),h.z.unknown()))}))),v=m("ContentFamily",[],(()=>{const e=h.z.enum(["app","blockument","course"]);return{ContentFamilyType:e,ContentFamily:h.z.object({contentId:h.z.string(),contentType:e,parentId:h.z.string(),parentType:e}),ContentParent:h.z.object({parentId:h.z.string(),parentType:e})}})),b=m("RiseContext",[],(()=>{const e=h.z.object({themeId:h.z.string(),accentContrast:h.z.enum(["AUTO","BLACK","LIGHT","DARK"]).nullable().optional(),allowSearch:h.z.boolean(),animateBlockEntrance:h.z.boolean(),blockCorners:h.z.enum(["ROUNDED","SQUARED"]),blockNavigationType:h.z.enum(["CONTINOUS","STEPPED"]).nullable().optional(),blockPaddingBottom:h.z.number(),blockPaddingTop:h.z.number(),buttonNavigationStyle:h.z.enum(["FULL","FLOATING","FLOATING_FULL"]),buttonInlineStyle:h.z.enum(["ROUNDED","SQUARED"]),buttonScheme:h.z.enum(["ACCENT","DARK","LIGHT","TINT"]),colorAccent:h.z.string(),compactShowLessonCount:h.z.boolean(),coverImage:h.z.string(),coverImageAlpha:h.z.number(),coverImageColor:h.z.enum(["ACCENT","DARK","LIGHT"]).nullable().optional(),coverImageDefault:h.z.string().nullable().optional(),coverPageType:h.z.enum(["ACCENT","CENTERED","CENTERED_ACCENT_TINT","CENTERED_OVERLAY","CENTERED_IMAGE","IMAGE","LEFT","LEFT_OVERLAY","SPLIT_LEFT","SPLIT_LEFT_IMAGE","SPLIT_RIGHT","SPLIT_RIGHT_IMAGE","TWO_THIRDS_LEFT_IMAGE","TWO_THIRDS_RIGHT_IMAGE","WHITE"]),customColorLessonHeaderContrast:h.z.enum(["AUTO","BLACK","LIGHT","DARK"]).nullable().optional(),enableVideoPlaybackSpeed:h.z.boolean().nullable().optional(),hideCoverPage:h.z.boolean().nullable().optional(),hideLessonHeaders:h.z.boolean().nullable().optional(),lessonHeaderColor:h.z.string().nullable().optional(),lessonHeaderImage:h.z.string(),lessonHeaderImageAlpha:h.z.number(),lessonHeaderImageColor:h.z.enum(["ACCENT","DARK","LIGHT"]),lessonHeaderSize:h.z.enum(["LARGE","MEDIUM","SMALL"]),lessonHeaderStyle:h.z.enum(["ACCENT","BLACK","COLOR","DARK","GRAY","IMAGE","LIGHT","TINT"]),navigation:h.z.boolean(),navigationRestricted:h.z.boolean(),navigationStyle:h.z.enum(["ACCENT","DARK","DARK_ACCENT","DARK_IMAGE","LIGHT","LIGHT_ACCENT","LIGHT_IMAGE","GRAY","TINT"]),navigationType:h.z.enum(["COMPACT","OVERLAY","SIDEBAR"]),showAuthor:h.z.boolean(),showLessonCount:h.z.boolean(),showNavigationButtons:h.z.boolean(),sidebarStartsOpen:h.z.boolean(),bodyTypefaceId:h.z.string().nullable().optional(),headingTypefaceId:h.z.string().nullable().optional(),uiTypefaceId:h.z.string().nullable().optional(),colors:h.z.array(h.z.string()).nullable().optional()}),t=e.extend({colorTint:h.z.string()}),a=h.z.enum(["bold","regular","light","italic","black","semibold","semibolditalic","bolditalic","medium"]),i=h.z.object({id:h.z.string(),key:h.z.string(),original:h.z.string().nullable(),style:a}),r=h.z.object({id:h.z.string(),name:h.z.string(),author:h.z.string().nullable(),createdAt:h.z.string(),default:h.z.boolean(),fonts:h.z.record(h.z.string(),i)}),o=h.z.record(h.z.string(),r),n=h.z.union([h.z.boolean(),h.z.number(),h.z.string()]),l=h.z.record(h.z.string(),n),s=h.z.object({backgroundColor:h.z.string().optional()});return{RiseTheme:e,MondrianDecoratedRiseTheme:t,RiseFont:i,RiseTypeface:r,RiseTypefaces:o,FeatureFlags:l,RiseBlockSettings:s,RiseContext:u(h.z.object({theme:u(t),typefaces:o,featureFlags:l,block:s,aiAssistantSubscriptionEnabled:h.z.boolean(),showUpsellModal:h.z.boolean()})),RiseResolvedAsset:h.z.object({key:h.z.string(),url:h.z.string(),refs:h.z.string().optional(),jobId:h.z.string(),courseId:h.z.string(),inputKey:h.z.string(),lessonId:h.z.string(),original:h.z.string(),uploadId:h.z.string(),mediaType:h.z.enum(["audio","video"]),thumbnail:h.z.string(),transcodeId:h.z.string(),state:h.z.enum(["COMPLETE","CANCELLED","ERROR"]),done:h.z.boolean(),duration:h.z.number()})}})),S=m("Template",[],(()=>({Template:h.z.object({id:h.z.string(),blockumentId:h.z.string(),sourceId:h.z.string().nullable(),name:h.z.string().max(128),isComponent:h.z.boolean().default(!1),thumbnailAssetPath:h.z.string().nullable(),categoryId:h.z.string().nullable()})}))),y=m("TemplateCategory",[],(()=>({TemplateCategory:h.z.object({id:h.z.string(),name:h.z.string().max(128),icon:h.z.string().nullable()})}))),x=m("VersionedEntity",[],(()=>{const e=h.z.object({id:h.z.string(),_v:h.z.number()});return{VersionedEntity:e,VersionedManifest:h.z.object({blockuments:h.z.record(h.z.string(),e).optional(),items:h.z.record(h.z.string(),e).optional()})}})),C=m("Asset",[],(()=>({Asset:h.z.object({id:h.z.string(),path:h.z.string(),name:h.z.string(),width:h.z.number().optional(),height:h.z.number().optional()})}))),I=m("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:i})=>{const r=e=>h.z.intersection(a,e.partial()),o=e=>h.z.intersection(h.z.object({default:e}),h.z.record(h.z.string(),r(e))),n=r(t);return{State:r,States:o,BaseItem:t=>h.z.object({id:h.z.string(),blockumentId:h.z.string(),clonedFromId:h.z.string().optional(),parentId:h.z.string(),type:h.z.string(),name:h.z.string().max(128),tagName:h.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:h.z.boolean().default(!1),authoringVisible:h.z.boolean().default(!0),initialVisible:h.z.boolean().default(!0),initialState:h.z.string().default("default"),states:o(t),assets:h.z.record(h.z.string(),e).default({}).optional(),removed:h.z.boolean().default(!1),_v:i}),BaseItemState:n}})),w=m("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:h.z.object({id:h.z.string(),title:h.z.string().max(255),children:h.z.array(e).max(1),triggers:h.z.array(t),_v:a})}))),z=m("Border",["Unit"],(({Unit:e})=>({Border:h.z.object({applied:h.z.boolean().default(!1),type:h.z.enum(["none","fill"]).default("none"),color:h.z.string().default("#000000"),opacity:h.z.number().default(1),style:h.z.enum(["solid","dashed","dotted"]).default("solid"),width:e.default({value:1,unit:"px"})})}))),k=m("Fill",["FillColor","FillImage","FillNone"],(({FillColor:e},{FillImage:t},{FillNone:a})=>({Fill:h.z.discriminatedUnion("type",[e,t,a])}))),T=m("FillBase",[],(()=>({FillBase:h.z.object({assetId:h.z.string().optional(),color:h.z.string().optional(),opacity:h.z.number().min(0).max(1).default(1)})}))),L=m("FillColor",["FillBase"],(({FillBase:e})=>({FillColor:e.extend({type:h.z.literal("color"),color:h.z.string().default("#e4e4e4")})}))),M=m("FillImage",["FillBase"],(({FillBase:e})=>{const t=h.z.object({width:h.z.number(),height:h.z.number(),left:h.z.number(),top:h.z.number()}),a=e.extend({type:h.z.literal("image"),assetId:h.z.string(),crop:t.default({width:1,height:1,left:0,top:0})});return{FillImageCrop:t,FillImage:a}})),A=m("FillNone",["FillBase"],(({FillBase:e})=>({FillNone:e.extend({type:h.z.literal("none")})}))),B=m("FillOverlay",["FillColor","FillNone"],(({FillColor:e},{FillNone:t})=>({FillOverlay:h.z.discriminatedUnion("type",[e,t])}))),F=m("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:a},{BaseItemFullState:i})=>{const r=i.extend({children:h.z.array(a)});return{GroupItemFullState:r,GroupItem:e(r).extend({type:h.z.literal("group")}),GroupItemState:t(r)}})),V=m("ImageItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const i=a.extend({altText:h.z.string().default("")});return{ImageItemFullState:i,ImageItem:e(i).extend({type:h.z.literal("image")}),ImageItemState:t(i)}})),D=m("Item",["GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({GroupItem:e},{ImageItem:t},{ShapeItem:a},{TextItem:i},{VideoItem:r})=>({Item:h.z.discriminatedUnion("type",[e,t,a,i,r])}))),J=m("ItemRef",[],(()=>({ItemRef:h.z.object({id:h.z.string(),clonedFromId:h.z.string().optional(),state:h.z.string(),visible:h.z.boolean()})}))),R=m("JSONContent",[],(()=>{const e=h.z.intersection(h.z.object({type:h.z.string().optional(),attrs:h.z.record(h.z.string(),h.z.any()).optional(),content:h.z.array(h.z.lazy((()=>e))).optional(),marks:h.z.array(h.z.intersection(h.z.object({type:h.z.string(),attrs:h.z.record(h.z.string(),h.z.any()).optional()}),h.z.record(h.z.string(),h.z.any()))).optional(),text:h.z.string().optional()}),h.z.record(h.z.string(),h.z.any()));return{JSONContent:e}})),Z=m("Manifest",["Blockument","Item"],(({Blockument:e},{Item:t})=>({Manifest:h.z.object({blockuments:h.z.record(h.z.string(),e).optional(),items:h.z.record(h.z.string(),t).optional()})}))),P=m("Padding",["Unit"],(({Unit:e})=>({Padding:h.z.object({top:e.default({value:0,unit:"px"}),left:e.default({value:0,unit:"px"}),bottom:e.default({value:0,unit:"px"}),right:e.default({value:0,unit:"px"})})}))),_=m("RichTextRef",["JSONContent"],(({JSONContent:e})=>({RichTextRef:h.z.object({id:h.z.string(),type:h.z.literal("tiptap"),json:e})}))),H=m("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:a})=>{const i=a.extend({clipPath:h.z.literal("ellipse").nullable().default(null),altText:h.z.string().nullable().default(null)});return{ShapeItemFullState:i,ShapeItem:e(i).extend({type:h.z.literal("shape")}),ShapeItemState:t(i)}})),$=m("State",["Border","Fill","FillOverlay","Padding","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:i},{Unit:r})=>{const o=h.z.object({id:h.z.string(),name:h.z.string().max(128)}),n=o.extend({x:r.default({value:0,unit:"px"}),y:r.default({value:0,unit:"px"}),xOffset:h.z.number().default(0),yOffset:h.z.number().default(0),position:h.z.literal("absolute").default("absolute"),width:r.default({value:100,unit:"%"}),height:r.default({value:100,unit:"%"}),padding:i,fill:t,overlay:a,aspectRatioLocked:h.z.boolean(),border:e,borderRadius:h.z.object({applied:h.z.boolean().default(!1),topLeft:r.default({value:0,unit:"px"}),topRight:r.default({value:0,unit:"px"}),bottomRight:r.default({value:0,unit:"px"}),bottomLeft:r.default({value:0,unit:"px"})}),rotation:h.z.number().default(0),flipX:h.z.boolean().default(!1),flipY:h.z.boolean().default(!1)});return{StateMeta:o,BaseItemFullState:n}})),O=m("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:i})=>{const r=h.z.enum(["top","middle","bottom"]),o=i.extend({text:a,textVerticalAlign:r.default("top")});return{TextVerticalAlign:r,TextItemFullState:o,TextItem:e(o).extend({type:h.z.literal("text")}),TextItemState:t(o)}})),E=m("Trigger",[],(()=>{const e=h.z.object({id:h.z.string(),event:h.z.enum(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:h.z.string().optional()}),t=e.extend({action:h.z.enum(["mediaPause","mediaPlay","mediaEnd"]),targetId:h.z.string()}),a=e.extend({action:h.z.literal("changeState"),targetId:h.z.string(),targetState:h.z.string().default("default")}),i=e.extend({action:h.z.literal("changeVisibility"),targetId:h.z.string(),targetVisibility:h.z.boolean()});return{TriggerMediaAction:t,TriggerChangeState:a,TriggerChangeVisibility:i,Trigger:h.z.discriminatedUnion("action",[a,i,t])}})),N=m("Unit",[],(()=>({Unit:h.z.object({unit:h.z.enum(["px","%","auto","fr"]),value:h.z.number()})}))),j=m("Version",[],(()=>({SchemaVersion:h.z.literal(2)}))),G=m("VideoItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const i=h.z.object({default:h.z.string()}),r=a.extend({videoSources:i});return{VideoAssets:i,VideoItemFullState:r,VideoItem:e(r).extend({type:h.z.literal("video")}),VideoItemState:t(r)}})),q=m("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const i=h.z.object({default:h.z.string()}),r=a.extend({audioSources:i});return{AudioAssets:i,AudioItemFullState:r,AudioItem:e(r).extend({type:h.z.literal("audio")}),AudioItemState:t(r)}})),U=m("Item",["AudioItem","GroupItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ShapeItem:a},{TextItem:i},{VideoItem:r})=>({Item:h.z.discriminatedUnion("type",[e,t,a,i,r])}))),Y=m("Version",[],(()=>({SchemaVersion:h.z.literal(3)}))),X=m("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:h.z.object({id:h.z.string(),title:h.z.string().max(255),children:h.z.array(e).max(1),triggers:h.z.array(t),fonts:h.z.record(h.z.string(),h.z.string()).optional(),_v:a})}))),W=m("ShapeDef",[],(()=>{const e=h.z.object({type:h.z.literal("rectangle"),borderRadius:h.z.object({topLeft:h.z.number(),topRight:h.z.number(),bottomRight:h.z.number(),bottomLeft:h.z.number()}).optional()}),t=h.z.object({type:h.z.literal("ellipse")}),a=h.z.object({type:h.z.literal("star"),sidePairs:h.z.number().min(3),innerRadius:h.z.number().min(.1).max(1)}),i=h.z.object({type:h.z.literal("cloud")});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:i,ShapeDef:h.z.discriminatedUnion("type",[e,t,a,i])}})),K=m("ShapeItem",["BaseItem","TextItem"],(({BaseItem:e,State:t},{TextItemFullState:a})=>{const i=a.extend({altText:h.z.string().nullable().default(null)});return{ShapeItemFullState:i,ShapeItem:e(i).extend({type:h.z.literal("shape")}),ShapeItemState:t(i)}})),Q=m("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:i},{ShapeDef:r},{Unit:o})=>{const n=h.z.object({id:h.z.string(),name:h.z.string().max(128)}),l=n.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:h.z.number().default(0),yOffset:h.z.number().default(0),position:h.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:i,fill:t,overlay:a,aspectRatioLocked:h.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:h.z.number().default(0),flipX:h.z.boolean().default(!1),flipY:h.z.boolean().default(!1)});return{StateMeta:n,BaseItemFullState:l}})),ee=m("Version",[],(()=>({SchemaVersion:h.z.literal(4)}))),te=m("ShapeDef",[],(()=>{const e=h.z.object({type:h.z.literal("rectangle"),borderRadius:h.z.object({topLeft:h.z.number(),topRight:h.z.number(),bottomRight:h.z.number(),bottomLeft:h.z.number()}).optional()}),t=h.z.object({type:h.z.literal("ellipse")}),a=h.z.object({type:h.z.literal("star"),sidePairs:h.z.number().min(3),innerRadius:h.z.number().min(.1).max(1)}),i=h.z.object({type:h.z.literal("cloud")}),r=h.z.object({type:h.z.literal("plus"),stroke:h.z.number().min(.01).max(1)}),o=h.z.object({type:h.z.literal("triangle")}),n=h.z.object({type:h.z.literal("bookmark"),cutoutInset:h.z.number().min(0).max(.8)}),l=h.z.object({type:h.z.literal("chevron"),outsideCornerXCoords:h.z.number().min(.7).max(1),insideCenterXCoord:h.z.number().min(0).max(.3)}),s=h.z.object({type:h.z.literal("octagon")}),c=h.z.object({type:h.z.literal("parallelogram"),shear:h.z.number().min(0).max(1)});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:i,ShapePlus:r,ShapeTriangle:o,ShapeBookmark:n,ShapeChevron:l,ShapeOctagon:s,ShapeParallelogram:c,ShapeDef:h.z.discriminatedUnion("type",[n,l,i,t,s,r,e,a,o,c])}})),ae=m("State",["Border","Fill","FillOverlay","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{FillOverlay:a},{Padding:i},{ShapeDef:r},{Unit:o})=>{const n=h.z.object({id:h.z.string(),name:h.z.string().max(128)}),l=n.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:h.z.number().default(0),yOffset:h.z.number().default(0),position:h.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:i,fill:t,overlay:a,aspectRatioLocked:h.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:h.z.number().default(0),flipX:h.z.boolean().default(!1),flipY:h.z.boolean().default(!1),authoringAspectRatioCropLock:h.z.enum(["freeform","preset","none"])});return{StateMeta:n,BaseItemFullState:l}})),ie=m("Version",[],(()=>({SchemaVersion:h.z.literal(5)}))),re=m("ShapeDef",[],(()=>{const e=h.z.object({type:h.z.literal("rectangle"),borderRadius:h.z.object({topLeft:h.z.number(),topRight:h.z.number(),bottomRight:h.z.number(),bottomLeft:h.z.number()}).optional()}),t=h.z.object({type:h.z.literal("ellipse")}),a=h.z.object({type:h.z.literal("star"),sidePairs:h.z.number().min(3),innerRadius:h.z.number().min(.1).max(1)}),i=h.z.object({type:h.z.literal("cloud")}),r=h.z.object({type:h.z.literal("plus"),stroke:h.z.number().min(.01).max(1)}),o=h.z.object({type:h.z.literal("triangle"),topVertex:h.z.number().min(0).max(1).optional()}),n=h.z.object({type:h.z.literal("bookmark"),cutoutInset:h.z.number().min(0).max(.8)}),l=h.z.object({type:h.z.literal("chevron"),outsideCornerXCoords:h.z.number().min(.7).max(1),insideCenterXCoord:h.z.number().min(0).max(.3)}),s=h.z.object({type:h.z.literal("octagon")}),c=h.z.object({type:h.z.literal("parallelogram"),shear:h.z.number().min(0).max(1)}),d=h.z.object({type:h.z.literal("shield")}),p=h.z.object({type:h.z.literal("speechBubble")}),u=h.z.object({type:h.z.literal("arrow"),thickness:h.z.number().min(.1).max(.5),headLength:h.z.number().min(.1).max(.9)});return{ShapeRectangle:e,ShapeEllipse:t,ShapeStar:a,ShapeCloud:i,ShapePlus:r,ShapeTriangle:o,ShapeBookmark:n,ShapeChevron:l,ShapeOctagon:s,ShapeParallelogram:c,ShapeShield:d,ShapeSpeechBubble:p,ShapeArrow:u,ShapeDef:h.z.discriminatedUnion("type",[n,l,i,t,s,r,e,a,o,c,d,p,u])}})),oe=m("TextItem",["BaseItem","RichTextRef","State"],(({BaseItem:e,State:t},{RichTextRef:a},{BaseItemFullState:i})=>{const r=h.z.enum(["top","middle","bottom"]),o=h.z.object({top:h.z.number(),left:h.z.number(),bottom:h.z.number(),right:h.z.number()}),n=i.extend({text:a,textVerticalAlign:r.default("top"),textPadding:o});return{TextVerticalAlign:r,TextPadding:o,TextItemFullState:n,TextItem:e(n).extend({type:h.z.literal("text")}),TextItemState:t(n)}})),ne=m("Version",[],(()=>({SchemaVersion:h.z.literal(6)}))),le=m("Version",[],(()=>({SchemaVersion:h.z.literal(7)}))),se=m("Version",[],(()=>({SchemaVersion:h.z.literal(8)}))),ce=m("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:h.z.object({id:h.z.string(),title:h.z.string().max(255),children:h.z.array(e).min(0).max(1),triggers:h.z.array(t),fonts:h.z.record(h.z.string(),h.z.string()).optional(),_v:a})}))),de=m("GroupItem",["BaseItem","ItemRef","State"],(({BaseItem:e,State:t},{ItemRef:a},{BaseItemFullState:i})=>{const r=i.extend({_groupBrand:h.z.never().optional()});return{GroupItemFullState:r,GroupItem:e(r).extend({type:h.z.literal("group"),children:h.z.array(a)}),GroupItemState:t(r)}})),pe=m("ItemRef",[],(()=>({ItemRef:h.z.object({id:h.z.string(),clonedFromId:h.z.string().optional()})}))),he=m("Version",[],(()=>({SchemaVersion:h.z.literal(9)}))),ue=m("DropShadow",[],(()=>{const e=h.z.object({x:h.z.number(),y:h.z.number()}),t=h.z.object({applied:h.z.literal(!1)}),a=h.z.object({applied:h.z.literal(!0),offset:e,blur:h.z.number().min(0),spread:h.z.number().min(0),color:h.z.string(),opacity:h.z.number().min(0).max(1)});return{DropShadow:h.z.discriminatedUnion("applied",[t,a])}})),me=m("ShapeItem",["BaseItem","DropShadow","TextItem"],(({BaseItem:e,State:t},{DropShadow:a},{TextItemFullState:i})=>{const r=i.extend({altText:h.z.string().nullable().default(null),dropShadow:a});return{ShapeItemFullState:r,ShapeItem:e(r).extend({type:h.z.literal("shape")}),ShapeItemState:t(r)}})),ge=m("Version",[],(()=>({SchemaVersion:h.z.literal(10)}))),fe=m("Trigger",[],(()=>{const e=h.z.object({type:h.z.enum(["mediaPause","mediaPlay","mediaEnd"]),targetId:h.z.array(h.z.string())}),t=h.z.object({type:h.z.literal("changeState"),targetId:h.z.tuple([h.z.string()]),targetState:h.z.string().default("default")}),a=h.z.object({type:h.z.literal("changeVisibility"),targetId:h.z.array(h.z.string()),targetVisibility:h.z.boolean()}),i=h.z.discriminatedUnion("type",[e,t,a]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:a,TriggerAction:i,Trigger:h.z.object({id:h.z.string(),event:h.z.enum(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:h.z.string().optional(),actions:h.z.array(i)})}})),ve=m("Version",[],(()=>({SchemaVersion:h.z.literal(11)}))),be=m("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:i})=>{const r=e=>h.z.intersection(a,e.partial()),o=e=>h.z.intersection(h.z.object({default:e}),h.z.record(h.z.string(),r(e))),n=r(t);return{State:r,States:o,BaseItem:t=>h.z.object({id:h.z.string(),blockumentId:h.z.string(),clonedFromId:h.z.string().optional(),parentId:h.z.string(),type:h.z.string(),name:h.z.string().max(128),tagName:h.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:h.z.boolean().default(!1),authoringVisible:h.z.boolean().default(!0),initialVisible:h.z.boolean().default(!0),initialState:h.z.string().default("default"),states:o(t),assets:h.z.record(h.z.string(),e).default({}),removed:h.z.boolean().default(!1),_v:i}),BaseItemState:n}})),Se=m("Fill",["FillBase"],(({FillColorFields:e,FillImageFields:t})=>{const a=h.z.enum(["color","image"]);return{Fill:h.z.intersection(h.z.intersection(e,t),h.z.object({type:a}))}})),ye=m("FillBase",[],(()=>{const e=h.z.object({width:h.z.number(),height:h.z.number(),left:h.z.number(),top:h.z.number()}),t=h.z.object({opacity:h.z.number().min(0).max(1).default(1)}),a=t.extend({color:h.z.string().optional()}),i=t.extend({assetId:h.z.string().optional(),crop:e.default({width:1,height:1,left:0,top:0})});return{FillImageCrop:e,FillBase:t,FillColorFields:a,FillImageFields:i}})),xe=m("OverlayFill",["FillBase"],(({FillColorFields:e})=>({OverlayFill:e.extend({type:h.z.literal("color")})}))),Ce=m("State",["Border","Fill","OverlayFill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t},{OverlayFill:a},{Padding:i},{ShapeDef:r},{Unit:o})=>{const n=h.z.object({id:h.z.string(),name:h.z.string().max(128)}),l=n.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:h.z.number().default(0),yOffset:h.z.number().default(0),position:h.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:i,fill:t,overlay:a,aspectRatioLocked:h.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:h.z.number().default(0),flipX:h.z.boolean().default(!1),flipY:h.z.boolean().default(!1),authoringAspectRatioCropLock:h.z.enum(["freeform","preset","none"])});return{StateMeta:n,BaseItemFullState:l}})),Ie=m("Version",[],(()=>({SchemaVersion:h.z.literal(12)}))),we=m("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:i})=>{const r=e=>h.z.intersection(a,e.partial()),o=e=>h.z.intersection(h.z.object({default:e}),h.z.record(h.z.string(),r(e))),n=r(t);return{State:r,States:o,BaseItem:t=>h.z.object({id:h.z.string(),blockumentId:h.z.string(),clonedFromId:h.z.string().optional(),parentId:h.z.string(),type:h.z.string(),name:h.z.string().max(128),tagName:h.z.enum(["div","figure","figcaption","blockquote"]).default("div"),locked:h.z.boolean().default(!1),authoringVisible:h.z.boolean().default(!0),initialVisible:h.z.boolean().default(!0),initialState:h.z.string().default("default"),states:o(t),assets:h.z.record(h.z.string(),e).default({}),removed:h.z.boolean().default(!1),layer:h.z.string().optional(),aiExperiment:h.z.boolean().optional(),_v:i}),BaseItemState:n}})),ze=m("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:h.z.object({id:h.z.string(),title:h.z.string().max(255),children:h.z.array(e).min(0).max(1),triggers:h.z.array(t),fonts:h.z.record(h.z.string(),h.z.string()).optional(),layers:h.z.array(h.z.object({id:h.z.string(),name:h.z.string()})),aiExperiment:h.z.boolean().optional(),_v:a})}))),ke=m("BlockumentTransaction",["Blockument","Item"],(({Blockument:e},{Item:t})=>({BlockumentTransaction:h.z.object({blockument:e.optional(),items:h.z.record(h.z.string(),t).optional()})}))),Te=m("Fill",[],(()=>{const e=h.z.object({width:h.z.number(),height:h.z.number(),left:h.z.number(),top:h.z.number()}),t=h.z.object({opacity:h.z.number().min(0).max(1).default(1)}),a=h.z.enum(["color","image"]),i=t.extend({color:h.z.string().optional()}),r=i.extend({type:a,assetId:h.z.string().optional(),crop:e.default({width:1,height:1,left:0,top:0})});return{FillImageCrop:e,FillColorFields:i,Fill:r}})),Le=m("State",["Border","Fill","Padding","ShapeDef","Unit"],(({Border:e},{Fill:t,FillColorFields:a},{Padding:i},{ShapeDef:r},{Unit:o})=>{const n=h.z.object({id:h.z.string(),name:h.z.string().max(128)}),l=n.extend({x:o.default({value:0,unit:"px"}),y:o.default({value:0,unit:"px"}),xOffset:h.z.number().default(0),yOffset:h.z.number().default(0),position:h.z.literal("absolute").default("absolute"),width:o.default({value:100,unit:"%"}),height:o.default({value:100,unit:"%"}),padding:i,fill:t,opacity:h.z.number().min(0).max(1).default(1),overlay:a,aspectRatioLocked:h.z.boolean(),border:e,clipDef:r.default({type:"rectangle"}),rotation:h.z.number().default(0),flipX:h.z.boolean().default(!1),flipY:h.z.boolean().default(!1),authoringAspectRatioCropLock:h.z.enum(["freeform","preset","none"])});return{StateMeta:n,BaseItemFullState:l}})),Me=m("Trigger",[],(()=>{const e=h.z.object({type:h.z.enum(["mediaPause","mediaPlay","mediaEnd"]),targetId:h.z.array(h.z.string())}),t=h.z.object({type:h.z.literal("changeState"),targetId:h.z.tuple([h.z.string()]),targetState:h.z.string().default("default")}),a=h.z.object({type:h.z.literal("changeVisibility"),targetId:h.z.array(h.z.string()),targetVisibility:h.z.boolean()}),i=h.z.object({type:h.z.literal("changeLayer"),layerId:h.z.string().nullable()}),r=h.z.discriminatedUnion("type",[e,t,a,i]);return{TriggerMediaAction:e,TriggerChangeStateAction:t,TriggerChangeVisibilityAction:a,TriggerChangeLayerAction:i,TriggerAction:r,Trigger:h.z.object({id:h.z.string(),event:h.z.enum(["click","hover","mediaPlay","mediaPause","mediaEnd"]),sourceId:h.z.string().optional(),actions:h.z.array(r)})}})),Ae=m("Version",[],(()=>({SchemaVersion:h.z.literal(13)}))),Be=m("Version",[],(()=>({SchemaVersion:h.z.literal(14)}))),Fe=m("ShapeDef",[],(()=>{const e=h.z.object({type:h.z.string()}),t=e.extend({cornerRounding:h.z.number().min(0)}),a=e.extend({type:h.z.literal("rectangle"),borderRadius:h.z.object({topLeft:h.z.number(),topRight:h.z.number(),bottomRight:h.z.number(),bottomLeft:h.z.number()}).optional()}),i=e.extend({type:h.z.literal("ellipse")}),r=t.extend({type:h.z.literal("star"),sidePairs:h.z.number().min(3),innerRadius:h.z.number().min(.1).max(1)}),o=e.extend({type:h.z.literal("cloud")}),n=t.extend({type:h.z.literal("plus"),stroke:h.z.number().min(.01).max(1)}),l=t.extend({type:h.z.literal("triangle"),topVertex:h.z.number().min(0).max(1).optional()}),s=t.extend({type:h.z.literal("bookmark"),cutoutInset:h.z.number().min(0).max(.8)}),c=t.extend({type:h.z.literal("chevron"),outsideCornerXCoords:h.z.number().min(.7).max(1),insideCenterXCoord:h.z.number().min(0).max(.3)}),d=t.extend({type:h.z.literal("octagon")}),p=t.extend({type:h.z.literal("parallelogram"),shear:h.z.number().min(0).max(1)}),u=t.extend({type:h.z.literal("shield")}),m=t.extend({type:h.z.literal("speechBubble")}),g=t.extend({type:h.z.literal("arrow"),thickness:h.z.number().min(.1).max(.5),headLength:h.z.number().min(.1).max(.9)});return{ShapeDefBase:e,ShapeDefRoundedCorners:t,ShapeRectangle:a,ShapeEllipse:i,ShapeStar:r,ShapeCloud:o,ShapePlus:n,ShapeTriangle:l,ShapeBookmark:s,ShapeChevron:c,ShapeOctagon:d,ShapeParallelogram:p,ShapeShield:u,ShapeSpeechBubble:m,ShapeArrow:g,ShapeDef:h.z.discriminatedUnion("type",[s,c,o,i,d,n,a,r,l,p,u,m,g])}})),Ve=m("Version",[],(()=>({SchemaVersion:h.z.literal(15)}))),De=m("Backdrop",["Border","DropShadow","Fill","ShapeDef"],(({Border:e},{DropShadow:t},{FillColor:a,FillImage:i},{ShapeDef:r})=>{const o=h.z.object({border:e,overlay:a}),n=o.extend({dropShadow:t,shapeDef:r}),l=h.z.object({fill:a}),s=h.z.object({fill:i}),c=o.extend(l.shape).extend({}),d=n.extend(l.shape).extend({}),p=n.extend(s.shape).extend({});return{MinimalBackdropData:o,ExtendedBackdropData:n,BackdropColorFillData:l,BackdropImageFillData:s,GroupBackdropStateData:c,ShapeBackdropStateData:d,ImageBackdropStateData:p}})),Je=m("Fill",[],(()=>{const e=h.z.object({width:h.z.number(),height:h.z.number(),left:h.z.number(),top:h.z.number()}),t=h.z.object({opacity:h.z.number().min(0).max(1)});return{FillImageCrop:e,FillColor:t.extend({color:h.z.string().optional()}),FillImage:t.extend({assetId:h.z.string().optional(),crop:e})}})),Re=m("GroupItem",["Backdrop","BaseItem","ItemRef","State"],(({GroupBackdropStateData:e},{BaseItem:t,State:a},{ItemRef:i},{BaseItemFullState:r})=>{const o=r.extend(e.shape).extend({_groupBrand:h.z.never().optional()});return{GroupItemFullState:o,GroupItem:t(o).extend({type:h.z.literal("group"),children:h.z.array(i)}),GroupItemState:a(o)}})),Ze=m("ImageItem",["Backdrop","BaseItem","State"],(({ImageBackdropStateData:e},{BaseItem:t,State:a},{BaseItemFullState:i})=>{const r=i.extend(e.shape).extend({altText:h.z.string()});return{ImageItemFullState:r,ImageItem:t(r).extend({type:h.z.literal("image")}),ImageItemState:a(r)}})),Pe=m("Item",["AudioItem","GroupItem","ImageItem","ShapeItem","TextItem","VideoItem"],(({AudioItem:e},{GroupItem:t},{ImageItem:a},{ShapeItem:i},{TextItem:r},{VideoItem:o})=>({Item:h.z.discriminatedUnion("type",[e,t,a,i,r,o])}))),_e=m("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:i})=>{const r=i.extend(e.shape).extend({});return{ShapeItemFullState:r,ShapeItem:t(r).extend({type:h.z.literal("shape")}),ShapeItemState:a(r)}})),He=m("State",["Padding","Unit"],(({Padding:e},{Unit:t})=>{const a=h.z.object({id:h.z.string(),name:h.z.string().max(128)}),i=a.extend({x:t.default({value:0,unit:"px"}),y:t.default({value:0,unit:"px"}),xOffset:h.z.number().default(0),yOffset:h.z.number().default(0),position:h.z.literal("absolute").default("absolute"),width:t.default({value:100,unit:"%"}),height:t.default({value:100,unit:"%"}),padding:e,opacity:h.z.number().min(0).max(1).default(1),aspectRatioLocked:h.z.boolean(),rotation:h.z.number().default(0),flipX:h.z.boolean().default(!1),flipY:h.z.boolean().default(!1),authoringAspectRatioCropLock:h.z.enum(["freeform","preset","none"])});return{StateMeta:a,BaseItemFullState:i}})),$e=m("Version",[],(()=>({SchemaVersion:h.z.literal(16)}))),Oe=m("BaseItem",["Asset","State","Version"],(({Asset:e},{BaseItemFullState:t,StateMeta:a},{SchemaVersion:i})=>{const r=e=>h.z.intersection(a,e.partial()),o=e=>h.z.intersection(h.z.object({default:e}),h.z.record(h.z.string(),r(e))),n=r(t);return{State:r,States:o,BaseItem:t=>h.z.object({id:h.z.string(),blockumentId:h.z.string(),clonedFromId:h.z.string().optional(),parentId:h.z.string(),type:h.z.string(),name:h.z.string().max(128),locked:h.z.boolean().default(!1),authoringVisible:h.z.boolean().default(!0),initialVisible:h.z.boolean().default(!0),initialState:h.z.string().default("default"),states:o(t),assets:h.z.record(h.z.string(),e).default({}),removed:h.z.boolean().default(!1),layer:h.z.string().optional(),aiExperiment:h.z.boolean().optional(),_v:i}),BaseItemState:n}})),Ee=m("State",["Unit"],(({Unit:e})=>{const t=h.z.object({id:h.z.string(),name:h.z.string().max(128)}),a=t.extend({x:e.default({value:0,unit:"px"}),y:e.default({value:0,unit:"px"}),xOffset:h.z.number().default(0),yOffset:h.z.number().default(0),width:e.default({value:100,unit:"%"}),height:e.default({value:100,unit:"%"}),opacity:h.z.number().min(0).max(1).default(1),aspectRatioLocked:h.z.boolean(),rotation:h.z.number().default(0),flipX:h.z.boolean().default(!1),flipY:h.z.boolean().default(!1),authoringAspectRatioCropLock:h.z.enum(["freeform","preset","none"])});return{StateMeta:t,BaseItemFullState:a}})),Ne=m("Version",[],(()=>({SchemaVersion:h.z.literal(17)}))),je=m("Blockument",["ItemRef","Trigger","Version"],(({ItemRef:e},{Trigger:t},{SchemaVersion:a})=>({Blockument:h.z.object({id:h.z.string(),title:h.z.string().max(255),children:h.z.array(e).min(0).max(1),triggers:h.z.array(t),fonts:h.z.record(h.z.string(),h.z.string()).optional(),layers:h.z.array(h.z.object({id:h.z.string(),name:h.z.string()})),aiExperiment:h.z.boolean().optional(),authoringOpened:h.z.boolean(),_v:a})}))),Ge=m("JSONContentStrict",[],(()=>{const e=h.z.object({type:h.z.literal("textStyle"),attrs:h.z.object({color:h.z.string(),textSize:h.z.number(),fontFamily:h.z.string()})}),t=h.z.object({type:h.z.literal("highlight"),attrs:h.z.object({color:h.z.string(),textSize:h.z.number()})}),a=h.z.object({type:h.z.literal("bold")}),i=h.z.object({type:h.z.literal("italic")}),r=h.z.object({type:h.z.literal("underline")}),o=h.z.object({type:h.z.literal("strike")}),n=h.z.discriminatedUnion("type",[e,t,a,i,r,o]),l=h.z.object({type:h.z.literal("hardBreak"),marks:h.z.never().optional(),content:h.z.never().optional(),text:h.z.never().optional()}),s=h.z.object({type:h.z.literal("text"),marks:h.z.array(n).optional(),content:h.z.never().optional(),text:h.z.string()}),c=h.z.discriminatedUnion("type",[s,l]),d=h.z.object({textAlign:h.z.enum(["left","center","right"]),lineHeight:h.z.number()}),p=d.extend({level:h.z.union([h.z.literal(2),h.z.literal(3),h.z.literal(4),h.z.literal(5),h.z.literal(6)])}),u=h.z.union([h.z.array(c),h.z.array(h.z.lazy((()=>y)))]),m=h.z.object({type:h.z.string(),marks:h.z.never().optional(),content:u.optional(),text:h.z.never().optional()}),g=m.extend({type:h.z.literal("paragraph"),attrs:d}),f=m.extend({type:h.z.literal("heading"),attrs:p}),v=m.extend({type:h.z.literal("listItem"),attrs:h.z.object({color:h.z.string().nullable(),textSize:h.z.number(),fontFamily:h.z.string()}).optional()}),b=m.extend({type:h.z.literal("orderedList"),attrs:h.z.object({start:h.z.number()})}),S=m.extend({type:h.z.literal("bulletList")}),y=h.z.discriminatedUnion("type",[g,f,v,b,S]),x=h.z.object({type:h.z.literal("doc"),content:h.z.array(y)});return{Mark:n,BreakNode:l,TextNode:s,InlineNode:c,BlockNodeContent:u,ParagraphNode:g,HeadingNode:f,ListItemNode:v,OrdererdListNode:b,UnorderedListNode:S,BlockNode:y,DocNode:x}})),qe=m("Version",[],(()=>({SchemaVersion:h.z.literal(18)}))),Ue=m("ShapeItem",["Backdrop","BaseItem","TextItem"],(({ShapeBackdropStateData:e},{BaseItem:t,State:a},{TextItemFullState:i})=>{const r=i.extend(e.shape).extend({altText:h.z.string()});return{ShapeItemFullState:r,ShapeItem:t(r).extend({type:h.z.literal("shape")}),ShapeItemState:a(r)}})),Ye=m("Version",[],(()=>({SchemaVersion:h.z.literal(19)}))),Xe=m("Version",[],(()=>({SchemaVersion:h.z.literal(20)}))),We=m("AudioItem",["BaseItem","State"],(({BaseItem:e,State:t},{BaseItemFullState:a})=>{const i=h.z.object({default:h.z.string()}),r=h.z.object({text:h.z.string(),model:h.z.string(),stability:h.z.number().optional(),similarity:h.z.number().optional(),styleExaggeration:h.z.number().optional(),speakerBoost:h.z.boolean().optional(),voiceName:h.z.string(),voiceSource:h.z.enum(["my_voices","voice_library"]),aiScriptWriterUsed:h.z.boolean().optional(),advancedSettingsModified:h.z.boolean().optional()}),o=a.extend({audioSources:i}),n=e(o).extend({type:h.z.literal("audio"),aiAudioSettings:r.optional()});return{AudioAssets:i,AiAudioSettings:r,AudioItemFullState:o,AudioItem:n,AudioItemState:t(o)}})),Ke=m("JSONContentStrict",[],(()=>{const e=h.z.object({type:h.z.literal("textStyle"),attrs:h.z.object({color:h.z.string(),textSize:h.z.number(),fontFamily:h.z.string()})}),t=h.z.object({type:h.z.literal("highlight"),attrs:h.z.object({color:h.z.string(),textSize:h.z.number()})}),a=h.z.object({type:h.z.literal("bold")}),i=h.z.object({type:h.z.literal("italic")}),r=h.z.object({type:h.z.literal("underline")}),o=h.z.object({type:h.z.literal("strike")}),n=h.z.discriminatedUnion("type",[e,t,a,i,r,o]),l=h.z.object({type:h.z.literal("hardBreak"),marks:h.z.never().optional(),content:h.z.never().optional(),text:h.z.never().optional()}),s=h.z.object({type:h.z.literal("text"),marks:h.z.array(n).optional(),content:h.z.never().optional(),text:h.z.string()}),c=h.z.discriminatedUnion("type",[s,l]),d=h.z.object({textAlign:h.z.enum(["left","center","right"]),lineHeight:h.z.number(),spaceAfter:h.z.number().optional()}),p=d.extend({level:h.z.union([h.z.literal(2),h.z.literal(3),h.z.literal(4),h.z.literal(5),h.z.literal(6)])}),u=h.z.union([h.z.array(c),h.z.array(h.z.lazy((()=>y)))]),m=h.z.object({type:h.z.string(),marks:h.z.never().optional(),content:u.optional(),text:h.z.never().optional()}),g=m.extend({type:h.z.literal("paragraph"),attrs:d}),f=m.extend({type:h.z.literal("heading"),attrs:p}),v=m.extend({type:h.z.literal("listItem"),attrs:h.z.object({color:h.z.string().nullable(),textSize:h.z.number(),fontFamily:h.z.string()}).optional()}),b=m.extend({type:h.z.literal("orderedList"),attrs:h.z.object({start:h.z.number()})}),S=m.extend({type:h.z.literal("bulletList")}),y=h.z.discriminatedUnion("type",[g,f,v,b,S]),x=h.z.object({type:h.z.literal("doc"),content:h.z.array(y)});return{Mark:n,BreakNode:l,TextNode:s,InlineNode:c,BlockNodeContent:u,ParagraphNode:g,HeadingNode:f,ListItemNode:v,OrdererdListNode:b,UnorderedListNode:S,BlockNode:y,DocNode:x}})),Qe=m("Version",[],(()=>({SchemaVersion:h.z.literal(21)}))),et=g([f,v,b,S,y,x]),tt=g([C,I,w,z,k,T,L,M,A,B,F,V,D,J,R,Z,P,_,H,$,O,E,N,j,G]),at=g([C,q,I,w,z,k,T,L,M,A,B,F,U,J,R,Z,P,_,H,$,O,E,N,Y,G]),it=g([C,q,I,X,z,k,T,L,M,A,B,F,U,J,R,Z,P,_,W,K,Q,O,E,N,ee,G]),rt=g([C,q,I,X,z,k,T,L,M,A,B,F,U,J,R,Z,P,_,te,K,ae,O,E,N,ie,G]),ot=g([C,q,I,X,z,k,T,L,M,A,B,F,U,J,R,Z,P,_,re,K,ae,oe,E,N,ne,G]),nt=g([C,q,I,X,z,k,T,L,M,A,B,F,U,J,R,Z,P,_,re,K,ae,oe,E,N,le,G]),lt=g([C,q,I,X,z,k,T,L,M,A,B,F,U,J,R,Z,P,_,re,K,ae,oe,E,N,se,G]),st=g([C,q,I,ce,z,k,T,L,M,A,B,de,U,pe,R,Z,P,_,re,K,ae,oe,E,N,he,G]),ct=g([C,q,I,ce,z,ue,k,T,L,M,A,B,de,U,pe,R,Z,P,_,re,me,ae,oe,E,N,ge,G]),dt=g([C,q,I,ce,z,ue,k,T,L,M,A,B,de,U,pe,R,Z,P,_,re,me,ae,oe,fe,N,ve,G]),pt=g([C,q,be,ce,z,ue,Se,ye,de,U,pe,R,Z,xe,P,_,re,me,Ce,oe,fe,N,Ie,G]),ht=g([C,q,we,ze,ke,z,ue,Te,de,U,pe,R,Z,P,_,re,me,Le,oe,Me,N,Ae,G]),ut=g([C,q,we,ze,ke,z,ue,Te,de,U,pe,R,Z,P,_,re,me,Le,oe,Me,N,Be,G]),mt=g([C,q,we,ze,ke,z,ue,Te,de,U,pe,R,Z,P,_,Fe,me,Le,oe,Me,N,Ve,G]),gt=g([C,q,De,we,ze,ke,z,ue,Je,Re,Ze,Pe,pe,R,Z,P,_,Fe,_e,He,oe,Me,N,$e,G]),ft=g([C,q,De,Oe,ze,ke,z,ue,Je,Re,Ze,Pe,pe,R,Z,_,Fe,_e,Ee,oe,Me,N,Ne,G]),vt=g([C,q,De,Oe,je,ke,z,ue,Je,Re,Ze,Pe,pe,R,Ge,Z,_,Fe,_e,Ee,oe,Me,N,qe,G]),bt=g([C,q,De,Oe,je,ke,z,ue,Je,Re,Ze,Pe,pe,R,Ge,Z,_,Fe,Ue,Ee,oe,Me,N,Ye,G]),St=g([C,q,De,Oe,je,ke,z,ue,Je,Re,Ze,Pe,pe,R,Ge,Z,_,Fe,Ue,Ee,oe,Me,N,Xe,G]),yt=g([C,We,De,Oe,je,ke,z,ue,Je,Re,Ze,Pe,pe,R,Ke,Z,_,Fe,Ue,Ee,oe,Me,N,Qe,G]),xt=g([C,We,De,Oe,je,ke,z,ue,Je,Re,Ze,Pe,pe,R,Ke,Z,_,Fe,Ue,Ee,oe,Me,N,Qe,G]),Ct=(xt.Asset.Asset,xt.AudioItem.AudioAssets,xt.AudioItem.AiAudioSettings,xt.AudioItem.AudioItemFullState,xt.AudioItem.AudioItem,xt.AudioItem.AudioItemState,xt.Backdrop.MinimalBackdropData,xt.Backdrop.ExtendedBackdropData,xt.Backdrop.BackdropColorFillData,xt.Backdrop.BackdropImageFillData,xt.Backdrop.GroupBackdropStateData,xt.Backdrop.ShapeBackdropStateData,xt.Backdrop.ImageBackdropStateData,xt.BaseItem.BaseItemState,xt.Blockument.Blockument,xt.BlockumentTransaction.BlockumentTransaction,xt.Border.Border,xt.DropShadow.DropShadow,xt.Fill.FillImageCrop,xt.Fill.FillColor,xt.Fill.FillImage,xt.GroupItem.GroupItemFullState,xt.GroupItem.GroupItem,xt.GroupItem.GroupItemState,xt.ImageItem.ImageItemFullState,xt.ImageItem.ImageItem,xt.ImageItem.ImageItemState,xt.Item.Item,xt.ItemRef.ItemRef,xt.JSONContent.JSONContent,xt.JSONContentStrict.Mark,xt.JSONContentStrict.BreakNode,xt.JSONContentStrict.TextNode,xt.JSONContentStrict.InlineNode,xt.JSONContentStrict.BlockNodeContent,xt.JSONContentStrict.ParagraphNode,xt.JSONContentStrict.HeadingNode,xt.JSONContentStrict.ListItemNode,xt.JSONContentStrict.OrdererdListNode,xt.JSONContentStrict.UnorderedListNode,xt.JSONContentStrict.BlockNode,xt.JSONContentStrict.DocNode,xt.Manifest.Manifest,xt.RichTextRef.RichTextRef,xt.ShapeDef.ShapeDefBase,xt.ShapeDef.ShapeDefRoundedCorners,xt.ShapeDef.ShapeRectangle,xt.ShapeDef.ShapeEllipse,xt.ShapeDef.ShapeStar,xt.ShapeDef.ShapeCloud,xt.ShapeDef.ShapePlus,xt.ShapeDef.ShapeTriangle,xt.ShapeDef.ShapeBookmark,xt.ShapeDef.ShapeChevron,xt.ShapeDef.ShapeOctagon,xt.ShapeDef.ShapeParallelogram,xt.ShapeDef.ShapeShield,xt.ShapeDef.ShapeSpeechBubble,xt.ShapeDef.ShapeArrow,xt.ShapeDef.ShapeDef,xt.ShapeItem.ShapeItemFullState,xt.ShapeItem.ShapeItem,xt.ShapeItem.ShapeItemState,xt.State.StateMeta,xt.State.BaseItemFullState,xt.TextItem.TextVerticalAlign,xt.TextItem.TextPadding,xt.TextItem.TextItemFullState,xt.TextItem.TextItem,xt.TextItem.TextItemState,xt.Trigger.TriggerMediaAction,xt.Trigger.TriggerChangeStateAction,xt.Trigger.TriggerChangeVisibilityAction,xt.Trigger.TriggerChangeLayerAction,xt.Trigger.TriggerAction,xt.Trigger.Trigger,xt.Unit.Unit,xt.Version.SchemaVersion,xt.VideoItem.VideoAssets,xt.VideoItem.VideoItemFullState,xt.VideoItem.VideoItem,xt.VideoItem.VideoItemState,{click:"click",hover:"hover",mediaPlay:"mediaPlay",mediaPause:"mediaPause",mediaEnd:"mediaEnd"}),It="changeState",wt="changeVisibility",zt="mediaPause",kt="mediaPlay",Tt="mediaEnd",Lt="changeLayer";var Mt=a(2),At=a(3537),Bt=a(8683);et.Auth.JWTClaims,et.ContentFamily.ContentFamilyType,et.ContentFamily.ContentFamily,et.ContentFamily.ContentParent,et.RiseContext.RiseTheme,et.RiseContext.MondrianDecoratedRiseTheme,et.RiseContext.RiseFont,et.RiseContext.RiseTypeface,et.RiseContext.RiseTypefaces,et.RiseContext.FeatureFlags,et.RiseContext.RiseBlockSettings,et.RiseContext.RiseContext,et.RiseContext.RiseResolvedAsset,et.Template.Template,et.TemplateCategory.TemplateCategory,et.VersionedEntity.VersionedEntity;const Ft=et.VersionedEntity.VersionedManifest,Vt=(tt.Asset.Asset,tt.BaseItem.BaseItemState,tt.Blockument.Blockument,tt.Border.Border,tt.Fill.Fill,tt.FillBase.FillBase,tt.FillColor.FillColor,tt.FillImage.FillImageCrop,tt.FillImage.FillImage,tt.FillNone.FillNone,tt.FillOverlay.FillOverlay,tt.GroupItem.GroupItemFullState,tt.GroupItem.GroupItem,tt.GroupItem.GroupItemState,tt.ImageItem.ImageItemFullState,tt.ImageItem.ImageItem,tt.ImageItem.ImageItemState,tt.Item.Item,tt.ItemRef.ItemRef,tt.JSONContent.JSONContent,tt.Manifest.Manifest),Dt=(tt.Padding.Padding,tt.RichTextRef.RichTextRef,tt.ShapeItem.ShapeItemFullState,tt.ShapeItem.ShapeItem,tt.ShapeItem.ShapeItemState,tt.State.StateMeta,tt.State.BaseItemFullState,tt.TextItem.TextVerticalAlign,tt.TextItem.TextItemFullState,tt.TextItem.TextItem,tt.TextItem.TextItemState,tt.Trigger.TriggerMediaAction,tt.Trigger.TriggerChangeState,tt.Trigger.TriggerChangeVisibility,tt.Trigger.Trigger,tt.Unit.Unit,tt.Version.SchemaVersion,tt.VideoItem.VideoAssets,tt.VideoItem.VideoItemFullState,tt.VideoItem.VideoItem,tt.VideoItem.VideoItemState,at.Asset.Asset,at.AudioItem.AudioAssets,at.AudioItem.AudioItemFullState,at.AudioItem.AudioItem,at.AudioItem.AudioItemState,at.BaseItem.BaseItemState,at.Blockument.Blockument,at.Border.Border,at.Fill.Fill,at.FillBase.FillBase,at.FillColor.FillColor,at.FillImage.FillImageCrop,at.FillImage.FillImage,at.FillNone.FillNone,at.FillOverlay.FillOverlay,at.GroupItem.GroupItemFullState,at.GroupItem.GroupItem,at.GroupItem.GroupItemState,at.Item.Item,at.ItemRef.ItemRef,at.JSONContent.JSONContent,at.Manifest.Manifest);at.Padding.Padding,at.RichTextRef.RichTextRef,at.ShapeItem.ShapeItemFullState,at.ShapeItem.ShapeItem,at.ShapeItem.ShapeItemState,at.State.StateMeta,at.State.BaseItemFullState,at.TextItem.TextVerticalAlign,at.TextItem.TextItemFullState,at.TextItem.TextItem,at.TextItem.TextItemState,at.Trigger.TriggerMediaAction,at.Trigger.TriggerChangeState,at.Trigger.TriggerChangeVisibility,at.Trigger.Trigger,at.Unit.Unit,at.Version.SchemaVersion,at.VideoItem.VideoAssets,at.VideoItem.VideoItemFullState,at.VideoItem.VideoItem,at.VideoItem.VideoItemState;var Jt=a(4816);function Rt(e,t,a){const{default:i,...r}=e;return{default:t(i),...Jt(r,a)}}function Zt(e){return{...e,altText:"altText"in e?e.altText??null:void 0}}function Pt(e){return{...e,clipPath:null,altText:e.altText??null,text:{id:crypto.randomUUID(),type:"tiptap",json:{type:"doc",content:[]}},textVerticalAlign:"middle"}}function _t(e){return"image"===e.type?function(e){return{...e,_v:3,type:"shape",states:Rt(e.states,Pt,Zt)}}(e):{...e,_v:3}}it.Asset.Asset,it.AudioItem.AudioAssets,it.AudioItem.AudioItemFullState,it.AudioItem.AudioItem,it.AudioItem.AudioItemState,it.BaseItem.BaseItemState,it.Blockument.Blockument,it.Border.Border,it.Fill.Fill,it.FillBase.FillBase,it.FillColor.FillColor,it.FillImage.FillImageCrop,it.FillImage.FillImage,it.FillNone.FillNone,it.FillOverlay.FillOverlay,it.GroupItem.GroupItemFullState,it.GroupItem.GroupItem,it.GroupItem.GroupItemState,it.Item.Item,it.ItemRef.ItemRef,it.JSONContent.JSONContent;const Ht=it.Manifest.Manifest;function $t(e){return e.applied?{type:"rectangle",borderRadius:{topLeft:e.topLeft.value,topRight:e.topRight.value,bottomRight:e.bottomRight.value,bottomLeft:e.bottomLeft.value}}:{type:"rectangle"}}function Ot(e){const{clipPath:t,borderRadius:a,...i}=e;return"ellipse"===t?{...i,clipDef:{type:"ellipse"}}:{...i,clipDef:$t(a)}}function Et(e){const{borderRadius:t,...a}=e;return{...a,clipDef:$t(t)}}function Nt(e){const{borderRadius:t,...a}=e;return t?{...a,clipDef:$t(t)}:{...a}}function jt(e){if("shape"===e.type)return{...e,_v:4,states:Rt(e.states,Ot,(t=>function(e,t){const{clipPath:a,borderRadius:i,...r}=e;return"ellipse"===a?{...r,clipDef:{type:"ellipse"}}:"ellipse"===t.clipPath?{...r}:i?{...r,clipDef:$t(i)}:{...r}}(t,e.states.default)))};if("text"===e.type)return{...e,_v:4,states:Rt(e.states,Et,Nt)};if("video"===e.type)return{...e,_v:4,states:Rt(e.states,Et,Nt)};if("group"===e.type)return{...e,_v:4,states:Rt(e.states,Et,Nt)};if("audio"===e.type)return{...e,_v:4,states:Rt(e.states,Et,Nt)};throw new Error("Internal error: should be unreachable")}it.Padding.Padding,it.RichTextRef.RichTextRef,it.ShapeDef.ShapeRectangle,it.ShapeDef.ShapeEllipse,it.ShapeDef.ShapeStar,it.ShapeDef.ShapeCloud,it.ShapeDef.ShapeDef,it.ShapeItem.ShapeItemFullState,it.ShapeItem.ShapeItem,it.ShapeItem.ShapeItemState,it.State.StateMeta,it.State.BaseItemFullState,it.TextItem.TextVerticalAlign,it.TextItem.TextItemFullState,it.TextItem.TextItem,it.TextItem.TextItemState,it.Trigger.TriggerMediaAction,it.Trigger.TriggerChangeState,it.Trigger.TriggerChangeVisibility,it.Trigger.Trigger,it.Unit.Unit,it.Version.SchemaVersion,it.VideoItem.VideoAssets,it.VideoItem.VideoItemFullState,it.VideoItem.VideoItem,it.VideoItem.VideoItemState,rt.Asset.Asset,rt.AudioItem.AudioAssets,rt.AudioItem.AudioItemFullState,rt.AudioItem.AudioItem,rt.AudioItem.AudioItemState,rt.BaseItem.BaseItemState,rt.Blockument.Blockument,rt.Border.Border,rt.Fill.Fill,rt.FillBase.FillBase,rt.FillColor.FillColor,rt.FillImage.FillImageCrop,rt.FillImage.FillImage,rt.FillNone.FillNone,rt.FillOverlay.FillOverlay,rt.GroupItem.GroupItemFullState,rt.GroupItem.GroupItem,rt.GroupItem.GroupItemState,rt.Item.Item,rt.ItemRef.ItemRef,rt.JSONContent.JSONContent;const Gt=rt.Manifest.Manifest,qt=(rt.Padding.Padding,rt.RichTextRef.RichTextRef,rt.ShapeDef.ShapeRectangle,rt.ShapeDef.ShapeEllipse,rt.ShapeDef.ShapeStar,rt.ShapeDef.ShapeCloud,rt.ShapeDef.ShapePlus,rt.ShapeDef.ShapeTriangle,rt.ShapeDef.ShapeBookmark,rt.ShapeDef.ShapeChevron,rt.ShapeDef.ShapeOctagon,rt.ShapeDef.ShapeParallelogram,rt.ShapeDef.ShapeDef,rt.ShapeItem.ShapeItemFullState,rt.ShapeItem.ShapeItem,rt.ShapeItem.ShapeItemState,rt.State.StateMeta,rt.State.BaseItemFullState,rt.TextItem.TextVerticalAlign,rt.TextItem.TextItemFullState,rt.TextItem.TextItem,rt.TextItem.TextItemState,rt.Trigger.TriggerMediaAction,rt.Trigger.TriggerChangeState,rt.Trigger.TriggerChangeVisibility,rt.Trigger.Trigger,rt.Unit.Unit,rt.Version.SchemaVersion,rt.VideoItem.VideoAssets,rt.VideoItem.VideoItemFullState,rt.VideoItem.VideoItem,rt.VideoItem.VideoItemState,{authoringAspectRatioCropLock:"none"});function Ut(e){return{...e,...qt}}function Yt(e){const t=null!=e.width||null!=e.height?qt:null;return{...e,...t}}function Xt(e){if("shape"===e.type)return{...e,_v:5,states:Rt(e.states,Ut,Yt)};if("text"===e.type)return{...e,_v:5,states:Rt(e.states,Ut,Yt)};if("video"===e.type)return{...e,_v:5,states:Rt(e.states,Ut,Yt)};if("audio"===e.type)return{...e,_v:5,states:Rt(e.states,Ut,Yt)};if("group"===e.type)return{...e,_v:5,states:Rt(e.states,Ut,Yt)};throw new Error("Unexpected item type!")}ot.Asset.Asset,ot.AudioItem.AudioAssets,ot.AudioItem.AudioItemFullState,ot.AudioItem.AudioItem,ot.AudioItem.AudioItemState,ot.BaseItem.BaseItemState,ot.Blockument.Blockument,ot.Border.Border,ot.Fill.Fill,ot.FillBase.FillBase,ot.FillColor.FillColor,ot.FillImage.FillImageCrop,ot.FillImage.FillImage,ot.FillNone.FillNone,ot.FillOverlay.FillOverlay,ot.GroupItem.GroupItemFullState,ot.GroupItem.GroupItem,ot.GroupItem.GroupItemState,ot.Item.Item,ot.ItemRef.ItemRef,ot.JSONContent.JSONContent;const Wt=ot.Manifest.Manifest;function Kt(e){return"text"===e.type?{...e,_v:6,states:Rt(e.states,(e=>({...e,textPadding:mi})),(e=>e))}:"shape"===e.type?{...e,_v:6,states:Rt(e.states,(e=>({...e,textPadding:ui})),(e=>e))}:{...e,_v:6}}ot.Padding.Padding,ot.RichTextRef.RichTextRef,ot.ShapeDef.ShapeRectangle,ot.ShapeDef.ShapeEllipse,ot.ShapeDef.ShapeStar,ot.ShapeDef.ShapeCloud,ot.ShapeDef.ShapePlus,ot.ShapeDef.ShapeTriangle,ot.ShapeDef.ShapeBookmark,ot.ShapeDef.ShapeChevron,ot.ShapeDef.ShapeOctagon,ot.ShapeDef.ShapeParallelogram,ot.ShapeDef.ShapeShield,ot.ShapeDef.ShapeSpeechBubble,ot.ShapeDef.ShapeArrow,ot.ShapeDef.ShapeDef,ot.ShapeItem.ShapeItemFullState,ot.ShapeItem.ShapeItem,ot.ShapeItem.ShapeItemState,ot.State.StateMeta,ot.State.BaseItemFullState,ot.TextItem.TextVerticalAlign,ot.TextItem.TextPadding,ot.TextItem.TextItemFullState,ot.TextItem.TextItem,ot.TextItem.TextItemState,ot.Trigger.TriggerMediaAction,ot.Trigger.TriggerChangeState,ot.Trigger.TriggerChangeVisibility,ot.Trigger.Trigger,ot.Unit.Unit,ot.Version.SchemaVersion,ot.VideoItem.VideoAssets,ot.VideoItem.VideoItemFullState,ot.VideoItem.VideoItem,ot.VideoItem.VideoItemState,nt.Asset.Asset,nt.AudioItem.AudioAssets,nt.AudioItem.AudioItemFullState,nt.AudioItem.AudioItem,nt.AudioItem.AudioItemState,nt.BaseItem.BaseItemState,nt.Blockument.Blockument,nt.Border.Border,nt.Fill.Fill,nt.FillBase.FillBase,nt.FillColor.FillColor,nt.FillImage.FillImageCrop,nt.FillImage.FillImage,nt.FillNone.FillNone,nt.FillOverlay.FillOverlay,nt.GroupItem.GroupItemFullState,nt.GroupItem.GroupItem,nt.GroupItem.GroupItemState,nt.Item.Item,nt.ItemRef.ItemRef,nt.JSONContent.JSONContent;const Qt=nt.Manifest.Manifest;function ea(e,t){const a=t.width?.value??e.width.value,i=a<=100?8:a>300?32:16;return{top:16,left:i,bottom:16,right:i}}function ta(e){return"shape"===e.type?{...e,states:(t=e.states,Rt(t,(e=>({...e,textPadding:ea(e,e)})),(e=>e.textPadding||e.width?{...e,textPadding:ea(t.default,e)}:e))),_v:7}:{...e,_v:7};var t}nt.Padding.Padding,nt.RichTextRef.RichTextRef,nt.ShapeDef.ShapeRectangle,nt.ShapeDef.ShapeEllipse,nt.ShapeDef.ShapeStar,nt.ShapeDef.ShapeCloud,nt.ShapeDef.ShapePlus,nt.ShapeDef.ShapeTriangle,nt.ShapeDef.ShapeBookmark,nt.ShapeDef.ShapeChevron,nt.ShapeDef.ShapeOctagon,nt.ShapeDef.ShapeParallelogram,nt.ShapeDef.ShapeShield,nt.ShapeDef.ShapeSpeechBubble,nt.ShapeDef.ShapeArrow,nt.ShapeDef.ShapeDef,nt.ShapeItem.ShapeItemFullState,nt.ShapeItem.ShapeItem,nt.ShapeItem.ShapeItemState,nt.State.StateMeta,nt.State.BaseItemFullState,nt.TextItem.TextVerticalAlign,nt.TextItem.TextPadding,nt.TextItem.TextItemFullState,nt.TextItem.TextItem,nt.TextItem.TextItemState,nt.Trigger.TriggerMediaAction,nt.Trigger.TriggerChangeState,nt.Trigger.TriggerChangeVisibility,nt.Trigger.Trigger,nt.Unit.Unit,nt.Version.SchemaVersion,nt.VideoItem.VideoAssets,nt.VideoItem.VideoItemFullState,nt.VideoItem.VideoItem,nt.VideoItem.VideoItemState,lt.Asset.Asset,lt.AudioItem.AudioAssets,lt.AudioItem.AudioItemFullState,lt.AudioItem.AudioItem,lt.AudioItem.AudioItemState,lt.BaseItem.BaseItemState,lt.Blockument.Blockument,lt.Border.Border,lt.Fill.Fill,lt.FillBase.FillBase,lt.FillColor.FillColor,lt.FillImage.FillImageCrop,lt.FillImage.FillImage,lt.FillNone.FillNone,lt.FillOverlay.FillOverlay,lt.GroupItem.GroupItemFullState,lt.GroupItem.GroupItem,lt.GroupItem.GroupItemState,lt.Item.Item,lt.ItemRef.ItemRef,lt.JSONContent.JSONContent;const aa=lt.Manifest.Manifest,ia=(lt.Padding.Padding,lt.RichTextRef.RichTextRef,lt.ShapeDef.ShapeRectangle,lt.ShapeDef.ShapeEllipse,lt.ShapeDef.ShapeStar,lt.ShapeDef.ShapeCloud,lt.ShapeDef.ShapePlus,lt.ShapeDef.ShapeTriangle,lt.ShapeDef.ShapeBookmark,lt.ShapeDef.ShapeChevron,lt.ShapeDef.ShapeOctagon,lt.ShapeDef.ShapeParallelogram,lt.ShapeDef.ShapeShield,lt.ShapeDef.ShapeSpeechBubble,lt.ShapeDef.ShapeArrow,lt.ShapeDef.ShapeDef,lt.ShapeItem.ShapeItemFullState,lt.ShapeItem.ShapeItem,lt.ShapeItem.ShapeItemState,lt.State.StateMeta,lt.State.BaseItemFullState,lt.TextItem.TextVerticalAlign,lt.TextItem.TextPadding,lt.TextItem.TextItemFullState,lt.TextItem.TextItem,lt.TextItem.TextItemState,lt.Trigger.TriggerMediaAction,lt.Trigger.TriggerChangeState,lt.Trigger.TriggerChangeVisibility,lt.Trigger.Trigger,lt.Unit.Unit,lt.Version.SchemaVersion,lt.VideoItem.VideoAssets,lt.VideoItem.VideoItemFullState,lt.VideoItem.VideoItem,lt.VideoItem.VideoItemState,"mondrian/assets");function ra(e){return{...e,_v:8,assets:Jt(e.assets??{},(e=>({...e,path:`${ia}/${e.path}`})))}}st.Asset.Asset,st.AudioItem.AudioAssets,st.AudioItem.AudioItemFullState,st.AudioItem.AudioItem,st.AudioItem.AudioItemState,st.BaseItem.BaseItemState,st.Blockument.Blockument,st.Border.Border,st.Fill.Fill,st.FillBase.FillBase,st.FillColor.FillColor,st.FillImage.FillImageCrop,st.FillImage.FillImage,st.FillNone.FillNone,st.FillOverlay.FillOverlay,st.GroupItem.GroupItemFullState,st.GroupItem.GroupItem,st.GroupItem.GroupItemState,st.Item.Item,st.ItemRef.ItemRef,st.JSONContent.JSONContent;const oa=st.Manifest.Manifest;function na(e){return{...e,_v:9,children:e.children.map((({id:e,clonedFromId:t})=>({id:e,clonedFromId:t})))}}function la(e){return"group"===e.type?function(e){const t=new Map,{default:a,...i}=e.states,r=[a,...Object.values(i)];for(const e of r)if(e.children)for(const{id:a,clonedFromId:i}of e.children)t.has(a)||t.set(a,{id:a,clonedFromId:i});return{...e,_v:9,children:[...t.values()],states:Rt(e.states,(({children:e,...t})=>t),(({children:e,...t})=>t))}}(e):{...e,_v:9}}st.Padding.Padding,st.RichTextRef.RichTextRef,st.ShapeDef.ShapeRectangle,st.ShapeDef.ShapeEllipse,st.ShapeDef.ShapeStar,st.ShapeDef.ShapeCloud,st.ShapeDef.ShapePlus,st.ShapeDef.ShapeTriangle,st.ShapeDef.ShapeBookmark,st.ShapeDef.ShapeChevron,st.ShapeDef.ShapeOctagon,st.ShapeDef.ShapeParallelogram,st.ShapeDef.ShapeShield,st.ShapeDef.ShapeSpeechBubble,st.ShapeDef.ShapeArrow,st.ShapeDef.ShapeDef,st.ShapeItem.ShapeItemFullState,st.ShapeItem.ShapeItem,st.ShapeItem.ShapeItemState,st.State.StateMeta,st.State.BaseItemFullState,st.TextItem.TextVerticalAlign,st.TextItem.TextPadding,st.TextItem.TextItemFullState,st.TextItem.TextItem,st.TextItem.TextItemState,st.Trigger.TriggerMediaAction,st.Trigger.TriggerChangeState,st.Trigger.TriggerChangeVisibility,st.Trigger.Trigger,st.Unit.Unit,st.Version.SchemaVersion,st.VideoItem.VideoAssets,st.VideoItem.VideoItemFullState,st.VideoItem.VideoItem,st.VideoItem.VideoItemState,ct.Asset.Asset,ct.AudioItem.AudioAssets,ct.AudioItem.AudioItemFullState,ct.AudioItem.AudioItem,ct.AudioItem.AudioItemState,ct.BaseItem.BaseItemState,ct.Blockument.Blockument,ct.Border.Border,ct.DropShadow.DropShadow,ct.Fill.Fill,ct.FillBase.FillBase,ct.FillColor.FillColor,ct.FillImage.FillImageCrop,ct.FillImage.FillImage,ct.FillNone.FillNone,ct.FillOverlay.FillOverlay,ct.GroupItem.GroupItemFullState,ct.GroupItem.GroupItem,ct.GroupItem.GroupItemState,ct.Item.Item,ct.ItemRef.ItemRef,ct.JSONContent.JSONContent;const sa=ct.Manifest.Manifest;function ca(e){return"shape"===e.type?{...e,_v:10,states:Rt(e.states,(e=>({...e,dropShadow:{applied:!1}})),(e=>e))}:{...e,_v:10}}ct.Padding.Padding,ct.RichTextRef.RichTextRef,ct.ShapeDef.ShapeRectangle,ct.ShapeDef.ShapeEllipse,ct.ShapeDef.ShapeStar,ct.ShapeDef.ShapeCloud,ct.ShapeDef.ShapePlus,ct.ShapeDef.ShapeTriangle,ct.ShapeDef.ShapeBookmark,ct.ShapeDef.ShapeChevron,ct.ShapeDef.ShapeOctagon,ct.ShapeDef.ShapeParallelogram,ct.ShapeDef.ShapeShield,ct.ShapeDef.ShapeSpeechBubble,ct.ShapeDef.ShapeArrow,ct.ShapeDef.ShapeDef,ct.ShapeItem.ShapeItemFullState,ct.ShapeItem.ShapeItem,ct.ShapeItem.ShapeItemState,ct.State.StateMeta,ct.State.BaseItemFullState,ct.TextItem.TextVerticalAlign,ct.TextItem.TextPadding,ct.TextItem.TextItemFullState,ct.TextItem.TextItem,ct.TextItem.TextItemState,ct.Trigger.TriggerMediaAction,ct.Trigger.TriggerChangeState,ct.Trigger.TriggerChangeVisibility,ct.Trigger.Trigger,ct.Unit.Unit,ct.Version.SchemaVersion,ct.VideoItem.VideoAssets,ct.VideoItem.VideoItemFullState,ct.VideoItem.VideoItem,ct.VideoItem.VideoItemState,dt.Asset.Asset,dt.AudioItem.AudioAssets,dt.AudioItem.AudioItemFullState,dt.AudioItem.AudioItem,dt.AudioItem.AudioItemState,dt.BaseItem.BaseItemState,dt.Blockument.Blockument,dt.Border.Border,dt.DropShadow.DropShadow,dt.Fill.Fill,dt.FillBase.FillBase,dt.FillColor.FillColor,dt.FillImage.FillImageCrop,dt.FillImage.FillImage,dt.FillNone.FillNone,dt.FillOverlay.FillOverlay,dt.GroupItem.GroupItemFullState,dt.GroupItem.GroupItem,dt.GroupItem.GroupItemState,dt.Item.Item,dt.ItemRef.ItemRef,dt.JSONContent.JSONContent;const da=dt.Manifest.Manifest;function pa(e){switch(e.action){case"changeState":return{type:e.action,targetId:[e.targetId],targetState:e.targetState};case"changeVisibility":return{type:e.action,targetId:[e.targetId],targetVisibility:e.targetVisibility};default:return{type:e.action,targetId:[e.targetId]}}}function ha(e){return{...e,triggers:e.triggers.map((e=>({id:e.id,event:e.event,sourceId:e.sourceId,actions:[pa(e)]}))),_v:11}}function ua(e){return{...e,_v:11}}dt.Padding.Padding,dt.RichTextRef.RichTextRef,dt.ShapeDef.ShapeRectangle,dt.ShapeDef.ShapeEllipse,dt.ShapeDef.ShapeStar,dt.ShapeDef.ShapeCloud,dt.ShapeDef.ShapePlus,dt.ShapeDef.ShapeTriangle,dt.ShapeDef.ShapeBookmark,dt.ShapeDef.ShapeChevron,dt.ShapeDef.ShapeOctagon,dt.ShapeDef.ShapeParallelogram,dt.ShapeDef.ShapeShield,dt.ShapeDef.ShapeSpeechBubble,dt.ShapeDef.ShapeArrow,dt.ShapeDef.ShapeDef,dt.ShapeItem.ShapeItemFullState,dt.ShapeItem.ShapeItem,dt.ShapeItem.ShapeItemState,dt.State.StateMeta,dt.State.BaseItemFullState,dt.TextItem.TextVerticalAlign,dt.TextItem.TextPadding,dt.TextItem.TextItemFullState,dt.TextItem.TextItem,dt.TextItem.TextItemState,dt.Trigger.TriggerMediaAction,dt.Trigger.TriggerChangeStateAction,dt.Trigger.TriggerChangeVisibilityAction,dt.Trigger.TriggerAction,dt.Trigger.Trigger,dt.Unit.Unit,dt.Version.SchemaVersion,dt.VideoItem.VideoAssets,dt.VideoItem.VideoItemFullState,dt.VideoItem.VideoItem,dt.VideoItem.VideoItemState,pt.Asset.Asset,pt.AudioItem.AudioAssets,pt.AudioItem.AudioItemFullState,pt.AudioItem.AudioItem,pt.AudioItem.AudioItemState,pt.BaseItem.BaseItemState,pt.Blockument.Blockument,pt.Border.Border,pt.DropShadow.DropShadow,pt.Fill.Fill,pt.FillBase.FillImageCrop,pt.FillBase.FillBase,pt.FillBase.FillColorFields,pt.FillBase.FillImageFields,pt.GroupItem.GroupItemFullState,pt.GroupItem.GroupItem,pt.GroupItem.GroupItemState,pt.Item.Item,pt.ItemRef.ItemRef,pt.JSONContent.JSONContent;const ma=pt.Manifest.Manifest;pt.OverlayFill.OverlayFill,pt.Padding.Padding,pt.RichTextRef.RichTextRef,pt.ShapeDef.ShapeRectangle,pt.ShapeDef.ShapeEllipse,pt.ShapeDef.ShapeStar,pt.ShapeDef.ShapeCloud,pt.ShapeDef.ShapePlus,pt.ShapeDef.ShapeTriangle,pt.ShapeDef.ShapeBookmark,pt.ShapeDef.ShapeChevron,pt.ShapeDef.ShapeOctagon,pt.ShapeDef.ShapeParallelogram,pt.ShapeDef.ShapeShield,pt.ShapeDef.ShapeSpeechBubble,pt.ShapeDef.ShapeArrow,pt.ShapeDef.ShapeDef,pt.ShapeItem.ShapeItemFullState,pt.ShapeItem.ShapeItem,pt.ShapeItem.ShapeItemState,pt.State.StateMeta,pt.State.BaseItemFullState,pt.TextItem.TextVerticalAlign,pt.TextItem.TextPadding,pt.TextItem.TextItemFullState,pt.TextItem.TextItem,pt.TextItem.TextItemState,pt.Trigger.TriggerMediaAction,pt.Trigger.TriggerChangeStateAction,pt.Trigger.TriggerChangeVisibilityAction,pt.Trigger.TriggerAction,pt.Trigger.Trigger,pt.Unit.Unit,pt.Version.SchemaVersion,pt.VideoItem.VideoAssets,pt.VideoItem.VideoItemFullState,pt.VideoItem.VideoItem,pt.VideoItem.VideoItemState;var ga=a(3330);const fa={id:crypto.randomUUID(),name:"bike.jpg",path:"mondrian/assets/default/bike.jpg",width:1680,height:1120},va={type:"color",opacity:1},ba={...va,crop:{height:1,width:1,top:0,left:0}};function Sa(e){return e&&"none"!==e.type?"color"===e.type?{...e,crop:ba.crop}:e:ba}function ya(e){return{...e,_v:12}}function xa(e){return{...e,fill:Sa(e.fill),overlay:Sa(e.overlay)}}function Ca(e){return{...e,fill:Sa(e.fill),overlay:(t=e.overlay,t&&"none"!==t.type?t:va)};var t}function Ia(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return function(e){return e.assets[fa.id]=fa,e.states.default.fill.assetId||(e.states.default.fill.assetId=fa.id),e}({...e,states:Rt(e.states,xa,Ca),_v:12,assets:e.assets??{}});default:throw new Error("Unreachable")}}ht.Asset.Asset,ht.AudioItem.AudioAssets,ht.AudioItem.AudioItemFullState,ht.AudioItem.AudioItem,ht.AudioItem.AudioItemState,ht.BaseItem.BaseItemState,ht.Blockument.Blockument,ht.BlockumentTransaction.BlockumentTransaction,ht.Border.Border,ht.DropShadow.DropShadow,ht.Fill.FillImageCrop,ht.Fill.FillColorFields,ht.Fill.Fill,ht.GroupItem.GroupItemFullState,ht.GroupItem.GroupItem,ht.GroupItem.GroupItemState,ht.Item.Item,ht.ItemRef.ItemRef,ht.JSONContent.JSONContent;const wa=ht.Manifest.Manifest;function za(e){return{...e,layers:[],_v:13}}function ka(e){return{...e,opacity:1}}function Ta(e){return{...e,opacity:1}}function La(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,states:Rt(e.states,ka,Ta),_v:13};default:throw new Error("Unreachable")}}ht.Padding.Padding,ht.RichTextRef.RichTextRef,ht.ShapeDef.ShapeRectangle,ht.ShapeDef.ShapeEllipse,ht.ShapeDef.ShapeStar,ht.ShapeDef.ShapeCloud,ht.ShapeDef.ShapePlus,ht.ShapeDef.ShapeTriangle,ht.ShapeDef.ShapeBookmark,ht.ShapeDef.ShapeChevron,ht.ShapeDef.ShapeOctagon,ht.ShapeDef.ShapeParallelogram,ht.ShapeDef.ShapeShield,ht.ShapeDef.ShapeSpeechBubble,ht.ShapeDef.ShapeArrow,ht.ShapeDef.ShapeDef,ht.ShapeItem.ShapeItemFullState,ht.ShapeItem.ShapeItem,ht.ShapeItem.ShapeItemState,ht.State.StateMeta,ht.State.BaseItemFullState,ht.TextItem.TextVerticalAlign,ht.TextItem.TextPadding,ht.TextItem.TextItemFullState,ht.TextItem.TextItem,ht.TextItem.TextItemState,ht.Trigger.TriggerMediaAction,ht.Trigger.TriggerChangeStateAction,ht.Trigger.TriggerChangeVisibilityAction,ht.Trigger.TriggerChangeLayerAction,ht.Trigger.TriggerAction,ht.Trigger.Trigger,ht.Unit.Unit,ht.Version.SchemaVersion,ht.VideoItem.VideoAssets,ht.VideoItem.VideoItemFullState,ht.VideoItem.VideoItem,ht.VideoItem.VideoItemState,ut.Asset.Asset,ut.AudioItem.AudioAssets,ut.AudioItem.AudioItemFullState,ut.AudioItem.AudioItem,ut.AudioItem.AudioItemState,ut.BaseItem.BaseItemState,ut.Blockument.Blockument,ut.BlockumentTransaction.BlockumentTransaction,ut.Border.Border,ut.DropShadow.DropShadow,ut.Fill.FillImageCrop,ut.Fill.FillColorFields,ut.Fill.Fill,ut.GroupItem.GroupItemFullState,ut.GroupItem.GroupItem,ut.GroupItem.GroupItemState,ut.Item.Item,ut.ItemRef.ItemRef,ut.JSONContent.JSONContent;const Ma=ut.Manifest.Manifest;function Aa(e){return{...e,_v:14}}function Ba(e){return{...e,opacity:1}}function Fa(e){return{...e,opacity:1}}function Va(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,states:Rt(e.states,Ba,Fa),_v:14};default:throw new Error("Unreachable")}}ut.Padding.Padding,ut.RichTextRef.RichTextRef,ut.ShapeDef.ShapeRectangle,ut.ShapeDef.ShapeEllipse,ut.ShapeDef.ShapeStar,ut.ShapeDef.ShapeCloud,ut.ShapeDef.ShapePlus,ut.ShapeDef.ShapeTriangle,ut.ShapeDef.ShapeBookmark,ut.ShapeDef.ShapeChevron,ut.ShapeDef.ShapeOctagon,ut.ShapeDef.ShapeParallelogram,ut.ShapeDef.ShapeShield,ut.ShapeDef.ShapeSpeechBubble,ut.ShapeDef.ShapeArrow,ut.ShapeDef.ShapeDef,ut.ShapeItem.ShapeItemFullState,ut.ShapeItem.ShapeItem,ut.ShapeItem.ShapeItemState,ut.State.StateMeta,ut.State.BaseItemFullState,ut.TextItem.TextVerticalAlign,ut.TextItem.TextPadding,ut.TextItem.TextItemFullState,ut.TextItem.TextItem,ut.TextItem.TextItemState,ut.Trigger.TriggerMediaAction,ut.Trigger.TriggerChangeStateAction,ut.Trigger.TriggerChangeVisibilityAction,ut.Trigger.TriggerChangeLayerAction,ut.Trigger.TriggerAction,ut.Trigger.Trigger,ut.Unit.Unit,ut.Version.SchemaVersion,ut.VideoItem.VideoAssets,ut.VideoItem.VideoItemFullState,ut.VideoItem.VideoItem,ut.VideoItem.VideoItemState,mt.Asset.Asset,mt.AudioItem.AudioAssets,mt.AudioItem.AudioItemFullState,mt.AudioItem.AudioItem,mt.AudioItem.AudioItemState,mt.BaseItem.BaseItemState,mt.Blockument.Blockument,mt.BlockumentTransaction.BlockumentTransaction,mt.Border.Border,mt.DropShadow.DropShadow,mt.Fill.FillImageCrop,mt.Fill.FillColorFields,mt.Fill.Fill,mt.GroupItem.GroupItemFullState,mt.GroupItem.GroupItem,mt.GroupItem.GroupItemState,mt.Item.Item,mt.ItemRef.ItemRef,mt.JSONContent.JSONContent;const Da=mt.Manifest.Manifest;function Ja(e){return{...e,_v:15}}function Ra(e){if(e)switch(e.type){case"star":case"plus":case"triangle":case"bookmark":case"chevron":case"octagon":case"parallelogram":case"shield":case"speechBubble":case"arrow":return{...e,cornerRounding:0};default:return e}}function Za(e){return{...e,clipDef:Ra(e.clipDef)}}function Pa(e){return{...e,clipDef:Ra(e.clipDef)}}function _a(e){switch(e.type){case"audio":case"group":case"shape":case"text":case"video":return{...e,_v:15,states:Rt(e.states,Za,Pa)};default:throw new Error}}mt.Padding.Padding,mt.RichTextRef.RichTextRef,mt.ShapeDef.ShapeDefBase,mt.ShapeDef.ShapeDefRoundedCorners,mt.ShapeDef.ShapeRectangle,mt.ShapeDef.ShapeEllipse,mt.ShapeDef.ShapeStar,mt.ShapeDef.ShapeCloud,mt.ShapeDef.ShapePlus,mt.ShapeDef.ShapeTriangle,mt.ShapeDef.ShapeBookmark,mt.ShapeDef.ShapeChevron,mt.ShapeDef.ShapeOctagon,mt.ShapeDef.ShapeParallelogram,mt.ShapeDef.ShapeShield,mt.ShapeDef.ShapeSpeechBubble,mt.ShapeDef.ShapeArrow,mt.ShapeDef.ShapeDef,mt.ShapeItem.ShapeItemFullState,mt.ShapeItem.ShapeItem,mt.ShapeItem.ShapeItemState,mt.State.StateMeta,mt.State.BaseItemFullState,mt.TextItem.TextVerticalAlign,mt.TextItem.TextPadding,mt.TextItem.TextItemFullState,mt.TextItem.TextItem,mt.TextItem.TextItemState,mt.Trigger.TriggerMediaAction,mt.Trigger.TriggerChangeStateAction,mt.Trigger.TriggerChangeVisibilityAction,mt.Trigger.TriggerChangeLayerAction,mt.Trigger.TriggerAction,mt.Trigger.Trigger,mt.Unit.Unit,mt.Version.SchemaVersion,mt.VideoItem.VideoAssets,mt.VideoItem.VideoItemFullState,mt.VideoItem.VideoItem,mt.VideoItem.VideoItemState,gt.Asset.Asset,gt.AudioItem.AudioAssets,gt.AudioItem.AudioItemFullState,gt.AudioItem.AudioItem,gt.AudioItem.AudioItemState,gt.Backdrop.MinimalBackdropData,gt.Backdrop.ExtendedBackdropData,gt.Backdrop.BackdropColorFillData,gt.Backdrop.BackdropImageFillData,gt.Backdrop.GroupBackdropStateData,gt.Backdrop.ShapeBackdropStateData,gt.Backdrop.ImageBackdropStateData,gt.BaseItem.BaseItemState,gt.Blockument.Blockument,gt.BlockumentTransaction.BlockumentTransaction,gt.Border.Border,gt.DropShadow.DropShadow,gt.Fill.FillImageCrop,gt.Fill.FillColor,gt.Fill.FillImage,gt.GroupItem.GroupItemFullState,gt.GroupItem.GroupItem,gt.GroupItem.GroupItemState,gt.ImageItem.ImageItemFullState,gt.ImageItem.ImageItem,gt.ImageItem.ImageItemState,gt.Item.Item,gt.ItemRef.ItemRef,gt.JSONContent.JSONContent;const Ha=gt.Manifest.Manifest;gt.Padding.Padding,gt.RichTextRef.RichTextRef,gt.ShapeDef.ShapeDefBase,gt.ShapeDef.ShapeDefRoundedCorners,gt.ShapeDef.ShapeRectangle,gt.ShapeDef.ShapeEllipse,gt.ShapeDef.ShapeStar,gt.ShapeDef.ShapeCloud,gt.ShapeDef.ShapePlus,gt.ShapeDef.ShapeTriangle,gt.ShapeDef.ShapeBookmark,gt.ShapeDef.ShapeChevron,gt.ShapeDef.ShapeOctagon,gt.ShapeDef.ShapeParallelogram,gt.ShapeDef.ShapeShield,gt.ShapeDef.ShapeSpeechBubble,gt.ShapeDef.ShapeArrow,gt.ShapeDef.ShapeDef,gt.ShapeItem.ShapeItemFullState,gt.ShapeItem.ShapeItem,gt.ShapeItem.ShapeItemState,gt.State.StateMeta,gt.State.BaseItemFullState,gt.TextItem.TextVerticalAlign,gt.TextItem.TextPadding,gt.TextItem.TextItemFullState,gt.TextItem.TextItem,gt.TextItem.TextItemState,gt.Trigger.TriggerMediaAction,gt.Trigger.TriggerChangeStateAction,gt.Trigger.TriggerChangeVisibilityAction,gt.Trigger.TriggerChangeLayerAction,gt.Trigger.TriggerAction,gt.Trigger.Trigger,gt.Unit.Unit,gt.Version.SchemaVersion,gt.VideoItem.VideoAssets,gt.VideoItem.VideoItemFullState,gt.VideoItem.VideoItem,gt.VideoItem.VideoItemState;function $a(e){return{...e,_v:16}}function Oa(e){let t;return t="group"===e.type?function(e){return e.parentId===e.blockumentId?{...e,_v:16,states:Rt(e.states,(e=>({border:{applied:!1,type:"none",color:"#000000",opacity:1,style:"solid",width:{value:1,unit:"px"}},overlay:{opacity:1},fill:{opacity:1},...e})),(e=>e))}:{...e,_v:16,states:Rt(e.states,(e=>({...e,border:{applied:!1,type:"none",color:"#000000",opacity:1,style:"solid",width:{value:1,unit:"px"}},overlay:{opacity:1},fill:{opacity:1}})),(e=>{const{border:t,overlay:a,fill:i,...r}=e;return r}))}}(e):"shape"===e.type?function(e){return"image"===e.states.default.fill.type&&e.states.default.fill.assetId&&e.assets[e.states.default.fill.assetId]?{...e,_v:16,type:"image",states:Rt(e.states,(e=>{const{clipDef:t,altText:a,...i}=e;return{...i,shapeDef:t,altText:a??""}}),(e=>{if("image"===e.fill?.type){const{clipDef:t,altText:a,...i}=e;return{...i,shapeDef:t,altText:a??void 0}}{const{border:t,overlay:a,fill:i,clipDef:r,altText:o,...n}=e;return{...n,shapeDef:r,altText:o??void 0}}}))}:{...e,_v:16,states:Rt(e.states,(e=>{const{clipDef:t,...a}=e;return{...a,shapeDef:t}}),(e=>{if("color"===e.fill?.type){const{clipDef:t,...a}=e;return{...a,shapeDef:t}}{const{border:t,overlay:a,fill:i,clipDef:r,...o}=e;return{...o,shapeDef:r}}}))}}(e):{...e,_v:16},function(e){const t=[];"audio"===e.type&&t.push(...Object.values(e.states).map((e=>e.audioSources?.default))),"video"===e.type&&t.push(...Object.values(e.states).map((e=>e.videoSources?.default))),"image"===e.type&&t.push(...Object.values(e.states).map((e=>e.fill?.assetId)));const a=new Set(t);e.assets=ga(e.assets,((e,t)=>a.has(t)))}(t),t}ft.Asset.Asset,ft.AudioItem.AudioAssets,ft.AudioItem.AudioItemFullState,ft.AudioItem.AudioItem,ft.AudioItem.AudioItemState,ft.Backdrop.MinimalBackdropData,ft.Backdrop.ExtendedBackdropData,ft.Backdrop.BackdropColorFillData,ft.Backdrop.BackdropImageFillData,ft.Backdrop.GroupBackdropStateData,ft.Backdrop.ShapeBackdropStateData,ft.Backdrop.ImageBackdropStateData,ft.BaseItem.BaseItemState,ft.Blockument.Blockument,ft.BlockumentTransaction.BlockumentTransaction,ft.Border.Border,ft.DropShadow.DropShadow,ft.Fill.FillImageCrop,ft.Fill.FillColor,ft.Fill.FillImage,ft.GroupItem.GroupItemFullState,ft.GroupItem.GroupItem,ft.GroupItem.GroupItemState,ft.ImageItem.ImageItemFullState,ft.ImageItem.ImageItem,ft.ImageItem.ImageItemState,ft.Item.Item,ft.ItemRef.ItemRef,ft.JSONContent.JSONContent;const Ea=ft.Manifest.Manifest;function Na(e){return{...e,_v:17}}function ja(e){return{...e,_v:17}}ft.RichTextRef.RichTextRef,ft.ShapeDef.ShapeDefBase,ft.ShapeDef.ShapeDefRoundedCorners,ft.ShapeDef.ShapeRectangle,ft.ShapeDef.ShapeEllipse,ft.ShapeDef.ShapeStar,ft.ShapeDef.ShapeCloud,ft.ShapeDef.ShapePlus,ft.ShapeDef.ShapeTriangle,ft.ShapeDef.ShapeBookmark,ft.ShapeDef.ShapeChevron,ft.ShapeDef.ShapeOctagon,ft.ShapeDef.ShapeParallelogram,ft.ShapeDef.ShapeShield,ft.ShapeDef.ShapeSpeechBubble,ft.ShapeDef.ShapeArrow,ft.ShapeDef.ShapeDef,ft.ShapeItem.ShapeItemFullState,ft.ShapeItem.ShapeItem,ft.ShapeItem.ShapeItemState,ft.State.StateMeta,ft.State.BaseItemFullState,ft.TextItem.TextVerticalAlign,ft.TextItem.TextPadding,ft.TextItem.TextItemFullState,ft.TextItem.TextItem,ft.TextItem.TextItemState,ft.Trigger.TriggerMediaAction,ft.Trigger.TriggerChangeStateAction,ft.Trigger.TriggerChangeVisibilityAction,ft.Trigger.TriggerChangeLayerAction,ft.Trigger.TriggerAction,ft.Trigger.Trigger,ft.Unit.Unit,ft.Version.SchemaVersion,ft.VideoItem.VideoAssets,ft.VideoItem.VideoItemFullState,ft.VideoItem.VideoItem,ft.VideoItem.VideoItemState,vt.Asset.Asset,vt.AudioItem.AudioAssets,vt.AudioItem.AudioItemFullState,vt.AudioItem.AudioItem,vt.AudioItem.AudioItemState,vt.Backdrop.MinimalBackdropData,vt.Backdrop.ExtendedBackdropData,vt.Backdrop.BackdropColorFillData,vt.Backdrop.BackdropImageFillData,vt.Backdrop.GroupBackdropStateData,vt.Backdrop.ShapeBackdropStateData,vt.Backdrop.ImageBackdropStateData,vt.BaseItem.BaseItemState,vt.Blockument.Blockument,vt.BlockumentTransaction.BlockumentTransaction,vt.Border.Border,vt.DropShadow.DropShadow,vt.Fill.FillImageCrop,vt.Fill.FillColor,vt.Fill.FillImage,vt.GroupItem.GroupItemFullState,vt.GroupItem.GroupItem,vt.GroupItem.GroupItemState,vt.ImageItem.ImageItemFullState,vt.ImageItem.ImageItem,vt.ImageItem.ImageItemState,vt.Item.Item,vt.ItemRef.ItemRef,vt.JSONContent.JSONContent,vt.JSONContentStrict.Mark,vt.JSONContentStrict.BreakNode,vt.JSONContentStrict.TextNode,vt.JSONContentStrict.InlineNode,vt.JSONContentStrict.BlockNodeContent,vt.JSONContentStrict.ParagraphNode,vt.JSONContentStrict.HeadingNode,vt.JSONContentStrict.ListItemNode,vt.JSONContentStrict.OrdererdListNode,vt.JSONContentStrict.UnorderedListNode,vt.JSONContentStrict.BlockNode,vt.JSONContentStrict.DocNode;const Ga=vt.Manifest.Manifest;function qa(e){return{...e,authoringOpened:!0,_v:18}}function Ua(e){return{...e,_v:18}}vt.RichTextRef.RichTextRef,vt.ShapeDef.ShapeDefBase,vt.ShapeDef.ShapeDefRoundedCorners,vt.ShapeDef.ShapeRectangle,vt.ShapeDef.ShapeEllipse,vt.ShapeDef.ShapeStar,vt.ShapeDef.ShapeCloud,vt.ShapeDef.ShapePlus,vt.ShapeDef.ShapeTriangle,vt.ShapeDef.ShapeBookmark,vt.ShapeDef.ShapeChevron,vt.ShapeDef.ShapeOctagon,vt.ShapeDef.ShapeParallelogram,vt.ShapeDef.ShapeShield,vt.ShapeDef.ShapeSpeechBubble,vt.ShapeDef.ShapeArrow,vt.ShapeDef.ShapeDef,vt.ShapeItem.ShapeItemFullState,vt.ShapeItem.ShapeItem,vt.ShapeItem.ShapeItemState,vt.State.StateMeta,vt.State.BaseItemFullState,vt.TextItem.TextVerticalAlign,vt.TextItem.TextPadding,vt.TextItem.TextItemFullState,vt.TextItem.TextItem,vt.TextItem.TextItemState,vt.Trigger.TriggerMediaAction,vt.Trigger.TriggerChangeStateAction,vt.Trigger.TriggerChangeVisibilityAction,vt.Trigger.TriggerChangeLayerAction,vt.Trigger.TriggerAction,vt.Trigger.Trigger,vt.Unit.Unit,vt.Version.SchemaVersion,vt.VideoItem.VideoAssets,vt.VideoItem.VideoItemFullState,vt.VideoItem.VideoItem,vt.VideoItem.VideoItemState,bt.Asset.Asset,bt.AudioItem.AudioAssets,bt.AudioItem.AudioItemFullState,bt.AudioItem.AudioItem,bt.AudioItem.AudioItemState,bt.Backdrop.MinimalBackdropData,bt.Backdrop.ExtendedBackdropData,bt.Backdrop.BackdropColorFillData,bt.Backdrop.BackdropImageFillData,bt.Backdrop.GroupBackdropStateData,bt.Backdrop.ShapeBackdropStateData,bt.Backdrop.ImageBackdropStateData,bt.BaseItem.BaseItemState,bt.Blockument.Blockument,bt.BlockumentTransaction.BlockumentTransaction,bt.Border.Border,bt.DropShadow.DropShadow,bt.Fill.FillImageCrop,bt.Fill.FillColor,bt.Fill.FillImage,bt.GroupItem.GroupItemFullState,bt.GroupItem.GroupItem,bt.GroupItem.GroupItemState,bt.ImageItem.ImageItemFullState,bt.ImageItem.ImageItem,bt.ImageItem.ImageItemState,bt.Item.Item,bt.ItemRef.ItemRef,bt.JSONContent.JSONContent,bt.JSONContentStrict.Mark,bt.JSONContentStrict.BreakNode,bt.JSONContentStrict.TextNode,bt.JSONContentStrict.InlineNode,bt.JSONContentStrict.BlockNodeContent,bt.JSONContentStrict.ParagraphNode,bt.JSONContentStrict.HeadingNode,bt.JSONContentStrict.ListItemNode,bt.JSONContentStrict.OrdererdListNode,bt.JSONContentStrict.UnorderedListNode,bt.JSONContentStrict.BlockNode,bt.JSONContentStrict.DocNode;const Ya=bt.Manifest.Manifest;function Xa(e){return{...e,_v:19}}function Wa(e){return"shape"===e.type?{...e,_v:19,states:Rt(e.states,(e=>({...e,altText:""})),(e=>e))}:{...e,_v:19}}bt.RichTextRef.RichTextRef,bt.ShapeDef.ShapeDefBase,bt.ShapeDef.ShapeDefRoundedCorners,bt.ShapeDef.ShapeRectangle,bt.ShapeDef.ShapeEllipse,bt.ShapeDef.ShapeStar,bt.ShapeDef.ShapeCloud,bt.ShapeDef.ShapePlus,bt.ShapeDef.ShapeTriangle,bt.ShapeDef.ShapeBookmark,bt.ShapeDef.ShapeChevron,bt.ShapeDef.ShapeOctagon,bt.ShapeDef.ShapeParallelogram,bt.ShapeDef.ShapeShield,bt.ShapeDef.ShapeSpeechBubble,bt.ShapeDef.ShapeArrow,bt.ShapeDef.ShapeDef,bt.ShapeItem.ShapeItemFullState,bt.ShapeItem.ShapeItem,bt.ShapeItem.ShapeItemState,bt.State.StateMeta,bt.State.BaseItemFullState,bt.TextItem.TextVerticalAlign,bt.TextItem.TextPadding,bt.TextItem.TextItemFullState,bt.TextItem.TextItem,bt.TextItem.TextItemState,bt.Trigger.TriggerMediaAction,bt.Trigger.TriggerChangeStateAction,bt.Trigger.TriggerChangeVisibilityAction,bt.Trigger.TriggerChangeLayerAction,bt.Trigger.TriggerAction,bt.Trigger.Trigger,bt.Unit.Unit,bt.Version.SchemaVersion,bt.VideoItem.VideoAssets,bt.VideoItem.VideoItemFullState,bt.VideoItem.VideoItem,bt.VideoItem.VideoItemState,St.Asset.Asset,St.AudioItem.AudioAssets,St.AudioItem.AudioItemFullState,St.AudioItem.AudioItem,St.AudioItem.AudioItemState,St.Backdrop.MinimalBackdropData,St.Backdrop.ExtendedBackdropData,St.Backdrop.BackdropColorFillData,St.Backdrop.BackdropImageFillData,St.Backdrop.GroupBackdropStateData,St.Backdrop.ShapeBackdropStateData,St.Backdrop.ImageBackdropStateData,St.BaseItem.BaseItemState,St.Blockument.Blockument,St.BlockumentTransaction.BlockumentTransaction,St.Border.Border,St.DropShadow.DropShadow,St.Fill.FillImageCrop,St.Fill.FillColor,St.Fill.FillImage,St.GroupItem.GroupItemFullState,St.GroupItem.GroupItem,St.GroupItem.GroupItemState,St.ImageItem.ImageItemFullState,St.ImageItem.ImageItem,St.ImageItem.ImageItemState,St.Item.Item,St.ItemRef.ItemRef,St.JSONContent.JSONContent,St.JSONContentStrict.Mark,St.JSONContentStrict.BreakNode,St.JSONContentStrict.TextNode,St.JSONContentStrict.InlineNode,St.JSONContentStrict.BlockNodeContent,St.JSONContentStrict.ParagraphNode,St.JSONContentStrict.HeadingNode,St.JSONContentStrict.ListItemNode,St.JSONContentStrict.OrdererdListNode,St.JSONContentStrict.UnorderedListNode,St.JSONContentStrict.BlockNode,St.JSONContentStrict.DocNode;const Ka=St.Manifest.Manifest,Qa=(St.RichTextRef.RichTextRef,St.ShapeDef.ShapeDefBase,St.ShapeDef.ShapeDefRoundedCorners,St.ShapeDef.ShapeRectangle,St.ShapeDef.ShapeEllipse,St.ShapeDef.ShapeStar,St.ShapeDef.ShapeCloud,St.ShapeDef.ShapePlus,St.ShapeDef.ShapeTriangle,St.ShapeDef.ShapeBookmark,St.ShapeDef.ShapeChevron,St.ShapeDef.ShapeOctagon,St.ShapeDef.ShapeParallelogram,St.ShapeDef.ShapeShield,St.ShapeDef.ShapeSpeechBubble,St.ShapeDef.ShapeArrow,St.ShapeDef.ShapeDef,St.ShapeItem.ShapeItemFullState,St.ShapeItem.ShapeItem,St.ShapeItem.ShapeItemState,St.State.StateMeta,St.State.BaseItemFullState,St.TextItem.TextVerticalAlign,St.TextItem.TextPadding,St.TextItem.TextItemFullState,St.TextItem.TextItem,St.TextItem.TextItemState,St.Trigger.TriggerMediaAction,St.Trigger.TriggerChangeStateAction,St.Trigger.TriggerChangeVisibilityAction,St.Trigger.TriggerChangeLayerAction,St.Trigger.TriggerAction,St.Trigger.Trigger,St.Unit.Unit,St.Version.SchemaVersion,St.VideoItem.VideoAssets,St.VideoItem.VideoItemFullState,St.VideoItem.VideoItem,St.VideoItem.VideoItemState,"var(--mon-theme-font-body)"),ei="#000000";function ti({callback:e,contentTypes:t,doc:a}){for(const i of a.content??[])i.type&&t.includes(i.type)&&e(i,a),i.content&&ti({callback:e,contentTypes:t,doc:i});return a}function ai(e){ti({callback:e=>{e.marks&&(e.marks=e.marks.filter((e=>"code"!==e.type)))},contentTypes:["text"],doc:e})}function ii(e){return e.text?.json?(ai(e.text?.json),e):e}function ri(e){return e.text?.json?(ai(e.text?.json),e):e}function oi(e){return e.text?.json?(ai(e.text?.json),e):e}function ni(e){return e.text?.json?(ai(e.text?.json),e):e}function li(e){return{...e,_v:20}}function si(e){switch(e.type){case"text":return{...e,_v:20,states:Rt(e.states,ii,ri)};case"shape":return{...e,_v:20,states:Rt(e.states,oi,ni)};default:return{...e,_v:20}}}yt.Asset.Asset,yt.AudioItem.AudioAssets,yt.AudioItem.AiAudioSettings,yt.AudioItem.AudioItemFullState,yt.AudioItem.AudioItem,yt.AudioItem.AudioItemState,yt.Backdrop.MinimalBackdropData,yt.Backdrop.ExtendedBackdropData,yt.Backdrop.BackdropColorFillData,yt.Backdrop.BackdropImageFillData,yt.Backdrop.GroupBackdropStateData,yt.Backdrop.ShapeBackdropStateData,yt.Backdrop.ImageBackdropStateData,yt.BaseItem.BaseItemState,yt.Blockument.Blockument,yt.BlockumentTransaction.BlockumentTransaction,yt.Border.Border,yt.DropShadow.DropShadow,yt.Fill.FillImageCrop,yt.Fill.FillColor,yt.Fill.FillImage,yt.GroupItem.GroupItemFullState,yt.GroupItem.GroupItem,yt.GroupItem.GroupItemState,yt.ImageItem.ImageItemFullState,yt.ImageItem.ImageItem,yt.ImageItem.ImageItemState,yt.Item.Item,yt.ItemRef.ItemRef,yt.JSONContent.JSONContent,yt.JSONContentStrict.Mark,yt.JSONContentStrict.BreakNode,yt.JSONContentStrict.TextNode,yt.JSONContentStrict.InlineNode,yt.JSONContentStrict.BlockNodeContent,yt.JSONContentStrict.ParagraphNode,yt.JSONContentStrict.HeadingNode,yt.JSONContentStrict.ListItemNode,yt.JSONContentStrict.OrdererdListNode,yt.JSONContentStrict.UnorderedListNode,yt.JSONContentStrict.BlockNode,yt.JSONContentStrict.DocNode;const ci=yt.Manifest.Manifest;function di(e){return{...e,_v:21}}function pi(e){return{...e,_v:21}}yt.RichTextRef.RichTextRef,yt.ShapeDef.ShapeDefBase,yt.ShapeDef.ShapeDefRoundedCorners,yt.ShapeDef.ShapeRectangle,yt.ShapeDef.ShapeEllipse,yt.ShapeDef.ShapeStar,yt.ShapeDef.ShapeCloud,yt.ShapeDef.ShapePlus,yt.ShapeDef.ShapeTriangle,yt.ShapeDef.ShapeBookmark,yt.ShapeDef.ShapeChevron,yt.ShapeDef.ShapeOctagon,yt.ShapeDef.ShapeParallelogram,yt.ShapeDef.ShapeShield,yt.ShapeDef.ShapeSpeechBubble,yt.ShapeDef.ShapeArrow,yt.ShapeDef.ShapeDef,yt.ShapeItem.ShapeItemFullState,yt.ShapeItem.ShapeItem,yt.ShapeItem.ShapeItemState,yt.State.StateMeta,yt.State.BaseItemFullState,yt.TextItem.TextVerticalAlign,yt.TextItem.TextPadding,yt.TextItem.TextItemFullState,yt.TextItem.TextItem,yt.TextItem.TextItemState,yt.Trigger.TriggerMediaAction,yt.Trigger.TriggerChangeStateAction,yt.Trigger.TriggerChangeVisibilityAction,yt.Trigger.TriggerChangeLayerAction,yt.Trigger.TriggerAction,yt.Trigger.Trigger,yt.Unit.Unit,yt.Version.SchemaVersion,yt.VideoItem.VideoAssets,yt.VideoItem.VideoItemFullState,yt.VideoItem.VideoItem,yt.VideoItem.VideoItemState;const hi=[{version:3,upgrade:function({blockuments:e,items:t}){return{blockuments:Jt(e??{},(e=>({...e,_v:3}))),items:Jt(t??{},_t)}},InputSchema:Vt,OutputSchema:Dt},{version:4,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},(e=>({...e,_v:4}))),items:Jt(e.items??{},jt)}},InputSchema:Dt,OutputSchema:Ht},{version:5,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},(e=>({...e,_v:5}))),items:Jt(e.items??{},Xt)}},InputSchema:Ht,OutputSchema:Gt},{version:6,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},(e=>({...e,_v:6}))),items:Jt(e.items??{},Kt)}},InputSchema:Gt,OutputSchema:Wt},{version:7,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},(e=>({...e,_v:7}))),items:Jt(e.items??{},ta)}},InputSchema:Wt,OutputSchema:Qt},{version:8,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},(e=>({...e,_v:8}))),items:Jt(e.items??{},ra)}},InputSchema:Qt,OutputSchema:aa},{version:9,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},na),items:Jt(e.items??{},la)}},InputSchema:aa,OutputSchema:oa},{version:10,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},(e=>({...e,_v:10}))),items:Jt(e.items??{},ca)}},InputSchema:oa,OutputSchema:sa},{version:11,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},ha),items:Jt(e.items??{},ua)}},InputSchema:sa,OutputSchema:da},{version:12,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},ya),items:Jt(e.items??{},Ia)}},InputSchema:da,OutputSchema:ma},{version:13,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},za),items:Jt(e.items??{},La)}},InputSchema:ma,OutputSchema:wa},{version:14,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},Aa),items:Jt(e.items??{},Va)}},InputSchema:wa,OutputSchema:Ma},{version:15,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},Ja),items:Jt(e.items??{},_a)}},InputSchema:Ma,OutputSchema:Da},{version:16,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},$a),items:Jt(e.items??{},Oa)}},InputSchema:Da,OutputSchema:Ha},{version:17,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},Na),items:Jt(e.items??{},ja)}},InputSchema:Ha,OutputSchema:Ea},{version:18,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},qa),items:Jt(e.items??{},Ua)}},InputSchema:Ea,OutputSchema:Ga},{version:19,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},Xa),items:Jt(e.items??{},Wa)}},InputSchema:Ga,OutputSchema:Ya},{version:20,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},li),items:Jt(e.items??{},si)}},InputSchema:Ya,OutputSchema:Ka},{version:21,upgrade:function(e){return{blockuments:Jt(e.blockuments??{},di),items:Jt(e.items??{},pi)}},InputSchema:Ka,OutputSchema:ci}];a(9840);const ui={top:20,left:20,bottom:20,right:20},mi={top:0,left:0,bottom:0,right:0};var gi=a(4198),fi=a(4717),vi=a(3004),bi=a(4758),Si=a(1212),yi=a(2359),xi=a(31),Ci=a(2740),Ii=a(2559),wi=a(5873),zi=a(9395);function ki(e){return"string"==typeof e?e.replace(/[:;]/g,""):"number"==typeof e?String(e):""}const Ti=/([a-z%]+)\s*$/i;function Li({attributes:e,chain:t,editor:a,selection:i}){const r=[];a.state.doc.nodesBetween(i.from,i.to,((e,t)=>{"listItem"===e.type.name&&r.push({node:e,pos:t})}));const o=i.$from.start()===i.from;if(r.length>1){for(const{node:a,pos:n}of r)(o||n>=i.from&&n<=i.to)&&t.setTextSelection({from:n,to:n+a.nodeSize}).updateAttributes("listItem",e);t.setTextSelection({from:i.from,to:i.to})}else a.isActive("listItem")&&o&&t.updateAttributes("listItem",e);return t}function Mi(e){let t=e.style.fontSize;if(!t)if(e.closest){const a=e.closest('[style*="font-size:"]')?.style?.fontSize;t=a||""}else e.parentNode&&"style"in e.parentNode&&(t=e.parentNode.style.fontSize||"");const a=parseFloat(t);if(isNaN(a))return null;const i=Ti.exec(t);if(null==i)return null;switch(i[1]){case"rem":return Math.round(10*a);case"px":return Math.round(a);case"pt":return r=a,Math.round(4*r/3);default:return null}var r}const Ai=gi.YY.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle","highlight","listItem"],attributes:{textSize:{default:17,parseHTML:e=>Mi(e),renderHTML:e=>({style:`font-size: ${e.textSize/10}rem`})}}}],addCommands:()=>({setTextSize:e=>({chain:t,editor:a,tr:{selection:i}})=>{const r=a.isActive("highlight"),o=t().setMark("textStyle",{textSize:e});return r&&o.setMark("highlight",{textSize:e}),Li({attributes:{textSize:e},chain:o,editor:a,selection:i}).run()}})}),Bi=gi.YY.create({name:"lineHeight",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{lineHeight:{default:2,parseHTML(e){const t=e.style.lineHeight,a=parseFloat(t);return isNaN(a)?null:a},renderHTML:e=>({style:`line-height: ${ki(e.lineHeight)}`})}}}],addCommands:()=>({setLineHeight:e=>({commands:t})=>{const a=t.updateAttributes("paragraph",{lineHeight:e}),i=t.updateAttributes("heading",{lineHeight:e});return a&&i}})}),Fi=gi.YY.create({name:"spaceAfter",addGlobalAttributes:()=>[{types:["paragraph","heading"],attributes:{spaceAfter:{default:0,parseHTML(e){const t=e.style.marginBlockEnd||e.style.marginBottom;if(!t)return null;const a=t.match(/^\s*(\d+(\.\d+)?)\s*(cm|mm|in|px|pt|pc|em|rem|ex|ch)\s*$/i);if(!a)return null;const i=Number(a[1]),r=a[3];if(isNaN(i)||i<0)return null;switch(r.toLowerCase()){case"cm":return i/2.54*96;case"mm":return i/25.4*96;case"in":return 96*i;case"px":return i;case"pt":return i/72*96;case"pc":return i/6*96;case"em":{const t=Mi(e);return t?i*t:null}case"rem":return 16*i;case"ex":return 7*i;case"ch":return 8*i;default:return null}},renderHTML:e=>({style:`margin-block-end: ${ki(e.spaceAfter)}px;`})}}}],addCommands:()=>({setSpaceAfter:e=>({commands:t})=>{const a=t.updateAttributes("paragraph",{spaceAfter:e}),i=t.updateAttributes("heading",{spaceAfter:e});return a&&i}})}),Vi=gi.YY.create({name:"fontFamily",addGlobalAttributes:()=>[{types:["textStyle","listItem"],attributes:{fontFamily:{default:Qa,parseHTML:e=>e.style.fontFamily,renderHTML:e=>e.fontFamily?{style:`font-family: ${ki(e.fontFamily)}`}:{}}}}],addCommands:()=>({setFontFamily:e=>({chain:t,editor:a,tr:{selection:i}})=>{const r=t();return r.setMark("textStyle",{fontFamily:e}),Li({attributes:{fontFamily:e},chain:r,editor:a,selection:i}).run()}})}),Di=fi.A.extend({addGlobalAttributes(){const e=this.parent(),t=e[0].attributes.color.renderHTML;return e[0].attributes.color.renderHTML=({color:e})=>t({color:ki(e)}),e},addCommands:()=>({setColor:e=>({chain:t,editor:a,tr:i})=>{const{selection:r}=i,o=t();return o.setMark("textStyle",{color:e}),a.getAttributes("link").href&&o.updateAttributes("link",{unlinkColor:e}),!0===i.getMeta("linkUpdateColorChange")?o.run():Li({attributes:{color:e},chain:o,editor:a,selection:r}).run()},unsetColor:()=>({chain:e,editor:t,tr:{selection:a}})=>{const i=e();return i.setMark("textStyle",{color:null}).removeEmptyTextStyle(),Li({attributes:{color:null},chain:i,editor:t,selection:a}).run()}})}).configure({types:["textStyle","listItem"]}),Ji=vi.Ay.extend({addAttributes(){const e=this.parent(),t=e.color.renderHTML;return e.color.renderHTML=({color:e})=>t({color:ki(e)}),e}}).configure({multicolor:!0}),Ri=yi.A.extend({addGlobalAttributes(){const e=this.parent(),t=e[0].attributes.textAlign.renderHTML;return e[0].attributes.textAlign.renderHTML=({textAlign:e})=>t({textAlign:ki(e)}),e}}).configure({types:["heading","paragraph"]}),Zi={rel:"noopener noreferrer",target:"_blank"},Pi=Si.Ay.extend({addAttributes(){return{...this.parent(),rel:{default:Zi.rel,parseHTML:e=>e.getAttribute("rel"),renderHTML:()=>({rel:Zi.rel})},target:{default:Zi.target,parseHTML:e=>e.getAttribute("target"),renderHTML:()=>({target:Zi.target})},unlinkColor:{default:ei}}}}),_i=gi.YY.create({name:"init",addCommands:()=>({initFontFamily:()=>({chain:e})=>e().setFontFamily(Qa).run(),initLineHeight:()=>({chain:e})=>e().setLineHeight(2).run(),initTextSize:()=>({chain:e})=>e().setTextSize(17).run(),initColor:()=>({chain:e})=>e().setColor(ei).run()})}),Hi="latestDefocusedSelectionDecoration",$i=gi.YY.create({name:Hi,addProseMirrorPlugins:()=>[new Ii.k_({key:new Ii.hs(Hi),state:{init:e=>wi.zF.empty,apply(e,t){const{doc:a,selection:i}=e,r=e.getMeta(Hi),o=i&&i.from!==i.to;if(!o||"focus"===r?.action)return wi.zF.empty;if(o&&"blur"===r?.action){const e=wi.NZ.inline(i.from,i.to,{class:"latest-defocused-selection",nodeName:"mark"});return wi.zF.create(a,[e])}return t}},props:{decorations(e){return this.getState(e)},handleDOMEvents:{blur(e){const{tr:t}=e.state,a=t.setMeta(Hi,{from:t.selection.from,to:t.selection.to,action:"blur"});e.dispatch(a)},focus(e){const{tr:t}=e.state,a=t.setMeta(Hi,{from:t.selection.from,to:t.selection.to,action:"focus"});e.dispatch(a)}}}})]}),Oi=gi.YY.create({name:"clearMarksOnEnter",addKeyboardShortcuts(){return{Enter:()=>{const{state:e}=this.editor,{selection:t}=e,{$from:a,empty:i}=t;if(!i)return!1;const r=a.parent;if("heading"!==r.type.name)return!1;const o=a.marks().filter((e=>"textStyle"===e.type.name));let n=null;o.length>0&&(n=o[0].attrs.color||null);const l=r.attrs.textAlign||"left";let s=this.editor.chain().splitBlock().setParagraph().setTextAlign(l);return s=s.unsetMark("bold").unsetMark("italic").unsetMark("underline").unsetMark("strike").unsetMark("highlight"),s=n?s.setMark("textStyle",{color:n}):s.unsetMark("textStyle"),s.run()}}}}),Ei=[xi.A,zi.A.configure({code:!1,history:!1,heading:{levels:[2,3,4,5,6]}}),Ri,Ji,Oi,Di,Ai,Bi,Fi,Ci.A,bi.A,Vi,_i,$i,Pi.configure({HTMLAttributes:Zi,openOnClick:!1,protocols:["http","https","mailto"]})];(0,gi._w)(Ei);var Ni=a(4982);const ji=e=>{if(e<=0||isNaN(e))return;const t=Math.min(Math.floor(e/3600),0),a=Math.floor(e/60)-60*t;return{hours:t,minutes:a,seconds:e-60*a-3600*t}},Gi=e=>e.map((e=>e.toString().padStart(2,"0"))),qi=(e,t=!0)=>{const a=ji(e);if(!a)return(t?"":"0")+"0:00";const{hours:i,minutes:r,seconds:o}=a,n=i>0?[i,r,o]:[r,o],[l,...s]=n;return(t?[l,...Gi(s)]:Gi(n)).join(":")},Ui=e=>{const t=ji(e);if(!t)return"0 seconds";const{hours:a,minutes:i,seconds:r}=t;let o="";return a>0&&(o+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"hour",unitDisplay:"long"}).format(a)} `),i>0&&(o+=`${new Intl.NumberFormat(void 0,{style:"unit",unit:"minute",unitDisplay:"long"}).format(i)} `),o+=new Intl.NumberFormat(void 0,{style:"unit",unit:"second",unitDisplay:"long"}).format(Math.round(r)),o};function Yi(e,t,a,i){return t.addEventListener(e,a,i),()=>{t.removeEventListener(e,a,i)}}function Xi(e=window.document){const t=e.activeElement;return t?t.shadowRoot?Xi(t.shadowRoot):t:null}let Wi=[];function Ki(e){const t=Wi.findIndex((t=>t.element===e));t>=0&&Wi.splice(t,1),e.hidePopover()}const Qi=(()=>{const e=document.createElement("div");e.style.visibility="hidden",e.style.overflowX="hidden",e.style.overflowY="scroll",document.body.appendChild(e);const t=e.offsetWidth-e.scrollWidth;return e.remove(),t})();function er(e,t,a){return t<e?e:t>a?a:t}function tr({fromPoint:e,fromValue:t,toPoint:a,toValue:i},r){const o=r.x-e.x,n=r.y-e.y,l=a.x-e.x,s=a.y-e.y,c=(o*l+n*s)/(l*l+s*s);return(1-c)*t+c*i}function ar({fromPoint:e,fromValue:t,toPoint:a,toValue:i},r){const o=(r-t)/(i-t),n=1-o;return{x:e.x*n+a.x*o,y:e.y*n+a.y*o}}function ir({fromPoint:e,i:t,j:a},i){const r=ar({fromPoint:e,...t},i.x),o=ar({fromPoint:e,...a},i.y);return{x:r.x+o.x-e.x,y:r.y+o.y-e.y}}document.body.style.setProperty("--ua-scrollbar-width",`${Qi}px`);const{sqrt:rr,min:or,atan2:nr,tan:lr,PI:sr,abs:cr}=Math;function dr(e,t,a){const i=or(.5*e.l,.5*t.l,a);if(i<.1)return null;let r=1,o=nr(e.y0-e.y3,e.x0-e.x3)-nr(t.y3-t.y0,t.x3-t.x0);o<0&&(o=-o,r^=1),o>sr&&(o=2*sr-o,r^=1);const n=lr(.5*o)*i;if(n<.1||n>1e6)return null;const l=1-i/e.l,s=i/t.l,c=e.x0*(1-l)+e.x3*l,d=e.y0*(1-l)+e.y3*l,p=t.x0*(1-s)+t.x3*s,h=t.y0*(1-s)+t.y3*s;return e.x2=c,e.y2=d,t.x1=p,t.y1=h,`a ${n} ${n} 0 0 ${r} ${p-c},${h-d}`}function pr(e,t,a,i,r){if(t.length<2)throw new Error("emitPathRounded must have at least two path components!");const o=[],{p:{x:n,y:l}}=e;let s=n,c=l;function d(e,t){const a=e.x,o=e.y,n=`${(a-s)*i},${(o-c)*r}`;return t&&(s=a,c=o),n}function p(e,t){const a=e.x,o=e.y,n=`${a*i},${o*r}`;return t&&(s+=a,c+=o),n}function h(e,t,a){let n=e,l=t;a&&(n+=s,l+=c);const d=s*i,p=c*r,h=n*i,u=l*r,m=d-h,g=p-u,f=rr(m*m+g*g);o.push({x0:d,y0:p,x1:d,y1:p,x2:h,y2:u,x3:h,y3:u,l:f}),s=n,c=l}for(const e of t)switch(e.cmd){case"T":o.push(`t ${d(e.p,!0)}`);break;case"t":o.push(`t ${p(e.p,!0)}`);break;case"Q":o.push(`q ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"q":o.push(`q ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"S":o.push(`s ${d(e.c,!1)} ${d(e.p,!0)}`);break;case"s":o.push(`s ${p(e.c,!1)} ${p(e.p,!0)}`);break;case"C":o.push(`c ${d(e.c1,!1)} ${d(e.c2,!1)} ${d(e.p,!0)}`);break;case"c":o.push(`c ${p(e.c1,!1)} ${p(e.c2,!1)} ${p(e.p,!0)}`);break;case"A":o.push(`a ${e.radius.x*i} ${e.radius.y*r} ${e.angle} ${+e.large} ${+e.sweep} ${d(e.p,!0)}`);break;case"a":o.push(`a ${e.radius.x*i} ${e.radius.y*r} ${e.angle} ${+e.large} ${+e.sweep} ${p(e.p,!0)}`);break;case"H":h(e.v,c,!1);break;case"h":h(e.v,0,!0);break;case"V":h(s,e.v,!1);break;case"v":h(0,e.v,!0);break;case"L":h(e.p.x,e.p.y,!1);break;case"l":h(e.p.x,e.p.y,!0)}return(cr(s-n)>.01||cr(c-l)>.01)&&h(n,l,!1),function(e,t,a,i){const r=[];for(let e=0;e<a.length;e+=1){const t=a[e],o=a[e+1]??a[0];if(r.push(t),"string"!=typeof t&&"string"!=typeof o){const e=dr(t,o,i);e&&r.push(e)}}const o=r[0],n=["string"==typeof o?`m ${e},${t}`:`m ${o.x1},${o.y1}`];for(const e of r)n.push("string"==typeof e?e:`l ${e.x2-e.x1},${e.y2-e.y1}`);return n.push("z"),n.join(" ")}(n,l,o,a)}function hr({width:e,height:t}){return{fromPoint:{x:0,y:0},i:{fromValue:1,toPoint:{x:e,y:0},toValue:0},j:{fromValue:.5,toPoint:{x:0,y:t},toValue:-.5}}}const ur={discriminator:"arrow",clipPath({cornerRounding:e,thickness:t,headLength:a},{width:i,height:r}){const o=1-a;return pr({cmd:"M",p:{x:0,y:.5-t}},[{cmd:"H",v:o},{cmd:"V",v:0},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:o,y:1}},{cmd:"V",v:.5+t},{cmd:"H",v:0}],e,i,r)},textExtents({thickness:e,headLength:t}){const a=.5-e;return{left:0,top:a,width:2*a*t+(1-t),height:.5+e-a}},getControlPoints:({thickness:e,headLength:t},a,i,r,o)=>[{position:ir(hr(a),{x:t,y:e}),style:"normal"}],dragControlPoint(e,t,a,i,r,o){const n=function({fromPoint:e,i:t,j:a},i){return{x:tr({fromPoint:e,...t},i),y:tr({fromPoint:e,...a},i)}}(hr(t),i);return{...e,thickness:er(.1,n.y,.5),headLength:er(.1,n.x,.9)}}},mr={discriminator:"bookmark",textExtents:({cutoutInset:e})=>({left:0,top:0,width:1,height:1-e}),clipPath:({cornerRounding:e,cutoutInset:t},{width:a,height:i})=>pr({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:.5,y:1-t}},{cmd:"L",p:{x:1,y:1}},{cmd:"L",p:{x:1,y:0}},{cmd:"L",p:{x:0,y:0}}],e,a,i),getControlPoints:({cutoutInset:e},t)=>[{position:ar(gr(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,i)=>({...e,cutoutInset:er(0,tr(gr(t)[a],i),.8)})};function gr({width:e,height:t}){const a=.5*e;return[{fromPoint:{x:a,y:.2*t},fromValue:.8,toPoint:{x:a,y:t},toValue:0}]}function fr({width:e,height:t}){return[{fromPoint:{x:.3*e,y:.5*t},fromValue:.3,toPoint:{x:0,y:.5*t},toValue:0},{fromPoint:{x:.7*e,y:.5*t},fromValue:.7,toPoint:{x:1*e,y:.5*t},toValue:1}]}const vr={discriminator:"chevron",clipPath:({cornerRounding:e,insideCenterXCoord:t,outsideCornerXCoords:a},{width:i,height:r})=>pr({cmd:"M",p:{x:0,y:0}},[{cmd:"L",p:{x:a,y:0}},{cmd:"L",p:{x:1,y:.5}},{cmd:"L",p:{x:a,y:1}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:t,y:.5}},{cmd:"L",p:{x:0,y:0}}],e,i,r),textExtents:({insideCenterXCoord:e,outsideCornerXCoords:t})=>({left:e,top:0,width:t-e,height:1}),getControlPoints({insideCenterXCoord:e,outsideCornerXCoords:t},a){const i=fr(a);return[e,t].map(((e,t)=>({position:ar(i[t],e),style:"normal"})))},dragControlPoint(e,t,a,i){const r=tr(fr(t)[a],i),o={...e};switch(a){case 0:o.insideCenterXCoord=er(0,r,.3);break;case 1:o.outsideCornerXCoords=er(.7,r,1)}return o}},br=[{cmd:"M",p:{x:217.234,y:57.006}},{cmd:"C",c1:{x:217.785,y:54.084},c2:{x:218.073,y:51.069},p:{x:218.073,y:47.986}},{cmd:"C",c1:{x:218.073,y:21.4841},c2:{x:196.796,y:0},p:{x:170.549,y:0}},{cmd:"C",c1:{x:154.49,y:0},c2:{x:140.291,y:8.043},p:{x:131.689,y:20.3575}},{cmd:"C",c1:{x:123.43,y:13.3566},c2:{x:112.778,y:9.1402},p:{x:101.151,y:9.1402}},{cmd:"C",c1:{x:75.1559,y:9.1402},c2:{x:54.036,y:30.2136},p:{x:53.6331,y:56.364}},{cmd:"C",c1:{x:24.4644,y:56.364},c2:{x:.82373,y:80.235},p:{x:.82373,y:109.682}},{cmd:"C",c1:{x:.82373,y:139.129},c2:{x:24.4644,y:163},p:{x:53.6272,y:163}},{cmd:"L",p:{x:209.021,y:163}},{cmd:"C",c1:{x:238.183,y:163},c2:{x:261.824,y:139.129},p:{x:261.824,y:109.682}},{cmd:"C",c1:{x:261.824,y:83.056},c2:{x:242.496,y:60.99},p:{x:217.234,y:57.006}},{cmd:"Z"}],Sr={left:20/262,top:50/163,width:222/262,height:113/163},yr={discriminator:"cloud",clipPath:(e,{width:t,height:a})=>function(e,t=1,a=1){const i=[];let r=0,o=0;function n(e,i){const n=e.x,l=e.y,s=`${(n-r)*t},${(l-o)*a}`;return i&&(r=n,o=l),s}function l(e,i){const n=e.x,l=e.y,s=`${n*t},${l*a}`;return i&&(r+=n,o+=l),s}for(const s of e)switch(i.push(s.cmd.toLowerCase()),s.cmd){case"M":case"L":case"T":i.push(n(s.p,!0));break;case"m":case"l":case"t":i.push(l(s.p,!0));break;case"H":i.push(n({x:s.v,y:o},!0));break;case"V":i.push(n({x:r,y:s.v},!0));break;case"h":i.push(l({x:s.v,y:0},!0));break;case"v":i.push(l({x:0,y:s.v},!0));break;case"C":i.push(n(s.c1,!1),n(s.c2,!1),n(s.p,!0));break;case"c":i.push(l(s.c1,!1),l(s.c2,!1),l(s.p,!0));break;case"S":case"Q":i.push(n(s.c,!1),n(s.p,!0));break;case"s":case"q":i.push(l(s.c,!1),l(s.p,!0));break;case"A":i.push(s.radius.x*t,s.radius.y*a,s.angle,+s.large,+s.sweep,n(s.p,!0));break;case"a":i.push(s.radius.x,s.radius.y,s.angle,+s.large,+s.sweep,l(s.p,!0))}return i.join(" ")}(br,t/262,a/163),textExtents:e=>Sr},xr={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},Cr={discriminator:"ellipse",clipPath(e,{width:t,height:a}){let i="m 0 0";return i+=` m ${t} ${a/2}`,i+=` a ${t/2} ${a/2} 0 0 1 ${-t},0`,i+=` a ${t/2} ${a/2} 0 0 1 ${t},0`,i+=" z",i},textExtents:e=>xr},Ir={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2},wr={discriminator:"octagon",clipPath({cornerRounding:e},{width:t,height:a}){const i=Math.min(t,a)/(1+Math.SQRT2)/Math.SQRT2;return pr({cmd:"M",p:{x:i,y:0}},[{cmd:"L",p:{x:t-i,y:0}},{cmd:"L",p:{x:t,y:i}},{cmd:"L",p:{x:t,y:a-i}},{cmd:"L",p:{x:t-i,y:a}},{cmd:"L",p:{x:i,y:a}},{cmd:"L",p:{x:0,y:a-i}},{cmd:"L",p:{x:0,y:i}},{cmd:"L",p:{x:i,y:0}}],e,1,1)},textExtents:e=>Ir},zr={discriminator:"parallelogram",textExtents:({shear:e})=>e>.45?{left:.45,top:0,width:0,height:1}:{left:e,top:0,width:1-2*e,height:1},clipPath:({cornerRounding:e,shear:t},{width:a,height:i})=>pr({cmd:"M",p:{x:1,y:0}},[{cmd:"L",p:{x:t,y:0}},{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1-t,y:1}},{cmd:"L",p:{x:1,y:0}}],e,a,i),getControlPoints:({shear:e},t)=>[{position:ar(kr(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,i)=>({...e,shear:er(0,tr(kr(t)[a],i),.99)})};function kr({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const Tr={discriminator:"plus",textExtents:({stroke:e})=>({left:0,top:(1-e)/2,width:1,height:e}),clipPath({cornerRounding:e,stroke:t},{width:a,height:i}){const r=(1-t)/2;return pr({cmd:"M",p:{x:r,y:0}},[{cmd:"L",p:{x:r,y:r}},{cmd:"L",p:{x:0,y:r}},{cmd:"L",p:{x:0,y:1-r}},{cmd:"L",p:{x:r,y:1-r}},{cmd:"L",p:{x:r,y:1}},{cmd:"L",p:{x:1-r,y:1}},{cmd:"L",p:{x:1-r,y:1-r}},{cmd:"L",p:{x:1,y:1-r}},{cmd:"L",p:{x:1,y:r}},{cmd:"L",p:{x:1-r,y:r}},{cmd:"L",p:{x:1-r,y:0}},{cmd:"L",p:{x:r,y:0}}],e,a,i)},getControlPoints:({stroke:e},t)=>[{position:ar(Lr(t)[0],e),style:"normal"}],dragControlPoint:(e,t,a,i)=>({...e,stroke:er(.01,tr(Lr(t)[a],i),1)})};function Lr({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:1,toPoint:{x:e/2,y:t/2},toValue:0}]}const Mr=`url(${function(e,t){const a=[...(new TextEncoder).encode('\n<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40" fill="none">\n  <g filter="url(#filter0_d_10962_163787)">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 18.5V2.5L15.6 14.1081H8.55353L8.40242 14.232L4 18.5Z" fill="white"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.7998V15.9998L7.969 13.1307L8.129 12.9916L13.165 12.9998L5 4.7998Z" fill="black"/>\n    <path d="M8.5 27.5C9.06115 27.5 9.48005 27.0493 9.51635 26.5351C9.74356 23.3161 12.3161 20.7436 15.5351 20.5163C16.0493 20.4801 16.5 20.0611 16.5 19.5C16.5 18.956 16.0524 18.4804 15.4691 18.5163C11.1973 18.7798 7.7798 22.1973 7.51632 26.4691C7.48035 27.0524 7.95597 27.5 8.5 27.5Z" fill="black" stroke="white" stroke-linejoin="round"/>\n  </g>\n  <defs>\n    <filter id="filter0_d_10962_163787" x="2.2" y="1.7" width="16.6" height="29.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n      <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n      <feOffset dy="1"/>\n      <feGaussianBlur stdDeviation="0.9"/>\n      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>\n      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10962_163787"/>\n      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10962_163787" result="shape"/>\n    </filter>\n  </defs>\n</svg>\n')].map((e=>String.fromCharCode(e))).join("");return"data:image/svg+xml;base64,"+btoa(a)}()}) 5 5, move`,Ar=["ne","nw","nw","ne"],{min:Br}=Math,Fr={left:0,top:0,width:1,height:1},Vr={topLeft:0,topRight:0,bottomRight:0,bottomLeft:0};function Dr(e,t,a){return e+a<=t?e:e*t/(e+a)}function Jr(e,t,a,i,r){return Br(Dr(a,t,e),Dr(a,i,r))}function Rr({topLeft:e,topRight:t,bottomRight:a,bottomLeft:i},{width:r,height:o}){return{topLeft:Jr(i,o,e,r,t),topRight:Jr(e,r,t,o,a),bottomRight:Jr(t,o,a,r,i),bottomLeft:Jr(a,r,i,o,e)}}function Zr(e){if(!e)return!0;const{topLeft:t,topRight:a,bottomRight:i,bottomLeft:r}=e;return t===a&&t===i&&t===r}function Pr({width:e,height:t}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:10,y:10},toValue:10},{fromPoint:{x:e,y:0},fromValue:0,toPoint:{x:e-10,y:10},toValue:10},{fromPoint:{x:e,y:t},fromValue:0,toPoint:{x:e-10,y:t-10},toValue:10},{fromPoint:{x:0,y:t},fromValue:0,toPoint:{x:10,y:t-10},toValue:10}]}const _r={discriminator:"rectangle",clipPath({borderRadius:e},t){const{width:a,height:i}=t;let r="m 0 0";if(e){const{topLeft:o,topRight:n,bottomRight:l,bottomLeft:s}=Rr(e,t);r+=` m ${o} 0`,r+=` l ${a-o-n} 0 a ${n} ${n} 0 0 1 ${n},${n}`,r+=` l 0 ${i-n-l} a ${l} ${l} 0 0 1 ${-l},${l}`,r+=` l ${l+s-a} 0 a ${s} ${s} 0 0 1 ${-s},${-s}`,r+=` l 0 ${s+o-i} a ${o} ${o} 0 0 1 ${o},${-o}`}else r+=` l ${a} 0`,r+=` l 0 ${i}`,r+=` l ${-a} 0`,r+=" l 0 "+-i;return r+=" z",r},textExtents:e=>Fr,getControlPoints({borderRadius:e},t,a,i,r){const{topLeft:o,topRight:n,bottomRight:l,bottomLeft:s}=Rr(e??Vr,t),c=Pr(t),d=Zr(r?Rr(r.borderRadius??Vr,t):e)!==i?"normal":"alternate";return[o,n,l,s].map(((e,t)=>({position:ar(c[t],e),style:d,tooltip:{text:`Radius ${e.toFixed(0)}`,position:Ar[t]},cursor:Mr})))},dragControlPoint({borderRadius:e},t,a,i,r,o){const n=Pr(t)[a],{width:l,height:s}=t,c=tr(n,i);let d;if(Zr(e)!==o){const e=er(0,c,Br(s/2,l/2));d={topLeft:e,topRight:e,bottomRight:e,bottomLeft:e}}else switch(d={...e??Vr},a){case 0:d.topLeft=er(0,c,Br(s-d.bottomLeft,l-d.topRight));break;case 1:d.topRight=er(0,c,Br(l-d.topLeft,s-d.bottomRight));break;case 2:d.bottomRight=er(0,c,Br(s-d.topRight,l-d.bottomLeft));break;case 3:d.bottomLeft=er(0,c,Br(l-d.bottomRight,s-d.topLeft))}return{type:"rectangle",borderRadius:d}}},Hr={left:0,top:0,width:1,height:1},$r={discriminator:"shield",clipPath({cornerRounding:e},{width:t,height:a}){const i=Math.min(.5*t,.5*a);return pr({cmd:"M",p:{x:0,y:0}},[{cmd:"H",v:t},{cmd:"V",v:a-i},{cmd:"A",radius:{x:.5*t,y:i},angle:0,large:!1,sweep:!0,p:{x:0,y:a-i}},{cmd:"V",v:0}],e,1,1)},textExtents:e=>Hr},Or={cmd:"M",p:{x:0,y:0}},Er=[{cmd:"H",v:210},{cmd:"V",v:175},{cmd:"H",v:129},{cmd:"L",p:{x:40,y:217}},{cmd:"V",v:175},{cmd:"H",v:0},{cmd:"V",v:0}],Nr={left:0,top:0,width:1,height:175/217},jr={discriminator:"speechBubble",clipPath:({cornerRounding:e},{width:t,height:a})=>pr(Or,Er,e,t/210,a/217),textExtents:e=>Nr},{PI:Gr,cos:qr,sin:Ur}=Math,Yr=-.5*Gr,Xr=2*Gr;function Wr(e,t){return Yr+Xr*(e/t)}function Kr(e,t){return Yr+Xr*((2*e+1)/(2*t))}const Qr={left:(1-Math.SQRT1_2)/2,top:(1-Math.SQRT1_2)/2,width:Math.SQRT1_2,height:Math.SQRT1_2};function eo({sidePairs:e},{width:t,height:a}){const i=Kr(e-1,e);return{fromPoint:{x:.5*t,y:.5*a},fromValue:0,toPoint:{x:(.5*qr(i)+.5)*t,y:(.5*Ur(i)+.5)*a},toValue:1}}const to={discriminator:"star",clipPath({cornerRounding:e,sidePairs:t,innerRadius:a},{width:i,height:r}){let o;const n=[];let l=!0;function s(e,t){const a={x:qr(e)*t*.5+.5,y:Ur(e)*t*.5+.5};l?(o={cmd:"M",p:a},l=!1):n.push({cmd:"L",p:a})}for(let e=0;e<t;e+=1)s(Wr(e,t),1),s(Kr(e,t),a);return pr(o,n,e,i,r)},textExtents:e=>Qr,getControlPoints:(e,t)=>[{position:ar(eo(e,t),e.innerRadius),style:"normal"}],dragControlPoint(e,t,a,i){const r=tr(eo(e,t),i);return{...e,innerRadius:er(.1,r,1)}}},ao={discriminator:"triangle",clipPath:({cornerRounding:e,topVertex:t},{width:a,height:i})=>pr({cmd:"M",p:{x:t??.5,y:0}},[{cmd:"L",p:{x:0,y:1}},{cmd:"L",p:{x:1,y:1}}],e,a,i),textExtents:({topVertex:e})=>({width:.5,height:.5,left:(e??.5)/2,top:.5}),getControlPoints:({topVertex:e},t)=>[{position:ar(io(t)[0],e??.5),style:"normal"}],dragControlPoint:(e,t,a,i)=>({...e,topVertex:er(0,tr(io(t)[a],i),1)})};function io({width:e}){return[{fromPoint:{x:0,y:0},fromValue:0,toPoint:{x:e,y:0},toValue:1}]}const ro=new Map;function oo(e){ro.set(e.discriminator,e)}oo(_r),oo(Cr),oo(to),oo(yr),oo(Tr),oo(ao),oo(mr),oo(wr),oo(vr),oo(zr),oo(jr),oo($r),oo(ur);var no=a(4015),lo=a.n(no);function so(e,t,a=Object.keys(e.states.default)){const i=e.states.default,r=structuredClone(e.states[t]);return a.reduce(((e,t)=>(lo()(e[t])&&(e[t]=structuredClone(i[t])),e)),r)}var co=a(9679),po=a(3092),ho=a.n(po);const uo=(0,gi._w)(Ei),mo=co.ZF.fromSchema(uo),go=(e,t)=>ti({doc:t,contentTypes:["text"],callback:t=>{if(t.marks){const a=t.marks.find((e=>"link"===e.type));a?.attrs&&e(a.attrs.href)&&(a.attrs.href=void 0)}}}),fo=(e,t)=>{if("string"==typeof e&&e.length){if(t.content)return{...t,content:t.content.flatMap((t=>fo(e,t)),0)};if("text"===t.type&&t.text){const a=new RegExp(ho()(e),"gi"),i=t.text.match(a);return i&&i.length>0?((e,t)=>{const a=new RegExp(`(${ho()(e)})`,"gi");return t.text.split(a).filter(Boolean).map((a=>{const i=a.toLowerCase()===e.toLowerCase(),r=t.marks.find((e=>"textStyle"===e.type));let o=!1;const n=i?t.marks.map((e=>"highlight"===e.type?(o=!0,{...e,attrs:{...e.attrs,color:"#FFFF00"}}):e)):t.marks;return!o&&i&&n.push({type:"highlight",attrs:{textSize:r?.attrs.textSize??"inherit",color:"#FFFF00"}}),{text:a,type:"text",marks:n}}))})(e,t):t}}return t};var vo=a(3134),bo=a.n(vo);function So(e){return new Map(Object.entries(bo()(e,(e=>e.sourceId??"none"))))}var yo=a(5608),xo=a(2835);function Co(e,t){return[...e.querySelectorAll(t)]}function Io(e,t,a,i){return t.addEventListener(e,a,i),()=>{t.removeEventListener(e,a,i)}}var wo,zo,ko=a(9701);class To extends xo.WF{get $form(){return(0,yo.gn)(this,zo,"f")?.form??null}get $slotted(){return this.$$$("*")}$(e){return function(e,t){return e.querySelector(t)}(this.shadowRoot,e)}$$(e){return Co(this.shadowRoot,e)}$$$(e,t){const a=t?`slot[name="${t}"]`:"slot:not([name])",i=this.$(a);return i?i.assignedElements({flatten:!0}).map((t=>t.matches(e)?[t]:Co(t,e))).flat():(console.warn(`Could not query ${a} within ${this.tagName.toLowerCase()} because it does not exist.`),[])}constructor(){super(),wo.set(this,[]),zo.set(this,void 0),this.hasSlotted=e=>this.$slotted.some((t=>t.contains(e))),this.hasWithin=e=>this.contains(e)||this.hasSlotted(e),this.unbindEvents=()=>{(0,yo.gn)(this,wo,"f").forEach((e=>e()))},this.collectOff=e=>{(0,yo.gn)(this,wo,"f").push(e)},this.on=(e,t,a)=>{const i=Io(e,this,t,a);return this.collectOff(i),i},this.dispatch=(e,t={})=>function(e,t,a={},i={}){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,...i,detail:a}))}(this,e,t),this.constructor.formAssociated&&(0,yo.GG)(this,zo,this.attachInternals(),"f")}connectedCallback(){super.connectedCallback(),this.bindEvents()}disconnectedCallback(){super.disconnectedCallback(),this.unbindEvents()}bindEvents(){}}wo=new WeakMap,zo=new WeakMap,To.formAssociated=!1,To.shadowRootOptions={...xo.WF.shadowRootOptions,delegatesFocus:!0};const Lo=xo.qy`
  <svg
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.75 1.28125C0.75 0.925781 1.02344 0.625 1.40625 0.625H2.71875H3.15625H6.54688C8.40625 0.625 9.9375 2.15625 9.9375 4.01562C9.9375 4.97266 9.52734 5.84766 8.89844 6.44922C10.0195 6.99609 10.8125 8.17188 10.8125 9.48438C10.8125 11.3711 9.28125 12.875 7.42188 12.875H3.15625H2.71875H1.40625C1.02344 12.875 0.75 12.6016 0.75 12.2188C0.75 11.8633 1.02344 11.5625 1.40625 11.5625H2.0625V6.75V1.9375H1.40625C1.02344 1.9375 0.75 1.66406 0.75 1.28125ZM6.54688 6.09375C7.69531 6.09375 8.625 5.16406 8.625 4.01562C8.625 2.86719 7.69531 1.9375 6.54688 1.9375H3.375V6.09375H6.54688ZM3.375 7.40625V11.5625H7.42188C8.57031 11.5625 9.5 10.6328 9.5 9.48438C9.5 8.33594 8.57031 7.40625 7.42188 7.40625H6.54688H3.375Z"
      fill="black"
    />
  </svg>
`,Mo=xo.qy`
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.3125 1.28125V5.875C1.3125 6.47656 1.77734 6.96875 2.40625 6.96875H11.7578L9.37891 4.58984C9.10547 4.34375 9.10547 3.93359 9.37891 3.66016C9.625 3.41406 10.0352 3.41406 10.3086 3.66016L13.8086 7.1875C14.0547 7.43359 14.0547 7.84375 13.8086 8.08984L10.3086 11.5898C10.0352 11.8633 9.625 11.8633 9.37891 11.5898C9.10547 11.3438 9.10547 10.9336 9.37891 10.6602L11.7578 8.28125H2.40625C1.06641 8.28125 0 7.21484 0 5.875V1.28125C0 0.925781 0.273438 0.625 0.65625 0.625C1.01172 0.625 1.3125 0.925781 1.3125 1.28125Z"
      fill="black"
    />
  </svg>
`,Ao=xo.qy`
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9336 0.566406C13.1797 0.839844 13.1797 1.25 12.9336 1.49609L5.71484 8.71484C5.44141 8.98828 5.03125 8.98828 4.78516 8.71484L1.06641 4.99609C0.792969 4.75 0.792969 4.33984 1.06641 4.09375C1.3125 3.82031 1.72266 3.82031 1.96875 4.09375L5.22266 7.34766L12.0039 0.566406C12.25 0.320312 12.6602 0.320312 12.9062 0.566406H12.9336Z"
      fill="black"
    />
  </svg>
`,Bo=(xo.qy`
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.18359 1.49609L5.90234 4.77734L9.15625 8.03125C9.42969 8.27734 9.42969 8.6875 9.15625 8.93359C8.91016 9.20703 8.5 9.20703 8.25391 8.93359L4.97266 5.67969L1.71875 8.93359C1.47266 9.20703 1.0625 9.20703 0.816406 8.93359C0.542969 8.6875 0.542969 8.27734 0.816406 8.00391L4.07031 4.75L0.816406 1.49609C0.542969 1.25 0.542969 0.839844 0.816406 0.566406C1.0625 0.320312 1.47266 0.320312 1.74609 0.566406L5 3.84766L8.25391 0.59375C8.5 0.320312 8.91016 0.320312 9.18359 0.59375C9.42969 0.839844 9.42969 1.25 9.18359 1.49609Z"
      fill="black"
    />
  </svg>
`,xo.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.375 9.9375C11.5938 9.9375 11.8125 9.74609 11.8125 9.5V3.92188L9.95312 2.0625H6.125C5.87891 2.0625 5.6875 2.28125 5.6875 2.5V9.5C5.6875 9.74609 5.87891 9.9375 6.125 9.9375H11.375ZM6.125 11.25C5.14062 11.25 4.375 10.4844 4.375 9.5V2.5C4.375 1.54297 5.14062 0.75 6.125 0.75H9.95312C10.2812 0.75 10.6367 0.914062 10.8828 1.16016L12.7148 2.99219C12.9609 3.23828 13.125 3.59375 13.125 3.92188V9.5C13.125 10.4844 12.332 11.25 11.375 11.25H6.125ZM2.625 4.25H3.5V5.5625H2.625C2.37891 5.5625 2.1875 5.78125 2.1875 6V13C2.1875 13.2461 2.37891 13.4375 2.625 13.4375H7.875C8.09375 13.4375 8.3125 13.2461 8.3125 13V12.125H9.625V13C9.625 13.9844 8.83203 14.75 7.875 14.75H2.625C1.64062 14.75 0.875 13.9844 0.875 13V6C0.875 5.04297 1.64062 4.25 2.625 4.25Z"
      fill="black"
    />
  </svg>
`),Fo=xo.qy`
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.8125 4.6875C5.32031 4.6875 4.91016 4.44141 4.66406 4.03125C4.41797 3.64844 4.41797 3.12891 4.66406 2.71875C4.91016 2.33594 5.32031 2.0625 5.8125 2.0625C6.27734 2.0625 6.6875 2.33594 6.93359 2.71875C7.17969 3.12891 7.17969 3.64844 6.93359 4.03125C6.6875 4.44141 6.27734 4.6875 5.8125 4.6875ZM5.8125 9.0625C5.32031 9.0625 4.91016 8.81641 4.66406 8.40625C4.41797 8.02344 4.41797 7.50391 4.66406 7.09375C4.91016 6.71094 5.32031 6.4375 5.8125 6.4375C6.27734 6.4375 6.6875 6.71094 6.93359 7.09375C7.17969 7.50391 7.17969 8.02344 6.93359 8.40625C6.6875 8.81641 6.27734 9.0625 5.8125 9.0625ZM7.125 12.125C7.125 12.6172 6.85156 13.0273 6.46875 13.2734C6.05859 13.5195 5.53906 13.5195 5.15625 13.2734C4.74609 13.0273 4.5 12.6172 4.5 12.125C4.5 11.6602 4.74609 11.25 5.15625 11.0039C5.53906 10.7578 6.05859 10.7578 6.46875 11.0039C6.85156 11.25 7.125 11.6602 7.125 12.125ZM10.1875 4.6875C9.69531 4.6875 9.28516 4.44141 9.03906 4.03125C8.79297 3.64844 8.79297 3.12891 9.03906 2.71875C9.28516 2.33594 9.69531 2.0625 10.1875 2.0625C10.6523 2.0625 11.0625 2.33594 11.3086 2.71875C11.5547 3.12891 11.5547 3.64844 11.3086 4.03125C11.0625 4.44141 10.6523 4.6875 10.1875 4.6875ZM11.5 7.75C11.5 8.24219 11.2266 8.65234 10.8438 8.89844C10.4336 9.14453 9.91406 9.14453 9.53125 8.89844C9.12109 8.65234 8.875 8.24219 8.875 7.75C8.875 7.28516 9.12109 6.875 9.53125 6.62891C9.91406 6.38281 10.4336 6.38281 10.8438 6.62891C11.2266 6.875 11.5 7.28516 11.5 7.75ZM10.1875 13.4375C9.69531 13.4375 9.28516 13.1914 9.03906 12.7812C8.79297 12.3984 8.79297 11.8789 9.03906 11.4688C9.28516 11.0859 9.69531 10.8125 10.1875 10.8125C10.6523 10.8125 11.0625 11.0859 11.3086 11.4688C11.5547 11.8789 11.5547 12.3984 11.3086 12.7812C11.0625 13.1914 10.6523 13.4375 10.1875 13.4375Z"
      fill="#636363"
    />
  </svg>
`,Vo=xo.qy`
  <svg
    width="12"
    height="15"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 13.4375H9.5C9.71875 13.4375 9.9375 13.2461 9.9375 13V5.125H7.75C7.25781 5.125 6.875 4.74219 6.875 4.25V2.0625H2.5C2.25391 2.0625 2.0625 2.28125 2.0625 2.5V13C2.0625 13.2461 2.25391 13.4375 2.5 13.4375ZM2.5 0.75H7.01172C7.47656 0.75 7.91406 0.941406 8.24219 1.26953L10.7305 3.75781C11.0586 4.08594 11.25 4.52344 11.25 4.98828V13C11.25 13.9844 10.457 14.75 9.5 14.75H2.5C1.51562 14.75 0.75 13.9844 0.75 13V2.5C0.75 1.54297 1.51562 0.75 2.5 0.75ZM8.65234 8.07812L5.72656 11.0039C5.58984 11.1133 5.42578 11.1953 5.26172 11.1953C5.09766 11.1953 4.90625 11.1133 4.79688 11.0039L3.34766 9.52734C3.07422 9.28125 3.07422 8.87109 3.34766 8.59766C3.59375 8.35156 4.00391 8.35156 4.27734 8.59766L5.26172 9.60938L7.72266 7.14844C7.96875 6.90234 8.37891 6.90234 8.65234 7.14844C8.89844 7.39453 8.89844 7.83203 8.65234 8.07812Z"
      fill="black"
    />
  </svg>
`,Do=xo.qy`
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.03516 6.28516L6.28516 1.0625C6.53125 0.789062 6.94141 0.789062 7.21484 1.0625C7.46094 1.30859 7.46094 1.71875 7.21484 1.96484L2.40234 6.75L7.1875 11.5625C7.46094 11.8086 7.46094 12.2188 7.1875 12.4648C6.94141 12.7383 6.53125 12.7383 6.28516 12.4648L1.03516 7.21484C0.761719 6.96875 0.761719 6.55859 1.03516 6.28516Z"
      fill="#707070"
    />
  </svg>
`,Jo=xo.qy`
  <svg
    width="12"
    height="2"
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6875 0.75C11.6875 1.13281 11.3867 1.40625 11.0312 1.40625H0.96875C0.585938 1.40625 0.3125 1.13281 0.3125 0.75C0.3125 0.394531 0.585938 0.09375 0.96875 0.09375H11.0312C11.3867 0.09375 11.6875 0.394531 11.6875 0.75Z"
      fill="black"
    />
  </svg>
`,Ro=xo.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.480469 12.7539L1.10938 10.6211C1.21875 10.2383 1.4375 9.88281 1.71094 9.60938L10.0234 1.29688C10.707 0.613281 11.8281 0.613281 12.5117 1.29688L13.5781 2.36328C13.6602 2.44531 13.7422 2.55469 13.7969 2.63672C14.2617 3.32031 14.1797 4.25 13.5781 4.85156L5.26562 13.1641C5.23828 13.1914 5.18359 13.2188 5.15625 13.2734C4.88281 13.4922 4.58203 13.6562 4.25391 13.7656L2.12109 14.3945L0.945312 14.7227C0.726562 14.8047 0.480469 14.75 0.316406 14.5586C0.125 14.3945 0.0703125 14.1484 0.152344 13.9297L0.480469 12.7539ZM2.17578 11.6328L1.73828 13.1367L3.24219 12.6992L3.87109 12.5078C4.0625 12.4531 4.19922 12.3711 4.33594 12.2344L10.5977 5.97266L8.90234 4.27734L2.64062 10.5391C2.61328 10.5391 2.61328 10.5664 2.58594 10.5938C2.47656 10.7031 2.42188 10.8398 2.36719 11.0039L2.17578 11.6328ZM6.90625 13.4375H15.2188C15.5742 13.4375 15.875 13.7383 15.875 14.0938C15.875 14.4766 15.5742 14.75 15.2188 14.75H6.90625C6.52344 14.75 6.25 14.4766 6.25 14.0938C6.25 13.7383 6.52344 13.4375 6.90625 13.4375Z"
      fill="black"
    />
  </svg>
`,Zo=xo.qy`
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.65625 0.71875V5.09375H11.0312C11.3867 5.09375 11.6875 5.39453 11.6875 5.75C11.6875 6.13281 11.3867 6.40625 11.0312 6.40625H6.65625V10.7812C6.65625 11.1641 6.35547 11.4375 6 11.4375C5.61719 11.4375 5.34375 11.1641 5.34375 10.7812V6.40625H0.96875C0.585938 6.40625 0.3125 6.13281 0.3125 5.75C0.3125 5.39453 0.585938 5.09375 0.96875 5.09375H5.34375V0.71875C5.34375 0.363281 5.61719 0.0625 6 0.0625C6.35547 0.0625 6.65625 0.363281 6.65625 0.71875Z"
      fill="black"
    />
  </svg>
`,Po=xo.qy`
  <svg
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9062 5.875H8.96875C8.58594 5.875 8.3125 5.60156 8.3125 5.21875C8.3125 4.86328 8.58594 4.5625 8.96875 4.5625H11.4297L10.6914 3.6875C9.78906 2.62109 8.47656 1.9375 7 1.9375C4.32031 1.9375 2.1875 4.09766 2.1875 6.75C2.1875 9.42969 4.32031 11.5625 7 11.5625C8.06641 11.5625 9.07812 11.207 9.87109 10.6055C10.1719 10.3867 10.582 10.4414 10.8008 10.7422C11.0195 11.043 10.9648 11.4531 10.6641 11.6719C9.65234 12.4375 8.36719 12.875 7 12.875C3.60938 12.875 0.875 10.1406 0.875 6.75C0.875 3.38672 3.60938 0.625 7 0.625C8.88672 0.625 10.582 1.5 11.7031 2.83984L12.25 3.49609V1.28125C12.25 0.925781 12.5234 0.625 12.9062 0.625C13.2617 0.625 13.5625 0.925781 13.5625 1.28125V5.21875C13.5625 5.60156 13.2617 5.875 12.9062 5.875Z"
      fill="black"
    />
  </svg>
`,_o=xo.qy`
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.48438 9.5625L12.1094 5.1875C12.2734 4.91406 12.5469 4.75 12.875 4.75C13.1758 4.75 13.4492 4.91406 13.6133 5.1875L16.2383 9.5625C16.4023 9.83594 16.4023 10.1641 16.2383 10.4375C16.1016 10.7109 15.8008 10.875 15.5 10.875H10.25C9.92188 10.875 9.62109 10.7109 9.48438 10.4375C9.32031 10.1641 9.32031 9.83594 9.48438 9.5625ZM12.875 6.5L11.0156 9.5625H14.707L12.875 6.5ZM17.6875 13.5H14.1875V17H17.6875V13.5ZM13.9688 12.1875H17.9062C18.5078 12.1875 19 12.6797 19 13.2812V17.2188C19 17.8477 18.5078 18.3125 17.9062 18.3125H13.9688C13.3398 18.3125 12.875 17.8477 12.875 17.2188V13.2812C12.875 12.6797 13.3398 12.1875 13.9688 12.1875ZM10.6875 15.25C10.6875 14.4844 10.25 13.7734 9.59375 13.3633C8.91016 12.9805 8.0625 12.9805 7.40625 13.3633C6.72266 13.7734 6.3125 14.4844 6.3125 15.25C6.3125 16.043 6.72266 16.7539 7.40625 17.1641C8.0625 17.5469 8.91016 17.5469 9.59375 17.1641C10.25 16.7539 10.6875 16.043 10.6875 15.25ZM5 15.25C5 14.0195 5.65625 12.8711 6.75 12.2422C7.81641 11.6133 9.15625 11.6133 10.25 12.2422C11.3164 12.8711 12 14.0195 12 15.25C12 16.5078 11.3164 17.6562 10.25 18.2852C9.15625 18.9141 7.81641 18.9141 6.75 18.2852C5.65625 17.6562 5 16.5078 5 15.25Z"
      fill="black"
    />
  </svg>
`,Ho=xo.qy`
  <svg
    width="20"
    height="20"
    viewBox="2 2 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33984 5.51562L18.4258 10.7656C19.3008 11.1484 19.3008 12.3789 18.4258 12.7617L6.33984 18.0117C5.41016 18.4219 4.45312 17.3828 4.94531 16.4805L6.85938 12.9531C6.96875 12.7344 7.1875 12.5703 7.46094 12.543L12.2734 11.9414C12.3555 11.9414 12.4375 11.8594 12.4375 11.75C12.4375 11.668 12.3555 11.5859 12.2734 11.5859L7.46094 10.9844C7.1875 10.9297 6.96875 10.793 6.85938 10.5742L4.94531 7.04688C4.45312 6.14453 5.41016 5.10547 6.33984 5.51562Z"
      fill="var(--arc-color-neutral-400)"
    />
  </svg>
`,$o=xo.qy`
  <svg
    width="20"
    height="20"
    viewBox="2 2 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33984 5.51562L18.4258 10.7656C19.3008 11.1484 19.3008 12.3789 18.4258 12.7617L6.33984 18.0117C5.41016 18.4219 4.45312 17.3828 4.94531 16.4805L6.85938 12.9531C6.96875 12.7344 7.1875 12.5703 7.46094 12.543L12.2734 11.9414C12.3555 11.9414 12.4375 11.8594 12.4375 11.75C12.4375 11.668 12.3555 11.5859 12.2734 11.5859L7.46094 10.9844C7.1875 10.9297 6.96875 10.793 6.85938 10.5742L4.94531 7.04688C4.45312 6.14453 5.41016 5.10547 6.33984 5.51562Z"
      fill="url(#paint0_linear_7580_30219)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7580_30219"
        x1="0.292683"
        y1="24"
        x2="23.8389"
        y2="23.1127"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9C15FF" />
        <stop
          offset="1"
          stop-color="#1EB4FB"
        />
      </linearGradient>
    </defs>
  </svg>
`,Oo=xo.qy`
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6875 7.75C12.6875 5.72656 11.5938 3.86719 9.84375 2.82812C8.06641 1.81641 5.90625 1.81641 4.15625 2.82812C2.37891 3.86719 1.3125 5.72656 1.3125 7.75C1.3125 9.80078 2.37891 11.6602 4.15625 12.6992C5.90625 13.7109 8.06641 13.7109 9.84375 12.6992C11.5938 11.6602 12.6875 9.80078 12.6875 7.75ZM0 7.75C0 5.26172 1.3125 2.96484 3.5 1.70703C5.66016 0.449219 8.3125 0.449219 10.5 1.70703C12.6602 2.96484 14 5.26172 14 7.75C14 10.2656 12.6602 12.5625 10.5 13.8203C8.3125 15.0781 5.66016 15.0781 3.5 13.8203C1.3125 12.5625 0 10.2656 0 7.75ZM4.83984 9.47266C5.25 9.91016 5.96094 10.375 7 10.375C8.01172 10.375 8.72266 9.91016 9.13281 9.47266C9.37891 9.19922 9.78906 9.17188 10.0625 9.41797C10.3359 9.66406 10.3359 10.0742 10.0898 10.3477C9.48828 11.0039 8.44922 11.6875 7 11.6875C5.52344 11.6875 4.48438 11.0039 3.88281 10.3477C3.63672 10.0742 3.66406 9.66406 3.91016 9.41797C4.18359 9.17188 4.59375 9.19922 4.83984 9.47266ZM3.9375 6.4375C3.9375 5.97266 4.32031 5.5625 4.8125 5.5625C5.30469 5.5625 5.6875 5.97266 5.6875 6.4375C5.6875 6.92969 5.30469 7.3125 4.8125 7.3125C4.32031 7.3125 3.9375 6.92969 3.9375 6.4375ZM9.1875 5.5625C9.67969 5.5625 10.0625 5.97266 10.0625 6.4375C10.0625 6.92969 9.67969 7.3125 9.1875 7.3125C8.69531 7.3125 8.3125 6.92969 8.3125 6.4375C8.3125 5.97266 8.69531 5.5625 9.1875 5.5625Z"
      fill="black"
    />
  </svg>
`,Eo=xo.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 13.4375H7.97266C11.1172 13.4375 13.6602 10.8945 13.6602 7.75C13.6602 7.3125 13.6328 6.875 13.5234 6.46484L13.4141 7.09375C13.3047 7.72266 12.7578 8.1875 12.1289 8.1875H9.96875C9.33984 8.1875 8.79297 7.72266 8.68359 7.09375L8.49219 6H7.48047L7.28906 7.09375C7.17969 7.72266 6.63281 8.1875 6.00391 8.1875H3.84375C3.21484 8.1875 2.66797 7.72266 2.55859 7.09375L2.44922 6.46484C2.33984 6.875 2.3125 7.3125 2.3125 7.75C2.3125 10.8945 4.85547 13.4375 8 13.4375ZM7.20703 4.6875H8.76562C9.01172 4.44141 9.36719 4.25 9.75 4.25H12.3477C12.375 4.25 12.4297 4.25 12.4844 4.27734C11.4453 2.9375 9.80469 2.0625 8 2.0625C6.16797 2.0625 4.52734 2.9375 3.48828 4.27734C3.54297 4.27734 3.59766 4.25 3.625 4.25H6.22266C6.60547 4.25 6.96094 4.44141 7.20703 4.6875ZM8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM4.91016 9.85547C5.18359 9.60938 5.59375 9.63672 5.83984 9.91016C6.25 10.3477 6.96094 10.8125 8 10.8125C9.01172 10.8125 9.72266 10.3477 10.1328 9.91016C10.3789 9.63672 10.7891 9.60938 11.0625 9.85547C11.3086 10.1016 11.3359 10.5117 11.0898 10.7852C10.4883 11.4414 9.44922 12.125 7.97266 12.125C6.52344 12.125 5.48438 11.4414 4.88281 10.7852C4.63672 10.5117 4.66406 10.1016 4.91016 9.85547Z"
      fill="black"
    />
  </svg>
`,No=xo.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.94141 3.10156L10.5 2.5L11.0742 0.96875C11.1016 0.832031 11.2383 0.75 11.375 0.75C11.4844 0.75 11.6211 0.832031 11.6484 0.96875L12.25 2.5L13.7812 3.10156C13.918 3.12891 14 3.26562 14 3.375C14 3.51172 13.918 3.64844 13.7812 3.67578L12.25 4.25L11.6484 5.80859C11.6211 5.91797 11.4844 6 11.375 6C11.2383 6 11.1016 5.91797 11.0742 5.80859L10.5 4.25L8.94141 3.67578C8.83203 3.64844 8.75 3.51172 8.75 3.375C8.75 3.26562 8.83203 3.12891 8.94141 3.10156ZM0.246094 7.3125L0.710938 7.12109L0.929688 7.01172H0.957031L3.36328 5.89062L4.48438 3.45703L4.59375 3.23828L4.8125 2.77344C4.86719 2.60938 5.03125 2.5 5.19531 2.5C5.35938 2.5 5.52344 2.60938 5.60547 2.77344L5.82422 3.23828L5.90625 3.45703L5.93359 3.48438L7.02734 5.89062L9.46094 7.01172L9.67969 7.12109L10.1445 7.33984C10.3086 7.39453 10.418 7.55859 10.418 7.72266C10.418 7.88672 10.3086 8.05078 10.1445 8.13281L9.67969 8.32422L9.46094 8.43359L7.02734 9.55469L5.90625 11.9609V11.9883L5.79688 12.207L5.60547 12.6719C5.52344 12.8359 5.35938 12.9453 5.19531 12.9453C5.03125 12.9453 4.86719 12.8359 4.8125 12.6719L4.59375 12.207L4.48438 11.9883V11.9609L3.36328 9.55469L0.957031 8.43359H0.929688L0.710938 8.32422L0.246094 8.13281C0.0820312 8.05078 0 7.88672 0 7.72266C0 7.55859 0.0820312 7.39453 0.246094 7.3125ZM2.51562 7.72266L3.91016 8.37891C4.18359 8.48828 4.42969 8.73438 4.56641 9.00781L5.19531 10.4023L5.85156 9.00781C5.98828 8.73438 6.20703 8.48828 6.48047 8.37891L7.875 7.72266L6.48047 7.06641C6.20703 6.95703 5.98828 6.71094 5.85156 6.4375L5.19531 5.04297L4.56641 6.4375C4.42969 6.71094 4.18359 6.95703 3.91016 7.06641L2.51562 7.72266ZM10.5 11.25L11.0742 9.71875C11.1016 9.58203 11.2383 9.5 11.375 9.5C11.4844 9.5 11.6211 9.58203 11.6484 9.71875L12.25 11.25L13.7812 11.8516C13.918 11.8789 14 12.0156 14 12.125C14 12.2617 13.918 12.3984 13.7812 12.4258L12.25 13L11.6484 14.5586C11.6211 14.668 11.4844 14.75 11.375 14.75C11.2383 14.75 11.1016 14.668 11.0742 14.5586L10.5 13L8.94141 12.4258C8.83203 12.3984 8.75 12.2617 8.75 12.125C8.75 12.0156 8.83203 11.8789 8.94141 11.8516L10.5 11.25Z"
      fill="black"
    />
  </svg>
`,jo=xo.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.52344 2.17188L5.00391 2.9375H8.96875L8.44922 2.17188C8.42188 2.11719 8.33984 2.0625 8.25781 2.0625H5.71484C5.63281 2.0625 5.55078 2.11719 5.52344 2.17188ZM9.54297 1.43359L10.5547 2.9375H10.9375H12.25H12.4688C12.8242 2.9375 13.125 3.23828 13.125 3.59375C13.125 3.97656 12.8242 4.25 12.4688 4.25H12.25V12.5625C12.25 13.793 11.2656 14.75 10.0625 14.75H3.9375C2.70703 14.75 1.75 13.793 1.75 12.5625V4.25H1.53125C1.14844 4.25 0.875 3.97656 0.875 3.59375C0.875 3.23828 1.14844 2.9375 1.53125 2.9375H1.75H3.0625H3.41797L4.42969 1.43359C4.70312 1.02344 5.19531 0.75 5.71484 0.75H8.25781C8.77734 0.75 9.26953 1.02344 9.54297 1.43359ZM3.0625 4.25V12.5625C3.0625 13.0547 3.44531 13.4375 3.9375 13.4375H10.0625C10.5273 13.4375 10.9375 13.0547 10.9375 12.5625V4.25H3.0625ZM5.25 6V11.6875C5.25 11.9336 5.03125 12.125 4.8125 12.125C4.56641 12.125 4.375 11.9336 4.375 11.6875V6C4.375 5.78125 4.56641 5.5625 4.8125 5.5625C5.03125 5.5625 5.25 5.78125 5.25 6ZM7.4375 6V11.6875C7.4375 11.9336 7.21875 12.125 7 12.125C6.75391 12.125 6.5625 11.9336 6.5625 11.6875V6C6.5625 5.78125 6.75391 5.5625 7 5.5625C7.21875 5.5625 7.4375 5.78125 7.4375 6ZM9.625 6V11.6875C9.625 11.9336 9.40625 12.125 9.1875 12.125C8.94141 12.125 8.75 11.9336 8.75 11.6875V6C8.75 5.78125 8.94141 5.5625 9.1875 5.5625C9.40625 5.5625 9.625 5.78125 9.625 6Z"
      fill="black"
    />
  </svg>
`,Go=xo.qy`
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.1875 4.25C9.1875 3.48438 8.75 2.77344 8.09375 2.36328C7.41016 1.98047 6.5625 1.98047 5.90625 2.36328C5.22266 2.77344 4.8125 3.48438 4.8125 4.25C4.8125 5.04297 5.22266 5.75391 5.90625 6.16406C6.5625 6.54688 7.41016 6.54688 8.09375 6.16406C8.75 5.75391 9.1875 5.04297 9.1875 4.25ZM3.5 4.25C3.5 3.01953 4.15625 1.87109 5.25 1.24219C6.31641 0.613281 7.65625 0.613281 8.75 1.24219C9.81641 1.87109 10.5 3.01953 10.5 4.25C10.5 5.50781 9.81641 6.65625 8.75 7.28516C7.65625 7.91406 6.31641 7.91406 5.25 7.28516C4.15625 6.65625 3.5 5.50781 3.5 4.25ZM2.21484 13.4375H11.7578C11.5117 11.7148 10.0352 10.375 8.23047 10.375H5.74219C3.9375 10.375 2.46094 11.7148 2.21484 13.4375ZM0.875 13.957C0.875 11.25 3.03516 9.0625 5.74219 9.0625H8.23047C10.9375 9.0625 13.125 11.25 13.125 13.957C13.125 14.3945 12.7422 14.75 12.3047 14.75H1.66797C1.23047 14.75 0.875 14.3945 0.875 13.957Z"
      fill="black"
    />
  </svg>
`,qo=xo.qy`
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.52344 1.92578L6.90625 0.886719C6.93359 0.804688 7.01562 0.75 7.125 0.75C7.20703 0.75 7.28906 0.804688 7.31641 0.886719L7.69922 1.92578L8.73828 2.30859C8.82031 2.33594 8.875 2.41797 8.875 2.5C8.875 2.60938 8.82031 2.69141 8.73828 2.71875L7.69922 3.10156L7.31641 4.11328C7.28906 4.19531 7.20703 4.25 7.125 4.25C7.01562 4.25 6.93359 4.19531 6.90625 4.11328L6.52344 3.10156L5.51172 2.71875C5.42969 2.69141 5.375 2.60938 5.375 2.5C5.375 2.41797 5.42969 2.33594 5.51172 2.30859L6.52344 1.92578ZM12.7305 2.0625L9.72266 5.07031L10.6797 6.02734L13.6875 3.01953L12.7305 2.0625ZM2.3125 12.5078L3.24219 13.4375L9.75 6.95703L8.79297 6L2.3125 12.5078ZM11.8008 1.16016C12.3203 0.640625 13.1406 0.640625 13.6602 1.16016L14.5898 2.08984C15.1094 2.60938 15.1094 3.42969 14.5898 3.94922L4.17188 14.3672C3.65234 14.8867 2.83203 14.8867 2.3125 14.3672L1.38281 13.4375C0.863281 12.918 0.863281 12.0977 1.38281 11.5781L11.8008 1.16016ZM0.316406 3.97656L1.875 3.375L2.44922 1.84375C2.47656 1.70703 2.61328 1.625 2.75 1.625C2.85938 1.625 2.99609 1.70703 3.02344 1.84375L3.625 3.375L5.15625 3.97656C5.29297 4.00391 5.375 4.14062 5.375 4.25C5.375 4.38672 5.29297 4.52344 5.15625 4.55078L3.625 5.125L3.02344 6.68359C2.99609 6.79297 2.85938 6.875 2.75 6.875C2.61328 6.875 2.47656 6.79297 2.44922 6.68359L1.875 5.125L0.316406 4.55078C0.207031 4.52344 0.125 4.38672 0.125 4.25C0.125 4.14062 0.207031 4.00391 0.316406 3.97656ZM9.94141 10.9766L11.5 10.375L12.0742 8.84375C12.1016 8.70703 12.2383 8.625 12.375 8.625C12.4844 8.625 12.6211 8.70703 12.6484 8.84375L13.25 10.375L14.7812 10.9766C14.918 11.0039 15 11.1406 15 11.25C15 11.3867 14.918 11.5234 14.7812 11.5508L13.25 12.125L12.6484 13.6836C12.6211 13.793 12.4844 13.875 12.375 13.875C12.2383 13.875 12.1016 13.793 12.0742 13.6836L11.5 12.125L9.94141 11.5508C9.83203 11.5234 9.75 11.3867 9.75 11.25C9.75 11.1406 9.83203 11.0039 9.94141 10.9766Z"
      fill="var(--arc-color-text-primary)"
    />
  </svg>
`,Uo=(xo.qy`
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7734 3.85938L15 3L15.8203 0.8125C15.8594 0.617188 16.0547 0.5 16.25 0.5C16.4062 0.5 16.6016 0.617188 16.6406 0.8125L17.5 3L19.6875 3.85938C19.8828 3.89844 20 4.09375 20 4.25C20 4.44531 19.8828 4.64062 19.6875 4.67969L17.5 5.5L16.6406 7.72656C16.6016 7.88281 16.4062 8 16.25 8C16.0547 8 15.8594 7.88281 15.8203 7.72656L15 5.5L12.7734 4.67969C12.6172 4.64062 12.5 4.44531 12.5 4.25C12.5 4.09375 12.6172 3.89844 12.7734 3.85938ZM8.00781 3.39062L10.0391 7.84375L14.4922 9.875C14.7266 9.99219 14.8828 10.2266 14.8828 10.4609C14.8828 10.6953 14.7266 10.9297 14.4922 11.0078L10.0391 13.0781L8.00781 17.5312C7.89062 17.7656 7.65625 17.9219 7.42188 17.9219C7.1875 17.9219 6.95312 17.7656 6.875 17.5312L4.80469 13.0781L0.351562 11.0469C0.117188 10.9297 0 10.6953 0 10.4609C0 10.2266 0.117188 9.99219 0.351562 9.875L4.80469 7.84375L6.875 3.39062C6.95312 3.15625 7.1875 3 7.42188 3C7.65625 3 7.89062 3.15625 8.00781 3.39062ZM15 15.5L15.8203 13.3125C15.8594 13.1172 16.0547 13 16.25 13C16.4062 13 16.6016 13.1172 16.6406 13.3125L17.5 15.5L19.6875 16.3594C19.8828 16.3984 20 16.5938 20 16.75C20 16.9453 19.8828 17.1406 19.6875 17.1797L17.5 18L16.6406 20.2266C16.6016 20.3828 16.4062 20.5 16.25 20.5C16.0547 20.5 15.8594 20.3828 15.8203 20.2266L15 18L12.7734 17.1797C12.6172 17.1406 12.5 16.9453 12.5 16.75C12.5 16.5938 12.6172 16.3984 12.7734 16.3594L15 15.5Z"
      fill="url(#paint0_linear_8045_3935)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8045_3935"
        x1="-1.70732"
        y1="22"
        x2="21.8389"
        y2="21.1127"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9C15FF" />
        <stop
          offset="1"
          stop-color="#1EB4FB"
        />
      </linearGradient>
    </defs>
  </svg>
`,xo.AH`
  .canned-options {
    background-color: var(
      --ai-writer-background-color,
      var(--arc-color-mono-white)
    );
    margin-top: var(--arc-space-1);
    padding: var(--arc-space-1) 0;
    max-height: min(42rem, 60vh); /** Taken from Rise */
    min-width: 26.5rem; /** Taken from Rise */
    overflow-y: auto;
    width: fit-content;
    box-shadow: var(--arc-shadow-md);
    border-radius: var(--arc-border-radius-md);
    box-sizing: border-box;
    --mon-menu-box-shadow: none;
    --mon-menu-padding: 0;
    --mon-menu-item-border-radius: 0;
    --mon-menu-item-padding: var(--arc-space-1) var(--arc-space-2-5);
    --mon-menu-item-icon-size: 24px;
  }

  .canned-options .menu-heading:first-of-type {
    padding: var(--arc-space-0-5) var(--arc-space-2-5);
  }

  .canned-options .menu-heading {
    padding: var(--arc-space-1-5) var(--arc-space-2-5) var(--arc-space-0-5);
  }

  .menu-heading {
    font-size: var(--arc-font-size-12);
  }

  .mon-visually-hidden {
    display: none;
  }

  .right-chevron svg {
    transform: rotateY(180deg);
  }

  [slot='icon'] {
    display: flex;
  }
`),Yo=[{icon:qo,value:"improve",text:"Improve writing"},{icon:Vo,value:"proofread",text:"Fix spelling and grammar"},{icon:Jo,value:"shorten",text:"Make shorter"},{icon:Zo,value:"lengthen",text:"Make longer"},{icon:Oo,value:"changeTone",text:"Change tone",submenu:[{value:"changeTone_professional",text:"Professional"},{value:"changeTone_casual",text:"Casual"},{value:"changeTone_straightforward",text:"Straightforward"},{value:"changeTone_confident",text:"Confident"},{value:"changeTone_friendly",text:"Friendly"},{value:"changeTone_custom",text:"Custom"}]},{icon:Go,value:"changeAudience",text:"Change audience"},{icon:_o,value:"simplify",text:"Simplify Writing"}],Xo=[{icon:Lo,value:"boldKeyTerms",text:"Bold key terms"},{icon:Eo,value:"addEmojis",text:"Add emojis"}],Wo=[{icon:Ro,value:"continue",text:"Continue writing"},{icon:No,value:"explain",text:"Explain this"},{icon:No,value:"suggestImprovements",text:"Suggest improvements"},{icon:No,value:"findSynonyms",text:"Find synonyms"},{icon:No,value:"createAnalogy",text:"Create an analogy"},{icon:No,value:"createScenario",text:"Create a scenario"},{icon:No,value:"createKeyTakeaways",text:"Create key takeaways"},{icon:No,value:"createImagePrompt",text:"Create an AI image prompt"}],Ko=[{icon:No,value:"createHaiku",text:"Write a haiku"}],Qo=[{icon:No,value:"writeAboutTopic",text:"Write about..."},{icon:No,value:"write1ParagraphAboutTopic",text:"Write 1 paragraph"},{icon:No,value:"write2ParagraphsAboutTopic",text:"Write 2 paragraphs"},{icon:No,value:"write3ParagraphsAboutTopic",text:"Write 3 paragraphs"}],en=[{icon:Ao,value:"replace",text:"Replace selection"},{icon:Mo,value:"append",text:"Insert below"},{icon:Bo,value:"copy",text:"Copy"},{icon:Ro,value:"continue",text:"Continue writing"},{icon:jo,value:"discard",text:"Cancel"}],tn=[{icon:Po,value:"retry",text:"Try again"},{icon:jo,value:"discard",text:"Cancel"}],an={improve:{option:"improve"},proofread:{option:"proofread"},lengthen:{option:"lengthen"},shorten:{option:"shorten"},changeTone_professional:{option:"changeTone",params:{tone:"professional"}},changeTone_casual:{option:"changeTone",params:{tone:"casual"}},changeTone_straightforward:{option:"changeTone",params:{tone:"straightforward"}},changeTone_confident:{option:"changeTone",params:{tone:"confident"}},changeTone_friendly:{option:"changeTone",params:{tone:"friendly"}},changeTone_custom:{option:"changeTone"},changeAudience:{option:"changeAudience"},simplify:{option:"simplify"},copy:{option:"copy"},append:{option:"append"},replace:{option:"replace"},continue:{option:"continue"},discard:{option:"discard"},retry:{option:"retry"},boldKeyTerms:{option:"boldKeyTerms"},addEmojis:{option:"addEmojis"},explain:{option:"explain"},suggestImprovements:{option:"suggestImprovements"},findSynonyms:{option:"findSynonyms"},createAnalogy:{option:"createAnalogy"},createScenario:{option:"createScenario"},createKeyTakeaways:{option:"createKeyTakeaways"},createImagePrompt:{option:"createImagePrompt"},createHaiku:{option:"createHaiku"},writeAboutTopic:{option:"writeAboutTopic"},write1ParagraphAboutTopic:{option:"write1ParagraphAboutTopic"},write2ParagraphsAboutTopic:{option:"write2ParagraphsAboutTopic"},write3ParagraphsAboutTopic:{option:"write3ParagraphsAboutTopic"}};let rn=class extends To{constructor(){super(...arguments),this.menu="initial",this.submenuAnchor=this,this.handleMenuSubmit=e=>{const{detail:t}=e,a=an[t.value];a&&this.dispatchEvent(new CustomEvent("canned-option:submit",{detail:a}))},this.handleSubmenuTriggerClick=(e,t)=>{e.currentTarget instanceof HTMLElement&&(this.selected!==t?(this.selected=t,this.submenuAnchor=e.currentTarget):this.closeSubmenu())},this.openSubmenu=e=>{this.selected!==e.detail.value&&(this.selected=e.detail.value,this.submenuAnchor=e.detail.target)},this.closeSubmenu=()=>{this.selected=void 0,this.submenuAnchor=this},this.onMenuEscape=()=>{this.selected&&(this.selected=void 0,this.submenuAnchor=this)}}render(){return xo.qy`
      <div class="canned-options">
        <mon-menu
          class="menu"
          name="ai-writer-menu"
          @mon-menu:open-sub-menu=${this.openSubmenu}
          @mon-menu:close-sub-menu=${this.closeSubmenu}
          @mon-menu:escape=${this.onMenuEscape}
          @mon-menu:submit=${this.handleMenuSubmit}
        >
          ${this.renderInitialMenuOptions()} ${this.renderReplyMenuOptions()}
          ${this.renderScratchMenuOptions()} ${this.renderCanceledMenuOptions()}
        </mon-menu>
      </div>
    `}renderInitialMenuOptions(){return"initial"!==this.menu?xo.s6:xo.qy`
      ${this.renderEditSelectionsOptions()}
      ${this.renderFormatSelectionOptions()}
      ${this.renderGenerateFromSelectionOptions()} ${this.renderPromptOptions()}
      ${this.renderScratchOptions()}
    `}renderReplyMenuOptions(){return"reply"!==this.menu?xo.s6:xo.qy`
      ${this.renderMenuItemGroup(en)}
      ${this.renderEditSelectionsOptions()}
      ${this.renderFormatSelectionOptions()}
    `}renderScratchMenuOptions(){return"scratch"!==this.menu?xo.s6:this.renderScratchOptions()}renderCanceledMenuOptions(){return"canceled"!==this.menu?xo.s6:xo.qy`${this.renderMenuItemGroup(tn)}`}renderEditSelectionsOptions(){return xo.qy`
      <strong class="menu-heading">Edit selection</strong>
      ${this.renderMenuItemGroup(Yo)}
    `}renderFormatSelectionOptions(){return xo.qy`
      <strong class="menu-heading">Format selection</strong>
      ${this.renderMenuItemGroup(Xo)}
    `}renderGenerateFromSelectionOptions(){return xo.qy`
      <strong class="menu-heading">Generate from selection</strong>
      ${this.renderMenuItemGroup(Wo)}
    `}renderPromptOptions(){return xo.qy`
      <strong class="menu-heading">Prompt</strong>
      ${this.renderMenuItemGroup(Ko)}
    `}renderScratchOptions(){return xo.qy`
      <strong class="menu-heading">Generate from scratch</strong>
      ${this.renderMenuItemGroup(Qo)}
    `}renderMenuItemGroup(e){return xo.qy`
      ${e.map((e=>e.submenu?.length?xo.qy`
            <mon-menu-item
              value=${e.value}
              data-has-icons
              @click=${t=>{this.handleSubmenuTriggerClick(t,e.value)}}
            >
              <span slot="icon">${e.icon}</span>
              <span>${e.text}</span>
              <span
                slot="chevron"
                class="right-chevron"
              >
                ${Do}
              </span>
            </mon-menu-item>
            ${this.renderSubmenu(e)}
          `:xo.qy`
          <mon-menu-item
            value=${e.value}
            data-has-icons
          >
            <span slot="icon">${e.icon}</span>
            <span>${e.text}</span>
          </mon-menu-item>
        `))}
    `}renderSubmenu({submenu:e,value:t}){return t===this.selected&&e?xo.qy`
        <mon-popover
          .anchor=${this.submenuAnchor}
          .autoResizeOptions=${{enabled:!0,padding:{top:8,right:8,bottom:8,left:8}}}
          .semantic=${!0}
          .offset=${4}
          placement="right-start"
        >
          <mon-menu
            aria-label="${t} submenu"
            name="${t} submenu"
            autofocusit
          >
            ${e.map((e=>xo.qy`
                <mon-menu-item value=${e.value}>
                  <span slot="icon">${e.icon}</span>
                  <span>${e.text}</span>
                </mon-menu-item>
              `))}
          </mon-menu>
        </mon-popover>
      `:xo.qy``}};rn.styles=Uo,(0,yo.Cg)([(0,ko.MZ)({type:String})],rn.prototype,"menu",void 0),(0,yo.Cg)([(0,ko.wk)()],rn.prototype,"submenuAnchor",void 0),(0,yo.Cg)([(0,ko.wk)()],rn.prototype,"selected",void 0),rn=(0,yo.Cg)([(0,ko.EM)("mon-ai-writer-canned-options")],rn);var on=a(5494),nn=a(6394),ln=a(1959),sn=a(2602),cn=a.n(sn);class dn{constructor({onCancel:e,onDone:t,onResult:a,onSubmitted:i,fetch:r}){if(this.sessionId=window.crypto.randomUUID(),this.process=async(e,t)=>{const{onDone:a,onResult:i,onSubmitted:r}=this;r();const o=await this.fetch(this.sessionId,e,{signal:t.signal});if(!t.signal.aborted){const a=o.pipeThrough(new pn).getReader(),r=()=>{this.onCancel(),a.cancel()};t.signal.addEventListener("abort",r);try{await a.read().then((function t({done:r,value:o}){if(!r)return i({input:e,output:o}),a.read().then(t)}))}finally{t.signal.removeEventListener("abort",r)}}a()},!r)throw new Error("AI Writer must be initialized with a defined AIResponseFetcher function");this.onCancel=e,this.onDone=t,this.onResult=a,this.onSubmitted=i,this.fetch=r}}class pn extends TransformStream{static _guardHtml(e){const t=e.lastIndexOf("<");return-1===t||-1!==e.slice(t+1).indexOf(">")}constructor(e){let t=e?.response??"";super({start(a){null!=e&&a.enqueue(t)},transform(e,a){t+=e,pn._guardHtml(t)&&a.enqueue(t)}})}}const hn=e=>{class t extends e{constructor(){super(...arguments),this.initialContent="",this.aiResponseFetcher=void 0,this.courseId="mondrian-test",this.status="prompt",this.userInput="",this.aiResponses=[],this.selectedResponseIndex=0,this.updateLastResponse=cn()((e=>{const t=[...this.aiResponses],a=t.pop();a&&(this.aiResponses=[...t,{...a,...e}])}),64),this.addNewResponse=()=>{this.aiResponses=[...this.aiResponses,{prompt:this.userInput,response:"",menu:"reply"}],this.selectedResponseIndex=this.aiResponses.length-1},this.incrementResponseIndex=()=>{this.selectedResponseIndex<=this.aiResponses.length-1&&this.selectedResponseIndex++},this.decrementResponseIndex=()=>{this.selectedResponseIndex>0&&this.selectedResponseIndex--},this.handleInput=e=>{this.userInput=e.target.value},this.submitInput=()=>{this.userInput.length&&this.requestResult({content:this.displayedResult||" ",key:"custom",prompt:this.userInput})},this.requestResult=e=>{this.abortController=new AbortController,this.aiStreamInstance.process({...e,courseId:this.courseId,wentBack:this.wentBack},this.abortController).catch((e=>{"AbortError"!==e.name&&(this.status="error")}))},this.fillPrompt=e=>{const t=un[e];t&&(this.userInput=`${t} `)},this.handleCannedOption=({option:e,params:t})=>{switch(e){case"changeTone":t&&t.tone?this.requestResult({content:this.displayedResult,key:e,tone:t.tone}):this.fillPrompt(e);break;case"changeAudience":case"createBulletedList":case"createNumberedList":case"createTable":case"writeAboutTopic":case"write1ParagraphAboutTopic":case"write2ParagraphsAboutTopic":case"write3ParagraphsAboutTopic":this.fillPrompt(e);break;case"continue":this.requestResult({content:this.displayedResult,key:e});break;case"append":this.dispatchEvent(new CustomEvent("append",{detail:this.displayedResult}));break;case"replace":this.dispatchEvent(new CustomEvent("replace",{detail:this.displayedResult}));break;case"copy":navigator.clipboard.writeText(this.displayedResult).then((()=>{console.log("copied to clipboard")}));break;case"discard":this.dispatchEvent(new CustomEvent("blur"));break;case"retry":{const{retry:e}=this.currentResponse;e&&this.requestResult(e[0]);break}default:this.requestResult({content:this.displayedResult,key:e,...t??{}})}},this.stopGeneratingAIResponse=()=>{this.abortController&&this.abortController.abort();const e=this.aiResponses[this.aiResponses.length-1];e.response?.length||(this.aiResponses.pop(),this.decrementResponseIndex()),this.status="prompt"}}get currentMenu(){return this.currentResponse.menu??"initial"}get currentResponse(){return 0===this.aiResponses.length?mn(this.initialContent):this.aiResponses[this.selectedResponseIndex]}get responseCount(){return this.aiResponses.length}get displayedResult(){const{currentResponse:e}=this;return function(e){const t=document.createElement("div");return t.innerHTML=e,t.querySelectorAll("[style]").forEach((e=>{e.removeAttribute("style")})),t.innerHTML}(e.response||this.initialContent)}get wentBack(){return Math.max(this.aiResponses.length-this.selectedResponseIndex-1,0)}get aiStreamInstance(){return this.aiStream||(this.aiStream=new dn({onCancel:()=>{this.currentResponse.menu="canceled"},onDone:()=>{this.status="prompt",this.userInput=""},onResult:({input:e,output:t})=>{try{"streaming"!==this.status&&(this.status="streaming"),this.updateLastResponse({response:t,retry:[e]})}catch{this.status="error"}},onSubmitted:()=>{this.status="pending",this.addNewResponse()},fetch:this.aiResponseFetcher})),this.aiStream}connectedCallback(){super.connectedCallback(),this.aiResponses.length||this.aiResponses.push(mn(this.initialContent))}}return(0,yo.Cg)([(0,ko.MZ)({type:String})],t.prototype,"initialContent",void 0),(0,yo.Cg)([(0,ko.MZ)()],t.prototype,"aiResponseFetcher",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],t.prototype,"courseId",void 0),(0,yo.Cg)([(0,ko.wk)()],t.prototype,"status",void 0),(0,yo.Cg)([(0,ko.wk)()],t.prototype,"userInput",void 0),(0,yo.Cg)([(0,ko.wk)()],t.prototype,"aiResponses",void 0),(0,yo.Cg)([(0,ko.wk)()],t.prototype,"selectedResponseIndex",void 0),t},un={changeAudience:"Rewrite this for an intended audience of",changeTone:"Change the tone to",createBulletedList:"Write a bulleted list about",createNumberedList:"Write a numbered list about",createTable:"Create a table about",writeAboutTopic:"Write about",write1ParagraphAboutTopic:"Write 1 paragraph about",write2ParagraphsAboutTopic:"Write 2 paragraphs about",write3ParagraphsAboutTopic:"Write 3 paragraphs about"};function mn(e){const t=document.createElement("div");return t.innerHTML=e,{prompt:"",response:e,menu:t.innerText.trim().length>0?"initial":"scratch"}}const gn=xo.AH`
  :host * {
    box-sizing: border-box;
    font-family: var(--arc-font-family-body), sans-serif;
  }

  :host mon-draggable {
    max-width: 75rem; /** Taken from Rise */
    cursor: grab;
    background: transparent;
    overflow: visible;
  }

  :host mon-draggable:active {
    cursor: grabbing;
  }

  .content {
    width: fit-content;
  }

  .body {
    background-color: var(
      --ai-writer-background-color,
      var(--arc-color-mono-white)
    );
    box-shadow: var(--arc-shadow-md);
    border-radius: var(--arc-border-radius-md);
    width: 68rem; /** Taken from Rise */
    max-width: 90vw; /** Taken from Rise */
  }

  .input-section form {
    display: flex;
    width: 100%;
  }

  .response {
    padding: var(--ai-writer-content-padding, var(--arc-space-2));
    font-size: var(--arc-font-size-16);
    height: 16.2rem; /** Taken from Rise */
    overflow: auto;
    line-height: var(--arc-font-size-32);
    word-break: break-word;
  }

  .response p {
    margin-top: 0;
  }

  .response p:last-child {
    margin-bottom: 0;
  }

  .input-section {
    border-top: 1px solid var(--arc-color-border-standard);
    display: flex;
    align-items: center;
    gap: 1.5rem; /** Taken from Rise */
    padding: 0 var(--arc-space-2);
  }

  .input-section > div {
    padding-top: var(--arc-space-1-5);
    padding-bottom: var(--arc-space-1-5);
  }

  .decorative-icons,
  .submit {
    flex: 0 0 auto;
  }

  .decorative-icons {
    display: flex;
    align-items: center;
    gap: 1.5rem; /** Taken from Rise */
  }

  .input {
    flex: 1 1 100%;
    border: none;
  }

  .input:focus,
  .input:active {
    border: none;
    outline: none;
  }

  input[data-submitting='true'] {
    opacity: 0;
    pointer-events: none;
  }

  .submit {
    background: none;
    border: none;
  }

  .submit:not(:disabled) {
    cursor: pointer;
  }

  .input-section .pagination {
    color: var(--arc-color-neutral-500);
    flex: 1 0 fit-content;
    display: flex;
    align-items: center;
    border-left: 1px solid var(--arc-color-border-standard);
    padding-top: 0;
    padding-bottom: 0;
    margin-right: calc(-1 * var(--arc-space-2));
  }

  .page-number {
    margin-bottom: 2px;
  }

  .pagination button {
    border: none;
    background: none;
    opacity: 0.5;
    padding: var(--arc-space-1-5) var(--arc-space-2-5);
  }

  .pagination button svg {
    width: 100%;
    height: var(--arc-font-size-14);
  }

  .pagination button:not(:disabled) {
    opacity: 1;
    cursor: pointer;
  }

  .right-chevron svg {
    transform: rotateY(180deg);
  }

  .stop {
    flex: 1 0 auto;
  }

  .stop button {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-size: var(--arc-font-size-12);
    color: var(--arc-color-text-secondary);
    cursor: pointer;
  }

  .stop button:hover {
    text-decoration: underline;
    color: var(--arc-color-text-primary);
  }

  /**
    Additional idiosyncratic styling to align with Rise-specific styling behavior. Arbitrarily copied over from Rise
    implementations in the absence of comprehensive/documented design/UX requirements which span across both teams.
  */
  .response {
    white-space-collapse: unset;

    &,
    * {
      color: #000 !important;
    }

    ol,
    ul {
      margin-bottom: 0;
    }

    li {
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0.75em 0 0.25em;
      font-weight: bold;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.6rem;
    }
  }
`;let fn=class extends(hn(To)){constructor(){super(...arguments),this.offset=12,this.positionConfig={middleware:[(0,on.cY)(this.offset)]},this.stopMouseEventPropagation=!1,this.inputRef=(0,nn._)(),this.resultsMutationObserver=new MutationObserver((()=>{const e=this.$(".response");e&&e.scrollTo(0,e.scrollHeight)})),this.handleInputSubmit=e=>{e.preventDefault(),this.submitInput()},this.handleCannedOptionSelect=e=>{this.handleCannedOption(e.detail)},this.maybeStopPropagation=e=>{this.stopMouseEventPropagation&&this.stopPropagation(e)},this.stopPropagation=e=>{e.stopPropagation()},this.handleBlur=e=>{this.dispatchEvent(new CustomEvent("blur"))},this.handlePaginationClick=e=>{const t=e.currentTarget;"decrement"===t.name&&this.decrementResponseIndex(),"increment"===t.name&&this.incrementResponseIndex(),this.status="prompt"}}get isGenerating(){return["pending","streaming"].includes(this.status)}willUpdate(e){const t=e.get("status"),a=this.status,i=this.$(".response");i&&("streaming"!==t&&"streaming"===a&&this.resultsMutationObserver.observe(i,{subtree:!0,childList:!0}),"streaming"===t&&"prompt"===a&&this.resultsMutationObserver.disconnect())}renderSubmitButton(){if(!this.isGenerating){const e=this.userInput.length<=0;return xo.qy`
        <button
          class="submit"
          @click=${this.handleInputSubmit}
          ?disabled=${e}
        >
          ${e?Ho:$o}
        </button>
      `}}renderResponseContents(){return"error"===this.status?xo.qy`<span>An error occurred</span>`:["prompt","streaming"].includes(this.status)?xo.qy`<span>${(0,ln._)(this.displayedResult)}</span>`:xo.qy`<span>Loading...</span>`}renderResponse(){return"scratch"===this.currentMenu?xo.s6:xo.qy`<div class="response">${this.renderResponseContents()}</div>`}renderPopoverContent(){return xo.qy`
      <div class="content">
        <div class="body">
          ${this.renderResponse()}
          <div class="input-section">
            <div class="decorative-icons">${Fo}</div>
            <form @submit=${this.handleInputSubmit}>
              <input
                ${(0,nn.K)(this.inputRef)}
                data-submitting=${["pending","streaming"].includes(this.status)}
                class="input"
                type="text"
                autofocus
                placeholder="Tell me how to edit this text"
                @click=${this.maybeStopPropagation}
                @mousedown=${this.maybeStopPropagation}
                .value=${this.userInput}
                @input=${this.handleInput}
                @keypress=${this.stopPropagation}
              />
              ${this.renderSubmitButton()} ${this.renderMiscActions()}
            </form>
          </div>
        </div>
        ${this.renderCannedOptionMenu()}
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.inputRef.value&&window.requestAnimationFrame((()=>{this.inputRef.value?.focus()}))}renderCannedOptionMenu(){if(!this.isGenerating)return xo.qy`
        <mon-ai-writer-canned-options
          @canned-option:submit=${this.handleCannedOptionSelect}
          .menu=${this.currentMenu}
        ></mon-ai-writer-canned-options>
      `}renderMiscActions(){return this.isGenerating?xo.qy`
        <div class="stop">
          <button @click=${this.stopGeneratingAIResponse}>
            Stop generating
          </button>
        </div>
      `:this.renderPagination()}renderPagination(){const{responseCount:e,selectedResponseIndex:t}=this,a=t+1;if(this.responseCount>1)return xo.qy`
        <div class="pagination">
          <button
            @click=${this.handlePaginationClick}
            ?disabled=${a<2}
            name="decrement"
          >
            <span class="left-chevron">${Do}</span>
          </button>
          <span class="page-number">${a} of ${e}</span>
          <button
            @click=${this.handlePaginationClick}
            ?disabled=${a>=e}
            name="increment"
          >
            <span class="right-chevron">${Do}</span>
          </button>
        </div>
      `}render(){return xo.qy`
      <mon-draggable
        @click=${this.maybeStopPropagation}
        @mousedown=${this.maybeStopPropagation}
        .anchor=${this}
        .positionConfig=${this.positionConfig}
        .isPopover=${!1}
        @blur=${this.handleBlur}
      >
        ${this.renderPopoverContent()}
      </mon-draggable>
    `}};fn.styles=gn,(0,yo.Cg)([(0,ko.MZ)({type:Number})],fn.prototype,"offset",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Object})],fn.prototype,"positionConfig",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],fn.prototype,"stopMouseEventPropagation",void 0),(0,yo.Cg)([(0,ko.wk)()],fn.prototype,"inputRef",void 0),fn=(0,yo.Cg)([(0,ko.EM)("mon-ai-writer")],fn);var vn=a(6678),bn=a(1514);const Sn=xo.AH`
  @media (prefers-reduced-motion: no-preference) {
    :host {
      --animation-duration: 1ms;
    }
  }

  @keyframes grow-in {
    from {
      opacity: 0;
      transform: scale(0.9, 0.9);
    }
    to {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  @keyframes shrink-out {
    from {
      opacity: 1;
      transform: scale(1, 1);
    }
    to {
      opacity: 0;
      transform: scale(0.9, 0.9);
    }
  }

  :host * {
    box-sizing: border-box;
    font-family: var(--arc-font-family-body), sans-serif;
    font-size: 10px;
  }

  dialog {
    background: var(--art-color-primary-white-500, #fff);
    border: none;
    border-radius: var(
      --art-modal-border-radius,
      var(--arc-border-radius-lg, 8px)
    );
    min-height: var(--art-modal-min-height, auto);
    min-width: var(--art-modal-min-width, auto);
    outline: 1px solid transparent;
    padding: 0;
  }

  dialog.open {
    animation: var(--animation-duration) ease-in grow-in;
    animation-iteration-count: 1;
  }

  dialog.closing {
    animation: var(--animation-duration) ease-in shrink-out;
    animation-iteration-count: 1;
    opacity: 0;
  }

  dialog::backdrop,
  dialog.closing::backdrop {
    background: rgb(0 0 0 / 1%);
    transition: var(--animation-duration) ease-in;
  }

  dialog.open::backdrop {
    background: rgb(0 0 0 / 70%);
  }

  dialog.no-backdrop::backdrop {
    background: transparent;
  }

  .dialog-wrap {
    overflow: auto;
  }

  .dialog-header {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
  }

  .dialog-header h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.6rem 1rem 1.6rem 2.4rem;
  }

  .close-button {
    background: none;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;
    height: 2.4rem;
    margin: 1.6rem 2.4rem 1.6rem auto;
    place-content: center;
    width: 2.4rem;
  }

  .close-button svg {
    height: 2rem;
    width: 1.4rem;
  }

  .dialog-content {
    padding: var(--art-modal-content-padding, 0 2.4rem);
  }
`;let yn=class extends To{constructor(){super(...arguments),this.closeOnBackgroundClick=!1,this.disableClose=!1,this.animationDuration=250,this.open=!1,this.titleText="",this.noBackdrop=!1,this.dialogStyles={},this.closing=!1}async updated(e){if(super.updated(e),e.has("open")){const t=e.get("open");t||!0!==this.open?t&&!1===this.open&&this.closeModal():this.dialog?.showModal()}}handleBGClick(e){this.closeOnBackgroundClick&&e.target===this.dialog&&this.closeModal()}handleKeyDown(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),this.closeModal())}closeModal(){this.dialog.open&&!this.closing&&(this.closing=!0,setTimeout((()=>{this.dialog.close(),this.dispatchEvent(new CustomEvent("artDialogClosed",{bubbles:!0,composed:!0})),this.closing=!1}),this.animationDuration))}connectedCallback(){super.connectedCallback(),this.style.setProperty("--animation-duration",`${this.animationDuration}ms`)}render(){const e={"no-backdrop":this.noBackdrop,open:this.open,closing:this.closing};return xo.qy`
      <dialog
        .aria-label=${this.getAttribute("aria-label")}
        ?aria-modal=${!0}
        @click="${this.handleBGClick}"
        @keydown="${this.handleKeyDown}"
        style=${(0,bn.W)(this.dialogStyles)}
        class=${(0,vn.H)(e)}
      >
        <div class="dialog-wrap">
          <slot name="toast-container"></slot>
          <div class="dialog-header">
            <slot name="title">
              ${this.titleText?xo.qy`<h1>${this.titleText}</h1>`:xo.s6}
            </slot>
            ${this.disableClose?xo.s6:xo.qy`
                  <button
                    class="close-button"
                    aria-label="Close modal"
                    @click=${this.closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                      />
                    </svg>
                  </button>
                `}
          </div>
          <div class="dialog-content">
            <slot><p>Modal content failed to load</p></slot>
          </div>
        </div>
      </dialog>
    `}};yn.styles=Sn,(0,yo.Cg)([(0,ko.P)("dialog")],yn.prototype,"dialog",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],yn.prototype,"closeOnBackgroundClick",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],yn.prototype,"disableClose",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Number})],yn.prototype,"animationDuration",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],yn.prototype,"open",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],yn.prototype,"titleText",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],yn.prototype,"noBackdrop",void 0),(0,yo.Cg)([(0,ko.MZ)({attribute:!1})],yn.prototype,"dialogStyles",void 0),(0,yo.Cg)([(0,ko.wk)()],yn.prototype,"closing",void 0),yn=(0,yo.Cg)([(0,ko.EM)("art-modal")],yn);const xn=xo.AH`
  * {
    box-sizing: border-box;
    font-size: 10px;
  }

  :host {
    align-items: flex-start;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--arc-space-0-25, 0.2rem);
    outline: none;
  }

  :host(:focus-visible) {
    outline: -webkit-focus-ring-color auto 1px;
    outline-offset: var(--arc-space-0-5, 0.4rem);
  }

  ::slotted(i) {
    font-size: 1.4rem;
  }

  .content {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    gap-row: var(--arc-space-1, 0.8rem);
  }

  .tab-label {
    font-size: 1.4rem;
  }

  .tab-underline {
    display: none;
  }

  .tab-selected {
    display: flex;
    height: var(--arc-space-0-25, 0.2rem);
    align-self: stretch;
    background: var(--art-grays-black-000000, #000);
  }
`;let Cn=class extends To{constructor(){super(...arguments),this.slot="tab",this.label="",this.role="tab",this.value="",this["aria-selected"]="false",this.selected=!1,this.disabled=!1,this.tabIndex=-1,this.bindEvents=()=>{this.on("click",this.onClick)}}onClick(){this.dispatch("art-tab:change")}render(){return xo.qy`
      <span class="content">
        <slot name="icon"></slot>
        <div class="tab-label">${this.label}</div>
        <slot></slot>
      </span>
      <span class="tab-underline ${this.selected?"tab-selected":""}"></span>
    `}};Cn.styles=xn,(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],Cn.prototype,"slot",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],Cn.prototype,"label",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],Cn.prototype,"role",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],Cn.prototype,"value",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],Cn.prototype,"aria-selected",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean,reflect:!0})],Cn.prototype,"selected",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean,reflect:!0})],Cn.prototype,"disabled",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],Cn.prototype,"aria-controls",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Number,reflect:!0})],Cn.prototype,"tabIndex",void 0),Cn=(0,yo.Cg)([(0,ko.EM)("art-tab")],Cn);const In=xo.AH`
  * {
    box-sizing: border-box;
  }
`;let wn=class extends To{constructor(){super(...arguments),this.value="",this.slot="panel"}render(){return xo.qy`
      <div
        role="tabpanel"
        id=${this.id}
      >
        <slot></slot>
      </div>
    `}};wn.styles=In,(0,yo.Cg)([(0,ko.MZ)({type:String})],wn.prototype,"value",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],wn.prototype,"slot",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],wn.prototype,"aria-labelledby",void 0),wn=(0,yo.Cg)([(0,ko.EM)("art-tab-panel")],wn);const zn=xo.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
  }

  .tabs {
    align-items: flex-start;
    background: white;
    display: flex;
  }

  .tabs.sticky-header {
    position: sticky;
    top: 0;
    z-index: 999;
    padding-bottom: var(--arc-space-2-5);
  }

  slot[name='tab'] {
    display: flex;
    flex-direction: row;
    gap: var(--arc-space-4);
    padding-top: var(--arc-space-1);
  }
`;let kn=class extends To{constructor(){super(...arguments),this.autofocusit=!0,this.value=null,this.stickyHeaderPosition=-1,this.tabFocus=0,this.bindEvents=()=>{this.on("art-tab:change",this.onChange),this.on("keydown",this.onKeydown)},this.onChange=e=>{e.target instanceof Cn&&(this.value=e.target.value??null,this.syncTabStates(),this.dispatch("art-tabs:change",{value:this.value}))},this.onKeydown=e=>{if(!(e.target instanceof Cn))return;const{key:t}=e;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t)){const e=this.$$$("art-tab","tab");"ArrowRight"===t||"ArrowUp"===t?(this.tabFocus++,this.tabFocus>=e.length&&(this.tabFocus=0)):"ArrowLeft"===t||"ArrowDown"===t?(this.tabFocus--,this.tabFocus<0&&(this.tabFocus=e.length-1)):"Home"===t?this.tabFocus=0:"End"===t&&(this.tabFocus=e.length-1),this.value=e[this.tabFocus].value,this.syncTabStates()}},this.focusFirstApplicableItem=()=>{this.value=this.$selected?.value??this.$$$("art-tab","tab")[0]?.value,this.syncTabStates(),this.dispatch("art-tabs:change",{value:this.value})},this.onTabSlotChange=()=>{this.autofocusit&&this.focusFirstApplicableItem(),this.syncAriaLabels()},this.syncAriaLabels=()=>{const e=this.$$$("art-tab-panel","panel");this.$$$("art-tab","tab").forEach(((t,a)=>{const i=`art-tabs-tab-${a}`;t.id=i,e.forEach(((e,a)=>{if(e.value===t.value){const r=`art-tabs-tab-panel-${a}`;e.id=r,e.setAttribute("aria-labelledby",i),t.setAttribute("aria-controls",r)}}))}))},this.syncTabStates=()=>{this.$$$("art-tab","tab").forEach(((e,t)=>{const a=e.value===this.value;e.toggleAttribute("selected",a),e.setAttribute("aria-selected",a.toString()),e.tabIndex=a?0:-1,a&&(this.tabFocus=t,e.focus())})),this.$$$("art-tab-panel","panel").forEach((e=>{e.toggleAttribute("hidden",this.value!==e.value)}))}}get $selected(){return this.$$$("art-tab[selected]")[0]}update(e){super.update(e),e.has("value")&&this.value!==e.get("value")&&this.syncTabStates()}render(){return xo.qy`
      <div
        role="tablist"
        class=${(0,vn.H)({tabs:!0,"sticky-header":this.stickyHeaderPosition>-1})}
        style=${(0,bn.W)({position:this.stickyHeaderPosition>-1?"sticky":"inherit",top:this.stickyHeaderPosition>-1?`${this.stickyHeaderPosition}px`:"unset"})}
      >
        <slot
          name="tab"
          @slotchange=${this.onTabSlotChange}
        ></slot>
      </div>
      <slot name="panel"></slot>
    `}};kn.styles=zn,(0,yo.Cg)([(0,ko.MZ)({type:Boolean,reflect:!0})],kn.prototype,"autofocusit",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],kn.prototype,"value",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Number})],kn.prototype,"stickyHeaderPosition",void 0),kn=(0,yo.Cg)([(0,ko.EM)("art-tabs")],kn);const Tn=xo.AH`
  :host {
    margin: 0;
    border: none;
    padding: 0;
  }
`;let Ln=class extends To{constructor(){super(...arguments),this.offsets={x:0,y:0},this.anchor=null,this.positionConfig={},this.strategy="fixed",this.isPopover=!0,this.updatePosition=async()=>{const{anchor:e,style:t}=this;if(e&&t){const{x:a,y:i}=await(0,on.rD)(e,this,{placement:"bottom",strategy:this.strategy,middleware:[(0,on.UU)(),(0,on.BN)(),(0,on.cY)(12)],...this.positionConfig});t.top=`${i}px`,t.left=`${a}px`}},this.checkClickOutside=e=>{const{anchor:t}=this;t&&!e.composedPath().includes(t)&&this.dispatchEvent(new CustomEvent("blur"))},this.handleMove=({pageX:e,pageY:t})=>{this.style.left=e-this.offsets.x+"px",this.style.top=t-this.offsets.y+"px"}}connectedCallback(){super.connectedCallback();const{anchor:e}=this;e&&(this.isPopover?(this.popover||(this.popover="manual",this.showPopover()),this.collectOff((0,on.ll)(e,this,this.updatePosition))):this.style.position="relative",this.onmousedown=({pageX:e,pageY:t})=>(this.offsets.x=e-this.offsetLeft,this.offsets.y=t-this.offsetTop,window.addEventListener("mousemove",this.handleMove,!0),!1),this.onmouseup=()=>(window.removeEventListener("mousemove",this.handleMove,!0),!1)),window.addEventListener("mousedown",this.checkClickOutside,{capture:!0,passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.isPopover&&this.hidePopover(),this.onmousedown=null,this.onmouseup=null,window.removeEventListener("mousedown",this.checkClickOutside,{capture:!0})}render(){return xo.qy`
      <div class="mon-draggable">
        <slot></slot>
      </div>
    `}};Ln.styles=Tn,(0,yo.Cg)([(0,ko.MZ)()],Ln.prototype,"anchor",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Object})],Ln.prototype,"positionConfig",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],Ln.prototype,"strategy",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],Ln.prototype,"isPopover",void 0),Ln=(0,yo.Cg)([(0,ko.EM)("mon-draggable")],Ln);const Mn=xo.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    cursor: pointer;
    display: flex;
    padding: var(
      --mon-menu-item-padding,
      var(--arc-space-1) var(--arc-space-1-5)
    );
    background-color: var(--arc-color-mono-white);
    align-items: center;
    font-size: var(--art-font-size-sm);
    color: var(--art-color-mono-900);
    border-radius: var(
      --mon-menu-item-border-radius,
      var(--arc-border-radius-md)
    );
    --mon-menu-item-gap: var(--arc-space-1-5);
    height: var(--mon-menu-item-height, auto);
    min-height: var(--mon-menu-item-min-height, auto);
    min-width: var(--mon-menu-item-min-width, auto);
  }

  :host(:hover) {
    background-color: var(--mon-menu-item-hover-background-color);
  }

  :host(:focus) {
    z-index: 1;
  }

  :host([selected]) {
    background-color: var(--mon-menu-item-selected-background-color);
    color: var(--arc-color-text-primary);
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'],
  .extras {
    display: flex;
    align-items: center;
  }

  slot[name='icon'],
  slot[name='shortcut'],
  slot[name='chevron'] {
    color: var(--arc-color-icon-primary);
  }

  /* Base icon slot styles */
  slot[name='icon'] {
    --_icon-size: var(--mon-menu-item-icon-size, 1.6rem);
    --mon-icon-size: var(--_icon-size);
    flex: none;
    width: 0;
    height: var(--_icon-size);
    justify-content: center;
    opacity: 0;
  }

  /* When icon slot has content */
  slot[name='icon']:not(:empty) {
    width: var(--_icon-size);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  /* For menus that always have icons (like context menu), force consistent spacing and visibility */
  :host([data-has-icons]) slot[name='icon'] {
    width: var(--_icon-size);
    margin-right: var(--mon-menu-item-gap);
    opacity: 1;
  }

  .content {
    display: flex;
    flex: 1;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
  }

  ::slotted(*:not([slot])) {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  .extras {
    flex: none;
    justify-content: flex-end;
  }
`;let An=class extends To{constructor(){super(...arguments),this.selected=!1,this.tabIndex=-1,this.role="menuitem",this.delegatesFocus=!1,this.focusableRef=(0,nn._)(),this.bindEvents=()=>{this.on("mouseenter",(()=>{this.dispatch("hover",{value:this.value,hovered:!0})})),this.on("click",this.onClick),this.on("focus",(()=>{if(this.delegatesFocus){const e=this.querySelector('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');e instanceof HTMLElement&&e.focus()}}))}}onClick(){this.dispatch("mon-menu-item:select")}render(){return xo.qy`
      <slot name="icon"></slot>
      <div class="content">
        <slot></slot>
        <div class="extras">
          <slot name="shortcut"></slot>
          <slot name="chevron"></slot>
        </div>
      </div>
    `}};An.formAssociated=!0,An.styles=Mn,An.shadowRootOptions={...xo.WF.shadowRootOptions,delegatesFocus:!1},(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],An.prototype,"value",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean,reflect:!0})],An.prototype,"selected",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Number,reflect:!0})],An.prototype,"tabIndex",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],An.prototype,"role",void 0),(0,yo.Cg)([(0,ko.MZ)()],An.prototype,"delegatesFocus",void 0),(0,yo.Cg)([(0,ko.wk)()],An.prototype,"focusableRef",void 0),An=(0,yo.Cg)([(0,ko.EM)("mon-menu-item")],An);const Bn=xo.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --mon-menu-item-hover-background-color: var(
      --arc-color-background-primary-hover
    );
    --mon-menu-item-selected-background-color: var(
      --arc-color-background-primary-selected
    );
    --mon-menu-font-size: var(--art-font-size-sm);
    --mon-menu-color: var(--art-color-mono-900);
    background: var(--arc-color-mono-white);
    border-radius: var(--mon-menu-border-radius, var(--arc-border-radius-lg));
    box-shadow: var(--mon-menu-box-shadow, var(--arc-shadow-lg));
    padding: var(--mon-menu-padding, var(--arc-space-0-5));
    min-width: var(--mon-menu-min-width, auto);
    font-size: var(--mon-menu-font-size);
    color: var(--mon-menu-color);
    display: flex;
    flex-direction: column;
  }

  :host([floating]) {
    position: var(--mon-menu-position, absolute);
    inset: var(--mon-menu-inset, 100% 0 auto 0);
    z-index: 99999;
    top: var(--mon-menu-top, unset);
    right: var(--mon-menu-right, unset);
  }
`;let Fn=class extends To{constructor(){super(...arguments),this.floating=!1,this.autofocusit=!1,this.value=null,this.itemFocus=0,this.submit=()=>{this.dispatch("mon-menu:submit",{name:this.name,value:this.value})},this.focusFirstApplicableItem=()=>{this.menuItems[this.itemFocus]?.focus()},this.onSelect=e=>{e.stopPropagation(),this.value=e.target.value??null;for(const e of this.$$$("mon-menu-item"))e.selected=e.value===this.value;this.submit()},this.onKeyDown=e=>{const{key:t,shiftKey:a}=e;e.target.assignedSlot?.parentElement===this||e.composedPath().includes(this)?(["ArrowUp","ArrowDown","ArrowRight","End","Home"].includes(t)&&(e.stopPropagation(),e.preventDefault()),["ArrowUp","ArrowDown","End","Home"].includes(t)?("ArrowDown"===t?(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.itemFocus=0)):"ArrowUp"===t?(this.itemFocus--,this.itemFocus<0&&(this.itemFocus=this.menuItems.length-1)):"Home"===t?this.itemFocus=0:"End"===t&&(this.itemFocus=this.menuItems.length-1),this.menuItems[this.itemFocus].focus(),this.value=this.menuItems[this.itemFocus].value??null):"Tab"===t?(a?(this.itemFocus--,this.itemFocus<0?(this.value=null,this.dispatch("mon-menu:escape")):(e.preventDefault(),e.stopPropagation(),this.menuItems[this.itemFocus].focus())):(this.itemFocus++,this.itemFocus>=this.menuItems.length&&(this.value=null,this.dispatch("mon-menu:escape"))),this.value=this.menuItems[this.itemFocus]?.value??null):"Escape"===t?this.dispatch("mon-menu:escape"):"ArrowRight"===t?this.dispatch("mon-menu:open-sub-menu",{name:this.name,value:this.value,target:this.menuItems[this.itemFocus]}):"ArrowLeft"===t&&this.dispatch("mon-menu:close-sub-menu")):("Escape"!==t&&"ArrowLeft"!==t||(this.focusFirstApplicableItem(),e.preventDefault(),e.stopPropagation()),"Tab"===t&&null===e.target.nextElementSibling&&(this.itemFocus++,e.stopPropagation()))},this.onKeyup=e=>{const{key:t}=e;"Enter"!==t&&" "!==t||(this.value=this.menuItems[this.itemFocus]?.value??null,this.submit(),e.stopPropagation())},this.onSlotChange=()=>{for(const e of this.menuItems)e.tabIndex=0,e.selected=e.value===this.value;this.autofocusit&&!el()&&this.focusFirstApplicableItem()}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}get menuItems(){return this.$$$("mon-menu-item")}bindEvents(){this.on("mon-menu-item:select",this.onSelect),this.on("keyup",this.onKeyup),this.on("keydown",this.onKeyDown)}render(){return xo.qy` <slot @slotchange=${this.onSlotChange}></slot> `}};Fn.styles=Bn,(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],Fn.prototype,"name",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean,reflect:!0})],Fn.prototype,"floating",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean,reflect:!0})],Fn.prototype,"autofocusit",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],Fn.prototype,"value",void 0),Fn=(0,yo.Cg)([(0,ko.EM)("mon-menu")],Fn);const Vn=xo.AH`
  :host {
    position: fixed;
    z-index: var(--mon-z-index-popover);
    border-radius: var(--mon-popover-border-radius, 0);
    padding: var(--mon-popover-padding, var(--arc-space-2));
    overflow: var(--mon-popover-overflow, auto);
    box-shadow: var(--mon-popover-shadow, var(--arc-shadow-md));
    box-sizing: border-box;
    width: var(--mon-popover-width, auto);
    clip-path: var(--mon-popover-clip-path, none);
  }

  :host([semantic]) {
    border: var(--mon-overlay-border, none);
    border-radius: var(--mon-popover-border-radius, 0);
    margin: var(--mon-popover-margin, 0);
    width: var(--mon-popover-width, fit-content);
  }
`,Dn={enabled:!1,padding:0,boundary:"clippingAncestors",prioritizeResize:!1,minResizeHeight:0,minResizeWidth:0,enableShiftCrossAxis:!1,flipPadding:0,shiftPadding:0,maxResizeHeight:1/0,maxResizeWidth:1/0,avoidFlipOverlap:!1,matchAnchorWidth:!1};let Jn=class extends To{constructor(){super(...arguments),this.autoFlip=!0,this.autoResizeOptions={},this.customMiddleware=[],this.autoShift=!0,this.semantic=!1,this.enableAutoUpdates=!0,this.semanticPriority=0,this.offset=10,this.placement="bottom",this.sizeMiddlewareOptions={...Dn,...this.autoResizeOptions},this.middleware=[],this.syncMiddleware=()=>{this.sizeMiddlewareOptions={...Dn,...this.autoResizeOptions};const e=this.sizeMiddlewareOptions.avoidFlipOverlap,t=this.sizeMiddlewareOptions.minResizeWidth,a=this.sizeMiddlewareOptions.maxResizeWidth,i=this.sizeMiddlewareOptions.minResizeHeight,r=this.sizeMiddlewareOptions.maxResizeHeight,o=this.sizeMiddlewareOptions.matchAnchorWidth,n="number"==typeof this.sizeMiddlewareOptions.shiftPadding?this.sizeMiddlewareOptions.shiftPadding:this.sizeMiddlewareOptions.shiftPadding.top??0,l=this.sizeMiddlewareOptions.enabled&&(0,on.Ej)({apply({availableWidth:l,availableHeight:s,elements:c,rects:d,y:p,placement:h}){const u=r?`${r}px`:"",m=[s,r,window.innerHeight-n];if(e){const e=c.reference.getBoundingClientRect().top;e>p&&h.includes("top")&&m.push(window.innerHeight-(window.innerHeight-e)-n)}const g=`${Math.max(i,Math.min(...m))}px`;c.floating.style.maxHeight=s>=c.floating.scrollHeight?u:g,c.floating.style.maxWidth=`${Math.max(t,Math.min(a,l))}px`,o&&(c.floating.style.minWidth=`${d.reference.width}px`)},padding:this.sizeMiddlewareOptions.padding,boundary:this.sizeMiddlewareOptions.boundary}),s=this.autoShift&&(0,on.BN)({crossAxis:this.sizeMiddlewareOptions.enableShiftCrossAxis,padding:this.sizeMiddlewareOptions.shiftPadding}),c=(0,on.cY)(this.offset);this.sizeMiddlewareOptions.prioritizeResize?this.middleware=[l,this.autoFlip&&(0,on.UU)({fallbackStrategy:"initialPlacement",flipAlignment:!1,padding:this.sizeMiddlewareOptions.flipPadding}),s,...this.customMiddleware,c].filter((e=>!!e)):this.middleware=[this.autoFlip&&(0,on.UU)({padding:this.sizeMiddlewareOptions.flipPadding}),s,l,...this.customMiddleware,c].filter((e=>!!e))},this.updatePosition=()=>{this.anchor&&(0,on.rD)(this.anchor,this,{placement:this.placement,strategy:"fixed",middleware:this.middleware}).then((({x:e,y:t})=>{this.style.left=`${e}px`,this.style.top=`${t}px`}))}}updated(e){if(super.updated(e),Array.from(e.keys()).some((e=>["autoFlip","autoShift","autoResizeOptions","customMiddleware","offset"].includes(e)))&&this.syncMiddleware(),e.has("semantic")&&(this.semantic?(this.hasAttribute("popover")||(this.setAttribute("popover","manual"),function(e,t){const a=[];let i;{let r=0;for(;r<Wi.length;r+=1){const e=Wi[r];if(e.order>t)break;a.push(e)}for(i=r,a.push({element:e,order:t});r<Wi.length;r+=1){const e=Wi[r];e.element.hidePopover(),a.push(e)}}for(let e=i;e<a.length;e+=1)a[e].element.showPopover();Wi=a}(this,this.semanticPriority)),this.collectOff((()=>{this.hasAttribute("popover")&&(Ki(this),this.removeAttribute("popover"))}))):this.hasAttribute("popover")&&(Ki(this),this.removeAttribute("popover"))),e.has("anchor")&&this.anchor)if(this.enableAutoUpdates){this.autoUpdateDisposer&&this.autoUpdateDisposer();const e=(0,on.ll)(this.anchor,this,this.updatePosition,{animationFrame:!0});this.collectOff(e),this.autoUpdateDisposer=e}else this.updatePosition()}render(){return xo.qy`<slot></slot>`}};Jn.styles=Vn,(0,yo.Cg)([(0,ko.MZ)()],Jn.prototype,"anchor",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],Jn.prototype,"autoFlip",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Object})],Jn.prototype,"autoResizeOptions",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Array})],Jn.prototype,"customMiddleware",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],Jn.prototype,"autoShift",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean,reflect:!0})],Jn.prototype,"semantic",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Boolean})],Jn.prototype,"enableAutoUpdates",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Number,reflect:!0})],Jn.prototype,"semanticPriority",void 0),(0,yo.Cg)([(0,ko.MZ)()],Jn.prototype,"offset",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],Jn.prototype,"placement",void 0),Jn=(0,yo.Cg)([(0,ko.EM)("mon-popover")],Jn);const Rn=xo.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --icon-color: var(--arc-color-neutral-600);
    display: block;
    position: relative;
    max-width: 100%;
  }

  .hidden {
    display: none;
  }

  .trigger {
    cursor: pointer;
    width: 100%;
    height: 3.2rem;
    display: flex;
    align-items: center;
    gap: var(--arc-space-0-75);
    border: none;
    border-radius: var(--arc-border-radius-md);
    background: var(--mon-color-input);
    padding: 0 var(--arc-space-1-5);
    text-align: left;
    font-family: inherit;
    font-size: var(--arc-font-size-14);
    outline: none;
  }

  .trigger:hover {
    box-shadow: var(--mon-input-hover-box-shadow);
  }

  .trigger:focus-visible {
    box-shadow: var(--mon-input-focus-box-shadow);
  }

  .trigger-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trigger-icon {
    width: 14px;
    height: 14px;
    fill: var(--arc-color-neutral-700);
  }

  .mon-select-popover {
    --mon-popover-padding: 0;
    --mon-popover-border-radius: var(--arc-border-radius-lg);
  }

  .mon-select-menu {
    overflow-y: auto;
    --mon-menu-border-radius: 0;
  }
`;let Zn=class extends To{constructor(){super(...arguments),this.value=null,this.popoverPlacement="bottom-end",this.placeholder="Choose an item...",this.open=!1,this.labelText="",this.anchorRef=(0,nn._)(),this.scrollBarWidth=Qi,this.cancel=()=>{this.open&&(this.dispatch("mon-select:cancel"),this.dispatch("mon-select:close")),this.open=!1},this.onMenuEscape=()=>{this.cancel()},this.onSubmit=e=>{this.open=!1,e.stopPropagation(),this.dispatch("mon-select:close"),this.dispatch("mon-select:change",{name:this.name,value:e.detail.value})},this.onClickOutside=()=>{this.cancel()},this.onClickTrigger=()=>{this.open?this.cancel():(this.open=!0,this.dispatch("mon-select:open"))},this.onKeyDown=e=>{"ArrowLeft"===e.key&&e.stopPropagation()},this.onButtonKeyDown=e=>{"Enter"===e.key?e.preventDefault():"ArrowDown"===e.key&&(e.stopPropagation(),this.open=!0,this.dispatch("mon-select:open"))},this.onSlotChange=()=>{this.syncLabelText()},this.syncLabelText=()=>{this.labelText=this.$$$("mon-menu-item")?.filter((e=>e.value===this.value))[0]?.innerText??this.placeholder},this.handleRefChange=e=>{this.anchorRef=e}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}bindEvents(){this.on("mon-menu:escape",this.onMenuEscape),this.on("keydown",this.onKeyDown),this.collectOff(Io("mousedown",window,(e=>{const t=e.composedPath();e.target instanceof Node&&!t.includes(this)&&this.onClickOutside()}),{capture:!0,passive:!0}))}updated(e){e.has("value")&&this.syncLabelText(),this.open&&!1===e.get("open")&&window.requestAnimationFrame((()=>{const e=this.$$$("mon-menu-item")?.find((e=>e.value===this.value));e?.scrollIntoView({behavior:"instant",block:"nearest"})}))}renderTrigger(){return xo.qy`
      <button
        ${(0,nn.K)(this.handleRefChange)}
        @click=${this.onClickTrigger}
        @keydown=${this.onButtonKeyDown}
        type="button"
        class="trigger"
      >
        <span class="trigger-content">
          <slot name="selected">${this.labelText}</slot>
        </span>
        <span class="trigger-icon">
          <!-- TODO: Stop using '<i />'-based icons; use svgs instead. -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </span>
      </button>
    `}renderMenu(){return this.open?xo.qy`
          <mon-popover
            .anchor=${this.anchorRef}
            class="mon-select-popover"
            .offset=${0}
            .autoResizeOptions=${{enabled:!0,padding:{top:0,right:0,bottom:36,left:0},prioritizeResize:!0,minResizeHeight:72,enableShiftCrossAxis:!0,shiftPadding:{top:99,right:0,bottom:0,left:this.scrollBarWidth},maxResizeHeight:400,avoidFlipOverlap:!0,matchAnchorWidth:!0}}
            placement=${this.popoverPlacement}
            semantic=${!0}
            .autoShift=${!0}
          >
            <mon-menu
              class="mon-select-menu"
              name=${this.name}
              autofocusit
              @mon-menu:submit=${this.onSubmit}
              value=${this.value}
            >
              <slot></slot>
            </mon-menu>
          </mon-popover>
        `:xo.qy`<slot
          class="hidden"
          @slotchange=${this.onSlotChange}
        ></slot>`}render(){return xo.qy`${this.renderTrigger()}${this.renderMenu()}`}};Zn.styles=Rn,(0,yo.Cg)([(0,ko.MZ)({type:String,reflect:!0})],Zn.prototype,"name",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],Zn.prototype,"value",void 0),(0,yo.Cg)([(0,ko.MZ)({type:String})],Zn.prototype,"popoverPlacement",void 0),(0,yo.Cg)([(0,ko.MZ)()],Zn.prototype,"placeholder",void 0),(0,yo.Cg)([(0,ko.wk)()],Zn.prototype,"open",void 0),(0,yo.Cg)([(0,ko.wk)()],Zn.prototype,"labelText",void 0),(0,yo.Cg)([(0,ko.wk)()],Zn.prototype,"anchorRef",void 0),(0,yo.Cg)([(0,ko.wk)()],Zn.prototype,"scrollBarWidth",void 0),Zn=(0,yo.Cg)([(0,ko.EM)("mon-select")],Zn);const Pn=xo.AH`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :host {
    --border-color: rgb(0 0 0 / 30%);
    --border-color-active: black;
    --border-color-active-hover: rgb(0 0 0 / 60%);
    --border-color-hover: black;
    --border-radius: calc(0.5 * var(--toggle-height));
    --border-width: 1px;
    --control-width: 3.8rem;
    --focus-color: #4d90fe;
    --handle-bg-color: white;
    --handle-box-shadow: 0 2px 6px 0 rgb(0 0 0 / 16%);
    --inset-active-bg-color: black;
    --inset-active-bg-hover-color: rgb(0 0 0 / 60%);
    --inset-bg-color: rgb(0 0 0 / 5%);
    --inset-bg-hover-color: rgb(0 0 0 / 10%);
    --toggle-height: 2.2rem;
    --transition: 0.1s ease-out;
  }

  .toggle .control {
    background-color: var(--inset-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    height: var(--toggle-height);
    position: relative;
    transition: var(--transition);
    width: var(--control-width);
  }

  .toggle .handle {
    background-color: var(--handle-bg-color);
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--handle-box-shadow);
    height: var(--toggle-height);
    left: calc(-1 * var(--border-width));
    position: absolute;
    top: calc(-1 * var(--border-width));
    transition: var(--transition);
    width: var(--toggle-height);
  }

  .toggle.active .control {
    background-color: var(--inset-active-bg-color);
  }

  .toggle.active .handle {
    border-color: var(--border-color-active);
    transform: translateX(calc(var(--control-width) - var(--toggle-height)));
  }

  .toggle.active:hover .control {
    background-color: var(--inset-active-bg-hover-color);
    border-color: var(--border-color-active-hover);
  }

  .toggle.active:hover .handle {
    border-color: var(--border-color-active-hover);
  }

  .toggle:hover .control {
    background-color: var(--inset-bg-hover-color);
    border-color: var(--border-color-hover);
  }

  .toggle:hover .handle {
    border-color: var(--border-color-hover);
  }

  .toggle.in-focus .control {
    outline: 2px solid var(--focus-color);
    outline-offset: 1px;
  }
`;let _n=class extends To{constructor(){super(...arguments),this.focusedByClick=!1,this.animationDuration=250}toggleSwitch(e){!0===e?this.toggle?.classList.add("active"):!1===e?this.toggle?.classList.remove("active"):this.toggle?.classList.toggle("active")}handleClick(){this.focusedByClick=!0,this.checkboxes[0].checked=!this.checkboxes[0].checked,this.checkboxes[0].dispatchEvent(new Event("change")),setTimeout((()=>{this.focusedByClick=!1}))}handleFocus(){setTimeout((()=>{!1===this.focusedByClick&&this.toggleVisibleFocus(!0)}))}handleBlur(){this.toggleVisibleFocus(!1)}toggleVisibleFocus(e){!0===e?this.toggle.classList.add("in-focus"):this.toggle.classList.remove("in-focus")}handleCheckboxChange(e){const t=e.target;this.toggleSwitch(t.checked)}handleKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.handleClick())}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.checkboxes.forEach((e=>{this.toggleSwitch(e.checked),e.style.left="0",e.style.opacity="0.01",e.style.outline="none !important",e.style.position="absolute",e.style.top="0",e.addEventListener("focus",this.handleFocus.bind(this)),e.addEventListener("blur",this.handleBlur.bind(this)),e.addEventListener("change",this.handleCheckboxChange.bind(this)),e.addEventListener("keydown",this.handleKeydown.bind(this))}))}render(){return xo.qy`
      <div class="toggle">
        <div
          @click=${this.handleClick}
          class="control"
        >
          <div class="handle"></div>
        </div>
        <slot></slot>
      </div>
    `}};_n.styles=Pn,(0,yo.Cg)([(0,ko.P)(".toggle")],_n.prototype,"toggle",void 0),(0,yo.Cg)([(0,ko.P)(".control")],_n.prototype,"control",void 0),(0,yo.Cg)([(0,ko.KN)({selector:'input[type="checkbox"]'})],_n.prototype,"checkboxes",void 0),(0,yo.Cg)([(0,ko.wk)()],_n.prototype,"focusedByClick",void 0),(0,yo.Cg)([(0,ko.MZ)({type:Number})],_n.prototype,"animationDuration",void 0),_n=(0,yo.Cg)([(0,ko.EM)("mon-toggle")],_n);const Hn=(e,t)=>{const a=t.cssText,i=new WeakSet;return t=>{const r=t.getRootNode();if(!i.has(r)){i.add(r);const t=(r instanceof ShadowRoot?r.ownerDocument:r instanceof Document?r:document).createElement("style");t.setAttribute("data-svelte-lit-styles",e),t.textContent=a,r.appendChild(t)}}},$n=xo.AH`
  &[data-flex='1'] {
    --arc-internal-btn-flex: 1;
  }

  &[data-flex='2'] {
    --arc-internal-btn-flex: 2;
  }

  &[data-flex='3'] {
    --arc-internal-btn-flex: 3;
  }

  &[data-flex='4'] {
    --arc-internal-btn-flex: 4;
  }

  &[data-flex='5'] {
    --arc-internal-btn-flex: 5;
  }

  &[data-layout='fill'] {
    --arc-internal-btn-display: flex;
    --arc-internal-btn-width: 100%;
    --arc-internal-btn-content-width: 0;
  }

  &[data-layout='icon'] {
    --arc-internal-btn-flex: none;
    --arc-internal-btn-padding-inline: 0;
    --arc-internal-btn-min-width: min-content;
    --arc-internal-btn-max-width: none;
    --arc-internal-btn-aspect-ratio: 1 / 1;

    &[data-shape='narrow'] {
      --arc-internal-btn-padding-inline: 2;
      --arc-internal-btn-aspect-ratio: auto;
    }
  }
`,On=xo.AH`
  &[data-size='xxl'] {
    --arc-modifier: 16; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 20;
    --arc-internal-btn-height: 56;
    --arc-internal-btn-gap: 10;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 32;
  }

  &[data-size='xl'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 48;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 32;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='lg'] {
    /** @default */
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 16;
    --arc-internal-btn-height: 40;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 20;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='md'] {
    --arc-modifier: 14; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 14;
    --arc-internal-btn-height: 32;
    --arc-internal-btn-gap: 8;
    --arc-internal-btn-padding-inline: 16;
    --arc-internal-btn-spinner-width: 16;
  }

  &[data-size='sm'] {
    --arc-modifier: 12; /* unitless, desired font size at 100% */
    --arc-internal-btn-icon-size: 12;
    --arc-internal-btn-height: 24;
    --arc-internal-btn-gap: 4;
    --arc-internal-btn-padding-inline: 12;
    --arc-internal-btn-spinner-width: 14;
  }
`,En=xo.AH`
  &[data-variant='primary'] {
    /** @default */
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-mono-black);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-800);

    --arc-internal-btn-active-text: var(--arc-color-neutral-200);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-600);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-neutral-800);
  }

  &[data-variant='secondary'] {
    /** @default - when icon-only */
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: var(--arc-color-border-full);

    --arc-internal-btn-hover-fill: var(--arc-color-neutral-100);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-neutral-200);
    --arc-internal-btn-active-edge: var(--arc-color-border-stark);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-border-stark);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-edge: var(--arc-color-border-standard);
      --arc-internal-btn-hover-edge: var(--arc-color-border-stark);
      --arc-internal-btn-focus-edge: var(--arc-color-border-standard);
    }
  }

  &[data-variant='tertiary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-black-10);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-black-03);
  }

  /** TODO: We'll need to true this up once the design system component implements their text variant */
  &[data-variant='text'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-text: var(--arc-color-neutral-700);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-05);

    --arc-internal-btn-active-text: var(--arc-color-neutral-500);

    --arc-internal-btn-disabled-text: var(--arc-color-neutral-300);

    --arc-internal-btn-processing-text: var(--art-color-neutral-200);
  }
`,Nn=xo.AH`
  &[data-variant='primary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill: var(--arc-color-mono-white);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-80);

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-60);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-30);

    &[data-layout='icon'] {
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-70);
    }
  }

  &[data-variant='secondary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);
    --arc-internal-btn-hover-edge: var(--arc-color-alpha-white-80);

    --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
    --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);
    --arc-internal-btn-active-edge: var(--arc-color-alpha-white-50);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);
    --arc-internal-btn-disabled-edge: var(--arc-color-alpha-white-20);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: transparent;
    --arc-internal-btn-processing-edge: var(--arc-color-alpha-white-60);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);
      --arc-internal-btn-focus-edge: var(--arc-color-alpha-white-60);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
      --arc-internal-btn-active-edge: var(--arc-color-alpha-white-40);
    }
  }

  &[data-variant='tertiary-inverse'] {
    --arc-internal-btn-text: var(--arc-color-alpha-white-95);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-20);

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill: var(--arc-color-alpha-white-40);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-white-40);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill: var(--arc-color-alpha-white-20);

    &[data-layout='icon'] {
      --arc-internal-btn-text: var(--arc-color-alpha-white-80);

      --arc-internal-btn-hover-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-hover-fill: var(--arc-color-alpha-white-30);

      --arc-internal-btn-focus-text: var(--arc-color-alpha-white-100);
      --arc-internal-btn-focus-fill: var(--arc-color-alpha-black-05);

      --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
      --arc-internal-btn-active-fill: var(--arc-color-alpha-white-30);
    }
  }
`,jn=xo.AH`
  &[data-variant='ai-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill:
      var(--arc-gradient-ai-500) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-white-80);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-600) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-text: var(--arc-color-alpha-white-70);
    --arc-internal-btn-processing-fill:
      var(--arc-gradient-ai-400) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant='ai-secondary'] {
    --arc-internal-btn-text: var(--arc-color-mono-black);
    --arc-internal-btn-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-200) border-box;

    --arc-internal-btn-hover-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-300) border-box;

    --arc-internal-btn-active-text: var(--arc-color-alpha-black-60);
    --arc-internal-btn-active-fill:
      var(--arc-gradient-ai-050) padding-box,
      var(--arc-gradient-ai-100) border-box;

    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-fill:
      linear-gradient(var(--arc-color-mono-white) 0 0) padding-box,
      var(--arc-gradient-ai-100) border-box;
  }

  &[data-variant^='ai-'] {
    --arc-internal-btn-border-width: var(--arc-computed-ai-btn-border-width);
    --arc-internal-btn-edge: transparent;
    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);
  }
`,Gn=xo.AH`
  &[data-variant='critical-primary'] {
    --arc-internal-btn-text: var(--arc-color-mono-white);
    --arc-internal-btn-fill: var(--arc-color-critical-dark);
    --arc-internal-btn-edge: transparent;

    --arc-internal-btn-hover-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-active-text: var(--arc-color-critical-medium);
    --arc-internal-btn-active-fill: var(--arc-color-critical-heavy);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-black-05);

    --arc-internal-btn-processing-fill: var(--arc-color-critical-heavy);
  }

  &[data-variant='critical-secondary'] {
    --arc-internal-btn-text: var(--arc-color-critical-dark);
    --arc-internal-btn-fill: transparent;
    --arc-internal-btn-edge: var(--arc-color-critical-dark);

    --arc-internal-btn-hover-fill: var(--arc-color-critical-light);
    --arc-internal-btn-focus-fill: var(--arc-color-alpha-white-100);

    --arc-internal-btn-active-text: var(--arc-color-red-300);
    --arc-internal-btn-active-fill: var(--arc-color-red-100);
    --arc-internal-btn-active-edge: var(--arc-color-critical-medium);

    --arc-internal-btn-disabled-text: var(--arc-color-alpha-black-30);
    --arc-internal-btn-disabled-fill: var(--arc-color-alpha-white-30);
    --arc-internal-btn-disabled-edge: var(--arc-color-border-standard);

    --arc-internal-btn-processing-text: var(--arc-color-neutral-200);
    --arc-internal-btn-processing-edge: var(--arc-color-critical-medium);
  }
`,qn=xo.AH`
  ${En}
  ${Nn}
  ${Gn}
  ${jn}
`;Hn("MonArcButton",xo.AH`
  [arc-button] {
    ${On}
    ${$n}
    ${qn}

    & {
      --arc-internal-btn-text-color: var(--arc-internal-btn-text);
      --arc-internal-btn-fill-color: var(--arc-internal-btn-fill);
      --arc-internal-btn-edge-color: var(--arc-internal-btn-edge);

      --arc-internal-btn-border-radius: var(--arc-border-radius-pill);
      --arc-internal-btn-border-radius-md: 4;
      --arc-internal-btn-border-width: 1;
      --arc-internal-btn-outline-size: 2;

      --arc-modifier-px: var(--arc-modifier) * 1px;
      --arc-modifier-em: var(--arc-modifier) * 1em;

      /* COMPUTED VARIABLES ------------------------------------------• */

      --arc-computed-btn-font-size: calc(var(--arc-modifier-px));
      --arc-computed-btn-icon-size: calc(
        var(--arc-internal-btn-icon-size) / var(--arc-modifier-em)
      );
      --arc-computed-btn-border-width: calc(
        var(--arc-internal-btn-border-width) / var(--arc-modifier-em)
      );
      --arc-computed-btn-outline-size: max(
        var(--arc-border-width-md),
        calc(var(--arc-internal-btn-outline-size) / var(--arc-modifier-em))
      );
      --arc-computed-btn-border-radius-md: calc(
        var(--arc-internal-btn-border-radius-md) / var(--arc-modifier-em)
      );
      --arc-computed-btn-height: calc(
        var(--arc-internal-btn-height) / var(--arc-modifier-em)
      );
      --arc-computed-btn-padding-inline: calc(
        var(--arc-internal-btn-padding-inline) / var(--arc-modifier-em)
      );
      --arc-computed-btn-gap: calc(
        var(--arc-internal-btn-gap) / var(--arc-modifier-em)
      );
      --arc-computed-btn-spinner-width: calc(
        var(--arc-internal-btn-spinner-width) / var(--arc-modifier-em)
      );

      /* Inter-Component Communication -------------------------------• */
      --arc-icon-size: var(
        --arc-computed-btn-icon-size
      ); /** @computed • ArcIcon size */
    }

    &:is(
        [data-layout='icon']:not([data-shape]),
        [data-shape='square'],
        [data-shape='narrow']
      ) {
      --arc-internal-btn-border-radius: var(
        --arc-computed-btn-border-radius-md
      ); /** @computed • border-radius */
    }

    &[data-variant^='ai-'] {
      --arc-computed-btn-border-width: calc(2 / var(--arc-modifier-em));
    }

    /* STATES --------------------------------------------------------- */

    &:is([data-is-processing], :has(input)) {
      --arc-internal-btn-position: relative;
    }

    &:disabled {
      --arc-internal-btn-cursor: not-allowed;
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-disabled-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-disabled-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-disabled-edge,
        var(--arc-internal-btn-edge)
      );
    }

    &:not(:disabled, [data-is-processing]) {
      &:hover {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-hover-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-hover-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-hover-edge,
          var(--arc-internal-btn-edge)
        );
      }

      &:is(:active, [data-is-active]) {
        --arc-internal-btn-text-color: var(
          --arc-internal-btn-active-text,
          var(--arc-internal-btn-text)
        );
        --arc-internal-btn-fill-color: var(
          --arc-internal-btn-active-fill,
          var(--arc-internal-btn-fill)
        );
        --arc-internal-btn-edge-color: var(
          --arc-internal-btn-active-edge,
          var(--arc-internal-btn-edge)
        );
      }
    }

    &[data-is-processing] {
      --arc-internal-btn-cursor: default;
      --arc-internal-btn-content-visibility: hidden;
      --arc-internal-btn-content-opacity: 0;

      --arc-internal-btn-text-color: var(
        --arc-internal-btn-processing-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-processing-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-processing-edge,
        var(--arc-internal-btn-edge)
      );

      /* spinner svg style controls */
      --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-30);
      --arc-internal-btn-spinner-circle-stroke: var(
        --arc-internal-btn-text-color
      );
      --arc-internal-btn-spinner-progress-stroke: var(
        --arc-internal-btn-text-color
      );

      &:is(
      [data-variant*=secondary], /* contains 'secondary' */
      [data-variant*=tertiary], /* contains 'tertiary' */
      [data-variant^=ai-], /* starts with 'ai-' */
      [data-variant$=-inverse] /* ends with '-inverse' */
    ) {
        --arc-internal-btn-spinner-circle-opacity: var(--arc-alpha-100);
        --arc-internal-btn-spinner-progress-stroke: var(--arc-color-brand-root);
      }
    }

    &:where(:focus, :focus-within):focus-visible {
      --arc-internal-btn-text-color: var(
        --arc-internal-btn-focus-text,
        var(--arc-internal-btn-text)
      );
      --arc-internal-btn-fill-color: var(
        --arc-internal-btn-focus-fill,
        var(--arc-internal-btn-fill)
      );
      --arc-internal-btn-edge-color: var(
        --arc-internal-btn-focus-edge,
        var(--arc-internal-btn-edge)
      );
      --arc-internal-btn-outline-color: var(--arc-color-border-focus);

      &[data-variant$='-inverse'] {
        --arc-internal-btn-outline-color: var(--arc-color-border-focus-inverse);
      }

      outline: var(--arc-computed-btn-outline-size) solid
        var(--arc-internal-btn-outline-color); /** @computed • outline-width */
      outline-offset: var(
        --arc-button-outline-offset,
        var(--arc-computed-btn-outline-size)
      ); /** @computed • outline-offset */

      * {
        outline: none;
      }
    }
  }

  /* CORE STYLES ------------------------------------------------------ */

  [arc-button]:not([hidden]) {
    flex: var(--arc-internal-btn-flex, unset);
    display: var(--arc-internal-btn-display, inline-flex);
    align-items: center;
    justify-content: center;
  }

  [arc-button] {
    appearance: none;
    cursor: var(--arc-internal-btn-cursor, pointer);
    position: var(--arc-internal-btn-position, unset);
    transition: 150ms ease-out;

    /* footprint */

    font: inherit;
    font-size: var(
      --arc-button-font-size,
      var(--arc-computed-btn-font-size, inherit)
    ); /** @computed • font-size */
    font-weight: var(--arc-button-font-weight, var(--arc-font-weight-600));
    max-width: var(--arc-internal-btn-max-width, 100%);
    min-width: var(--arc-internal-btn-min-width, unset);
    width: var(--arc-internal-btn-width, unset);
    height: var(--arc-computed-btn-height, unset); /** @computed • height */
    aspect-ratio: var(--arc-internal-btn-aspect-ratio, unset);

    padding-block: 0;
    padding-inline: var(
      --arc-computed-btn-padding-inline
    ); /** @computed • padding-inline */

    /* Variant Theme Applied -----------------------------------------• */

    color: var(--arc-internal-btn-text-color, unset);
    background: var(--arc-internal-btn-fill-color, transparent);
    border: var(--arc-computed-btn-border-width) solid
      var(--arc-internal-btn-edge-color, unset); /** @computed • border-width */
    border-radius: var(
      --arc-button-border-radius,
      var(--arc-internal-btn-border-radius)
    ); /** @computed • border-radius */

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ------------------------------------------------• */

    [data-element='button-content'] {
      flex: 1;
      width: var(--arc-internal-btn-content-width, auto);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: max(
        var(--arc-space-0-75),
        var(--arc-computed-btn-gap)
      ); /** @computed • gap */ /* 4px */
      max-width: 100%;
      overflow: hidden;
      pointer-events: var(--arc-internal-btn-content-pointer-events, none);
      user-select: none;
      visibility: var(--arc-internal-btn-content-visibility, unset);
      opacity: var(--arc-internal-btn-content-opacity, unset);
    }

    [data-element='button-label'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      line-height: normal;
      transition: 0.2s ease-out;
    }

    [data-element='button-icon'] {
      transition: 0.2s ease-out;
    }

    :is([data-element='button-spinner'], input) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
    }

    input {
      opacity: 0;
      scale: 0.1;
    }

    [data-element='button-spinner'] {
      display: flex;
      pointer-events: none;
      border-radius: 50%;
      width: var(
        --arc-computed-btn-spinner-width
      ); /** @computed • spinner size */
      aspect-ratio: 1 / 1;

      [data-element='spinner-circle'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-circle-stroke);
        opacity: var(--arc-internal-btn-spinner-circle-opacity, 0.4);
      }

      [data-element='spinner-progress'] {
        fill: none;
        stroke: var(--arc-internal-btn-spinner-progress-stroke);
        stroke-dasharray: 0.3334 1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: 743ms arc-spinner-rotate linear infinite;
        transform-origin: 50% 50%;
      }
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`),i.Dn('<svg viewBox="0 0 100 100" data-element="button-spinner"><circle data-element="spinner-circle" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle><circle data-element="spinner-progress" cx="50%" cy="50%" r="45%" stroke-width="12.5%" pathLength="1"></circle></svg>'),i.vs('<span data-element="button-content"><!></span> <!>',1),i.vs('<a arc-button=""><!></a>'),i.vs('<button arc-button=""><!></button>');const Un=xo.AH`
  @layer arc-components {
    [arc-icon] {
      font-size: var(--arc-icon-size, 1em);
      color: var(--arc-icon-color, currentcolor);
      opacity: var(--arc-icon-opacity, 1);

      &:not([hidden]) {
        flex: none;
        display: var(--arc-icon-display, inline-flex);
        align-items: center;
        justify-content: center;
        max-height: 1lh;
        line-height: 1lh;
      }

      &:has(svg) {
        width: 1em;
        height: var(--arc-icon-svg-height, 1lh);
        align-self: var(--arc-icon-svg-align-self, center);
        vertical-align: -0.1lh;

        /* Todo: This is Mondrian CSS in the Arc style sheet to handle duotones. We should try to separate this */
        &:not([data-duotone]) {
          svg {
            fill: var(--arc-icon-color, currentcolor);
          }
        }

        svg {
          width: 100%; /* keeps Safari happy ¯\_(ツ)_/¯ */
        }
      }
    }
  }
`,Yn=e=>"number"==typeof e?`calc(${e/10}rem * var(--arc-internal-font-size))`:e,Xn=Hn("MonArcIcon",Un);var Wn=i.vs("<span></span>"),Kn=i.vs('<span arc-icon=""><!></span>');a(2732),a(5266),i.vs('<div class="travel-boxes-wrapper svelte-xddqyh" aria-hidden="true"><svg class="svelte-xddqyh"><path class="svelte-xddqyh"></path></svg></div>'),i.vs('<div class="tooltip svelte-xddqyh" data-mon-tooltip="" popover="manual"><!> <div class="shadowed svelte-xddqyh"><div class="arrow svelte-xddqyh"><svg aria-hidden="true" data-mon-tooltip-arrow="" class="svelte-xddqyh"><defs><filter><feDropShadow dx="0px" dy="2px" stdDeviation="3px" flood-color="black" flood-opacity="0.4"></feDropShadow></filter></defs><path d="M13 0H1V1L6.2929 6.2929c.3905.3905 1.0237.3905 1.4142 0L13 1V0Z" class="svelte-xddqyh"></path></svg></div></div> <!></div>'),i.vs('<div class="tooltip-locator svelte-xddqyh"></div> <!>',1),i.vs("Share feedback <!>",1),i.vs('<div class="feedback-container svelte-18phxd6"><h2 class="svelte-18phxd6">This feature is in beta</h2> <p class="svelte-18phxd6"><span class="svelte-18phxd6">We’re actively refining it and would love your input. Some functionality\n        may be limited or evolve as we gather feedback.</span></p> <!> <!></div>'),i.vs('<div><div class="collapsible-section-content svelte-n9z2g8"><!></div></div>'),(0,Ni.writable)(!1);const Qn=['input:not([type="checkbox"], [type="radio"])',"art-asset-library","textarea","[contenteditable]"].join(", ");function el(e=Xi()){return null!=e&&!!e.matches(Qn)}var tl=a(9205);const al=a.n(tl)()("mondrian").extend("keyboard"),il={activeModifierKeys:new Set,get alt(){return il.activeModifierKeys.has("Alt")},get meta(){return il.activeModifierKeys.has("Meta")||il.activeModifierKeys.has("Control")},get shift(){return il.activeModifierKeys.has("Shift")},key:void 0,get combo(){return[il.meta&&"Meta",il.alt&&"Alt",il.shift&&"Shift",il.key].filter(Boolean).join("+")}};function rl({metaKey:e,altKey:t,shiftKey:a,ctrlKey:i},r){let o=!1;return e!==r.has("Meta")&&(o=!0,e?r.add("Meta"):r.delete("Meta")),t!==r.has("Alt")&&(o=!0,t?r.add("Alt"):r.delete("Alt")),a!==r.has("Shift")&&(o=!0,a?r.add("Shift"):r.delete("Shift")),i!==r.has("Control")&&(o=!0,i?r.add("Control"):r.delete("Control")),o}let ol=!1;const nl={...(0,Ni.readable)(il,(e=>{function t(t){const a="keydown"===t.type;rl(t,il.activeModifierKeys),il.key=a?t.key:void 0,e(il)}function a(t){rl(t,il.activeModifierKeys)&&e(il)}ol||(ol=!0,window.addEventListener("keydown",t),window.addEventListener("keyup",t),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&(il.activeModifierKeys.clear(),il.key=void 0,e(il))})),window.addEventListener("blur",(function(){il.activeModifierKeys.clear(),il.key=void 0,e(il)})),window.addEventListener("mousedown",a,{passive:!0,capture:!0}),window.addEventListener("mousemove",a,{passive:!0,capture:!0}))})),is:e=>(il.combo&&al(`comparing keycombos, store: ${il.combo}, comparison: ${e}`),il.combo.toLowerCase()===e.toLowerCase()),on(e,t){const a=a=>{!el()&&nl.is(e)&&(al("keyCombo matched, executing handler",e),t(a))};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}},ll=((0,Ni.derived)(nl,(e=>e.meta)),(0,Ni.derived)(nl,(e=>e.alt)),(0,Ni.derived)(nl,(e=>e.shift)),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1});(0,Ni.readable)(ll,(e=>{return window.addEventListener("mousedown",t),window.addEventListener("mousemove",i),window.addEventListener("mouseup",a),function(){window.removeEventListener("mousedown",t),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",a)};function t(e){ll.down=!0,ll.downX=ll.x=e.clientX,ll.downY=ll.y=e.clientY,ll.target=e.target,r()}function a(){ll.down=!1,ll.downX=ll.x=ll.downY=ll.y=-1,ll.target=void 0,r()}function i(e){ll.x=e.x,ll.y=e.y,r()}function r(){e(ll)}}));var sl=a(4993),cl=a.n(sl);const{setTimeout:dl,clearTimeout:pl}=window,hl=(e,{isHovered:t,delay:a})=>{let i=0;const r=Yi("mouseenter",e,(()=>{pl(i),t.set(!0)})),o=Yi("mouseleave",e,(()=>{i=dl((()=>{t.set(!1)}),a)}));return{destroy(){r(),o()}}};i.vs('<mon-menu-item><label class="multi-select-option-label svelte-1aujqfc"><input class="multi-select-option-checkbox svelte-1aujqfc" type="checkbox"> <!> <span class="multi-select-option-label-text svelte-1aujqfc"> </span></label></mon-menu-item>',2),i.vs('<div class="no-results svelte-1aujqfc"> </div>'),i.vs('<mon-popover><mon-menu><section class="filters svelte-1aujqfc"><div class="search-filter svelte-1aujqfc"><!> <input class="search-filter-input svelte-1aujqfc" type="text" placeholder="Search"></div> <label class="select-all svelte-1aujqfc"><input type="checkbox" class="svelte-1aujqfc"> <span> </span></label></section> <section class="menu-items svelte-1aujqfc"></section> <!></mon-menu></mon-popover>',2),i.vs('<div class="multi-select svelte-1aujqfc"><div class="multi-select-menu-trigger svelte-1aujqfc" tabindex="-1"><div class="trigger-content svelte-1aujqfc"><!></div> <button class="chevron svelte-1aujqfc"><!></button></div> <!></div>'),i.vs('<span class="hint-text svelte-1463wmx"><!></span>'),i.vs('<div><input class="mon-focusable svelte-1da47cf" type="text" data-1pignore="" data-lpignore="" autocomplete="off"> <div class="static svelte-1da47cf" tabindex="0"> </div></div>'),i.vs('<label class="label svelte-18j4x0z"><span class="label-text svelte-18j4x0z"> </span> <input class="input svelte-18j4x0z" type="number" placeholder="--"></label>'),i.vs('<div class="mon-spinner svelte-1fzag14"><svg class="mon-spinner__icon svelte-1fzag14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" clip-rule="evenodd"></path><path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"></path></svg> <!></div>'),i.vs('<p class="mon-loading__text svelte-1omw61o">Loading custom layout</p>'),i.vs('<div class="mon-loading svelte-1omw61o"><!></div>');i.Dn('<svg class="defs svelte-1l67ssw" aria-hidden="true"><defs><linearGradient x1="2.5" y1="25" x2="22.5" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#FF0000"></stop><stop offset="0.135" stop-color="#FF8000"></stop><stop offset="0.315" stop-color="#FFFF00"></stop><stop offset="0.465" stop-color="#1AFE0A"></stop><stop offset="0.625" stop-color="#1EDFF4"></stop><stop offset="0.82" stop-color="#3912FA"></stop><stop offset="0.905" stop-color="#FF01E6"></stop></linearGradient><clipPath><circle cx="12" cy="12" r="12"></circle></clipPath><mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><circle cx="12" cy="12" r="12" fill="currentColor"></circle></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><mask fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></mask><clipPath><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05448 14.9455 6.66667 12 6.66667C9.05448 6.66667 6.66667 9.05448 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333Z"></path></clipPath></defs></svg>');const ul="#glyphs-",ml={"arc-fullscreen-disable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"arc-fullscreen-enable":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"/></svg>',"arc-pause":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3.448 3.43 13.081 13.099"><path d="M6.5 4H7.5C8.3125 4 9 4.6875 9 5.5V14.5C9 15.3438 8.3125 16 7.5 16H6.5C5.65625 16 5 15.3438 5 14.5V5.5C5 4.6875 5.65625 4 6.5 4ZM12.5 4H13.5C14.3125 4 15 4.6875 15 5.5V14.5C15 15.3438 14.3125 16 13.5 16H12.5C11.6562 16 11 15.3438 11 14.5V5.5C11 4.6875 11.6562 4 12.5 4Z" /></svg>',"arc-pip-disable":'<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="18px" viewBox="0 0 22 18"><path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z" fill-rule="nonzero"/><path fill="none" d="M-1-3h24v24H-1z"/></svg>',"arc-pip-enable":'<svg viewBox="0 0 24 24"><path d="M19 11h-8v6h8zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 .02H3V4.97h18z"></path></svg>',"arc-play":'<svg width="12" height="13" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg"><path d="M2.74609 0.816406L10.6211 5.62891C11.0039 5.875 11.25 6.3125 11.25 6.75C11.25 7.21484 11.0039 7.65234 10.6211 7.87109L2.74609 12.6836C2.33594 12.9297 1.81641 12.957 1.40625 12.7109C0.996094 12.4922 0.75 12.0547 0.75 11.5625V1.9375C0.75 1.47266 0.996094 1.03516 1.40625 0.816406C1.81641 0.570312 2.33594 0.570312 2.74609 0.816406Z" /></svg>',"arc-transparency":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1H3.8V3.8H1V1Z" fill="black"/><path d="M3.7998 3.7998H6.5998V6.5998H3.7998V3.7998Z" fill="black" fill-opacity="0.8"/><path d="M6.6001 1H9.4001V3.8H6.6001V1Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 1H15.0002V3.8H12.2002V1Z" fill="black" fill-opacity="0.2"/><path d="M1 6.59961H3.8V9.39961H1V6.59961Z" fill="black"/><path d="M6.6001 6.59961H9.4001V9.39961H6.6001V6.59961Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 6.59961H15.0002V9.39961H12.2002V6.59961Z" fill="black" fill-opacity="0.2"/><path d="M1 12.2002H3.8V15.0002H1V12.2002Z" fill="black"/><path d="M6.6001 12.2002H9.4001V15.0002H6.6001V12.2002Z" fill="black" fill-opacity="0.6"/><path d="M12.2002 12.2002H15.0002V15.0002H12.2002V12.2002Z" fill="black" fill-opacity="0.2"/><path d="M9.3999 3.7998H12.1999V6.5998H9.3999V3.7998Z" fill="black" fill-opacity="0.4"/><path d="M3.7998 9.40039H6.5998V12.2004H3.7998V9.40039Z" fill="black" fill-opacity="0.8"/><path d="M9.3999 9.40039H12.1999V12.2004H9.3999V9.40039Z" fill="black" fill-opacity="0.4"/></svg>',"arc-volume-high":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>',"arc-volume-mid":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.1 34.8C344.6 40 352 51.4 352 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352 96 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>',"arc-volume-muted":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.1 386.2C556.7 352 576 306.3 576 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C507.3 170.7 528 210.9 528 256c0 39.1-15.6 74.5-40.9 100.5L449 326.6c19-17.5 31-42.7 31-70.6c0-30.1-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C425.1 227.6 432 241 432 256s-6.9 28.4-17.7 37.3c-1.3 1-2.4 2.2-3.4 3.4L352 250.6 352 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L197.8 129.8 38.8 5.1zM352 373.3L82.9 161.3C53.8 167.4 32 193.1 32 224l0 64c0 35.3 28.7 64 64 64l67.8 0L298.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S352 460.6 352 448l0-74.7z"/></svg>',"border-solid":'<svg width="100%" height="100%" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="2" rx="1" fill="currentColor"/></svg>',"border-dashed":'<svg width="100%" height="100%" viewBox="0 0 19 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="2" fill="currentColor"/><rect x="7" width="5" height="2" fill="currentColor"/><rect x="14" width="5" height="2" fill="currentColor"/></svg>',"border-dotted":'<svg width="100%" height="100%" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="2" fill="currentColor"/><rect x="4" width="2" height="2" fill="currentColor"/><rect x="8" width="2" height="2" fill="currentColor"/><rect x="12" width="2" height="2" fill="currentColor"/></svg>',"corner-radius-top-left":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25ZM4.25 1C4.66563 1 5 1.33437 5 1.75C5 2.16562 4.66563 2.5 4.25 2.5H1.5V5.25C1.5 5.66563 1.16562 6 0.75 6C0.334375 6 0 5.66563 0 5.25V1.75C0 1.33437 0.334375 1 0.75 1H4.25Z" fill="black"/>\n      <path d="M0.75 10C0.334375 10 0 10.3344 0 10.75V14.25C0 14.6656 0.334375 15 0.75 15H4.25C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5H1.5V10.75C1.5 10.3344 1.16562 10 0.75 10Z" fill="#C6C6C6"/>\n      <path d="M14 1.75C14 1.33437 13.6656 1 13.25 1H9.75C9.33437 1 9 1.33437 9 1.75C9 2.16562 9.33437 2.5 9.75 2.5H12.5V5.25C12.5 5.66563 12.8344 6 13.25 6C13.6656 6 14 5.66563 14 5.25V1.75Z" fill="#C6C6C6"/>\n      <path d="M13.25 10C12.8344 10 12.5 10.3344 12.5 10.75V13.5H9.75C9.33437 13.5 9 13.8344 9 14.25C9 14.6656 9.33437 15 9.75 15H13.25C13.6656 15 14 14.6656 14 14.25V10.75C14 10.3344 13.6656 10 13.25 10Z" fill="#C6C6C6"/>\n      </svg>',"corner-radius-top-right":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84280)">\n        <path d="M15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25ZM15 4.25C15 4.66563 14.6656 5 14.25 5C13.8344 5 13.5 4.66563 13.5 4.25L13.5 1.5L10.75 1.5C10.3344 1.5 10 1.16562 10 0.75C10 0.334375 10.3344 -2.03941e-07 10.75 -1.85773e-07L14.25 -3.27835e-08C14.6656 -1.4616e-08 15 0.334375 15 0.75L15 4.25Z" fill="black"/>\n        <path d="M6 0.75C6 0.334375 5.66563 -1.4616e-08 5.25 -3.27835e-08L1.75 -1.85773e-07C1.33437 -2.03941e-07 1 0.334375 1 0.75L1 4.25C1 4.66562 1.33437 5 1.75 5C2.16562 5 2.5 4.66562 2.5 4.25L2.5 1.5L5.25 1.5C5.66562 1.5 6 1.16562 6 0.75Z" fill="#C6C6C6"/>\n        <path d="M14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14Z" fill="#C6C6C6"/>\n        <path d="M6 13.25C6 12.8344 5.66562 12.5 5.25 12.5L2.5 12.5L2.5 9.75C2.5 9.33437 2.16563 9 1.75 9C1.33437 9 1 9.33437 1 9.75L1 13.25C1 13.6656 1.33437 14 1.75 14L5.25 14C5.66562 14 6 13.6656 6 13.25Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84280">\n        <rect width="14" height="16" fill="white" transform="translate(16) rotate(90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-left":'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">\n        <g clip-path="url(#clip0_8873_84287)">\n        <path d="M1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75ZM1 9.75C1 9.33437 1.33438 9 1.75 9C2.16563 9 2.5 9.33437 2.5 9.75L2.5 12.5L5.25 12.5C5.66563 12.5 6 12.8344 6 13.25C6 13.6656 5.66563 14 5.25 14L1.75 14C1.33437 14 1 13.6656 1 13.25L1 9.75Z" fill="black"/>\n        <path d="M10 13.25C10 13.6656 10.3344 14 10.75 14L14.25 14C14.6656 14 15 13.6656 15 13.25L15 9.75C15 9.33437 14.6656 9 14.25 9C13.8344 9 13.5 9.33437 13.5 9.75L13.5 12.5L10.75 12.5C10.3344 12.5 10 12.8344 10 13.25Z" fill="#C6C6C6"/>\n        <path d="M1.75 8.94366e-09C1.33438 3.98738e-09 1 0.334375 1 0.75L1 4.25C1 4.66563 1.33437 5 1.75 5C2.16562 5 2.5 4.66563 2.5 4.25L2.5 1.5L5.25 1.5C5.66563 1.5 6 1.16563 6 0.75C6 0.334375 5.66563 5.5637e-08 5.25 5.06807e-08L1.75 8.94366e-09Z" fill="#C6C6C6"/>\n        <path d="M10 0.75C10 1.16563 10.3344 1.5 10.75 1.5L13.5 1.5L13.5 4.25C13.5 4.66563 13.8344 5 14.25 5C14.6656 5 15 4.66563 15 4.25L15 0.75C15 0.334375 14.6656 5.5637e-08 14.25 5.06807e-08L10.75 8.94366e-09C10.3344 3.98738e-09 10 0.334375 10 0.75Z" fill="#C6C6C6"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_8873_84287">\n        <rect width="14" height="16" fill="white" transform="translate(0 14) rotate(-90)"/>\n        </clipPath>\n        </defs>\n        </svg>',"corner-radius-bottom-right":'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">\n      <path d="M9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15ZM9.75 15C9.33437 15 9 14.6656 9 14.25C9 13.8344 9.33438 13.5 9.75 13.5L12.5 13.5L12.5 10.75C12.5 10.3344 12.8344 10 13.25 10C13.6656 10 14 10.3344 14 10.75L14 14.25C14 14.6656 13.6656 15 13.25 15L9.75 15Z" fill="black"/>\n      <path d="M13.25 6C13.6656 6 14 5.66563 14 5.25L14 1.75C14 1.33437 13.6656 1 13.25 1L9.75 1C9.33438 1 9 1.33437 9 1.75C9 2.16562 9.33438 2.5 9.75 2.5L12.5 2.5L12.5 5.25C12.5 5.66562 12.8344 6 13.25 6Z" fill="#C6C6C6"/>\n      <path d="M6.55671e-08 14.25C2.9232e-08 14.6656 0.334375 15 0.75 15L4.25 15C4.66563 15 5 14.6656 5 14.25C5 13.8344 4.66563 13.5 4.25 13.5L1.5 13.5L1.5 10.75C1.5 10.3344 1.16563 10 0.75 10C0.334375 10 4.07882e-07 10.3344 3.71547e-07 10.75L6.55671e-08 14.25Z" fill="#C6C6C6"/>\n      <path d="M0.75 6C1.16563 6 1.5 5.66562 1.5 5.25L1.5 2.5L4.25 2.5C4.66563 2.5 5 2.16563 5 1.75C5 1.33437 4.66563 1 4.25 1L0.75 1C0.334375 1 4.07882e-07 1.33437 3.71547e-07 1.75L6.55671e-08 5.25C2.9232e-08 5.66562 0.334375 6 0.75 6Z" fill="#C6C6C6"/>\n      </svg>',"aspect-ratio-9:16":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.4998 26.5V16V5.5C21.4998 5.00781 20.8331 4.625 20.4998 4.625H11.4998C10.9998 4.625 10.4998 5 10.4998 5.5L10.6667 16V26.5C10.6667 26.9375 11.1248 27.375 11.4998 27.375H20.4998C20.8331 27.375 21.4998 26.9375 21.4998 26.5ZM24 5.5V26.5C24 28.4141 22.7917 30 21.3333 30H10.6667C9.16667 30 8 28.4141 8 26.5V5.5C8 3.53125 9.16667 2 10.6667 2H21.3333C22.7917 2 24 3.53125 24 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-16:9":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 21.4998L16 21.4998L26.5 21.4998C26.9922 21.4998 27.375 20.8331 27.375 20.4998L27.375 11.4998C27.375 10.9998 27 10.4998 26.5 10.4998L16 10.6667L5.5 10.6667C5.0625 10.6667 4.625 11.1248 4.625 11.4998L4.625 20.4998C4.625 20.8331 5.0625 21.4998 5.5 21.4998ZM26.5 24L5.5 24C3.5859 24 2 22.7917 2 21.3333L2 10.6667C2 9.16667 3.5859 8 5.5 8L26.5 8C28.4688 8 30 9.16667 30 10.6667L30 21.3333C30 22.7917 28.4687 24 26.5 24Z" fill="currentColor"/></svg>',"aspect-ratio-2:3":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M23.5 26.5V16V5.5C23.5 5.00781 22.8958 4.625 22.5 4.625H10.5C9.90625 4.625 9.5 5 9.5 5.5V16V26.5C9.5 26.9375 10.0547 27.375 10.5 27.375H22.5C22.8958 27.375 23.5 26.9375 23.5 26.5ZM26 5.5V26.5C26 28.4141 24.5651 30 22.8333 30H10.1667C8.38542 30 7 28.4141 7 26.5V5.5C7 3.53125 8.38542 2 10.1667 2H22.8333C24.5651 2 26 3.53125 26 5.5Z" fill="currentColor"/></svg>',"aspect-ratio-3:2":'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.5 22.5L16 22.5L26.5 22.5C26.9922 22.5 27.375 21.8958 27.375 21.5L27.375 9.5C27.375 8.90625 27 8.5 26.5 8.5L16 8.5L5.5 8.5C5.0625 8.5 4.625 9.05469 4.625 9.5L4.625 21.5C4.625 21.8958 5.0625 22.5 5.5 22.5ZM26.5 25L5.5 25C3.5859 25 2 23.5651 2 21.8333L2 9.16667C2 7.38542 3.5859 6 5.5 6L26.5 6C28.4688 6 30 7.38542 30 9.16667L30 21.8333C30 23.5651 28.4687 25 26.5 25Z" fill="currentColor"/></svg>',"border-color":'\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n        <g clip-path="url(#mon-border-color-icon-boundary-clip-path)" data-figma-skip-parse="true">\n          <foreignObject x="0" y="0" width="24" height="24">\n            <div xmlns="http://www.w3.org/1999/xhtml"\n              style="background:var(--fa-secondary-color);height:100%;width:100%;opacity:1"></div>\n          </foreignObject>\n        </g>\n        <path\n          d="M23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM1 12C1 5.92487 5.92487 1 12 1V-1C4.8203 -1 -1 4.8203 -1 12H1ZM12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM16.3333 12C16.3333 14.3932 14.3932 16.3333 12 16.3333V18.3333C15.4978 18.3333 18.3333 15.4978 18.3333 12H16.3333ZM12 7.66667C14.3932 7.66667 16.3333 9.60677 16.3333 12H18.3333C18.3333 8.5022 15.4978 5.66667 12 5.66667V7.66667ZM7.66667 12C7.66667 9.60677 9.60677 7.66667 12 7.66667V5.66667C8.5022 5.66667 5.66667 8.5022 5.66667 12H7.66667ZM12 16.3333C9.60677 16.3333 7.66667 14.3932 7.66667 12H5.66667C5.66667 15.4978 8.5022 18.3333 12 18.3333V16.3333Z"\n          fill="black"\n          fill-opacity="0.1"\n          mask="url(#mon-border-color-icon-outline-mask)"\n        />\n      </svg>',"custom-shapes-rectangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="3.25" width="18.5" height="13.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-square":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="18.5" height="18.5" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-circle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-plus":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41667 6.66667V0.75H12.5833V6.66667V7.41667H13.3333H19.25V12.5833H13.3333H12.5833V13.3333V19.25H7.41667V13.3333V12.5833H6.66667H0.75V7.41667H6.66667H7.41667V6.66667Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-chevron":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0763 18.25L1.20849 18.25L5.1303 10.3329L5.29521 10L5.1303 9.66709L1.2085 1.75L15.0763 1.75L19.163 10L15.0763 18.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-octagon":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.757121 6.42456L5.99251 0.936083L13.5754 0.757121L19.0639 5.99251L19.2429 13.5754L14.0075 19.0639L6.42456 19.2429L0.936083 14.0075L0.757121 6.42456Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-triangle":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.31131 17.75L10 2.97923L18.6887 17.75H1.31131Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-parallelogram":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.998432 18.25L5.78397 1.75H19.0016L14.216 18.25H0.998432Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-shield":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.25C5.86967 19.25 2.75 16.455 2.75 13.266L2.75 0.750001L17.25 0.75L17.25 13.266C17.25 16.455 14.1303 19.25 10 19.25Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-bookmark":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70948 15.527L1.75 18.8714V0.75H18.25V18.8714L10.2905 15.527L10 15.405L9.70948 15.527Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-speech":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0481 15.445L4.5 18.8403V16.129V15.379H3.75H0.75V0.75H19.25V15.379H12.3558H12.1949L12.0481 15.445Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-burst":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.43692L11.2238 3.4368L11.5957 4.04466L12.2218 3.70422L14.2815 2.58415L14.3414 4.92798L14.3596 5.64039L15.072 5.65859L17.4159 5.71846L16.2958 7.77821L15.9553 8.40427L16.5632 8.77623L18.5631 10L16.5632 11.2238L15.9553 11.5957L16.2958 12.2218L17.4159 14.2815L15.072 14.3414L14.3596 14.3596L14.3414 15.072L14.2815 17.4159L12.2218 16.2958L11.5957 15.9553L11.2238 16.5632L10 18.5631L8.77623 16.5632L8.40427 15.9553L7.77821 16.2958L5.71846 17.4159L5.65859 15.072L5.64039 14.3596L4.92798 14.3414L2.58415 14.2815L3.70422 12.2218L4.04466 11.5957L3.4368 11.2238L1.43692 10L3.4368 8.77623L4.04466 8.40427L3.70422 7.77821L2.58415 5.71846L4.92798 5.65859L5.64039 5.64039L5.65859 4.92798L5.71846 2.58415L7.77821 3.70422L8.40427 4.04466L8.77623 3.4368L10 1.43692Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-star":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.74152L12.2033 6.35881L12.3786 6.72619L12.7821 6.77938L17.8543 7.44799L14.1438 10.9702L13.8486 11.2505L13.9227 11.6507L14.8542 16.6812L10.3578 14.2408L10 14.0467L9.64224 14.2408L5.14579 16.6813L6.07729 11.6507L6.1514 11.2505L5.85618 10.9702L2.14572 7.44799L7.21787 6.77938L7.62144 6.72619L7.79674 6.35881L10 1.74152Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-cloud":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8435 7.77179L15.7201 8.5053L16.4526 8.63477C17.9724 8.90342 19.25 10.4356 19.25 12.4205C19.25 14.6255 17.6897 16.25 15.9538 16.25H4.04624C2.31032 16.25 0.75 14.6255 0.75 12.4205C0.75 10.2156 2.31032 8.59108 4.04624 8.59108H4.0467H4.78646L4.79663 7.85139C4.82308 5.92674 6.18956 4.53505 7.68789 4.53505C8.36794 4.53505 9.00377 4.80993 9.51137 5.29221L10.1781 5.92566L10.6645 5.14517C11.2076 4.2736 12.0714 3.75 13.0057 3.75C14.5182 3.75 15.8974 5.16954 15.8974 7.1215C15.8974 7.34459 15.8788 7.56192 15.8435 7.77179Z" stroke=currentColor stroke-width="1.5"/></svg>',"custom-shapes-arrow":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.681 18.0566V14.0592V13.3092H10.931H0.75V6.69081H10.931H11.681V5.94081V1.94342L18.9875 10L11.681 18.0566Z" stroke=currentColor stroke-width="1.5"/></svg>',"folder-open":'<svg width="49" height="49"viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 11.625C1.125 8.75391 3.42188 6.375 6.375 6.375H15.9727C17.3672 6.375 18.6797 6.94922 19.6641 7.93359L21.8789 10.1484C22.8633 11.1328 24.1758 11.625 25.5703 11.625H35.25C38.1211 11.625 40.5 14.0039 40.5 16.875V22.125H12.9375C11.9531 22.125 11.1328 22.6172 10.6406 23.4375L1.45312 39.1875C1.20703 39.5977 1.125 40.0898 1.125 40.5V11.625ZM1.28906 41.5664C1.37109 41.6484 1.37109 41.7305 1.45312 41.8125C1.37109 41.8125 1.37109 41.7305 1.37109 41.6484L1.28906 41.5664ZM38.9414 41.6484L40.2539 39.3516C40.0078 40.1719 39.5977 40.9922 38.9414 41.6484Z" fill="#136EAB"/><path d="M12.9375 22.125H45.75C46.6523 22.125 47.5547 22.6172 47.9648 23.4375C48.457 24.2578 48.457 25.3242 47.9648 26.1445L38.7773 41.8945C38.2852 42.6328 37.4648 43.125 36.5625 43.125H3.75C2.76562 43.125 1.94531 42.6328 1.45312 41.8125C0.960938 40.9922 0.960938 40.0078 1.45312 39.1875L10.6406 23.4375C11.1328 22.6172 11.9531 22.125 12.9375 22.125Z" fill="#4BB4EE"/></svg>',"padding-top-bottom":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M15.9111 13.47C15.9111 12.8936 16.3777 12.4264 16.9532 12.4264C17.5287 12.4264 17.9953 12.8936 17.9953 13.47C17.9953 14.0464 17.5287 14.5137 16.9532 14.5137C16.3777 14.5137 15.9111 14.0464 15.9111 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 9.9915C15.9111 9.41511 16.3777 8.94785 16.9532 8.94785C17.5287 8.94785 17.9953 9.41511 17.9953 9.9915C17.9953 10.5679 17.5287 11.0352 16.9532 11.0352C16.3777 11.0352 15.9111 10.5679 15.9111 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M15.9111 6.51494C15.9111 5.93854 16.3777 5.47128 16.9532 5.47128C17.5287 5.47128 17.9953 5.93854 17.9953 6.51494C17.9953 7.09133 17.5287 7.55859 16.9532 7.55859C16.3777 7.55859 15.9111 7.09133 15.9111 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 13.47C2.01093 12.8936 2.47749 12.4264 3.05303 12.4264C3.62857 12.4264 4.09514 12.8936 4.09514 13.47C4.09514 14.0464 3.62857 14.5137 3.05303 14.5137C2.47749 14.5137 2.01093 14.0464 2.01093 13.47Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 9.9915C2.01093 9.41511 2.47749 8.94785 3.05303 8.94785C3.62857 8.94785 4.09514 9.41511 4.09514 9.9915C4.09514 10.5679 3.62857 11.0352 3.05303 11.0352C2.47749 11.0352 2.01093 10.5679 2.01093 9.9915Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.01093 6.51494C2.01093 5.93854 2.47749 5.47128 3.05303 5.47128C3.62857 5.47128 4.09514 5.93854 4.09514 6.51494C4.09514 7.09133 3.62857 7.55859 3.05303 7.55859C2.47749 7.55859 2.01093 7.09133 2.01093 6.51494Z" fill="black" fill-opacity="0.3"/>\n      <path d="M2.00006 3.04366C2.00006 2.46726 2.46663 2 3.04217 2L16.958 2C17.5335 2 18.0001 2.46726 18.0001 3.04366C18.0001 3.62005 17.5335 4.08731 16.958 4.08731L3.04217 4.08731C2.46663 4.08731 2.00006 3.62005 2.00006 3.04366Z" fill="black"/>\n      <path d="M2.00006 16.9558C2.00006 16.3794 2.46663 15.9121 3.04217 15.9121L16.958 15.9121C17.5335 15.9121 18.0001 16.3794 18.0001 16.9558C18.0001 17.5322 17.5335 17.9994 16.958 17.9994L3.04217 17.9994C2.46663 17.9994 2.00006 17.5322 2.00006 16.9558Z" fill="black"/>\n      </svg>',"padding-left-right":'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6.53 15.9119C7.10639 15.9119 7.57365 16.3784 7.57365 16.954C7.57365 17.5295 7.10639 17.9961 6.53 17.9961C5.9536 17.9961 5.48634 17.5295 5.48634 16.954C5.48634 16.3784 5.9536 15.9119 6.53 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 15.9119C10.5849 15.9119 11.0522 16.3784 11.0522 16.954C11.0522 17.5295 10.5849 17.9961 10.0085 17.9961C9.43212 17.9961 8.96486 17.5295 8.96486 16.954C8.96486 16.3784 9.43212 15.9119 10.0085 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 15.9119C14.0615 15.9119 14.5287 16.3784 14.5287 16.954C14.5287 17.5295 14.0615 17.9961 13.4851 17.9961C12.9087 17.9961 12.4414 17.5295 12.4414 16.954C12.4414 16.3784 12.9087 15.9119 13.4851 15.9119Z" fill="black" fill-opacity="0.3"/>\n      <path d="M6.53 2.01149C7.10639 2.01149 7.57365 2.47806 7.57365 3.0536C7.57365 3.62914 7.10639 4.0957 6.53 4.0957C5.9536 4.0957 5.48634 3.62914 5.48634 3.0536C5.48634 2.47806 5.9536 2.01149 6.53 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M10.0085 2.01149C10.5849 2.01149 11.0522 2.47806 11.0522 3.0536C11.0522 3.62914 10.5849 4.0957 10.0085 4.0957C9.43212 4.0957 8.96486 3.62914 8.96486 3.0536C8.96486 2.47806 9.43212 2.01149 10.0085 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M13.4851 2.01149C14.0615 2.01149 14.5287 2.47806 14.5287 3.0536C14.5287 3.62914 14.0615 4.0957 13.4851 4.0957C12.9087 4.0957 12.4414 3.62914 12.4414 3.0536C12.4414 2.47806 12.9087 2.01149 13.4851 2.01149Z" fill="black" fill-opacity="0.3"/>\n      <path d="M16.9564 2C17.5328 2 18 2.46657 18 3.04211L18 16.9579C18 17.5334 17.5328 18 16.9564 18C16.38 18 15.9127 17.5334 15.9127 16.9579L15.9127 3.04211C15.9127 2.46657 16.38 2 16.9564 2Z" fill="black"/>\n      <path d="M3.04425 2C3.62065 2 4.08791 2.46657 4.08791 3.04211L4.08791 16.9579C4.08791 17.5334 3.62065 18 3.04425 18C2.46786 18 2.00059 17.5334 2.00059 16.9579L2.00059 3.04211C2.00059 2.46657 2.46786 2 3.04425 2Z" fill="black"/>\n      </svg>',"regular-microphone-sparkle":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M0.5625 6.65625C0.5625 6.30078 0.835938 6 1.21875 6C1.57422 6 1.875 6.30078 1.875 6.65625V7.75C1.875 9.69141 3.43359 11.25 5.375 11.25C6.00391 11.25 6.60547 11.0859 7.125 10.7852C7.125 10.8125 7.125 10.8125 7.125 10.8125V10.8398C7.125 11.3047 7.34375 11.7148 7.72656 11.9609C7.20703 12.2617 6.63281 12.4531 6.03125 12.5352V13.4375H7.34375C7.69922 13.4375 8 13.7383 8 14.0938C8 14.4766 7.69922 14.75 7.34375 14.75H5.375H3.40625C3.02344 14.75 2.75 14.4766 2.75 14.0938C2.75 13.7383 3.02344 13.4375 3.40625 13.4375H4.71875V12.5352C2.36719 12.207 0.5625 10.2109 0.5625 7.75V6.65625ZM2.75 3.375C2.75 1.92578 3.92578 0.75 5.375 0.75C6.82422 0.75 8 1.92578 8 3.375V7.75C8 9.19922 6.82422 10.375 5.375 10.375C3.92578 10.375 2.75 9.19922 2.75 7.75V3.375ZM4.0625 3.375V7.75C4.0625 8.48828 4.63672 9.0625 5.375 9.0625C6.08594 9.0625 6.6875 8.48828 6.6875 7.75V3.375C6.6875 2.66406 6.08594 2.0625 5.375 2.0625C4.63672 2.0625 4.0625 2.66406 4.0625 3.375ZM8 10.8125C8 10.6211 8.10938 10.457 8.30078 10.375L10.625 9.5L11.4727 7.20312C11.5547 7.01172 11.7188 6.875 11.9375 6.875C12.1289 6.875 12.293 7.01172 12.375 7.20312L13.25 9.5L15.5469 10.375C15.7383 10.457 15.875 10.6211 15.875 10.8125C15.875 11.0312 15.7383 11.1953 15.5469 11.2773L13.25 12.125L12.375 14.4492C12.293 14.6406 12.1289 14.75 11.9375 14.75C11.7188 14.75 11.5547 14.6406 11.4727 14.4492L10.625 12.125L8.30078 11.2773C8.10938 11.1953 8 11.0312 8 10.8125ZM8.46484 9.39062C8.71094 8.89844 8.875 8.35156 8.875 7.75V6.65625C8.875 6.30078 9.14844 6 9.53125 6C9.88672 6 10.1875 6.30078 10.1875 6.65625V7.75C10.1875 7.91406 10.1602 8.07812 10.1602 8.24219L9.94141 8.84375L8.46484 9.39062Z" fill="black"/>\n      </svg>',"menu-border-width":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M15.5 13.4C15.5 13.5591 15.4539 13.7117 15.3719 13.8243C15.2898 13.9368 15.1785 14 15.0625 14L1.9375 14C1.82147 14 1.71019 13.9368 1.62814 13.8243C1.54609 13.7117 1.5 13.5591 1.5 13.4L1.5 11C1.5 10.8409 1.54609 10.6883 1.62814 10.5757C1.71019 10.4632 1.82147 10.4 1.9375 10.4L15.0625 10.4C15.1785 10.4 15.2898 10.4632 15.3719 10.5757C15.4539 10.6883 15.5 10.8409 15.5 11L15.5 13.4ZM15.5 7.4C15.5 7.55913 15.4539 7.71174 15.3719 7.82426C15.2898 7.93679 15.1785 8 15.0625 8L1.9375 8C1.82147 8 1.71019 7.93678 1.62814 7.82426C1.54609 7.71174 1.5 7.55913 1.5 7.4L1.5 6.2C1.5 6.04087 1.54609 5.88826 1.62814 5.77573C1.71019 5.66321 1.82147 5.6 1.9375 5.6L15.0625 5.6C15.1785 5.6 15.2898 5.66321 15.3719 5.77573C15.4539 5.88826 15.5 6.04087 15.5 6.2L15.5 7.4ZM15.5 2.6C15.5 2.75913 15.4539 2.91174 15.3719 3.02426C15.2898 3.13679 15.1785 3.2 15.0625 3.2L1.9375 3.2C1.82147 3.2 1.71019 3.13678 1.62814 3.02426C1.54609 2.91174 1.5 2.75913 1.5 2.6C1.5 2.44087 1.54609 2.28826 1.62814 2.17573C1.71019 2.06321 1.82147 2 1.9375 2L15.0625 2C15.1785 2 15.2898 2.06321 15.3719 2.17574C15.4539 2.28826 15.5 2.44087 15.5 2.6Z" fill="currentColor"/>\n    </svg>',"menu-corner-radius":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80187 1H4.76667H2.27778C1.84823 1 1.5 1.34823 1.5 1.77778C1.5 2.20733 1.84823 2.55556 2.27778 2.55556H4.76667C6.52189 2.55556 7.79152 2.55616 8.79008 2.63775C9.77954 2.71859 10.4341 2.87505 10.9717 3.14897C11.9962 3.67094 12.8291 4.50384 13.351 5.52827C13.6249 6.06585 13.7814 6.72046 13.8623 7.70992C13.9438 8.70848 13.9444 9.97811 13.9444 11.7333V14.2222C13.9444 14.6517 14.2927 15 14.7222 15C15.1517 15 15.5 14.6517 15.5 14.2222V11.7333V11.6981C15.5 9.98553 15.5 8.65252 15.4126 7.58325C15.3239 6.49758 15.1413 5.61549 14.737 4.82206C14.0659 3.50493 12.9951 2.43407 11.6779 1.76295C10.8845 1.35868 10.0024 1.17606 8.91675 1.08736C7.84748 1 6.51447 1 4.80187 1Z" fill="currentColor"/>\n    </svg>',"menu-box-shadow":'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M13.75 2.75V1H1.5V13.25H3.25V15H15.5V2.75H13.75ZM12.875 12.375H2.375V1.875H12.875V12.375Z" fill="currentColor"/>\n    </svg>',"menu-overlay":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n      <path d="M12.7445 3.78598C12.5683 3.81798 10.005 3.81798 9.92492 3.76999V1.00247H7.12136V3.78598C6.96116 3.81798 4.38188 3.81798 4.30178 3.76999V1.01847C4.18964 0.986478 1.5623 1.00247 1.51424 1.01847C1.4822 1.16245 1.51424 3.73799 1.51424 3.81798H4.30178V6.60148H1.51424C1.4822 6.77745 1.51424 9.337 1.51424 9.41699H4.30178V12.2165H1.51424C1.4822 12.3285 1.51424 14.6801 1.51424 15H4.3178V12.2325C4.38188 12.2325 6.96116 12.2165 7.10534 12.2325C7.12136 12.2965 7.12136 14.76 7.10534 15H9.94094V12.2325H12.7285C12.7445 12.2965 12.7445 14.6961 12.7445 15H15.5V12.2165H12.7445V9.41699H15.5V6.58549H12.7445V3.81798H15.5V1.00247H12.7445V3.78598ZM7.10534 9.40099C7.04126 9.40099 4.55811 9.41699 4.33382 9.40099C4.30178 9.337 4.30178 6.76146 4.33382 6.61748H7.10534V9.40099ZM9.92492 12.2005C9.84482 12.2325 7.28156 12.2325 7.12136 12.2165V9.41699H9.92492V12.2005ZM7.12136 6.58549V3.81798H9.92492C9.92492 3.89796 9.94094 6.47351 9.92492 6.58549H7.12136ZM12.7445 9.40099H9.94094C9.92492 9.337 9.92492 6.76146 9.94094 6.61748H12.7445V9.40099Z" fill="url(#paint0_linear_14204_11278)"/>\n      <defs>\n        <linearGradient id="paint0_linear_14204_11278" x1="2.5" y1="8" x2="14" y2="8" gradientUnits="userSpaceOnUse">\n          <stop offset="0" stop-color="currentColor" />\n          <stop offset="1" stop-opacity="0.2" stop-color="currentColor" />\n        </linearGradient>\n      </defs>\n    </svg>\n    ',swatch:'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g\n          clip-path="url(#mon-swatch-clip-path)"\n        >\n          <g>\n            <foreignObject\n              x="0"\n              y="0"\n              width="24"\n              height="24"\n            >\n              <div class="conic-gradient" style="background: var(--fa-primary-color, currentColor); height: 100%; width: 100%;"></div>\n            </foreignObject>\n          </g>\n        </g>\n        <circle\n          cx="12"\n          cy="12"\n          r="11.5"\n          stroke="black"\n          stroke-opacity="0.1"\n        />\n      </svg>\n    ',"swatch-checkered":'\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 24 24"\n        fill="none"\n      >\n        <g mask="url(#mon-swatch-clip-mask)">\n          <rect width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="6.85742" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="6.85547" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="10.2856" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="13.7148" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="17.1426" y="20.5703" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="13.7144" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="20.5718" y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <rect x="3.42822" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="3.42822" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="6.85742" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="3.42969" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="10.2852" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="10.2856" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="17.1426" y="17.1445" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="6.85547" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="13.7148" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="13.7144" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect x="20.5718" y="20.5703" width="3.42857" height="3.42857" fill="black" fill-opacity="0.3"/>\n          <rect y="3.42969" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="10.2852" width="3.42857" height="3.42857" fill="white"/>\n          <rect y="17.1445" width="3.42857" height="3.42857" fill="white"/>\n          <circle cx="12" cy="12" r="11.5" stroke="black" stroke-opacity="0.2"/>\n        </g>\n      </svg>\n    ',"text-color":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M12.6016 4.28516L17.1953 15.2227C17.332 15.5508 17.168 15.9336 16.8398 16.0977C16.5117 16.2344 16.1289 16.0703 15.9648 15.7422L15.0352 13.5H8.9375L8.00781 15.7422C7.87109 16.0703 7.46094 16.2344 7.13281 16.0977C6.80469 15.9336 6.64062 15.5508 6.77734 15.2227L11.3711 4.28516C11.4805 4.03906 11.7266 3.875 12 3.875C12.2461 3.875 12.4922 4.03906 12.6016 4.28516ZM14.4883 12.1875L12 6.22656L9.48438 12.1875H14.4883Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n        <path\n          d="M1 20C1 18.8954 1.89543 18 3 18H21C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20Z"\n          fill="var(--fa-secondary-color, black)"\n        />\n        <path\n          d="M1.5 20C1.5 19.1716 2.17157 18.5 3 18.5H21C21.8284 18.5 22.5 19.1716 22.5 20C22.5 20.8284 21.8284 21.5 21 21.5H3C2.17157 21.5 1.5 20.8284 1.5 20Z"\n          stroke="black"\n          stroke-opacity="0.2"\n        />\n      </svg>\n    ',"text-highlight-undefined":'\n      <svg\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M9.15625 10.1211C9.15625 10.4766 9.01953 10.8047 8.77344 11.0508L7.70703 12.0898L9.12891 13.5117L10.168 12.4727C10.4141 12.2266 10.7422 12.0625 11.0977 12.0625H12.4102L12.8477 11.4609L9.75781 8.37109L9.15625 8.80859V10.1211ZM17.8516 4.48828C17.8789 4.46094 17.9062 4.40625 17.9062 4.37891C17.9062 4.32422 17.8789 4.29688 17.8516 4.24219L16.9766 3.36719C16.9219 3.33984 16.8945 3.3125 16.8398 3.3125C16.8125 3.3125 16.7578 3.33984 16.7305 3.36719L10.8516 7.60547L13.6133 10.3672L17.8516 4.48828ZM11.0977 13.375L9.89453 14.5781C9.59375 14.8789 9.18359 14.9609 8.82812 14.8516L7.92578 15.7539C7.76172 15.918 7.54297 16 7.29688 16H5C4.50781 16 4.125 15.6172 4.125 15.125V15.0156C4.125 14.7695 4.20703 14.5508 4.37109 14.3867L6.36719 12.3906C6.25781 12.0352 6.33984 11.5977 6.64062 11.3242L7.84375 10.1211V8.80859C7.84375 8.39844 8.03516 7.98828 8.39062 7.74219L15.9648 2.30078C16.2383 2.10938 16.5391 2 16.8398 2C17.2227 2 17.6055 2.16406 17.8789 2.4375L18.7812 3.33984C19.0547 3.61328 19.2188 3.99609 19.2188 4.37891C19.2188 4.67969 19.1094 4.98047 18.918 5.25391L13.4766 12.8281C13.2305 13.1836 12.8203 13.375 12.4102 13.375H11.0977ZM7.78906 14.0312L7.1875 13.4297L5.92969 14.6875H7.13281L7.78906 14.0312Z"\n          fill="var(--fa-primary-color, currentColor)"\n        />\n      </svg>\n    ',"regular-image-sparkle":'\n      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0 5C0 3.90625 0.875 3 2 3H14C15.0938 3 16 3.90625 16 5V8.09375C15.8125 8.03125 15.6562 8 15.5 8C15.125 8 14.75 8.15625 14.5 8.375V5C14.5 4.75 14.25 4.5 14 4.5H2C1.71875 4.5 1.5 4.75 1.5 5V15V15.0312L1.625 14.8438L4.125 11.3438C4.28125 11.125 4.5 11 4.75 11C4.96875 11 5.21875 11.125 5.34375 11.3125L6.3125 12.6562L8.90625 9.3125C9.03125 9.125 9.25 9 9.5 9C9.71875 9 9.9375 9.125 10.0938 9.3125L11.9375 11.7188L11 12.0625C10.375 12.2812 10 12.875 10 13.5V13.5312C10 14.1562 10.375 14.7188 11 14.9688L13.2188 15.7812L13.6562 17H2C0.875 17 0 16.125 0 15V5ZM3.1875 6.75C3.46875 6.3125 3.9375 6 4.5 6C5.03125 6 5.53125 6.3125 5.78125 6.75C6.0625 7.21875 6.0625 7.8125 5.78125 8.25C5.53125 8.71875 5.03125 9 4.5 9C3.9375 9 3.46875 8.71875 3.1875 8.25C2.90625 7.8125 2.90625 7.21875 3.1875 6.75ZM11 13.5C11 13.2812 11.125 13.0938 11.3438 13L14 12L14.9688 9.375C15.0625 9.15625 15.25 9 15.5 9C15.7188 9 15.9062 9.15625 16 9.375L17 12L19.625 13C19.8438 13.0938 20 13.2812 20 13.5C20 13.75 19.8438 13.9375 19.625 14.0312L17 15L16 17.6562C15.9062 17.875 15.7188 18 15.5 18C15.25 18 15.0625 17.875 14.9688 17.6562L14 15L11.3438 14.0312C11.125 13.9375 11 13.75 11 13.5Z" fill="url(#paint0_linear_19093_1180)"/>\n        <defs>\n          <linearGradient id="paint0_linear_19093_1180" x1="0.243902" y1="20" x2="19.8657" y2="19.2606" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#9C15FF"/>\n            <stop offset="1" stop-color="#1EB4FB"/>\n          </linearGradient>\n        </defs>\n      </svg>\n    '};function gl(e){return Object.hasOwn(ml,e)}function fl(e){return e.startsWith(ul)}Object.keys(ml);var vl=i.vs('<span class="glyph"> </span>');function bl(e,t){i.VC(t,!1);const a=i.zg(),r=i.zg(),o=i.zg(),n=e=>{var t=i.Im(),a=i.es(t),r=e=>{var t=i.Im(),a=i.es(t);i.qy(a,(()=>ml[s()]),!1,!1),i.BC(e,t)};i.if(a,(e=>{gl(s())&&e(r)})),i.BC(e,t)},l=e=>{var t=i.Im(),a=i.es(t),r=e=>{var t=vl(),a=i.jf(t,!0);i.cL(t),i.vN((e=>i.j(a,e)),[()=>function(e){return e.slice(ul.length)}(s())],i.Xd),i.BC(e,t)};i.if(a,(e=>{fl(s())&&e(r)})),i.BC(e,t)};let s=i._w(t,"icon",8),c=i._w(t,"style",8,"regular"),d=i._w(t,"size",8,14);i.M3((()=>i.iT(s())),(()=>{i.hZ(a,gl(s()))})),i.M3((()=>i.iT(s())),(()=>{i.hZ(r,fl(s()))})),i.M3((()=>i.iT(c())),(()=>{i.hZ(o,"duotone"===c())})),i.iq(),i.Ts();const p=i.Xd((()=>i.Jt(a)?n:i.Jt(r)?l:`fa-${c()} fa-${s()}`));!function(e,t){i.VC(t,!1);let a=i._w(t,"icon",8,"fa-regular fa-circle-dashed"),r=i._w(t,"color",8,void 0),o=i._w(t,"size",8,void 0),n=i._w(t,"duotone",8,void 0),l=i._w(t,"children",8,void 0);const s="string"==typeof a()&&a().length>0;i.Ts();var c=Kn();let d;var p=i.jf(c),h=e=>{var t=i.Im(),r=i.es(t);i.UA(r,a),i.BC(e,t)},u=(e,t)=>{var r=e=>{var t=Wn();i.vN((()=>i.ys(t,1,i.$z(a())))),i.BC(e,t)},o=e=>{var t=i.Im(),a=i.es(t);i.UA(a,(()=>l()??i.lQ)),i.BC(e,t)};i.if(e,(e=>{s?e(r):e(o,!1)}),t)};i.if(p,(e=>{a()&&"string"!=typeof a()?e(h):e(u,!1)})),i.cL(c),i.XI(c,(e=>Xn?.(e))),i.vN((e=>{i.Jk(c,"data-duotone",n()||void 0),d=i.hg(c,"",d,{"--arc-icon-size":e,"--arc-icon-color":r()})}),[()=>Yn(o())],i.Xd),i.BC(e,c),i.uY()}(e,{get icon(){return i.Jt(p)},get size(){return d()},get duotone(){return i.Jt(o)}}),i.uY()}i.vs("<div><!></div>");var Sl=i.vs('<div class="scrollbar svelte-1e1sej9" aria-hidden="true"><div class="handle svelte-1e1sej9"></div> <input tabindex="-1" type="range" class="svelte-1e1sej9"></div>');const yl={hash:"svelte-1e1sej9",code:".scrollbar.svelte-1e1sej9 {position:absolute;--thickness: 0px;&[data-container-active] {--thickness: 6px;}&[data-hovered] {--thickness: 12px;background:#0004;}&[data-orientation='horizontal'] {left:0;right:0;bottom:0;height:var(--thickness);}&[data-orientation='vertical'] {writing-mode:vertical-lr;direction:ltr;top:0;bottom:0;right:0;width:var(--thickness);}}.handle.svelte-1e1sej9 {pointer-events:none;position:absolute;border-radius:3px;background:#000c;inset-block:0;inline-size:calc(var(--handleSize) * 100%);inset-inline-start:calc(var(--handleStart) * 100%);}input.svelte-1e1sej9 {opacity:0;position:absolute;inset:0;padding:0;margin:0;&::-moz-range-thumb,\n    &::-webkit-slider-thumb {appearance:none;width:0;height:0;}}"};function xl(e,t){i.VC(t,!1),i.kZ(e,yl);const[a,r]=i.DZ(),o=()=>i.Hz(m,"$data",a),n=i.zg(),l=i.zg(),s=i.zg();let c=i._w(t,"context",8),d=i._w(t,"orientation",8),p=null;const{overflow:h,containerIsActive:u,data:m,scroll:g}=c();function f(e){const t=e.target.valueAsNumber;if(null==p){const e=i.Jt(l)-t;p=Math.abs(e)<.5*i.Jt(s)?e:0}g(t+p)}function v(e){p=null}const b=(0,Ni.writable)(!1);i.M3((()=>(i.Jt(n),i.Jt(l),i.Jt(s),o())),(()=>{var e;e=o(),i.hZ(n,e.scrollSize),i.hZ(l,e.scrollStart),i.hZ(s,e.offsetSize)})),i.iq(),i.Ts();var S=i.Im(),y=i.es(S),x=e=>{var t=Sl();const r=i.Xd((()=>Math.min(i.Jt(s)/i.Jt(n),1))),o=i.Xd((()=>Math.min(Math.max(i.Jt(l)/i.Jt(n),0),1-i.Jt(r))));let c;var p=i.AD(i.jf(t),2);i.R0(p),i.cL(t),i.XI(t,((e,t)=>hl?.(e,t)),(()=>({isHovered:b,delay:500}))),i.vN((()=>{i.Jk(t,"data-orientation",d()),i.Jk(t,"data-container-active",i.Hz(u,"$containerIsActive",a)?"":void 0),i.Jk(t,"data-hovered",i.Hz(b,"$isHovered",a)?"":void 0),c=i.hg(t,"",c,{"--handleSize":i.Jt(r),"--handleStart":i.Jt(o)}),i.Jk(p,"min",0-.5*i.Jt(s)),i.Jk(p,"max",i.Jt(n)-.5*i.Jt(s)),i.to(p,i.Jt(l))})),i.f0("change",p,v),i.f0("input",p,f),i.BC(e,t)};i.if(y,(e=>{("scroll"===h||"auto"===h&&i.Jt(n)>i.Jt(s))&&e(x)})),i.BC(e,S),i.uY(),r()}var Cl=i.vs("<!> <!>",1);i.vs('<div class="panel-tabs svelte-1uez1n9"><!></div>'),i.vs('<div class="panel svelte-1uez1n9"><!> <!></div>'),i.vs('<div class="panel-actions svelte-ir5tsd"><!></div>'),i.vs('<header><div class="panel-heading svelte-ir5tsd"><!></div> <!></header>'),i.vs('<div class="tooltip-text svelte-1yda0aw"><!></div>'),i.vs('<span class="text-label svelte-156x2eo"> </span>'),i.vs('<!> <div class="mon-sr-only svelte-156x2eo"><!></div>',1),i.vs("<div><!> <!></div>"),i.vs('<div><input type="number" class="input-value svelte-gx1obz"> <div class="input-button dec svelte-gx1obz"><!></div> <div class="input-button inc svelte-gx1obz"><!></div></div>'),i.vs("<button><!></button>"),i.vs('<div><!> <input class="radio-input svelte-1nbcryn" type="radio"></div>'),i.vs('<div class="radio-icon-group svelte-1nbcryn" role="radiogroup"></div>'),i.vs('<div class="text-input-wrapper svelte-dw7kuc"><div class="text-input-prefix svelte-dw7kuc"><div class="text-input-lead-icon svelte-dw7kuc"><!></div></div> <input> <div class="actions svelte-dw7kuc"><!></div></div>'),i.vs('<div class="slider-container svelte-7a6v09"><div class="slider-wrapper svelte-7a6v09"><div class="slider-track svelte-7a6v09"></div> <input type="range" class="slider svelte-7a6v09"></div> <!></div>'),i.vs("<!> ",1),i.vs("<mon-menu-item><!> </mon-menu-item>",2),i.vs("<mon-menu></mon-menu>",2),i.vs('<div class="mon-split-button mon-tooltip-anchor svelte-10dj79p"><div class="mon-split-button-primary svelte-10dj79p"><!></div> <div class="mon-split-button-divider svelte-10dj79p"></div> <div><div class="mon-split-button-secondary svelte-10dj79p"><!></div> <!></div></div>');var Il=i.vs("<div><!></div>");const wl={hash:"svelte-1i06x9o",code:".suspense.--loading.svelte-1i06x9o {visibility:hidden;}"};i.vs('<label><input class="input mon-visually-hidden svelte-5dh97r"> <!></label>'),i.vs('<div class="tag-group svelte-2750ar"><!></div>'),i.vs("<input>"),i.vs('<label class="toggle-group-option mon-tooltip-anchor svelte-13t9a5s"><!> <input class="svelte-13t9a5s"> <span class="icon-wrapper svelte-13t9a5s"><!></span></label>'),i.vs('<div class="toggle-group-container svelte-13t9a5s"></div>');var zl=i.vs('<div class="audio-player svelte-ozy54q"><div class="audio-player__housing svelte-ozy54q" role="group"><button class="audio-player__play svelte-ozy54q" type="button"><!></button> <div class="audio-player__slider-wrapper svelte-ozy54q"><input class="audio-player__slider svelte-ozy54q" type="range" step="any"> <div class="audio-player__slider-progress svelte-ozy54q"></div></div> <div class="audio-player__timer svelte-ozy54q" role="timer"> </div></div> <audio class="audio-player__audio-element"></audio></div>');const kl={hash:"svelte-ozy54q",code:".audio-player.svelte-ozy54q {display:flex;min-width:0;flex:1;padding-block:0.4rem;padding-inline:1.2rem;height:4rem;align-items:center;border-radius:10rem;background-color:var(--arc-color-mono-white);pointer-events:initial;}.audio-player__housing.svelte-ozy54q {--slider-thumb-size: 10px;--slider-thumb-bg: var(--arc-color-mono-black);--slider-thumb-border: 1px solid var(--arc-color-border-standard);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 0.5rem;align-items:center;display:flex;flex-flow:row nowrap;width:100%;-webkit-user-select:none;user-select:none;}.audio-player__play.svelte-ozy54q {cursor:pointer;display:flex;align-items:center;justify-content:center;}.audio-player__play.svelte-ozy54q {-webkit-appearance:none;appearance:none;border:none;background:none;font-size:1.6rem;padding-inline:0;}.audio-player__slider-wrapper.svelte-ozy54q {position:relative;height:32px;min-width:0;flex:1;display:flex;--pad-left: 1.25rem;--pad-right: 1.2rem;}.audio-player__slider.svelte-ozy54q {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;min-width:0;flex:1;height:100%;padding-inline-start:var(--pad-left);padding-inline-end:var(--pad-right);}\n\n  /***** Chrome, Safari, Opera and Edge Chromium styles *****/.audio-player__slider.svelte-ozy54q::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-ozy54q::-webkit-slider-runnable-track {background-color:var(--arc-color-border-standard);border-radius:var(--slider-track-height);height:var(--slider-track-height);}\n\n  /******** Firefox styles ********/.audio-player__slider.svelte-ozy54q::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-1 * var(--slider-track-height) / 2);}.audio-player__slider.svelte-ozy54q::-moz-range-track {background-color:var(--arc-color-border-standard);border-radius:var(--slider-track-height);height:var(--slider-track-height);}.audio-player__slider-progress.svelte-ozy54q {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );border-radius:var(--slider-track-height);height:var(--slider-track-height);position:absolute;inset-inline-start:var(--pad-left);inset-inline-end:var(--pad-right);inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;}.audio-player__timer.svelte-ozy54q {font-size:1.4rem;font-family:var(--arc-font-family-body);font-weight:var(--arc-font-weight-600);white-space:nowrap;text-align:right;width:4rem;}"};var Tl=i.vs('<div class="mon-audio-wrapper svelte-1req34n"><!></div>');const Ll={hash:"svelte-1req34n",code:".mon-audio-wrapper.svelte-1req34n {align-items:center;display:flex;inset:0;position:absolute;}"};var Ml=i.Dn('<g><path class="border svelte-1b0340t"></path></g>');const Al={hash:"svelte-1b0340t",code:".border.svelte-1b0340t {fill:none;stroke-linecap:round;}"},Bl=.5,Fl=1;var Vl=i.Dn('<filter x="0" y="0" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha"></feGaussianBlur><feOffset result="mask"></feOffset><feFlood result="color"></feFlood><feComposite operator="in" in="color" in2="mask"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>'),Dl=i.Dn('<rect class="fill-color svelte-s28lkx"></rect>');const Jl={hash:"svelte-s28lkx",code:".fill-color.svelte-s28lkx {stroke:none;}"};function Rl(e,t){i.VC(t,!1),i.kZ(e,Jl);let a=i._w(t,"width",8),r=i._w(t,"height",8),o=i._w(t,"fill",8);i.Ts();var n=i.Im(),l=i.es(n),s=e=>{var t=Dl();i.vN((()=>{i.Jk(t,"width",a()),i.Jk(t,"height",r()),i.Jk(t,"fill",o().color),i.Jk(t,"opacity",o().opacity)})),i.BC(e,t)};i.if(l,(e=>{o().color&&e(s)})),i.BC(e,n),i.uY()}var Zl=i.Dn('<image class="fill-image" preserveAspectRatio="none"></image>');let Pl=0;const _l={type:"rectangle"};function Hl(e){return e?.applied?e:void 0}function $l(e){return e?.applied?e:void 0}var Ol=i.vs('<div class="backdrop-wrapper svelte-faya9i" role="presentation"><svg class="mon-item-backdrop svelte-faya9i" preserveAspectRatio="none"><defs><clipPath><path></path></clipPath><!></defs><g><g><g><!><!><!><rect></rect></g><!></g></g></svg></div>');const El={hash:"svelte-faya9i",code:".backdrop-wrapper.svelte-faya9i {position:absolute;}.mon-item-backdrop.svelte-faya9i {display:block;width:100%;height:100%;}.mon-item-mouse-trigger.svelte-faya9i {fill:none;}.mon-item-mouse-trigger.--visible.svelte-faya9i {pointer-events:all;}.mon-item-mouse-trigger.--clickable.svelte-faya9i {cursor:pointer;}"};function Nl(e,t){i.VC(t,!1),i.kZ(e,El);const a=i.zg(),r=i.zg(),o=i.zg();let n=i._w(t,"item",8),s=i._w(t,"stateId",8),c=i._w(t,"visible",8),d=i._w(t,"clickable",8,!1),p=i.zg(),h=i.zg(),u=i.zg(_l),m=i.zg(),g=i.zg(),f=i.zg(),v=i.zg(),b=i.zg(),S=i.zg(),y=i.zg(),x=i.zg(),C=i.zg(),I=i.zg(),w=i.zg(),z=i.zg();const k="mon-item-backdrop-clip-"+Pl++,T="mon-item-backdrop-shadow-filter-"+Pl++;i.M3((()=>i.iT(n())),(()=>{i.hZ(a,n().states.default)})),i.M3((()=>(i.iT(n()),i.iT(s()))),(()=>{i.hZ(r,n().states[s()])})),i.M3((()=>(i.Jt(r),i.Jt(a),i.iT(n()))),(()=>{if(i.hZ(p,i.Jt(r).width?.value??i.Jt(a).width.value),i.hZ(h,i.Jt(r).height?.value??i.Jt(a).height.value),"image"===n().type){const e=i.Jt(r),t=i.Jt(a);i.hZ(u,e.shapeDef??t.shapeDef),i.hZ(g,e.fill??t.fill),i.hZ(f,e.overlay??t.overlay),i.hZ(v,Hl(e.dropShadow??t.dropShadow)),i.hZ(b,$l(e.border??t.border)),i.hZ(S,e.altText??t.altText)}else if("shape"===n().type){const e=i.Jt(r),t=i.Jt(a);i.hZ(u,e.shapeDef??t.shapeDef),i.hZ(m,e.fill??t.fill),i.hZ(f,e.overlay??t.overlay),i.hZ(v,Hl(e.dropShadow??t.dropShadow)),i.hZ(b,$l(e.border??t.border)),i.hZ(S,e.altText??t.altText)}else if("group"===n().type){const e=i.Jt(r),t=i.Jt(a);i.hZ(m,e.fill??t.fill),i.hZ(f,e.overlay??t.overlay),i.hZ(b,$l(e.border??t.border))}})),i.M3((()=>(i.Jt(y),i.Jt(p),i.Jt(x),i.Jt(h),i.Jt(C),i.Jt(I),i.Jt(w),i.Jt(z),i.Jt(b),i.Jt(v),Fl)),(()=>{i.hZ(y,i.Jt(p)),i.hZ(x,i.Jt(h)),i.hZ(C,0),i.hZ(I,0),i.hZ(w,0),i.hZ(z,0);let e=0;if(i.Jt(b)&&(e+=Math.ceil(.5*i.Jt(b).width.value)),i.Jt(v)){e+=i.Jt(v).blur*Fl;const{offset:{x:t,y:a}}=i.Jt(v);t<0?(i.hZ(y,i.Jt(y)-t),i.hZ(C,i.Jt(C)+t)):(i.hZ(y,i.Jt(y)+t),i.hZ(w,i.Jt(w)-t)),a<0?(i.hZ(x,i.Jt(x)-a),i.hZ(I,i.Jt(I)+a)):(i.hZ(x,i.Jt(x)+a),i.hZ(z,i.Jt(z)-a))}i.hZ(y,i.Jt(y)+2*e),i.hZ(x,i.Jt(x)+2*e),i.hZ(C,i.Jt(C)-e),i.hZ(I,i.Jt(I)-e),i.hZ(w,i.Jt(w)-e),i.hZ(z,i.Jt(z)-e)})),i.M3((()=>(i.Jt(u),i.Jt(p),i.Jt(h))),(()=>{var e,t;i.hZ(o,(e=i.Jt(u),t={width:i.Jt(p),height:i.Jt(h)},ro.get(e.type).clipPath(e,t)))})),i.iq(),i.Ts();var L=Ol();let M;var A=i.jf(L),B=i.jf(A),F=i.jf(B);i.Jk(F,"id",k);var V=i.jf(F);i.cL(F);var D=i.AD(F),J=e=>{!function(e,t){i.VC(t,!1);let a=i._w(t,"id",8),r=i._w(t,"dropShadow",8),o=i._w(t,"svgWidth",8),n=i._w(t,"svgHeight",8);i.Ts();var l=Vl(),s=i.jf(l),c=i.AD(s),d=i.AD(c);i.K2(2),i.cL(l),i.vN((()=>{i.Jk(l,"id",a()),i.Jk(l,"width",o()),i.Jk(l,"height",n()),i.Jk(s,"stdDeviation",r().blur*Bl),i.Jk(c,"dx",r().offset.x),i.Jk(c,"dy",r().offset.y),i.Jk(d,"flood-color",r().color),i.Jk(d,"flood-opacity",r().opacity)})),i.BC(e,l),i.uY()}(e,{id:T,get dropShadow(){return i.Jt(v)},get svgWidth(){return i.Jt(y)},get svgHeight(){return i.Jt(x)}})};i.if(D,(e=>{i.Jt(v)&&e(J)})),i.cL(B);var R=i.AD(B),Z=i.jf(R),P=i.jf(Z);i.Jk(P,"clip-path",`url(#${k??""})`);var _=i.jf(P),H=e=>{Rl(e,{get width(){return i.Jt(p)},get height(){return i.Jt(h)},get fill(){return i.Jt(m)}})};i.if(_,(e=>{i.Jt(m)&&e(H)}));var $=i.AD(_),O=e=>{!function(e,t){i.VC(t,!1);const a=i.zg();let r=i._w(t,"width",8),o=i._w(t,"height",8),n=i._w(t,"assets",8,void 0),s=i._w(t,"fill",8);const c=l();i.M3((()=>(i.iT(s()),i.iT(n()))),(()=>{i.hZ(a,s().assetId&&n()?.[s().assetId]?c.resolvePath(n()?.[s().assetId].path):null)})),i.iq(),i.Ts();var d=i.Im(),p=i.es(d),h=e=>{var t=Zl();const n=i.Xd((()=>{const{crop:e}=s();return{crop:e}})),l=i.Xd((()=>i.Jt(n).crop.width*r())),c=i.Xd((()=>i.Jt(n).crop.height*o())),d=i.Xd((()=>.5*(r()-i.Jt(l))+r()*i.Jt(n).crop.left)),p=i.Xd((()=>.5*(o()-i.Jt(c))+o()*i.Jt(n).crop.top));let h;i.vN((()=>{i.Jk(t,"href",i.Jt(a)),i.Jk(t,"width",i.Jt(l)),i.Jk(t,"height",i.Jt(c)),i.Jk(t,"x",i.Jt(d)),i.Jk(t,"y",i.Jt(p)),h=i.hg(t,"",h,{opacity:s().opacity})})),i.BC(e,t)};i.if(p,(e=>{i.Jt(a)&&e(h)})),i.BC(e,d),i.uY()}(e,{get width(){return i.Jt(p)},get height(){return i.Jt(h)},get assets(){return n().assets},get fill(){return i.Jt(g)}})};i.if($,(e=>{i.Jt(g)&&e(O)}));var E=i.AD($),N=e=>{Rl(e,{get width(){return i.Jt(p)},get height(){return i.Jt(h)},get fill(){return i.Jt(f)}})};i.if(E,(e=>{i.Jt(f)&&e(N)}));var j=i.AD(E);let G;i.cL(P);var q=i.AD(P),U=e=>{!function(e,t){i.VC(t,!1),i.kZ(e,Al);let a=i._w(t,"border",8),r=i._w(t,"d",8);i.Ts();var o=Ml();let n;var l=i.jf(o);i.cL(o),i.vN((e=>{n=i.hg(o,"",n,{opacity:a().opacity}),i.Jk(l,"stroke-width",a().width.value),i.Jk(l,"stroke",a().color),i.Jk(l,"stroke-dasharray",e),i.Jk(l,"d",r())}),[()=>function(e){if(!e.applied)return;const t=e.width.value;return"dashed"===e.style?`${2*t} ${2*t}`:"dotted"===e.style?"0 "+2*t:void 0}(a())],i.Xd),i.BC(e,o),i.uY()}(e,{get border(){return i.Jt(b)},get d(){return i.Jt(o)}})};i.if(q,(e=>{i.Jt(b)&&e(U)})),i.cL(Z),i.cL(R),i.cL(A),i.cL(L),i.vN((e=>{M=i.hg(L,"",M,{left:`${i.Jt(C)??""}px`,top:`${i.Jt(I)??""}px`,right:`${i.Jt(w)??""}px`,bottom:`${i.Jt(z)??""}px`}),i.Jk(A,"viewBox",`0 0 ${i.Jt(y)??""} ${i.Jt(x)??""}`),i.Jk(A,"role",i.Jt(S)?"img":"presentation"),i.Jk(A,"aria-label",i.Jt(S)||void 0),i.Jk(V,"d",i.Jt(o)),i.Jk(R,"filter",i.Jt(v)?`url(#${T})`:void 0),i.Jk(Z,"transform",`translate(${-i.Jt(C)} ${-i.Jt(I)})`),G=i.ys(j,0,"mon-item-mouse-trigger svelte-faya9i",null,G,e),i.Jk(j,"width",i.Jt(p)),i.Jk(j,"height",i.Jt(h)),i.Jk(j,"role",d()?"button":void 0),i.Jk(j,"tabindex",d()?0:void 0)}),[()=>({"--visible":c(),"--clickable":d()})],i.Xd),i.BC(e,L),i.uY()}var jl=i.vs('<div role="presentation" tabindex="-1"><!></div>');const Gl={hash:"svelte-d0xz7b",code:".mon-item-transform.svelte-d0xz7b {position:absolute;\n    /*\n    This element defines a virtual reference box for the item, but the actual physical\n    extents of the item may vary.  For non-rectangle ShapeItems, the clickable area of\n    the item can be much smaller.  For GroupItems, the reference box itself is generally\n    not clickable; only the children within.  So this element has to be non-interactable,\n    and children of ItemTransform that wish to be interactable are expected to override\n    this within the child components.\n    */pointer-events:none;}.mon-item-transform.--smooth-transitions.svelte-d0xz7b {transition:all 100ms ease;}"},ql={type:"rectangle"};var Ul=i.vs('<div class="text-item-clip svelte-phy1ob"><div class="text-item-clip-boundary svelte-phy1ob"><div class="text-item-scrollable svelte-phy1ob"><div class="text-item-padding-boundary svelte-phy1ob"><!></div></div> <div class="text-item-scrollbars svelte-phy1ob"><!></div></div></div>');const Yl={hash:"svelte-phy1ob",code:".text-item-clip.svelte-phy1ob {position:absolute;inset:0;}.text-item-clip-boundary.svelte-phy1ob {position:absolute;}.text-item-scrollable.svelte-phy1ob {position:absolute;inset:0;overflow:visible auto;scrollbar-width:none;}.text-item-padding-boundary.svelte-phy1ob {display:flex;flex-direction:column;min-height:100%;}.text-item-padding-boundary[data-vertical-align='top'].svelte-phy1ob {--text-item-vertical-align: start;}.text-item-padding-boundary[data-vertical-align='middle'].svelte-phy1ob {--text-item-vertical-align: center;}.text-item-padding-boundary[data-vertical-align='bottom'].svelte-phy1ob {--text-item-vertical-align: end;}.text-item-padding-boundary.svelte-phy1ob {justify-content:var(--text-item-vertical-align);overflow-anchor:none;}.text-item-scrollbars.svelte-phy1ob {pointer-events:all;}"};function Xl(e,t){i.VC(t,!1),i.kZ(e,Yl);const a=i.zg(),r=i.zg(),o=i.zg();let n=i._w(t,"item",8),l=i._w(t,"stateId",8);const s=function({overflowX:e,overflowY:t}){let a=null;const i=(0,Ni.writable)(!1),r=(0,Ni.writable)(!1),o=cl()((()=>{r.set(!1)}),3e3),n=(0,Ni.derived)([i,r],(([e,t])=>e||t)),l={x:{overflow:e,containerIsActive:n,data:(0,Ni.writable)({scrollSize:0,scrollStart:0,offsetSize:0}),scroll:e=>{a&&(a.scrollLeft=e)}},y:{overflow:t,containerIsActive:n,data:(0,Ni.writable)({scrollSize:0,scrollStart:0,offsetSize:0}),scroll:e=>{a&&(a.scrollTop=e)}}},{x:s,y:c}=l;function d(){a&&(s.data.set({scrollSize:a.scrollWidth,scrollStart:a.scrollLeft,offsetSize:a.offsetWidth}),c.data.set({scrollSize:a.scrollHeight,scrollStart:a.scrollTop,offsetSize:a.offsetHeight}))}let p=0;return{monitorContainer:e=>{a=e;const t=hl(e,{isHovered:i,delay:3e3}),n=Yi("scroll",e,(()=>{s.data.update((t=>(t.scrollStart=e.scrollLeft,t))),c.data.update((t=>(t.scrollStart=e.scrollTop,t))),r.set(!0),o()}),{passive:!0}),l=new ResizeObserver((()=>{d()}));return l.observe(e),{destroy(){l.disconnect(),a=null,t?.destroy?.(),n()}}},monitorContent:e=>{p+=1;const t=new ResizeObserver((()=>{d()}));return t.observe(e),{destroy(){t.disconnect(),p-=1,p>0&&d()}}},context:l}}({overflowX:"clip",overflowY:"auto"});i.M3((()=>(i.iT(n()),i.iT(l()))),(()=>{i.hZ(a,so(n(),l()))})),i.M3((()=>(i.iT(n()),i.Jt(a))),(()=>{var e;i.hZ(r,(e="shape"===n().type?i.Jt(a).shapeDef:ql,ro.get(e.type).textExtents(e)))})),i.M3((()=>(i.Jt(o),i.Jt(a))),(()=>{var e;e=i.Jt(a),i.hZ(o,e.textPadding)})),i.iq(),i.Ts();var c=Ul(),d=i.jf(c);let p;var h=i.jf(d),u=i.jf(h);let m;var g=i.jf(u);i.NI(g,t,"default",{},null),i.cL(u),i.XI(u,(e=>s.monitorContent?.(e))),i.cL(h),i.XI(h,(e=>s.monitorContainer?.(e)));var f=i.AD(h,2);!function(e,t){i.VC(t,!1);let a=i._w(t,"context",8);i.Ts();var r=Cl(),o=i.es(r);xl(o,{get context(){return a().x},orientation:"horizontal"}),xl(i.AD(o,2),{get context(){return a().y},orientation:"vertical"}),i.BC(e,r),i.uY()}(i.jf(f),{get context(){return s.context}}),i.cL(f),i.cL(d),i.cL(c),i.vN((()=>{p=i.hg(d,"",p,{left:`calc(${i.Jt(r).left??""} * 100%)`,top:`calc(${i.Jt(r).top??""} * 100%)`,width:`calc(${i.Jt(r).width??""} * 100%)`,height:`calc(${i.Jt(r).height??""} * 100%)`}),i.Jk(u,"data-vertical-align",i.Jt(a).textVerticalAlign),m=i.hg(u,"",m,{"padding-top":`${i.Jt(o).top??""}px`,"padding-left":`${i.Jt(o).left??""}px`,"padding-bottom":`${i.Jt(o).bottom??""}px`,"padding-right":`${i.Jt(o).right??""}px`})})),i.BC(e,c),i.uY()}var Wl=i.vs('<div class="content-wrapper svelte-f85pc"><div class="tiptap ProseMirror content svelte-f85pc"></div></div>');const Kl={hash:"svelte-f85pc",code:".content-wrapper.svelte-f85pc {height:100%;display:flex;pointer-events:auto;}\n\n  /**\n    * Tiptap content can sometimes render authored line breaks as empty <p> or <h1>-<h6> tags depending\n    * on whether the author used Shift+Enter vs Enter. We need to ensure these empty tags\n    * have a minimum height so they actually behave like line breaks which take up space.\n    */.content.svelte-f85pc\n    \n      :is(p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty)\n     {min-height:1lh;}"};var Ql=i.vs('<button class="video-player__big-play-button svelte-1xrpo7n"><!></button>'),es=i.vs('<button class="video-player__pip-button svelte-1xrpo7n" aria-label="Toggle Picture-in-Picture"><!></button>'),ts=i.vs('<div role="group"><video class="video-player__video svelte-1xrpo7n"><source></video> <!> <div class="video-player__controls svelte-1xrpo7n"><button class="video-player__play-button svelte-1xrpo7n" type="button"><!></button> <div class="video-player__seek-bar-wrapper svelte-1xrpo7n"><input class="video-player__seek-bar svelte-1xrpo7n" type="range" aria-label="Seek"> <div class="video-player__seek-bar-progress svelte-1xrpo7n"></div></div> <span class="video-player__time-remaining svelte-1xrpo7n"> </span> <!> <button class="video-player__fullscreen-button svelte-1xrpo7n" aria-label="Toggle Fullscreen"><!></button> <div class="video-player__volume-control svelte-1xrpo7n"><button class="video-player__volume-button svelte-1xrpo7n" aria-label="Toggle volume"><!></button> <div class="video-player__volume-slider-wrapper svelte-1xrpo7n"><input class="video-player__volume-slider svelte-1xrpo7n" type="range" min="0" max="1" step="0.01" aria-label="Volume"> <div class="video-player__volume-slider-progress svelte-1xrpo7n"></div></div></div></div></div>',2);const as={hash:"svelte-1xrpo7n",code:".video-player.svelte-1xrpo7n {--slider-thumb-size: 10px;--slider-thumb-bg: var(--arc-color-mono-white);--slider-thumb-border: 1px solid var(--arc-color-border-standard);--slider-thumb-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--slider-track-height: 0.2rem;container-type:inline-size;container-name:video-player;position:relative;align-items:center;display:flex;flex-direction:column;margin:auto;pointer-events:initial;width:100%;height:100%;}.video-player.fullscreen.svelte-1xrpo7n .video-player__video:where(.svelte-1xrpo7n) {margin:auto 0;}.video-player.touched.svelte-1xrpo7n:not(.active):not(.paused) .video-player__controls:where(.svelte-1xrpo7n),\n  .video-player.svelte-1xrpo7n:not(.touched) .video-player__controls:where(.svelte-1xrpo7n) {opacity:0;pointer-events:none;transition:opacity 1s;}.video-player__big-play-button.svelte-1xrpo7n {aspect-ratio:1 / 1;background-color:rgba(0, 0, 0, 0.67);border-radius:0;border-radius:50%;border:none;cursor:pointer;left:50%;margin:0;padding:0;position:absolute;top:50%;transform:translate(-50%, -50%);transition:background-color 0.4s;max-width:9.8rem;width:13%;min-width:4.8rem;color:var(--arc-color-mono-white);}.video-player.svelte-1xrpo7n:hover .video-player__big-play-button:where(.svelte-1xrpo7n) {background-color:rgba(0, 0, 0, 0.85);outline:0.3rem solid white;}.video-player__video.svelte-1xrpo7n {width:100%;height:100%;object-fit:fill;}.video-player__controls.svelte-1xrpo7n {bottom:0;position:absolute;align-items:center;background-color:rgba(0, 0, 0, 0.67);display:flex;gap:1rem;width:100%;height:7.5rem; /* mini = 3.2rem */color:var(--arc-color-mono-white);padding:0 1rem;}.video-player__play-button.svelte-1xrpo7n {padding:0 0.4rem;height:100%;}.video-player__play-button.svelte-1xrpo7n,\n  .video-player__pip-button.svelte-1xrpo7n,\n  .video-player__fullscreen-button.svelte-1xrpo7n,\n  .video-player__volume-button.svelte-1xrpo7n {display:flex;height:100%;align-items:center;background:none;border:none;cursor:pointer;font-size:1.5rem;color:var(--arc-color-mono-white);}.video-player__play-button.svelte-1xrpo7n:focus svg,\n  .video-player__pip-button.svelte-1xrpo7n:focus svg,\n  .video-player__fullscreen-button.svelte-1xrpo7n:focus svg,\n  .video-player__volume-button.svelte-1xrpo7n:focus svg {filter:drop-shadow(0 0 4px rgb(255 255 255 / 0.8));}.video-player__seek-bar-wrapper.svelte-1xrpo7n {position:relative;height:32px;min-width:0;flex:1;display:flex;}.video-player__time-remaining.svelte-1xrpo7n {font-size:1.2rem;font-weight:700;min-width:3.5rem;}.video-player__volume-control.svelte-1xrpo7n {align-items:center;display:flex;gap:5px;}.video-player__volume-slider-wrapper.svelte-1xrpo7n {position:relative;height:32px;min-width:0;width:100px;display:flex;}.video-player__volume-slider.svelte-1xrpo7n {width:100%;}.video-player__seek-bar.svelte-1xrpo7n,\n  .video-player__volume-slider.svelte-1xrpo7n {-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;margin:0;flex:1;height:100%;}.video-player__seek-bar.svelte-1xrpo7n::-webkit-slider-thumb,\n  .video-player__volume-slider.svelte-1xrpo7n::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-1xrpo7n::-webkit-slider-runnable-track,\n  .video-player__volume-slider.svelte-1xrpo7n::-webkit-slider-runnable-track {background-color:rgba(115, 133, 159, 0.5);height:var(--slider-track-height);}.video-player__seek-bar.svelte-1xrpo7n::-moz-range-thumb,\n  .video-player__volume-slider.svelte-1xrpo7n::-moz-range-thumb {appearance:none;width:var(--slider-thumb-size);height:var(--slider-thumb-size);background:var(--slider-thumb-bg);border:var(--slider-thumb-border);border-radius:50%;box-shadow:var(--slider-thumb-box-shadow);cursor:pointer;margin-top:calc(-2 * var(--slider-track-height));}.video-player__seek-bar.svelte-1xrpo7n::-moz-range-track,\n  .video-player__volume-slider.svelte-1xrpo7n::-moz-range-track {background-color:var(--arc-color-border-standard);height:var(--slider-track-height);}.video-player__seek-bar-progress.svelte-1xrpo7n,\n  .video-player__volume-slider-progress.svelte-1xrpo7n {background:linear-gradient(\n      to right,\n      var(--slider-thumb-bg) var(--slider-progress-percent),\n      transparent 0%\n    );height:var(--slider-track-height);position:absolute;inset-block:0 0;margin-top:auto;margin-bottom:auto;min-width:var(--slider-thumb-size);pointer-events:none;width:100%;}\n\n  @container video-player (max-width: 45rem) {.video-player__controls.svelte-1xrpo7n {height:3.2rem;justify-content:space-around;}.video-player__volume-slider-wrapper.svelte-1xrpo7n {width:100%;}.video-player__seek-bar-wrapper.svelte-1xrpo7n,\n    .video-player__time-remaining.svelte-1xrpo7n,\n    .video-player__pip-button.svelte-1xrpo7n {display:none;}\n  }"};var is=i.vs('<div class="mon-video-wrapper svelte-ngn0zs"><!></div>');const rs={hash:"svelte-ngn0zs",code:".mon-video-wrapper.svelte-ngn0zs {align-items:center;display:flex;inset:0;position:absolute;}"};var os=i.vs('<div class="mon-item-children svelte-1qzkifk" role="presentation"></div>'),ns=i.vs('<div role="presentation"><!> <!> <!> <!> <!></div>');const ls={hash:"svelte-1qzkifk",code:".mon-item.svelte-1qzkifk {position:absolute;inset:0;&.--smooth-transitions {transition:opacity 100ms ease;}&.--hidden {opacity:0;}&.--clip {overflow:clip;}}.mon-item-children.svelte-1qzkifk {isolation:isolate;}"};function ss(e,t){i.VC(t,!1),i.kZ(e,ls);const[a,o]=i.DZ(),n=()=>i.Hz(M,"$item",a),s=()=>i.Hz(A,"$stateId",a),c=()=>i.Hz(F,"$triggersBySourceId",a),p=()=>i.Hz(L,"$searchTerm",a),h=()=>i.Hz(B,"$visible",a),u=i.zg(),m=i.zg(),g=i.zg(),f=i.zg(),v=i.zg(),b=i.zg(),S=i.zg(),y=i.zg();let x=i._w(t,"itemId",8),C=i._w(t,"index",8,void 0),I=i._w(t,"clip",8,!1),w=i._w(t,"noTransform",8,!1);const z=l(),{bindTriggers:k,hideTextContentForId:T,searchTerm:L}=z,M=z.getItem(x()),A=z.getState(x()),B=z.getVisible(x()),F=z.getTriggersBySourceId(),V=d();function D({event:e}){return"click"===e}i.M3((()=>n()),(()=>{i.hZ(u,"group"===n().type?n().children:void 0)})),i.M3((()=>n()),(()=>{i.hZ(m,"shape"===n().type||"text"===n().type?n():void 0)})),i.M3((()=>n()),(()=>{i.hZ(g,"video"===n().type?n():void 0)})),i.M3((()=>n()),(()=>{i.hZ(f,"audio"===n().type?n():void 0)})),i.M3((()=>(n(),s())),(()=>{i.hZ(v,n().states[s()].opacity??n().states.default.opacity)})),i.M3((()=>(c(),n())),(()=>{i.hZ(b,c().get(n().id)??[])})),i.M3((()=>i.Jt(b)),(()=>{i.hZ(S,i.Jt(b).some(D))})),i.M3((()=>(s(),n(),p())),(()=>{i.hZ(y,s()===n().initialState?p():void 0)})),i.iq(),i.Ts();const J=i.Xd((()=>null!=C()?-C():void 0));!function(e,t){i.VC(t,!1),i.kZ(e,Gl);const a=i.zg(),r=i.zg(),o=i.zg(),n=i.zg(),l=i.zg(),s=i.zg(),c=i.zg(),p=i.zg(),h=i.zg();let u=i._w(t,"item",8),m=i._w(t,"stateId",8),g=i._w(t,"zIndex",8,void 0),f=i._w(t,"noTransform",8,!1);const v=!(u().parentId===u().blockumentId)&&d();let b=i.zg(),S=i.zg();i.M3((()=>i.iT(u())),(()=>{i.hZ(a,u().states.default)})),i.M3((()=>(i.iT(u()),i.iT(m()))),(()=>{i.hZ(r,u().states[m()])})),i.M3((()=>(i.Jt(r),i.Jt(a))),(()=>{i.hZ(o,(i.Jt(r).width??i.Jt(a).width).value)})),i.M3((()=>(i.Jt(r),i.Jt(a))),(()=>{i.hZ(n,(i.Jt(r).height??i.Jt(a).height).value)})),i.M3((()=>(i.Jt(a),i.Jt(r))),(()=>{i.hZ(l,i.Jt(a).x.value+(i.Jt(r).xOffset??0))})),i.M3((()=>(i.Jt(a),i.Jt(r))),(()=>{i.hZ(s,i.Jt(a).y.value+(i.Jt(r).yOffset??0))})),i.M3((()=>(i.Jt(r),i.Jt(a),i.Jt(b),i.Jt(S))),(()=>{const e=i.Jt(r).rotation??i.Jt(a).rotation;if(null==i.Jt(b))i.hZ(S,e);else if(e!==i.Jt(b)){let t=e-i.Jt(b);t>180?t-=360:t<=-180&&(t+=360),i.hZ(S,i.Jt(S)+t)}i.hZ(b,e)})),i.M3((()=>(i.Jt(r),i.Jt(a))),(()=>{i.hZ(c,i.Jt(r).flipX??i.Jt(a).flipX)})),i.M3((()=>(i.Jt(r),i.Jt(a))),(()=>{i.hZ(p,i.Jt(r).flipY??i.Jt(a).flipY)})),i.M3((()=>(i.iT(f()),i.Jt(l),i.Jt(s),i.Jt(S),i.Jt(c),i.Jt(p))),(()=>{i.hZ(h,f()?void 0:`translate(${i.Jt(l)}px, ${i.Jt(s)}px) rotate(${i.Jt(S)}deg) scale(${i.Jt(c)?-1:1}, ${i.Jt(p)?-1:1})`)})),i.iq(),i.Ts();var y=jl();let x;i.ys(y,1,"mon-item-transform svelte-d0xz7b",null,{},{"--smooth-transitions":v});var C=i.jf(y);i.NI(C,t,"default",{},null),i.cL(y),i.vN((e=>{i.Jk(y,"data-item-id",e),x=i.hg(y,"",x,{width:`${i.Jt(o)??""}px`,height:`${i.Jt(n)??""}px`,transform:i.Jt(h),"z-index":g()})}),[()=>u().id.slice(0,5)],i.Xd),i.BC(e,y),i.uY()}(e,{get item(){return n()},get stateId(){return s()},get zIndex(){return i.Jt(J)},get noTransform(){return w()},children:(e,t)=>{var o=ns();let c,d;var p=i.jf(o);Nl(p,{get item(){return n()},get stateId(){return s()},get visible(){return h()},get clickable(){return i.Jt(S)}});var C=i.AD(p,2),w=e=>{var t=os();i.__(t,7,(()=>i.Jt(u)),(e=>e.id),((e,t,a,r)=>{var o=i.Im();ss(i.es(o),{get itemId(){return i.Jt(t).id},get index(){return i.Jt(a)}}),i.BC(e,o)})),i.cL(t),i.BC(e,t)};i.if(C,(e=>{i.Jt(u)&&e(w)}));var L=i.AD(C,2),M=e=>{!function(e,t){i.VC(t,!1),i.kZ(e,Kl);const a=i.zg(),r=i.zg();let o=i._w(t,"item",8),n=i._w(t,"stateId",8),l=i._w(t,"searchTerm",8),s=i._w(t,"linkRenderConfig",8);i.M3((()=>(i.iT(o()),i.iT(n()))),(()=>{i.hZ(a,o().states[n()].text?.json??o().states.default.text.json)})),i.M3((()=>(i.iT(l()),i.iT(s()),go)),(()=>{i.hZ(r,(e=>{let t=fo(l(),e);return s()?.externalLinksDisabled&&(t=go(s().isExternalLink,t)),t}))})),i.iq(),i.Ts(),Xl(e,{get item(){return o()},get stateId(){return n()},children:(e,t)=>{var o=Wl(),n=i.jf(o);i.XI(n,((e,t)=>((e,t)=>{function a({doc:t}){e.textContent="";const a=co.bP.fromJSON(uo,t);mo.serializeFragment(a.content,void 0,e)}return a(t),{update:a}})?.(e,t)),(()=>({doc:i.Jt(r)(i.Jt(a))}))),i.cL(o),i.BC(e,o)},$$slots:{default:!0}}),i.uY()}(e,{get item(){return i.Jt(m)},get stateId(){return s()},get linkRenderConfig(){return z.linkRenderConfig},get searchTerm(){return i.Jt(y)}})};i.if(L,(e=>{i.Jt(m)&&i.Hz(T,"$hideTextContentForId",a)!==x()&&e(M)}));var A=i.AD(L,2),B=e=>{!function(e,t){i.VC(t,!1),i.kZ(e,rs);let a=i._w(t,"item",8),o=i._w(t,"stateId",8);const n=l();let s=i.zg();function c(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:a().id}}))}function d(e){c(e.target,Ct.mediaPlay)}function p(e){c(e.target,Ct.mediaPause)}function h(e){c(e.target,Ct.mediaEnd)}i.M3((()=>(i.iT(a()),i.iT(o()))),(()=>{const e=(a().states[o()].videoSources??a().states.default.videoSources).default,t=e&&a().assets?.[e];i.hZ(s,t?n.resolvePath(t.path):void 0)})),i.iq(),i.Ts();var u=is(),m=i.jf(u);i.Eb(m,o,(e=>{var t=i.Im(),o=i.es(t),n=e=>{!function(e,t){i.VC(t,!1),i.kZ(e,as);const a=i.zg(),{a11yMediaPlay:o,a11yMediaPause:n,a11yGroupVideoPlayer:s}={a11yMediaPause:"Pause button label",a11yMediaPlay:"Play button label",a11yGroupVideoPlayer:"Video player"},c=!0;let d=i._w(t,"mediaSrc",8),p=i._w(t,"item",8),h=i._w(t,"onPlay",8,(()=>{})),u=i._w(t,"onPause",8,(()=>{})),m=i._w(t,"onEnded",8,(()=>{})),g=i.zg(),f=i.zg(),v=i.zg(),b=i.zg(),S=i.zg(),y=i.zg(),x=i.zg(0),C=i.zg(!0),I=i.zg(1),w=i.zg(0),z=i.zg(0),k=i.zg(!1),T=i.zg(!1),L=!1,M=1,A=i.zg(!1),B=i.zg(!1);const F=()=>{i.Jt(b)&&i.Jt(b).style.setProperty("--slider-progress-percent",Number(i.Jt(w))/i.Jt(x)*100+"%")},V=cl()((()=>{i.hZ(B,!1)}),2e3),{mediaElements:D}=l(),J=!!HTMLVideoElement.prototype.requestPictureInPicture;(0,r.onMount)((()=>(D?.set(p().id,i.Jt(f)),J&&i.Jt(f)?.addEventListener("leavepictureinpicture",O),i.Tk(v,i.Jt(v).value="0"),()=>{D?.delete(p().id),J&&i.Jt(f)?.removeEventListener("leavepictureinpicture",O)})));let R=i.zg(),Z=i.zg(),P=i.zg();const _=()=>{i.hZ(B,!0),V()},H=e=>{i.Jt(C)?(i.Jt(f).play().catch((()=>{})),e&&h()(e),i.hZ(A,!0)):(i.Jt(f).pause(),e&&u()(e))},$=async()=>{document.pictureInPictureElement?await document.exitPictureInPicture():(await i.Jt(f).requestPictureInPicture(),i.hZ(T,!0)),F()},O=()=>{i.hZ(T,!1)},E=async()=>{document.fullscreenElement?await document.exitFullscreen():await i.Jt(g).requestFullscreen()},N=e=>{i.hZ(z,e<0?Math.max(i.Jt(z)+e,0):Math.min(i.Jt(z)+e,i.Jt(x)))},j=e=>{i.hZ(I,e<0?Math.max(i.Jt(I)+e,0):Math.min(i.Jt(I)+e,1))};i.M3((()=>(i.Jt(x),i.Jt(z))),(()=>{i.hZ(R,Math.round(i.Jt(x)-i.Jt(z)))})),i.M3((()=>(i.Jt(R),Ui)),(()=>{i.hZ(Z,qi(i.Jt(R))),i.hZ(P,Ui(i.Jt(R)))})),i.M3((()=>i.iT(d())),(()=>{i.hZ(a,(e=>{const t=e.split(".").pop()?.toLowerCase();switch(t){case"webm":return"video/webm";case"mp4":return"video/mp4";case"ogg":case"ogm":case"ogv":return"video/ogg";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"mkv":return"video/x-matroska";default:return"application/octet-stream"}})(d()))})),i.iq(),i.Ts();var G=ts();let q;i.Jk(G,"aria-hidden",!1),i.Jk(G,"aria-label",s),i.Jk(G,"tabindex",0);var U=i.jf(G),Y=i.jf(U);i.cL(U),i.Lc(U,(e=>i.hZ(f,e)),(()=>i.Jt(f)));var X=i.AD(U,2),W=e=>{var t=Ql();bl(i.jf(t),{icon:"arc-play",size:"2rem"}),i.cL(t),i.f0("click",t,H),i.BC(e,t)};i.if(X,(e=>{i.Jt(C)&&e(W)}));var K=i.AD(X,2),Q=i.jf(K);i.Jk(Q,"tabindex",0);var ee=i.jf(Q);const te=i.Xd((()=>i.Jt(C)?"arc-play":"arc-pause"));bl(ee,{get icon(){return i.Jt(te)}}),i.cL(Q);var ae=i.AD(Q,2),ie=i.jf(ae);i.R0(ie),i.Jk(ie,"min",0),i.Jk(ie,"step",.01),i.Lc(ie,(e=>i.hZ(v,e)),(()=>i.Jt(v)));var re=i.AD(ie,2);i.Lc(re,(e=>i.hZ(b,e)),(()=>i.Jt(b))),i.cL(ae);var oe=i.AD(ae,2),ne=i.jf(oe);i.cL(oe);var le=i.AD(oe,2),se=e=>{var t=es(),a=i.jf(t);const r=i.Xd((()=>"arc-pip-"+(i.Jt(T)?"disable":"enable")));bl(a,{get icon(){return i.Jt(r)},size:"2rem"}),i.cL(t),i.f0("click",t,$),i.BC(e,t)};i.if(le,(e=>{J&&e(se)}));var ce=i.AD(le,2),de=i.jf(ce);const pe=i.Xd((()=>"arc-fullscreen-"+(i.Jt(k)?"disable":"enable")));bl(de,{get icon(){return i.Jt(pe)},size:"1.5rem"}),i.cL(ce);var he=i.AD(ce,2),ue=i.jf(he),me=i.jf(ue);const ge=i.Xd((()=>"arc-volume-"+(0===i.Jt(I)?"muted":i.Jt(I)<=.33?"low":i.Jt(I)<=.66?"mid":"high")));bl(me,{get icon(){return i.Jt(ge)},size:"1.8rem"}),i.cL(ue);var fe=i.AD(ue,2),ve=i.jf(fe);i.R0(ve),i.Lc(ve,(e=>i.hZ(S,e)),(()=>i.Jt(S)));var be=i.AD(ve,2);let Se;i.Lc(be,(e=>i.hZ(y,e)),(()=>i.Jt(y))),i.cL(fe),i.cL(he),i.cL(K),i.cL(G),i.Lc(G,(e=>i.hZ(g,e)),(()=>i.Jt(g))),i.vN((e=>{q=i.ys(G,1,"video-player svelte-1xrpo7n",null,q,e),U.volume=i.Jt(I),i.Jk(Y,"src",d()),i.Jk(Y,"type",i.Jt(a)),i.Jk(Q,"aria-label",i.Jt(C)?o:n),i.Jk(ie,"max",i.Jt(x)),i.Jk(oe,"aria-label",i.Jt(P)),i.j(ne,`-${i.Jt(Z)??""}`),i.to(ve,i.Jt(I)),Se=i.hg(be,"",Se,{"--slider-progress-percent":100*i.Jt(I)+"%"})}),[()=>({active:i.Jt(B),paused:i.Jt(C),fullscreen:i.Jt(k),touched:i.Jt(A)})],i.Xd),i.M$(U,(()=>i.Jt(z)),(e=>i.hZ(z,e))),i.IY("duration","durationchange",U,(e=>i.hZ(x,e))),i.Ej(U,(()=>i.Jt(C)),(e=>i.hZ(C,e))),i.f0("click",U,H),i.f0("ended",U,(function(...e){m()?.apply(this,e)})),i.f0("timeupdate",U,(e=>{const t=e.target,{currentTime:a}=t;L||(i.hZ(w,`${a}`),F())})),i.f0("click",Q,H),i.oJ(ie,(()=>i.Jt(w)),(e=>i.hZ(w,e))),i.f0("input",ie,(()=>{L||(L=!0),F()})),i.f0("change",ie,(e=>{L&&(L=!1);const t=Number(e.currentTarget?.value);i.hZ(z,t)})),i.f0("click",ce,E),i.f0("click",ue,(()=>{i.Jt(I)>0?(M=i.Jt(I),i.hZ(I,0)):i.hZ(I,M)})),i.f0("input",ve,(e=>{const t=e.target;i.hZ(I,parseFloat(t.value))})),i.f0("fullscreenchange",G,(e=>{i.hZ(k,!i.Jt(k)),F()})),i.f0("click",G,_),i.f0("keydown",G,(e=>{const t=i.Jt(x)<=20?.1*i.Jt(x):5,a={Enter:()=>H()," ":()=>H(),ArrowRight:()=>N(t),ArrowLeft:()=>N(-t),ArrowUp:()=>j(.1),ArrowDown:()=>j(-.1),f:E};e.target===e.currentTarget&&Object.keys(a).includes(e.key)&&(e.preventDefault(),e.stopPropagation(),a[e.key]())})),i.f0("mousemove",G,_),i.f0("focus",G,_),i.BC(e,G),i.Ek(t,"allowTabNavigation",c),i.uY({allowTabNavigation:c})}(e,{get mediaSrc(){return i.Jt(s)},get item(){return a()},onPlay:d,onPause:p,onEnded:h})};i.if(o,(e=>{i.Jt(s)&&e(n)})),i.BC(e,t)})),i.cL(u),i.vN((()=>i.Jk(u,"data-item-id",a().id))),i.BC(e,u),i.uY()}(e,{get item(){return i.Jt(g)},get stateId(){return s()}})};i.if(A,(e=>{i.Jt(g)&&e(B)}));var F=i.AD(A,2),D=e=>{!function(e,t){i.VC(t,!1),i.kZ(e,Ll);let a=i._w(t,"item",8),o=i._w(t,"stateId",8);const n=l();let s=i.zg();function c(e,t){e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{itemId:a().id}}))}function d(e){c(e.target,Ct.mediaPlay)}function p(e){c(e.target,Ct.mediaPause)}function h(e){c(e.target,Ct.mediaEnd)}i.M3((()=>(i.iT(a()),i.iT(o()))),(()=>{const e=(a().states[o()].audioSources??a().states.default.audioSources).default,t=e&&a().assets?.[e];i.hZ(s,t?n.resolvePath(t.path):void 0)})),i.iq(),i.Ts();var u=Tl(),m=i.jf(u);i.Eb(m,o,(e=>{var t=i.Im(),o=i.es(t),n=e=>{!function(e,t){i.VC(t,!1),i.kZ(e,kl);const{mediaElements:a}=l(),o=!0;let n=i._w(t,"item",8),s=i._w(t,"mediaSrc",8),c=i.zg(),d=i._w(t,"onPlay",8),p=i._w(t,"onPause",8),h=i._w(t,"onEnded",8);(0,r.onMount)((()=>(a?.set(n().id,i.Jt(c)),()=>{a?.delete(n().id)})));const{a11yMediaPlay:u,a11yMediaPause:m,a11yGroupAudioPlayer:g}={a11yMediaPause:"Pause button label",a11yMediaPlay:"Play button label",a11yGroupAudioPlayer:"Audio player"};let f=i.zg(),v=i.zg(),b=i.zg("0"),S=i.zg(),y=!1,x=i.zg(0),C=i.zg(0),I=i.zg(!0);const w=e=>{e.preventDefault(),e.stopPropagation(),i.hZ(I,!i.Jt(I))};let z=i.zg(),k=i.zg(),T=i.zg();const L=e=>{i.hZ(x,e<0?Math.max(i.Jt(x)+e,0):Math.min(i.Jt(x)+e,i.Jt(C)))};i.M3((()=>(i.Jt(S),i.Jt(b),i.Jt(C),i.Jt(x))),(()=>{i.Jt(S)&&i.Jt(S).style.setProperty("--slider-progress-percent",Number(i.Jt(b))/i.Jt(C)*100+"%"),i.hZ(z,Math.round(i.Jt(C)-i.Jt(x)))})),i.M3((()=>(i.Jt(z),Ui)),(()=>{i.hZ(k,qi(i.Jt(z),!1)),i.hZ(T,Ui(i.Jt(z)))})),i.iq(),i.Ts();var M=zl(),A=i.jf(M);i.Jk(A,"aria-hidden",!1),i.Jk(A,"aria-label",g),i.Jk(A,"tabindex",0);var B=i.jf(A);i.Jk(B,"tabindex",0);var F=i.jf(B);const V=i.Xd((()=>i.Jt(I)?"arc-play":"arc-pause"));bl(F,{get icon(){return i.Jt(V)}}),i.cL(B),i.Lc(B,(e=>i.hZ(f,e)),(()=>i.Jt(f)));var D=i.AD(B,2),J=i.jf(D);i.R0(J),i.Jk(J,"min",0),i.Lc(J,(e=>i.hZ(v,e)),(()=>i.Jt(v)));var R=i.AD(J,2);i.Lc(R,(e=>i.hZ(S,e)),(()=>i.Jt(S))),i.cL(D);var Z=i.AD(D,2),P=i.jf(Z,!0);i.cL(Z),i.cL(A);var _=i.AD(A,2);i.Lc(_,(e=>i.hZ(c,e)),(()=>i.Jt(c))),i.cL(M),i.vN((()=>{i.Jk(B,"aria-label",i.Jt(I)?u:m),i.Jk(J,"max",i.Jt(C)||void 0),i.Jk(Z,"aria-label",i.Jt(T)),i.j(P,i.Jt(k)),i.Jk(_,"src",s())})),i.f0("click",B,w),i.oJ(J,(()=>i.Jt(b)),(e=>i.hZ(b,e))),i.f0("input",J,(()=>{y||(y=!0),i.Jt(S).style.setProperty("--slider-progress-percent",Number(i.Jt(b))/i.Jt(C)*100+"%")})),i.f0("change",J,(e=>{y&&(y=!1);const t=Number(e.currentTarget?.value);i.hZ(x,t)})),i.f0("keydown",A,(e=>{const t=e=>{e.preventDefault(),e.stopPropagation(),L(5)},a=e=>{e.preventDefault(),e.stopPropagation(),L(-5)};e.target===i.Jt(f)||e.target===i.Jt(v)?("Enter"===e.key||" "===e.key?w(e):e.stopPropagation(),e.target===i.Jt(v)&&("ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"===e.key||"ArrowDown"===e.key?a(e):e.stopPropagation())):"Enter"===e.key||" "===e.key?w(e):"ArrowRight"===e.key||"ArrowUp"===e.key?t(e):"ArrowLeft"!==e.key&&"ArrowDown"!==e.key||a(e)})),i.M$(_,(()=>i.Jt(x)),(e=>i.hZ(x,e))),i.IY("duration","durationchange",_,(e=>i.hZ(C,e))),i.Ej(_,(()=>i.Jt(I)),(e=>i.hZ(I,e))),i.f0("timeupdate",_,(e=>{const t=e.target,{currentTime:a}=t;y||i.hZ(b,`${a}`)})),i.f0("loadedmetadata",_,(e=>{const t=e.target;(t.duration===1/0||isNaN(t.duration))&&(t.currentTime=1e101,t.ontimeupdate=()=>{t.ontimeupdate=null,t.currentTime=0})})),i.f0("ended",_,(function(...e){h()?.apply(this,e)})),i.f0("pause",_,(function(...e){p()?.apply(this,e)})),i.f0("play",_,(function(...e){d()?.apply(this,e)})),i.BC(e,M),i.Ek(t,"allowTabNavigation",o),i.uY({allowTabNavigation:o})}(e,{get item(){return a()},get mediaSrc(){return i.Jt(s)},onPlay:d,onPause:p,onEnded:h})};i.if(o,(e=>{i.Jt(s)&&e(n)})),i.BC(e,t)})),i.cL(u),i.vN((()=>i.Jk(u,"data-item-id",a().id))),i.BC(e,u),i.uY()}(e,{get item(){return i.Jt(f)},get stateId(){return s()}})};i.if(F,(e=>{i.Jt(f)&&e(D)})),i.cL(o),i.XI(o,((e,t)=>k?.(e,t)),(()=>({item:n(),triggers:i.Jt(b)}))),i.vN((e=>{c=i.ys(o,1,"mon-item svelte-1qzkifk",null,c,e),o.inert=!h(),i.Jk(o,"aria-hidden",!h()),d=i.hg(o,"",d,{opacity:i.Jt(v)})}),[()=>({"--smooth-transitions":V,"--clip":I(),"--hidden":!h()})],i.Xd),i.BC(e,o)},$$slots:{default:!0}}),i.uY(),o()}var cs=i.vs('<div class="ui-theme svelte-12lh38a"><!></div>');const ds={hash:"svelte-12lh38a",code:"\n  /* Note that :root is important for elements injected into `body`\n  to have access to these vars. */:root,\n  :host {--mon-color-border: var(--arc-color-border-standard);--mon-color-border-selected: var(--arc-color-brand-root);--mon-color-primary: var(--arc-color-blue-600);--mon-color-secondary: var(--arc-color-blue-500);--mon-opacity-inert: var(--arc-alpha-50);--mon-color-input: var(--arc-color-alpha-black-03);\n\n    /**\n      Hardcoded hex value to align with Rise's current behavior for the time being. May be worthwhile to\n      look into a more robust auto-contrast solution in the future.\n    */--mon-color-text-selection: #b5d6fd;\n\n    /*\n     * Some z-indexes for things that may occupy a shared stacking context.\n     * When possible, order problems should be resolved by using isolation instead.\n     */--mon-z-index-select: 3000;--mon-z-index-popover: 3100;--mon-z-index-context-menu: 3200;--mon-z-index-tooltip: 4000;--mon-z-index-toast: 5000;--mon-input-padding: var(--arc-space-0-75) var(--arc-space-1);--mon-input-height: 3.2rem;--mon-focus-outline-width: 0.2rem;--mon-input-hover-box-shadow: inset 0 0 0 0.1rem\n      var(--arc-color-border-stark);--mon-input-focus-box-shadow: inset 0 0 0 var(--mon-focus-outline-width)\n      var(--arc-color-border-focus);--mon-button-hover-background: var(--arc-color-alpha-black-05);--mon-button-active-background: var(--arc-color-alpha-black-10);}.ui-theme.svelte-12lh38a {\n    /*\n    TODO: Remove this forced font once Rise stops poisoning art-design-system-tokens.\n    See https://github.com/articulate/mondrian/issues/1965, https://github.com/articulate/rise-frontend/pull/7589\n    */--arc-font-family-body: Inter, system-ui, sans-serif;font-family:var(--arc-font-family-body);font-size:var(--arc-font-size-14);\n\n    /**\n    Short term fix for CBs which render in Rise RTL lessons.\n    More details: https://github.com/articulate/mondrian/issues/3172\n    */direction:ltr;}.ui-theme.svelte-12lh38a *,\n  .ui-theme.svelte-12lh38a *::before,\n  .ui-theme.svelte-12lh38a *::after {box-sizing:border-box;\n    /** TODO: deprecate once we determine how this should be applied globally as part of\n      * the design system reset stylesheet in a way that is compatible with all the fonts\n      * we plan to support in i18n contexts */font-synthesis:none;}.ui-theme.svelte-12lh38a :where(button, input, textarea) {font-family:inherit;}.mon-sr-only {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}:where(.mon-focusable) {border-radius:var(--arc-border-radius-sm);}:where(.mon-focusable:not(:disabled, :has(:disabled)):hover) {box-shadow:inset 0 0 0 0.1rem var(--arc-color-neutral-100);}:where(.mon-focusable:is(:focus-visible, :has(:focus-visible))) {box-shadow:var(--mon-input-focus-box-shadow);}\n\n  /* TODO: Consider moving this utility class to own file */.mon-visually-hidden {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}\n\n  /** Custom tiptap overrides intended to be enforced by Mondrian specifically */.tiptap {font-family:var(--mon-theme-font-body);min-height:100%;width:100%;}.tiptap :is(h1, h2, h3, h4, h5, h6) {font-family:var(--mon-theme-font-heading);font-size:inherit;font-weight:inherit;}.tiptap :is(p, h1, h2, h3, h4, h5, h6) {margin:0;}.tiptap > :last-child {\n    /* The last paragraph/heading should have no space-after at all.\n    Since the individual space-after values are applied directly as style attributes, this needs\n    to be high specificity to override */margin-block-end:0 !important;}.tiptap strong {font-weight:bold;}.tiptap em {font-style:italic;}.tiptap s {text-decoration:line-through;}.tiptap u {text-decoration:underline;}\n\n  /** To align with Rise */.tiptap a {color:var(--color-theme);text-decoration:none;}.tiptap a > span {text-decoration:underline;}\n\n  /** Copy of styles that tiptap normally injects into the document head. We render in a shadow root\n    * so default injection doesn't work for us. So we just instead reproduce the rules in our UiTheme styles\n    * which do get rendered within our shadow root wrapper. \n    * TODO: Engage tiptap team about exporting their JS styles so we dont have to do stuff like this\n    */.ProseMirror {position:relative;word-wrap:break-word;white-space:pre-wrap;white-space:break-spaces;font-variant-ligatures:none;font-feature-settings:'liga' 0; /* the above doesn't seem to work in Edge */}.ProseMirror [contenteditable='false'] {white-space:normal;}.ProseMirror [contenteditable='false'] [contenteditable='true'] {white-space:pre-wrap;}.ProseMirror pre {white-space:pre-wrap;}img.ProseMirror-separator {display:inline !important;border:none !important;margin:0 !important;width:1px !important;height:1px !important;}.ProseMirror-gapcursor {display:none;pointer-events:none;position:absolute;margin:0;}.ProseMirror-gapcursor:after {content:'';display:block;position:absolute;top:-2px;width:20px;border-top:1px solid black;\n    animation: svelte-12lh38a-ProseMirror-cursor-blink 1.1s steps(2, start) infinite;}\n\n  @keyframes svelte-12lh38a-ProseMirror-cursor-blink {\n    to {\n      visibility: hidden;\n    }\n  }.ProseMirror-hideselection *::selection {background:transparent;}.ProseMirror-hideselection *::-moz-selection {background:transparent;}.ProseMirror-hideselection * {caret-color:transparent;}.ProseMirror-focused .ProseMirror-gapcursor {display:block;}.tippy-box[data-animation='fade'][data-state='hidden'] {opacity:0;}"},ps=(e,{item:t,triggers:a})=>{function i(i,r={}){a.filter((e=>e.event===i)).forEach((a=>{!function(e,t,a){t.dispatchEvent(new CustomEvent("trigger",{detail:a,bubbles:!0}))}(0,e,{itemId:t.id,triggerId:a.id,...r})}))}const r=[...new Set(a.map((e=>e.event)))].map((t=>{switch(t){case Ct.hover:{let a=!1;return[Yi("mouseenter",e,(e=>{a||(a=!0,i(t,{hovered:a}))})),Yi("mouseleave",e,(e=>{a&&(a=!1,i(t,{hovered:a}))}))]}case Ct.click:return[Yi("click",e,(e=>{const a=window.getSelection();"Range"!==a?.type&&i(t)})),Yi("keyup",e,(e=>{["Space","Enter"].includes(e.code)&&e.target===document.activeElement&&i(t)}))];case Ct.mediaPlay:case Ct.mediaPause:case Ct.mediaEnd:return Yi(t,e,(e=>{i(t)}));default:return Yi(t,e,(()=>{i(t)}))}})).flat(2).filter(Boolean);return{destroy(){r.forEach((e=>{e()}))}}},hs=(e,{items:t,currentStates:a,currentVisibles:i,triggers:r,mediaElements:o})=>{const n=bo()(r,"sourceId"),l={[It](e,i,r){const o="self"===e.targetId[0]?i:t[e.targetId[0]];!1===r.hovered?a.get(o.id)?.revert(e.targetState):a.get(o.id)?.set(e.targetState)},[wt](e,a,r){e.targetId.forEach((o=>{const n="self"===o?a:t[o];!1===r.hovered?i.get(n.id)?.set(!e.targetVisibility):i.get(n.id)?.set(e.targetVisibility)}))},[zt](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a?.pause()}))},[kt](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a?.play().catch((()=>{}))}))},[Tt](e,t){e.targetId.forEach((e=>{const a=o?.get("self"===e?t.id:e);a&&(a.currentTime=a.duration,a.pause())}))},[Lt](e,t){}},s=Yi("trigger",e,(e=>{const{itemId:a,triggerId:i,...r}=e.detail,o=t[a];if(!o)throw new Error(`Could not execute trigger ${i} on item ${a} because the item could not be found.`);const s=n[o.id]?.find((e=>e.id===i));if(!s||!s.actions.length)throw new Error(`Could not execute trigger ${i} on item ${a} because the trigger could not be found.`);s.actions.forEach((e=>{const t=l[e.type];if(!t)throw new Error(`Could not execute trigger ${i} on item ${a} because an appropriate handler for its '${e.type}' action could not be found.`);t(e,o,r)}))}));return{destroy(){s()}}};var us=i.vs("<div> </div>"),ms=i.vs('<div class="preview svelte-1cumtsm"><div class="width-gauge svelte-1cumtsm"></div> <div class="item-wrapper svelte-1cumtsm"><!></div></div>'),gs=i.vs('<div class="item-wrapper svelte-1cumtsm"><!></div>'),fs=i.vs("<!> <!>",1);const vs={hash:"svelte-1cumtsm",code:".preview.svelte-1cumtsm {\n    /* Stacking context so Rise doesn't need to know about Mondrian z-indexes */isolation:isolate;width:100%;}.item-wrapper.svelte-1cumtsm {transform-origin:0 0;position:relative;.preview:where(.svelte-1cumtsm) & {margin:0 auto;}}.width-gauge.svelte-1cumtsm {width:100%;}"};var bs=a(6170),Ss=a.n(bs),ys=a(4535);const xs=((e,t={width:"100%"},a="div")=>i=>{const r=(0,bs.useRef)(null),o=(0,bs.useRef)(null);return(0,bs.useEffect)((()=>{const t=r.current.shadowRoot??r.current.attachShadow({mode:"open"});return o.current=(0,ys.YU)({component:e,target:t,props:i}),()=>{o.current?.$destroy()}}),[]),(0,bs.useEffect)((()=>{o.current?.$set(i)}),[i]),Ss().createElement(a,{ref:r,style:t,"data-mondrian-shadow-root-host":!0})})((function(e,t){i.VC(t,!1),i.kZ(e,vs);const[a,d]=i.DZ(),h=()=>i.Hz(A,"$itemsById",a),u=()=>i.Hz(i.Jt(m),"$rootItemCurrentStateId",a),m=i.zg(),g=i.zg(),f=i.zg(),v=i.zg();let b=i._w(t,"manifest",8),S=i._w(t,"blockumentId",8),y=i._w(t,"prefetch",8,!0),x=i._w(t,"searchTerm",8,void 0),C=i._w(t,"runtimeInterface",8,void 0),I=i._w(t,"linkRenderConfig",24,o),w=i._w(t,"autoSize",8,!0);(0,r.setContext)(c,!0);let z=i.zg(),k=i.zg();const T=function(){const e=new Map;return{...(0,Ni.writable)(e),add:(t,a)=>(e.has(t)||e.set(t,function(e){let t,a,i;e.subscribe((e=>{t=e}));const r=(0,Ni.writable)(t);r.subscribe((e=>{a=i??t,i=e}));const o={...r,revert(e){i===e&&o.set(a)},reset(){o.set(t)}};return o}(a)),e.get(t)),get(t){if(!e.has(t))throw new Error(`No state found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),L=function(){const e=new Map;return{...(0,Ni.writable)(e),upsert(t,a){if(!e.has(t)){const i=function(e){const t={...(0,Ni.writable)(e),show(){t.set(!0)},hide(){t.set(!1)},reset(){t.set(e)}};return t}(a);return e.set(t,i),i}const i=e.get(t);return i.set(a),i},get(t){if(!e.has(t))throw new Error(`No visibility found for item ${t}`);return e.get(t)},resetAll(){[...e.values()].forEach((e=>{e.reset()}))}}}(),M=(0,Ni.writable)(new Map),A=(0,Ni.writable)({}),B=(0,Ni.derived)(A,(e=>Object.values(e)));(0,Ni.derived)([M,B],(([e,t])=>({triggers:e,items:t}))).subscribe((({items:e})=>{e.forEach((e=>{T.add(e.id,(0,Ni.readable)(e.initialState)),L.upsert(e.id,e.initialVisible)})),L.resetAll(),T.resetAll()}));const F=new Map,V=(0,Ni.writable)(x()),D={getTriggersBySourceId:()=>(0,Ni.readonly)(M),getItem:e=>(0,Ni.derived)(A,(t=>t[e])),getState:e=>T.get(e),getVisible:e=>L.get(e),searchTerm:(0,Ni.readonly)(V),bindTriggers:ps,mediaElements:F,hideTextContentForId:(0,Ni.readable)(null),resolvePath:e=>(C()?.resolvePath??p)(e),linkRenderConfig:I()};var J;J=D,(0,r.setContext)(n,J);let R=i.zg();(0,r.onMount)((()=>{L.resetAll();const e=new ResizeObserver((()=>{i.Jt(R)&&P()}));return i.Jt(R)&&e.observe(i.Jt(R)),()=>{e.disconnect()}}));let Z=i.zg(1);function P(){if(!(i.Jt(k)&&i.Jt(R)&&u()&&w()&&i.Jt(f)&&i.Jt(v)))return;const e=i.Jt(R).offsetWidth;i.hZ(Z,Math.min(1,e/i.Jt(f)))}let _=i.zg(),H=i.zg(),$=i.zg("off");const O=cl()((e=>{i.hZ($,e?"polite":"off")}),100,{maxWait:500,trailing:!0});function E(){O(!0)}function N(){O(!1)}i.M3((()=>(i.iT(b()),i.iT(S()),i.Jt(z),So)),(()=>{const e=function(e,t){const a={},{items:i}=e;if(i)for(const e of Object.values(i))e.blockumentId===t&&(a[e.id]=structuredClone(e));return a}(b(),S());i.hZ(z,b().blockuments?.[S()]),i.hZ(k,i.Jt(z)?.children[0]?.id),M.set(So(i.Jt(z)?.triggers??[])),A.set(e)})),i.M3((()=>i.iT(x())),(()=>{V.set(x())})),i.M3((()=>i.Jt(k)),(()=>{i.QK(i.hZ(m,i.Jt(k)?T.get(i.Jt(k)):void 0),"$rootItemCurrentStateId",a)})),i.M3((()=>(i.Jt(k),h(),u(),so)),(()=>{i.hZ(g,i.Jt(k)&&h()[i.Jt(k)]&&u()?so(h()[i.Jt(k)],u(),["width","height"]):void 0)})),i.M3((()=>i.Jt(g)),(()=>{i.hZ(f,i.Jt(g)?.width.value)})),i.M3((()=>i.Jt(g)),(()=>{i.hZ(v,i.Jt(g)?.height.value)})),i.M3((()=>(i.Jt(_),i.Jt(f),i.Jt(H),i.Jt(v))),(()=>{i.Jt(_)===i.Jt(f)&&i.Jt(H)===i.Jt(v)||(i.hZ(_,i.Jt(f)),i.hZ(H,i.Jt(v)),P())})),i.iq(),i.Ts(),function(e,t){i.kZ(e,ds);var a=cs(),r=i.jf(a);i.NI(r,t,"default",{},null),i.cL(a),i.BC(e,a)}(e,{children:(e,t)=>{var o=fs(),n=i.es(o),c=e=>{!function(e,t){i.VC(t,!1);const a=i.zg();let r=i._w(t,"items",8);const o=l();i.M3((()=>i.iT(r())),(()=>{i.hZ(a,new Map(r().flatMap((e=>Object.values(e.assets??{}))).map((e=>[e.id,e]))))})),i.iq(),i.Ts(),i.d5((e=>{var t=i.Im(),r=i.es(t);i.__(r,1,(()=>i.Jt(a).values()),(e=>e.id),((e,t)=>{var a=s();i.vN((e=>i.Jk(a,"href",e)),[()=>o.resolvePath(i.Jt(t).path)],i.Xd),i.BC(e,a)})),i.BC(e,t)})),i.uY()}(0,{get items(){return i.Hz(B,"$itemsList",a)}})};i.if(n,(e=>{y()&&e(c)}));var d=i.AD(n,2),p=e=>{var t=us(),a=i.jf(t);i.cL(t),i.vN((()=>i.j(a,`Block ${S()??""} could not be loaded`))),i.BC(e,t)},u=e=>{!function(e,t){i.VC(t,!1),i.kZ(e,wl);const a=function(){const e=new Set;return(0,r.setContext)("mondrian-suspense",e),e}();let o=i.zg(!0);(0,r.onMount)((()=>{Promise.all(a).then((()=>{i.hZ(o,!1)}))})),i.Ts();var n=Il();let l;var s=i.jf(n);i.NI(s,t,"default",{get isLoading(){return i.Jt(o)}},null),i.cL(n),i.vN((e=>l=i.ys(n,1,"suspense svelte-1i06x9o",null,l,e)),[()=>({"--loading":i.Jt(o)})],i.Xd),i.BC(e,n),i.uY()}(e,{children:(e,t)=>{var a=i.Im(),r=i.es(a),o=e=>{var t=ms();let a;var r=i.jf(t);i.Lc(r,(e=>i.hZ(R,e)),(()=>i.Jt(R)));var o=i.AD(r,2);let n;ss(i.jf(o),{get itemId(){return i.Jt(k)},noTransform:!0,clip:!0}),i.cL(o),i.QZ((()=>i.f0("focus",o,E))),i.QZ((()=>i.f0("blur",o,N))),i.QZ((()=>i.f0("focusin",o,E))),i.QZ((()=>i.f0("mouseover",o,E))),i.QZ((()=>i.f0("mouseout",o,N))),i.QZ((()=>i.f0("focusout",o,N))),i.XI(o,((e,t)=>hs?.(e,t)),(()=>({items:h(),currentStates:T,currentVisibles:L,triggers:i.Jt(z).triggers,mediaElements:F}))),i.cL(t),i.vN((()=>{a=i.hg(t,"",a,{height:(i.Jt(v)??500)*i.Jt(Z)+"px"}),i.Jk(o,"aria-live",i.Jt($)),n=i.hg(o,"",n,{transform:`scale(${i.Jt(Z)??""})`,width:`${i.Jt(f)??""}px`,height:`${i.Jt(v)??""}px`})})),i.BC(e,t)},n=e=>{var t=gs();let a;ss(i.jf(t),{get itemId(){return i.Jt(k)},clip:!0}),i.cL(t),i.QZ((()=>i.f0("focus",t,E))),i.QZ((()=>i.f0("blur",t,N))),i.QZ((()=>i.f0("focusin",t,E))),i.QZ((()=>i.f0("mouseover",t,E))),i.QZ((()=>i.f0("mouseout",t,N))),i.QZ((()=>i.f0("focusout",t,N))),i.XI(t,((e,t)=>hs?.(e,t)),(()=>({items:h(),currentStates:T,currentVisibles:L,triggers:i.Jt(z).triggers,mediaElements:F}))),i.vN((()=>{i.Jk(t,"aria-live",i.Jt($)),a=i.hg(t,"",a,{width:`${i.Jt(f)??""}px`,height:`${i.Jt(v)??""}px`})})),i.BC(e,t)};i.if(r,(e=>{w()?e(o):e(n,!1)})),i.BC(e,a)},$$slots:{default:!0}})};i.if(d,(e=>{void 0===i.Jt(z)||void 0===i.Jt(k)?e(p):e(u,!1)})),i.BC(e,o)},$$slots:{default:!0}}),i.uY(),d()})),Cs=e=>{const{manifest:t,...a}=e,i=(0,bs.useMemo)((()=>{try{return function(e){const t=function(e){const t=Ft.parse(e);let a,i;function r(e){if(e)for(const{id:t,_v:r}of Object.values(e))if(null==a)a=r,i=t;else if(a!==r)throw new Error(`Multiple versions found in manifest: { id: ${i}, _v: ${a} } and { id: ${t}, _v: ${r} }`)}return r(t.blockuments),r(t.items),a??21}(e);return 21===t?ci.parse(e):function(e,t){return Mt(function(e,t){const a=At(e+1,22),i=hi.filter((({version:e})=>a.includes(e)));return Bt(i,"version")}(e).map((({InputSchema:e,upgrade:t,OutputSchema:a})=>Mt(e.parse,t,a.parse))))}(t)(e)}(t)}catch{}}),[t]);return i?Ss().createElement(xs,{manifest:i,...a}):null},Is=["shape","text"],ws=(e,t)=>{if(t.content)return t.content.reduce(((t,a)=>t+ws(e,a)),0);if("text"===t.type&&t.text){const a=new RegExp(ho()(e),"gi"),i=t.text.match(a);return i?i.length:0}return 0},zs=(e,t,a)=>{if(t){if("children"in t)return t?.children.reduce(((t,i)=>t+zs(e,a[i.id],a)),0);if((e=>Is.includes(e.type))(t)){const a=t.states[t.initialState].text;if(a)return ws(e,a.json)}}return 0},ks=(e,t,a)=>t.reduce(((t,i)=>(t[i.id]=a.items?i.items.reduce(((t,i)=>{const r=Object.values(a.blockuments||{}).find((e=>e.id===i.blockumentId));return r?t+zs(e,a.items?.[r.children[0].id],a.items||{}):t}),0):0,t)),{})}}]);