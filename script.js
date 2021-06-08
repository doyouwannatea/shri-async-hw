import calcTriangleArea from './calcTriangleArea.js'

const x1El = document.getElementById('x1')
const y1El = document.getElementById('y1')

const x2El = document.getElementById('x2')
const y2El = document.getElementById('y2')

const x3El = document.getElementById('x3')
const y3El = document.getElementById('y3')

const submitBtnEl = document.getElementById('submit-btn')
const areaResultEl = document.getElementById('area-result')

const canvasEl = document.getElementById('canvas')

const ctx = canvasEl.getContext('2d')
const canvasWidth = canvasEl.width = canvasEl.parentElement.offsetWidth
const canvasHeight = canvasEl.height = canvasEl.parentElement.offsetHeight

function printArea(area) {
    console.log(`Площадь = ${area}`)
    areaResultEl.innerHTML = `<h5>Площадь = <b>${area}</b></h5>`
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    ctx.strokeStyle = '#333'

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    ctx.lineTo(x1, y1)
    ctx.stroke()
}

submitBtnEl.addEventListener('click', e => {
    e.preventDefault()
    const x1 = x1El.value
    const y1 = y1El.value

    const x2 = x2El.value
    const y2 = y2El.value

    const x3 = x3El.value
    const y3 = y3El.value

    drawTriangle(x1, y1, x2, y2, x3, y3)
    calcTriangleArea(x1, y1, x2, y2, x3, y3, printArea)
})
