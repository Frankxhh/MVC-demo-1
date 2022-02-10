import './app1.css'
import $ from 'jquery'

const $number = $('#number')
const $add1 = $('#add1')
const $minus1 = $('#minus1')
const $mul2 = $('#mul2')
const $divide2 = $('#divide2')
const n1 = localStorage.getItem('n')
$number.text(n1 || 100)
let n = parseInt($number.text())

$add1.on('click', () => {
    n += 1
    localStorage.setItem('n', n)
    $number.text(n)
})

$minus1.on('click', () => {
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
})

$mul2.on('click', () => {
    n *= 2
    localStorage.setItem('n', n)
    $number.text(n)
})

$divide2.on('click', () => {
    n /= 2
    localStorage.setItem('n', n)
    $number.text(n)
})