const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};p();var style="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CONSTANTS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const assert=function(n,e){if(!n)throw assertionError(e)},assertionError=function(n){return new Error("Firebase Database ("+CONSTANTS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const stringToByteArray$1=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},byteArrayToString=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),i.push(t[d],t[h],t[u],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(stringToByteArray$1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):byteArrayToString(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new DecodeBase64StringError;const u=r<<2|a>>4;if(i.push(u),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const base64Encode=function(n){const e=stringToByteArray$1(n);return base64.encodeByteArray(e,!0)},base64urlEncodeWithoutPadding=function(n){return base64Encode(n).replace(/\./g,"")},base64Decode=function(n){try{return base64.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function deepCopy(n){return deepExtend(void 0,n)}function deepExtend(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!isValidKey$1(t)||(n[t]=deepExtend(n[t],e[t]));return n}function isValidKey$1(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getGlobal(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const getDefaultsFromGlobal=()=>getGlobal().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},getDefaultsFromCookie=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&base64Decode(n[1]);return e&&JSON.parse(e)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},getDefaultEmulatorHost=n=>{var e,t;return(t=(e=getDefaults())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},getDefaultEmulatorHostnameAndPort=n=>{const e=getDefaultEmulatorHost(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},getDefaultAppConfig=()=>{var n;return(n=getDefaults())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createMockUserToken(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[base64urlEncodeWithoutPadding(JSON.stringify(t)),base64urlEncodeWithoutPadding(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function isMobileCordova(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isReactNative(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function isNodeSdk(){return CONSTANTS.NODE_ADMIN===!0}function isIndexedDBAvailable(){try{return typeof indexedDB=="object"}catch{return!1}}function validateIndexedDBOpenable(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERROR_NAME="FirebaseError";class FirebaseError extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ERROR_NAME,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?replaceTemplate(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new FirebaseError(s,a,i)}}function replaceTemplate(n,e){return n.replace(PATTERN,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const PATTERN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jsonEval(n){return JSON.parse(n)}function stringify(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const decode=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=jsonEval(base64Decode(r[0])||""),t=jsonEval(base64Decode(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},isValidFormat=function(n){const e=decode(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},isAdmin$1=function(n){const e=decode(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function contains(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function safeGet(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function isEmpty(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function map(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function deepEqual(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(isObject(r)&&isObject(o)){if(!deepEqual(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function isObject(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sha1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):h<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const u=(s<<5|s>>>27)+c+l+d+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function errorPrefix(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const stringToByteArray=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,assert(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},stringLength=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(n){return n&&n._delegate?n._delegate:n}class Component{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME$1="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Provider{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Deferred;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(isComponentEager(e))try{this.getOrInitializeService({instanceIdentifier:DEFAULT_ENTRY_NAME$1})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=DEFAULT_ENTRY_NAME$1){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=DEFAULT_ENTRY_NAME$1){return this.instances.has(e)}getOptions(e=DEFAULT_ENTRY_NAME$1){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=DEFAULT_ENTRY_NAME$1){return this.component?this.component.multipleInstances?e:DEFAULT_ENTRY_NAME$1:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function normalizeIdentifierForFactory(n){return n===DEFAULT_ENTRY_NAME$1?void 0:n}function isComponentEager(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Provider(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var LogLevel;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(LogLevel||(LogLevel={}));const levelStringToEnum={debug:LogLevel.DEBUG,verbose:LogLevel.VERBOSE,info:LogLevel.INFO,warn:LogLevel.WARN,error:LogLevel.ERROR,silent:LogLevel.SILENT},defaultLogLevel=LogLevel.INFO,ConsoleMethod={[LogLevel.DEBUG]:"log",[LogLevel.VERBOSE]:"log",[LogLevel.INFO]:"info",[LogLevel.WARN]:"warn",[LogLevel.ERROR]:"error"},defaultLogHandler=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ConsoleMethod[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Logger{constructor(e){this.name=e,this._logLevel=defaultLogLevel,this._logHandler=defaultLogHandler,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?levelStringToEnum[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.DEBUG,...e),this._logHandler(this,LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.VERBOSE,...e),this._logHandler(this,LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.INFO,...e),this._logHandler(this,LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.WARN,...e),this._logHandler(this,LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.ERROR,...e),this._logHandler(this,LogLevel.ERROR,...e)}}const instanceOfAny=(n,e)=>e.some(t=>n instanceof t);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cursorRequestMap=new WeakMap,transactionDoneMap=new WeakMap,transactionStoreNamesMap=new WeakMap,transformCache=new WeakMap,reverseTransformCache=new WeakMap;function promisifyRequest(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(wrap(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&cursorRequestMap.set(t,n)}).catch(()=>{}),reverseTransformCache.set(e,n),e}function cacheDonePromiseForTransaction(n){if(transactionDoneMap.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});transactionDoneMap.set(n,e)}let idbProxyTraps={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return transactionDoneMap.get(n);if(e==="objectStoreNames")return n.objectStoreNames||transactionStoreNamesMap.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wrap(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function replaceTraps(n){idbProxyTraps=n(idbProxyTraps)}function wrapFunction(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(unwrap(this),e,...t);return transactionStoreNamesMap.set(i,e.sort?e.sort():[e]),wrap(i)}:getCursorAdvanceMethods().includes(n)?function(...e){return n.apply(unwrap(this),e),wrap(cursorRequestMap.get(this))}:function(...e){return wrap(n.apply(unwrap(this),e))}}function transformCachableValue(n){return typeof n=="function"?wrapFunction(n):(n instanceof IDBTransaction&&cacheDonePromiseForTransaction(n),instanceOfAny(n,getIdbProxyableTypes())?new Proxy(n,idbProxyTraps):n)}function wrap(n){if(n instanceof IDBRequest)return promisifyRequest(n);if(transformCache.has(n))return transformCache.get(n);const e=transformCachableValue(n);return e!==n&&(transformCache.set(n,e),reverseTransformCache.set(e,n)),e}const unwrap=n=>reverseTransformCache.get(n);function openDB(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=wrap(o);return i&&o.addEventListener("upgradeneeded",l=>{i(wrap(o.result),l.oldVersion,l.newVersion,wrap(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const readMethods=["get","getKey","getAll","getAllKeys","count"],writeMethods=["put","add","delete","clear"],cachedMethods=new Map;function getMethod(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cachedMethods.get(e))return cachedMethods.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=writeMethods.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||readMethods.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return cachedMethods.set(e,r),r}replaceTraps(n=>({...n,get:(e,t,i)=>getMethod(e,t)||n.get(e,t,i),has:(e,t)=>!!getMethod(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(isVersionServiceProvider(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function isVersionServiceProvider(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const name$p="@firebase/app",version$1$1="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logger$1=new Logger("@firebase/app"),name$o="@firebase/app-compat",name$n="@firebase/analytics-compat",name$m="@firebase/analytics",name$l="@firebase/app-check-compat",name$k="@firebase/app-check",name$j="@firebase/auth",name$i="@firebase/auth-compat",name$h="@firebase/database",name$g="@firebase/database-compat",name$f="@firebase/functions",name$e="@firebase/functions-compat",name$d="@firebase/installations",name$c="@firebase/installations-compat",name$b="@firebase/messaging",name$a="@firebase/messaging-compat",name$9="@firebase/performance",name$8="@firebase/performance-compat",name$7="@firebase/remote-config",name$6="@firebase/remote-config-compat",name$5="@firebase/storage",name$4="@firebase/storage-compat",name$3="@firebase/firestore",name$2$1="@firebase/vertexai-preview",name$1$1="@firebase/firestore-compat",name$q="firebase",version$2="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME="[DEFAULT]",PLATFORM_LOG_STRING={[name$p]:"fire-core",[name$o]:"fire-core-compat",[name$m]:"fire-analytics",[name$n]:"fire-analytics-compat",[name$k]:"fire-app-check",[name$l]:"fire-app-check-compat",[name$j]:"fire-auth",[name$i]:"fire-auth-compat",[name$h]:"fire-rtdb",[name$g]:"fire-rtdb-compat",[name$f]:"fire-fn",[name$e]:"fire-fn-compat",[name$d]:"fire-iid",[name$c]:"fire-iid-compat",[name$b]:"fire-fcm",[name$a]:"fire-fcm-compat",[name$9]:"fire-perf",[name$8]:"fire-perf-compat",[name$7]:"fire-rc",[name$6]:"fire-rc-compat",[name$5]:"fire-gcs",[name$4]:"fire-gcs-compat",[name$3]:"fire-fst",[name$1$1]:"fire-fst-compat",[name$2$1]:"fire-vertex","fire-js":"fire-js",[name$q]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _apps=new Map,_serverApps=new Map,_components=new Map;function _addComponent(n,e){try{n.container.addComponent(e)}catch(t){logger$1.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _registerComponent(n){const e=n.name;if(_components.has(e))return logger$1.debug(`There were multiple attempts to register component ${e}.`),!1;_components.set(e,n);for(const t of _apps.values())_addComponent(t,n);for(const t of _serverApps.values())_addComponent(t,n);return!0}function _getProvider(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERRORS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ERROR_FACTORY=new ErrorFactory("app","Firebase",ERRORS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirebaseAppImpl{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ERROR_FACTORY.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SDK_VERSION$1=version$2;function initializeApp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:DEFAULT_ENTRY_NAME,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ERROR_FACTORY.create("bad-app-name",{appName:String(s)});if(t||(t=getDefaultAppConfig()),!t)throw ERROR_FACTORY.create("no-options");const r=_apps.get(s);if(r){if(deepEqual(t,r.options)&&deepEqual(i,r.config))return r;throw ERROR_FACTORY.create("duplicate-app",{appName:s})}const o=new ComponentContainer(s);for(const l of _components.values())o.addComponent(l);const a=new FirebaseAppImpl(t,i,o);return _apps.set(s,a),a}function getApp(n=DEFAULT_ENTRY_NAME){const e=_apps.get(n);if(!e&&n===DEFAULT_ENTRY_NAME&&getDefaultAppConfig())return initializeApp();if(!e)throw ERROR_FACTORY.create("no-app",{appName:n});return e}function registerVersion(n,e,t){var i;let s=(i=PLATFORM_LOG_STRING[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),logger$1.warn(a.join(" "));return}_registerComponent(new Component(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME="firebase-heartbeat-database",DB_VERSION=1,STORE_NAME="firebase-heartbeat-store";let dbPromise=null;function getDbPromise(){return dbPromise||(dbPromise=openDB(DB_NAME,DB_VERSION,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(STORE_NAME)}catch(t){console.warn(t)}}}}).catch(n=>{throw ERROR_FACTORY.create("idb-open",{originalErrorMessage:n.message})})),dbPromise}async function readHeartbeatsFromIndexedDB(n){try{const t=(await getDbPromise()).transaction(STORE_NAME),i=await t.objectStore(STORE_NAME).get(computeKey(n));return await t.done,i}catch(e){if(e instanceof FirebaseError)logger$1.warn(e.message);else{const t=ERROR_FACTORY.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});logger$1.warn(t.message)}}}async function writeHeartbeatsToIndexedDB(n,e){try{const i=(await getDbPromise()).transaction(STORE_NAME,"readwrite");await i.objectStore(STORE_NAME).put(e,computeKey(n)),await i.done}catch(t){if(t instanceof FirebaseError)logger$1.warn(t.message);else{const i=ERROR_FACTORY.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});logger$1.warn(i.message)}}}function computeKey(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MAX_HEADER_BYTES=1024,STORED_HEARTBEAT_RETENTION_MAX_MILLIS=30*24*60*60*1e3;class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=getUTCDateString();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=STORED_HEARTBEAT_RETENTION_MAX_MILLIS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){logger$1.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=getUTCDateString(),{heartbeatsToSend:i,unsentEntries:s}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),r=base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return logger$1.warn(t),""}}}function getUTCDateString(){return new Date().toISOString().substring(0,10)}function extractHeartbeatsForHeader(n,e=MAX_HEADER_BYTES){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),countBytes(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),countBytes(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return isIndexedDBAvailable()?validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await readHeartbeatsFromIndexedDB(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function countBytes(n){return base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerCoreComponents(n){_registerComponent(new Component("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new Component("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(name$p,version$1$1,n),registerVersion(name$p,version$1$1,"esm2017"),registerVersion("fire-js","")}registerCoreComponents("");var name$2="firebase",version$1="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */registerVersion(name$2,version$1,"app");const name$1="@firebase/database",version="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SDK_VERSION="";function setSDKVersion(n){SDK_VERSION=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DOMStorageWrapper{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),stringify(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:jsonEval(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MemoryStorage{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return contains(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const createStoragefor=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DOMStorageWrapper(e)}}catch{}return new MemoryStorage},PersistentStorage=createStoragefor("localStorage"),SessionStorage=createStoragefor("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logClient=new Logger("@firebase/database"),LUIDGenerator=function(){let n=1;return function(){return n++}}(),sha1=function(n){const e=stringToByteArray(n),t=new Sha1;t.update(e);const i=t.digest();return base64.encodeByteArray(i)},buildLogMessage_=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=buildLogMessage_.apply(null,i):typeof i=="object"?e+=stringify(i):e+=i,e+=" "}return e};let logger=null,firstLog_=!0;const enableLogging$1=function(n,e){assert(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(logClient.logLevel=LogLevel.VERBOSE,logger=logClient.log.bind(logClient),e&&SessionStorage.set("logging_enabled",!0)):typeof n=="function"?logger=n:(logger=null,SessionStorage.remove("logging_enabled"))},log=function(...n){if(firstLog_===!0&&(firstLog_=!1,logger===null&&SessionStorage.get("logging_enabled")===!0&&enableLogging$1(!0)),logger){const e=buildLogMessage_.apply(null,n);logger(e)}},logWrapper=function(n){return function(...e){log(n,...e)}},error=function(...n){const e="FIREBASE INTERNAL ERROR: "+buildLogMessage_(...n);logClient.error(e)},fatal=function(...n){const e=`FIREBASE FATAL ERROR: ${buildLogMessage_(...n)}`;throw logClient.error(e),new Error(e)},warn=function(...n){const e="FIREBASE WARNING: "+buildLogMessage_(...n);logClient.warn(e)},warnIfPageIsSecure=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},isInvalidJSONNumber=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},executeWhenDOMReady=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},MIN_NAME="[MIN_NAME]",MAX_NAME="[MAX_NAME]",nameCompare=function(n,e){if(n===e)return 0;if(n===MIN_NAME||e===MAX_NAME)return-1;if(e===MIN_NAME||n===MAX_NAME)return 1;{const t=tryParseInt(n),i=tryParseInt(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},stringCompare=function(n,e){return n===e?0:n<e?-1:1},requireKey=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+stringify(e))},ObjectToUniqueKey=function(n){if(typeof n!="object"||n===null)return stringify(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=stringify(e[i]),t+=":",t+=ObjectToUniqueKey(n[e[i]]);return t+="}",t},splitStringBySize=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function each(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const doubleToIEEE754String=function(n){assert(!isInvalidJSONNumber(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},isChromeExtensionContentScript=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},isWindowsStoreApp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function errorForServerCode(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const INTEGER_REGEXP_=new RegExp("^-?(0*)\\d{1,10}$"),INTEGER_32_MIN=-2147483648,INTEGER_32_MAX=2147483647,tryParseInt=function(n){if(INTEGER_REGEXP_.test(n)){const e=Number(n);if(e>=INTEGER_32_MIN&&e<=INTEGER_32_MAX)return e}return null},exceptionGuard=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw warn("Exception was thrown by user callback.",t),e},Math.floor(0))}},beingCrawled=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},setTimeoutNonBlocking=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AppCheckTokenProvider{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){warn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirebaseAuthTokenProvider{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(log("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',warn(e)}}class EmulatorTokenProvider{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}EmulatorTokenProvider.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PROTOCOL_VERSION="5",VERSION_PARAM="v",TRANSPORT_SESSION_PARAM="s",REFERER_PARAM="r",FORGE_REF="f",FORGE_DOMAIN_RE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LAST_SESSION_PARAM="ls",APPLICATION_ID_PARAM="p",APP_CHECK_TOKEN_PARAM="ac",WEBSOCKET="websocket",LONG_POLLING="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RepoInfo{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=PersistentStorage.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&PersistentStorage.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function repoInfoNeedsQueryParam(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function repoInfoConnectionURL(n,e,t){assert(typeof e=="string","typeof type must == string"),assert(typeof t=="object","typeof params must == object");let i;if(e===WEBSOCKET)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===LONG_POLLING)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);repoInfoNeedsQueryParam(n)&&(t.ns=n.namespace);const s=[];return each(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class StatsCollection{constructor(){this.counters_={}}incrementCounter(e,t=1){contains(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return deepCopy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const collections={},reporters={};function statsManagerGetCollection(n){const e=n.toString();return collections[e]||(collections[e]=new StatsCollection),collections[e]}function statsManagerGetOrCreateReporter(n,e){const t=n.toString();return reporters[t]||(reporters[t]=e()),reporters[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PacketReceiver{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&exceptionGuard(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FIREBASE_LONGPOLL_START_PARAM="start",FIREBASE_LONGPOLL_CLOSE_COMMAND="close",FIREBASE_LONGPOLL_COMMAND_CB_NAME="pLPCommand",FIREBASE_LONGPOLL_DATA_CB_NAME="pRTLPCB",FIREBASE_LONGPOLL_ID_PARAM="id",FIREBASE_LONGPOLL_PW_PARAM="pw",FIREBASE_LONGPOLL_SERIAL_PARAM="ser",FIREBASE_LONGPOLL_CALLBACK_ID_PARAM="cb",FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM="seg",FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET="ts",FIREBASE_LONGPOLL_DATA_PARAM="d",FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM="dframe",MAX_URL_DATA_SIZE=1870,SEG_HEADER_SIZE=30,MAX_PAYLOAD_SIZE=MAX_URL_DATA_SIZE-SEG_HEADER_SIZE,KEEPALIVE_REQUEST_INTERVAL=25e3,LP_CONNECT_TIMEOUT=3e4;class BrowserPollConnection{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=logWrapper(e),this.stats_=statsManagerGetCollection(t),this.urlFn=l=>(this.appCheckToken&&(l[APP_CHECK_TOKEN_PARAM]=this.appCheckToken),repoInfoConnectionURL(t,LONG_POLLING,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new PacketReceiver(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LP_CONNECT_TIMEOUT)),executeWhenDOMReady(()=>{if(this.isClosed_)return;this.scriptTagHolder=new FirebaseIFrameScriptHolder((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===FIREBASE_LONGPOLL_START_PARAM)this.id=a,this.password=l;else if(o===FIREBASE_LONGPOLL_CLOSE_COMMAND)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[FIREBASE_LONGPOLL_START_PARAM]="t",i[FIREBASE_LONGPOLL_SERIAL_PARAM]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM]=this.scriptTagHolder.uniqueCallbackIdentifier),i[VERSION_PARAM]=PROTOCOL_VERSION,this.transportSessionId&&(i[TRANSPORT_SESSION_PARAM]=this.transportSessionId),this.lastSessionId&&(i[LAST_SESSION_PARAM]=this.lastSessionId),this.applicationId&&(i[APPLICATION_ID_PARAM]=this.applicationId),this.appCheckToken&&(i[APP_CHECK_TOKEN_PARAM]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&FORGE_DOMAIN_RE.test(location.hostname)&&(i[REFERER_PARAM]=FORGE_REF);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){BrowserPollConnection.forceAllow_=!0}static forceDisallow(){BrowserPollConnection.forceDisallow_=!0}static isAvailable(){return BrowserPollConnection.forceAllow_?!0:!BrowserPollConnection.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!isChromeExtensionContentScript()&&!isWindowsStoreApp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=stringify(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=base64Encode(t),s=splitStringBySize(i,MAX_PAYLOAD_SIZE);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM]="t",i[FIREBASE_LONGPOLL_ID_PARAM]=e,i[FIREBASE_LONGPOLL_PW_PARAM]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=stringify(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class FirebaseIFrameScriptHolder{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LUIDGenerator(),window[FIREBASE_LONGPOLL_COMMAND_CB_NAME+this.uniqueCallbackIdentifier]=e,window[FIREBASE_LONGPOLL_DATA_CB_NAME+this.uniqueCallbackIdentifier]=t,this.myIFrame=FirebaseIFrameScriptHolder.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){log("frame writing exception"),a.stack&&log(a.stack),log(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||log("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[FIREBASE_LONGPOLL_ID_PARAM]=this.myID,e[FIREBASE_LONGPOLL_PW_PARAM]=this.myPW,e[FIREBASE_LONGPOLL_SERIAL_PARAM]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+SEG_HEADER_SIZE+i.length<=MAX_URL_DATA_SIZE;){const o=this.pendingSegs.shift();i=i+"&"+FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM+s+"="+o.seg+"&"+FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET+s+"="+o.ts+"&"+FIREBASE_LONGPOLL_DATA_PARAM+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(KEEPALIVE_REQUEST_INTERVAL)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{log("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WEBSOCKET_MAX_FRAME_SIZE=16384,WEBSOCKET_KEEPALIVE_INTERVAL=45e3;let WebSocketImpl=null;typeof MozWebSocket!="undefined"?WebSocketImpl=MozWebSocket:typeof WebSocket!="undefined"&&(WebSocketImpl=WebSocket);class WebSocketConnection{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=logWrapper(this.connId),this.stats_=statsManagerGetCollection(t),this.connURL=WebSocketConnection.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[VERSION_PARAM]=PROTOCOL_VERSION,typeof location!="undefined"&&location.hostname&&FORGE_DOMAIN_RE.test(location.hostname)&&(o[REFERER_PARAM]=FORGE_REF),t&&(o[TRANSPORT_SESSION_PARAM]=t),i&&(o[LAST_SESSION_PARAM]=i),s&&(o[APP_CHECK_TOKEN_PARAM]=s),r&&(o[APPLICATION_ID_PARAM]=r),repoInfoConnectionURL(e,WEBSOCKET,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,PersistentStorage.set("previous_websocket_failure",!0);try{let i;isNodeSdk(),this.mySock=new WebSocketImpl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){WebSocketConnection.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&WebSocketImpl!==null&&!WebSocketConnection.forceDisallow_}static previouslyFailed(){return PersistentStorage.isInMemoryStorage||PersistentStorage.get("previous_websocket_failure")===!0}markConnectionHealthy(){PersistentStorage.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=jsonEval(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(assert(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=stringify(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=splitStringBySize(t,WEBSOCKET_MAX_FRAME_SIZE);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}WebSocketConnection.responsesRequiredToBeHealthy=2;WebSocketConnection.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TransportManager{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[BrowserPollConnection,WebSocketConnection]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=WebSocketConnection&&WebSocketConnection.isAvailable();let i=t&&!WebSocketConnection.previouslyFailed();if(e.webSocketOnly&&(t||warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[WebSocketConnection];else{const s=this.transports_=[];for(const r of TransportManager.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);TransportManager.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}TransportManager.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UPGRADE_TIMEOUT=6e4,DELAY_BEFORE_SENDING_EXTRA_REQUESTS=5e3,BYTES_SENT_HEALTHY_OVERRIDE=10*1024,BYTES_RECEIVED_HEALTHY_OVERRIDE=100*1024,MESSAGE_TYPE="t",MESSAGE_DATA="d",CONTROL_SHUTDOWN="s",CONTROL_RESET="r",CONTROL_ERROR="e",CONTROL_PONG="o",SWITCH_ACK="a",END_TRANSMISSION="n",PING="p",SERVER_HELLO="h";class Connection{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=logWrapper("c:"+this.id+":"),this.transportManager_=new TransportManager(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=setTimeoutNonBlocking(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BYTES_RECEIVED_HEALTHY_OVERRIDE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>BYTES_SENT_HEALTHY_OVERRIDE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(MESSAGE_TYPE in e){const t=e[MESSAGE_TYPE];t===SWITCH_ACK?this.upgradeIfSecondaryHealthy_():t===CONTROL_RESET?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===CONTROL_PONG&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=requireKey("t",e),i=requireKey("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:PING,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:SWITCH_ACK,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:END_TRANSMISSION,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=requireKey("t",e),i=requireKey("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=requireKey(MESSAGE_TYPE,e);if(MESSAGE_DATA in e){const i=e[MESSAGE_DATA];if(t===SERVER_HELLO){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===END_TRANSMISSION){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CONTROL_SHUTDOWN?this.onConnectionShutdown_(i):t===CONTROL_RESET?this.onReset_(i):t===CONTROL_ERROR?error("Server Error: "+i):t===CONTROL_PONG?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):error("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),PROTOCOL_VERSION!==i&&warn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),setTimeoutNonBlocking(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UPGRADE_TIMEOUT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):setTimeoutNonBlocking(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:PING,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(PersistentStorage.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ServerActions{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EventEmitter{constructor(e){this.allowedEvents_=e,this.listeners_={},assert(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){assert(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OnlineMonitor extends EventEmitter{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!isMobileCordova()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new OnlineMonitor}getInitialEvent(e){return assert(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MAX_PATH_DEPTH=32,MAX_PATH_LENGTH_BYTES=768;class Path{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function newEmptyPath(){return new Path("")}function pathGetFront(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function pathGetLength(n){return n.pieces_.length-n.pieceNum_}function pathPopFront(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Path(n.pieces_,e)}function pathGetBack(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function pathToUrlEncodedString(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function pathSlice(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function pathParent(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Path(e,0)}function pathChild(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Path)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Path(t,0)}function pathIsEmpty(n){return n.pieceNum_>=n.pieces_.length}function newRelativePath(n,e){const t=pathGetFront(n),i=pathGetFront(e);if(t===null)return e;if(t===i)return newRelativePath(pathPopFront(n),pathPopFront(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function pathEquals(n,e){if(pathGetLength(n)!==pathGetLength(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function pathContains(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(pathGetLength(n)>pathGetLength(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ValidationPath{constructor(e,t){this.errorPrefix_=t,this.parts_=pathSlice(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=stringLength(this.parts_[i]);validationPathCheckValid(this)}}function validationPathPush(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=stringLength(e),validationPathCheckValid(n)}function validationPathPop(n){const e=n.parts_.pop();n.byteLength_-=stringLength(e),n.parts_.length>0&&(n.byteLength_-=1)}function validationPathCheckValid(n){if(n.byteLength_>MAX_PATH_LENGTH_BYTES)throw new Error(n.errorPrefix_+"has a key path longer than "+MAX_PATH_LENGTH_BYTES+" bytes ("+n.byteLength_+").");if(n.parts_.length>MAX_PATH_DEPTH)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+MAX_PATH_DEPTH+") or object contains a cycle "+validationPathToErrorString(n))}function validationPathToErrorString(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VisibilityMonitor extends EventEmitter{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new VisibilityMonitor}getInitialEvent(e){return assert(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RECONNECT_MIN_DELAY=1e3,RECONNECT_MAX_DELAY_DEFAULT=60*5*1e3,RECONNECT_MAX_DELAY_FOR_ADMINS=30*1e3,RECONNECT_DELAY_MULTIPLIER=1.3,RECONNECT_DELAY_RESET_TIMEOUT=3e4,SERVER_KILL_INTERRUPT_REASON="server_kill",INVALID_TOKEN_THRESHOLD=3;class PersistentConnection extends ServerActions{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=PersistentConnection.nextPersistentConnectionId_++,this.log_=logWrapper("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=RECONNECT_MIN_DELAY,this.maxReconnectDelay_=RECONNECT_MAX_DELAY_DEFAULT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");VisibilityMonitor.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&OnlineMonitor.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(stringify(r)),assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Deferred,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),assert(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),assert(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;PersistentConnection.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&contains(e,"w")){const i=safeGet(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||isAdmin$1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=RECONNECT_MAX_DELAY_FOR_ADMINS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=isValidFormat(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),assert(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+stringify(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):error("Unrecognized action received from server: "+stringify(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=RECONNECT_MIN_DELAY,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=RECONNECT_MIN_DELAY,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RECONNECT_DELAY_RESET_TIMEOUT&&(this.reconnectDelay_=RECONNECT_MIN_DELAY),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RECONNECT_DELAY_MULTIPLIER)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+PersistentConnection.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){assert(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?log("getToken() completed but was canceled"):(log("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new Connection(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{warn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(SERVER_KILL_INTERRUPT_REASON)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&warn(h),l())}}}interrupt(e){log("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){log("Resuming connection for reason: "+e),delete this.interruptReasons_[e],isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=RECONNECT_MIN_DELAY,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ObjectToUniqueKey(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new Path(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){log("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=INVALID_TOKEN_THRESHOLD&&(this.reconnectDelay_=RECONNECT_MAX_DELAY_FOR_ADMINS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){log("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=INVALID_TOKEN_THRESHOLD&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+SDK_VERSION.replace(/\./g,"-")]=1,isMobileCordova()?e["framework.cordova"]=1:isReactNative()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=OnlineMonitor.getInstance().currentlyOnline();return isEmpty(this.interruptReasons_)&&e}}PersistentConnection.nextPersistentConnectionId_=0;PersistentConnection.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NamedNode{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new NamedNode(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Index{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new NamedNode(MIN_NAME,e),s=new NamedNode(MIN_NAME,t);return this.compare(i,s)!==0}minPost(){return NamedNode.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __EMPTY_NODE;class KeyIndex extends Index{static get __EMPTY_NODE(){return __EMPTY_NODE}static set __EMPTY_NODE(e){__EMPTY_NODE=e}compare(e,t){return nameCompare(e.name,t.name)}isDefinedOn(e){throw assertionError("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(MAX_NAME,__EMPTY_NODE)}makePost(e,t){return assert(typeof e=="string","KeyIndex indexValue must always be a string."),new NamedNode(e,__EMPTY_NODE)}toString(){return".key"}}const KEY_INDEX=new KeyIndex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SortedMapIterator{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class LLRBNode{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:LLRBNode.RED,this.left=s!=null?s:SortedMap.EMPTY_NODE,this.right=r!=null?r:SortedMap.EMPTY_NODE}copy(e,t,i,s,r){return new LLRBNode(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return SortedMap.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return SortedMap.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}LLRBNode.RED=!0;LLRBNode.BLACK=!1;class LLRBEmptyNode{copy(e,t,i,s,r){return this}insert(e,t,i){return new LLRBNode(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class SortedMap{constructor(e,t=SortedMap.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new SortedMap(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null))}remove(e){return new SortedMap(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new SortedMapIterator(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new SortedMapIterator(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new SortedMapIterator(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new SortedMapIterator(this.root_,null,this.comparator_,!0,e)}}SortedMap.EMPTY_NODE=new LLRBEmptyNode;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NAME_ONLY_COMPARATOR(n,e){return nameCompare(n.name,e.name)}function NAME_COMPARATOR(n,e){return nameCompare(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MAX_NODE$2;function setMaxNode$1(n){MAX_NODE$2=n}const priorityHashText=function(n){return typeof n=="number"?"number:"+doubleToIEEE754String(n):"string:"+n},validatePriorityNode=function(n){if(n.isLeafNode()){const e=n.val();assert(typeof e=="string"||typeof e=="number"||typeof e=="object"&&contains(e,".sv"),"Priority must be a string or number.")}else assert(n===MAX_NODE$2||n.isEmpty(),"priority of unexpected type.");assert(n===MAX_NODE$2||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __childrenNodeConstructor;class LeafNode{constructor(e,t=LeafNode.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,assert(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),validatePriorityNode(this.priorityNode_)}static set __childrenNodeConstructor(e){__childrenNodeConstructor=e}static get __childrenNodeConstructor(){return __childrenNodeConstructor}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new LeafNode(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pathIsEmpty(e)?this:pathGetFront(e)===".priority"?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=pathGetFront(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(assert(i!==".priority"||pathGetLength(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+priorityHashText(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=doubleToIEEE754String(this.value_):e+=this.value_,this.lazyHash_=sha1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===LeafNode.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof LeafNode.__childrenNodeConstructor?-1:(assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=LeafNode.VALUE_TYPE_ORDER.indexOf(t),r=LeafNode.VALUE_TYPE_ORDER.indexOf(i);return assert(s>=0,"Unknown leaf type: "+t),assert(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}LeafNode.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nodeFromJSON$1,MAX_NODE$1;function setNodeFromJSON(n){nodeFromJSON$1=n}function setMaxNode(n){MAX_NODE$1=n}class PriorityIndex extends Index{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?nameCompare(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(MAX_NAME,new LeafNode("[PRIORITY-POST]",MAX_NODE$1))}makePost(e,t){const i=nodeFromJSON$1(e);return new NamedNode(t,new LeafNode("[PRIORITY-POST]",i))}toString(){return".priority"}}const PRIORITY_INDEX=new PriorityIndex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LOG_2=Math.log(2);class Base12Num{constructor(e){const t=r=>parseInt(Math.log(r)/LOG_2,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const buildChildSet=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=n[l],u=t?t(h):h,new LLRBNode(u,h.node,LLRBNode.BLACK,null,null);{const f=parseInt(d/2,10)+l,_=s(l,f),m=s(f+1,c);return h=n[f],u=t?t(h):h,new LLRBNode(u,h.node,LLRBNode.BLACK,_,m)}},r=function(l){let c=null,d=null,h=n.length;const u=function(_,m){const g=h-_,E=h;h-=_;const y=s(g+1,E),C=n[g],v=t?t(C):C;f(new LLRBNode(v,C.node,m,null,y))},f=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),g=Math.pow(2,l.count-(_+1));m?u(g,LLRBNode.BLACK):(u(g,LLRBNode.BLACK),u(g,LLRBNode.RED))}return d},o=new Base12Num(n.length),a=r(o);return new SortedMap(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _defaultIndexMap;const fallbackObject={};class IndexMap{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return assert(fallbackObject&&PRIORITY_INDEX,"ChildrenNode.ts has not been loaded"),_defaultIndexMap=_defaultIndexMap||new IndexMap({".priority":fallbackObject},{".priority":PRIORITY_INDEX}),_defaultIndexMap}get(e){const t=safeGet(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof SortedMap?t:null}hasIndex(e){return contains(this.indexSet_,e.toString())}addIndex(e,t){assert(e!==KEY_INDEX,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(NamedNode.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=buildChildSet(i,e.getCompare()):a=fallbackObject;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new IndexMap(d,c)}addToIndexes(e,t){const i=map(this.indexes_,(s,r)=>{const o=safeGet(this.indexSet_,r);if(assert(o,"Missing index implementation for "+r),s===fallbackObject)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(NamedNode.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),buildChildSet(a,o.getCompare())}else return fallbackObject;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new NamedNode(e.name,a))),l.insert(e,e.node)}});return new IndexMap(i,this.indexSet_)}removeFromIndexes(e,t){const i=map(this.indexes_,s=>{if(s===fallbackObject)return s;{const r=t.get(e.name);return r?s.remove(new NamedNode(e.name,r)):s}});return new IndexMap(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EMPTY_NODE;class ChildrenNode{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&validatePriorityNode(this.priorityNode_),this.children_.isEmpty()&&assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return EMPTY_NODE||(EMPTY_NODE=new ChildrenNode(new SortedMap(NAME_COMPARATOR),null,IndexMap.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||EMPTY_NODE}updatePriority(e){return this.children_.isEmpty()?this:new ChildrenNode(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?EMPTY_NODE:t}}getChild(e){const t=pathGetFront(e);return t===null?this:this.getImmediateChild(t).getChild(pathPopFront(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(assert(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new NamedNode(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?EMPTY_NODE:this.priorityNode_;return new ChildrenNode(s,o,r)}}updateChild(e,t){const i=pathGetFront(e);if(i===null)return t;{assert(pathGetFront(e)!==".priority"||pathGetLength(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(pathPopFront(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(PRIORITY_INDEX,(o,a)=>{t[o]=a.val(e),i++,r&&ChildrenNode.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+priorityHashText(this.getPriority().val())+":"),this.forEachChild(PRIORITY_INDEX,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":sha1(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new NamedNode(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new NamedNode(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new NamedNode(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,NamedNode.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,NamedNode.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===MAX_NODE?-1:0}withIndex(e){if(e===KEY_INDEX||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ChildrenNode(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===KEY_INDEX||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(PRIORITY_INDEX),s=t.getIterator(PRIORITY_INDEX);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===KEY_INDEX?null:this.indexMap_.get(e.toString())}}ChildrenNode.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MaxNode extends ChildrenNode{constructor(){super(new SortedMap(NAME_COMPARATOR),ChildrenNode.EMPTY_NODE,IndexMap.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ChildrenNode.EMPTY_NODE}isEmpty(){return!1}}const MAX_NODE=new MaxNode;Object.defineProperties(NamedNode,{MIN:{value:new NamedNode(MIN_NAME,ChildrenNode.EMPTY_NODE)},MAX:{value:new NamedNode(MAX_NAME,MAX_NODE)}});KeyIndex.__EMPTY_NODE=ChildrenNode.EMPTY_NODE;LeafNode.__childrenNodeConstructor=ChildrenNode;setMaxNode$1(MAX_NODE);setMaxNode(MAX_NODE);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const USE_HINZE=!0;function nodeFromJSON(n,e=null){if(n===null)return ChildrenNode.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),assert(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new LeafNode(t,nodeFromJSON(e))}if(!(n instanceof Array)&&USE_HINZE){const t=[];let i=!1;if(each(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=nodeFromJSON(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new NamedNode(o,l)))}}),t.length===0)return ChildrenNode.EMPTY_NODE;const r=buildChildSet(t,NAME_ONLY_COMPARATOR,o=>o.name,NAME_COMPARATOR);if(i){const o=buildChildSet(t,PRIORITY_INDEX.getCompare());return new ChildrenNode(r,nodeFromJSON(e),new IndexMap({".priority":o},{".priority":PRIORITY_INDEX}))}else return new ChildrenNode(r,nodeFromJSON(e),IndexMap.Default)}else{let t=ChildrenNode.EMPTY_NODE;return each(n,(i,s)=>{if(contains(n,i)&&i.substring(0,1)!=="."){const r=nodeFromJSON(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(nodeFromJSON(e))}}setNodeFromJSON(nodeFromJSON);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PathIndex extends Index{constructor(e){super(),this.indexPath_=e,assert(!pathIsEmpty(e)&&pathGetFront(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?nameCompare(e.name,t.name):r}makePost(e,t){const i=nodeFromJSON(e),s=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,i);return new NamedNode(t,s)}maxPost(){const e=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,MAX_NODE);return new NamedNode(MAX_NAME,e)}toString(){return pathSlice(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ValueIndex extends Index{compare(e,t){const i=e.node.compareTo(t.node);return i===0?nameCompare(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return NamedNode.MIN}maxPost(){return NamedNode.MAX}makePost(e,t){const i=nodeFromJSON(e);return new NamedNode(t,i)}toString(){return".value"}}const VALUE_INDEX=new ValueIndex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function changeValue(n){return{type:"value",snapshotNode:n}}function changeChildAdded(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function changeChildRemoved(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function changeChildChanged(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function changeChildMoved(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IndexedFilter{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){assert(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(changeChildRemoved(t,a)):assert(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(changeChildAdded(t,i)):o.trackChildChange(changeChildChanged(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(PRIORITY_INDEX,(s,r)=>{t.hasChild(s)||i.trackChildChange(changeChildRemoved(s,r))}),t.isLeafNode()||t.forEachChild(PRIORITY_INDEX,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(changeChildChanged(s,r,o))}else i.trackChildChange(changeChildAdded(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ChildrenNode.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RangedFilter{constructor(e){this.indexedFilter_=new IndexedFilter(e.getIndex()),this.index_=e.getIndex(),this.startPost_=RangedFilter.getStartPost_(e),this.endPost_=RangedFilter.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new NamedNode(t,i))||(i=ChildrenNode.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=ChildrenNode.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ChildrenNode.EMPTY_NODE);const r=this;return t.forEachChild(PRIORITY_INDEX,(o,a)=>{r.matches(new NamedNode(o,a))||(s=s.updateImmediateChild(o,ChildrenNode.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LimitedFilter{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new RangedFilter(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new NamedNode(t,i))||(i=ChildrenNode.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=ChildrenNode.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ChildrenNode.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ChildrenNode.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,ChildrenNode.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,f)=>h(f,u)}else o=this.index_.getCompare();const a=e;assert(a.numChildren()===this.limit_,"");const l=new NamedNode(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(d&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(changeChildChanged(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(changeChildRemoved(t,h));const m=a.updateImmediateChild(t,ChildrenNode.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(changeChildAdded(u.name,u.node)),m.updateImmediateChild(u.name,u.node)):m}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(changeChildRemoved(c.name,c.node)),r.trackChildChange(changeChildAdded(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,ChildrenNode.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QueryParams{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=PRIORITY_INDEX}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:MIN_NAME}hasEnd(){return this.endSet_}getIndexEndValue(){return assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:MAX_NAME}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return assert(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===PRIORITY_INDEX}copy(){const e=new QueryParams;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function queryParamsGetNodeFilter(n){return n.loadsAllData()?new IndexedFilter(n.getIndex()):n.hasLimit()?new LimitedFilter(n):new RangedFilter(n)}function queryParamsToRestQueryStringParameters(n){const e={};if(n.isDefault())return e;let t;if(n.index_===PRIORITY_INDEX?t="$priority":n.index_===VALUE_INDEX?t="$value":n.index_===KEY_INDEX?t="$key":(assert(n.index_ instanceof PathIndex,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=stringify(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=stringify(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+stringify(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=stringify(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+stringify(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function queryParamsGetQueryObject(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==PRIORITY_INDEX&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ReadonlyRestClient extends ServerActions{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=logWrapper("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(assert(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ReadonlyRestClient.getListenId_(e,i),a={};this.listens_[o]=a;const l=queryParamsToRestQueryStringParameters(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),safeGet(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=ReadonlyRestClient.getListenId_(e,t);delete this.listens_[i]}get(e){const t=queryParamsToRestQueryStringParameters(e._queryParams),i=e._path.toString(),s=new Deferred;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+querystring(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=jsonEval(a.responseText)}catch{warn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&warn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SnapshotHolder{constructor(){this.rootNode_=ChildrenNode.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newSparseSnapshotTree(){return{value:null,children:new Map}}function sparseSnapshotTreeRemember(n,e,t){if(pathIsEmpty(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=pathGetFront(e);n.children.has(i)||n.children.set(i,newSparseSnapshotTree());const s=n.children.get(i);e=pathPopFront(e),sparseSnapshotTreeRemember(s,e,t)}}function sparseSnapshotTreeForEachTree(n,e,t){n.value!==null?t(e,n.value):sparseSnapshotTreeForEachChild(n,(i,s)=>{const r=new Path(e.toString()+"/"+i);sparseSnapshotTreeForEachTree(s,r,t)})}function sparseSnapshotTreeForEachChild(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class StatsListener{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&each(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FIRST_STATS_MIN_TIME=10*1e3,FIRST_STATS_MAX_TIME=30*1e3,REPORT_STATS_INTERVAL=5*60*1e3;class StatsReporter{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new StatsListener(e);const i=FIRST_STATS_MIN_TIME+(FIRST_STATS_MAX_TIME-FIRST_STATS_MIN_TIME)*Math.random();setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;each(e,(s,r)=>{r>0&&contains(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(Math.random()*2*REPORT_STATS_INTERVAL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var OperationType;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(OperationType||(OperationType={}));function newOperationSourceUser(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function newOperationSourceServer(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function newOperationSourceServerTaggedQuery(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AckUserWrite{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=OperationType.ACK_USER_WRITE,this.source=newOperationSourceUser()}operationForChild(e){if(pathIsEmpty(this.path)){if(this.affectedTree.value!=null)return assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Path(e));return new AckUserWrite(newEmptyPath(),t,this.revert)}}else return assert(pathGetFront(this.path)===e,"operationForChild called for unrelated child."),new AckUserWrite(pathPopFront(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ListenComplete{constructor(e,t){this.source=e,this.path=t,this.type=OperationType.LISTEN_COMPLETE}operationForChild(e){return pathIsEmpty(this.path)?new ListenComplete(this.source,newEmptyPath()):new ListenComplete(this.source,pathPopFront(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Overwrite{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=OperationType.OVERWRITE}operationForChild(e){return pathIsEmpty(this.path)?new Overwrite(this.source,newEmptyPath(),this.snap.getImmediateChild(e)):new Overwrite(this.source,pathPopFront(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Merge{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=OperationType.MERGE}operationForChild(e){if(pathIsEmpty(this.path)){const t=this.children.subtree(new Path(e));return t.isEmpty()?null:t.value?new Overwrite(this.source,newEmptyPath(),t.value):new Merge(this.source,newEmptyPath(),t)}else return assert(pathGetFront(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Merge(this.source,pathPopFront(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CacheNode{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pathIsEmpty(e))return this.isFullyInitialized()&&!this.filtered_;const t=pathGetFront(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EventGenerator{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eventGeneratorGenerateEventsForChanges(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(changeChildMoved(o.childName,o.snapshotNode))}),eventGeneratorGenerateEventsForType(n,s,"child_removed",e,i,t),eventGeneratorGenerateEventsForType(n,s,"child_added",e,i,t),eventGeneratorGenerateEventsForType(n,s,"child_moved",r,i,t),eventGeneratorGenerateEventsForType(n,s,"child_changed",e,i,t),eventGeneratorGenerateEventsForType(n,s,"value",e,i,t),s}function eventGeneratorGenerateEventsForType(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>eventGeneratorCompareChanges(n,a,l)),o.forEach(a=>{const l=eventGeneratorMaterializeSingleChange(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function eventGeneratorMaterializeSingleChange(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function eventGeneratorCompareChanges(n,e,t){if(e.childName==null||t.childName==null)throw assertionError("Should only compare child_ events.");const i=new NamedNode(e.childName,e.snapshotNode),s=new NamedNode(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newViewCache(n,e){return{eventCache:n,serverCache:e}}function viewCacheUpdateEventSnap(n,e,t,i){return newViewCache(new CacheNode(e,t,i),n.serverCache)}function viewCacheUpdateServerSnap(n,e,t,i){return newViewCache(n.eventCache,new CacheNode(e,t,i))}function viewCacheGetCompleteEventSnap(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function viewCacheGetCompleteServerSnap(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let emptyChildrenSingleton;const EmptyChildren=()=>(emptyChildrenSingleton||(emptyChildrenSingleton=new SortedMap(stringCompare)),emptyChildrenSingleton);class ImmutableTree{constructor(e,t=EmptyChildren()){this.value=e,this.children=t}static fromObject(e){let t=new ImmutableTree(null);return each(e,(i,s)=>{t=t.set(new Path(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:newEmptyPath(),value:this.value};if(pathIsEmpty(e))return null;{const i=pathGetFront(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(pathPopFront(e),t);return r!=null?{path:pathChild(new Path(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pathIsEmpty(e))return this;{const t=pathGetFront(e),i=this.children.get(t);return i!==null?i.subtree(pathPopFront(e)):new ImmutableTree(null)}}set(e,t){if(pathIsEmpty(e))return new ImmutableTree(t,this.children);{const i=pathGetFront(e),r=(this.children.get(i)||new ImmutableTree(null)).set(pathPopFront(e),t),o=this.children.insert(i,r);return new ImmutableTree(this.value,o)}}remove(e){if(pathIsEmpty(e))return this.children.isEmpty()?new ImmutableTree(null):new ImmutableTree(null,this.children);{const t=pathGetFront(e),i=this.children.get(t);if(i){const s=i.remove(pathPopFront(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new ImmutableTree(null):new ImmutableTree(this.value,r)}else return this}}get(e){if(pathIsEmpty(e))return this.value;{const t=pathGetFront(e),i=this.children.get(t);return i?i.get(pathPopFront(e)):null}}setTree(e,t){if(pathIsEmpty(e))return t;{const i=pathGetFront(e),r=(this.children.get(i)||new ImmutableTree(null)).setTree(pathPopFront(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ImmutableTree(this.value,o)}}fold(e){return this.fold_(newEmptyPath(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(pathChild(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,newEmptyPath(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(pathIsEmpty(e))return null;{const r=pathGetFront(e),o=this.children.get(r);return o?o.findOnPath_(pathPopFront(e),pathChild(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,newEmptyPath(),t)}foreachOnPath_(e,t,i){if(pathIsEmpty(e))return this;{this.value&&i(t,this.value);const s=pathGetFront(e),r=this.children.get(s);return r?r.foreachOnPath_(pathPopFront(e),pathChild(t,s),i):new ImmutableTree(null)}}foreach(e){this.foreach_(newEmptyPath(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(pathChild(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CompoundWrite{constructor(e){this.writeTree_=e}static empty(){return new CompoundWrite(new ImmutableTree(null))}}function compoundWriteAddWrite(n,e,t){if(pathIsEmpty(e))return new CompoundWrite(new ImmutableTree(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=newRelativePath(s,e);return r=r.updateChild(o,t),new CompoundWrite(n.writeTree_.set(s,r))}else{const s=new ImmutableTree(t),r=n.writeTree_.setTree(e,s);return new CompoundWrite(r)}}}function compoundWriteAddWrites(n,e,t){let i=n;return each(t,(s,r)=>{i=compoundWriteAddWrite(i,pathChild(e,s),r)}),i}function compoundWriteRemoveWrite(n,e){if(pathIsEmpty(e))return CompoundWrite.empty();{const t=n.writeTree_.setTree(e,new ImmutableTree(null));return new CompoundWrite(t)}}function compoundWriteHasCompleteWrite(n,e){return compoundWriteGetCompleteNode(n,e)!=null}function compoundWriteGetCompleteNode(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(newRelativePath(t.path,e)):null}function compoundWriteGetCompleteChildren(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(PRIORITY_INDEX,(i,s)=>{e.push(new NamedNode(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new NamedNode(i,s.value))}),e}function compoundWriteChildCompoundWrite(n,e){if(pathIsEmpty(e))return n;{const t=compoundWriteGetCompleteNode(n,e);return t!=null?new CompoundWrite(new ImmutableTree(t)):new CompoundWrite(n.writeTree_.subtree(e))}}function compoundWriteIsEmpty(n){return n.writeTree_.isEmpty()}function compoundWriteApply(n,e){return applySubtreeWrite(newEmptyPath(),n.writeTree_,e)}function applySubtreeWrite(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(assert(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=applySubtreeWrite(pathChild(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(pathChild(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function writeTreeChildWrites(n,e){return newWriteTreeRef(e,n)}function writeTreeAddOverwrite(n,e,t,i,s){assert(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=compoundWriteAddWrite(n.visibleWrites,e,t)),n.lastWriteId=i}function writeTreeGetWrite(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function writeTreeRemoveWrite(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);assert(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&writeTreeRecordContainsPath_(a,i.path)?s=!1:pathContains(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return writeTreeResetTree_(n),!0;if(i.snap)n.visibleWrites=compoundWriteRemoveWrite(n.visibleWrites,i.path);else{const a=i.children;each(a,l=>{n.visibleWrites=compoundWriteRemoveWrite(n.visibleWrites,pathChild(i.path,l))})}return!0}else return!1}function writeTreeRecordContainsPath_(n,e){if(n.snap)return pathContains(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pathContains(pathChild(n.path,t),e))return!0;return!1}function writeTreeResetTree_(n){n.visibleWrites=writeTreeLayerTree_(n.allWrites,writeTreeDefaultFilter_,newEmptyPath()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function writeTreeDefaultFilter_(n){return n.visible}function writeTreeLayerTree_(n,e,t){let i=CompoundWrite.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)pathContains(t,o)?(a=newRelativePath(t,o),i=compoundWriteAddWrite(i,a,r.snap)):pathContains(o,t)&&(a=newRelativePath(o,t),i=compoundWriteAddWrite(i,newEmptyPath(),r.snap.getChild(a)));else if(r.children){if(pathContains(t,o))a=newRelativePath(t,o),i=compoundWriteAddWrites(i,a,r.children);else if(pathContains(o,t))if(a=newRelativePath(o,t),pathIsEmpty(a))i=compoundWriteAddWrites(i,newEmptyPath(),r.children);else{const l=safeGet(r.children,pathGetFront(a));if(l){const c=l.getChild(pathPopFront(a));i=compoundWriteAddWrite(i,newEmptyPath(),c)}}}else throw assertionError("WriteRecord should have .snap or .children")}}return i}function writeTreeCalcCompleteEventCache(n,e,t,i,s){if(!i&&!s){const r=compoundWriteGetCompleteNode(n.visibleWrites,e);if(r!=null)return r;{const o=compoundWriteChildCompoundWrite(n.visibleWrites,e);if(compoundWriteIsEmpty(o))return t;if(t==null&&!compoundWriteHasCompleteWrite(o,newEmptyPath()))return null;{const a=t||ChildrenNode.EMPTY_NODE;return compoundWriteApply(o,a)}}}else{const r=compoundWriteChildCompoundWrite(n.visibleWrites,e);if(!s&&compoundWriteIsEmpty(r))return t;if(!s&&t==null&&!compoundWriteHasCompleteWrite(r,newEmptyPath()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(pathContains(c.path,e)||pathContains(e,c.path))},a=writeTreeLayerTree_(n.allWrites,o,e),l=t||ChildrenNode.EMPTY_NODE;return compoundWriteApply(a,l)}}}function writeTreeCalcCompleteEventChildren(n,e,t){let i=ChildrenNode.EMPTY_NODE;const s=compoundWriteGetCompleteNode(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(PRIORITY_INDEX,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=compoundWriteChildCompoundWrite(n.visibleWrites,e);return t.forEachChild(PRIORITY_INDEX,(o,a)=>{const l=compoundWriteApply(compoundWriteChildCompoundWrite(r,new Path(o)),a);i=i.updateImmediateChild(o,l)}),compoundWriteGetCompleteChildren(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=compoundWriteChildCompoundWrite(n.visibleWrites,e);return compoundWriteGetCompleteChildren(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function writeTreeCalcEventCacheAfterServerOverwrite(n,e,t,i,s){assert(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=pathChild(e,t);if(compoundWriteHasCompleteWrite(n.visibleWrites,r))return null;{const o=compoundWriteChildCompoundWrite(n.visibleWrites,r);return compoundWriteIsEmpty(o)?s.getChild(t):compoundWriteApply(o,s.getChild(t))}}function writeTreeCalcCompleteChild(n,e,t,i){const s=pathChild(e,t),r=compoundWriteGetCompleteNode(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=compoundWriteChildCompoundWrite(n.visibleWrites,s);return compoundWriteApply(o,i.getNode().getImmediateChild(t))}else return null}function writeTreeShadowingWrite(n,e){return compoundWriteGetCompleteNode(n.visibleWrites,e)}function writeTreeCalcIndexedSlice(n,e,t,i,s,r,o){let a;const l=compoundWriteChildCompoundWrite(n.visibleWrites,e),c=compoundWriteGetCompleteNode(l,newEmptyPath());if(c!=null)a=c;else if(t!=null)a=compoundWriteApply(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=u.getNext();for(;f&&d.length<s;)h(f,i)!==0&&d.push(f),f=u.getNext();return d}else return[]}function newWriteTree(){return{visibleWrites:CompoundWrite.empty(),allWrites:[],lastWriteId:-1}}function writeTreeRefCalcCompleteEventCache(n,e,t,i){return writeTreeCalcCompleteEventCache(n.writeTree,n.treePath,e,t,i)}function writeTreeRefCalcCompleteEventChildren(n,e){return writeTreeCalcCompleteEventChildren(n.writeTree,n.treePath,e)}function writeTreeRefCalcEventCacheAfterServerOverwrite(n,e,t,i){return writeTreeCalcEventCacheAfterServerOverwrite(n.writeTree,n.treePath,e,t,i)}function writeTreeRefShadowingWrite(n,e){return writeTreeShadowingWrite(n.writeTree,pathChild(n.treePath,e))}function writeTreeRefCalcIndexedSlice(n,e,t,i,s,r){return writeTreeCalcIndexedSlice(n.writeTree,n.treePath,e,t,i,s,r)}function writeTreeRefCalcCompleteChild(n,e,t){return writeTreeCalcCompleteChild(n.writeTree,n.treePath,e,t)}function writeTreeRefChild(n,e){return newWriteTreeRef(pathChild(n.treePath,e),n.writeTree)}function newWriteTreeRef(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ChildChangeAccumulator{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;assert(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),assert(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,changeChildChanged(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,changeChildRemoved(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,changeChildAdded(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,changeChildChanged(i,e.snapshotNode,s.oldSnap));else throw assertionError("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NoCompleteChildSource_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const NO_COMPLETE_CHILD_SOURCE=new NoCompleteChildSource_;class WriteTreeCompleteChildSource{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new CacheNode(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return writeTreeRefCalcCompleteChild(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:viewCacheGetCompleteServerSnap(this.viewCache_),r=writeTreeRefCalcIndexedSlice(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newViewProcessor(n){return{filter:n}}function viewProcessorAssertIndexed(n,e){assert(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),assert(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function viewProcessorApplyOperation(n,e,t,i,s){const r=new ChildChangeAccumulator;let o,a;if(t.type===OperationType.OVERWRITE){const c=t;c.source.fromUser?o=viewProcessorApplyUserOverwrite(n,e,c.path,c.snap,i,s,r):(assert(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pathIsEmpty(c.path),o=viewProcessorApplyServerOverwrite(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===OperationType.MERGE){const c=t;c.source.fromUser?o=viewProcessorApplyUserMerge(n,e,c.path,c.children,i,s,r):(assert(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=viewProcessorApplyServerMerge(n,e,c.path,c.children,i,s,a,r))}else if(t.type===OperationType.ACK_USER_WRITE){const c=t;c.revert?o=viewProcessorRevertUserWrite(n,e,c.path,i,s,r):o=viewProcessorAckUserWrite(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===OperationType.LISTEN_COMPLETE)o=viewProcessorListenComplete(n,e,t.path,i,r);else throw assertionError("Unknown operation type: "+t.type);const l=r.getChanges();return viewProcessorMaybeAddValueEvent(e,o,l),{viewCache:o,changes:l}}function viewProcessorMaybeAddValueEvent(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=viewCacheGetCompleteEventSnap(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(changeValue(viewCacheGetCompleteEventSnap(e)))}}function viewProcessorGenerateEventCacheAfterServerEvent(n,e,t,i,s,r){const o=e.eventCache;if(writeTreeRefShadowingWrite(i,t)!=null)return e;{let a,l;if(pathIsEmpty(t))if(assert(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=viewCacheGetCompleteServerSnap(e),d=c instanceof ChildrenNode?c:ChildrenNode.EMPTY_NODE,h=writeTreeRefCalcCompleteEventChildren(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=writeTreeRefCalcCompleteEventCache(i,viewCacheGetCompleteServerSnap(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=pathGetFront(t);if(c===".priority"){assert(pathGetLength(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=writeTreeRefCalcEventCacheAfterServerOverwrite(i,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=pathPopFront(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=writeTreeRefCalcEventCacheAfterServerOverwrite(i,t,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=writeTreeRefCalcCompleteChild(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,s,r):a=o.getNode()}}return viewCacheUpdateEventSnap(e,a,o.isFullyInitialized()||pathIsEmpty(t),n.filter.filtersNodes())}}function viewProcessorApplyServerOverwrite(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(pathIsEmpty(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),f,null)}else{const f=pathGetFront(t);if(!l.isCompleteForPath(t)&&pathGetLength(t)>1)return e;const _=pathPopFront(t),g=l.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?c=d.updatePriority(l.getNode(),g):c=d.updateChild(l.getNode(),f,g,_,NO_COMPLETE_CHILD_SOURCE,null)}const h=viewCacheUpdateServerSnap(e,c,l.isFullyInitialized()||pathIsEmpty(t),d.filtersNodes()),u=new WriteTreeCompleteChildSource(s,h,r);return viewProcessorGenerateEventCacheAfterServerEvent(n,h,t,s,u,a)}function viewProcessorApplyUserOverwrite(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new WriteTreeCompleteChildSource(s,e,r);if(pathIsEmpty(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=viewCacheUpdateEventSnap(e,c,!0,n.filter.filtersNodes());else{const h=pathGetFront(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=viewCacheUpdateEventSnap(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=pathPopFront(t),f=a.getNode().getImmediateChild(h);let _;if(pathIsEmpty(u))_=i;else{const m=d.getCompleteChild(h);m!=null?pathGetBack(u)===".priority"&&m.getChild(pathParent(u)).isEmpty()?_=m:_=m.updateChild(u,i):_=ChildrenNode.EMPTY_NODE}if(f.equals(_))l=e;else{const m=n.filter.updateChild(a.getNode(),h,_,u,d,o);l=viewCacheUpdateEventSnap(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function viewProcessorCacheHasChild(n,e){return n.eventCache.isCompleteForChild(e)}function viewProcessorApplyUserMerge(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=pathChild(t,l);viewProcessorCacheHasChild(e,pathGetFront(d))&&(a=viewProcessorApplyUserOverwrite(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=pathChild(t,l);viewProcessorCacheHasChild(e,pathGetFront(d))||(a=viewProcessorApplyUserOverwrite(n,a,d,c,s,r,o))}),a}function viewProcessorApplyMerge(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function viewProcessorApplyServerMerge(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pathIsEmpty(t)?c=i:c=new ImmutableTree(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=viewProcessorApplyMerge(n,f,u);l=viewProcessorApplyServerOverwrite(n,l,new Path(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,u)=>{const f=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),m=viewProcessorApplyMerge(n,_,u);l=viewProcessorApplyServerOverwrite(n,l,new Path(h),m,s,r,o,a)}}),l}function viewProcessorAckUserWrite(n,e,t,i,s,r,o){if(writeTreeRefShadowingWrite(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(pathIsEmpty(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return viewProcessorApplyServerOverwrite(n,e,t,l.getNode().getChild(t),s,r,a,o);if(pathIsEmpty(t)){let c=new ImmutableTree(null);return l.getNode().forEachChild(KEY_INDEX,(d,h)=>{c=c.set(new Path(d),h)}),viewProcessorApplyServerMerge(n,e,t,c,s,r,a,o)}else return e}else{let c=new ImmutableTree(null);return i.foreach((d,h)=>{const u=pathChild(t,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),viewProcessorApplyServerMerge(n,e,t,c,s,r,a,o)}}function viewProcessorListenComplete(n,e,t,i,s){const r=e.serverCache,o=viewCacheUpdateServerSnap(e,r.getNode(),r.isFullyInitialized()||pathIsEmpty(t),r.isFiltered());return viewProcessorGenerateEventCacheAfterServerEvent(n,o,t,i,NO_COMPLETE_CHILD_SOURCE,s)}function viewProcessorRevertUserWrite(n,e,t,i,s,r){let o;if(writeTreeRefShadowingWrite(i,t)!=null)return e;{const a=new WriteTreeCompleteChildSource(i,e,s),l=e.eventCache.getNode();let c;if(pathIsEmpty(t)||pathGetFront(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=writeTreeRefCalcCompleteEventCache(i,viewCacheGetCompleteServerSnap(e));else{const h=e.serverCache.getNode();assert(h instanceof ChildrenNode,"serverChildren would be complete if leaf node"),d=writeTreeRefCalcCompleteEventChildren(i,h)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=pathGetFront(t);let h=writeTreeRefCalcCompleteChild(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,pathPopFront(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,ChildrenNode.EMPTY_NODE,pathPopFront(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=writeTreeRefCalcCompleteEventCache(i,viewCacheGetCompleteServerSnap(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||writeTreeRefShadowingWrite(i,newEmptyPath())!=null,viewCacheUpdateEventSnap(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class View{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new IndexedFilter(i.getIndex()),r=queryParamsGetNodeFilter(i);this.processor_=newViewProcessor(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(ChildrenNode.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(ChildrenNode.EMPTY_NODE,a.getNode(),null),d=new CacheNode(l,o.isFullyInitialized(),s.filtersNodes()),h=new CacheNode(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=newViewCache(h,d),this.eventGenerator_=new EventGenerator(this.query_)}get query(){return this.query_}}function viewGetServerCache(n){return n.viewCache_.serverCache.getNode()}function viewGetCompleteServerCache(n,e){const t=viewCacheGetCompleteServerSnap(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!pathIsEmpty(e)&&!t.getImmediateChild(pathGetFront(e)).isEmpty())?t.getChild(e):null}function viewIsEmpty(n){return n.eventRegistrations_.length===0}function viewAddEventRegistration(n,e){n.eventRegistrations_.push(e)}function viewRemoveEventRegistration(n,e,t){const i=[];if(t){assert(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function viewApplyOperation(n,e,t,i){e.type===OperationType.MERGE&&e.source.queryId!==null&&(assert(viewCacheGetCompleteServerSnap(n.viewCache_),"We should always have a full cache before handling merges"),assert(viewCacheGetCompleteEventSnap(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=viewProcessorApplyOperation(n.processor_,s,e,t,i);return viewProcessorAssertIndexed(n.processor_,r.viewCache),assert(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,viewGenerateEventsForChanges_(n,r.changes,r.viewCache.eventCache.getNode(),null)}function viewGetInitialEvents(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(PRIORITY_INDEX,(r,o)=>{i.push(changeChildAdded(r,o))}),t.isFullyInitialized()&&i.push(changeValue(t.getNode())),viewGenerateEventsForChanges_(n,i,t.getNode(),e)}function viewGenerateEventsForChanges_(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return eventGeneratorGenerateEventsForChanges(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let referenceConstructor$1;class SyncPoint{constructor(){this.views=new Map}}function syncPointSetReferenceConstructor(n){assert(!referenceConstructor$1,"__referenceConstructor has already been defined"),referenceConstructor$1=n}function syncPointGetReferenceConstructor(){return assert(referenceConstructor$1,"Reference.ts has not been loaded"),referenceConstructor$1}function syncPointIsEmpty(n){return n.views.size===0}function syncPointApplyOperation(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return assert(r!=null,"SyncTree gave us an op for an invalid query."),viewApplyOperation(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(viewApplyOperation(o,e,t,i));return r}}function syncPointGetView(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=writeTreeRefCalcCompleteEventCache(t,s?i:null),l=!1;a?l=!0:i instanceof ChildrenNode?(a=writeTreeRefCalcCompleteEventChildren(t,i),l=!1):(a=ChildrenNode.EMPTY_NODE,l=!1);const c=newViewCache(new CacheNode(a,l,!1),new CacheNode(i,s,!1));return new View(e,c)}return o}function syncPointAddEventRegistration(n,e,t,i,s,r){const o=syncPointGetView(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),viewAddEventRegistration(o,t),viewGetInitialEvents(o,t)}function syncPointRemoveEventRegistration(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=syncPointHasCompleteView(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(viewRemoveEventRegistration(c,t,i)),viewIsEmpty(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(viewRemoveEventRegistration(l,t,i)),viewIsEmpty(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!syncPointHasCompleteView(n)&&r.push(new(syncPointGetReferenceConstructor())(e._repo,e._path)),{removed:r,events:o}}function syncPointGetQueryViews(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function syncPointGetCompleteServerCache(n,e){let t=null;for(const i of n.views.values())t=t||viewGetCompleteServerCache(i,e);return t}function syncPointViewForQuery(n,e){if(e._queryParams.loadsAllData())return syncPointGetCompleteView(n);{const i=e._queryIdentifier;return n.views.get(i)}}function syncPointViewExistsForQuery(n,e){return syncPointViewForQuery(n,e)!=null}function syncPointHasCompleteView(n){return syncPointGetCompleteView(n)!=null}function syncPointGetCompleteView(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let referenceConstructor;function syncTreeSetReferenceConstructor(n){assert(!referenceConstructor,"__referenceConstructor has already been defined"),referenceConstructor=n}function syncTreeGetReferenceConstructor(){return assert(referenceConstructor,"Reference.ts has not been loaded"),referenceConstructor}let syncTreeNextQueryTag_=1;class SyncTree{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ImmutableTree(null),this.pendingWriteTree_=newWriteTree(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function syncTreeApplyUserOverwrite(n,e,t,i,s){return writeTreeAddOverwrite(n.pendingWriteTree_,e,t,i,s),s?syncTreeApplyOperationToSyncPoints_(n,new Overwrite(newOperationSourceUser(),e,t)):[]}function syncTreeAckUserWrite(n,e,t=!1){const i=writeTreeGetWrite(n.pendingWriteTree_,e);if(writeTreeRemoveWrite(n.pendingWriteTree_,e)){let r=new ImmutableTree(null);return i.snap!=null?r=r.set(newEmptyPath(),!0):each(i.children,o=>{r=r.set(new Path(o),!0)}),syncTreeApplyOperationToSyncPoints_(n,new AckUserWrite(i.path,r,t))}else return[]}function syncTreeApplyServerOverwrite(n,e,t){return syncTreeApplyOperationToSyncPoints_(n,new Overwrite(newOperationSourceServer(),e,t))}function syncTreeApplyServerMerge(n,e,t){const i=ImmutableTree.fromObject(t);return syncTreeApplyOperationToSyncPoints_(n,new Merge(newOperationSourceServer(),e,i))}function syncTreeApplyListenComplete(n,e){return syncTreeApplyOperationToSyncPoints_(n,new ListenComplete(newOperationSourceServer(),e))}function syncTreeApplyTaggedListenComplete(n,e,t){const i=syncTreeQueryKeyForTag_(n,t);if(i){const s=syncTreeParseQueryKey_(i),r=s.path,o=s.queryId,a=newRelativePath(r,e),l=new ListenComplete(newOperationSourceServerTaggedQuery(o),a);return syncTreeApplyTaggedOperation_(n,r,l)}else return[]}function syncTreeRemoveEventRegistration(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||syncPointViewExistsForQuery(o,e))){const l=syncPointRemoveEventRegistration(o,e,t,i);syncPointIsEmpty(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(u,f)=>syncPointHasCompleteView(f));if(d&&!h){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=syncTreeCollectDistinctViewsForSubTree_(u);for(let _=0;_<f.length;++_){const m=f[_],g=m.query,E=syncTreeCreateListenerForView_(n,m);n.listenProvider_.startListening(syncTreeQueryForListening_(g),syncTreeTagForQuery(n,g),E.hashFn,E.onComplete)}}}!h&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(syncTreeQueryForListening_(e),null):c.forEach(u=>{const f=n.queryToTagMap.get(syncTreeMakeQueryKey_(u));n.listenProvider_.stopListening(syncTreeQueryForListening_(u),f)}))}syncTreeRemoveTags_(n,c)}return a}function syncTreeApplyTaggedQueryOverwrite(n,e,t,i){const s=syncTreeQueryKeyForTag_(n,i);if(s!=null){const r=syncTreeParseQueryKey_(s),o=r.path,a=r.queryId,l=newRelativePath(o,e),c=new Overwrite(newOperationSourceServerTaggedQuery(a),l,t);return syncTreeApplyTaggedOperation_(n,o,c)}else return[]}function syncTreeApplyTaggedQueryMerge(n,e,t,i){const s=syncTreeQueryKeyForTag_(n,i);if(s){const r=syncTreeParseQueryKey_(s),o=r.path,a=r.queryId,l=newRelativePath(o,e),c=ImmutableTree.fromObject(t),d=new Merge(newOperationSourceServerTaggedQuery(a),l,c);return syncTreeApplyTaggedOperation_(n,o,d)}else return[]}function syncTreeAddEventRegistration(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,f)=>{const _=newRelativePath(u,s);r=r||syncPointGetCompleteServerCache(f,_),o=o||syncPointHasCompleteView(f)});let a=n.syncPointTree_.get(s);a?(o=o||syncPointHasCompleteView(a),r=r||syncPointGetCompleteServerCache(a,newEmptyPath())):(a=new SyncPoint,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=ChildrenNode.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,_)=>{const m=syncPointGetCompleteServerCache(_,newEmptyPath());m&&(r=r.updateImmediateChild(f,m))}));const c=syncPointViewExistsForQuery(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=syncTreeMakeQueryKey_(e);assert(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=syncTreeGetNextQueryTag_();n.queryToTagMap.set(u,f),n.tagToQueryMap.set(f,u)}const d=writeTreeChildWrites(n.pendingWriteTree_,s);let h=syncPointAddEventRegistration(a,e,t,d,r,l);if(!c&&!o&&!i){const u=syncPointViewForQuery(a,e);h=h.concat(syncTreeSetupListener_(n,e,u))}return h}function syncTreeCalcCompleteEventCache(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=newRelativePath(o,e),c=syncPointGetCompleteServerCache(a,l);if(c)return c});return writeTreeCalcCompleteEventCache(s,e,r,t,!0)}function syncTreeApplyOperationToSyncPoints_(n,e){return syncTreeApplyOperationHelper_(e,n.syncPointTree_,null,writeTreeChildWrites(n.pendingWriteTree_,newEmptyPath()))}function syncTreeApplyOperationHelper_(n,e,t,i){if(pathIsEmpty(n.path))return syncTreeApplyOperationDescendantsHelper_(n,e,t,i);{const s=e.get(newEmptyPath());t==null&&s!=null&&(t=syncPointGetCompleteServerCache(s,newEmptyPath()));let r=[];const o=pathGetFront(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=writeTreeRefChild(i,o);r=r.concat(syncTreeApplyOperationHelper_(a,l,c,d))}return s&&(r=r.concat(syncPointApplyOperation(s,n,i,t))),r}}function syncTreeApplyOperationDescendantsHelper_(n,e,t,i){const s=e.get(newEmptyPath());t==null&&s!=null&&(t=syncPointGetCompleteServerCache(s,newEmptyPath()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=writeTreeRefChild(i,o),d=n.operationForChild(o);d&&(r=r.concat(syncTreeApplyOperationDescendantsHelper_(d,a,l,c)))}),s&&(r=r.concat(syncPointApplyOperation(s,n,i,t))),r}function syncTreeCreateListenerForView_(n,e){const t=e.query,i=syncTreeTagForQuery(n,t);return{hashFn:()=>(viewGetServerCache(e)||ChildrenNode.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?syncTreeApplyTaggedListenComplete(n,t._path,i):syncTreeApplyListenComplete(n,t._path);{const r=errorForServerCode(s,t);return syncTreeRemoveEventRegistration(n,t,null,r)}}}}function syncTreeTagForQuery(n,e){const t=syncTreeMakeQueryKey_(e);return n.queryToTagMap.get(t)}function syncTreeMakeQueryKey_(n){return n._path.toString()+"$"+n._queryIdentifier}function syncTreeQueryKeyForTag_(n,e){return n.tagToQueryMap.get(e)}function syncTreeParseQueryKey_(n){const e=n.indexOf("$");return assert(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Path(n.substr(0,e))}}function syncTreeApplyTaggedOperation_(n,e,t){const i=n.syncPointTree_.get(e);assert(i,"Missing sync point for query tag that we're tracking");const s=writeTreeChildWrites(n.pendingWriteTree_,e);return syncPointApplyOperation(i,t,s,null)}function syncTreeCollectDistinctViewsForSubTree_(n){return n.fold((e,t,i)=>{if(t&&syncPointHasCompleteView(t))return[syncPointGetCompleteView(t)];{let s=[];return t&&(s=syncPointGetQueryViews(t)),each(i,(r,o)=>{s=s.concat(o)}),s}})}function syncTreeQueryForListening_(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(syncTreeGetReferenceConstructor())(n._repo,n._path):n}function syncTreeRemoveTags_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=syncTreeMakeQueryKey_(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function syncTreeGetNextQueryTag_(){return syncTreeNextQueryTag_++}function syncTreeSetupListener_(n,e,t){const i=e._path,s=syncTreeTagForQuery(n,e),r=syncTreeCreateListenerForView_(n,t),o=n.listenProvider_.startListening(syncTreeQueryForListening_(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)assert(!syncPointHasCompleteView(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!pathIsEmpty(c)&&d&&syncPointHasCompleteView(d))return[syncPointGetCompleteView(d).query];{let u=[];return d&&(u=u.concat(syncPointGetQueryViews(d).map(f=>f.query))),each(h,(f,_)=>{u=u.concat(_)}),u}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(syncTreeQueryForListening_(d),syncTreeTagForQuery(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ExistingValueProvider{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ExistingValueProvider(t)}node(){return this.node_}}class DeferredValueProvider{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=pathChild(this.path_,e);return new DeferredValueProvider(this.syncTree_,t)}node(){return syncTreeCalcCompleteEventCache(this.syncTree_,this.path_)}}const generateWithValues=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},resolveDeferredLeafValue=function(n,e,t){if(!n||typeof n!="object")return n;if(assert(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return resolveScalarDeferredValue(n[".sv"],e,t);if(typeof n[".sv"]=="object")return resolveComplexDeferredValue(n[".sv"],e);assert(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},resolveScalarDeferredValue=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:assert(!1,"Unexpected server value: "+n)}},resolveComplexDeferredValue=function(n,e,t){n.hasOwnProperty("increment")||assert(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&assert(!1,"Unexpected increment value: "+i);const s=e.node();if(assert(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},resolveDeferredValueTree=function(n,e,t,i){return resolveDeferredValue(e,new DeferredValueProvider(t,n),i)},resolveDeferredValueSnapshot=function(n,e,t){return resolveDeferredValue(n,new ExistingValueProvider(e),t)};function resolveDeferredValue(n,e,t){const i=n.getPriority().val(),s=resolveDeferredLeafValue(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=resolveDeferredLeafValue(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new LeafNode(a,nodeFromJSON(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new LeafNode(s))),o.forEachChild(PRIORITY_INDEX,(a,l)=>{const c=resolveDeferredValue(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tree{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function treeSubTree(n,e){let t=e instanceof Path?e:new Path(e),i=n,s=pathGetFront(t);for(;s!==null;){const r=safeGet(i.node.children,s)||{children:{},childCount:0};i=new Tree(s,i,r),t=pathPopFront(t),s=pathGetFront(t)}return i}function treeGetValue(n){return n.node.value}function treeSetValue(n,e){n.node.value=e,treeUpdateParents(n)}function treeHasChildren(n){return n.node.childCount>0}function treeIsEmpty(n){return treeGetValue(n)===void 0&&!treeHasChildren(n)}function treeForEachChild(n,e){each(n.node.children,(t,i)=>{e(new Tree(t,n,i))})}function treeForEachDescendant(n,e,t,i){t&&!i&&e(n),treeForEachChild(n,s=>{treeForEachDescendant(s,e,!0,i)}),t&&i&&e(n)}function treeForEachAncestor(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function treeGetPath(n){return new Path(n.parent===null?n.name:treeGetPath(n.parent)+"/"+n.name)}function treeUpdateParents(n){n.parent!==null&&treeUpdateChild(n.parent,n.name,n)}function treeUpdateChild(n,e,t){const i=treeIsEmpty(t),s=contains(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,treeUpdateParents(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,treeUpdateParents(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const INVALID_KEY_REGEX_=/[\[\].#$\/\u0000-\u001F\u007F]/,INVALID_PATH_REGEX_=/[\[\].#$\u0000-\u001F\u007F]/,MAX_LEAF_SIZE_=10*1024*1024,isValidKey=function(n){return typeof n=="string"&&n.length!==0&&!INVALID_KEY_REGEX_.test(n)},isValidPathString=function(n){return typeof n=="string"&&n.length!==0&&!INVALID_PATH_REGEX_.test(n)},isValidRootPathString=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),isValidPathString(n)},validateFirebaseDataArg=function(n,e,t,i){i&&e===void 0||validateFirebaseData(errorPrefix(n,"value"),e,t)},validateFirebaseData=function(n,e,t){const i=t instanceof Path?new ValidationPath(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+validationPathToErrorString(i));if(typeof e=="function")throw new Error(n+"contains a function "+validationPathToErrorString(i)+" with contents = "+e.toString());if(isInvalidJSONNumber(e))throw new Error(n+"contains "+e.toString()+" "+validationPathToErrorString(i));if(typeof e=="string"&&e.length>MAX_LEAF_SIZE_/3&&stringLength(e)>MAX_LEAF_SIZE_)throw new Error(n+"contains a string greater than "+MAX_LEAF_SIZE_+" utf8 bytes "+validationPathToErrorString(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(each(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!isValidKey(o)))throw new Error(n+" contains an invalid key ("+o+") "+validationPathToErrorString(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);validationPathPush(i,o),validateFirebaseData(n,a,i),validationPathPop(i)}),s&&r)throw new Error(n+' contains ".value" child '+validationPathToErrorString(i)+" in addition to actual children.")}},validatePathString=function(n,e,t,i){if(!(i&&t===void 0)&&!isValidPathString(t))throw new Error(errorPrefix(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},validateRootPathString=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),validatePathString(n,e,t,i)},validateWritablePath=function(n,e){if(pathGetFront(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},validateUrl=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!isValidKey(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!isValidRootPathString(t))throw new Error(errorPrefix(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EventQueue{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eventQueueQueueEvents(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!pathEquals(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function eventQueueRaiseEventsAtPath(n,e,t){eventQueueQueueEvents(n,t),eventQueueRaiseQueuedEventsMatchingPredicate(n,i=>pathEquals(i,e))}function eventQueueRaiseEventsForChangedPath(n,e,t){eventQueueQueueEvents(n,t),eventQueueRaiseQueuedEventsMatchingPredicate(n,i=>pathContains(i,e)||pathContains(e,i))}function eventQueueRaiseQueuedEventsMatchingPredicate(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(eventListRaise(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function eventListRaise(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();logger&&log("event: "+t.toString()),exceptionGuard(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const INTERRUPT_REASON="repo_interrupt",MAX_TRANSACTION_RETRIES=25;class Repo{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EventQueue,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=newSparseSnapshotTree(),this.transactionQueueTree_=new Tree,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function repoStart(n,e,t){if(n.stats_=statsManagerGetCollection(n.repoInfo_),n.forceRestClient_||beingCrawled())n.server_=new ReadonlyRestClient(n.repoInfo_,(i,s,r,o)=>{repoOnDataUpdate(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>repoOnConnectStatus(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{stringify(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new PersistentConnection(n.repoInfo_,e,(i,s,r,o)=>{repoOnDataUpdate(n,i,s,r,o)},i=>{repoOnConnectStatus(n,i)},i=>{repoOnServerInfoUpdate(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=statsManagerGetOrCreateReporter(n.repoInfo_,()=>new StatsReporter(n.stats_,n.server_)),n.infoData_=new SnapshotHolder,n.infoSyncTree_=new SyncTree({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=syncTreeApplyServerOverwrite(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),repoUpdateInfo(n,"connected",!1),n.serverSyncTree_=new SyncTree({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);eventQueueRaiseEventsForChangedPath(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function repoServerTime(n){const t=n.infoData_.getNode(new Path(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function repoGenerateServerValues(n){return generateWithValues({timestamp:repoServerTime(n)})}function repoOnDataUpdate(n,e,t,i,s){n.dataUpdateCount++;const r=new Path(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=map(t,c=>nodeFromJSON(c));o=syncTreeApplyTaggedQueryMerge(n.serverSyncTree_,r,l,s)}else{const l=nodeFromJSON(t);o=syncTreeApplyTaggedQueryOverwrite(n.serverSyncTree_,r,l,s)}else if(i){const l=map(t,c=>nodeFromJSON(c));o=syncTreeApplyServerMerge(n.serverSyncTree_,r,l)}else{const l=nodeFromJSON(t);o=syncTreeApplyServerOverwrite(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=repoRerunTransactions(n,r)),eventQueueRaiseEventsForChangedPath(n.eventQueue_,a,o)}function repoOnConnectStatus(n,e){repoUpdateInfo(n,"connected",e),e===!1&&repoRunOnDisconnectEvents(n)}function repoOnServerInfoUpdate(n,e){each(e,(t,i)=>{repoUpdateInfo(n,t,i)})}function repoUpdateInfo(n,e,t){const i=new Path("/.info/"+e),s=nodeFromJSON(t);n.infoData_.updateSnapshot(i,s);const r=syncTreeApplyServerOverwrite(n.infoSyncTree_,i,s);eventQueueRaiseEventsForChangedPath(n.eventQueue_,i,r)}function repoGetNextWriteId(n){return n.nextWriteId_++}function repoSetWithPriority(n,e,t,i,s){repoLog(n,"set",{path:e.toString(),value:t,priority:i});const r=repoGenerateServerValues(n),o=nodeFromJSON(t,i),a=syncTreeCalcCompleteEventCache(n.serverSyncTree_,e),l=resolveDeferredValueSnapshot(o,a,r),c=repoGetNextWriteId(n),d=syncTreeApplyUserOverwrite(n.serverSyncTree_,e,l,c,!0);eventQueueQueueEvents(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,f)=>{const _=u==="ok";_||warn("set at "+e+" failed: "+u);const m=syncTreeAckUserWrite(n.serverSyncTree_,c,!_);eventQueueRaiseEventsForChangedPath(n.eventQueue_,e,m),repoCallOnCompleteCallback(n,s,u,f)});const h=repoAbortTransactions(n,e);repoRerunTransactions(n,h),eventQueueRaiseEventsForChangedPath(n.eventQueue_,h,[])}function repoRunOnDisconnectEvents(n){repoLog(n,"onDisconnectEvents");const e=repoGenerateServerValues(n),t=newSparseSnapshotTree();sparseSnapshotTreeForEachTree(n.onDisconnect_,newEmptyPath(),(s,r)=>{const o=resolveDeferredValueTree(s,r,n.serverSyncTree_,e);sparseSnapshotTreeRemember(t,s,o)});let i=[];sparseSnapshotTreeForEachTree(t,newEmptyPath(),(s,r)=>{i=i.concat(syncTreeApplyServerOverwrite(n.serverSyncTree_,s,r));const o=repoAbortTransactions(n,s);repoRerunTransactions(n,o)}),n.onDisconnect_=newSparseSnapshotTree(),eventQueueRaiseEventsForChangedPath(n.eventQueue_,newEmptyPath(),i)}function repoAddEventCallbackForQuery(n,e,t){let i;pathGetFront(e._path)===".info"?i=syncTreeAddEventRegistration(n.infoSyncTree_,e,t):i=syncTreeAddEventRegistration(n.serverSyncTree_,e,t),eventQueueRaiseEventsAtPath(n.eventQueue_,e._path,i)}function repoRemoveEventCallbackForQuery(n,e,t){let i;pathGetFront(e._path)===".info"?i=syncTreeRemoveEventRegistration(n.infoSyncTree_,e,t):i=syncTreeRemoveEventRegistration(n.serverSyncTree_,e,t),eventQueueRaiseEventsAtPath(n.eventQueue_,e._path,i)}function repoInterrupt(n){n.persistentConnection_&&n.persistentConnection_.interrupt(INTERRUPT_REASON)}function repoLog(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),log(t,...e)}function repoCallOnCompleteCallback(n,e,t,i){e&&exceptionGuard(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function repoGetLatestState(n,e,t){return syncTreeCalcCompleteEventCache(n.serverSyncTree_,e,t)||ChildrenNode.EMPTY_NODE}function repoSendReadyTransactions(n,e=n.transactionQueueTree_){if(e||repoPruneCompletedTransactionsBelowNode(n,e),treeGetValue(e)){const t=repoBuildTransactionQueue(n,e);assert(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&repoSendTransactionQueue(n,treeGetPath(e),t)}else treeHasChildren(e)&&treeForEachChild(e,t=>{repoSendReadyTransactions(n,t)})}function repoSendTransactionQueue(n,e,t){const i=t.map(c=>c.currentWriteId),s=repoGetLatestState(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];assert(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=newRelativePath(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{repoLog(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(syncTreeAckUserWrite(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();repoPruneCompletedTransactionsBelowNode(n,treeSubTree(n.transactionQueueTree_,e)),repoSendReadyTransactions(n,n.transactionQueueTree_),eventQueueRaiseEventsForChangedPath(n.eventQueue_,e,d);for(let u=0;u<h.length;u++)exceptionGuard(h[u])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{warn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}repoRerunTransactions(n,e)}},o)}function repoRerunTransactions(n,e){const t=repoGetAncestorTransactionNode(n,e),i=treeGetPath(t),s=repoBuildTransactionQueue(n,t);return repoRerunTransactionQueue(n,s,i),i}function repoRerunTransactionQueue(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=newRelativePath(t,l.path);let d=!1,h;if(assert(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(syncTreeAckUserWrite(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=MAX_TRANSACTION_RETRIES)d=!0,h="maxretry",s=s.concat(syncTreeAckUserWrite(n.serverSyncTree_,l.currentWriteId,!0));else{const u=repoGetLatestState(n,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){validateFirebaseData("transaction failed: Data returned ",f,l.path);let _=nodeFromJSON(f);typeof f=="object"&&f!=null&&contains(f,".priority")||(_=_.updatePriority(u.getPriority()));const g=l.currentWriteId,E=repoGenerateServerValues(n),y=resolveDeferredValueSnapshot(_,u,E);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=y,l.currentWriteId=repoGetNextWriteId(n),o.splice(o.indexOf(g),1),s=s.concat(syncTreeApplyUserOverwrite(n.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(syncTreeAckUserWrite(n.serverSyncTree_,g,!0))}else d=!0,h="nodata",s=s.concat(syncTreeAckUserWrite(n.serverSyncTree_,l.currentWriteId,!0))}eventQueueRaiseEventsForChangedPath(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}repoPruneCompletedTransactionsBelowNode(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)exceptionGuard(i[a]);repoSendReadyTransactions(n,n.transactionQueueTree_)}function repoGetAncestorTransactionNode(n,e){let t,i=n.transactionQueueTree_;for(t=pathGetFront(e);t!==null&&treeGetValue(i)===void 0;)i=treeSubTree(i,t),e=pathPopFront(e),t=pathGetFront(e);return i}function repoBuildTransactionQueue(n,e){const t=[];return repoAggregateTransactionQueuesForNode(n,e,t),t.sort((i,s)=>i.order-s.order),t}function repoAggregateTransactionQueuesForNode(n,e,t){const i=treeGetValue(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);treeForEachChild(e,s=>{repoAggregateTransactionQueuesForNode(n,s,t)})}function repoPruneCompletedTransactionsBelowNode(n,e){const t=treeGetValue(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,treeSetValue(e,t.length>0?t:void 0)}treeForEachChild(e,i=>{repoPruneCompletedTransactionsBelowNode(n,i)})}function repoAbortTransactions(n,e){const t=treeGetPath(repoGetAncestorTransactionNode(n,e)),i=treeSubTree(n.transactionQueueTree_,e);return treeForEachAncestor(i,s=>{repoAbortTransactionsOnNode(n,s)}),repoAbortTransactionsOnNode(n,i),treeForEachDescendant(i,s=>{repoAbortTransactionsOnNode(n,s)}),t}function repoAbortTransactionsOnNode(n,e){const t=treeGetValue(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(assert(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(assert(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(syncTreeAckUserWrite(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?treeSetValue(e,void 0):t.length=r+1,eventQueueRaiseEventsForChangedPath(n.eventQueue_,treeGetPath(e),s);for(let o=0;o<i.length;o++)exceptionGuard(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function decodePath(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function decodeQuery(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):warn(`Invalid query segment '${t}' in query '${n}'`)}return e}const parseRepoInfo=function(n,e){const t=parseDatabaseURL(n),i=t.namespace;t.domain==="firebase.com"&&fatal(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||warnIfPageIsSecure();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new RepoInfo(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new Path(t.pathString)}},parseDatabaseURL=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(s=decodePath(n.substring(d,h)));const u=decodeQuery(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DataEvent{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+stringify(this.snapshot.exportVal())}}class CancelEvent{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CallbackContext{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return assert(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QueryImpl{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return pathIsEmpty(this._path)?null:pathGetBack(this._path)}get ref(){return new ReferenceImpl(this._repo,this._path)}get _queryIdentifier(){const e=queryParamsGetQueryObject(this._queryParams),t=ObjectToUniqueKey(e);return t==="{}"?"default":t}get _queryObject(){return queryParamsGetQueryObject(this._queryParams)}isEqual(e){if(e=getModularInstance(e),!(e instanceof QueryImpl))return!1;const t=this._repo===e._repo,i=pathEquals(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+pathToUrlEncodedString(this._path)}}class ReferenceImpl extends QueryImpl{constructor(e,t){super(e,t,new QueryParams,!1)}get parent(){const e=pathParent(this._path);return e===null?null:new ReferenceImpl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class DataSnapshot{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Path(e),i=child(this.ref,e);return new DataSnapshot(this._node.getChild(t),i,PRIORITY_INDEX)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new DataSnapshot(s,child(this.ref,i),PRIORITY_INDEX)))}hasChild(e){const t=new Path(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ref(n,e){return n=getModularInstance(n),n._checkNotDeleted("ref"),e!==void 0?child(n._root,e):n._root}function child(n,e){return n=getModularInstance(n),pathGetFront(n._path)===null?validateRootPathString("child","path",e,!1):validatePathString("child","path",e,!1),new ReferenceImpl(n._repo,pathChild(n._path,e))}function remove(n){return validateWritablePath("remove",n._path),set(n,null)}function set(n,e){n=getModularInstance(n),validateWritablePath("set",n._path),validateFirebaseDataArg("set",e,n._path,!1);const t=new Deferred;return repoSetWithPriority(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class ValueEventRegistration{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new DataEvent("value",this,new DataSnapshot(e.snapshotNode,new ReferenceImpl(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new CancelEvent(this,e,t):null}matches(e){return e instanceof ValueEventRegistration?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ChildEventRegistration{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new CancelEvent(this,e,t):null}createEvent(e,t){assert(e.childName!=null,"Child events should have a childName.");const i=child(new ReferenceImpl(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new DataEvent(e.type,this,new DataSnapshot(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ChildEventRegistration?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function addEventListener(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(d,h)=>{repoRemoveEventCallbackForQuery(n._repo,n,a),l(d,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new CallbackContext(t,r||void 0),a=e==="value"?new ValueEventRegistration(o):new ChildEventRegistration(e,o);return repoAddEventCallbackForQuery(n._repo,n,a),()=>repoRemoveEventCallbackForQuery(n._repo,n,a)}function onValue(n,e,t,i){return addEventListener(n,"value",e,t,i)}syncPointSetReferenceConstructor(ReferenceImpl);syncTreeSetReferenceConstructor(ReferenceImpl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FIREBASE_DATABASE_EMULATOR_HOST_VAR="FIREBASE_DATABASE_EMULATOR_HOST",repos={};let useRestClient=!1;function repoManagerApplyEmulatorSettings(n,e,t,i){n.repoInfo_=new RepoInfo(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function repoManagerDatabaseFromApp(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),log("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=parseRepoInfo(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=parseRepoInfo(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const d=s&&l?new EmulatorTokenProvider(EmulatorTokenProvider.OWNER):new FirebaseAuthTokenProvider(n.name,n.options,e);validateUrl("Invalid Firebase Database URL",o),pathIsEmpty(o.path)||fatal("Database URL must point to the root of a Firebase Database (not including a child path).");const h=repoManagerCreateRepo(a,n,d,new AppCheckTokenProvider(n.name,t));return new Database(h,n)}function repoManagerDeleteRepo(n,e){const t=repos[e];(!t||t[n.key]!==n)&&fatal(`Database ${e}(${n.repoInfo_}) has already been deleted.`),repoInterrupt(n),delete t[n.key]}function repoManagerCreateRepo(n,e,t,i){let s=repos[e.name];s||(s={},repos[e.name]=s);let r=s[n.toURLString()];return r&&fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Repo(n,useRestClient,t,i),s[n.toURLString()]=r,r}class Database{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(repoStart(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ReferenceImpl(this._repo,newEmptyPath())),this._rootInternal}_delete(){return this._rootInternal!==null&&(repoManagerDeleteRepo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fatal("Cannot call "+e+" on a deleted database.")}}function getDatabase(n=getApp(),e){const t=_getProvider(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=getDefaultEmulatorHostnameAndPort("database");i&&connectDatabaseEmulator(t,...i)}return t}function connectDatabaseEmulator(n,e,t,i={}){n=getModularInstance(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&fatal("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&fatal('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new EmulatorTokenProvider(EmulatorTokenProvider.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:createMockUserToken(i.mockUserToken,n.app.options.projectId);r=new EmulatorTokenProvider(o)}repoManagerApplyEmulatorSettings(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerDatabase(n){setSDKVersion(SDK_VERSION$1),_registerComponent(new Component("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return repoManagerDatabaseFromApp(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),registerVersion(name$1,version,n),registerVersion(name$1,version,"esm2017")}PersistentConnection.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};PersistentConnection.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};registerDatabase();const firebaseConfig={apiKey:"AIzaSyAjJdubL-E2y8vtOPWkg3tK_vlS1KE9AEM",authDomain:"super-playground.firebaseapp.com",databaseURL:"https://super-playground-default-rtdb.firebaseio.com",projectId:"super-playground",storageBucket:"super-playground.appspot.com",messagingSenderId:"439529266871",appId:"1:439529266871:web:58da0215e181846a4eb732",measurementId:"G-S3EH9YKSMM"};initializeApp(firebaseConfig);const db=getDatabase();let messages={},place=0,users={},muted={},channel="general",unsubscribe,placeUnsubscribe,name="",v2={},showPlace=!1;onValue(ref(db,"V2"),n=>{v2=n.val(),init()});let isAdmin=!1;function adminify(n){if(n-1200==-933){isAdmin=!0;for(let e of document.getElementsByClassName("admin"))e.style.display="block"}}async function joinChannel(n){channel=n,console.log("joining channel "+n),channel in v2||(console.log("creating ",channel,"in ",v2),await set(ref(db,"V2/"+channel),{e:"e",messages:{e:"e"},place:0,users:{e:"e"},muted:{e:!1}})),unsubscribe&&(unsubscribe(),placeUnsubscribe()),unsubscribe=onValue(ref(db,"V2/"+channel),e=>{channelUpdate(e.val())}),placeUnsubscribe=onValue(ref(db,"V2/"+channel+"/place"),e=>{place=e.val()}),document.getElementById("channel").innerHTML="Current Channel: "+n}function channelUpdate(n){let e=document.getElementById("messageList");e.innerHTML="";let t=document.getElementById("messages"),i=Object.keys(messages).length<Object.keys(n.messages).length;messages=n.messages,users=n.users,muted=n.muted;for(let r in messages){if(r=="e")continue;let o=messages[r];"whisperTo"in o?(name==o.whisperTo||name==o.name||isAdmin)&&(e.innerHTML+=`<li><i>${o.name} message to ${o.whisperTo}: ${o.msg}</i></li>`):e.innerHTML+=`<li>${showPlace?"("+r+")":""}${o.name+": "+o.msg}</li>`}i&&(t.scrollTop=t.scrollHeight,console.log("scroll"));let s=document.getElementById("text");name in muted?(s.readOnly=!0,s.value="you have been muted"):(s.value=="you have been muted"&&(s.value="no longer muted"),s.readOnly=!1),s=document.getElementById("muted"),s.innerHTML="Muted Names: "+Object.keys(muted).join(", "),refreshUsers()}function refreshUsers(){let n=[];for(let e in users){let t=users[e];t!=="e"&&Date.now()-t<=6e4&&n.push(e)}document.getElementById("active").innerHTML="Active Users: "+n.join(", ")}document.getElementById("text").addEventListener("input",async()=>{let te=document.getElementById("text"),text=te.value;if(text.includes(`
`)&&text.trim().length!=0){te.value="",te.readOnly=!0;let msg=text.replace(`
`,"");if(msg.startsWith("/")){let command=msg.split(" ")[0],args=msg.split(" ").slice(1);if(command=="/join")args.length==0?alert("invalid"):joinChannel(args[0]);else if(command=="/supersecretpasswordholyhe")args[0]=="adminifyButDontActually"&&adminify(parseInt(args[1])),eval(args.join(" "));else if(command=="/msg")if(args.length<2)alert("invalid");else{let n=args[0],e=args.slice(1).join(" "),t=place;place++,await set(ref(db,"V2/"+channel+"/place"),place),await set(ref(db,"V2/"+channel+"/messages/"+t.toString()),{name,msg:e,whisperTo:n})}else if(isAdmin){if(command=="/exec")eval(args.join(" "));else if(command=="/clear")await set(ref(db,"V2/"+channel+"/messages"),{e:"e"});else if(command=="/toggleShowPlace")showPlace=!showPlace;else if(command=="/edit"){let n=args[0],e=args.slice(1).join(" "),t=messages[n];t.msg=e,await set(ref(db,"V2/"+channel+"/messages/"+n),t)}else if(command=="/remove"){let n=args[0];await remove(ref(db,"V2/"+channel+"/messages/"+n))}else if(command=="/toggleMute"){let n=args[0];n in muted?await remove(ref(db,"V2/"+channel+"/muted/"+n)):await set(ref(db,"V2/"+channel+"/muted/"+n),!0)}}te.readOnly=!1;return}let oldPlace=place;place++,await set(ref(db,"V2/"+channel+"/place"),place),await set(ref(db,"V2/"+channel+"/messages/"+oldPlace.toString()),{name,msg}),te.readOnly=!1}else text.trim().length==0&&(te.value="")});let listenFor=["mousedown","mousemove","focus","keydown"];for(let n of listenFor)window.addEventListener(n,userInputed);let inited=!1;function init(){if(!inited){for(inited=!0;name==""||name==null||name.includes(" ");)name=prompt("Enter name (no spaces): ");joinChannel("general"),setInterval(refreshUsers,1e4)}}let checkInput=!0;function userInputed(){if(checkInput&&name&&channel in v2){checkInput=!1,console.log("user alive");let n=Date.now();set(ref(db,"V2/"+channel+"/users/"+name),n),setTimeout(()=>{checkInput=!0},1e3)}}
