import './app3.css'
import $ from 'jquery'

const $sq =$('#app3 .square')
$sq.on('click',()=>{
    $sq.toggleClass('active')
})