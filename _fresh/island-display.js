import{b as k}from"./chunk-HAOZYOOT.js";import{a as _,b as C,d as E}from"./chunk-BJHVABN3.js";import{a as w,d as v,g as x}from"./chunk-KDZQCYFP.js";var R=0,B=Array.isArray;function n(r,f,h,u,o,s){var i,l,m={};for(l in f)l=="ref"?i=f[l]:m[l]=f[l];var d={type:r,props:m,key:h,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--R,__i:-1,__u:0,__source:o,__self:s};if(typeof r=="function"&&(i=r.defaultProps))for(l in i)m[l]===void 0&&(m[l]=i[l]);return w.vnode&&w.vnode(d),d}function S(r){let f=[{label:"\u8CB7\u5024\u306B\u3088\u308B\u8B58\u5225",value:"buy"},{label:"\u58F2\u5024\u306B\u3088\u308B\u8B58\u5225",value:"sell"}];return n("div",{class:"relative flex w-full max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md",children:n("nav",{class:"flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700",children:[n("div",{role:"button",class:"flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:n("label",{htmlFor:"horizontal-list-react",class:"flex items-center w-full px-3 py-2 cursor-pointer",children:[n("div",{class:"grid mr-3 place-items-center",children:n("div",{class:"inline-flex items-center",children:n("label",{class:"relative flex items-center p-0 rounded-full cursor-pointer",htmlFor:"horizontal-list-react",children:[n("input",{name:"horizontal-list",id:"horizontal-list-react",type:"radio",class:"before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0",value:"buy",checked:r.value==="buy",onChange:r.onChange}),n("span",{class:"absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",children:n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 16 16",fill:"currentColor",children:n("circle",{"data-name":"ellipse",cx:"8",cy:"8",r:"8"})})})]})})}),n("p",{class:"block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400",children:"\u8CB7\u5024\u306B\u3088\u308B\u8B58\u5225"})]})}),n("div",{role:"button",class:"flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:n("label",{htmlFor:"horizontal-list-vue",class:"flex items-center w-full px-3 py-2 cursor-pointer",children:[n("div",{class:"grid mr-3 place-items-center",children:n("div",{class:"inline-flex items-center",children:n("label",{class:"relative flex items-center p-0 rounded-full cursor-pointer",htmlFor:"horizontal-list-vue",children:[n("input",{name:"horizontal-list",id:"horizontal-list-vue",type:"radio",class:"before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0",value:"sell",checked:r.value==="sell",onChange:r.onChange}),n("span",{class:"absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",children:n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 16 16",fill:"currentColor",children:n("circle",{"data-name":"ellipse",cx:"8",cy:"8",r:"8"})})})]})})}),n("p",{class:"block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400",children:"\u58F2\u5024\u306B\u3088\u308B\u8B58\u5225"})]})})]})})}var J=x([]);var K=x(void 0);function A(r){return r.children}A.displayName="Partial";function g(r){return n("button",{...r,disabled:!k||r.disabled,class:`px-6 py-4 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed) ${r.class??""}`})}function T({n:r}){return n("div",{children:[n("p",{class:"flex gap-2 py-2",children:[n(g,{onClick:()=>r.value=r.value*10+1,children:"1"}),n(g,{onClick:()=>r.value=r.value*10+2,children:"2"}),n(g,{onClick:()=>r.value=r.value*10+3,children:"3"})]}),n("p",{class:"flex gap-2 py-2",children:[n(g,{onClick:()=>r.value=r.value*10+4,children:"4"}),n(g,{onClick:()=>r.value=r.value*10+5,children:"5"}),n(g,{onClick:()=>r.value=r.value*10+6,children:"6"})]}),n("p",{class:"flex gap-2 py-2",children:[n(g,{onClick:()=>r.value=r.value*10+7,children:"7"}),n(g,{onClick:()=>r.value=r.value*10+8,children:"8"}),n(g,{onClick:()=>r.value=r.value*10+9,children:"9"})]}),n("p",{class:"flex gap-2 py-2",children:[n(g,{onClick:()=>r.value=r.value*10+0,children:"0"}),n(g,{onClick:()=>r.value=0,children:"Clear"})]})]})}function P({item:r,price:f}){return n("ul",{class:"max-w-md divide-y divide-gray-200 dark:divide-gray-700",children:n("li",{class:"pt-3 pb-0 sm:pt-4",children:n("div",{class:"flex items-center space-x-4 rtl:space-x-reverse",children:[n("div",{class:"flex-1 min-w-0",children:n("p",{class:"text-sm font-medium text-gray-900 truncate",children:r})}),n("div",{class:"inline-flex items-center text-base font-semibold text-gray-900",children:[f,"\u30AE\u30BF\u30F3"]})]})})})}function I({items:r,price:f}){return n("div",{class:"flex flex-col gap-2 pt-2 w-full",children:r?.map(h=>n(P,{item:h,price:f}))})}(()=>{let r=()=>{let u=new Error("not implemented");return u.code="ENOSYS",u};if(!globalThis.fs){let u="";globalThis.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(o,s){u+=h.decode(s);let i=u.lastIndexOf(`
`);return i!=-1&&(console.log(u.substring(0,i)),u=u.substring(i+1)),s.length},write(o,s,i,l,m,d){if(i!==0||l!==s.length||m!==null){d(r());return}let b=this.writeSync(o,s);d(null,b)},chmod(o,s,i){i(r())},chown(o,s,i,l){l(r())},close(o,s){s(r())},fchmod(o,s,i){i(r())},fchown(o,s,i,l){l(r())},fstat(o,s){s(r())},fsync(o,s){s(null)},ftruncate(o,s,i){i(r())},lchown(o,s,i,l){l(r())},link(o,s,i){i(r())},lstat(o,s){s(r())},mkdir(o,s,i){i(r())},open(o,s,i,l){l(r())},read(o,s,i,l,m,d){d(r())},readdir(o,s){s(r())},readlink(o,s){s(r())},rename(o,s,i){i(r())},rmdir(o,s){s(r())},stat(o,s){s(r())},symlink(o,s,i){i(r())},truncate(o,s,i){i(r())},unlink(o,s){s(r())},utimes(o,s,i,l){l(r())}}}if(globalThis.process||(globalThis.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw r()},pid:-1,ppid:-1,umask(){throw r()},cwd(){throw r()},chdir(){throw r()}}),!globalThis.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!globalThis.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!globalThis.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!globalThis.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");let f=new TextEncoder("utf-8"),h=new TextDecoder("utf-8");globalThis.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=e=>{e!==0&&console.warn("exit code:",e)},this._exitPromise=new Promise(e=>{this._resolveExitPromise=e}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;let u=(e,t)=>{this.mem.setUint32(e+0,t,!0),this.mem.setUint32(e+4,Math.floor(t/4294967296),!0)},o=(e,t)=>{this.mem.setUint32(e+0,t,!0)},s=e=>{let t=this.mem.getUint32(e+0,!0),a=this.mem.getInt32(e+4,!0);return t+a*4294967296},i=e=>{let t=this.mem.getFloat64(e,!0);if(t===0)return;if(!isNaN(t))return t;let a=this.mem.getUint32(e,!0);return this._values[a]},l=(e,t)=>{if(typeof t=="number"&&t!==0){if(isNaN(t)){this.mem.setUint32(e+4,2146959360,!0),this.mem.setUint32(e,0,!0);return}this.mem.setFloat64(e,t,!0);return}if(t===void 0){this.mem.setFloat64(e,0,!0);return}let c=this._ids.get(t);c===void 0&&(c=this._idPool.pop(),c===void 0&&(c=this._values.length),this._values[c]=t,this._goRefCounts[c]=0,this._ids.set(t,c)),this._goRefCounts[c]++;let p=0;switch(typeof t){case"object":t!==null&&(p=1);break;case"string":p=2;break;case"symbol":p=3;break;case"function":p=4;break}this.mem.setUint32(e+4,2146959360|p,!0),this.mem.setUint32(e,c,!0)},m=e=>{let t=s(e+0),a=s(e+8);return new Uint8Array(this._inst.exports.mem.buffer,t,a)},d=e=>{let t=s(e+0),a=s(e+8),c=new Array(a);for(let p=0;p<a;p++)c[p]=i(t+p*8);return c},b=e=>{let t=s(e+0),a=s(e+8);return h.decode(new DataView(this._inst.exports.mem.buffer,t,a))},y=Date.now()-performance.now();this.importObject={_gotest:{add:(e,t)=>e+t},gojs:{"runtime.wasmExit":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(t)},"runtime.wasmWrite":e=>{e>>>=0;let t=s(e+8),a=s(e+16),c=this.mem.getInt32(e+24,!0);fs.writeSync(t,new Uint8Array(this._inst.exports.mem.buffer,a,c))},"runtime.resetMemoryDataView":e=>{e>>>=0,this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":e=>{e>>>=0,u(e+8,(y+performance.now())*1e6)},"runtime.walltime":e=>{e>>>=0;let t=new Date().getTime();u(e+8,t/1e3),this.mem.setInt32(e+16,t%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":e=>{e>>>=0;let t=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(t,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(t);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(e+8))),this.mem.setInt32(e+16,t,!0)},"runtime.clearTimeoutEvent":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);clearTimeout(this._scheduledTimeouts.get(t)),this._scheduledTimeouts.delete(t)},"runtime.getRandomData":e=>{e>>>=0,crypto.getRandomValues(m(e+8))},"syscall/js.finalizeRef":e=>{e>>>=0;let t=this.mem.getUint32(e+8,!0);if(this._goRefCounts[t]--,this._goRefCounts[t]===0){let a=this._values[t];this._values[t]=null,this._ids.delete(a),this._idPool.push(t)}},"syscall/js.stringVal":e=>{e>>>=0,l(e+24,b(e+8))},"syscall/js.valueGet":e=>{e>>>=0;let t=Reflect.get(i(e+8),b(e+16));e=this._inst.exports.getsp()>>>0,l(e+32,t)},"syscall/js.valueSet":e=>{e>>>=0,Reflect.set(i(e+8),b(e+16),i(e+32))},"syscall/js.valueDelete":e=>{e>>>=0,Reflect.deleteProperty(i(e+8),b(e+16))},"syscall/js.valueIndex":e=>{e>>>=0,l(e+24,Reflect.get(i(e+8),s(e+16)))},"syscall/js.valueSetIndex":e=>{e>>>=0,Reflect.set(i(e+8),s(e+16),i(e+24))},"syscall/js.valueCall":e=>{e>>>=0;try{let t=i(e+8),a=Reflect.get(t,b(e+16)),c=d(e+32),p=Reflect.apply(a,t,c);e=this._inst.exports.getsp()>>>0,l(e+56,p),this.mem.setUint8(e+64,1)}catch(t){e=this._inst.exports.getsp()>>>0,l(e+56,t),this.mem.setUint8(e+64,0)}},"syscall/js.valueInvoke":e=>{e>>>=0;try{let t=i(e+8),a=d(e+16),c=Reflect.apply(t,void 0,a);e=this._inst.exports.getsp()>>>0,l(e+40,c),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,l(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueNew":e=>{e>>>=0;try{let t=i(e+8),a=d(e+16),c=Reflect.construct(t,a);e=this._inst.exports.getsp()>>>0,l(e+40,c),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,l(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueLength":e=>{e>>>=0,u(e+16,parseInt(i(e+8).length))},"syscall/js.valuePrepareString":e=>{e>>>=0;let t=f.encode(String(i(e+8)));l(e+16,t),u(e+24,t.length)},"syscall/js.valueLoadString":e=>{e>>>=0;let t=i(e+8);m(e+16).set(t)},"syscall/js.valueInstanceOf":e=>{e>>>=0,this.mem.setUint8(e+24,i(e+8)instanceof i(e+16)?1:0)},"syscall/js.copyBytesToGo":e=>{e>>>=0;let t=m(e+8),a=i(e+32);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(e+48,0);return}let c=a.subarray(0,t.length);t.set(c),u(e+40,c.length),this.mem.setUint8(e+48,1)},"syscall/js.copyBytesToJS":e=>{e>>>=0;let t=i(e+8),a=m(e+16);if(!(t instanceof Uint8Array||t instanceof Uint8ClampedArray)){this.mem.setUint8(e+48,0);return}let c=a.subarray(0,t.length);t.set(c),u(e+40,c.length),this.mem.setUint8(e+48,1)},debug:e=>{console.log(e)}}}}async run(u){if(!(u instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=u,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,globalThis,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[globalThis,5],[this,6]]),this._idPool=[],this.exited=!1;let o=4096,s=y=>{let e=o,t=f.encode(y+"\0");return new Uint8Array(this.mem.buffer,o,t.length).set(t),o+=t.length,o%8!==0&&(o+=8-o%8),e},i=this.argv.length,l=[];this.argv.forEach(y=>{l.push(s(y))}),l.push(0),Object.keys(this.env).sort().forEach(y=>{l.push(s(`${y}=${this.env[y]}`))}),l.push(0);let d=o;if(l.forEach(y=>{this.mem.setUint32(o,y,!0),this.mem.setUint32(o+4,0,!0),o+=8}),o>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(i,d),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(u){let o=this;return function(){let s={id:u,this:this,args:arguments};return o._pendingEvent=s,o._resume(),s.result}}}})();function N(r){let f=E(0),[h,u]=_({buy:null,sell:null,buyText:[],sellText:[],isWasmReady:!1});C(()=>{h.isWasmReady&&u({...h,buyText:h.buy(f.value),sellText:h.sell(f.value)})},[f.value]),C(async()=>{let m=new Go,d=await WebAssembly.instantiate(r.wasm,m.importObject);m.run(d.instance),u({...h,buy,sell,isWasmReady:!0})},[]);let[o,s]=_("buy"),i=m=>s(m.target.value),l=m=>{switch(m){case"buy":return h.buyText;case"sell":return h.sellText}return[]};return n(v,{children:[n(S,{value:o,onChange:i}),n("div",{class:"text-3xl tabular-nums",children:[f.value,"\u30AE\u30BF\u30F3"]}),n(T,{n:f}),n(I,{items:l(o),price:f.value})]})}export{N as default};
