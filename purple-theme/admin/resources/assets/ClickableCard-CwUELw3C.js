import{_ as u,k as g,y as h}from"./index-C9t2UlUN.js";import*as b from"react";import{jsx as j}from"react/jsx-runtime";const y={gallery:"pf-l-gallery",modifiers:{gutter:"pf-m-gutter"}},x=t=>{var{children:a=null,className:l="",component:m="div",hasGutter:e=!1,minWidths:r,maxWidths:n}=t,o=u(t,["children","className","component","hasGutter","minWidths","maxWidths"]);const c={},p=m;r&&Object.entries(r||{}).map(([s,i])=>c[`--pf-l-gallery--GridTemplateColumns--min${s!=="default"?`-on-${s}`:""}`]=i);const d={};n&&Object.entries(n||{}).map(([s,i])=>d[`--pf-l-gallery--GridTemplateColumns--max${s!=="default"?`-on-${s}`:""}`]=i);const f=Object.assign(Object.assign({},c),d);return b.createElement(p,Object.assign({className:g(y.gallery,e&&y.modifiers.gutter,l)},o,(r||n)&&{style:Object.assign(Object.assign({},f),o.style)}),a)};x.displayName="Gallery";const C=({children:t,onClick:a,...l})=>j(h,{className:"keycloak-empty-state-card",role:"button","aria-pressed":"false",tabIndex:0,isSelectableRaised:!0,onKeyDown:e=>{(e.key===" "||e.key==="Enter"||e.key==="Spacebar")&&a()},onClick:a,...l,children:t});export{C,x as G};
//# sourceMappingURL=ClickableCard-CwUELw3C.js.map
