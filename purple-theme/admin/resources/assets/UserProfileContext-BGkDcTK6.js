import{jsx as S}from"react/jsx-runtime";import{useState as r}from"react";import{dS as U,b as h,e as p,u as x,q as y,f as n,A,dT as E}from"./index-C9t2UlUN.js";const u=U("UserProfileContext",void 0),T=({children:i})=>{const{realm:t}=h(),{addAlert:l,addError:c}=p(),{t:f}=x(),[d,P]=r(null),[o,m]=r(0),[g,e]=r(!1);y(()=>n.users.getProfile({realm:t}),s=>P(s),[o]);const v=async(s,a)=>{e(!0);try{return await n.users.updateProfile({...s,realm:t}),e(!1),m(o+1),l(f(a?.successMessageKey??"userProfileSuccess"),A.success),!0}catch(C){return e(!1),c(a?.errorMessageKey??"userProfileError",C),!1}};return S(u.Provider,{value:{config:d,save:v,isSaving:g},children:i})},b=()=>E(u);export{T as U,b as u};
//# sourceMappingURL=UserProfileContext-BGkDcTK6.js.map
