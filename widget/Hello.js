!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire94c2;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var u=Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(t,e){r[t]=e},e.parcelRequire94c2=o);var u=o.register;u("boKGW",function(e,n){t(e.exports,"Hello",function(){return u});var r=o("kzx6d");o("bgGuN");let u=({id:t})=>(0,r.jsxs)("div",{children:["Hello World id=",t]})}),u("kzx6d",function(t,e){t.exports=o("dW7ox")}),u("dW7ox",function(e,n){t(e.exports,"Fragment",function(){return r},function(t){return r=t}),t(e.exports,"jsx",function(){return o},function(t){return o=t}),t(e.exports,"jsxs",function(){return u},function(t){return u=t});var r,o,u,i=Symbol.for("react.transitional.element");function c(t,e,n){var r=null;if(void 0!==n&&(r=""+n),void 0!==e.key&&(r=""+e.key),"key"in e)for(var o in n={},e)"key"!==o&&(n[o]=e[o]);else n=e;return{$$typeof:i,type:t,key:r,ref:void 0!==(e=n.ref)?e:null,props:n}}r=Symbol.for("react.fragment"),o=c,u=c}),u("bgGuN",function(t,e){t.exports=o("aOijA")}),u("aOijA",function(e,n){t(e.exports,"Children",function(){return r},function(t){return r=t}),t(e.exports,"Component",function(){return u},function(t){return u=t}),t(e.exports,"Fragment",function(){return i},function(t){return i=t}),t(e.exports,"Profiler",function(){return c},function(t){return c=t}),t(e.exports,"PureComponent",function(){return f},function(t){return f=t}),t(e.exports,"StrictMode",function(){return s},function(t){return s=t}),t(e.exports,"Suspense",function(){return a},function(t){return a=t}),t(e.exports,"__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",function(){return l},function(t){return l=t}),t(e.exports,"act",function(){return p},function(t){return p=t}),t(e.exports,"cache",function(){return d},function(t){return d=t}),t(e.exports,"cloneElement",function(){return y},function(t){return y=t}),t(e.exports,"createContext",function(){return h},function(t){return h=t}),t(e.exports,"createElement",function(){return v},function(t){return v=t}),t(e.exports,"createRef",function(){return m},function(t){return m=t}),t(e.exports,"forwardRef",function(){return x},function(t){return x=t}),t(e.exports,"isValidElement",function(){return b},function(t){return b=t}),t(e.exports,"lazy",function(){return _},function(t){return _=t}),t(e.exports,"memo",function(){return g},function(t){return g=t}),t(e.exports,"startTransition",function(){return w},function(t){return w=t}),t(e.exports,"unstable_useCacheRefresh",function(){return S},function(t){return S=t}),t(e.exports,"use",function(){return E},function(t){return E=t}),t(e.exports,"useActionState",function(){return T},function(t){return T=t}),t(e.exports,"useCallback",function(){return k},function(t){return k=t}),t(e.exports,"useContext",function(){return j},function(t){return j=t}),t(e.exports,"useDebugValue",function(){return H},function(t){return H=t}),t(e.exports,"useDeferredValue",function(){return R},function(t){return R=t}),t(e.exports,"useEffect",function(){return $},function(t){return $=t}),t(e.exports,"useId",function(){return C},function(t){return C=t}),t(e.exports,"useImperativeHandle",function(){return O},function(t){return O=t}),t(e.exports,"useInsertionEffect",function(){return A},function(t){return A=t}),t(e.exports,"useLayoutEffect",function(){return N},function(t){return N=t}),t(e.exports,"useMemo",function(){return L},function(t){return L=t}),t(e.exports,"useOptimistic",function(){return P},function(t){return P=t}),t(e.exports,"useReducer",function(){return I},function(t){return I=t}),t(e.exports,"useRef",function(){return U},function(t){return U=t}),t(e.exports,"useState",function(){return q},function(t){return q=t}),t(e.exports,"useSyncExternalStore",function(){return D},function(t){return D=t}),t(e.exports,"useTransition",function(){return V},function(t){return V=t}),t(e.exports,"version",function(){return W},function(t){return W=t});var r,u,i,c,f,s,a,l,p,d,y,h,v,m,x,b,_,g,w,S,E,T,k,j,H,R,$,C,O,A,N,L,P,I,U,q,D,V,W,F=o("diTYl"),G=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),J=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),Z=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),te=Symbol.iterator,tn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tr=Object.assign,to={};function tu(t,e,n){this.props=t,this.context=e,this.refs=to,this.updater=n||tn}function ti(){}function tc(t,e,n){this.props=t,this.context=e,this.refs=to,this.updater=n||tn}tu.prototype.isReactComponent={},tu.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},tu.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},ti.prototype=tu.prototype;var tf=tc.prototype=new ti;tf.constructor=tc,tr(tf,tu.prototype),tf.isPureReactComponent=!0;var ts=Array.isArray,ta={H:null,A:null,T:null,S:null},tl=Object.prototype.hasOwnProperty;function tp(t,e,n,r,o,u){return{$$typeof:G,type:t,key:e,ref:void 0!==(n=u.ref)?n:null,props:u}}function td(t){return"object"==typeof t&&null!==t&&t.$$typeof===G}var ty=/\/+/g;function th(t,e){var n,r;return"object"==typeof t&&null!==t&&null!=t.key?(n=""+t.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(t){return r[t]})):e.toString(36)}function tv(){}function tm(t,e,n){if(null==t)return t;var r=[],o=0;return function t(e,n,r,o,u){var i,c,f,s=typeof e;("undefined"===s||"boolean"===s)&&(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case G:case M:a=!0;break;case tt:return t((a=e._init)(e._payload),n,r,o,u)}}if(a)return u=u(e),a=""===o?"."+th(e,0):o,ts(u)?(r="",null!=a&&(r=a.replace(ty,"$&/")+"/"),t(u,n,r,"",function(t){return t})):null!=u&&(td(u)&&(i=u,c=r+(null==u.key||e&&e.key===u.key?"":(""+u.key).replace(ty,"$&/")+"/")+a,u=tp(i.type,c,void 0,void 0,void 0,i.props)),n.push(u)),1;a=0;var l=""===o?".":o+":";if(ts(e))for(var p=0;p<e.length;p++)s=l+th(o=e[p],p),a+=t(o,n,r,s,u);else if("function"==typeof(p=null===(f=e)||"object"!=typeof f?null:"function"==typeof(f=te&&f[te]||f["@@iterator"])?f:null))for(e=p.call(e),p=0;!(o=e.next()).done;)s=l+th(o=o.value,p++),a+=t(o,n,r,s,u);else if("object"===s){if("function"==typeof e.then)return t(function(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch("string"==typeof t.status?t.then(tv,tv):(t.status="pending",t.then(function(e){"pending"===t.status&&(t.status="fulfilled",t.value=e)},function(e){"pending"===t.status&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}(e),n,r,o,u);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(e))?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return a}(t,r,"","",function(t){return e.call(n,t,o++)}),r}function tx(t){if(-1===t._status){var e=t._result;(e=e()).then(function(e){(0===t._status||-1===t._status)&&(t._status=1,t._result=e)},function(e){(0===t._status||-1===t._status)&&(t._status=2,t._result=e)}),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var tb="function"==typeof reportError?reportError:function(t){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof t&&null!==t&&"string"==typeof t.message?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if("object"==typeof F&&"function"==typeof F.emit){F.emit("uncaughtException",t);return}console.error(t)};function t_(){}r={map:tm,forEach:function(t,e,n){tm(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tm(t,function(){e++}),e},toArray:function(t){return tm(t,function(t){return t})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},u=tu,i=z,c=K,f=tc,s=Y,a=X,l=ta,p=function(){throw Error("act(...) is not supported in production builds of React.")},d=function(t){return function(){return t.apply(null,arguments)}},y=function(t,e,n){if(null==t)throw Error("The argument must be a React element, but you passed "+t+".");var r=tr({},t.props),o=t.key,u=void 0;if(null!=e)for(i in void 0!==e.ref&&(u=void 0),void 0!==e.key&&(o=""+e.key),e)tl.call(e,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==e.ref)&&(r[i]=e[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];r.children=c}return tp(t.type,o,void 0,void 0,u,r)},h=function(t){return(t={$$typeof:J,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider=t,t.Consumer={$$typeof:B,_context:t},t},v=function(t,e,n){var r,o={},u=null;if(null!=e)for(r in void 0!==e.key&&(u=""+e.key),e)tl.call(e,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=e[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}if(t&&t.defaultProps)for(r in i=t.defaultProps)void 0===o[r]&&(o[r]=i[r]);return tp(t,u,void 0,void 0,null,o)},m=function(){return{current:null}},x=function(t){return{$$typeof:Q,render:t}},b=td,_=function(t){return{$$typeof:tt,_payload:{_status:-1,_result:t},_init:tx}},g=function(t,e){return{$$typeof:Z,type:t,compare:void 0===e?null:e}},w=function(t){var e=ta.T,n={};ta.T=n;try{var r=t(),o=ta.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(t_,tb)}catch(t){tb(t)}finally{ta.T=e}},S=function(){return ta.H.useCacheRefresh()},E=function(t){return ta.H.use(t)},T=function(t,e,n){return ta.H.useActionState(t,e,n)},k=function(t,e){return ta.H.useCallback(t,e)},j=function(t){return ta.H.useContext(t)},H=function(){},R=function(t,e){return ta.H.useDeferredValue(t,e)},$=function(t,e){return ta.H.useEffect(t,e)},C=function(){return ta.H.useId()},O=function(t,e,n){return ta.H.useImperativeHandle(t,e,n)},A=function(t,e){return ta.H.useInsertionEffect(t,e)},N=function(t,e){return ta.H.useLayoutEffect(t,e)},L=function(t,e){return ta.H.useMemo(t,e)},P=function(t,e){return ta.H.useOptimistic(t,e)},I=function(t,e,n){return ta.H.useReducer(t,e,n)},U=function(t){return ta.H.useRef(t)},q=function(t){return ta.H.useState(t)},D=function(t,e,n){return ta.H.useSyncExternalStore(t,e,n)},V=function(){return ta.H.useTransition()},W="19.0.0"}),u("diTYl",function(t,e){var n,r,o,u=t.exports={};function i(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function f(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var s=[],a=!1,l=-1;function p(){a&&o&&(a=!1,o.length?s=o.concat(s):l=-1,s.length&&d())}function d(){if(!a){var t=f(p);a=!0;for(var e=s.length;e;){for(o=s,s=[];++l<e;)o&&o[l].run();l=-1,e=s.length}o=null,a=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function h(){}u.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new y(t,e)),1!==s.length||a||f(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=h,u.addListener=h,u.once=h,u.off=h,u.removeListener=h,u.removeAllListeners=h,u.emit=h,u.prependListener=h,u.prependOnceListener=h,u.listeners=function(t){return[]},u.binding=function(t){throw Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw Error("process.chdir is not supported")},u.umask=function(){return 0}}),o("boKGW")}();