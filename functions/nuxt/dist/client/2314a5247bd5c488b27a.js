(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{497:function(t,n,o){"use strict";o.r(n);o(394);var e=o(115),r=o.n(e),c={data:function(){return{user:"",provider:""}},methods:{googleSignIn:function(){var t=this;this.provider=new r.a.auth.GoogleAuthProvider,r.a.auth().signInWithPopup(this.provider).then(function(n){t.user=n.user}).catch(function(t){console.log(t)})}}},l=o(28),h=o(50),v=o.n(h),f=o(160),d=o(156),w=o(158),x=o(152),V=o(159),component=Object(l.a)(c,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"auth0"},[n("v-container",[n("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("div",{staticClass:"auth0--box"},[n("v-btn",{attrs:{outline:"",fab:"",color:"#4285F4"},on:{click:this.googleSignIn}},[n("v-icon",[this._v("fab fa-google")])],1)],1)])],1)],1)],1)},[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:f.a,VContainer:d.a,VFlex:w.a,VIcon:x.a,VLayout:V.a})}}]);