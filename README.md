# Асинхронность.Домашка

## Вариант - 4

Посчитать площадь треугольника.

```js
function(x1: Number, y1: Number, x2: Number, y2: Number, x3: Number, y3: Number,
    cb: (result: Number) => void) {
}
```

## Результат

В результате получилась асинхронная функция:  
`calcTriangleArea(x1, y1, x2, y2, x3, y3, cb): Promise<Number>`

`cb: (result: Number) => void)`

```js
async function calcTriangleArea(x1, y1, x2, y2, x3, y3, cb) {
    const operands = new AsyncArray()
    await prPush(operands, prSubtract(x2, x1))
    await prPush(operands, prSubtract(y3, y1))
    await prPush(operands, prSubtract(x3, x1))
    await prPush(operands, prSubtract(y2, y1))

    const multipliedOperands = new AsyncArray([
        prMultiply(await prGet(operands, 0), await prGet(operands, 1)),
        prMultiply(await prGet(operands, 2), await prGet(operands, 3))
    ])

    const substracted = await prSubtract(
        await prGet(multipliedOperands, 0),
        await prGet(multipliedOperands, 1)
    )

    let area = await prDivide(substracted, 2)

    if (await prLess(area, 0)) {
        area = await prSubtract(0, area)
    }

    cb(area)
    return area
}
```

И несколько функций-обёрток для исходного API.  
Обёртки берут исходные функции и промифицируют их.

### Пример

```js
function prSubtract(a, b) {
    return new Promise(resolve => {
        subtract(a, b, resolve)
    })
}
```

Функция `prSubtract`[Promised Subtract] возвращает Promise, который резолвится когда Homework.substract высчитает значение.  

### GUI

Чтобы работа была не совсем скучная накидал простой [GUI](https://doyouwannatea.github.io/shri-async-hw/) для расчёта площади треугольника.  
`P.S. на потрясающий UX не претендую 🙃`

## Бонусное задание  

Написал свои варианты функции `_allSettled`, `_any`, `_finally` с использованием async/await.  

Результаты лежат в папке `bonus`.  
