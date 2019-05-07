/**
 * Vue 代码
 */
new Vue({ el: '#navbar' })


/**
 * 点击播放按钮后小球的移动控制代码
 */
function playMusic() {
    document.getElementById('current-time').value=c
    c=c+1
    t=setTimeout("timedCount()",1000)
}