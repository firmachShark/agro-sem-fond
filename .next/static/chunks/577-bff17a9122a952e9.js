(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{152:function(e,A,i){"use strict";i.d(A,{Z:function(){return m}});var t=i(5893),n=i(1664),s=i.n(n),r=i(7294),c=i(2411),a=i(9794),l=i(5838),o=i(458),d=i(5168),h=i(5131),g=i(9283),u=i.n(g),x=i(6394);let m=e=>{let{product:A,isNew:i,description:n}=e,g=(0,c._)("cart"),m=g&&!!g[A.id],[j,v]=(0,r.useState)(()=>{var e;let i=l.Y.get("cart");if(!i)return 1;let t=null===(e=i[A.id])||void 0===e?void 0:e.count;return void 0!==t?t:1}),p=(0,r.useMemo)(()=>{let e=A.props;return e?Object.keys(e).slice(0,7).reduce((A,i)=>({...A,[i]:e[i]}),{}):null},[A]),b=(0,r.useMemo)(()=>{let e=A.preview;if(!e&&A.images){let i=A.images[0];i&&(e=i)}return e?{imageURL:e.url,imageWidth:e.width,imageHeight:e.height}:null},[A]),f=(0,r.useMemo)(()=>{var e;let i="/";if((null===(e=A.subcategories)||void 0===e?void 0:e.length)&&A.subcategories[0].category){let t=A.href,n=A.subcategories[0].category.href;i="/catalog/".concat(n,"/").concat(t)}return i},[A]),E=()=>{o.Z.add(A.id,{count:j,price:A.price})},_=()=>{o.Z.remove(A.id),v(1)};return(0,t.jsxs)("article",{className:(0,a.o)([u().card,n?u().d_wrapper:void 0]),children:[n&&p&&(0,t.jsx)("div",{className:(0,a.o)([u().description]),children:(0,t.jsx)("ul",{children:Object.keys(p).map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:e}),(0,t.jsx)("span",{children:p[e]})]},e))})}),i&&(0,t.jsx)("span",{className:u().sticker,children:"Новинка"}),b&&(0,t.jsx)(s(),{href:f,className:u().header,children:(0,t.jsx)(x.E,{width:b.imageWidth,height:b.imageHeight,src:b.imageURL,alt:A.name,placeholder:"empty"})}),(0,t.jsxs)("div",{className:u().body,children:[(0,t.jsx)("div",{className:"d-flex justify-content-between",children:(0,t.jsx)(s(),{href:f,className:u().title,children:A.name})}),(0,t.jsxs)("strong",{children:[A.price," руб."]}),(0,t.jsx)("div",{className:"d-flex justify-content-between mt-3 align-items-center",children:m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{href:"/cart",children:["В корзине",j>1&&(0,t.jsxs)("b",{children:[" (",j," шт.)"]})]}),(0,t.jsx)(d.z,{sizeMode:"xs",variant:"primary",onClick:_,children:"Убрать"})]}):(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(h.P,{value:j,setValue:v}),(0,t.jsx)(d.z,{sizeMode:"xs",variant:"primary",onClick:E,children:"В корзину"})]})})]})]})}},5172:function(e,A,i){"use strict";i.d(A,{l:function(){return r}});var t=i(5893),n=i(5168);i(7294);var s=i(6066);let r=e=>{let{children:A,...i}=e,r={infinite:!0,dots:!1,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:(0,t.jsx)(n.z,{children:"Next"}),prevArrow:(0,t.jsx)(n.z,{children:"Prev"}),...i};return(0,t.jsx)(s.Z,{...r,children:A})}},5131:function(e,A,i){"use strict";i.d(A,{P:function(){return l}});var t=i(5893),n=i(7294),s=i(5168),r=i(48),c=i(6),a=i.n(c);let l=e=>{let{value:A,setValue:i}=e,[c,l]=(0,n.useState)(A.toString()),o=e=>{let t=e.target.value,n=Number(t);return Number.isNaN(n)?l(A.toString()):n<1?(l("1"),i(1)):n>20?(l("20"),i(20)):void i(n)},d=e=>{l(e.target.value)},h=()=>{A<20&&i(e=>e+1)},g=()=>{A>1&&i(e=>e-1)};return(0,n.useEffect)(()=>{l(A.toString())},[A]),(0,t.jsxs)("div",{className:a().wrapper,children:[(0,t.jsx)(s.z,{sizeMode:"sm",variant:"orange",onClick:g,children:(0,t.jsx)("i",{className:"fa fa-minus","aria-hidden":"true"})}),(0,t.jsx)(r.I,{onBlur:o,value:c,onChange:d,type:"text"}),(0,t.jsx)(s.z,{sizeMode:"sm",variant:"orange",onClick:h,children:(0,t.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})})]})}},6394:function(e,A,i){"use strict";i.d(A,{E:function(){return r}});var t=i(5893),n=i(5675),s=i.n(n);let r=e=>{let{alt:A,...i}=e;return(0,t.jsx)(s(),{alt:A,placeholder:"empty",...i})}},1109:function(e,A,i){"use strict";i.d(A,{SJ:function(){return x},BN:function(){return C},V8:function(){return w},BB:function(){return B},$K:function(){return m},WR:function(){return j},DG:function(){return v},dv:function(){return p},cz:function(){return b},d5:function(){return f},Uf:function(){return E},Gp:function(){return _},T8:function(){return u},f5:function(){return g},j$:function(){return t},Md:function(){return h},vO:function(){return n},A4:function(){return s},n_:function(){return r},$f:function(){return c},to:function(){return a},GC:function(){return l},Sn:function(){return o},HQ:function(){return d}});var t={src:"/_next/static/media/1.2a37426e.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR42iWPywrCQAxF53v8cncuBXFTEBQEQfEF2oqILdp3bWYys7km7azCPZmTxOjzVE64/0beVsFzG7TWbIBMhcJKALhIYJM1PDcYMmGG+1x+luD65em6BJ3mcPnde1dDTaoP3GWg/Qz2uYU202UB/n0ghmBEF1x2hkuPoN0UdJgNtWbKjCwWcfOG6L3LjrC3CHSey0oplBnRT2Re5fIYNl7BPjbgIoZm3GbjJWNTM55py6A1dyP8A9x72FbjaeC/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},n={src:"/_next/static/media/2.ebf96a95.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvElEQVR42h2PXWrDMBAGZ1dCNNAfDCW0VzC9QCD0mjmPIZBb9AB5cZqksbWptK01ME/fyzfk+8S/fZ7PQ55O1py/h1ysB5Bl9Mtx7/O5Q5SGgMTVKC/v20ixnedrV8cvQ1PCJjyPpuuPLjy+7hT3DbWAaBINNCQmCQm8bCINh/KLo8jTGikdhAjuRFQPVP/029GIq0S+AMWIDwmNB8l27f122i8/8AoaEI0gOsrz25Z8/1nsW1rLbA5WWyZ/XhByD3mqu68AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},s={src:"/_next/static/media/3.5c328abb.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0klEQVR42kWPT2vCUBDE83ny9fp5Sq89F/rv0vKgLSrSg0WhtjRiTcSIMerLvt3nYZzEgwvDHmbY+W3Sjh7KlHIWttFC3crpYZV2pukuNdlU3NBNBvl7Ryh/wHBl0aeJ7gqndQH5fTPfv4HvXaOZPFozeYbWuWMgjzJ9hR/eIvx/0nzA/v4KzeiOgUVMdDuPMhugGT/BjgLJBgjLMWumaL2EKcdTNPom8yGrPhDykUnWO1eY7glZVYQi5Azy/YJQfIHgHeTlTV86BiO/aeXMrzvzBEBf1gtbNXQ3AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},r={src:"/_next/static/media/4.6669b620.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwklEQVR42kVPuwrCUAzt9/RjXZzEQRdnwcnRoqCiS9VJRfAJtra29j6SuxxvWsRAHuScJCeBGOtXyCqNfHZs345NHlH1DGuQPEgqzT0I34RNj6DiBjZZTlUSBtRMgs2b9WYEc1pAx0O2zz2YykjWO1IJ7GMLvRvDHCaoJi3Y60YILpBgrzHUsg9zXkOtBqimbZhLDOaaUEQ2OcoUq1nHE3tQ8y7b5NCcECG1oPIBys6gj8/l/S9STAp5zbtjnTmpf+AX3v3WS5SlpLIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},c={src:"/_next/static/media/5.ba016db8.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxklEQVR42kWP2WrCYBCF8zx52dJX6E17V3pT6J2hFUEquCCCJu6K629izCxROP6jggMHhvnObIGFZMtQyUXKh/KhSNJ5+IScOl8Ar/vgbQzZj6GSOWOBdcphhlPjQ/PoFXnlBaf6m8ougbFA9VhSXEXR+kTR/vLGdxTdb68fGAtU0pJXPdCgApr+g5I/0Kjm84atMUMW8aYPGtaUFx0P6+BZU3negmpuK/LQH+O8ART/3pVUIW7i9CL3T1SOobltpOmWn+kGryfl1dpqV0KFAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},a={src:"/_next/static/media/6.25dac101.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42kVPyw4BQRDc7/HZHAgHfmEkLgThJB5L4pGwZnYxj+69lO510ElNV7oqPdWZFn3uLQ7WcHS1QrnO/mK0TjqoPDdQLkbXmEQ09LrBz3vsF32E5UB4l2WmJpNxqup03yLuDMjlIJsjHiZIxQGcyjrTJz32iPsxqNggrEfwsw6aDcGqoTJkTwirIcd8oh1+2mbNwrE0GflCLng6skek5xFUXQWXf0gtNekm/U5CC5yh90/8AjzW14u6eaelAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},l={src:"/_next/static/media/7.e11f5214.png",height:59,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42iVNyW7CQBSbn+DUX4Bf5tJDz5VKq5ZDN7WXqu0FhS2IRewQJgnMm/cCysMDlixZtmWbAM4WFaFdXbwdgiOhpM75onIN96sbGDEM9ZMf9dM/hafikkHIjJBtsJ0otZ+Eus2SOs8l9ZrC2Vyx+mjEp+JXbXVRQyl+A98vmpMhCpZRsEfexCV1XxC+KvVBaLbjEgunUPgObfd7W7joQV3rXt3/XcHZLFx8hYsa58vUz1vK24H6dU/9MlI+rFMUaiZAOK8KZx8wCvwW0J9YrhpjzBkJsdYT6rBxIAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},o={src:"/_next/static/media/8.cf1951ed.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtklEQVR42kVPuQ7CMAzt9/TXQULAgmCADHwA9y2YEBSactRO3OVhtwPZnHcn9mKZpbF8OAmvSkJR6e30Thvwm6VCuRcuEG5rhGwPJULo6cVICrr4uYG3A6FVH7TqgQ9jUQcjuURYLfMzaNYGn6fgkwPNW4jvK1RcJcqshD1o0QEfJ+DdSN2GdYxhVlDLaf59I7TsgpZ9RH8RE1nxRHNsgTdFuM6VuIUJ7C8q1iyhPG2c/jM1vwZ/bYnYJowDWGQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/9.47d8290b.png",height:68,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAqklEQVR42mVOWwqCUBAdaEu1B9cRtahWUIT76ENR6COChMgIy5uldK9zB7RpRuqrA/NxOK8BBblqSr4pCGsmfBbKf8LM25Kx2DHm8RvLAysnd58D+dpgnrBL1p1LluzSsFOjtJRA7YPxvO2HdB5xe4oHLiEG2cjwutdKcumqt5sFaVLEDLw1gaZ9c2E0Gfvq+N2sAlD4120shlB2IrlQhAkoyJoR/EN/GX0ANqOnf2H/LoAAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},h={src:"/_next/static/media/10.517f93f7.png",height:58,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwUlEQVR42iWPOw7CQAxE9zw5Lw23AAoKukWIT0FBQAgJEP+vYIEk69hpBluxNFpp/TxjOyuJr0To44VCJfFt8lw8E5VzrE0FAn9O4HAAZzdwfof9GeRskr9nFMOmxLQN2o0QZy3h/AFzcmbL4Yhi0EBMW6BtX98O+HeB0Luy/EoFWvd1eoy46iEuugpca0BzvPAX5X0ptPEor6lGtKV2CN5x/kw0K9getJ+ATlOF5vWSeoCzMsho4azSUVXmpb7O/QHEJt0l4HuAJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},g={src:"/_next/static/media/photo.e84577b6.jpg",height:820,width:637,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAL4hT//EAB0QAAEEAgMAAAAAAAAAAAAAAAIBAwURAAQhQfH/2gAIAQEAAT8A1pGPdBQeAB7tseF8vP/EABkRAQACAwAAAAAAAAAAAAAAAAIAEQESgf/aAAgBAgEBPwAOjWg7if/EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAEDAQE/ABv/2Q==",blurWidth:6,blurHeight:8},u={src:"/_next/static/media/preview.c7068fd5.png",height:396,width:623,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AcivlQHG3/r/IyMTDwMECjMYAAi+8P/2QxQZHU8iISJyAf8AAAFDF10Fveii/sC5skru5OXjFykpOvf6/VEIKCtEAeN0PgCM7fVL4u3NBK8KQf+XVlRjIv0EThTy3HYN9gKLAfaZULn0OVs67fP5DMfk4gCeCQ0Aj9vFADH2qAD4ChSpAfaYOJL9NmxJBxMc5O7x7rZNxc7US+C89nUR3UP//PIokn5Orq6qAnAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},x={src:"/_next/static/media/1.b6bf401c.svg",height:103,width:93},m={src:"/_next/static/media/2.eff434d3.svg",height:102,width:102},j={src:"/_next/static/media/3.8c1ba034.svg",height:109,width:85},v={src:"/_next/static/media/4.f7831280.svg",height:60,width:92},p={src:"/_next/static/media/5.504be76d.svg",height:90,width:90},b={src:"/_next/static/media/6.8aea63c4.svg",height:87,width:59},f={src:"/_next/static/media/7.8040cc12.svg",height:90,width:68},E={src:"/_next/static/media/8.1c55746e.svg",height:98,width:98},_={src:"/_next/static/media/9.18fa958f.svg",height:83,width:87},C={src:"/_next/static/media/10.9076e73e.svg",height:87,width:69},w={src:"/_next/static/media/11.77e55247.svg",height:79,width:79},B={src:"/_next/static/media/12.350c249b.svg",height:76,width:84}},5577:function(e,A,i){"use strict";i.d(A,{NH:function(){return Y},N9:function(){return G},MQ:function(){return y},Co:function(){return p},ZP:function(){return O},_5:function(){return x},qb:function(){return h},WO:function(){return _},_Y:function(){return Q},EX:function(){return q}});var t=i(5893),n=i(5172),s=i(2310),r=i(7294),c=i(8369),a=i.n(c),l=i(5168),o=i(1664),d=i.n(o);let h=e=>{let{items:A}=e;return(0,t.jsx)("section",{className:a().section,children:(0,t.jsx)(s.W,{children:(0,t.jsx)(n.l,{infinite:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:A.length>1?2:1,responsive:[{breakpoint:991,settings:{slidesToShow:1}}],children:A.map((e,A)=>(0,t.jsx)("div",{children:(0,t.jsx)(d(),{href:e.href,className:a().item,style:{backgroundImage:e.photo?"url(".concat(e.photo.url,")"):"none"},children:(0,t.jsxs)("div",{className:a().inner,children:[(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}}),(0,t.jsx)(l.z,{variant:"orange",children:"Подробонее"})]})})},A))})})})};var g=i(8691),u=i.n(g);let x=()=>(0,t.jsx)("section",{className:u().delivery,children:(0,t.jsx)(s.W,{children:(0,t.jsxs)("div",{className:u().inner,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"НАДЕЖНАЯ ДОСТАВКА"}),(0,t.jsx)("p",{children:"Акции и льготы на доставку! Почтой России и в пункты выдачи"}),(0,t.jsx)(l.z,{isLink:{href:"/delivery"},variant:"orange",children:"Подробнее"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"УДОБНАЯ ОПЛАТА"}),(0,t.jsx)("p",{children:"Онлайн или наложенным платежом! Выберите удобный для вас способ"}),(0,t.jsx)(l.z,{isLink:{href:"/payment"},variant:"orange",children:"Подробнее"})]})]})})});var m=i(9794),j=i(1352),v=i.n(j);let p=e=>{let{categories:A,title:i,withBg:n}=e;return(0,t.jsx)("section",{className:(0,m.o)([v().section,n?v().bg:void 0]),children:(0,t.jsxs)(s.W,{children:[(0,t.jsx)("h2",{className:"section__title",children:i}),(0,t.jsx)("div",{className:v().items,children:A.map(e=>(0,t.jsx)(d(),{href:"/catalog/"+e.href,className:v().item,style:{backgroundImage:e.preview?"url(".concat(e.preview.url,")"):"none"},children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:e.fullName}),(0,t.jsx)("div",{children:(0,t.jsx)("h4",{children:e.name})})]})},e.id))})]})})};var b=i(9090),f=i(2313),E=i.n(f);let _=e=>{let{products:A,title:i,isNew:n}=e;return A.length?(0,t.jsx)("section",{className:E().section,children:(0,t.jsxs)(s.W,{children:[(0,t.jsx)("h2",{className:"section__title",children:i}),(0,t.jsx)(b.b,{carouselProps:{variableWidth:!0,centerMode:!0},isNew:!!n,products:A})]})}):null};var C=i(2333),w=i(6772),B=i(1266),N=i.n(B);let Q=e=>{var A;let{reviews:i}=e,{dispatchOpenModalOrder:c}=(0,C.BA)({openModalOrder:w.ar}),a=(0,r.useMemo)(()=>i.filter(e=>!!e.image),[i]),o=(0,r.useMemo)(()=>a.length>0&&a.length<3?a.length:3,[a.length]),[d,h]=(0,r.useState)(a[0]),g=()=>c({title:"Оставить заявку",text:"Оставьте ваши данные, и мы Вам перезвоним!"}),u=e=>()=>{let A=a.find(A=>A.id===e);A&&h(A)},x=e=>{let A=a[e];A&&h(A)};return(0,t.jsx)("section",{children:(0,t.jsx)(s.W,{children:(0,t.jsxs)("div",{className:N().inner,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:null==d?void 0:d.author}),(0,t.jsx)("p",{children:null==d?void 0:d.comment}),(0,t.jsx)(l.z,{sizeMode:"sm",onClick:g,variant:"orange",className:"mt-3 mb-5",children:"Оставить заявку"}),(0,t.jsx)(n.l,{slidesToShow:o,afterChange:x,arrows:!1,children:a.map(e=>{var A;let i=d.id===e.id,n=i?N().active:void 0;return(0,t.jsx)("div",{children:(0,t.jsx)("div",{onClick:u(e.id),className:(0,m.o)([N().item,n]),style:{backgroundImage:"url(".concat(null===(A=e.image)||void 0===A?void 0:A.url,")")}})},e.id)})})]}),d&&(0,t.jsxs)("div",{className:N().review,style:{backgroundImage:"url(".concat(null===(A=d.image)||void 0===A?void 0:A.url,")")},children:[(0,t.jsx)("h6",{children:d.product}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:d.author}),(0,t.jsx)("span",{children:d.city})]})]})]})})})};var S=i(5675),I=i.n(S),D={src:"/_next/static/media/photo.950abc78.jpg",height:352,width:249,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKBIX//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwAREiGB/9oACAEBAAE/AK2d5q9JXsSx5P0h35rP/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAESET/9oACAECAQE/AO72wzDP/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIDEQD/2gAIAQMBAT8AlNWmjHdI7//Z",blurWidth:6,blurHeight:8},U=i(5507),R=i.n(U);let y=()=>{let{dispatchOpenModalOrder:e}=(0,C.BA)({openModalOrder:w.ar}),A=()=>e();return(0,t.jsx)("section",{className:R().section,children:(0,t.jsx)(s.W,{children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 col-12",children:(0,t.jsxs)("div",{className:R().item,children:[(0,t.jsx)("h2",{className:"section__title",children:"Каталог \xabСемена почтой\xbb"}),(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-6 d-sm-block d-none",children:(0,t.jsx)(I(),{placeholder:"empty",src:D,width:238,height:336,className:"w-100 h-auto",alt:"Каталог \xabСемена почтой\xbb"})}),(0,t.jsxs)("div",{className:"col-sm-6 col-12",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Овощные культуры"}),(0,t.jsx)("li",{children:"Цветы однолетние"}),(0,t.jsx)("li",{children:"Цветы двулетние"}),(0,t.jsx)("li",{children:"Цветы многолетние"}),(0,t.jsx)("li",{children:"Серия \xabДомашняя аптека\xbb"}),(0,t.jsx)("li",{children:"Товары производства \xabВаше хозяйство\xbb"}),(0,t.jsx)("li",{children:"Доставка товара круглый год"})]}),(0,t.jsx)(l.z,{isLink:{href:"/catalog"},variant:"primary",className:"my-3",children:"Посмотреть"}),(0,t.jsx)("br",{}),(0,t.jsx)(l.z,{variant:"orange",onClick:A,children:"Оставить заявку"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-6 col-12 mt-lg-0 mt-4",children:(0,t.jsxs)(d(),{href:"/stock",className:(0,m.o)([R().item,R().right_item]),children:[(0,t.jsxs)("h4",{children:["Делитесь своим мнением!",(0,t.jsx)("br",{})," и получайте"]}),(0,t.jsxs)("div",{className:R().bonus,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("b",{children:"3"}),(0,t.jsx)("b",{children:"0"}),(0,t.jsx)("b",{children:"0"})]}),(0,t.jsx)("span",{children:"Бонусов на счет!"}),(0,t.jsx)(l.z,{variant:"orange",children:"Подробнее"})]})]})})]})})})};var M=i(682),k={src:"/_next/static/media/photo.f0721cbc.jpg",height:900,width:900,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAADBf/aAAwDAQACEAMQAAAACOX/xAAeEAACAgAHAAAAAAAAAAAAAAACAwEEABESFCIkUf/aAAgBAQABPwA7ybPSTR26hHQeS45x7OP/xAAYEQEBAAMAAAAAAAAAAAAAAAACAQARQf/aAAgBAgEBPwBtGzV5n//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwDSrf/Z",blurWidth:8,blurHeight:8},L=i(6730),W=i.n(L);let O=()=>(0,t.jsx)("section",{className:W().section,children:(0,t.jsx)(M.Z,{children:(0,t.jsxs)("div",{className:"row justify-content-end",children:[(0,t.jsx)("div",{className:"col-xxl-5 col-xl-6 col-md-7 col-12",children:(0,t.jsxs)("div",{className:W().inner,children:[(0,t.jsx)("h2",{className:"section__title",children:"ПРИСОЕДИНЯЙТЕСЬ К НАМ!"}),(0,t.jsx)("p",{children:"Подписывайтесь на социальные сети и участвуйте в розыгрышах призов!"}),(0,t.jsxs)("div",{className:W().socials,children:[(0,t.jsxs)(d(),{href:"/",children:[(0,t.jsx)("div",{}),(0,t.jsx)("span",{children:"Вконтакте"})]}),(0,t.jsxs)(d(),{href:"/",children:[(0,t.jsx)("div",{}),(0,t.jsx)("span",{children:"Telegram"})]})]})]})}),(0,t.jsx)("div",{className:"col-xl-4 col-5 d-lg-block d-none",children:(0,t.jsx)(I(),{placeholder:"empty",width:421,height:456,className:W().photo,src:k,alt:"Присоединяйтесь к нам"})})]})})});var P=i(1010),V=i.n(P);let T=e=>{var A;let{post:i}=e,n="/blog/"+i.href,s=(0,r.useMemo)(()=>i.content.replace(/<([\s\S]*?)>/g,"").split(".")[0].slice(0,100).concat(" ..."),[i]);return(0,t.jsxs)("article",{className:V().item,children:[(0,t.jsx)(d(),{href:n,className:V().preview,children:(0,t.jsx)(I(),{width:600,height:600,src:(null===(A=i.preview)||void 0===A?void 0:A.url)||"",alt:i.title,placeholder:"empty"})}),(0,t.jsx)(d(),{href:n,className:V().title,children:i.title}),(0,t.jsx)("p",{children:s}),(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)(l.z,{variant:"orange",className:"w-auto mt-3",isLink:{href:n},children:"Подробнее"})})]},i.id)},G=e=>{let{title:A,posts:i}=e;return(0,t.jsx)("section",{className:V().section,children:(0,t.jsxs)(s.W,{children:[(0,t.jsx)("h2",{className:"section__title mb-3",children:A}),(0,t.jsx)("div",{className:"row",children:i.map(e=>(0,t.jsx)("div",{className:"col-lg-4 col-sm-6 col-12 mt-4",children:(0,t.jsx)(T,{post:e})},e.id))})]})})};var z=i(9806),F=i.n(z),K=i(1109);let H=[{image:K.j$,text:"Гарантированные скидки - цены ниже, чем у конкурентов."},{image:K.vO,text:"Бесплатный печатный каталог"},{image:K.A4,text:"Доставка со скидкой или бесплатно."},{image:K.n_,text:"Начисление и оплата бонусами"},{image:K.$f,text:"БОЛЬШОЕ количество полезных подарков."},{image:K.to,text:"Обработка заказов от 1 до 3 дней. Компьютерная сканировка товарного вложения"},{image:K.GC,text:"Все товары от производителя! Не перекупаем."},{image:K.Sn,text:"Гарантия качества на весь посадочный материал"},{image:K.HQ,text:"Надежная упаковка гарантирует, что весь посадочный материал в безопасности"},{image:K.Md,text:"Отправка наложенным платежом"}],Y=()=>(0,t.jsx)("section",{className:F().about,children:(0,t.jsx)(s.W,{children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-xl-7 col-12",children:[(0,t.jsx)("h3",{children:"Агросемфонд — интернет-магазин семян"}),(0,t.jsx)("p",{children:"\xabАгросемфонд\xbb - это интернет магазин семян, основанный на базе известной российской компании \xabВаше Хозяйство\xbb. Мы предлагаем лучшие образцы и новинки российской и иностранной селекции. Ассортимент компании насчитывает более 4000 наименований. Вся продукция интернет магазина проходит контроль качества и имеет сертификаты соответствия."}),(0,t.jsx)("h3",{children:"Наши преимущества:"}),(0,t.jsx)("ul",{children:H.map((e,A)=>(0,t.jsxs)("li",{children:[(0,t.jsx)(I(),{width:60,height:60,src:e.image,alt:e.text,placeholder:"empty"}),(0,t.jsx)("span",{children:e.text})]},A))})]}),(0,t.jsx)("div",{className:"col-5 d-xl-block d-none",children:(0,t.jsx)(I(),{width:400,height:1e3,placeholder:"empty",src:K.f5,alt:"Наши преимущества",className:"w-100 h-auto"})})]})})});var J=i(48),Z=i(3608),X=i.n(Z);let q=()=>{let e=(0,r.useId)();return(0,t.jsx)("section",{className:X().section,children:(0,t.jsx)(s.W,{className:(0,m.o)(["container",X().container]),children:(0,t.jsxs)("div",{className:"row justify-content-lg-between justify-content-center align-items-center",children:[(0,t.jsx)("div",{className:"col-xl-5 col-lg-6 col-12",children:(0,t.jsxs)("div",{className:X().inner,children:[(0,t.jsx)("h2",{children:"Будьте в курсе событий"}),(0,t.jsx)("h3",{children:"Подарок за подписку!"}),(0,t.jsx)("p",{children:"Подпишитесь на рассылку с самыми горячими акциями и скидками!"})]})}),(0,t.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 mt-lg-0 mt-3",children:(0,t.jsxs)("form",{action:"/",children:[(0,t.jsx)("label",{htmlFor:e,children:"Ваш Номер:"}),(0,t.jsx)(J.I,{type:"number",placeholder:"Ваш номер",name:"phone",id:e,required:!0}),(0,t.jsx)(l.z,{variant:"orange",type:"submit",children:"Получить подарок"})]})})]})})})}},9090:function(e,A,i){"use strict";i.d(A,{b:function(){return c}});var t=i(5893),n=i(7294),s=i(152),r=i(5172);let c=e=>{let{products:A,isNew:i,carouselProps:c}=e,[a,l,o,d]=(0,n.useMemo)(()=>{let e=[];for(let i=4;i>0;i--)e.push(A.length>i?i:A.length);return e},[A]);return(0,t.jsx)(r.l,{slidesToShow:a,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:991,settings:{slidesToShow:l}},{breakpoint:768,settings:{slidesToShow:o}},{breakpoint:575,settings:{slidesToShow:d}}],...c,children:A.map(e=>(0,t.jsx)("div",{children:(0,t.jsx)(s.Z,{product:e,isNew:!!i})},e.id))})}},458:function(e,A,i){"use strict";var t=i(5838);let n="cart";A.Z=new class{add(e,A){let i=t.Y.get(n);t.Y.set(n,{...i||{},[e]:A})}remove(e){let A=t.Y.get(n);A&&(delete A[e],t.Y.set(n,A))}}},9283:function(e){e.exports={card:"Card_card__oqWj1",d_wrapper:"Card_d_wrapper__dTLcm",description:"Card_description__W3Gvt",sticker:"Card_sticker__lSHUa",header:"Card_header__wDcIt",body:"Card_body__rSvQh",title:"Card_title___WBLo"}},6:function(e){e.exports={wrapper:"CountInput_wrapper__AZKJT"}},9806:function(e){e.exports={about:"SectionAbout_about__L5bfw"}},1010:function(e){e.exports={section:"SectionBlog_section__L_PDI",item:"SectionBlog_item__SoVu_",preview:"SectionBlog_preview__SnyJZ",title:"SectionBlog_title__npgpQ"}},5507:function(e){e.exports={section:"SectionCatalogMail_section__lczd0",item:"SectionCatalogMail_item__k4D4d",right_item:"SectionCatalogMail_right_item__3gOzQ",bonus:"SectionCatalogMail_bonus__eLJ_r"}},1352:function(e){e.exports={section:"SectionCategories_section__UyFRT",bg:"SectionCategories_bg__XAmNu",items:"SectionCategories_items__4e9Ww",item:"SectionCategories_item__CsURz"}},6730:function(e){e.exports={section:"SectionConnect_section__1_B19",inner:"SectionConnect_inner__5gkou",photo:"SectionConnect_photo__vycQo",socials:"SectionConnect_socials__3EO8E"}},8691:function(e){e.exports={delivery:"SectionDelivery_delivery__j_7D2",inner:"SectionDelivery_inner__E1KlM"}},8369:function(e){e.exports={section:"SectionOverview_section__G_nz2",item:"SectionOverview_item__my4dV",inner:"SectionOverview_inner__eA_Xm"}},2313:function(e){e.exports={section:"SectionProducts_section__hDxHH"}},1266:function(e){e.exports={inner:"SectionReviews_inner__MZK5F",item:"SectionReviews_item__EtonT",active:"SectionReviews_active__rb_VQ",review:"SectionReviews_review__XIt9d"}},3608:function(e){e.exports={section:"SectionSubscription_section__J1J4k",container:"SectionSubscription_container__cKuNj",inner:"SectionSubscription_inner__neqLA"}}}]);