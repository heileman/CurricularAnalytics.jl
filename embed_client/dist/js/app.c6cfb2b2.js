(function(t){function e(e){for(var i,o,c=e[0],l=e[1],a=e[2],p=0,m=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);s&&s(e);while(m.length)m.shift()();return u.push.apply(u,a||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],i=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(i=!1)}i&&(u.splice(e--,1),t=o(o.s=r[0]))}return t}var i={},n={app:0},u=[];function o(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var s=l;u.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var i=r("85ec"),n=r.n(i);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},u=[],o=(r("034f"),r("d7f3"),r("5e3e"),r("2877")),c={},l=Object(o["a"])(c,n,u,!1,null,null,null),a=l.exports,s=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"block_container"}},[t.curriculum?r("div",{staticClass:"graph"},[t.curriculum.original.institution?r("div",[t._v(" Institution: "+t._s(t.curriculum.original.institution)+" ")]):t._e(),t.curriculum.original.name?r("div",[t._v(" Curriculum: "+t._s(t.curriculum.original.name)+" ")]):t._e(),t.curriculum.original.dp_name?r("div",[t._v(" Degree Plan: "+t._s(t.curriculum.original.dp_name)+" ")]):t._e(),t.curriculum.credits?r("div",[t._v(" Total Credit Hours: "+t._s(t.curriculum.credits)+" ")]):t._e(),t.curriculum.complexity?r("div",[t._v(" Curricular Complexity: "+t._s(t.curriculum.complexity.toFixed(1))+" ")]):t._e(),r("curriculum",t._b({ref:"curriculum",attrs:{curriculum:t.curriculum,name:t.name,"hide-blocking":!0}},"curriculum",t.options,!1))],1):t._e()])},m=[],f=(r("99af"),r("4160"),r("b680"),r("4840")),d=f["BaseTerm"].extend({computed:{footer:function(){return this.complexity?"Complexity: ".concat(this.complexity.toFixed(1)):"Credits: ".concat(this.credits)}}}),h=f["BaseItem"].extend({computed:{content:function(){if(this.original){var t="";for(var e in this.original.metrics)t+="".concat(e,": ").concat(this.original.metrics[e],"<br />");return t}return 0},complexity:function(){return this.original&&this.original.metrics.complexity?this.original.metrics.complexity:0},value:function(){return this.complexity?this.complexity:this.credits}}}),v={data:function(){return{curriculum:null,options:{},format:null,exportFormat:null,height:0}},components:{Curriculum:f["Curriculum"]},watch:{export:{handler:function(t){var e=this;t&&(window.parent.postMessage({curriculum:t},"*"),setTimeout((function(){e.height=e.$el.getBoundingClientRect().height}),0))},deep:!0},height:function(t){window.parent.postMessage({height:t},"*")}},methods:{refresh:function(){window.parent.postMessage({curriculum:this.export},"*")},receiveMessage:function(t){var e=this,r=t.data;if(r){["options","format","exportFormat"].forEach((function(t){r[t]&&(e[t]=r[t])}));var i=r.curriculum;i&&(this.curriculum=Object(f["buildCurriculum"])(i,{format:this.format,Item:h,Term:d})),window.curriculum=this.curriculum}}},computed:{exports:function(){return this.curriculum?this.curriculum.exports:{}},export:function(){return this.exportFormat?this.exports[this.exportFormat]:this.curriculum?this.curriculum.exportOriginal:{}}},created:function(){window.addEventListener("message",this.receiveMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.receiveMessage)}},g=v,x=Object(o["a"])(g,p,m,!1,null,null,null),y=x.exports;i["default"].use(s["a"]);var _=new s["a"]({mode:"history",routes:[{path:"/",name:"graph",component:y}]});i["default"].config.productionTip=!1,new i["default"]({router:_,render:function(t){return t(a)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.c6cfb2b2.js.map