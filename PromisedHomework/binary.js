const {
    subtract,
    multiply,
    divide
} = Homework

export function subtractPr(a, b) {
    return new Promise(resolve => {
        subtract(a, b, resolve)
    })
}

export function multiplyPr(a, b) {
    return new Promise(resolve => {
        multiply(a, b, resolve)
    })
}

export function dividePr(a, b) {
    return new Promise(resolve => {
        divide(a, b, resolve)
    })
}