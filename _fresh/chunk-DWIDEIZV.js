import{a as u}from"./chunk-KDZQCYFP.js";var h,o,p,N,d=0,q=[],v=[],b=u.__b,g=u.__r,C=u.diffed,A=u.__c,D=u.unmount;function E(n,t){u.__h&&u.__h(o,n,d||t),d=0;var _=o.__H||(o.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({__V:v}),_.__[n]}function B(n){return d=1,I(U,n)}function I(n,t,_){var r=E(h++,2);if(r.t=n,!r.__c&&(r.__=[_?_(t):U(void 0,t),function(c){var i=r.__N?r.__N[0]:r.__[0],f=r.t(i,c);i!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=o,!o.u)){var a=function(c,i,f){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(e){return e.__c});if(l.every(function(e){return!e.__N}))return!s||s.call(this,c,i,f);var V=!1;return l.forEach(function(e){if(e.__N){var T=e.__[0];e.__=e.__N,e.__N=void 0,T!==e.__[0]&&(V=!0)}}),!(!V&&r.__c.props===c)&&(!s||s.call(this,c,i,f))};o.u=!0;var s=o.shouldComponentUpdate,y=o.componentWillUpdate;o.componentWillUpdate=function(c,i,f){if(this.__e){var l=s;s=void 0,a(c,i,f),s=l}y&&y.call(this,c,i,f)},o.shouldComponentUpdate=a}return r.__N||r.__}function L(n,t){var _=E(h++,3);!u.__s&&x(_.__H,t)&&(_.__=n,_.i=t,o.__H.__h.push(_))}function M(n,t){var _=E(h++,7);return x(_.__H,t)?(_.__V=n(),_.i=t,_.__h=n,_.__V):_.__}function R(){for(var n;n=q.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(m),n.__H.__h.forEach(H),n.__H.__h=[]}catch(t){n.__H.__h=[],u.__e(t,n.__v)}}u.__b=function(n){o=null,b&&b(n)},u.__r=function(n){g&&g(n),h=0;var t=(o=n.__c).__H;t&&(p===o?(t.__h=[],o.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=v,_.__N=_.i=void 0})):(t.__h.forEach(m),t.__h.forEach(H),t.__h=[],h=0)),p=o},u.diffed=function(n){C&&C(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(q.push(t)!==1&&N===u.requestAnimationFrame||((N=u.requestAnimationFrame)||S)(R)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==v&&(_.__=_.__V),_.i=void 0,_.__V=v})),p=o=null},u.__c=function(n,t){t.some(function(_){try{_.__h.forEach(m),_.__h=_.__h.filter(function(r){return!r.__||H(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],u.__e(r,_.__v)}}),A&&A(n,t)},u.unmount=function(n){D&&D(n);var t,_=n.__c;_&&_.__H&&(_.__H.__.forEach(function(r){try{m(r)}catch(a){t=a}}),_.__H=void 0,t&&u.__e(t,_.__v))};var F=typeof requestAnimationFrame=="function";function S(n){var t,_=function(){clearTimeout(r),F&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(_,100);F&&(t=requestAnimationFrame(_))}function m(n){var t=o,_=n.__c;typeof _=="function"&&(n.__c=void 0,_()),o=t}function H(n){var t=o;n.__c=n.__(),o=t}function x(n,t){return!n||n.length!==t.length||t.some(function(_,r){return _!==n[r]})}function U(n,t){return typeof t=="function"?t(n):t}export{B as a,L as b,M as c};
