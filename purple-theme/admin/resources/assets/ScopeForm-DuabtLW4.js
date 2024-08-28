import{jsx as t,jsxs as l,Fragment as C}from"react/jsx-runtime";import{useEffect as D}from"react";import{u as k,g as E,b as L,aw as O,a4 as y,ax as n,M as A,F as $,E as s,o as g,J as f,$ as N,h as S,L as P,al as j}from"./index-C9t2UlUN.js";import{g as q}from"./utils-DeGqqWSp.js";import{D as i}from"./SwitchControl-KjYluOpZ.js";import{b as F}from"./ClientScopeTypes-43MQv2_N.js";import{F as w}from"./FormAccess-DnQCcStE.js";import{u as R,F as z}from"./useIsFeatureEnabled-CkHhuO9z.js";import{A as B}from"./Form-Cdw1qhWG.js";const _=({clientScope:o,save:h})=>{const{t:e}=k(),r=E({mode:"onChange"}),{control:c,handleSubmit:I,setValue:m,formState:{isDirty:v,isValid:x}}=r,{realm:H}=L(),p=O(),u=R()(z.DynamicScopes),d=y({control:c,name:n("attributes.display.on.consent.screen"),defaultValue:o?.attributes?.["display.on.consent.screen"]??"true"}),T=y({control:c,name:n("attributes.is.dynamic.scope"),defaultValue:"false"}),b=(a,V)=>m(n("attributes.dynamic.scope.regexp"),V?`${a}:*`:a);return D(()=>{A(o??{},m)},[o]),t(w,{role:"manage-clients",onSubmit:I(h),isHorizontal:!0,children:l($,{...r,children:[t(s,{name:"name",label:e("name"),labelIcon:e("scopeNameHelp"),rules:{required:{value:!0,message:e("required")},onChange:a=>{u&&b(a.target.validated,!0)}}}),u&&l(C,{children:[t(i,{name:n("attributes.is.dynamic.scope"),label:e("dynamicScope"),labelIcon:e("dynamicScopeHelp"),onChange:a=>{b(a&&r.getValues("name")||"",a)},stringify:!0}),T==="true"&&t(s,{name:n("attributes.dynamic.scope.regexp"),label:e("dynamicScopeFormat"),labelIcon:e("dynamicScopeFormatHelp"),isDisabled:!0})]}),t(s,{name:"description",label:e("description"),labelIcon:e("scopeDescriptionHelp"),rules:{maxLength:{value:255,message:e("maxLength")}}}),t(g,{name:"type",label:e("type"),toggleId:"kc-type",labelIcon:e("scopeTypeHelp"),variant:f.single,controller:{defaultValue:F[0]},options:F.map(a=>({key:a,value:e(`clientScopeType.${a}`)}))}),!o&&t(g,{name:"protocol",label:e("protocol"),toggleId:"kc-protocol",labelIcon:e("protocolHelp"),variant:f.single,controller:{defaultValue:p[0]},options:p.map(a=>({key:a,value:q(e,a)}))}),t(i,{name:n("attributes.display.on.consent.screen"),defaultValue:d,label:e("displayOnConsentScreen"),labelIcon:e("displayOnConsentScreenHelp"),stringify:!0}),d==="true"&&t(N,{name:n("attributes.consent.screen.text"),label:e("consentScreenText"),labelIcon:e("consentScreenTextHelp")}),t(i,{name:n("attributes.include.in.token.scope"),label:e("includeInTokenScope"),labelIcon:e("includeInTokenScopeHelp"),stringify:!0}),t(s,{name:n("attributes.gui.order"),label:e("guiOrder"),labelIcon:e("guiOrderHelp"),type:"number",min:0}),l(B,{children:[t(S,{variant:"primary",type:"submit",isDisabled:!v||!x,children:e("save")}),t(S,{variant:"link",component:a=>t(P,{...a,to:j({realm:H})}),children:e("cancel")})]})]})})};export{_ as S};
//# sourceMappingURL=ScopeForm-DuabtLW4.js.map
