import { multiplyPr } from '../PromisedHomework/binary.js'

function testAsyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() * 50 > 25) {
                return reject('Ошибка ⛔')
            }

            resolve('Все ок 👍')
        }, Math.random() * 20);
    })
}

// --------------------------------------------------
// Промисы для теста
// --------------------------------------------------
const promises = [
    multiplyPr(1, 1),
    multiplyPr(2, 5),
    multiplyPr(5, 5),
    testAsyncFunc()
]

// --------------------------------------------------
// Promise._any()
// --------------------------------------------------
Promise.any(promises).then(result => {
    console.log('Нативный Promise.any()')
    console.log(result)
}).catch(err => {
    console.log(err)
})

Promise._any(promises).then(result => {
    console.log('Мой Promise._any()')
    console.log(result)
}).catch(err => {
    console.log(err)
})

// --------------------------------------------------
// Promise._allSettled()
// --------------------------------------------------
Promise.allSettled(promises).then(data => {
    console.log('Нативный Promise.allSettled()')
    console.table(data)
})

Promise._allSettled(promises).then(data => {
    console.log('Мой Promise._allSettled()')
    console.table(data)
})

// --------------------------------------------------
// Promise._finally()
// --------------------------------------------------
testAsyncFunc()._finally(() => {
    console.log('Я завершился: Мой _finally()')
}).finally(() => {
    console.log('Я завершился: Нативный finally()')
})