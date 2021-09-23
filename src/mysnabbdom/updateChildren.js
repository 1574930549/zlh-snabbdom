import createElement from "./createElement.js";
import pathVonde from "./pathVnode.js";

function checkSameVnode(a, b) {
    // console.log(a,b);
    return a.sel == b.sel && a.key == b.key;
}
export default function updateChildren(parentElm, oldCh, newCh) {
    // 旧前
    let oldStartIdx = 0;
    // 新前
    let newStartIdx = 0;
    // 旧后
    let oldEndIdx = oldCh.length - 1;
    let oldEndIdx2 = oldCh.length - 1;
    // 新后
    let newEndIdx = newCh.length - 1;
    let newEndIdx2 = newCh.length - 1;
    // 旧前节点
    let oldStartVnode = oldCh[0];
    // 新前节点
    let newStartVnode = newCh[0];
    // 旧后节点
    let oldEndVnode = oldCh[oldEndIdx];
    // 新后节点
    let newEndVnode = newCh[newEndIdx];
    let keymap = null;
    let i=0;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        console.log('第',++i,'次循环');
        if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
            console.log('break1');
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
            console.log('break2');
            oldEndVnode = oldCh[--oldEndIdx];
        } else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
            console.log('break3');
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null || newCh[newEndIdx] == undefined) {
            console.log('break4');
            newEndVnode = newCh[--newEndIdx];
        }
        else if (checkSameVnode(oldStartVnode, newStartVnode)) {
            console.log('新前旧前',newStartIdx,oldStartIdx);
            pathVonde(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (checkSameVnode(oldEndVnode, newEndVnode)) {
            console.log('新后旧后',newEndIdx,oldEndIdx);
            pathVonde(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (checkSameVnode(oldStartVnode, newEndVnode)) {
            console.log('新后旧前',newEndIdx,oldStartIdx);
            pathVonde(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.elm, oldStartVnode.elm.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (checkSameVnode(oldEndVnode, newStartVnode)) {
            console.log('新前旧后',newStartIdx,oldEndIdx);
            pathVonde(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            console.log('都不匹配');
            if (!keymap) {
                console.log('!keymap');
                keymap = {}
                for (let i = oldStartIdx; i < oldEndIdx; i++) {
                    const key = oldCh[i].key;
                    if (key != undefined) {
                        keymap[key] = i;
                    }
                }
            }
            const idxInOld = keymap[newStartVnode.key]
            if (idxInOld == undefined) {
                console.log('idxInOld == undefined');
                // 全新项
                parentElm.insertBefore(createElement(newStartVnode),oldStartVnode.elm)
            }
            else {
                console.log('idxInOld != undefined');
                // 不是全新项，需要移动
                const elmToMove = oldCh[idxInOld];
                pathVonde(elmToMove, newStartVnode);
                // 标记为处理过
                oldCh[idxInOld] = undefined;
                // 移动
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
            }
            newStartVnode = newCh[++newStartIdx]
        }
    }
    console.log('新前：',newStartIdx,'新后：',newEndIdx);
    console.log('旧前：',oldStartIdx,'旧后：',oldEndIdx);
        if (newStartIdx <= newEndIdx) {
            console.log('newStartIdx <= newEndIdx');
            const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            // const before = oldCh[oldEndIdx] == null ? null : oldCh[oldEndIdx].elm;
            console.log(before);
            for (let i = newStartIdx; i <=newEndIdx ; i++) {
                parentElm.insertBefore(createElement(newCh[i]), before);
            }
        }
        else if (oldStartIdx <= oldEndIdx) {
            console.log('oldStartIdx <= oldEndIdx');
            // 批量删除
            for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                if (oldCh[i]) {
                    parentElm.removeChild(oldCh[i].elm)
                }
            }
        }
}