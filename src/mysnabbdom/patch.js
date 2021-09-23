import vnode from "./vnode";
import createElement from "./createElement";
import pathVonde from "./pathVnode";
export default function path(oldVnode, newVonde) {
    if (oldVnode.sel == '' || oldVnode.sel == undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);

    }
    if (oldVnode.sel == newVonde.sel && oldVnode.key == newVonde.key) {
        console.log('yes');
        pathVonde(oldVnode,newVonde);
    }
    else {
        console.log('no');
        let newVondeElm = createElement(newVonde, oldVnode.elm);
        // 插入老节点之前
        if (oldVnode.elm.parentNode && newVondeElm) {
            oldVnode.elm.parentNode.insertBefore(newVondeElm, oldVnode.elm)
        }
        // 删除老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}