(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{397:function(e,t,n){"use strict";n(38);var o=n(408),l=n(409),r=n(410),c=n(411),h=n(398),d=n(433),f=n(412),v=n(413),k=n(414),m=n.n(k),w=new v.a.WebAuth({domain:"dev-18di56pe.auth0.com",redirectUri:"http://localhost:3000/callback",clientID:"Bzhlz3c6AvkNvQGZ2VKTyeGYSTNCzmyl",responseType:"token id_token",scope:"openid profile email"}),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var l=arguments.length,d=new Array(l),v=0;v<l;v++)d[v]=arguments[v];return n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(d))),Object(f.a)(Object(h.a)(n),"idToken",null),Object(f.a)(Object(h.a)(n),"profile",null),Object(f.a)(Object(h.a)(n),"tokenExpiry",null),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"login",value:function(){w.authorize()}},{key:"handleAuthentication",value:function(){return new Promise(function(e){w.parseHash(function(t,n){if(!t){localStorage.setItem("loggedIn",!0);var o=JSON.stringify(1e3*n.expiresIn+(new Date).getTime());return localStorage.setItem("access_token",n.accessToken),localStorage.setItem("id_token",n.idToken),localStorage.setItem("expires_at",o),!0}e(t)})})}},{key:"renewTokens",value:function(){var e=this;return new Promise(function(t,n){if("true"!==localStorage.getItem("loggedIn"))return n("Not logged in");w.checkSession({},function(o,l){o?n(o):(e.localLogin(l),t(l))})})}},{key:"logOut",value:function(){localStorage.removeItem("loggedIn"),this.idToken=null,this.tokenExpiry=null,this.profile=null,w.logout({returnTo:window.location.origin}),this.emit("loginEvent",{loggedIn:!1})}},{key:"isAuthenticated",value:function(){return Date.now()<this.tokenExpiry&&"true"===localStorage.getItem("loggedIn")}}]),t}(m.a);t.a=new y},498:function(e,t,n){"use strict";n.r(t);n(394);var o=n(397).a.handleAuthentication,l={data:function(){return{username:"",password:""}},mounted:function(){o(),o&&this.$router.push({path:"/logged-in"})}},r=n(28),c=n(50),h=n.n(c),d=n(156),f=n(158),v=n(159),component=Object(r.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"auth0"},[t("v-container",[t("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[t("v-flex",{attrs:{xs12:"",sm6:""}},[t("div",{staticClass:"auth0--box"},[this._v("\r\n          Authenticating...\r\n        ")])])],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;h()(component,{VContainer:d.a,VFlex:f.a,VLayout:v.a})}}]);