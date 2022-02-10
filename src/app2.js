import './app2.css'
import $ from 'jquery'

const $head=$('#app2 .tab-bar')
const $body=$('#app2 .tab-content')

$head.on('click','li',e=>{
    const $li=$(e.currentTarget)
    $li.addClass('color')
        .siblings()
        .removeClass('color')
    const $index=$li.index()
    $body .children()
        .eq($index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})
//默认就打开第一个
$head.children().eq(0).trigger('click')