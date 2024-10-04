import{j as l}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const m=({size:u="small",label:n,value:c,onChange:d})=>{const g=u==="large"?"input-large":"input-small";return l.jsxs("div",{className:`input-wrapper ${g}`,children:[n&&l.jsx("label",{children:n}),l.jsx("input",{value:c,onChange:d})]})};m.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const f={title:"Example/Input",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select",options:["small","large"]}},label:{control:"text"},value:{control:"text"},onChange:{action:"changed"}}},e={args:{size:"large",label:"Large Input",value:"Hello, World!"}},a={args:{size:"small",label:"Small Input",value:"Hello!"}};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large Input',
    value: 'Hello, World!'
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,p,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Input',
    value: 'Hello!'
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const x=["Large","Small"];export{e as Large,a as Small,x as __namedExportsOrder,f as default};
