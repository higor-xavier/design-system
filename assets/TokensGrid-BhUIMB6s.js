import{j as e}from"./jsx-runtime-CGpYA4L6.js";function d({tokens:t,hasRemValue:s=!1}){return e.jsxs("table",{className:"tokens-grid sb-unstyled",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),s&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(t).map(([r,n])=>e.jsxs("tr",{children:[e.jsx("td",{children:r}),e.jsx("td",{children:n}),s&&e.jsxs("td",{children:[Number(n.replace("rem",""))*16,"px"]})]},r))})]})}d.__docgenInfo={description:"",methods:[],displayName:"TokensGrid",props:{tokens:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},hasRemValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{d as T};
