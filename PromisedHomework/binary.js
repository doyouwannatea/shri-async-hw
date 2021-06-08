const {
    subtract,
    multiply,
    divide,
    less
} = Homework

function promised(a, b, fn) {
    return new Promise(resolve => {
        fn(a, b, resolve)
    })
}

export function prSubtract(a, b) {
    return promised(a, b, subtract)
}

export function prMultiply(a, b) {
    return promised(a, b, multiply)
}

export function prDivide(a, b) {
    return promised(a, b, divide)
}

export function prLess(a, b) {
    return promised(a, b, less)
}