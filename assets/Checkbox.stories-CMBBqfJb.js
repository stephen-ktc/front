import{f}from"./index-C_FWhylE.js";import{j as s}from"./jsx-runtime-DEdD30eg.js";/* empty css                 */import"./index-RYns6xqu.js";const p=({name:c,value:u,size:a,label:d,...g})=>s.jsxs("div",{children:[s.jsx("input",{type:"checkbox",name:c,value:u,className:`ktc-checkbox-size-${a}`}),s.jsx("label",{style:{fontSize:`var(--ktc-font-size-${a})`},children:d})]});p.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Checkbox",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'s' | 'm'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"Example/Checkbox",component:p,parameters:{layout:"centered"},args:{onClick:f()}},e={args:{name:"fruits",value:"apple",size:"s",label:"사과"}},r={args:{name:"fruits",value:"apple",size:"m",label:"사과"}};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: 'fruits',
    value: 'apple',
    size: 's',
    label: '사과'
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var o,l,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: 'fruits',
    value: 'apple',
    size: 'm',
    label: '사과'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const h=["small","medium"];export{h as __namedExportsOrder,k as default,r as medium,e as small};
