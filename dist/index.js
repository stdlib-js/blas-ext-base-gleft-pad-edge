"use strict";var q=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var b=q(function(G,p){
function h(v,r,o,c,u,a,t,s){var n,i,f,d,g,e,P,l;for(n=o.data,i=a.data,f=o.accessors[0],d=a.accessors[1],P=f(n,u),e=s,l=0;l<r;l++)d(i,e,P),e+=t;for(g=u,l=0;l<v;l++)d(i,e,f(n,g)),e+=t,g+=c;return a}p.exports=h
});var x=q(function(H,E){
var y=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(v,r,o,c,u,a,t,s){var n,i,f,d,g,e;if(v<=0)return a;if(r<0&&(r=0),f=y(o),d=y(a),f.accessorProtocol||d.accessorProtocol)return w(v,r,f,c,u,d,t,s),a;for(g=o[u],i=s,e=0;e<r;e++)a[i]=g,i+=t;for(n=u,e=0;e<v;e++)a[i]=o[n],i+=t,n+=c;return a}E.exports=z
});var O=q(function(I,m){
var j=require('@stdlib/strided-base-stride2offset/dist'),A=x();function B(v,r,o,c,u,a){var t,s;return r<0&&(r=0),t=j(v,c),s=j(v+r,a),A(v,r,o,c,t,u,a,s)}m.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),D=x();C(R,"ndarray",D);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
