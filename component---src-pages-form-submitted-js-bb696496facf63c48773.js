(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5j6g":function(e,t,n){e.exports={wrapper:"form-submitted-module--wrapper--YHQYo"}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=(n("WF7/"),n("v2Nh")),i=n.n(o),c=(n("PglE"),n("NO0K")),u=n("N8DM"),s=(n("FfUf"),function(){return r.a.createElement(u.ThemeToggler,null,(function(e){var t=e.theme,n=e.toggleTheme;return null===t?null:r.a.createElement("header",null,r.a.createElement("nav",{className:i.a.nav},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:i.a.navContainer},r.a.createElement(l.Link,{to:"/",className:i.a.brand},"Danilo Del Busso"),r.a.createElement("div",{className:i.a.navLinks},r.a.createElement(l.Link,{to:"/blog/"},"Blog"),r.a.createElement(l.Link,{to:"/projects/"},"Projects"),r.a.createElement(l.Link,{to:"/articles/"},"Published Articles"),r.a.createElement("div",{className:"modeToggler"},r.a.createElement("button",{onClick:function(){return n("light"===t?"dark":"light")}},r.a.createElement("div",null))))))))}))}),m=function(e){var t=e.children;return r.a.createElement("div",{className:i.a.main},t)},d=function(){return r.a.createElement("footer",{className:i.a.footer},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:i.a.footerLinks},r.a.createElement(c.a,null)),r.a.createElement("p",null,"All materials © Danilo Del Busso 2020")))};t.a=function(e){var t=e.children;return r.a.useEffect((function(){var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")};e(),window.addEventListener("resize",e)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(m,null,t),r.a.createElement(d,null))}},CHNh:function(e,t,n){e.exports={socialIcon:"social-module--socialIcon--14HmA"}},FfUf:function(e,t,n){},GtdI:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"social":{"twitter":"danilo_delbusso","github":"danilo-delbusso","linkedin":"danilo-delbusso"}}}}}')},"K3/B":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("vrFN"),o=n("Wbzz"),i=n("Bl7J"),c=n("5j6g"),u=n.n(c);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Form Submitted"}),r.a.createElement("div",{className:u.a.wrapper},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Thank you!"),r.a.createElement("p",null,"Hey! Thanks for dropping a message!",r.a.createElement("br",null)," I'll get back to you as soon as possible."),r.a.createElement(o.Link,{to:"/"},r.a.createElement("button",null,"← Back to Home")))))}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var a=n("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function c(e){return function(t){return a.createElement(u,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,r=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var l=e.attr,c=e.title,u=i(e,["attr","title"]);return a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},N8DM:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0;var r=a(n("QL1J"));t.ThemeToggler=r.default},NO0K:function(e,t,n){"use strict";var a=n("GtdI"),r=n("q1tI"),l=n.n(r),o=n("Lnxd"),i=n("ma3e"),c=n("CHNh"),u=n.n(c);t.a=function(){var e=a.data.site.siteMetadata.social;return l.a.createElement("div",null,l.a.createElement(o.b.Provider,{value:{className:u.a.socialIcon}},l.a.createElement("a",{href:"https://twitter.com/"+e.twitter},l.a.createElement(i.d,null)),l.a.createElement("a",{href:"https://github.com/"+e.github},l.a.createElement(i.b,null)),l.a.createElement("a",{href:"https://www.linkedin.com/in/"+e.linkedin+"/"},l.a.createElement(i.c,null))))}},PglE:function(e,t,n){},QL1J:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r=a(n("PJYZ")),l=a(n("VbXa")),o=a(n("lSNA")),i=a(n("q1tI")),c=a(n("17x9")),u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,(0,o.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);u.propTypes={children:c.default.func.isRequired};var s=u;t.default=s},"WF7/":function(e,t,n){},v2Nh:function(e,t,n){e.exports={nav:"layout-module--nav--2cOrb",navContainer:"layout-module--navContainer--1FuTs",brand:"layout-module--brand--1MhVo",navLinks:"layout-module--navLinks--WNy7z",main:"layout-module--main--1wJek",footer:"layout-module--footer--3NQ74",footerLinks:"layout-module--footerLinks--adBWU",socialIcon:"layout-module--socialIcon--1d6dS"}}}]);
//# sourceMappingURL=component---src-pages-form-submitted-js-bb696496facf63c48773.js.map