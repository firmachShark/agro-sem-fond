(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{1890:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/catalog/[categoryName]/[productName]",function(){return r(9908)}])},9908:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return X},default:function(){return Y}});var a=r(5893),s=r(9008),i=r.n(s),l=r(5675),n=r.n(l),c=r(7294),d=r(130),o=r(5034),u=r(3192),h=r(4102),m=r(2310),_=r(5577),p=r(7833),x=r.n(p);r(2689),r(7968);var j=r(1664),v=r.n(j),f=r(5131),y=r(5168),g=r(2411),N=r(5838),w=r(458),b=r(9794),k=r(275),P=r.n(k);let S=e=>{let{data:t,setPrice:r}=e,s=(0,c.useMemo)(()=>Object.keys(t).map(e=>({title:e+" м.",value:e})),[t]),i=(0,c.useMemo)(()=>Object.keys(t[Object.keys(t)[0]]).map(e=>({title:e+" м.",value:e})),[t]),[l,n]=(0,c.useState)(()=>s[0].value),[d,o]=(0,c.useState)(()=>i[0].value),u=(e,t)=>()=>{switch(e){case"length":n(t);break;case"step":o(t);break;default:return}};return(0,c.useEffect)(()=>{r(t[l][d])},[d,l,r,t]),(0,a.jsxs)("form",{"data-calculator":!0,className:P().calculator,children:[(0,a.jsxs)("div",{className:P().section,children:[(0,a.jsx)("h4",{children:"Длина:"}),(0,a.jsx)("div",{className:P().inputs,children:s.map((e,t)=>{let r="calculator-input-length-".concat(t);return(0,a.jsxs)("div",{className:P().input,children:[(0,a.jsx)("input",{checked:l===e.value,type:"radio",name:"calculator-input-length",id:r,value:e.value,onChange:u("length",e.value)}),(0,a.jsx)("label",{htmlFor:r,children:e.title})]},r)})})]}),(0,a.jsxs)("div",{className:P().section,children:[(0,a.jsx)("h4",{children:"Шаг:"}),(0,a.jsx)("div",{className:P().inputs,children:i.map((e,t)=>{let r="calculator-input-step-".concat(t);return(0,a.jsxs)("div",{className:P().input,children:[(0,a.jsx)("input",{checked:d===e.value,type:"radio",name:"calculator-input-step",id:r,value:e.value,onChange:u("step",e.value)}),(0,a.jsx)("label",{htmlFor:r,children:e.title})]},r)})})]})]})};var C=r(2333),I=r(6772),O=r(129),F=r.n(O),Z=r(9827),M=new class{async getByProductId(e){return(0,Z.hM)("product-reviews?".concat(F().stringify({filters:{product:{id:{$eq:e}}}})))}async addReview(e,t){return Z.Wh.post("product-reviews",{data:{author:t.author,content:t.content,product:{id:e}}})}},R=r(2489),z=r(5926),E=r.n(z),A=r(4337);let L=e=>{let{productId:t,setReviews:r}=e,[s,i]=(0,c.useState)(!1),[l,n]=(0,c.useState)(""),[d,o]=(0,c.useState)(""),[u,h]=(0,c.useState)(!1),[m,_]=(0,c.useState)(!1),[p,x]=(0,c.useState)(!1),j=(0,c.useId)(),v=(0,c.useId)(),f=e=>n(e.target.value),g=e=>{let t=e.target.value;t.length>500&&(t=t.slice(0,500)),o(t)},N=async()=>{if(l.length<2)return _(!0);if(_(!1),d.length<10)return x(!0);x(!1),h(!0);try{let e=await M.addReview(t,{author:l,content:d});if(200===e.status){let a=(0,A.r)(e.data.data);r(e=>Array.isArray(e)?[...e,a]:[a]),w()}}catch(s){console.error(s)}h(!1)},w=()=>{n(""),o(""),_(!1),x(!1),i(!1)};return s?(0,a.jsxs)("div",{className:E().review_form,children:[u&&(0,a.jsx)(R.a,{}),(0,a.jsx)("label",{htmlFor:v,children:"Ваше Имя"}),(0,a.jsx)("input",{value:l,onChange:f,autoFocus:!0,id:v,placeholder:"Имя"}),m&&(0,a.jsx)("p",{className:E().error,children:"Длина имени должна быть больше 2 символов"}),(0,a.jsxs)("label",{htmlFor:j,children:["Ваш отзыв: ",d.length,"/",500]}),(0,a.jsx)("textarea",{id:j,value:d,onChange:g,placeholder:"Отзыв"}),p&&(0,a.jsx)("p",{className:E().error,children:"Длина отзыва должна быть больше 10 символов"}),(0,a.jsx)(y.z,{sizeMode:"sm",variant:"primary",onClick:N,children:"Отправить"}),(0,a.jsx)(y.z,{sizeMode:"sm",variant:"primary",bg:"outline-primary",onClick:w,className:"ms-2",children:"Отмена"})]}):(0,a.jsx)(y.z,{sizeMode:"sm",variant:"primary",onClick:()=>i(!0),children:"Оставить отзыв"})},T=e=>{let{productId:t,isOpen:r}=e,[s,i]=(0,c.useState)(!1),[l,n]=(0,c.useState)(null),d=(0,c.useCallback)(async()=>{if(r&&null===l){i(!0);try{let e=await M.getByProductId(t);n(e)}catch(a){console.log(a)}i(!1)}},[t,r,l]);return(0,c.useEffect)(()=>{d()},[d]),(0,a.jsx)("div",{className:E().wrapper,children:s?(0,a.jsx)("div",{className:E().loader,children:(0,a.jsx)(R.a,{withoutOverlay:!0})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L,{productId:t,setReviews:n}),l&&l.length?l.map(e=>(0,a.jsxs)("div",{className:E().review,children:[(0,a.jsxs)("h6",{children:[e.author," ",(0,a.jsx)("span",{children:new Date(e.createdAt).toLocaleString("ru")})]}),(0,a.jsx)("p",{children:e.content})]},e.id)):(0,a.jsx)("h4",{className:E().not_yet,children:"Отзывов пока нет"})]})})};var W=r(48),J=r(5371);let K=e=>{let{product:t,products:r}=e,{name:s,images:l,props:p,price:j,description:k,calculator:P}=t,{dispatchOpenModalOrder:O}=(0,C.BA)({openModalOrder:I.ar}),[F,Z]=(0,c.useState)(0),[M,R]=(0,c.useState)(j),[z,E]=(0,c.useState)("description"),A=(0,g._)("cart"),L=A&&!!A[t.id],[K,X]=(0,c.useState)(()=>{var e;let r=N.Y.get("cart");if(!r)return 1;let a=null===(e=r[t.id])||void 0===e?void 0:e.count;return void 0!==a?a:1}),Y=(0,c.useMemo)(()=>p?Object.keys(p).filter(e=>p[e].length<=30).slice(0,4).reduce((e,t)=>({...e,[t]:p[t]}),{}):null,[p]),q=e=>{Z(e)},D=()=>{w.Z.add(t.id,{count:K,price:M})},H=()=>{w.Z.remove(t.id),X(1)},U=()=>{O({title:"Купить в один клик",text:"Оставьте заявку и наш менеджер с Вами свяжется!"})};return(0,c.useEffect)(()=>{J.Z.add({id:t.id})},[t.id]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:"Каталог - ".concat(s)})}),(0,a.jsxs)("section",{className:"pt-0",children:[(0,a.jsx)(h.O,{}),(0,a.jsxs)(m.W,{className:(0,b.o)(["container",x().container]),children:[(0,a.jsx)("h3",{className:(0,b.o)([x().title,"ps-0 d-md-none d-block"]),children:s}),(0,a.jsxs)("div",{className:x().inner,children:[(0,a.jsx)("div",{children:!!(null==l?void 0:l.length)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{interval:null,activeIndex:F,onSelect:q,indicators:!1,children:l.map((e,t)=>(0,a.jsx)(d.Z.Item,{children:(0,a.jsx)(n(),{"data-fancybox":s,width:e.width,height:e.height,className:x().carousel_image,src:e.url,alt:s,placeholder:"empty"})},t))}),(0,a.jsx)("div",{className:x().carousel_dots,children:l.map((e,t)=>{let r=l.length>3?100/l.length-2:31;return(0,a.jsx)("div",{className:t===F?x().carousel_dot_active:void 0,style:{width:"".concat(r,"%")},children:(0,a.jsx)(n(),{onClick:()=>q(t),width:e.width,height:e.height,src:e.url,alt:s,placeholder:"empty"})},t)})})]})}),(0,a.jsxs)("div",{className:x().info,children:[(0,a.jsx)("h3",{className:(0,b.o)([x().title,"d-md-block d-none"]),children:s}),(0,a.jsxs)("div",{className:x().on_stock,children:[(0,a.jsx)("span",{children:"В наличии"}),(0,a.jsx)("div",{className:x().buy_btn,children:(0,a.jsx)(y.z,{variant:"orange",onClick:U,children:"Купить в один клик"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("strong",{children:[(0,a.jsx)("span",{children:M})," руб./шт"]}),L?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(v(),{href:"/cart",children:[(0,a.jsx)("i",{className:"fa fa-check","aria-hidden":"true"}),"В корзине",K>1&&(0,a.jsxs)("b",{children:[" (",K," шт.)"]})]}),(0,a.jsx)(y.z,{variant:"primary",bg:"outline-primary",onClick:H,children:"Убрать"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.P,{value:K,setValue:X}),(0,a.jsx)(y.z,{variant:"primary",onClick:D,children:"В корзину"})]})]})]}),P&&(0,a.jsx)(S,{data:P,setPrice:R}),(0,a.jsxs)("div",{className:x().content,children:[Y&&(0,a.jsx)("ul",{className:x().short_props,children:Object.keys(Y).map((e,t)=>(0,a.jsxs)("li",{style:{animationDelay:"".concat((t+1)*300,"ms")},children:[(0,a.jsx)("span",{children:e}),(0,a.jsx)("hr",{}),(0,a.jsx)("b",{children:Y[e]})]},e))}),(0,a.jsxs)("div",{className:x().delivery,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(v(),{href:"/payment",children:"Оплата"}),(0,a.jsx)("p",{children:"банковской картой, электронными деньгами или наложенным платежом"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v(),{href:"/delivery",children:"Удобная доставка"}),(0,a.jsx)("p",{children:"Различные способы доставки на любой вкус"})]})]})]})]})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-7 col-12",children:(0,a.jsxs)(o.Z,{id:"product-tabs",className:"mt-3",activeKey:z,onSelect:e=>E(e),children:[(0,a.jsx)(u.Z,{eventKey:"description",title:"Описание",className:x().description,dangerouslySetInnerHTML:{__html:k}}),p&&(0,a.jsx)(u.Z,{eventKey:"params",title:"Характеристики",children:(0,a.jsx)("ul",{className:(0,b.o)([x().short_props,"mw-100"]),children:Object.keys(p).map((e,t)=>(0,a.jsxs)("li",{style:{animationDelay:"".concat(200*t,"ms")},children:[(0,a.jsx)("span",{children:e}),(0,a.jsx)("b",{children:p[e]})]},e))})}),(0,a.jsx)(u.Z,{eventKey:"reviews",title:"Отзывы",children:(0,a.jsx)(T,{isOpen:"reviews"===z,productId:t.id})})]})}),(0,a.jsx)("div",{className:"col-md-5 col-12 pt-5",children:(0,a.jsxs)("form",{className:x().form,children:[(0,a.jsx)("h4",{children:"Оставьте заявку чтобы купить!"}),(0,a.jsx)(W.I,{name:"name",placeholder:"Ваше Имя"}),(0,a.jsx)(W.I,{name:"phone",placeholder:"Ваш Номер",required:!0}),(0,a.jsx)(y.z,{type:"submit",variant:"primary",children:"Отправить"})]})})]})]}),(0,a.jsx)(_.WO,{products:r,isNew:!0,title:"Новинки"})]})]})};var X=!0,Y=K},4102:function(e,t,r){"use strict";r.d(t,{O:function(){return o}});var a=r(5893),s=r(1664),i=r.n(s),l=r(7294);let n=e=>decodeURI(e).replaceAll("_"," ");var c=r(2310);let d={catalog:"Каталог",search:"Поиск",cart:"Корзина",delivery:"Доставка",payment:"Оплата",about:"О нас",stock:"Акции",blog:"Блог",faq:"Задать вопрос",galery:"Галерея",garanty:"Гарантия",viewed:"Раннее вы смотрели"},o=e=>{let{replace:t}=e,[r,s]=(0,l.useState)([[],void 0]),[o,u]=r;return(0,l.useEffect)(()=>{let e="/",r=decodeURI(window.location.pathname).split("/").slice(1).map(r=>{let a=e+r+"/";e=a;let s=!!(t&&void 0!==t[r]),i=void 0!==d[r],l=s?t[r]:i?d[r]:n(r);return{href:a,name:l}}),a=r.pop();s([r,a])},[t]),(0,a.jsx)(c.W,{children:(0,a.jsx)("nav",{"aria-label":"breadcrumb",children:(0,a.jsxs)("ol",{className:"breadcrumb",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(i(),{href:"/",children:"Главная"})}),o.map(e=>(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)(i(),{href:e.href,children:e.name})},e.href)),u&&(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:u.name})]})})})}},2489:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});var a=r(5893);r(7294);var s=r(9794),i=r(4898),l=r.n(i);let n=e=>{let{withoutOverlay:t}=e;return(0,a.jsx)("div",{className:(0,s.o)([l().loading,t?void 0:l().overlay]),children:(0,a.jsx)("i",{className:"fa fa-repeat","aria-hidden":"true"})})}},5371:function(e,t){"use strict";let r="viewed",a=RegExp("(^| )"+r+"=([^;]+)");t.Z=new class{getFromCookie(e){let t=e||document.cookie,r=t.match(a);return r?this.parseJSON(r[2]):null}parseJSON(e){try{let t=JSON.parse(e);if(!Array.isArray(t))return null;return t}catch(r){return null}}setInCookie(e){let t="";try{t=JSON.stringify(e)}catch(a){return!1}if(!t)return!1;let s=new Date;s.setTime(s.getTime()+2592e6);let i="expires="+s.toUTCString();return document.cookie=r+"="+t+"; "+i+"; path=/",!0}add(e){let t=this.getFromCookie();if(t){let r=t.find(t=>t.id===e.id);if(r)return;t.unshift(e)}this.setInCookie(t||[{id:e.id}])}getAll(){return this.getFromCookie()||[]}clear(){this.setInCookie([])}}},7833:function(e){e.exports={container:"Product_container__HAu8X",inner:"Product_inner__nrQ8a",carousel_image:"Product_carousel_image__NvUp4",carousel_dots:"Product_carousel_dots__hJRZy",carousel_dot_active:"Product_carousel_dot_active__K2Ysb",info:"Product_info__o6hwW",title:"Product_title__lIGwn",on_stock:"Product_on_stock__jjWwG",content:"Product_content__k1Sis",short_props:"Product_short_props__GbY_5",fade:"Product_fade__HX72Y",delivery:"Product_delivery__uilaa",form:"Product_form__WDThY",description:"Product_description__MMCLW"}},275:function(e){e.exports={calculator:"Calculator_calculator__Zhg7z",section:"Calculator_section__LlrdS",inputs:"Calculator_inputs__q7rp1",input:"Calculator_input__ZyXr8"}},4898:function(e){e.exports={loading:"Loader_loading___H9TE",show:"Loader_show__YFqMF",rotate:"Loader_rotate__x_v_I",overlay:"Loader_overlay__lKXgr"}},5926:function(e){e.exports={wrapper:"ProductReview_wrapper__J6Se2",not_yet:"ProductReview_not_yet__IsgUP",review:"ProductReview_review__ZfbHM",loader:"ProductReview_loader__Cdf6d",error:"ProductReview_error__npuBh",review_form:"ProductReview_review_form__P_4e7"}}},function(e){e.O(0,[66,834,339,577,774,888,179],function(){return e(e.s=1890)}),_N_E=e.O()}]);