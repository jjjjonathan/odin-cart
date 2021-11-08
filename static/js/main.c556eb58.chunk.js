(this["webpackJsonpodin-cart"]=this["webpackJsonpodin-cart"]||[]).push([[0],{23:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),r=n(15),a=n.n(r),o=n(8),s=n(11),l=n(10),d=n(2),j=n(0),u=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Welcome to Odincart."}),Object(j.jsx)("p",{className:"lead",children:"Where you can't buy anything, but you can pretend."})]})},h=function(t){var e=t.quantityInCart,n=t.onAddToCart,c=t.onRemoveFromCart,r=t.index,a=Object(i.useState)("1"),o=Object(s.a)(a,2),l=o[0],d=o[1];Object(i.useEffect)((function(){e>0&&d(e.toString())}),[e]);return 0===e?Object(j.jsxs)("div",{className:"item-form",children:[Object(j.jsx)("label",{htmlFor:"quantity",children:"Qty:"}),Object(j.jsxs)("select",{value:l,onChange:function(t){return d(t.target.value)},name:"quantity",id:"quantity",children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"})]}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault();var e=parseInt(l);n(r,e)},children:"Add to cart"})]}):Object(j.jsxs)("div",{className:"item-form",children:[Object(j.jsxs)("p",{className:"success",children:["Added ",e," to cart!"]}),Object(j.jsx)("button",{type:"button",onClick:function(){return c(r)},children:"Remove from cart"})]})},b=function(t){var e=t.item,n=t.onAddToCart,i=t.onRemoveFromCart,c=t.index;return Object(j.jsxs)("div",{className:"item-card",children:[Object(j.jsx)("h4",{className:"item-title",children:e.title}),Object(j.jsx)("p",{className:"item-description",children:e.description}),Object(j.jsxs)("p",{className:"price",children:["$",e.price]}),Object(j.jsx)(h,{quantityInCart:e.quantityInCart,onAddToCart:n,onRemoveFromCart:i,index:c})]})},p=function(t){var e=t.items,n=t.onAddToCart,i=t.onRemoveFromCart;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Look for things to fill your Odincart."}),Object(j.jsx)("p",{className:"lead",children:"Remember, none of this is real."})]}),Object(j.jsx)("div",{className:"shop",children:e.map((function(t,e){return Object(j.jsx)(b,{item:t,onAddToCart:n,onRemoveFromCart:i,index:e},e)}))})]})},O=function(t){var e=t.items,n=t.onQuantityChange,i=t.onRemoveFromCart,c=e.map((function(t,e){return Object(o.a)(Object(o.a)({},t),{},{storeIndex:e})})).filter((function(t){return t.quantityInCart>0}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Odincart contains:"}),0===c.length?Object(j.jsx)("p",{className:"lead",children:"nothing at the moment, apparently."}):null,Object(j.jsxs)("div",{className:"cart",children:[c.map((function(t){return Object(j.jsxs)("div",{className:"cart-item",children:[Object(j.jsxs)("div",{className:"cart-item-total-price",children:["$",t.quantityInCart*t.price]}),Object(j.jsx)("div",{className:"cart-item-title",children:t.title}),Object(j.jsxs)("div",{className:"cart-item-each-price",children:["$",t.price," each"]}),Object(j.jsx)("div",{className:"cart-item-quantity",children:Object(j.jsxs)("label",{htmlFor:"quantity",children:["Qty:",Object(j.jsxs)("select",{name:"quantity",id:"quantity",value:t.quantityInCart,onChange:function(e){n(t.storeIndex,parseInt(e.target.value))},children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"})]})]})}),Object(j.jsx)("button",{type:"button",onClick:function(){return i(t.storeIndex)},children:"Remove from cart"})]},t.storeIndex)})),c.length>0?Object(j.jsxs)("div",{className:"cart-total",children:["Total: $",c.reduce((function(t,e){return t+e.quantityInCart*e.price}),0),Object(j.jsx)("button",{type:"button",children:"Checkout"})]}):null]})]})},m=(n(23),function(){var t=Object(i.useState)([{title:"Odinfeathers",description:"Faux feathers in pastel gradients",price:595,quantityInCart:0},{title:"The Nondescript Odinstone",description:"If you expected description, See above",price:9995,quantityInCart:0},{title:"Ode in C (art)",description:"The hit single. Vinyl only",price:129,quantityInCart:0},{title:"Zesty Odinpops",description:"Odin-flavored pop-type food product in zesty variety",price:9,quantityInCart:0},{title:"Odinware",description:"Completely safe computer software. Does important and necessary and completely safe things on your computer. Download now",price:29,quantityInCart:0},{title:"Odincart",description:"Virtual shopping cart. Contains no real products nor is it itself a real product",price:299,quantityInCart:0},{title:"Non-Odin Stone with Description",description:"A rock without Odin properties. Slight discount over Odin version",price:9989,quantityInCart:0}]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=function(t){c(n.map((function(e,n){return n===t&&(e.quantityInCart=0),e})))};return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("header",{children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/shop",children:"Shop"})}),Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{to:"/cart",children:["Cart",Object(j.jsx)("span",{className:"cart-pill",children:n.reduce((function(t,e){return t+e.quantityInCart}),0)})]})})]})})}),Object(j.jsx)("main",{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/shop",children:Object(j.jsx)(p,{items:n,onAddToCart:function(t,e){c(n.map((function(n,i){return i===t&&(n.quantityInCart+=e),n})))},onRemoveFromCart:r})}),Object(j.jsx)(d.a,{path:"/cart",children:Object(j.jsx)(O,{items:n,onQuantityChange:function(t,e){c(n.map((function(n,i){return i===t?Object(o.a)(Object(o.a)({},n),{},{quantityInCart:e}):n})))},onRemoveFromCart:r})}),Object(j.jsx)(d.a,{path:"/",children:Object(j.jsx)(u,{})})]})})]})})});a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c556eb58.chunk.js.map