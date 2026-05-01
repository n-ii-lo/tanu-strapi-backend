import{aU as te,hh as We,bv as Ke,gK as de,hi as Te,hj as ve,hk as Xe,hl as Ye,hm as qe,hn as ze,gN as Me,ho as Je,hp as Qe,hq as Ze,hr as Ue,hs as et,ht as tt,r as A,u as _,j as o,bX as F,aJ as we,hu as k,hv as R,hw as N,bW as st,B as $,g8 as q,hx as _e,hy as nt,hz as ot,hA as fe,F as y,T as E,bd as L,hB as pe,hC as it,hD as rt,M as B,O as me,g as T,H as at,J as lt,bQ as ct,Q as re,hE as dt,gX as pt,d_ as ut,f2 as ht}from"./strapi-C-zD5Kso.js";import{c as ie}from"./cloneDeep-DAIkTf4H.js";import{a as gt,_ as ft}from"./_baseEach-C9TxZX3h.js";var mt=Object.prototype,xt=mt.hasOwnProperty;function Ct(e,t){return e!=null&&xt.call(e,t)}var bt=Ct,jt=bt,yt=We;function At(e,t){return e!=null&&yt(e,t,jt)}var kt=At;const U=te(kt);var St=ze,$t=Ye,Ot=Xe,Tt=de,vt=Ke,Mt=Te,wt=qe,_t=ve,Pt="[object Map]",Et="[object Set]",Lt=Object.prototype,Rt=Lt.hasOwnProperty;function It(e){if(e==null)return!0;if(vt(e)&&(Tt(e)||typeof e=="string"||typeof e.splice=="function"||Mt(e)||_t(e)||Ot(e)))return!e.length;var t=$t(e);if(t==Pt||t==Et)return!e.size;if(wt(e))return!St(e).length;for(var n in e)if(Rt.call(e,n))return!1;return!0}var Bt=It;const J=te(Bt);var Nt=et,Ht=Ze,Dt=gt,Ft=Me,Vt=Ue,Gt=de,Wt=Te,Kt=Qe,Xt=Je,Yt=ve;function qt(e,t,n){var s=Gt(e),i=s||Wt(e)||Yt(e);if(t=Ft(t),n==null){var a=e&&e.constructor;i?n=s?new a:[]:Xt(e)?n=Kt(a)?Ht(Vt(e)):{}:n={}}return(i?Nt:Dt)(e,function(l,r,c){return t(n,l,r,c)}),n}var zt=qt;const Jt=te(zt);function Qt(e,t,n,s){for(var i=-1,a=e==null?0:e.length;++i<a;){var l=e[i];t(s,l,n(l),e)}return s}var Zt=Qt,Ut=ft;function es(e,t,n,s){return Ut(e,function(i,a,l){t(s,i,n(i),l)}),s}var ts=es,ss=Zt,ns=ts,os=Me,is=de;function rs(e,t){return function(n,s){var i=is(n)?ss:ns,a=t?t():{};return i(n,e,os(s),a)}}var as=rs,ls=tt,cs=as,ds=Object.prototype,ps=ds.hasOwnProperty,us=cs(function(e,t,n){ps.call(e,n)?e[n].push(t):ls(e,n,[t])}),hs=us;const ae=te(hs),[gs,fs]=st("PermissionsDataManager"),Y=()=>fs("usePermissionsDataManager");function xe(e,t){function n(s,i){return Jt(s,(a,l,r)=>(ot(l,i[r])||(a[r]=fe(l)&&fe(i[r])?n(l,i[r]):l),a))}return n(e,t)}const Pe=e=>Array.isArray(e)?e.reduce((t,n)=>(Array.isArray(n)?t.push(...Pe(n)):t.push(n),t),[]):[],V=e=>N(e)?Pe(Object.values(e).map(t=>N(t)?V(t):t)):[],Ee=(e,t,n)=>e.find(s=>s.action===t&&s.subject===n),ms=e=>{const t=Ce(e.plugins),n=Ce(e.settings),s=be(e.collectionTypes),i=be(e.singleTypes);return[...t,...n,...s,...i]},Ce=e=>Object.values(e).reduce((t,n)=>{const s=Object.values(n).reduce((i,a)=>{const l=Object.entries(a).reduce((r,[c,{conditions:d,properties:{enabled:p}}])=>(p&&r.push({action:c,subject:null,conditions:le(d),properties:{}}),r),[]);return[...i,...l]},[]);return[...t,...s]},[]),be=e=>Object.entries(e).reduce((n,s)=>{const[i,a]=s,l=Object.entries(a).reduce((r,c)=>{const[d,p]=c;if(!V(p).some(h=>h))return r;if(!p?.properties?.enabled){const h=Object.entries(p.properties).reduce((C,m)=>{const[u,f]=m;return C.properties[u]=Le(f),C},{action:d,subject:i,conditions:le(p.conditions),properties:{}});return[...r,h]}return p.properties.enabled&&r.push({action:d,subject:i,properties:{},conditions:le(p.conditions)}),r},[]);return[...n,...l]},[]),Le=(e,t="")=>Object.entries(e).reduce((n,s)=>{const[i,a]=s;return N(a)?[...n,...Le(a,`${t}${i}.`)]:(a&&!N(a)&&n.push(`${t}${i}`),n)},[]),le=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Re=(e,t=[])=>e.reduce((n,s)=>(n[s.id]=t.indexOf(s.id)!==-1,n),{}),je=(e,t,n=[])=>e.reduce((s,{categoryId:i,childrenForm:a})=>{const l=a.reduce((r,c)=>(r[c.subCategoryId]=c.actions.reduce((d,p)=>{const g=Ee(n,p.action,null);return d[p.action]={properties:{enabled:g!==void 0},conditions:Re(t,g?.conditions??[])},d},{}),r),{});return s[i]=l,s},{}),xs=(e,t,n)=>{const s=({children:i=[]},a,l="")=>i.reduce((r,c)=>{if(c.children)return{...r,[c.value]:s(c,a,`${l}${c.value}.`)};const d=a.indexOf(`${l}${c.value}`)!==-1;return r[c.value]=d,r},{});return e.reduce((i,a)=>{const l=t.properties.find(({value:r})=>r===a);if(l){const r=n?.properties[l.value]??[],c=s(l,r);i.properties[a]=c}return i},{properties:{}})},ye=({subjects:e,actions:t=[]},n,s=[])=>t.reduce((i,a)=>{const l=a.subjects.reduce((c,d)=>{const p=e.find(({uid:g})=>g===d)||null;return p&&(c[d]=p),c},{});if(J(l))return i;const r=Object.keys(l).reduce((c,d)=>{const{actionId:p,applyToProperties:g}=a,m=l[d].properties.map(({value:x})=>x).every(x=>(g||[]).indexOf(x)===-1),u=Ee(s,p,d),f=Re(n,u?.conditions??[]);if(c[d]||(c[d]={}),J(g)||m)return c[d][p]={properties:{enabled:u!==void 0},conditions:f},c;const b=xs(g,l[d],u);return c[d][p]={...b,conditions:f},c},{});return nt(i,r)},{}),Ae=(e,t)=>Object.entries(ae(e,t)).map(([n,s])=>({category:n,categoryId:n.split(" ").join("-"),childrenForm:Object.entries(ae(s,"subCategory")).map(([i,a])=>({subCategoryName:i,subCategoryId:i.split(" ").join("-"),actions:a}))})),Z=e=>Object.keys(e).reduce((t,n)=>{const s=e[n];if(N(s)&&!U(s,"conditions"))return{...t,[n]:Z(s)};if(N(s)&&U(s,"conditions")&&!V(_e(s,"conditions")).some(a=>a)){const a=Object.keys(s.conditions).reduce((l,r)=>(l[r]=!1,l),{});return{...t,[n]:{...s,conditions:a}}}return t[n]=s,t},{}),z=(e,t,n=!1)=>Object.keys(e).reduce((s,i)=>{const a=e[i];return i==="conditions"&&!n?(s[i]=a,s):N(a)?{...s,[i]:z(a,t,i==="fields")}:(s[i]=t,s)},{}),I="12rem",ue="20rem",se="5.3rem",he=e=>e?Object.entries(e).reduce((t,[n,s])=>(n!=="conditions"&&(t[n]=s),t),{}):null,G=e=>{const t=he(e),n=V(t);if(!n.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=n.every(a=>a),i=n.some(a=>a)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}},Ie=T(y)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({$isCollapsable:e})=>e&&"cursor: pointer;"}
`,ge=T.div`
  width: ${I};
`,Be=()=>o.jsx($,{color:"danger700",paddingLeft:1,children:"*"}),Ne=({checkboxName:e="",children:t,isActive:n=!1,isCollapsable:s=!1,isFormDisabled:i=!1,label:a,onChange:l,onClick:r,someChecked:c=!1,value:d})=>{const{formatMessage:p}=_(),g={title:a,alignItems:"center",$isCollapsable:s};return s&&Object.assign(g,{onClick:r,"aria-expanded":n,onKeyDown({key:h}){(h==="Enter"||h===" ")&&r()},tabIndex:0,role:"button"}),o.jsxs(y,{alignItems:"center",paddingLeft:6,width:ue,shrink:0,children:[o.jsx($,{paddingRight:2,children:o.jsx(L,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:i,onCheckedChange:h=>l({target:{name:e,value:!!h}}),checked:c?"indeterminate":d})}),o.jsxs(Ie,{...g,children:[o.jsx(E,{ellipsis:!0,children:a}),t]})]})},Cs=({availableActions:e=[],childrenForm:t=[],isFormDisabled:n,label:s,pathToData:i,propertyName:a})=>{const l=A.useMemo(()=>e.map(r=>{const c=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(a)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:c}}),[e,a]);return o.jsxs(y,{display:"inline-flex",direction:"column",alignItems:"stretch",minWidth:0,children:[o.jsx(vs,{label:s,headers:l}),o.jsx($,{children:t.map(({children:r,label:c,value:d,required:p},g)=>o.jsx(bs,{childrenForm:r,label:c,isFormDisabled:n,name:d,required:p,propertyActions:l,pathToData:i,propertyName:a,isOdd:g%2===0},d))})]})},bs=({childrenForm:e=[],label:t,isFormDisabled:n=!1,name:s,required:i=!1,pathToData:a,propertyActions:l,propertyName:r,isOdd:c=!1})=>{const{formatMessage:d}=_(),[p,g]=A.useState(null),{modifiedData:h,onChangeCollectionTypeLeftActionRowCheckbox:C,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=Y(),f=p===s,b=A.useMemo(()=>Array.isArray(e)?e:[],[e]),x=b.length>0,j=A.useCallback(()=>{x&&g(S=>S===s?null:s)},[x,s]),O=({target:{value:S}})=>{C(a,r,s,S)},{hasAllActionsSelected:M,hasSomeActionsSelected:w}=A.useMemo(()=>js(l,h,a,r,s),[l,h,a,r,s]);return o.jsxs(o.Fragment,{children:[o.jsx(ys,{alignItems:"center",$isCollapsable:x,$isActive:f,background:c?"neutral100":"neutral0",children:o.jsxs(y,{children:[o.jsxs(Ne,{onChange:O,onClick:j,isCollapsable:x,isFormDisabled:n,label:t,someChecked:w,value:M,isActive:f,children:[i&&o.jsx(Be,{}),o.jsx(Q,{$isActive:f})]}),o.jsx(y,{children:l.map(({label:S,isActionRelatedToCurrentProperty:P,actionId:W})=>{if(!P)return o.jsx(ge,{},S);const v=[...a.split(".."),W,"properties",r,s];if(!x){const D=k(h,v,!1);return o.jsx(y,{width:I,position:"relative",justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:n,name:v.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${S}`}),onCheckedChange:Ge=>{u({target:{name:v.join(".."),value:!!Ge}})},checked:D})},W)}const K=k(h,v,{}),{hasAllActionsSelected:H,hasSomeActionsSelected:oe}=G(K);return o.jsx(y,{width:I,position:"relative",justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:n,name:v.join(".."),onCheckedChange:D=>{m({target:{name:v.join(".."),value:!!D}})},"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${S}`}),checked:oe?"indeterminate":H})},S)})})]})}),f&&o.jsx(He,{childrenForm:b,isFormDisabled:n,parentName:s,pathToDataFromActionRow:a,propertyName:r,propertyActions:l,recursiveLevel:0})]})},js=(e,t,n,s,i)=>{const l=e.reduce((r,c)=>(c.isActionRelatedToCurrentProperty&&r.push(c.actionId),r),[]).reduce((r,c)=>{const d=k(t,[...n.split(".."),c,"properties",s,i],!1);return r[c]=d,r},{});return G(l)},ys=T(y)`
  height: ${se};
  flex: 1;

  &:hover {
    ${({$isCollapsable:e,theme:t})=>e&&ee(t)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${Q} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:t})=>e&&ee(t)};
`,Q=T(ht)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.neutral200};
  }

  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,He=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:n,pathToDataFromActionRow:s,propertyActions:i,parentName:a,propertyName:l})=>{const{formatMessage:r}=_(),{modifiedData:c,onChangeParentCheckbox:d,onChangeSimpleCheckbox:p}=Y(),[g,h]=A.useState(null),C=u=>{h(f=>f===u?null:u)},m=A.useMemo(()=>g?e.find(({value:u})=>u===g):null,[g,e]);return o.jsxs($,{paddingLeft:"3.2rem",children:[o.jsx($s,{}),e.map(({label:u,value:f,required:b,children:x},j)=>{const O=j+1<e.length,M=Array.isArray(x),w=g===f;return o.jsxs(As,{$isVisible:O,children:[o.jsxs(y,{height:se,children:[o.jsx(Os,{children:o.jsx(Ts,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",$color:"primary200",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),o.jsxs(y,{style:{flex:1},children:[o.jsx(ks,{$level:n,$isActive:w,$isCollapsable:M,children:o.jsxs(Ie,{alignItems:"center",$isCollapsable:M,...M&&{onClick:()=>C(f),"aria-expanded":w,onKeyDown:({key:S})=>(S==="Enter"||S===" ")&&C(f),tabIndex:0,role:"button"},title:u,children:[o.jsx(Ss,{ellipsis:!0,children:u}),b&&o.jsx(Be,{}),o.jsx(Q,{$isActive:w})]})}),o.jsx(y,{style:{flex:1},children:i.map(({actionId:S,label:P,isActionRelatedToCurrentProperty:W})=>{if(!W)return o.jsx(ge,{},S);const v=[...s.split(".."),S,"properties",l,...a.split(".."),f],K=k(c,v,!1);if(!x)return o.jsx(y,{position:"relative",width:I,justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:t,name:v.join(".."),"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${u} ${P}`}),onCheckedChange:D=>{p({target:{name:v.join(".."),value:!!D}})},checked:K})},P);const{hasAllActionsSelected:H,hasSomeActionsSelected:oe}=G(K);return o.jsx(y,{position:"relative",width:I,justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:t,name:v.join(".."),"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${u} ${P}`}),onCheckedChange:D=>{d({target:{name:v.join(".."),value:!!D}})},checked:oe?"indeterminate":H},P)},P)})})]})]}),m&&w&&o.jsx($,{paddingBottom:2,children:o.jsx(He,{isFormDisabled:t,parentName:`${a}..${f}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:l,recursiveLevel:n+1,childrenForm:m.children})})]},f)})]})},As=T($)`
  border-left: ${({$isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,ks=T(y)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({$level:e})=>145-e*36}px;

  &:hover {
    ${({$isCollapsable:e,theme:t})=>e&&ee(t)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${Q} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:t})=>e&&ee(t)};
`,Ss=T(E)``,$s=T.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: 0.4rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Os=T($)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Ts=T.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,$color:t})=>e.colors[t]};
  }
`,vs=({headers:e=[],label:t})=>{const{formatMessage:n}=_();return o.jsxs(y,{children:[o.jsx(y,{width:ue,height:se,shrink:0,alignItems:"center",paddingLeft:6,children:o.jsx(E,{variant:"sigma",textColor:"neutral500",children:n({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(s=>s.isActionRelatedToCurrentProperty?o.jsx(y,{width:I,shrink:0,justifyContent:"center",children:o.jsx(E,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${s.label.toLowerCase()}`,defaultMessage:s.label})})},s.label):o.jsx(y,{width:I,shrink:0},s.label))]})},ee=e=>pt`
  color: ${e.colors.primary600};
  font-weight: ${e.fontWeights.bold};

  ${Q} {
    path {
      fill: ${e.colors.primary600};
    }
  }
`,Ms=A.forwardRef(({onClick:e,className:t,hasConditions:n=!1,variant:s="tertiary"},i)=>{const{formatMessage:a}=_();return o.jsx(ws,{$hasConditions:n,className:t,children:o.jsx(re,{variant:s,startIcon:o.jsx(ut,{}),onClick:e,ref:i,type:"button",children:a({id:"global.settings",defaultMessage:"Settings"})})})}),ws=T($)`
  ${({$hasConditions:e,theme:t})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: 2rem;
      background: ${t.colors.primary600};
    }
  `}
`,ne=T(Ms)``,De=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:n,onClose:s})=>{const{formatMessage:i}=_(),{availableConditions:a,modifiedData:l,onChangeConditions:r}=Y(),c=A.useMemo(()=>Object.entries(ae(a,"category")),[a]),d=e.filter(({isDisplayed:u,hasSomeActionsSelected:f,hasAllActionsSelected:b})=>u&&!!(f||b)),[p,g]=A.useState(ke(d,l,c)),h=(u,f)=>{g(we(b=>{b[u]||(b[u]={}),b[u].default||(b[u].default={}),b[u].default=f}))},C=()=>{const u=Object.entries(p).reduce((f,b)=>{const[x,j]=b,O=Object.values(j).reduce((M,w)=>({...M,...w}),{});return f[x]=O,f},{});r(u),s&&s()},m=()=>{g(ke(d,l,c)),s&&s()};return o.jsxs(B.Content,{children:[o.jsx(B.Header,{children:o.jsx(at,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((u,f,b)=>o.jsx(lt,{isCurrent:f===b.length-1,children:ct(i({id:u,defaultMessage:u}))},u))})}),o.jsxs(B.Body,{children:[d.length===0&&o.jsx(E,{children:i({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),o.jsx("ul",{children:d.map(({actionId:u,label:f,pathToConditionsObject:b},x)=>{const j=b.join("..");return o.jsx(_s,{arrayOfOptionsGroupedByCategory:c,label:f,isFormDisabled:n,isGrey:x%2===0,name:j,onChange:h,value:k(p,j,{})},u)})})]}),o.jsxs(B.Footer,{children:[o.jsx(re,{variant:"tertiary",onClick:()=>m(),children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),o.jsx(re,{onClick:C,children:i({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})]})]})},ke=(e,t,n)=>e.reduce((s,i)=>{const a=k(t,[...i.pathToConditionsObject,"conditions"],{}),l=n.reduce((r,c)=>{const[d,p]=c,g=p.reduce((h,C)=>(h[C.id]=k(a,C.id,!1),h),{});return r[d]=g,r},{});return s[i.pathToConditionsObject.join("..")]=l,s},{}),_s=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:n=!1,label:s,name:i,onChange:a,value:l})=>{const{formatMessage:r}=_(),c=d=>{a&&a(i,Ls(e,d))};return o.jsxs(y,{tag:"li",background:n?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,justifyContent:"space-evenly",children:[o.jsxs(y,{style:{width:180},children:[o.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[r({id:"Settings.permissions.conditions.can",defaultMessage:"Can"})," "]}),o.jsx(E,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0,children:r({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})}),o.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[" ",r({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),o.jsx($,{style:{maxWidth:430,width:"100%"},children:o.jsx(dt,{id:i,customizeContent:(d=[])=>`${d.length} currently selected`,onChange:c,value:Ps(l),options:Es(e),disabled:t})})]})},Ps=e=>Object.values(e).map(t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n)).flat(),Es=e=>e.reduce((t,[n,s])=>(t.push({label:pe(n),children:s.map(i=>({label:i.displayName,value:i.id}))}),t),[]),Ls=(e,t)=>e.map(([,n])=>n).flat().reduce((n,s)=>({[s.id]:t.includes(s.id),...n}),{}),Rs=({actions:e=[],isFormDisabled:t,pathToData:n,subjects:s=[]})=>{const[i,a]=A.useState(null),l=r=>()=>{a(i===r?null:r)};return o.jsx(o.Fragment,{children:s.map(({uid:r,label:c,properties:d},p)=>{const g=i===r,h=e.map(C=>({...C,isDisplayed:Array.isArray(C.subjects)&&C.subjects.indexOf(r)!==-1}));return o.jsxs(y,{direction:"column",display:"inline-flex",alignItems:"stretch",minWidth:"100%",borderColor:g?"primary600":void 0,children:[o.jsx(Is,{availableActions:h,isActive:g,isGrey:p%2===0,isFormDisabled:t,label:c,onClickToggle:l(r),pathToData:[n,r].join("..")}),g&&d.map(({label:C,value:m,children:u})=>o.jsx(Cs,{availableActions:h,childrenForm:u,isFormDisabled:t,label:C,pathToData:[n,r].join(".."),propertyName:m},m))]},r)})})},Is=({availableActions:e=[],isActive:t=!1,isGrey:n=!1,isFormDisabled:s=!1,label:i,onClickToggle:a,pathToData:l})=>{const{formatMessage:r}=_(),{modifiedData:c,onChangeParentCheckbox:d,onChangeSimpleCheckbox:p}=Y(),[g,h]=A.useState(!1),C=k(c,l.split(".."),{}),m=A.useMemo(()=>Object.keys(C).reduce((j,O)=>(j[O]=_e(C[O],"conditions"),j),{}),[C]),{hasAllActionsSelected:u,hasSomeActionsSelected:f}=G(m),b=A.useMemo(()=>Bs(e,c,l),[e,c,l]),x=b.some(j=>j.hasConditions);return o.jsxs(Ns,{$isActive:t,children:[o.jsxs(Fe,{height:se,flex:1,alignItems:"center",background:n?"neutral100":"neutral0",children:[o.jsx(Ne,{isCollapsable:!0,isFormDisabled:s,label:pe(i),checkboxName:l,onChange:d,onClick:a,someChecked:f,value:u,isActive:t,children:o.jsx(Ve,{paddingLeft:2,children:t?o.jsx(it,{}):o.jsx(rt,{})})}),o.jsx(y,{style:{flex:1},children:b.map(({actionId:j,hasSomeActionsSelected:O,isDisplayed:M,...w})=>{if(!M)return o.jsx(ge,{},j);const{hasConditions:S,hasAllActionsSelected:P,isParentCheckbox:W,checkboxName:v,label:K}=w;return W?o.jsxs(Se,{justifyContent:"center",alignItems:"center",children:[S&&o.jsx($,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),o.jsx(L,{disabled:s,name:v,"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${K} ${i}`}),onCheckedChange:H=>{d({target:{name:v,value:!!H}})},checked:O?"indeterminate":P})]},j):o.jsxs(Se,{justifyContent:"center",alignItems:"center",children:[S&&o.jsx($,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),o.jsx(L,{disabled:s,name:v,onCheckedChange:H=>{p({target:{name:v,value:!!H}})},checked:S?"indeterminate":P})]},j)})})]}),o.jsx($,{bottom:"10px",right:"9px",position:"absolute",children:o.jsxs(B.Root,{open:g,onOpenChange:()=>{h(j=>!j)},children:[o.jsx(B.Trigger,{children:o.jsx(ne,{hasConditions:x})}),o.jsx(De,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:b,isFormDisabled:s,onClose:()=>{h(!1)}})]})})]})},Bs=(e,t,n)=>e.map(({actionId:s,isDisplayed:i,applyToProperties:a,label:l})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const r=[...n.split(".."),s],c=J(a)?[...r,"properties","enabled"]:r,d=k(t,[...r,"conditions"],null),p={actionId:s,checkboxName:c.join(".."),hasConditions:V(d).some(m=>m),isDisplayed:i,label:l,pathToConditionsObject:r};if(J(a)){const m=k(t,c,!1);return{...p,hasAllActionsSelected:m,hasSomeActionsSelected:m,isParentCheckbox:!1}}const g=k(t,c,null),{hasAllActionsSelected:h,hasSomeActionsSelected:C}=G(g);return{...p,hasAllActionsSelected:h,hasSomeActionsSelected:C,isParentCheckbox:!0}}),ce=(e,t)=>`
  ${Fe} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
    font-weight: ${e.fontWeights.bold};
  }

  ${Ve} {
    display: flex;
  }
  ${ne} {
    display: block;
  }

  &:focus-within {
    ${()=>ce(e,t)}
  }
`,Fe=T(y)`
  border: 1px solid transparent;
`,Ns=T.div`
  display: inline-flex;
  min-width: 100%;
  position: relative;

  ${ne} {
    display: none;
  }

  ${({$isActive:e,theme:t})=>e&&ce(t,e)}

  &:hover {
    ${({theme:e,$isActive:t})=>ce(e,t)}
  }
`,Se=T(y)`
  width: ${I};
  position: relative;
`,Ve=T($)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Hs=({actions:e=[],isFormDisabled:t,kind:n})=>{const{formatMessage:s}=_(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:a}=Y(),l=e.filter(({subjects:c})=>c&&c.length),r=A.useMemo(()=>{const c=l.map(({actionId:h})=>h),d=i[n],p=c.reduce((h,C)=>(Object.keys(d).forEach(m=>{const u=k(d,[m,C]),f={[m]:he(u)};h[C]?h[C]={...h[C],...f}:h[C]=f}),h),{});return Object.keys(p).reduce((h,C)=>(h[C]=G(p[C]),h),{})},[i,l,n]);return o.jsx($,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ue},children:o.jsx(y,{gap:0,children:l.map(({label:c,actionId:d})=>o.jsxs(y,{shrink:0,width:I,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[o.jsx(E,{variant:"sigma",textColor:"neutral500",children:s({id:`Settings.roles.form.permissions.${c.toLowerCase()}`,defaultMessage:c})}),o.jsx(L,{disabled:t,onCheckedChange:p=>{a(n,d,!!p)},name:d,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${c.toLowerCase()}`,defaultMessage:c})}),checked:k(r,[d,"hasSomeActionsSelected"],!1)?"indeterminate":k(r,[d,"hasAllActionsSelected"],!1)})]},d))})})},$e=({isFormDisabled:e,kind:t,layout:{actions:n,subjects:s}})=>{const i=[...s].sort((a,l)=>a.label.localeCompare(l.label));return o.jsxs($,{background:"neutral0",children:[o.jsx(Hs,{actions:n,kind:t,isFormDisabled:e}),o.jsx(Rs,{actions:n,isFormDisabled:e,pathToData:t,subjects:i})]})},Oe=({layout:e,...t})=>o.jsx($,{padding:6,background:"neutral0",children:o.jsx(q.Root,{size:"M",children:e.map(({category:n,categoryId:s,childrenForm:i},a)=>o.jsx(Ds,{childrenForm:i,variant:a%2===1?"primary":"secondary",name:n,pathToData:[t.kind,s],...t},n))})}),Ds=({childrenForm:e,kind:t,name:n,isFormDisabled:s=!1,variant:i,pathToData:a})=>{const{formatMessage:l}=_(),r=n.split("::").pop()??"";return o.jsxs(q.Item,{value:n,children:[o.jsx(q.Header,{variant:i,children:o.jsx(q.Trigger,{caretPosition:"right",description:`${l({id:"Settings.permissions.category",defaultMessage:r},{category:r})} ${t==="plugins"?"plugin":t}`,children:pe(r)})}),o.jsx(q.Content,{children:o.jsx($,{padding:6,children:e.map(({actions:c,subCategoryName:d,subCategoryId:p})=>o.jsx(Fs,{actions:c,categoryName:r,isFormDisabled:s,subCategoryName:d,pathToData:[...a,p]},d))})})]})},Fs=({actions:e=[],categoryName:t,isFormDisabled:n,subCategoryName:s,pathToData:i})=>{const{modifiedData:a,onChangeParentCheckbox:l,onChangeSimpleCheckbox:r}=Y(),[c,d]=A.useState(!1),{formatMessage:p}=_(),g=k(a,i,{}),h=A.useMemo(()=>Object.keys(g).reduce((x,j)=>(x[j]=he(g[j]),x),{}),[g]),{hasAllActionsSelected:C,hasSomeActionsSelected:m}=G(h),u=A.useMemo(()=>e.map(x=>{const j=[...i,x.action,"properties","enabled"],O=k(a,j,!1),M=k(a,[...i,x.action,"conditions"],{}),w=V(M).some(S=>S);return{...x,isDisplayed:O,checkboxName:j.join(".."),hasSomeActionsSelected:O,value:O,hasConditions:w,label:x.displayName,actionId:x.action,pathToConditionsObject:[...i,x.action]}}),[e,a,i]),f=k(a,[...i],{}),b=V(Object.entries(f).reduce((x,j)=>{const[O,{conditions:M}]=j;return x[O]=M,x},{})).some(x=>x);return o.jsx(o.Fragment,{children:o.jsxs($,{children:[o.jsxs(y,{justifyContent:"space-between",alignItems:"center",children:[o.jsx($,{paddingRight:4,children:o.jsx(E,{variant:"sigma",textColor:"neutral600",children:s})}),o.jsx(Vs,{flex:1}),o.jsx($,{paddingLeft:4,children:o.jsx(L,{name:i.join(".."),disabled:n,onCheckedChange:x=>{l({target:{name:i.join(".."),value:!!x}})},checked:m?"indeterminate":C,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),o.jsxs(y,{paddingTop:6,paddingBottom:6,children:[o.jsx(me.Root,{gap:2,style:{flex:1},children:u.map(({checkboxName:x,value:j,action:O,displayName:M,hasConditions:w})=>o.jsx(me.Item,{col:3,direction:"column",alignItems:"start",children:o.jsx(Gs,{$disabled:n,$hasConditions:w,children:o.jsx(L,{name:x,disabled:n,onCheckedChange:S=>{r({target:{name:x,value:!!S}})},checked:j,children:M})})},O))}),o.jsxs(B.Root,{open:c,onOpenChange:()=>{d(x=>!x)},children:[o.jsx(B.Trigger,{children:o.jsx(ne,{hasConditions:b})}),o.jsx(De,{headerBreadCrumbs:[t,s],actions:u,isFormDisabled:n,onClose:()=>{d(!1)}})]})]})]})})},Vs=T($)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Gs=T.div`
  position: relative;
  word-break: keep-all;
  ${({$hasConditions:e,$disabled:t,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -0.4rem;
      left: -0.8rem;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 2rem;
      background: ${t?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,X=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Js=A.forwardRef(({layout:e,isFormDisabled:t,permissions:n=[]},s)=>{const[{initialData:i,layouts:a,modifiedData:l},r]=A.useReducer(Ks,Ws,()=>Xs(e,n)),{formatMessage:c}=_();A.useImperativeHandle(s,()=>({getPermissions(){const m=xe(i.collectionTypes,l.collectionTypes),u=xe(i.singleTypes,l.singleTypes),f={...m,...u};let b;return J(f)?b=!1:b=Object.values(f).some((x={})=>Object.values(x).some(j=>U(j,"conditions"))),{permissionsToSend:ms(l),didUpdateConditions:b}},resetForm(){r({type:"RESET_FORM"})},setFormAfterSubmit(){r({type:"SET_FORM_AFTER_SUBMIT"})}}));const d=(m,u,f,b)=>{r({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:m,propertyName:u,rowName:f,value:b})},p=(m,u,f)=>{r({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:m,actionId:u,value:f})},g=m=>{r({type:"ON_CHANGE_CONDITIONS",conditions:m})},h=A.useCallback(({target:{name:m,value:u}})=>{r({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:m,value:u})},[]),C=A.useCallback(({target:{name:m,value:u}})=>{r({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:m,value:u})},[]);return o.jsx(gs,{availableConditions:e.conditions,modifiedData:l,onChangeConditions:g,onChangeSimpleCheckbox:h,onChangeParentCheckbox:C,onChangeCollectionTypeLeftActionRowCheckbox:d,onChangeCollectionTypeGlobalActionCheckbox:p,children:o.jsxs(F.Root,{defaultValue:X[0].id,children:[o.jsx(F.List,{"aria-label":c({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:X.map(m=>o.jsx(F.Trigger,{value:m.id,children:c({id:m.labelId,defaultMessage:m.defaultMessage})},m.id))}),o.jsx(F.Content,{value:X[0].id,children:o.jsx($e,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),o.jsx(F.Content,{value:X[1].id,children:o.jsx($e,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),o.jsx(F.Content,{value:X[2].id,children:o.jsx(Oe,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),o.jsx(F.Content,{value:X[3].id,children:o.jsx(Oe,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})})}),Ws={initialData:{},modifiedData:{},layouts:{}},Ks=(e,t)=>we(e,n=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:a}=t,l=["modifiedData",s];Object.keys(k(e,l)).forEach(r=>{const c=k(e,[...l,r,i],void 0);if(c){let d=z(c,a);if(!a&&d.conditions){const p=z(d.conditions,!1);d={...d,conditions:p}}R(n,[...l,r,i],d)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:a,value:l}=t;let r=ie(e.modifiedData);const c=s.split(".."),d=k(r,c,{});Object.keys(d).forEach(p=>{if(U(d[p],`properties.${i}`)){const g=k(d,[p,"properties",i,a]),h=[...c,p,"properties",i,a];if(!N(g))R(r,h,l);else{const C=z(g,l);R(r,h,C)}}}),l||(r=Z(r)),R(n,"modifiedData",r);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(s=>{const[i,a]=s;R(n,["modifiedData",...i.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=ie(e.modifiedData);R(s,[...t.keys.split("..")],t.value),t.value||(s=Z(s)),R(n,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=t,a=[...s.split("..")];let l=ie(e.modifiedData);const r=k(l,a,{}),c=z(r,i);R(l,a,c),i||(l=Z(l)),R(n,["modifiedData"],l);break}case"RESET_FORM":{n.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{n.initialData=e.modifiedData;break}default:return n}}),Xs=(e,t)=>{const{conditions:n,sections:{collectionTypes:s,singleTypes:i,plugins:a,settings:l}}=e,r={collectionTypes:s,singleTypes:i,plugins:Ae(a,"plugin"),settings:Ae(l,"category")},c={collectionTypes:ye(s,n,t),singleTypes:ye(i,n,t),plugins:je(r.plugins,n,t),settings:je(r.settings,n,t)};return{initialData:c,modifiedData:c,layouts:r}};export{Js as P};
