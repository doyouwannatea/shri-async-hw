import {
    prDivide,
    prMultiply,
    prSubtract,
} from './PromisedHomework/binary.js'
import { prPush, prGet } from './PromisedHomework/array.js'
const { AsyncArray } = Homework

/**
 * Асинхронно вычисляет площадь треугольника.  
 * Формула: ((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)) / 2
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @param {number} x3 
 * @param {number} y3 
 * @param {number} cb 
 */
export default async function calcTriangleArea(x1, y1, x2, y2, x3, y3, cb) {
    // Это переменные (x2 - x1), (y3 - y1), (x3 - x1), (y2 - y1)
    const operands = new AsyncArray()
    await prPush(operands, prSubtract(x2, x1))
    await prPush(operands, prSubtract(y3, y1))
    await prPush(operands, prSubtract(x3, x1))
    await prPush(operands, prSubtract(y2, y1))

    // Это перемноженные переменные из формулы
    const multipliedOperands = new AsyncArray([
        prMultiply(await prGet(operands, 0), await prGet(operands, 1)),
        prMultiply(await prGet(operands, 2), await prGet(operands, 3))
    ])

    // Это тоже по формуле
    const substracted = await prSubtract(
        await prGet(multipliedOperands, 0),
        await prGet(multipliedOperands, 1)
    )

    // Деление на 2 по формуле
    let area = await prDivide(substracted, 2)

    cb(area)
    return area
}