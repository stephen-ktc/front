import{f as T}from"./index-C_FWhylE.js";import{j as q}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const y=({primary:f=!1,size:B="medium",backgroundColor:z,label:k,...v})=>{const x=f?"storybook-button--primary":"storybook-button--secondary";return q.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${B}`,x].join(" "),...v,children:k})};y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={title:"Example/Button",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:T()}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},a={args:{size:"small",label:"Button"}},o={args:{size:"large",label:"Button"}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,g,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const E=["primary","secondary","small","medium"];export{E as __namedExportsOrder,_ as default,o as medium,e as primary,r as secondary,a as small};
