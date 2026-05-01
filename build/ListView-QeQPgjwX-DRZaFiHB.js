import{u as I,aN as ne,a1 as pe,fX as y,fY as he,j as e,aS as ge,Q as S,A as oe,F as x,aC as N,Z as me,L as se,B as g,g as h,r as E,a2 as fe,m as xe,dr as be,t as G,v as J,w as P,x as z,T as f,y as K,z as Q,bq as Y,br as _,aG as je,I as U,aF as ye,dm as Ce,bi as we}from"./strapi-C-zD5Kso.js";import{u as R,a as ae,h as Te,i as ee,g as p,b as ie,A as ve,C as te}from"./index-cD82V-TB-BsQexXkU.js";import"./index-DpiKWgm_.js";import"./index-BRVyLNfZ.js";const $e=h(g)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,re=h.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 2rem;
      position: relative;

      &::before {
        content: '';
        width: 0.4rem;
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 2.6rem;
        border-radius: 4px;

        ${({$isFromDynamicZone:t,$isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:t?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,le=({customRowComponent:t,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:s=!1,firstLoopComponentUid:r})=>{const{modifiedData:i}=R(),{schema:{attributes:c}}=y(i,["components",n],{schema:{attributes:[]}});return e.jsx(re,{$isChildOfDynamicZone:o,className:"component-row",children:e.jsx("td",{colSpan:12,children:e.jsx(ce,{customRowComponent:t,items:c,targetUid:n,firstLoopComponentUid:r||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:r?n:null})})})},ke=({isActive:t=!1,icon:n="dashboard"})=>{const o=te[n]||te.dashboard;return e.jsx(x,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:e.jsx(o,{height:"2rem",width:"2rem"})})},de=h(g)`
  position: absolute;
  display: none;
  top: 5px;
  right: 0.8rem;

  svg {
    width: 1rem;
    height: 1rem;

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Me=h(x)`
  width: 14rem;
  height: 8rem;
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};
    color: ${({theme:t})=>t.colors.primary600};

    ${de} {
      display: block;
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,Fe=({component:t,dzName:n,index:o,isActive:s=!1,isInDevelopmentMode:r=!1,onClick:i})=>{const{modifiedData:c,removeComponentFromDynamicZone:j}=R(),{schema:{icon:b,displayName:m}}=y(c,["components",t],{schema:{}}),u=a=>{a.stopPropagation(),j(n,o)};return e.jsxs(Me,{alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:i,role:"tab",tabIndex:s?0:-1,cursor:"pointer","aria-selected":s,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[e.jsx(ke,{icon:b,isActive:s}),e.jsx(g,{marginTop:1,maxWidth:"100%",children:e.jsx(f,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:m})}),r&&e.jsx(de,{tag:"button",onClick:u,children:e.jsx(we,{})})]})},Ae=h(N)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.9rem;
  border-radius: 6.4rem;
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Ie=h(g)`
  height: 9rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Re=h(x)`
  width: 100%;
  overflow-x: auto;
`,Be=h(g)`
  padding-top: 9rem;
`,De=h(x)`
  flex-shrink: 0;
  width: 14rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
`,Se=({customRowComponent:t,components:n=[],addComponent:o,name:s,targetUid:r})=>{const{isInDevelopmentMode:i}=R(),[c,j]=E.useState(0),{formatMessage:b}=I(),m=a=>{c!==a&&j(a)},u=()=>{o(s)};return e.jsx(re,{className:"dynamiczone-row",$isFromDynamicZone:!0,children:e.jsxs("td",{colSpan:12,children:[e.jsx(Ie,{paddingLeft:8,children:e.jsxs(Re,{gap:2,children:[i&&e.jsx("button",{type:"button",onClick:u,children:e.jsxs(De,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(Ae,{}),e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:b({id:p("button.component.add"),defaultMessage:"Add a component"})})]})}),e.jsx(x,{role:"tablist",gap:2,children:n.map((a,l)=>e.jsx(Fe,{dzName:s||"",index:l,component:a,isActive:c===l,isInDevelopmentMode:i,onClick:()=>m(l)},a))})]})}),e.jsx(Be,{children:n.map((a,l)=>{const d={customRowComponent:t,component:a};return e.jsx(g,{id:`dz-${s}-panel-${l}`,role:"tabpanel","aria-labelledby":`dz-${s}-tab-${l}`,style:{display:c===l?"block":"none"},children:e.jsx("table",{children:e.jsx("tbody",{children:E.createElement(le,{...d,isFromDynamicZone:!0,component:r,key:a})})})},a)})})]})})},Ne=h(g)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:t,color:n})=>t.colors[`${n}600`]};
  }
`,Ee=h(g)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.4rem;
`,Le=({children:t,icon:n,color:o,...s})=>e.jsx(Ee,{paddingBottom:4,paddingTop:4,tag:"button",type:"button",...s,children:e.jsxs(x,{children:[e.jsx(Ne,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),e.jsx(g,{paddingLeft:3,children:e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:t})})]})}),ce=({addComponentToDZ:t,customRowComponent:n,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r=!1,isMain:i=!1,isNestedInDZComponent:c=!1,isSub:j=!1,items:b=[],secondLoopComponentUid:m,targetUid:u})=>{const{formatMessage:a}=I(),{trackUsage:l}=ne(),{isInDevelopmentMode:d,modifiedData:C,isInContentTypeView:v}=R(),{onOpenModalAddField:k}=ae(),w=()=>{l("hasClickedCTBAddFieldBanner"),k({forTarget:o,targetUid:u})};return u?b.length===0&&i?e.jsxs(G,{colCount:2,rowCount:2,children:[e.jsx(J,{children:e.jsxs(P,{children:[e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(K,{children:e.jsx(P,{children:e.jsx(Q,{colSpan:2,children:e.jsx(Y,{action:e.jsx(S,{onClick:w,size:"L",startIcon:e.jsx(N,{}),variant:"secondary",children:a({id:p("table.button.no-fields"),defaultMessage:"Add new field"})}),content:a(v?{id:p("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:p("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}),hasRadius:!0,icon:e.jsx(_,{width:"16rem"})})})})})]}):e.jsxs($e,{children:[e.jsx(g,{paddingLeft:6,paddingRight:i?6:0,...i&&{style:{overflowX:"auto"}},children:e.jsxs("table",{children:[i&&e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx("th",{colSpan:2,children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx("tbody",{children:b.map($=>{const{type:F}=$,B=n;return e.jsxs(E.Fragment,{children:[e.jsx(B,{...$,isNestedInDZComponent:c,targetUid:u,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r,secondLoopComponentUid:m}),F==="component"&&e.jsx(le,{...$,customRowComponent:n,targetUid:u,isNestedInDZComponent:r,editTarget:o,firstLoopComponentUid:s}),F==="dynamiczone"&&e.jsx(Se,{...$,customRowComponent:n,addComponent:t,targetUid:u})]},$.name)})})]})}),i&&d&&e.jsx(je,{icon:e.jsx(N,{}),onClick:w,children:a({id:p(`form.button.add.field.to.${C.contentType?C.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),j&&d&&!r&&e.jsx(Le,{icon:e.jsx(N,{}),onClick:w,color:r?"primary":"neutral",children:a({id:p("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):e.jsxs(G,{colCount:2,rowCount:2,children:[e.jsx(J,{children:e.jsxs(P,{children:[e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),e.jsx(z,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(K,{children:e.jsx(P,{children:e.jsx(Q,{colSpan:2,children:e.jsx(Y,{content:a({id:p("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}),hasRadius:!0,icon:e.jsx(_,{width:"16rem"})})})})})]})},Oe=h(g)`
  position: absolute;
  left: -1.8rem;
  top: 0px;

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:t,color:n})=>t.colors[n]};
    display: block;
  }
`,Pe=h.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,ze=t=>e.jsx(Oe,{children:e.jsx(Pe,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),We=({type:t,customField:n=null,repeatable:o=!1})=>{const{formatMessage:s}=I();let r=t;return["integer","biginteger","float","decimal"].includes(t)?r="number":["string"].includes(t)&&(r="text"),n?e.jsx(f,{children:s({id:p("attribute.customField"),defaultMessage:"Custom field"})}):e.jsxs(f,{textColor:"neutral800",children:[s({id:p(`attribute.${r}`),defaultMessage:t})," ",o&&s({id:p("component.repeatable"),defaultMessage:"(repeatable)"})]})},Ze=({content:t})=>e.jsx(e.Fragment,{children:ie(t)}),Ve=h(g)`
  position: relative;
`,He=E.memo(({configurable:t=!0,customField:n=null,editTarget:o,firstLoopComponentUid:s=null,isFromDynamicZone:r=!1,name:i,onClick:c,relation:j="",repeatable:b=!1,secondLoopComponentUid:m=null,target:u=null,targetUid:a=null,type:l})=>{const{contentTypes:d,isInDevelopmentMode:C,removeAttribute:v}=R(),{formatMessage:k}=I(),w=l==="relation"&&j.includes("morph"),$=["integer","biginteger","float","decimal"].includes(l)?"number":l,F=y(d,[u],{}),B=y(F,["schema","displayName"],""),D=y(F,"plugin"),W=u?"relation":$,L=()=>{w||t!==!1&&c(o,m||s||a,i,l,n)};let M;return m&&s?M=2:s?M=1:M=0,e.jsxs(Ve,{tag:"tr",onClick:C&&t&&!w?L:void 0,children:[e.jsxs("td",{style:{position:"relative"},children:[M!==0&&e.jsx(ze,{color:r?"primary200":"neutral150"}),e.jsxs(x,{paddingLeft:2,gap:4,children:[e.jsx(ve,{type:W,customField:n}),e.jsx(f,{textColor:"neutral800",fontWeight:"bold",children:i})]})]}),e.jsx("td",{children:u?e.jsxs(f,{textColor:"neutral800",children:[k({id:p(`modelPage.attribute.${w?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"})," ",e.jsxs("span",{style:{fontStyle:"italic"},children:[e.jsx(Ze,{content:B})," ",D&&`(${k({id:p("from"),defaultMessage:"from"})}: ${D})`]})]}):e.jsx(We,{type:l,customField:n,repeatable:b})}),e.jsx("td",{children:C?e.jsx(x,{justifyContent:"flex-end",onClick:A=>A.stopPropagation(),children:t?e.jsxs(x,{gap:1,children:[!w&&e.jsx(U,{onClick:L,label:`${k({id:"app.utils.edit",defaultMessage:"Edit"})} ${i}`,variant:"ghost",children:e.jsx(oe,{})}),e.jsx(U,{onClick:A=>{A.stopPropagation(),v(o,i,m||s||"")},label:`${k({id:"global.delete",defaultMessage:"Delete"})} ${i}`,variant:"ghost",children:e.jsx(ye,{})})]}):e.jsx(Ce,{})}):e.jsx(g,{height:"3.2rem"})})]})}),qe=t=>{let n;switch(t){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=t}return n},Xe={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Ge=E.memo(({disabled:t,isTemporary:n=!1,isInContentTypeView:o=!0,contentTypeKind:s="collectionType",targetUid:r=""})=>{const{formatMessage:i}=I(),c=fe(),{collectionTypesConfigurations:j,componentsConfigurations:b,singleTypesConfigurations:m}=Xe,u=i({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let a=j;const l=()=>(n||c(o?`/content-manager/collection-types/${r}/configurations/edit`:`/content-manager/components/${r}/configurations/edit`),!1);o&&s==="singleType"&&(a=m),o||(a=b);const{isLoading:d,allowedActions:C}=xe({viewConfig:a});return d||!C.canConfigureView&&!C.canConfigureLayout?null:e.jsx(S,{startIcon:e.jsx(be,{}),variant:"tertiary",onClick:l,disabled:n||t,children:u})}),Je=h(se.Header)`
  overflow-wrap: anywhere;
`,et=()=>{const{initialData:t,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:s,submitData:r}=R(),{formatMessage:i}=I(),{trackUsage:c}=ne(),j=pe("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:b,onOpenModalAddField:m,onOpenModalEditField:u,onOpenModalEditSchema:a,onOpenModalEditCustomField:l}=ae(),d=s?"contentType":"component",C=[d,"schema","attributes"],v=y(n,[d,"uid"]),k=y(n,[d,"isTemporary"],!1),w=y(n,[d,"schema","kind"],null),$=y(n,C,[]),F=Te(t,[d,"plugin"]),B=!ee(n,t),D=s?"contentType":"component",W=T=>{b({dynamicZoneTarget:T,targetUid:v})},L=async(T,Z,V,H,q)=>{const X=qe(H);q?l({forTarget:T,targetUid:Z,attributeName:V,attributeType:X,customFieldUid:q}):u({forTarget:T,targetUid:Z,attributeName:V,attributeType:X,step:H==="component"?"2":null})};let M=y(n,[d,"schema","displayName"],"");const A=y(n,[d,"schema","kind"],""),O=j?.params.currentUID==="create-content-type";!M&&O&&(M=i({id:p("button.model.create"),defaultMessage:"Create new collection type"}));const ue=()=>{const T=A||d;T==="collectionType"&&c("willEditNameOfContentType"),T==="singleType"&&c("willEditNameOfSingleType"),a({modalType:d,forTarget:d,targetUid:v,kind:T})};return he({when:B,message:i({id:p("prompt.unsaved"),defaultMessage:"Are you sure?"})}),e.jsxs(e.Fragment,{children:[e.jsx(Je,{id:"title",primaryAction:o&&e.jsxs(x,{gap:2,marginLeft:2,children:[!O&&e.jsx(S,{startIcon:e.jsx(N,{}),variant:"secondary",minWidth:"max-content",onClick:()=>{m({forTarget:D,targetUid:v})},children:i({id:p("button.attributes.add.another"),defaultMessage:"Add another field"})}),e.jsx(S,{startIcon:e.jsx(me,{}),onClick:async()=>await r(),type:"submit",disabled:ee(n,t),children:i({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:o&&!F&&!O&&e.jsx(S,{startIcon:e.jsx(oe,{}),variant:"tertiary",onClick:ue,children:i({id:"app.utils.edit",defaultMessage:"Edit"})}),title:ie(M),subtitle:i({id:p("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.jsx(ge,{})}),e.jsx(se.Content,{children:e.jsxs(x,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(x,{justifyContent:"flex-end",children:e.jsx(x,{gap:2,children:e.jsx(Ge,{targetUid:v,isTemporary:k,isInContentTypeView:s,contentTypeKind:w,disabled:O},"link-to-cm-settings-view")})}),e.jsx(g,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:e.jsx(ce,{items:$,customRowComponent:T=>e.jsx(He,{...T,onClick:L}),addComponentToDZ:W,targetUid:v,editTarget:D,isMain:!0})})]})})]})};export{et as default};
