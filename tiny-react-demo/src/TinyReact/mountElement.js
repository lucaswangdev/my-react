import mountNativeElement from './mountNativeElement'
import isFunction from './isFunction'
import mountComponent from './mountComponent'

export default function mountElement(virtualDOM, container, oldDOM){
    // Component
    if(isFunction(virtualDOM)){
        // console.log("组件")
        mountComponent(virtualDOM, container, oldDOM)
    } else {
        // NativeElement
        mountNativeElement(virtualDOM, container, oldDOM)
    }
}