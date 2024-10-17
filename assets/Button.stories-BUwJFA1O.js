import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const r=({color:a="primary",disabled:V=!1,href:m,label:N,loading:_=!1,variant:u="contained",size:p="medium",onClick:I,...E})=>_?e.jsx("button",{type:"button",className:["loading-button",`storybook-button--${p}`,`storybook-button-spin-${u}`].join(" "),disabled:!0,children:e.jsx("span",{className:[`loader-${u}`].join(" ")})}):e.jsx("button",{type:"button",disabled:V,className:["storybook-button",`storybook-button--${p}`,`storybook-button-${a}-${u}`].join(" "),onClick:m?()=>window.location.href=m:I,...E,children:N});r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'outlined' | 'text'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const G={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs","!dev"],args:{label:"Button"}},d=({children:a})=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"8px"},children:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:a})}),O=a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs(d,{children:[e.jsx(r,{...a,variant:"contained",label:"contained"}),e.jsx(r,{...a,variant:"outlined",label:"outlined"}),e.jsx(r,{...a,variant:"text",label:"text"})]})}),c=a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs(d,{children:[e.jsx(r,{...a,size:"small"}),e.jsx(r,{...a,size:"medium"}),e.jsx(r,{...a,size:"large"})]})}),R=a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs(d,{children:[e.jsx(r,{...a,color:"primary"}),e.jsx(r,{...a,color:"secondary"})]})}),t={args:{label:"Button"}},n={render:R,args:{label:"Button"}},s={render:c,args:{label:"Button",disabled:!0}},l={render:c,args:{label:"Button",loading:!0}},o={render:O,args:{label:"Button"}},i={render:c,args:{label:"Button"}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,y,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template3,
  args: {
    label: 'Button'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,B,T;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template2,
  args: {
    label: 'Button',
    disabled: true
  }
}`,...(T=(B=s.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var h,q,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template2,
  args: {
    label: 'Button',
    loading: true
  }
}`,...(w=(q=l.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var k,D,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Button'
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var $,z,C;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template2,
  args: {
    label: 'Button'
  }
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const H=["Default","color","disable","loading","variant","size"];export{t as Default,H as __namedExportsOrder,n as color,G as default,s as disable,l as loading,i as size,o as variant};
