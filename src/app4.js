import './app4.css'
import $ from 'jquery'

const $cr=$('#app4 .circle')
$cr.on('mousemove',()=>{
    $cr.addClass('active')
})
$cr.on('mouseout', () => {
    $cr.removeClass('active')
})