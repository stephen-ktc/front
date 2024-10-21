import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as x}from"./index-RYns6xqu.js";const n=({color:r="primary",value:a="",variant:t="outlined",id:v,label:y,placeholder:T,required:B=!1,size:H="medium",onChange:g,error:h=!1,disabled:L,helperText:F,...M})=>{const[b,j]=x.useState(!1),[l,w]=x.useState(a||""),D=()=>j(!0),A=()=>j(!1),m=!l&&T;x.useEffect(()=>{w(a||"")},[a]);const P=o=>{w(o.target.value),g&&g(o)},s=(...o)=>o.filter(Boolean).join(" ");return e.jsx("div",{className:"ktc-textfield-root",children:e.jsxs("div",{className:s(`ktc-textfield-${H}`,`ktc-textfield-${t}`,h&&"ktc-textfield-error"),children:[e.jsxs("div",{className:s("ktc-textfield-wrapper",(b||l||m)&&"ktc-textfield-wrapper--focused"),children:[y&&e.jsx("label",{htmlFor:v,className:s("ktc-textfield-label",(b||l||m)&&`ktc-textfield-label-active ktc-textfield-label--${r}`),children:y}),e.jsx("input",{type:"text",id:v,value:l,className:s("ktc-textfield-input",`ktc-textfield-input--${r}`),placeholder:m?T:"",required:B,onFocus:D,onBlur:A,disabled:L,onChange:P,...M})]}),h?e.jsx("span",{className:"ktc-textfield-error",children:F}):e.jsx("span",{className:"ktc-textfield-helperText",children:F})]})})};n.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:""},required:{required:!1,tsType:{name:"union",raw:"boolean | any",elements:[{name:"boolean"},{name:"any"}]},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | any",elements:[{name:"boolean"},{name:"any"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const u=({items:r})=>e.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px",alignItems:"center"},children:r.map((a,t)=>e.jsx("div",{children:a},t))});u.__docgenInfo={description:"",methods:[],displayName:"StyledContainer",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""}}};const $=["primary","secondary","error","success","warning"],_=["small","medium","large"],f=["filled","outlined","standard"],Q={title:"Components/TextField",component:n,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"Text Field 색상을 설정합니다.",control:{type:"select",options:$}},size:{description:"Text Field 크기를 설정합니다.",control:{type:"select",options:_}},variant:{description:"Text Field 유형을 설정합니다.",control:{type:"select",options:f}},label:{description:"Text Field 의 label 을 설정합니다.",control:"text"},value:{description:"Text Field 의 값을 설정합니다.",control:"text"},placeholder:{description:"Text Field 의 placeholder 를 설정합니다.",control:"text"},error:{description:"Text Field 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.",control:"boolean"},helperText:{description:"Text Field 의 helperText 를 설정합니다.",control:"text"},required:{description:"Text Field 의 필수 여부를 설정합니다.",control:"boolean"},disabled:{description:"Text Field 의 disabled 속성을 설정합니다.",control:"boolean"},onChange:{description:"Text Field 의 onChange event 를 설정합니다.",action:"changed"}}},i={args:{label:"label",placeholder:"Enter placeholder",variant:"outlined",size:"medium",color:"primary",required:!0,value:""}},d={render:()=>{const r=f.map(a=>e.jsx(n,{variant:a,label:a}));return e.jsx(u,{items:r})},parameters:{docs:{source:{code:`
          <TextField variant={variant} />
        `}}}},c={render:()=>{const r=f.map(a=>e.jsx(u,{items:$.map(t=>e.jsx(n,{label:t,color:t,variant:a,placeholder:t},`${t}-${a}`))},a));return e.jsx(e.Fragment,{children:r})},parameters:{docs:{source:{code:`
          <TextField color={color} variant={variant} />
        `}}}},p={render:()=>{const r=_.map(a=>e.jsx(n,{label:a,size:a}));return e.jsx(u,{items:r})},parameters:{docs:{source:{code:`
          <TextField size={size} />
        `}}}};var z,q,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'label',
    placeholder: 'Enter placeholder',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    required: true,
    value: ''
  }
}`,...(C=(q=i.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var k,E,N;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const variantGroup = variantOptions.map(variant => <TextField variant={variant} label={variant} />);
    return <StoryContainer items={variantGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <TextField variant={variant} />
        \`
      }
    }
  }
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var S,R,V;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const colorGroup = variantOptions.map(variant => <StoryContainer key={variant} items={colorOptions.map(color => <TextField key={\`\${color}-\${variant}\`} label={color} color={color} variant={variant} placeholder={color} />)} />);
    return <>{colorGroup}</>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <TextField color={color} variant={variant} />
        \`
      }
    }
  }
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var G,I,O;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const sizeGroup = sizeOptions.map(size => <TextField label={size} size={size} />);
    return <StoryContainer items={sizeGroup} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <TextField size={size} />
        \`
      }
    }
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const U=["Default","Variant","Color","Size"];export{c as Color,i as Default,p as Size,d as Variant,U as __namedExportsOrder,Q as default};
