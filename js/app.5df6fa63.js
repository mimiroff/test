(function(t){function e(e){for(var a,r,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)r=i[l],s[r]&&f.push(s[r][0]),s[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},s={app:0},o=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-deb3":"18f9bc30","chunk-f827":"391d9970"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-deb3":1,"chunk-f827":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-deb3":"a9bdc21e","chunk-f827":"7833b333"}[t]+".css",r=u.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=s[o],c=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(c===a||c===r))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],c=i.getAttribute("data-href");if(c===a||c===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,n(s)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=o);var c,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(t),c=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}s[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,l.appendChild(f)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/test/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fe4":function(t,e,n){"use strict";var a=n("a167"),r=n.n(a);r.a},2856:function(t,e,n){},"2a7d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.clickButton}},[t._v(t._s(t.name))])},r=[],s={name:"Button",props:["name","index"],methods:{clickButton:function(){this.$emit("clickButton")}}},o=s,i=(n("9ceb"),n("2877")),u=Object(i["a"])(o,a,r,!1,null,"c7b20330",null);u.options.__file="Button.vue";e["a"]=u.exports},3:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("router-view")],1)])},s=[],o={},i=o,u=(n("5c0b"),n("2877")),c=Object(u["a"])(i,r,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,f=n("28dd"),p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v("Список работ")]),n("appTableGrid"),n("appTotal")],1)},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("tr",{staticClass:"row"},t._l(t.tableFields,function(e,a){return n("td",{key:a,staticClass:"table-heading"},[t._v(t._s(e))])})),t._l(t.tasks,function(t,e){return n("appTableRow",{key:e,attrs:{task:t,index:e}})})],2)},v=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"row"},[n("td",{staticClass:"task-name"},[t._v("\n        "+t._s(t.taskName)+"\n    ")]),n("td",{staticClass:"executor"},[t._v("\n        "+t._s(t.userName)+"\n    ")]),n("td",{staticClass:"time"},[t._v("\n        "+t._s(t.taskTime)+"\n    ")]),n("td",{staticClass:"price"},[t._v("\n        "+t._s(t.taskPrice)+"\n    ")]),n("td",{staticClass:"manage"},[n("router-link",{attrs:{to:t.link}},[n("appButton",{attrs:{name:"Изменить"}})],1),n("appButton",{attrs:{name:"Удалить",index:t.index},on:{clickButton:t.removeTask}})],1)])},_=[],b=(n("7f7f"),n("2a7d")),T={name:"TableRow",data:function(){return{user:{},time:this.task.time,link:{name:"edit",params:{id:this.index}}}},components:{appButton:b["a"]},props:["task","index"],computed:{taskPrice:function(){return this.userPrice*this.taskTime},taskTime:function(){return this.task.time},taskName:function(){return this.task.name},userName:function(){var t=this,e=this.$store.getters.users,n=e.filter(function(e){if(e.id===t.task.user_id)return e});return n[0].name},userPrice:function(){var t=this,e=this.$store.getters.users,n=e.filter(function(e){if(e.id===t.task.user_id)return e});return n[0].price}},methods:{removeTask:function(){var t=this.$store.getters.total;t.tasks--,t.time-=this.task.time,t.cost-=this.taskPrice,this.$store.dispatch("updateTotal",t),this.$store.dispatch("removeTask",this.index)}},created:function(){var t=this.$store.getters.total;t.tasks++,t.time+=this.task.time,t.cost+=this.taskPrice,this.$store.dispatch("updateTotal",t)}},g=T,C=(n("fd70"),Object(u["a"])(g,k,_,!1,null,null,null));C.options.__file="TableRow.vue";var B=C.exports,y={name:"TableGrid",data:function(){return{tableFields:["Название","Исполнитель","Затраченное время (в часах)","Стоимость работ (в рублях)","Действия"]}},computed:{tasks:{get:function(){return this.$store.getters.tasks}}},components:{appTableRow:B}},w=y,E=(n("0fe4"),Object(u["a"])(w,h,v,!1,null,null,null));E.options.__file="TableGrid.vue";var A=E.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"total"},[n("div",{staticClass:"total__data"},[n("p",[t._v("Всего задач: "),n("span",[t._v(t._s(t.total.tasks))])]),n("p",[t._v("Общее время: "),n("span",[t._v(t._s(t.total.time))])]),n("p",[t._v("Общая стоимость: "),n("span",[t._v(t._s(t.total.cost))])])]),n("div",{staticClass:"total__controls"},[n("router-link",{attrs:{to:"/new"}},[n("appButton",{staticClass:"total__new",attrs:{name:"Новая задача"}})],1)],1)])},D=[],F={name:"Total",computed:{total:function(){return this.$store.getters.total}},components:{appButton:b["a"]},destroyed:function(){this.$store.dispatch("resetTotal")}},$=F,j=(n("867e"),Object(u["a"])($,x,D,!1,null,"46d8644e",null));j.options.__file="Total.vue";var O=j.exports,P={name:"Tasks",components:{appTableGrid:A,appTotal:O}},N=P,S=(n("cceb"),Object(u["a"])(N,d,m,!1,null,"e7314370",null));S.options.__file="Tasks.vue";var G=S.exports;a["a"].use(p["a"]);var M=new p["a"]({mode:"history",routes:[{path:"",name:"tasks",components:{default:G}},{path:"/edit/:id",name:"edit",props:!0,component:function(){return n.e("chunk-deb3").then(n.bind(null,"6411"))}},{path:"/new",name:"new",component:function(){return n.e("chunk-f827").then(n.bind(null,"0e47"))}},{path:"*",redirect:"/"}]}),R=n("2f62");a["a"].use(R["a"]);var q=new R["a"].Store({state:{tasks:[{id:"CAACE586-37BC-454E-8FAF-0FEC73C69969",name:"Разработка сервера",user_id:"7B1D6B3F-F986-4E5A-92FD-0CB361140A23",time:42},{id:"A08E2244-E864-4304-BEDF-124D7A447135",name:"Разработка интерфейса",user_id:"4F0C3B4C-D8D8-4F01-9D9D-03758936EC05",time:56},{id:"143B5AB2-C63F-4D56-880C-126BC5DFAE4A",name:"написание инструкции",user_id:"A518B7DC-6BB2-4945-AC10-06A296660BDC",time:2.5}],users:[{id:"4F0C3B4C-D8D8-4F01-9D9D-03758936EC05",name:"Иванов",price:500},{id:"A518B7DC-6BB2-4945-AC10-06A296660BDC",name:"Петров",price:250},{id:"7B1D6B3F-F986-4E5A-92FD-0CB361140A23",name:"Сидоров",price:1e3}],total:{tasks:0,time:0,cost:0}},mutations:{updateTotal:function(t,e){t.total=e},resetTotal:function(t){t.total.tasks=0,t.total.time=0,t.total.cost=0},removeTask:function(t,e){t.tasks.splice(e,1)},addTask:function(t,e){t.tasks.push(e)},updateTask:function(t,e,n){t.tasks.splice(n,1,e)}},actions:{updateTotal:function(t,e){var n=t.commit;n("updateTotal",e)},resetTotal:function(t){var e=t.commit;e("resetTotal")},removeTask:function(t,e){var n=t.commit;n("removeTask",e)},addTask:function(t,e){var n=t.commit;n("addTask",e)},updateTask:function(t,e,n){var a=t.commit;a("updateTask",e,n)}},getters:{users:function(t){return t.users},tasks:function(t){return t.tasks},total:function(t){return t.total}}});a["a"].use(f["a"]),a["a"].http.options.root="https://test65-6739e.firebaseio.com/",a["a"].config.productionTip=!1,new a["a"]({router:M,store:q,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("2856"),r=n.n(a);r.a},"6ef5":function(t,e,n){},"7b07":function(t,e,n){},"867e":function(t,e,n){"use strict";var a=n("6ef5"),r=n.n(a);r.a},"99e6":function(t,e,n){},"9ceb":function(t,e,n){"use strict";var a=n("7b07"),r=n.n(a);r.a},a167:function(t,e,n){},cceb:function(t,e,n){"use strict";var a=n("fd20"),r=n.n(a);r.a},fd20:function(t,e,n){},fd70:function(t,e,n){"use strict";var a=n("99e6"),r=n.n(a);r.a}});
//# sourceMappingURL=app.5df6fa63.js.map