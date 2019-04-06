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
 * 视频部分轮播效果
 */
