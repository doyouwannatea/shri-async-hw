export function prPush(arr, value) {
    return new Promise(resolve => {
        arr.push(value, resolve)
    })
}

export function prGet(arr, index) {
    return new Promise(resolve => {
        arr.get(index, resolve)
    })
}