export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM){
    if(virtualDOM.props.textContent !== oldVirtualDOM.props.textContent){
        // 把新的 textContent 更新到oldDOM的 textContent
        oldDOM.textContent = virtualDOM.props.textContent
        // 把新的 _virtualDOM 更新到oldDOM的 _virtualDOM
        oldDOM._virtualDOM = virtualDOM
    }
}