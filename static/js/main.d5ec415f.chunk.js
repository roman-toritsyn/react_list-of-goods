(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var s=o(4),n=o.n(s),r=o(7),i=o(5),c=o(6),a=o(9),l=o(8),d=o(3),u=o.n(d),b=o(1),h=o.n(b),f=(o(14),o(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(a.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(i.a)(this,o);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={goods:[].concat(j),goodListVisible:!1,filteredGoods:[].concat(j)},t.showGoods=function(){t.setState((function(){return{goodListVisible:!0}}))},t.reverseGoods=function(){t.setState((function(t){return{filteredGoods:t.filteredGoods.reverse()}}))},t.sortByName=function(){t.setState((function(t){return{filteredGoods:t.filteredGoods.sort()}}))},t.reset=function(){t.setState((function(t){return{filteredGoods:Object(r.a)(t.goods)}})),t.forceUpdate()},t.sortByLength=function(){t.setState((function(t){return{filteredGoods:t.filteredGoods.sort((function(t,e){return t.length-e.length}))}}))},t}return Object(c.a)(o,[{key:"render",value:function(){var t=this.state.goodListVisible;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"buttons-container",children:[Object(f.jsx)("button",{type:"button",onClick:this.showGoods,className:u()("button",{hidden:t}),children:"Start"}),Object(f.jsx)("button",{type:"button",className:"button",onClick:this.reverseGoods,children:"Reverse"}),Object(f.jsx)("button",{type:"button",onClick:this.sortByName,className:"button",children:"Sort alphabetically"}),Object(f.jsx)("button",{type:"button",className:"button",onClick:this.reset,children:"Reset"}),Object(f.jsx)("button",{type:"button",className:"button",onClick:this.sortByLength,children:"Sort by length"})]}),Object(f.jsx)("h1",{className:"headding",children:"Goods"}),Object(f.jsx)("ul",{className:u()("goodsList",{visible:t}),children:this.state.filteredGoods.map((function(t){return Object(f.jsx)("li",{children:t},t)}))})]})}}]),o}(h.a.Component),g=p;n.a.render(Object(f.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d5ec415f.chunk.js.map