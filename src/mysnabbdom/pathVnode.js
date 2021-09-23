import createElement from'./createElement.js';
import updateChildren from './updateChildren.js';
export default function pathVonde(oldVnode,newVonde){
    // 新旧一样
    if (oldVnode === newVonde) {
        console.log('新旧一样');
        return
    }
    // 新vnode是否含有text
    if (newVonde.text != '' && (newVonde.children == undefined || newVonde.children.length == 0)) {
        console.log('新vnode含有text');
        // 含有text
        // console.log(oldVnode,newVonde);
        if (oldVnode.text != newVonde.text) {
            oldVnode.elm.innerText = newVonde.text;
        }
    }
    else {
        console.log('不含有text');
        // 不含有text
        // 老节点是否含有children
        if (oldVnode.children != undefined && oldVnode.children.length  > 0) {
            console.log('老节点含有children');
            // 含有children
            // console.log(oldVnode,newVonde);
            updateChildren(oldVnode.elm,oldVnode.children,newVonde.children);
        }
        else {
            // 不含有children
            console.log('不含有children');
            oldVnode.elm.innerHTML='';
            for(let i =0; i<newVonde.children.length;i++){
                let dom = createElement(newVonde[i]);
                oldVnode.elm.appendChild(dom);
            }
        }
    }
}