import{jsx as a,jsxs as f}from"react/jsx-runtime";import{useState as p}from"react";import{u as E,g as O,b as R,e as j,q as w,P as x,F as C,h as u,L as D,t as _,f as s}from"./index-C9t2UlUN.js";import{D as B}from"./DynamicComponents-D5DD9CFr.js";import{TAB_PROVIDER as h}from"./PageList-59HC89eh.js";import{F as H,A as I}from"./Form-Cdw1qhWG.js";const V=({id:P,providerType:c,page:{id:i,...g}})=>{const{t:l}=E(),n=O(),{realm:d}=R(),[y,S]=p(),{addAlert:b,addError:A}=j(),[o,F]=p(P);w(async()=>await Promise.all([s.realms.findOne({realm:d}),o?s.components.findOne({id:o}):Promise.resolve(),c===h?s.components.find({type:h}):Promise.resolve()]),([e,t,r])=>{S(e);const m=(r||[]).find(k=>k.providerId===i);n.reset(t||m||{}),m&&F(m.id)},[]);const v=async e=>{e.config&&Object.entries(e.config).forEach(([t,r])=>e.config[t]=Array.isArray(r)?r:[r]);try{const t={...e,providerId:i,providerType:c,parentId:y?.id};o?await s.components.update({id:o},t):await s.components.create(t),b("itemSaveSuccessful")}catch(t){A("itemSaveError",t)}};return a(x,{variant:"light",children:f(H,{isHorizontal:!0,onSubmit:n.handleSubmit(v),className:"keycloak__form",children:[a(C,{...n,children:a(B,{properties:g.properties})}),f(I,{children:[a(u,{"data-testid":"save",type:"submit",children:l("save")}),a(u,{variant:"link",component:e=>a(D,{...e,to:_({realm:d,providerId:i})}),children:l("cancel")})]})]})})};export{V as P};
//# sourceMappingURL=PageHandler-TK8xnd8P.js.map
