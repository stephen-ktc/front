import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as a}from"./index-DYp4lX_C.js";import{r as S}from"./index-RYns6xqu.js";const r=({color:n="primary",variant:u="standard",max:l=99,showZero:z=!1,...t})=>{const T=S.useMemo(()=>t.content>l?`${l}+`:t.content,[l,t.content]);return e.jsxs("div",{className:"ktc-badge-root",children:[t.children&&t.children,(t.content>0||t.content===0&&z)&&e.jsx("div",{className:`ktc-badge-color-${n} ktc-badge-variant-${u}`,children:u!=="dot"&&e.jsx("div",{children:T})})]})};r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'dot' | 'standard'",elements:[{name:"literal",value:"'dot'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},content:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const A={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs","!dev"],argTypes:{color:{description:"Badge 색상을 설정합니다.",control:{type:"select"}},variant:{description:"Badge 유형을 설정합니다."},content:{description:"Badge에 표시하는 값입니다.",control:{type:"number",required:!0}},max:{description:"Badge에 표시할 수 있는 최대 숫자를 설정합니다.",control:{type:"number"}},showZero:{description:"값이 0인 경우 Badge 표시 여부를 설정합니다."}}},s={args:{content:3,children:e.jsx(a,{size:17})}},o={args:{content:3,color:"primary",children:e.jsx(a,{size:17})},render:n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"40px"},children:[e.jsx(r,{content:5,color:"primary",children:n.children}),e.jsx(r,{content:5,color:"secondary",children:n.children}),e.jsx(r,{content:5,color:"success",children:n.children}),e.jsx(r,{content:5,color:"warning",children:n.children}),e.jsx(r,{content:5,color:"error",children:n.children})]})},c={args:{content:3,variant:"dot",children:e.jsx(a,{size:17})},render:n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[e.jsx(r,{content:n.content,variant:"standard",children:n.children}),e.jsx(r,{content:n.content,variant:"dot",children:n.children})]})},d={args:{content:0,showZero:!0,children:e.jsx(a,{size:17})},render:n=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",gap:"50px"},children:[e.jsx(r,{content:n.content,showZero:!0,children:n.children}),e.jsx(r,{content:n.content,variant:"dot",showZero:!0,children:n.children}),e.jsx(r,{content:n.content,showZero:!1,children:n.children})]})},i={args:{content:55,max:50,children:e.jsx(a,{size:17})},render:n=>e.jsx(e.Fragment,{children:e.jsx(r,{content:n.content,max:n.max,children:n.children})})};var p,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 3,
    children: <BellIcon size={17} />
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,y,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    content: 3,
    color: 'primary',
    children: <BellIcon size={17} />
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px'
    }}>
        <Badge content={5} color={'primary'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'secondary'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'success'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'warning'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'error'}>
          {args.children}
        </Badge>
      </div>;
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,v,B;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    content: 3,
    variant: 'dot',
    children: <BellIcon size={17} />
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '50px'
    }}>
        <Badge content={args.content} variant={'standard'}>
          {args.children}
        </Badge>
        <Badge content={args.content} variant={'dot'}>
          {args.children}
        </Badge>
      </div>;
  }
}`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var j,w,Z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 0,
    showZero: true,
    children: <BellIcon size={17} />
  },
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '50px'
    }}>
        <Badge content={args.content} showZero={true}>
          {args.children}
        </Badge>
        <Badge content={args.content} variant={'dot'} showZero={true}>
          {args.children}
        </Badge>
        <Badge content={args.content} showZero={false}>
          {args.children}
        </Badge>
      </div>;
  }
}`,...(Z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:Z.source}}};var b,C,q;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 55,
    max: 50,
    children: <BellIcon size={17} />
  },
  render: (args: Args) => <>
      <Badge content={args.content} max={args.max}>
        {args.children}
      </Badge>
    </>
}`,...(q=(C=i.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const _=["Default","Color","Variant","ShowZero","MaxValue"];export{o as Color,s as Default,i as MaxValue,d as ShowZero,c as Variant,_ as __namedExportsOrder,A as default};
