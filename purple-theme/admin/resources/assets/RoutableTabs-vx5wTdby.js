import{jsxs as y,jsx as o}from"react/jsx-runtime";import{Children as u,isValidElement as T}from"react";import{bs as v,d as K,a as g,d3 as x,d4 as P,d5 as c}from"./index-C9t2UlUN.js";import{P as R}from"./PageHandler-TK8xnd8P.js";import{TAB_PROVIDER as p}from"./PageList-59HC89eh.js";import{T as I,d as j,a as A}from"./Tabs-CjrDEqsl.js";const N=({children:e,defaultLocation:t,...n})=>{const{pathname:s}=v(),i=K(),{componentTypes:d}=g(),r=(d?.[p]||[]).filter(a=>x({path:a.metadata.path},s)).map(a=>({...a,pathname:P(a.metadata.path,{...i,...a.metadata.params})})),h=r.map(a=>a.pathname),m=u.toArray(e).filter(a=>T(a)).map(a=>a.props.eventKey.toString()),l=[...m,...h].find(a=>a===decodeURI(s)),f=m.filter(a=>s.includes(a)).sort((a,b)=>a.length-b.length).pop();return y(I,{activeKey:l??f??t?.pathname??s,component:j.nav,inset:{default:"insetNone",xl:"insetLg","2xl":"inset2xl"},...n,children:[e,r.map(a=>o(C,{eventKey:a.pathname,title:a.id,children:o(R,{page:a,providerType:p})},a.id))]})},C=({children:e,...t})=>{const n=c(t.eventKey);return o(A,{href:n,...t,children:e})},O=e=>({eventKey:e.pathname??"",href:c(e)});export{N as R,O as u};
//# sourceMappingURL=RoutableTabs-vx5wTdby.js.map
