import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"

export default function createDOMElement(virtualDOM){
    let newElement = null
    if(virtualDOM.type === "text"){
        // 文本节点
        console.log('virtualDOM.props', virtualDOM.props)
        console.log('virtualDOM.props.textContent', virtualDOM.props.textContent)
        newElement = document.createTextNode(virtualDOM.props.textContent)
    } else {
        // 元素节点
        newElement = document.createElement(virtualDOM.type)
        updateNodeElement(newElement, virtualDOM)
    }

    // 把 virtualDOM 挂载到真实DOM对象上
    newElement._virtualDOM = virtualDOM

    // 递归创建子节点
    virtualDOM.children.forEach(child => {
        mountElement(child, newElement)
    })

    // ref
    if(virtualDOM.props && virtualDOM.props.ref){
        virtualDOM.props.ref(newElement)
    }

    return newElement
}


