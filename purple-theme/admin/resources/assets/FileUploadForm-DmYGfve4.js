import{jsxs as v,Fragment as L,jsx as l}from"react/jsx-runtime";import{useState as U}from"react";import{F as u}from"./FileUpload-CTw4RKK1.js";import{u as D,h as f,a0 as T}from"./index-C9t2UlUN.js";import{M as k,a as R}from"./Modal-Bgkd26UL.js";import{C as b}from"./CodeEditor-Cp4g17EF.js";const P=({id:o,onChange:d,helpText:g="helpFileUpload",unWrap:s=!1,language:C,extension:F,...t})=>{const{t:i}=D(),c={value:"",filename:"",isLoading:!1,modal:!1},[e,a]=U(c),m=()=>a({...e,modal:!1}),p=(r,x)=>{a({...e,filename:x.name})},n=r=>{a({...e,value:r}),d(r)},h=()=>{a({...e,modal:!0})};return v(L,{children:[e.modal&&l(k,{variant:R.small,title:i("clearFile"),isOpen:!0,onClose:m,actions:[l(f,{variant:"primary","data-testid":"clear-button",onClick:()=>{a(c),d("")},children:i("clear")},"confirm"),l(f,{"data-testid":"cancel",variant:"link",onClick:m,children:i("cancel")},"cancel")],children:i("clearFileExplain")}),s&&l(u,{id:o,...t,type:"text",value:e.value,filename:e.filename,onFileInputChange:p,onDataChange:n,onTextChange:n,onClearClick:h,onReadStarted:()=>a({...e,isLoading:!0}),onReadFinished:()=>a({...e,isLoading:!1}),isLoading:e.isLoading,dropzoneProps:{accept:{"application/text":[F]}}}),!s&&l(T,{label:i("resourceFile"),fieldId:o,helperText:i(g),children:l(u,{"data-testid":o,id:o,...t,type:"text",value:e.value,filename:e.filename,onFileInputChange:p,onDataChange:n,onTextChange:n,onClearClick:h,onReadStarted:()=>a({...e,isLoading:!0}),onReadFinished:()=>a({...e,isLoading:!1}),isLoading:e.isLoading,hideDefaultPreview:!0,children:!t.hideDefaultPreview&&l(b,{isLineNumbersVisible:!0,code:e.value,language:C,height:"128px",onChange:n,isReadOnly:!t.allowEditingUploadedText})})})]})};export{P as F};
//# sourceMappingURL=FileUploadForm-DmYGfve4.js.map
