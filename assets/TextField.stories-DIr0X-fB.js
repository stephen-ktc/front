import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as u}from"./index-RYns6xqu.js";const a=({color:r="primary",value:l="",variant:I="outlined",id:m,label:c,placeholder:S,required:L=!1,size:R="medium",onChange:x,error:f=!1,helperText:g,..._})=>{const[y,v]=u.useState(!1),[p,b]=u.useState(l||""),$=()=>v(!0),A=()=>v(!1),B=!c&&!l;u.useEffect(()=>{b(l||"")},[l]);const H=t=>{b(t.target.value),x&&x(t)},n=(...t)=>t.filter(Boolean).join(" ");return e.jsx("div",{className:"ktc-textfield-root",children:e.jsxs("div",{className:n(`ktc-textfield-${R}`,`ktc-textfield-${I}`,f&&"ktc-textfield-error"),children:[e.jsxs("div",{className:n("ktc-textfield-wrapper",(y||p)&&"ktc-textfield-wrapper--focused"),children:[c&&e.jsx("label",{htmlFor:m,className:n("ktc-textfield-label",(y||p)&&`ktc-textfield-label-active ktc-textfield-label--${r}`),children:c}),e.jsx("input",{type:"text",id:m,value:p,className:n("ktc-textfield-input",`ktc-textfield-input--${r}`),placeholder:B?S:"",required:L,onFocus:$,onBlur:A,onChange:H,..._})]}),f?e.jsx("span",{className:"ktc-textfield-error",children:g}):e.jsx("span",{className:"ktc-textfield-helperText",children:g})]})})};a.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const P={title:"Components/TextField",component:a,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"Text Field 색상을 설정합니다.",control:{type:"select",options:["primary","secondary","error","success","warning"]}},size:{description:"Text Field 크기를 설정합니다.",control:{type:"select",options:["medium","small","large"]}},variant:{description:"Text Field 유형을 설정합니다.",control:{type:"select",options:["filled","outlined","standard"]}},label:{description:"Text Field 의 Label 을 설정합니다.",control:"text"},value:{description:"Text Field 의 값을 설정합니다.",control:"text"},placeholder:{description:"Text Field 의 Placeholder 를 설정합니다.",control:"text"},error:{description:"Text Field 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.",control:"boolean"},helperText:{description:"Text Field 의 helperText 를 설정합니다.",control:"text"},required:{description:"Text Field 의 필수 여부를 설정합니다.",control:"boolean"},onChange:{description:"Text Field 의 onChange event 를 설정합니다.",action:"changed"}}},s={args:{label:"label",placeholder:"Enter placeholder",variant:"outlined",size:"medium",color:"primary",required:!0,value:""}},i={render:r=>e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px"},children:[e.jsx(a,{label:"standard",variant:"standard"}),e.jsx(a,{label:"filled",variant:"filled"})]})})},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px"},children:[e.jsx(a,{label:"primary",color:"primary"}),e.jsx(a,{label:"secondary",color:"secondary"}),e.jsx(a,{label:"success",color:"success"}),e.jsx(a,{label:"warning",color:"warning"}),e.jsx(a,{label:"error",color:"error"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",margin:"40px"},children:[e.jsx(a,{label:"primary",color:"primary",variant:"standard"}),e.jsx(a,{label:"secondary",color:"secondary",variant:"standard"}),e.jsx(a,{label:"success",color:"success",variant:"standard"}),e.jsx(a,{label:"warning",color:"warning",variant:"standard"}),e.jsx(a,{label:"error",color:"error",variant:"standard"})]})]})},d={render:r=>e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px",alignItems:"center"},children:[e.jsx(a,{label:"outlined",size:"small"}),e.jsx(a,{label:"outlined",size:"medium"}),e.jsx(a,{label:"outlined",size:"large"})]})})};var T,h,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'label',
    placeholder: 'Enter placeholder',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    required: true,
    value: ''
  }
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var F,w,C;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '40px'
      }}>
          <TextField label={'standard'} variant={'standard'} />
          <TextField label={'filled'} variant={'filled'} />
        </div>
      </>;
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var q,k,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '40px'
      }}>
          <TextField label={'primary'} color={'primary'} />
          <TextField label={'secondary'} color={'secondary'} />
          <TextField label={'success'} color={'success'} />
          <TextField label={'warning'} color={'warning'} />
          <TextField label={'error'} color={'error'} />
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '40px'
      }}>
          <TextField label={'primary'} color={'primary'} variant={'standard'} />
          <TextField label={'secondary'} color={'secondary'} variant={'standard'} />
          <TextField label={'success'} color={'success'} variant={'standard'} />
          <TextField label={'warning'} color={'warning'} variant={'standard'} />
          <TextField label={'error'} color={'error'} variant={'standard'} />
        </div>
      </>;
  }
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,V,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        alignItems: 'center'
      }}>
          <TextField label={'outlined'} size={'small'} />
          <TextField label={'outlined'} size={'medium'} />
          <TextField label={'outlined'} size={'large'} />
        </div>
      </>;
  }
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const O=["Default","Variant","Color","Size"];export{o as Color,s as Default,d as Size,i as Variant,O as __namedExportsOrder,P as default};
