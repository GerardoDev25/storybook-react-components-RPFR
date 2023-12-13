import{j as L}from"./jsx-runtime-vNq4Oc-g.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const s=({allCaps:n=!1,color:_="primary",label:t="No Label",size:x="normal",backgroundColor:B})=>L.jsx("span",{className:`label ${x} text-${_}`,style:{backgroundColor:B},children:n?t.toLocaleUpperCase():t});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"this is the message to show in the tag",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"this is the tag's size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"define if the text will be uppercase or not.",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"define the color of the tag.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secundary"'},{value:'"tertiary"'}]}},backgroundColor:{defaultValue:null,description:"define the background color of the component.",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"UI/MyLabel",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select"},backgroundColor:{control:"color"},allCaps:{control:"boolean",defaultValue:!1,description:"this parameter define if the text will be uppercase or normal"},color:{control:"select",type:"string",defaultValue:"primary",description:"this property define the component color"}}},e={args:{label:"hola mundo Basic",size:"normal",allCaps:!1}},a={args:{label:"hola mundo AllCAps",size:"h1",allCaps:!0}},r={args:{label:"hola mundo secudary",size:"h2",color:"secundary"}},o={args:{label:"hola mundo Tertiary",size:"normal",color:"tertiary"}},l={args:{label:"hola mundo BackgroundColor",size:"normal",color:"tertiary",backgroundColor:"yellow"}};var c,i,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'hola mundo Basic',
    size: 'normal',
    allCaps: false
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'hola mundo AllCAps',
    size: 'h1',
    allCaps: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,g,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'hola mundo secudary',
    size: 'h2',
    color: 'secundary'
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'hola mundo Tertiary',
    size: 'normal',
    color: 'tertiary'
  }
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var z,v,k;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'hola mundo BackgroundColor',
    size: 'normal',
    color: 'tertiary',
    backgroundColor: 'yellow'
  }
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const w=["Basic","Allcaps","Secundary","Tertiary","CustomeBackgroundColor"];export{a as Allcaps,e as Basic,l as CustomeBackgroundColor,r as Secundary,o as Tertiary,w as __namedExportsOrder,q as default};
