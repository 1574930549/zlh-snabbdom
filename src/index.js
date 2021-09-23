// import {
//     init,
//     classModule,
//     propsModule,
//     styleModule,
//     eventListenersModule,
//     h,
// } from "snabbdom";

// const patch = init([
//     // Init patch function with chosen modules
//     classModule, // makes it easy to toggle classes
//     propsModule, // for setting properties on DOM elements
//     styleModule, // handles styling on elements with support for animations
//     eventListenersModule, // attaches event listeners
// ]);

import patch from './mysnabbdom/patch.js';
import h from './mysnabbdom/h.js';
const container=document.getElementById('container')

// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName
// document.getElementsByTagNameNS
// const myVonde1=h('h1',{},'hello')

// const myVonde1 = h('ul', {}, [
//     h('li', { key: 'A' }, 'A'),
//     h('li', { key: 'B' }, 'B'),
//     h('li', { key: 'C' }, 'C'),
//     h('li', { key: 'D' }, 'D'),
//     h('li', { key: 'E' }, 'E'),
// ])
// patch(container, myVonde1);
// const vnode2 = h('ul', {}, [
//     h('li', { key: 'Q' }, 'Q'),
//     h('li', { key: 'T' }, 'T'),
//     h('li', { key: 'E' }, 'E'),
//     h('li', { key: 'B' }, 'B'),
//     h('li', { key: 'A' }, 'A'),
//     h('li', { key: 'D' }, 'D'),
//     h('li', { key: 'C' }, 'C'),
//     h('li', { key: 'V' }, 'V'),
//     h('li', { key: 'Z' }, 'Z'),
// ])

// const myVonde1 = h('ul', {}, [
//     h('li', { key: 'A' }, 'A'),
//     h('li', { key: 'B' }, 'B'),
//     h('li', { key: 'C' }, 'C'),
//     h('li', { key: 'D' }, 'D')
// ])
// patch(container, myVonde1);
// const vnode2 = h('ul', {}, [
//     h('li', { key: 'E' }, 'E'),
//     h('li', { key: 'A' }, 'A'),
//     h('li', { key: 'B' }, 'B'),
//     h('li', { key: 'E' }, 'E'),
//     h('li', { key: 'C' }, 'C'),
//     h('li', { key: 'D' }, 'D'),
//     h('li', { key: 'E' }, 'E'),
// ])
btn.onclick = function () {
    patch(myVonde1, vnode2);
}