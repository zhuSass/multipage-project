(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"7eyS":function(e){e.exports={"首页":"首页","单页面":"单页面"}},EO75:function(e){e.exports={"首页":"index","单页面":"SPA"}},Og29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("91wl")),i=a(n("EO75"));function a(e){return e&&e.__esModule?e:{default:e}}var u={locale:"en",formats:{money:{currency:"USD"}},data:r.default};u.messages=i.default,t.default=u},Sy3V:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("Nnr9")),i=a(n("7eyS"));function a(e){return e&&e.__esModule?e:{default:e}}var u={locale:"zh",formats:{money:{currency:"CNY"}},data:r.default};u.messages=i.default,t.default=u},Zuiv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageinitStore=void 0;var r,i,a,u,o,l=p(n("liLe")),s=p(n("1Mrq")),f=p(n("AA3o")),c=p(n("xSur")),d=n("g26V");function p(e){return e&&e.__esModule?e:{default:e}}function v(e,t,n,r){n&&(0,l.default)(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function y(e,t,n,r,i){var a={};return Object.keys(r).forEach(function(e){a[e]=r[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},a),i&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(i):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n("zr9E"));var h=t.PageinitStore=(r=function(){function e(){(0,f.default)(this,e),v(this,"maxstep",i,this),v(this,"curstep",a,this),v(this,"intl",u,this),v(this,"i18nMessagesInfo",o,this)}return(0,c.default)(e,[{key:"setIntlHandle",value:function(e){this.intl=e}},{key:"setI18nMessagesInfoHandle",value:function(t){this.i18nMessagesInfo=e.getMessages(t)}},{key:"decreaseStep",value:function(e){this.curstep.indexOf(e)>-1&&this.curstep.splice(this.curstep.indexOf(e),1)}},{key:"initState",value:function(e,t){if(!Array.isArray(e)&&!Array.isArray(t))return console.log("maxstep及curstep实参不是array类型"),null;this.maxstep=e,this.curstep=t}},{key:"increaseStep",value:function(e){-1===this.curstep.indexOf(e)&&this.curstep.push(e)}},{key:"compare",get:function(){var e=this.maxstep,t=this.curstep;return e.length===t.length}}],[{key:"getMessages",value:function(e){switch(e){case"zh":return n("Sy3V");default:return n("Og29")}}}]),e}(),i=y(r.prototype,"maxstep",[d.observable],{enumerable:!0,initializer:function(){return[]}}),a=y(r.prototype,"curstep",[d.observable],{enumerable:!0,initializer:function(){return[]}}),u=y(r.prototype,"intl",[d.observable],{enumerable:!0,initializer:function(){return{}}}),o=y(r.prototype,"i18nMessagesInfo",[d.observable],{enumerable:!0,initializer:function(){return{}}}),y(r.prototype,"setIntlHandle",[d.action],(0,s.default)(r.prototype,"setIntlHandle"),r.prototype),y(r.prototype,"setI18nMessagesInfoHandle",[d.action],(0,s.default)(r.prototype,"setI18nMessagesInfoHandle"),r.prototype),y(r.prototype,"decreaseStep",[d.action],(0,s.default)(r.prototype,"decreaseStep"),r.prototype),y(r.prototype,"initState",[d.action],(0,s.default)(r.prototype,"initState"),r.prototype),y(r.prototype,"increaseStep",[d.action],(0,s.default)(r.prototype,"increaseStep"),r.prototype),y(r.prototype,"compare",[d.computed],(0,s.default)(r.prototype,"compare"),r.prototype),r);t.default=new h},gzEs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,a=s(n("liLe")),u=s(n("AA3o")),o=n("g26V"),l=s(n("Zuiv"));function s(e){return e&&e.__esModule?e:{default:e}}var f=(i=function(e,t,n,r,i){var a={};return Object.keys(r).forEach(function(e){a[e]=r[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),void 0===(a=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},a)).initializer&&(Object.defineProperty(e,t,a),a=null),a}((r=function e(){(0,u.default)(this,e),function(e,t,n,r){n&&(0,a.default)(e,"message",{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}(this,0,i,this)}).prototype,"message",[o.observable],{enumerable:!0,initializer:function(){return"单页面首页"}}),r),c={pageinitStore:l.default,spanIndexStore:new f};window._____APP_STATE_____=c,t.default=c},"q/GN":function(e,t,n){},vMCF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=v(n("Yarq")),a=v(n("AA3o")),u=v(n("xSur")),o=v(n("UzKs")),l=v(n("Y7Ml")),s=n("1uRQ"),f=v(s),c=n("V4Oj"),d=v(n("wtYP")),p=(v(n("cf0g")),v(n("gzEs")));function v(e){return e&&e.__esModule?e:{default:e}}n("q/GN");var y=(0,c.inject)("pageinitStore")(r=(0,c.inject)("spanIndexStore")(r=(0,c.observer)(r=function(e){function t(e){return(0,a.default)(this,t),(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.pageinitStore.intl.formatMessage,t=this.props.spanIndexStore.message;return f.default.createElement("div",{className:"spanindex-wrap"},e({id:t}))}}]),t}(s.Component))||r)||r)||r,h=function(e){function t(e){return(0,a.default)(this,t),(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(c.Provider,p.default,f.default.createElement(d.default,null,f.default.createElement(y,null)))}}]),t}(s.Component);t.default=h},wtYP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,a=_(n("Yarq")),u=_(n("AA3o")),o=_(n("xSur")),l=_(n("UzKs")),s=_(n("Y7Ml")),f=_(n("IHPB")),c=n("1uRQ"),d=_(c),p=n("V4Oj"),v=n("fXpW"),y=_(n("/mFE")),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("zr9E")),m=_(n("Sy3V")),b=_(n("Og29"));function _(e){return e&&e.__esModule?e:{default:e}}(0,v.addLocaleData)([].concat((0,f.default)(m.default.data),(0,f.default)(b.default.data)));var g=h.getClientLang().indexOf("zh")>=0?"zh":"en",S=(0,p.inject)("pageinitStore")(r=(0,p.observer)(r=function(e){function t(e){(0,u.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={},n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,this.props.refDom)}}],[{key:"getDerivedStateFromProps",value:function(e){return e.intl&&e.pageinitStore.setIntlHandle(e.intl),{}}}]),t}(c.Component))||r)||r;S.propTypes={refDom:y.default.element,intl:y.default.object};var M=(0,v.injectIntl)(S),w=(0,p.inject)("pageinitStore")(i=(0,p.observer)(i=function(e){function t(e){(0,u.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return e.pageinitStore.setI18nMessagesInfoHandle(g),n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){window.Intl||(window.Intl={},Promise.all([n.e(5),n.e(6)]).then(function(e){window.Intl=n("VQqe")}.bind(null,n)).catch(n.oe))}},{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){var e=this.props.pageinitStore.i18nMessagesInfo;return d.default.createElement(v.IntlProvider,{locale:e.default.locale,formats:e.default.formats,messages:e.default.messages},d.default.createElement(M,{refDom:this.props.children}))}}]),t}(c.Component))||i)||i;t.default=w}}]);