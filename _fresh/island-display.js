import{b as O}from"./chunk-YKJSWG2W.js";import{a as R,b as I,d as D}from"./chunk-BJHVABN3.js";import{a as P,d as B,g as E}from"./chunk-KDZQCYFP.js";import{a as T}from"./chunk-LDV6YPMG.js";var X=0,ne=Array.isArray;function e(t,u,f,h,w,a){var n,o,l={};for(o in u)o=="ref"?n=u[o]:l[o]=u[o];var p={type:t,props:l,key:f,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--X,__i:-1,__u:0,__source:w,__self:a};if(typeof t=="function"&&(n=t.defaultProps))for(o in n)l[o]===void 0&&(l[o]=n[o]);return P.vnode&&P.vnode(p),p}function A(t){let u=[{label:"\u8CB7\u5024\u306B\u3088\u308B\u8B58\u5225",value:"buy"},{label:"\u58F2\u5024\u306B\u3088\u308B\u8B58\u5225",value:"sell"}];return e("div",{class:"relative flex w-full max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md",children:e("nav",{class:"flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700",children:[e("div",{role:"button",class:"flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:e("label",{htmlFor:"horizontal-list-react",class:"flex items-center w-full px-3 py-2 cursor-pointer",children:[e("div",{class:"grid mr-3 place-items-center",children:e("div",{class:"inline-flex items-center",children:e("label",{class:"relative flex items-center p-0 rounded-full cursor-pointer",htmlFor:"horizontal-list-react",children:[e("input",{name:"horizontal-list",id:"horizontal-list-react",type:"radio",class:"before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0",value:"buy",checked:t.value==="buy",onChange:t.onChange}),e("span",{class:"absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 16 16",fill:"currentColor",children:e("circle",{"data-name":"ellipse",cx:"8",cy:"8",r:"8"})})})]})})}),e("p",{class:"block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400",children:"\u8CB7\u5024\u306B\u3088\u308B\u8B58\u5225"})]})}),e("div",{role:"button",class:"flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900",children:e("label",{htmlFor:"horizontal-list-vue",class:"flex items-center w-full px-3 py-2 cursor-pointer",children:[e("div",{class:"grid mr-3 place-items-center",children:e("div",{class:"inline-flex items-center",children:e("label",{class:"relative flex items-center p-0 rounded-full cursor-pointer",htmlFor:"horizontal-list-vue",children:[e("input",{name:"horizontal-list",id:"horizontal-list-vue",type:"radio",class:"before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0",value:"sell",checked:t.value==="sell",onChange:t.onChange}),e("span",{class:"absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 16 16",fill:"currentColor",children:e("circle",{"data-name":"ellipse",cx:"8",cy:"8",r:"8"})})})]})})}),e("p",{class:"block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400",children:"\u58F2\u5024\u306B\u3088\u308B\u8B58\u5225"})]})})]})})}var de=E([]);var be=E(void 0);function G(t){return t.children}G.displayName="Partial";function y(t){return e("button",{...t,disabled:!O||t.disabled,class:`px-6 py-4 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed) ${t.class??""}`})}function U({n:t}){return e("div",{children:[e("p",{class:"flex gap-2 py-2",children:[e(y,{onClick:()=>t.value=t.value*10+1,children:"1"}),e(y,{onClick:()=>t.value=t.value*10+2,children:"2"}),e(y,{onClick:()=>t.value=t.value*10+3,children:"3"})]}),e("p",{class:"flex gap-2 py-2",children:[e(y,{onClick:()=>t.value=t.value*10+4,children:"4"}),e(y,{onClick:()=>t.value=t.value*10+5,children:"5"}),e(y,{onClick:()=>t.value=t.value*10+6,children:"6"})]}),e("p",{class:"flex gap-2 py-2",children:[e(y,{onClick:()=>t.value=t.value*10+7,children:"7"}),e(y,{onClick:()=>t.value=t.value*10+8,children:"8"}),e(y,{onClick:()=>t.value=t.value*10+9,children:"9"})]}),e("p",{class:"flex gap-2 py-2",children:[e(y,{onClick:()=>t.value=t.value*10+0,children:"0"}),e(y,{onClick:()=>t.value=0,children:"Clear"})]})]})}function J({size:t=24,color:u="currentColor",stroke:f=2,...h}){return e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-plant",width:t,height:t,viewBox:"0 0 24 24","stroke-width":f,stroke:u,fill:"none","stroke-linecap":"round","stroke-linejoin":"round",...h,children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z"}),e("path",{d:"M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"}),e("path",{d:"M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"}),e("path",{d:"M12 15l0 -6"})]})}var M=J;function K({size:t=24,color:u="currentColor",stroke:f=2,...h}){return e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-align-box-left-stretch",width:t,height:t,viewBox:"0 0 24 24","stroke-width":f,stroke:u,fill:"none","stroke-linecap":"round","stroke-linejoin":"round",...h,children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"}),e("path",{d:"M9 17h-2"}),e("path",{d:"M13 12h-6"}),e("path",{d:"M11 7h-4"})]})}var N=K;function $({size:t=24,color:u="currentColor",stroke:f=2,...h}){return e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-circle-plus-2",width:t,height:t,viewBox:"0 0 24 24","stroke-width":f,stroke:u,fill:"none","stroke-linecap":"round","stroke-linejoin":"round",...h,children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M20.985 12.522a9 9 0 1 0 -8.475 8.464"}),e("path",{d:"M16 19h6"}),e("path",{d:"M19 16v6"})]})}var F=$;function Y({size:t=24,color:u="currentColor",stroke:f=2,...h}){return e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-cane",width:t,height:t,viewBox:"0 0 24 24","stroke-width":f,stroke:u,fill:"none","stroke-linecap":"round","stroke-linejoin":"round",...h,children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M9 21l6.324 -11.69c.54 -.974 1.756 -4.104 -1.499 -5.762c-3.255 -1.657 -5.175 .863 -5.825 2.032"})]})}var H=Y;function Z({size:t=24,color:u="currentColor",stroke:f=2,...h}){return e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-archive",width:t,height:t,viewBox:"0 0 24 24","stroke-width":f,stroke:u,fill:"none","stroke-linecap":"round","stroke-linejoin":"round",...h,children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}),e("path",{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"}),e("path",{d:"M10 12l4 0"})]})}var j=Z;function Q(t){if(t.includes("\u306E\u6756"))return e(H,{});if(t.includes("\u306E\u58FA"))return e(j,{});if(t.includes("\u5272\u308C\u306A\u3044\u58FA"))return e(j,{});if(t.includes("\u306C\u308C\u305F\u5DFB\u7269"))return e(N,{});if(t.includes("\u306E\u5DFB\u7269"))return e(N,{});if(t.includes("\u8349"))return e(M,{});if(t.includes("\u7A2E"))return e(M,{});if(t.includes("\u306E\u8155\u8F2A"))return e(F,{})}function V({item:t,price:u}){return e("ul",{class:"max-w-md divide-y divide-gray-200 dark:divide-gray-700",children:e("li",{class:"pt-3 pb-0 sm:pt-4",children:e("div",{class:"flex items-center space-x-4 rtl:space-x-reverse",children:[Q(t),e("div",{class:"flex-1 min-w-0",children:e("p",{class:"text-sm font-medium text-gray-900 truncate",children:t})}),e("div",{class:"inline-flex items-center text-base font-semibold text-gray-900",children:[u,"\u30AE\u30BF\u30F3"]})]})})})}function L({items:t,price:u}){return e("div",{class:"flex flex-col gap-2 pt-2 w-full",children:t?.map(f=>e(V,{item:f,price:u}))})}(()=>{if(!(typeof global<"u"))if(typeof window<"u")window.global=window;else if(typeof self<"u")self.global=self;else throw new Error("cannot export Go (neither global, window nor self is defined)");!global.require&&typeof T<"u"&&(global.require=T);let t=()=>{let a=new Error("not implemented");return a.code="ENOSYS",a};if(!global.fs){let a="";global.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(n,o){a+=f.decode(o);let l=a.lastIndexOf(`
`);return l!=-1&&(console.log(a.substr(0,l)),a=a.substr(l+1)),o.length},write(n,o,l,p,k,_){if(l!==0||p!==o.length||k!==null){_(t());return}let C=this.writeSync(n,o);_(null,C)},chmod(n,o,l){l(t())},chown(n,o,l,p){p(t())},close(n,o){o(t())},fchmod(n,o,l){l(t())},fchown(n,o,l,p){p(t())},fstat(n,o){o(t())},fsync(n,o){o(null)},ftruncate(n,o,l){l(t())},lchown(n,o,l,p){p(t())},link(n,o,l){l(t())},lstat(n,o){o(t())},mkdir(n,o,l){l(t())},open(n,o,l,p){p(t())},read(n,o,l,p,k,_){_(t())},readdir(n,o){o(t())},readlink(n,o){o(t())},rename(n,o,l){l(t())},rmdir(n,o){o(t())},stat(n,o){o(t())},symlink(n,o,l){l(t())},truncate(n,o,l){l(t())},unlink(n,o){o(t())},utimes(n,o,l,p){p(t())}}}if(global.process||(global.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw t()},pid:-1,ppid:-1,umask(){throw t()},cwd(){throw t()},chdir(){throw t()}}),!global.crypto){let a=T("node:crypto");global.crypto={getRandomValues(n){a.randomFillSync(n)}}}global.performance||(global.performance={now(){let[a,n]=process.hrtime();return a*1e3+n/1e6}}),global.TextEncoder||(global.TextEncoder=T("node:util").TextEncoder),global.TextDecoder||(global.TextDecoder=T("node:util").TextDecoder);let u=new TextEncoder("utf-8"),f=new TextDecoder("utf-8"),h=new DataView(new ArrayBuffer(8));var w=[];global.Go=class{constructor(){this._callbackTimeouts=new Map,this._nextCallbackTimeoutID=1;let a=()=>new DataView(this._inst.exports.memory.buffer),n=r=>{h.setBigInt64(0,r,!0);let s=h.getFloat64(0,!0);if(s===0)return;if(!isNaN(s))return s;let i=r&0xffffffffn;return this._values[i]},o=r=>{let s=a().getBigUint64(r,!0);return n(s)},l=r=>{let s=0x7FF80000n;if(typeof r=="number")return isNaN(r)?s<<32n:r===0?s<<32n|1n:(h.setFloat64(0,r,!0),h.getBigInt64(0,!0));switch(r){case void 0:return 0n;case null:return s<<32n|2n;case!0:return s<<32n|3n;case!1:return s<<32n|4n}let i=this._ids.get(r);i===void 0&&(i=this._idPool.pop(),i===void 0&&(i=BigInt(this._values.length)),this._values[i]=r,this._goRefCounts[i]=0,this._ids.set(r,i)),this._goRefCounts[i]++;let c=1n;switch(typeof r){case"string":c=2n;break;case"symbol":c=3n;break;case"function":c=4n;break}return i|(s|c)<<32n},p=(r,s)=>{let i=l(s);a().setBigUint64(r,i,!0)},k=(r,s,i)=>new Uint8Array(this._inst.exports.memory.buffer,r,s),_=(r,s,i)=>{let c=new Array(s);for(let d=0;d<s;d++)c[d]=o(r+d*8);return c},C=(r,s)=>f.decode(new DataView(this._inst.exports.memory.buffer,r,s)),z=Date.now()-performance.now();this.importObject={wasi_snapshot_preview1:{fd_write:function(r,s,i,c){let d=0;if(r==1)for(let g=0;g<i;g++){let m=s+g*8,b=a().getUint32(m+0,!0),x=a().getUint32(m+4,!0);d+=x;for(let v=0;v<x;v++){let S=a().getUint8(b+v);if(S!=13)if(S==10){let W=f.decode(new Uint8Array(w));w=[],console.log(W)}else w.push(S)}}else console.error("invalid file descriptor:",r);return a().setUint32(c,d,!0),0},fd_close:()=>0,fd_fdstat_get:()=>0,fd_seek:()=>0,proc_exit:r=>{if(global.process)process.exit(r);else throw"trying to exit with code "+r},random_get:(r,s)=>(crypto.getRandomValues(k(r,s)),0)},gojs:{"runtime.ticks":()=>z+performance.now(),"runtime.sleepTicks":r=>{setTimeout(this._inst.exports.go_scheduler,r)},"syscall/js.finalizeRef":r=>{console.error("syscall/js.finalizeRef not implemented")},"syscall/js.stringVal":(r,s)=>{let i=C(r,s);return l(i)},"syscall/js.valueGet":(r,s,i)=>{let c=C(s,i),d=n(r),g=Reflect.get(d,c);return l(g)},"syscall/js.valueSet":(r,s,i,c)=>{let d=n(r),g=C(s,i),m=n(c);Reflect.set(d,g,m)},"syscall/js.valueDelete":(r,s,i)=>{let c=n(r),d=C(s,i);Reflect.deleteProperty(c,d)},"syscall/js.valueIndex":(r,s)=>l(Reflect.get(n(r),s)),"syscall/js.valueSetIndex":(r,s,i)=>{Reflect.set(n(r),s,n(i))},"syscall/js.valueCall":(r,s,i,c,d,g,m)=>{let b=n(s),x=C(i,c),v=_(d,g,m);try{let S=Reflect.get(b,x);p(r,Reflect.apply(S,b,v)),a().setUint8(r+8,1)}catch(S){p(r,S),a().setUint8(r+8,0)}},"syscall/js.valueInvoke":(r,s,i,c,d)=>{try{let g=n(s),m=_(i,c,d);p(r,Reflect.apply(g,void 0,m)),a().setUint8(r+8,1)}catch(g){p(r,g),a().setUint8(r+8,0)}},"syscall/js.valueNew":(r,s,i,c,d)=>{let g=n(s),m=_(i,c,d);try{p(r,Reflect.construct(g,m)),a().setUint8(r+8,1)}catch(b){p(r,b),a().setUint8(r+8,0)}},"syscall/js.valueLength":r=>n(r).length,"syscall/js.valuePrepareString":(r,s)=>{let i=String(n(s)),c=u.encode(i);p(r,c),a().setInt32(r+8,c.length,!0)},"syscall/js.valueLoadString":(r,s,i,c)=>{let d=n(r);k(s,i,c).set(d)},"syscall/js.valueInstanceOf":(r,s)=>n(r)instanceof n(s),"syscall/js.copyBytesToGo":(r,s,i,c,d)=>{let g=r,m=r+4,b=k(s,i),x=n(d);if(!(x instanceof Uint8Array||x instanceof Uint8ClampedArray)){a().setUint8(m,0);return}let v=x.subarray(0,b.length);b.set(v),a().setUint32(g,v.length,!0),a().setUint8(m,1)},"syscall/js.copyBytesToJS":(r,s,i,c,d)=>{let g=r,m=r+4,b=n(s),x=k(i,c);if(!(b instanceof Uint8Array||b instanceof Uint8ClampedArray)){a().setUint8(m,0);return}let v=x.subarray(0,b.length);b.set(v),a().setUint32(g,v.length,!0),a().setUint8(m,1)}}},this.importObject.env=this.importObject.gojs}async run(a){this._inst=a,this._values=[NaN,0,null,!0,!1,global,this],this._goRefCounts=[],this._ids=new Map,this._idPool=[],this.exited=!1;let n=new DataView(this._inst.exports.memory.buffer);for(;;){let o=new Promise(l=>{this._resolveCallbackPromise=()=>{if(this.exited)throw new Error("bad callback: Go program has already exited");setTimeout(l,0)}});if(this._inst.exports._start(),this.exited)break;await o}}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(a){let n=this;return function(){let o={id:a,this:this,args:arguments};return n._pendingEvent=o,n._resume(),o.result}}}})();function ee(t){let u=D(0),[f,h]=R({buy:null,sell:null,buyText:[],sellText:[],isWasmReady:!1});I(()=>{f.isWasmReady&&h({...f,buyText:f.buy(u.value),sellText:f.sell(u.value)})},[u.value]),I(async()=>{let l=new Go,p=await WebAssembly.instantiate(t.wasm,l.importObject);l.run(p.instance),h({...f,buy,sell,isWasmReady:!0})},[]);let[w,a]=R("buy"),n=l=>a(l.target.value),o=l=>{switch(l){case"buy":return f.buyText;case"sell":return f.sellText}return[]};return e(B,{children:[e(A,{value:w,onChange:n}),e("div",{class:"text-3xl tabular-nums",children:[u.value,"\u30AE\u30BF\u30F3"]}),e(U,{n:u}),e(L,{items:o(w),price:u.value})]})}export{ee as default};
