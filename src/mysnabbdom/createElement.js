export default function createElement(vnode,pivot){
    // console.log(vnode,pivot);
    // 创建一个DOM节点
    let domNode=document.createElement(vnode.sel);
    // 子节点/文本
    if(vnode.text!=''&&(vnode.children==undefined||vnode.children.length==0)){
        // 文本
        domNode.innerText=vnode.text;
    }
    else if(Array.isArray(vnode.children)&&vnode.children.length>0){
        // 子节点
        for(let i =0;i< vnode.children.length;i++){
            let ch=vnode.children[i];
            let chdom=createElement(ch);
            domNode.appendChild(chdom);
        }
    }
    // 补充elm属性 
    vnode.elm=domNode;
    return vnode.elm
}