import{f}from"./index-C_FWhylE.js";import{j as a}from"./jsx-runtime-DEdD30eg.js";/* empty css                 */import"./index-RYns6xqu.js";const p=({name:u,value:c,size:s,label:d,...g})=>a.jsxs("div",{children:[a.jsx("input",{type:"radio",name:u,value:c,className:`ktc-radio-button-size-${s}`}),a.jsx("label",{style:{fontSize:`var(--ktc-font-size-${s})`},children:d})]});p.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Radio",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'s' | 'm'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z={title:"Example/Radio",component:p,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:f()}},e={args:{name:"fruits",value:"apple",size:"s",label:"사과"}},r={args:{name:"fruits",value:"apple",size:"m",label:"사과"}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'fruits',
    value: 'apple',
    size: 's',
    label: '사과'
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var o,m,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: 'fruits',
    value: 'apple',
    size: 'm',
    label: '사과'
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const j=["small","medium"];export{j as __namedExportsOrder,z as default,r as medium,e as small};
