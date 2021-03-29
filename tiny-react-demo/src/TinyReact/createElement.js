export default function createElement(type, props, ...children) {
    // 拷贝数组，遍历
    // const childElements = [].concat(...children).map(child => {
    //     if(child instanceof Object){
    //         return child
    //     } else {
    //         return createElement("text", {textContent: child })
    //     }
    // })
    // return {
    //     type,
    //     props,
    //     children: childElements
    // }

    // 因为要过滤掉某些值，所以使用reduce
    const childElements = [].concat(...children).reduce((result, child) => {
        if(child !== false && child !== true && child !== null){
            if(child instanceof Object){
                result.push(child) 
            } else {
                result.push(createElement("text", {textContent: child }))
            }
        }
        return result
    }, [])

    return {
        type,
        props: Object.assign({children: childElements}, props), // 这里要小心
        children: childElements
    }
}