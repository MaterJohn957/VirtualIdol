/**
 * Vue 代码
 */
new Vue({ el: '#navbar' })

new Vue(
    {
        el:"#idol-studio-card",
        data:{
            idolcards:[
                {idolcard:''},
                {idolcard:''},
                {idolcard:''},
                {idolcard:''},
                {idolcard:''},
                {idolcard:''},
                {idolcard:''},
                {idolcard:''},
            ]
        }
    }
)


/**
 * 自动轮播时间设为2秒
 */
$('.carousel').carousel({
    interval: 2000
})



/**
 * 视频部分文字显示
 */
// function overShow() {
//     var showDiv = document.getElementById('showDiv');
//     showDiv.style.left = event.clientX;
//     showDiv.style.top = event.clientY;
//     showDiv.style.display = 'block';
//     showDiv.document.writeln("<div class=\'video-card-title\'>卡莎</div>");
// }
// function outHide() {
//     var showDiv = document.getElementById('showDiv');
//     showDiv.style.display = 'block';
//     showDiv.innerHTML = '';
// }
