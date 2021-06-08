import {
    dividePr,
    multiplyPr,
    subtractPr
} from './PromisedHomework/binary.js'
import { pushPr, getPr } from './PromisedHomework/array.js'
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