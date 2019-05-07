/**
 * Vue 代码
 */
new Vue({ el: '#navbar' })


/**
 * 收藏和点赞按钮的点击特效
 */
$('#collect').click(function() {
    // alert(000);
    $("#collect").addClass("novel-tool-item-clicked")
})
$('#thumb').click(function() {
    // alert(000);
    $("#thumb").addClass("novel-tool-item-clicked")
})