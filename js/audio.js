/**
 * Vue 代码
 */
new Vue({ el: '#navbar' })


/**
 * 点击播放按钮后播放时间和进度条的控制代码
 */
var h=m=s=ms= 0;
var time=0;
 
function timer(){
    ms=ms+50;
    if(ms>=1000){
        ms=0;
        s=s+1;
    }
    if(s>=60){
        s=0;
        m=m+1;
    }
    if(m>=60){
        m=0;
        h=h+1;
    }
    str =toDub(m)+":"+toDub(s);
    mytime = document.getElementById('current-time');
    mytime.innerHTML = str;

    var long = s+60*m;
    $(".bar").css("left",long);

    var circle = (ms+1000*s+60000*m)/200;
    $(".audio-profile").animate({},function(){
        var str = 'rotate(' + circle +'deg)';
        $(".audio-profile").css({'transform':str});
    })

}
var i = 180;
$("#play-song").click(function() {
    time=setInterval(timer,50);
    
})

//补0
function toDub(n){
    if(n<10){
        return "0"+n;
    }
    else {
        return ""+n;
    }
}


/**
 * 收藏按钮的点击特效
 */
$('#collect-song').click(function() {
    document.getElementById('collect-song').innerHTML='<div class="txt-center-clicked"><i class="fa fa-heart"></i>&nbsp;&nbsp;已收藏</div>';
})