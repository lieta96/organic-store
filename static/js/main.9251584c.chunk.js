(this["webpackJsonporganic-store"]=this["webpackJsonporganic-store"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(3),a=c.n(n),r=(c(9),c.p,c(10),c(11),c(12),c(0));var o=function(e){var t=e.src,c=e.name,s=e.price;return Object(r.jsxs)("div",{className:"product-container ",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{className:"product-image",src:t,alt:c})}),Object(r.jsxs)("h2",{className:"product-name",children:[" ",c]}),Object(r.jsxs)("span",{className:"product-price",children:["$ ",s," "]})]})},l=[{name:"jugo de naranja",src:"https://images.unsplash.com/photo-1613478223719-2ab802602423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",price:"150",type:"cold-drink"},{name:"Porci\xf3n de Bud\xedn de Lim\xf3n",src:"https://images.unsplash.com/photo-1605466237924-1543b3abe5d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGxlbW9uJTIwcGllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",price:"150"},{name:"Porci\xf3n de Lemon Pie",src:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",price:"300",type:"piece-of-cake"},{name:"Porci\xf3n de Cheesecake",src:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",price:"300",type:"piece-of-cake"},{name:"Porci\xf3n de torta de manzana",src:"https://images.unsplash.com/photo-1562007908-72e11e85b1cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",price:"300",type:"piece-of-cake"},{name:"T\xe9 en hebras",src:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",price:"200",type:"hot-drink"},{name:"Caf\xe9 con leche",src:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",price:"180",type:"hot-drink"}],d=c(4),f=(c(14),c.p+"static/media/cold-drinks-logo.b30380c9.svg"),u=c.p+"static/media/piece-of-cake-logo.2b394f41.svg",p=c.p+"static/media/hot-drinks-logo.22260e93.svg",b=c.p+"static/media/all-products-logo.43a2b781.svg";var j=function(e){e.src;var t=e.typeProduct,c=(e.nameTypeProduct,Object(s.useState)("all-products")),i=Object(d.a)(c,2),n=i[0],a=i[1];return Object(s.useEffect)((function(){a(n)}),[n]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"filters-container",children:[Object(r.jsxs)("div",{className:"filter-container",children:[Object(r.jsx)("button",{className:"filter-button",onClick:function(){return a("all-products"),l.filter((function(e){return e.type===n}))},children:Object(r.jsx)("img",{src:b,alt:"Todos los productos",className:"filter-button-img"})}),Object(r.jsx)("span",{children:"Todos los productos"})]}),Object(r.jsxs)("div",{className:"filter-container",children:[Object(r.jsx)("button",{className:"filter-button",onClick:function(){return a("hot-drink"),l.filter((function(e){return e.type===n}))},children:Object(r.jsx)("img",{src:p,alt:"Bebidas calientes",className:"filter-button-img"})}),Object(r.jsx)("span",{children:"Bebidas calientes"})]}),Object(r.jsxs)("div",{className:"filter-container",children:[Object(r.jsx)("button",{className:"filter-button",onClick:function(){a("cold-drink");var e=l.filter((function(e){return e.type===n}));return console.log("tocaste el bot\xf3n ".concat(t," y el estado del filtro es ").concat(n)),console.log("La lista de productos de este tipo son"),console.log(e),e},children:Object(r.jsx)("img",{src:f,alt:"Bebidas fr\xedas",className:"filter-button-img"})}),Object(r.jsx)("span",{children:"Bebidas fr\xedas"})]}),Object(r.jsxs)("div",{className:"filter-container",children:[Object(r.jsx)("button",{className:"filter-button",onClick:function(){var e=l.filter((function(e){return e.type===n}));return a("piece-of-cake"),console.log("tocaste el bot\xf3n ".concat(t," y el estado del filtro es ").concat(n)),console.log("La lista de productos de este tipo son"),console.log(e),e},children:Object(r.jsx)("img",{src:u,alt:"Porciones de torta",className:"filter-button-img"})}),Object(r.jsx)("span",{children:"Porciones de torta"})]})]}),Object(r.jsx)("h2",{className:"nuestros-productos",children:"Nuestros productos"}),Object(r.jsx)(x,{filter:n})]})};c(15);var m=function(){return Object(r.jsx)("div",{className:"filters-container",children:Object(r.jsx)(j,{})})};var x=function(e){var t=e.filter;return l.filter((function(e){return e.type===t})),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"product-gallery",children:l.map((function(e){return e.type===t||"all-products"===t?Object(r.jsx)(o,{src:e.src,name:e.name,price:e.price}):void 0}))})})},h=(c(16),c.p+"static/media/header-img.89bc3f88.png");var g=function(){return Object(r.jsxs)("div",{className:"header-container",children:[Object(r.jsx)("img",{className:"main-image",src:h,alt:"cafe"}),Object(r.jsx)("h1",{className:"store-name",children:"Bar natural"})]})};var O=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{className:"App-header"}),Object(r.jsx)(m,{}),Object(r.jsx)("div",{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),w()}],[[17,1,2]]]);
//# sourceMappingURL=main.9251584c.chunk.js.map