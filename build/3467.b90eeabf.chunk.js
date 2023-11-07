"use strict";(self.webpackChunkkodelabs_backend=self.webpackChunkkodelabs_backend||[]).push([[3467],{3414:(K,M,e)=>{e.d(M,{Z:()=>R});var t=e(27279),T=e(27875),c=e(10701),o=e(48102),s=e(2309),a=e(59082),d=e(76827),g=e(70627),n=e.n(g),m=e(61020),E=e(84352),i=e(53532);const l=(O,v,N,r)=>{const[U,A]=(0,t.useState)(!1),I=(0,s.lm)(),{post:W}=(0,s.kY)(),{formatAPIError:k}=(0,s.So)();return{regenerateData:async()=>{try{const{data:{data:{accessKey:h}}}=await W(`${O}${v}/regenerate`);A(!1),N(h)}catch(h){A(!1),r?r(h):h instanceof i.d7&&I({type:"warning",message:k(h)})}},isLoadingConfirmation:U}},u=({onRegenerate:O,idToRegenerate:v,backUrl:N,onError:r})=>{const{formatMessage:U}=(0,m.Z)(),[A,I]=(0,t.useState)(!1),{regenerateData:W,isLoadingConfirmation:k}=l(N,v,O,r),Z=async()=>{W(),I(!1)};return t.createElement(t.Fragment,null,t.createElement(o.z,{startIcon:t.createElement(E.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>I(!0),name:"regenerate"},U({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(s.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(E.Z,null),isConfirmButtonLoading:k,isOpen:A,onToggleDialog:()=>I(!1),onConfirm:Z,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};u.defaultProps={onRegenerate(){},onError:void 0},u.propTypes={onRegenerate:n().func,idToRegenerate:n().oneOfType([n().number,n().string]).isRequired,backUrl:n().string.isRequired,onError:n().func};const y=u,p=({title:O,token:v,setToken:N,canEditInputs:r,canRegenerate:U,isSubmitting:A,backUrl:I,regenerateUrl:W,onErrorRegenerate:k})=>{const{formatMessage:Z}=(0,m.Z)(),h=j=>{N({...v,accessKey:j})};return t.createElement(T.T,{title:v?.name||Z(O),primaryAction:r?t.createElement(c.k,{gap:2},U&&v?.id&&t.createElement(y,{backUrl:W,onRegenerate:h,idToRegenerate:v?.id,onError:k}),t.createElement(o.z,{disabled:A,loading:A,startIcon:t.createElement(a.Z,null),type:"submit",size:"S"},Z({id:"global.save",defaultMessage:"Save"}))):U&&v?.id&&t.createElement(y,{onRegenerate:h,idToRegenerate:v?.id,backUrl:W}),navigationAction:t.createElement(s.rU,{startIcon:t.createElement(d.Z,null),to:I},Z({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};p.propTypes={token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().oneOfType([n().number,n().string]),name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),canEditInputs:n().bool.isRequired,canRegenerate:n().bool.isRequired,setToken:n().func.isRequired,isSubmitting:n().bool.isRequired,backUrl:n().string.isRequired,title:n().shape({id:n().string,label:n().string}).isRequired,regenerateUrl:n().string.isRequired,onErrorRegenerate:n().func},p.defaultProps={token:void 0,onErrorRegenerate:void 0};const R=p},89982:(K,M,e)=>{e.d(M,{Z:()=>m});var t=e(27279),T=e(5627),c=e(78955),o=e(32370),s=e(70627),a=e.n(s),d=e(61020),g=e(51352);const n=({token:E,errors:i,values:l,onChange:u,isCreating:y})=>{const{formatMessage:p}=(0,d.Z)();return t.createElement(t.Fragment,null,t.createElement(T.P,{name:"lifespan",label:p({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:l.lifespan!==null?l.lifespan:"0",error:i.lifespan?p(i.lifespan?.id?i.lifespan:{id:i.lifespan,defaultMessage:i.lifespan}):null,onChange:R=>{u({target:{name:"lifespan",value:R}})},required:!0,disabled:!y,placeholder:"Select"},t.createElement(c.W,{value:"604800000"},p({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(c.W,{value:"2592000000"},p({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(c.W,{value:"7776000000"},p({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(c.W,{value:"0"},p({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Z,{variant:"pi",textColor:"neutral600"},!y&&`${p({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,g.IX)(E?.createdAt,parseInt(l.lifespan,10))}`))};n.propTypes={errors:a().shape({lifespan:a().string}),onChange:a().func.isRequired,values:a().shape({lifespan:a().oneOfType([a().number,a().string])}).isRequired,isCreating:a().bool.isRequired,token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().string,name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string})},n.defaultProps={errors:{},token:{}};const m=n},81384:(K,M,e)=>{e.d(M,{Z:()=>m});var t=e(27279),T=e(4987),c=e(2309),o=e(78031),s=e(5368),a=e(70627),d=e.n(a),g=e(61020);const n=({token:E,tokenType:i})=>{const{formatMessage:l}=(0,g.Z)(),u=(0,c.lm)(),{trackUsage:y}=(0,c.rS)(),{copy:p}=(0,c.VP)(),R=O=>async()=>{await p(O)&&(y("didCopyTokenKey",{tokenType:i}),u({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(c.Y_,{endAction:E&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(T.h,{label:l({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:R(E),noBorder:!0,icon:t.createElement(o.Z,null),style:{padding:0,height:"1rem"}})),title:E||l({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:l(E?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(s.Z,null),iconBackground:"neutral100"})};n.defaultProps={token:null},n.propTypes={token:d().string,tokenType:d().string.isRequired};const m=n},37651:(K,M,e)=>{e.d(M,{Z:()=>d});var t=e(27279),T=e(39708),c=e(70627),o=e.n(c),s=e(61020);const a=({errors:g,values:n,onChange:m,canEditInputs:E})=>{const{formatMessage:i}=(0,s.Z)();return t.createElement(T.g,{label:i({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:g.description?i(g.description?.id?g.description:{id:g.description,defaultMessage:g.description}):null,onChange:m,disabled:!E},n.description)};a.propTypes={errors:o().shape({description:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({description:o().string}).isRequired},a.defaultProps={errors:{}};const d=a},72028:(K,M,e)=>{e.d(M,{Z:()=>d});var t=e(27279),T=e(12881),c=e(70627),o=e.n(c),s=e(61020);const a=({errors:g,values:n,onChange:m,canEditInputs:E})=>{const{formatMessage:i}=(0,s.Z)();return t.createElement(T.o,{name:"name",error:g.name?i(g.name?.id?g.name:{id:g.name,defaultMessage:g.name}):null,label:i({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:m,value:n.name,disabled:!E,required:!0})};a.propTypes={errors:o().shape({name:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({name:o().string}).isRequired},a.defaultProps={errors:{}};const d=a},32381:(K,M,e)=>{e.d(M,{Z:()=>g});var t=e(27279),T=e(5627),c=e(78955),o=e(70627),s=e.n(o),a=e(61020);const d=({name:n,errors:m,values:E,onChange:i,canEditInputs:l,options:u,label:y})=>{const{formatMessage:p}=(0,a.Z)();return t.createElement(T.P,{name:n,label:p({id:y.id,defaultMessage:y.defaultMessage}),value:E&&E[n],error:m[n]?p(m[n]?.id?m[n]:{id:m[n],defaultMessage:m[n]}):null,onChange:i,placeholder:"Select",required:!0,disabled:!l},u&&u.map(({value:R,label:O})=>t.createElement(c.W,{key:R,value:R},p(O))))};d.propTypes={name:s().string,options:s().arrayOf(s().shape({label:s().shape({id:s().string,defaultMessage:s().string}),value:s().string})),errors:s().shape({type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({type:s().string}).isRequired,label:s().shape({id:s().string,defaultMessage:s().string}).isRequired},d.defaultProps={name:"type",errors:{},options:[]};const g=d},81966:(K,M,e)=>{e.d(M,{Z:()=>t,f:()=>T});const t="api-token",T="transfer-token"},51352:(K,M,e)=>{e.d(M,{IX:()=>s,fK:()=>n,mk:()=>E});var t=e(84260),T=e(1851),c=e(90765);const s=(i,l,u="en")=>{if(l&&typeof l=="number"){const y=l/24/60/60/1e3;return(0,t.Z)((0,T.Z)(new Date(i),y),"PPP",{locale:c[u]})}return"Unlimited"};var a=e(2309),d=e(47853);const n=d.Ry().shape({name:d.Z_(a.I0.string).max(100).required(a.I0.required),type:d.Z_(a.I0.string).oneOf(["read-only","full-access","custom"]).required(a.I0.required),description:d.Z_().nullable(),lifespan:d.Rx().integer().min(0).nullable().defined(a.I0.required)}),E=i=>{const l={allActionsIds:[],permissions:[]};return l.permissions=Object.keys(i).map(u=>({apiId:u,label:u.split("::")[1],controllers:Object.keys(i[u].controllers).map(y=>({controller:y,actions:i[u].controllers[y].map(p=>{const R=`${u}.${y}.${p}`;return u.includes("api::")&&l.allActionsIds.push(R),{action:p,actionId:R}}).flat()})).flat()})),l}},43467:(K,M,e)=>{e.d(M,{Z:()=>ne});var t=e(27279),T=e(73354),c=e(74758),o=e(10701),s=e(2309),a=e(71563),d=e(61020),g=e(40464),n=e(49402),m=e(51447),E=e(96854),i=e(36364),l=e(81966),u=e(3414),y=e(81384),p=e(93415),R=e(32370),O=e(23298),v=e(74577),N=e(70627),r=e.n(N),U=e(89982),A=e(37651),I=e(72028),W=e(32381);const k=({errors:L,onChange:S,canEditInputs:F,isCreating:C,values:x,transferToken:P})=>{const{formatMessage:$}=(0,d.Z)(),Q=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return t.createElement(p.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(R.Z,{variant:"delta",as:"h2"},$({id:"global.details",defaultMessage:"Details"})),t.createElement(O.r,{gap:5},t.createElement(v.P,{key:"name",col:6,xs:12},t.createElement(I.Z,{errors:L,values:x,canEditInputs:F,onChange:S})),t.createElement(v.P,{key:"description",col:6,xs:12},t.createElement(A.Z,{errors:L,values:x,canEditInputs:F,onChange:S})),t.createElement(v.P,{key:"lifespan",col:6,xs:12},t.createElement(U.Z,{isCreating:C,errors:L,values:x,onChange:S,token:P})),t.createElement(v.P,{key:"permissions",col:6,xs:12},t.createElement(W.Z,{name:"permissions",values:x,errors:L,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:z=>{S({target:{name:"permissions",value:z}})},options:Q,canEditInputs:F})))))};k.propTypes={errors:r().shape({name:r().string,description:r().string,lifespan:r().string,type:r().string}),onChange:r().func.isRequired,canEditInputs:r().bool.isRequired,values:r().shape({name:r().string,description:r().string,lifespan:r().oneOfType([r().number,r().string]),type:r().string}).isRequired,isCreating:r().bool.isRequired,transferToken:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},k.defaultProps={errors:{},transferToken:{}};const Z=k;var h=e(27875),j=e(48102),q=e(59082);const G=({transferTokenName:L})=>{const{formatMessage:S}=(0,d.Z)();return(0,s.go)(),t.createElement(T.o,{"aria-busy":"true"},t.createElement(s.SL,{name:"Transfer Tokens"}),t.createElement(h.T,{primaryAction:t.createElement(j.z,{disabled:!0,startIcon:t.createElement(q.Z,null),type:"button",size:"L"},S({id:"global.save",defaultMessage:"Save"})),title:L||S({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(c.D,null,t.createElement(s.dO,null)))};G.defaultProps={transferTokenName:null},G.propTypes={transferTokenName:r().string};const w=G;var V=e(47853);const ee=V.Ry().shape({name:V.Z_(s.I0.string).max(100).required(s.I0.required),description:V.Z_().nullable(),lifespan:V.Rx().integer().min(0).nullable().defined(s.I0.required),permissions:V.Z_(s.I0.string).required(s.I0.required)}),te="Name already taken",ne=()=>{(0,s.go)();const{formatMessage:L}=(0,d.Z)(),{lockApp:S,unlockApp:F}=(0,s.o1)(),C=(0,s.lm)(),x=(0,m.k6)(),[P,$]=(0,t.useState)(x.location.state?.transferToken.accessKey?{...x.location.state.transferToken}:null),{trackUsage:Q}=(0,s.rS)(),z=(0,t.useRef)(Q),{setCurrentStep:se}=(0,s.c1)(),ae=(0,n.v9)(i._),{allowedActions:{canCreate:re,canUpdate:oe,canRegenerate:ie}}=(0,s.ss)(ae.settings["transfer-tokens"]),{params:{id:X}}=(0,m.$B)("/settings/transfer-tokens/:id"),{get:le,post:de,put:ce}=(0,s.kY)(),D=X==="create",{formatAPIError:b}=(0,s.So)();(0,t.useEffect)(()=>{z.current(D?"didAddTokenFromList":"didEditTokenFromList",{tokenType:l.f})},[D]);const{status:ge}=(0,g.useQuery)(["transfer-token",X],async()=>{const{data:{data:f}}=await le(`/admin/transfer/tokens/${X}`);return $({...f}),f},{enabled:!D&&!P,onError(f){f.response.data.error.details?.code==="INVALID_TOKEN_SALT"?C({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):C({type:"warning",message:b(f)})}}),pe=async(f,Y)=>{z.current(D?"willCreateToken":"willEditToken",{tokenType:l.f}),S();const J=f.lifespan&&parseInt(f.lifespan,10)&&f.lifespan!=="0"?parseInt(f.lifespan,10):null,H=f.permissions.split("-");try{const{data:{data:B}}=D?await de("/admin/transfer/tokens",{...f,lifespan:J,permissions:H}):await ce(`/admin/transfer/tokens/${X}`,{name:f.name,description:f.description,permissions:H});F(),D&&(x.replace(`/settings/transfer-tokens/${B.id}`,{transferToken:B}),se("transferTokens.success")),$({...B}),C({type:"success",message:L(D?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),z.current(D?"didCreateToken":"didEditToken",{type:P?.permissions,tokenType:l.f})}catch(B){const fe=(0,E.Iz)(B.response.data);Y.setErrors(fe),B?.response?.data?.error?.message===te?C({type:"warning",message:B.response.data.message||"notification.error.tokennamenotunique"}):B?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?C({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):C({type:"warning",message:B?.response?.data?.message||"notification.error"}),F()}},_=oe&&!D||re&&D;if(!D&&!P&&ge!=="success")return t.createElement(w,{transferTokenName:P?.name});const ue=f=>{f?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?C({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):C({type:"warning",message:b(f)})};return t.createElement(T.o,null,t.createElement(s.SL,{name:"Transfer Tokens"}),t.createElement(a.J9,{validationSchema:ee,validateOnChange:!1,initialValues:{name:P?.name||"",description:P?.description||"",lifespan:P?.lifespan?P.lifespan.toString():P?.lifespan,permissions:P?.permissions.join("-")},enableReinitialize:!0,onSubmit:(f,Y)=>pe(f,Y)},({errors:f,handleChange:Y,isSubmitting:J,values:H})=>t.createElement(s.l0,null,t.createElement(u.Z,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:P,setToken:$,canEditInputs:_,canRegenerate:ie,isSubmitting:J,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:ue}),t.createElement(c.D,null,t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(P?.name)&&t.createElement(y.Z,{token:P?.accessKey,tokenType:l.f}),t.createElement(Z,{errors:f,onChange:Y,canEditInputs:_,isCreating:D,values:H,transferToken:P}))))))}}}]);
