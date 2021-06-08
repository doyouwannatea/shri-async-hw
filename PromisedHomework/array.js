export function pushPr(arr, value) {
    return new Promise(resolve => {
        arr.push(value, resolve)
    })
}

export function getPr(arr, index) {
    return new Promise(resolve => {
        arr.get(index, resolve)
    })
}