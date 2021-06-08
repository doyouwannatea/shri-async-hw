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
    await pushPr(operands, subtractPr(x2, x1))
    await pushPr(operands, subtractPr(y3, y1))
    await pushPr(operands, subtractPr(x3, x1))
    await pushPr(operands, subtractPr(y2, y1))

    const multipliedOperands = new AsyncArray([
        multiplyPr(await getPr(operands, 0), await getPr(operands, 1)),
        multiplyPr(await getPr(operands, 2), await getPr(operands, 3))
    ])

    const substracted = await subtractPr(
        await getPr(multipliedOperands, 0),
        await getPr(multipliedOperands, 1)
    )
    const area = await dividePr(substracted, 2)

    cb(area)
    return area
}
```

И несколько функций-обёрток для исходного API.  
Обёртки берут исходные функции и промифицируют их.

### Пример

```js
function subtractPr(a, b) {
    return new Promise(resolve => {
        subtract(a, b, resolve)
    })
}
```

Функция `subtractPr`[Subtract Promised] возвращает Promise, который резолвится когда Homework.substract высчитает значение.  

### GUI

Чтобы выполненная работа не была совсем скучная, накидал простой GUI для расчёта площади треугольника  
`P.S. на потрясающий UX не претендую 🙃`
