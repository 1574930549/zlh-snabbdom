import vnode from "./vnode";

export default function h(sel,data,c){
    if(arguments.length!=3){
        throw new Error('参数数量错误');
    }
    if(typeof c=='string'||typeof c=='number'){
        // console.log(123,c);
        return vnode(sel,data,undefined,c,undefined);
    }
    else if(Array.isArray(c)){
        let children=[];
        for(let i =0;i<c.length;i++){
            if(!(typeof c[i]=='object' && c[i].hasOwnProperty('sel'))){
                throw new Error('参数格式错误')
            }
            // console.log(c[i]);
            children.push(c[i]);
        }
        // console.log(111,vnode(sel,data,children,undefined,undefined));
        return vnode(sel,data,children,undefined,undefined);
    }
    else if(typeof c=='object' && c.hasOwnProperty('sel')){
        let children=[c]
        // console.log(222,vnode(sel,data,children,undefined,undefined));
        return vnode(sel,data,children,undefined,undefined);
    }
    else{
        throw new Error('参数格式错误')
    }
}