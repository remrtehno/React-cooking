(this["webpackJsonpb3w-ua-ks-cook"]=this["webpackJsonpb3w-ua-ks-cook"]||[]).push([[1],{102:function(t,e,c){},13:function(t,e,c){"use strict";c.d(e,"a",(function(){return A})),c.d(e,"b",(function(){return a})),c.d(e,"c",(function(){return o})),c.d(e,"d",(function(){return u}));var n="/cook",A="category",a="content",o="salati",r={HOST:n,FOOTER:"".concat(n,"/text/cook-ua-ks/footer/1"),OFERTA:"".concat(n,"/text/cook-ua-ks/oferta/1"),WELCOME:"".concat(n,"/text/cook-ua-ks/welcome/1"),SUBSCRIPTION_COSTS:"".concat(n,"/text/cook-ua-ks/subscriptioncosts/1"),CATEGORIES:"".concat(n,"/api/compact-auto?lang=ua"),FREE_PREVIEW:"".concat(n,"/gate/f/"),CONTENT:"".concat(n,"/gate/p/"),BACK_URL:"http://smotri.club/ero/default/landing/lp/flow/ksua_naf/?source=service"},u={PAGE404:"".concat(n,"/"),ERROR:"".concat(n,"/error"),SUBSCRIPTION_COSTS:"".concat(n,"/user/subscription-costs/"),OFERTA:"".concat(n,"/user/offer/"),CATEGORY:"".concat(n,"/").concat(A,"/:alias"),CATEGORY_ITEM_DETAIL:"".concat(n,"/").concat(a,"/:alias/:content/:id"),WELCOME:"".concat(n,"/welcome")};e.e=r},142:function(t,e,c){"use strict";c.r(e);var n=c(62),A=c(2),a=c.n(A),o=c(63),r=c.n(o),u=(c(102),c(44)),i=c(28),s=c(145),O=c(146),j=c(144),E=i.a.from([new i.a((function(t,e){return e(t)})),new s.a({uri:"/cook/api/query"})]),b=new O.a({cache:new j.a,link:E,defaultOptions:{query:{fetchPolicy:"no-cache"}}}),l=c(60),h=c(9);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(n.ApolloProvider,{client:b,children:Object(h.jsx)(u.a,{children:Object(h.jsx)(l.b,{})})})}),document.getElementById("root"))},60:function(t,e,c){"use strict";c.d(e,"a",(function(){return w}));var n=c(34),A=c(2),a=c.n(A),o=c(11),r=c(44),u=c(67),i=c.n(u),s=c(33),O=c.n(s),j=c(13),E=c(61),b=function(){var t=Object(A.useState)(""),e=Object(n.a)(t,2),c=e[0],a=e[1];return Object(A.useEffect)((function(){O.a.get(j.e.OFERTA).then((function(t){a(t.data)}))}),[c]),c},l=function(){var t=Object(A.useState)(""),e=Object(n.a)(t,2),c=e[0],a=e[1];return Object(A.useEffect)((function(){O.a.get(j.e.WELCOME).then((function(t){a(t.data)}))}),[c]),c},h=function(){var t=Object(A.useState)(""),e=Object(n.a)(t,2),c=e[0],a=e[1];return Object(A.useEffect)((function(){O.a.get(j.e.SUBSCRIPTION_COSTS).then((function(t){a(t.data)}))}),[c]),c},C=c(9),f=Object(A.lazy)((function(){return Promise.all([c.e(0),c.e(9)]).then(c.bind(null,171))})),d=Object(A.lazy)((function(){return Promise.all([c.e(0),c.e(8)]).then(c.bind(null,172))})),B=Object(A.lazy)((function(){return Promise.all([c.e(0),c.e(7)]).then(c.bind(null,176))})),x=Object(A.lazy)((function(){return c.e(4).then(c.bind(null,173))})),g=Object(A.lazy)((function(){return c.e(6).then(c.bind(null,174))})),p=Object(A.lazy)((function(){return c.e(5).then(c.bind(null,175))})),w=a.a.createContext("");e.b=function(){var t=Object(A.useState)(""),e=Object(n.a)(t,2),c=e[0],u=e[1],s=Object(o.f)();return Object(A.useEffect)((function(){var t,e=i.a.parse(null===s||void 0===s||null===(t=s.location)||void 0===t?void 0:t.search).status;e&&2===+e&&s.push(j.d.WELCOME)}),[s]),Object(A.useEffect)((function(){O.a.get(j.e.FOOTER).then((function(t){u(t.data)}))}),[c]),Object(C.jsx)(a.a.Suspense,{fallback:Object(C.jsx)(E.a,{}),children:Object(C.jsx)(w.Provider,{value:c,children:Object(C.jsx)(r.a,{children:Object(C.jsxs)(o.c,{children:[Object(C.jsx)(o.a,{exact:!0,path:j.d.CATEGORY,component:d}),Object(C.jsx)(o.a,{exact:!0,path:j.d.CATEGORY_ITEM_DETAIL,component:B}),Object(C.jsx)(o.a,{exact:!0,path:j.e.HOST,children:Object(C.jsx)(f,{})}),Object(C.jsx)(o.a,{path:j.d.SUBSCRIPTION_COSTS,component:function(){return Object(C.jsx)(x,{hooks:h})}}),Object(C.jsx)(o.a,{path:j.d.OFERTA,component:function(){return Object(C.jsx)(x,{hooks:b})}}),Object(C.jsx)(o.a,{path:j.d.WELCOME,component:function(){return Object(C.jsx)(x,{hooks:l})}}),Object(C.jsx)(o.a,{path:j.d.ERROR,component:p}),Object(C.jsx)(o.a,{path:j.d.PAGE404,component:g})]})})})})}},61:function(t,e,c){"use strict";c(2);var n=c(94),A=c.n(n),a=c(9);e.a=function(){return Object(a.jsx)("div",{className:A.a.Loader,children:Object(a.jsx)("img",{src:"data:image/gif;base64,R0lGODlhyQCYALMAAP////f39+/v7+fn59/f39fX187OzsbGxra2tq6urqampp6enpaWlo6Ojv4BAgAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAOACwAAAAAyQCYAAAE/xDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTbQIDBAUGAAwKCAcDlEgCBQelpQANqakJBQGhQgIEprOoqqoIBK8/AwaztLa2C5q6PL2+prXAqQzEOrwAx8jKqgAGoM01AsbQpgUDAq6xBwq23AYC2DSyyAfWGQYLDdyluekxAscA6Bq5x/v2LkjNOtdBm68CAF3g83WtwwB/CVk8nIUQhEBTDSOiWIcxxERT9fE0orhY6p+Hhd1EpjBmyhWIAL6GqZzJhWUplx9gDqRpguQBkwUP8izBsVRGh75CDvUo1CLDpSNQdvTw0RRQqB58EuRgkCLWqPmuVkAH8auIotDcYeB1YN4BpWY/dHXrDRyAAJZImhMbl8OzaKcAt1Xbd4RNX25jFjbBNlpiU4QXRy3K7hgBvpJBjEJ8EHNmEZYwaTJQgMC3z6hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDix9Pvrz58+jTq1/Pvr379/Djy59PP1QEACH5BAUHAA4ALGYAKwAPAA8AAARJ0BQyhLs4n72LABnGjYQVjqMxnChnsO3hMO8VCEMxOk2zECHHwCDr9RCBoMVoLAQdhAWzkXg6DNPG6qmYyp6HKcJKmCqsgikjAgAh+QQFBwAOACxsADAACQAVAAAESNBJZ8ac5xhxcyaA5HmcYIxHIQ3owTkFajnsSEgCqjoBalxAXGM4ZEgIxKFClGwgJIrmgdJsDAiLZkJS3TmSiMBluLgBGT9JBAAh+QQFBwAOACxmADsADwAPAAAESBDIKcO511Aq8C3bNHgHEUoFOZwjKYSCQYKbSR4vZSwN4JkAAeGgaBh7mdxxaQQYVhLmkrGRGhcaihUB1C4ThcCJoUAcoCdABAAh+QQFBwAOACxbAEEAFQAJAAAERdBJR6a14sq2jJ6DcVxN2SgHkQXCUBzwuJl048Q47DA1fecxg2HRK/2AhgEFUTziVJNAIVFzHgoCwGdwQCgYDkOBMMhYIgAh+QQFBwAOACxWADsADwAPAAAESpC1OQW4+Co6Sc4I1xwfdohKeQ1iY6hAIi5eWbSA9QUhBRyGQYmwmPwOyMJAEMAYGEekFPkxTK+fgfVK/QgIXJJKUMDCcgNCwRABACH5BAUHAA4ALFYAMAAJABUAAARH0EnDpHVktXYD2ptVgKCUkM1CDGhjOAeqSB95SApKSAwqXMDJYTgMSArE4Q+TPAwkg2ZBImg6j03Dr9qUAAjJi8AwDA5elggAIfkEBQcADgAsVgArAA8ADwAABEYQyEnHQYrRGUpqILgBBBKem7GcKMWwLTAYABxKgnEcdagcBIGEsNvVFjSKoFgkjQrMg0G4WUYHI1m0kCVdu1AmdaRjBroRADs=",alt:""})})}},94:function(t,e,c){t.exports={Loader:"Loader_Loader__3w7V8"}}},[[142,2,3]]]);
//# sourceMappingURL=main.b69cab91.chunk.js.map