/**
 * Vue 代码
 */
new Vue({ el: '#navbar' })


$(function(){


    // 检测滚动条位置
    var scroH = $(document).scrollTop();
    if(scroH < 300){
        $("#nav-left").css("display", "none");
        $("#navbar").css("display","none");
    }
    if(scroH > 300){
        $("#nav-left").css("display", "block");
        $("#navbar").css("display","block");
    }

    // 初始化小说列表
    for(var i=1; i<=10 ;i++){
        var novelItem = '.novel-item[data-target="' + i + '"]';
        $(novelItem).find(".novel-item-num").text(i);
        if(i === 1){
            $('.novel-item').find(".novel-cover").css("display","none");
            $('.novel-item').find(".author").css("display","block");
        
            $(novelItem).find(".novel-cover").css("display","block");
            $(novelItem).find(".author").css("display","none");
            $(novelItem).find(".novel-item-num").css({"backgroundColor":"#e91b1b","color":"#fff"});
            continue;
        }
        if(i=== 2){
            $(novelItem).find(".novel-item-num").css({"backgroundColor":"#fc770a","color":"#fff"});
            continue;
        }
        if(i===3){
            $(novelItem).find(".novel-item-num").css({"backgroundColor":"#fffb00","color":"#fff"});
            continue;
        }
    }

})

// 监听页面滚动事件
$(document).scroll(function(){
    scroH = $(document).scrollTop();
    if(scroH < 300){
        $("#nav-left").css("display", "none")
        $("#navbar").css({"display":"none"})
    }
    if(scroH > 300){
        $("#nav-left").css("display", "block")
        $("#navbar").css("display","block")
    }
})

// 点击分区导航
$(".header-nav-item a").click(function(){
    var goto = $(this).attr("data-target")
    var offset = $(goto).offset().top - 15
    $("html,body").animate({scrollTop:offset},500)
})

// 推广部分音乐封面的变化
$(".songList-list-item-coverPic").hover(function(){
    $(this).find(".cover-play-icon").animate({opacity:"0.9", padding:"6px"},500);
},
function(){
    $(this).find(".cover-play-icon").animate({opacity:"0", padding:"10px"},300);
})


//推广视频部分封面变化
$(".video-cover-change").hover(function(){
    $(this).find(".cover-overlay-black").css("display","block");
    $(this).find(".cover-play-btn").animate({opacity:"0.9", padding:"15px"},200);
},
function(){
    $(this).find(".cover-overlay-black").css("display","none");
    $(this).find(".cover-play-btn").animate({opacity:"0", padding:"20px"},200);
})

// 鼠标进入音乐榜区
$("#tf-music").hover(function(){
    $(this).find(".left-btn").animate({left:"0"},500);
    $(this).find(".right-btn").animate({right:"0"},500);
},
function(){
    $(this).find(".left-btn").animate({left:"-100px"},500);
    $(this).find(".right-btn").animate({right:"-100px"},500);
})

// 音乐部分导航变换
$("#music-tab-hot").click(function(){
    $("#music-tab-new").removeClass("tab-on");
    $(this).addClass("tab-on");
})

$("#music-tab-new").click(function(){
    $("#music-tab-hot").removeClass("tab-on");
    $(this).addClass("tab-on");
})

// 音乐封边的变化
$(".music-cover").hover(function(){
    $(this).find(".cover-overlay-black").css("display","inline");
    $(this).find(".cover-play-icon").animate({opacity:"0.9", padding:"25px"},250);
    $(this).find(".music-cover-img").animate({width:"90px",height:"90px",marginTop:"-5px",marginLeft:"-5px"},250);
},
function(){
    $(this).find(".cover-overlay-black").css("display","none");
    $(this).find(".cover-play-icon").animate({opacity:"0", padding:"30px"},250);
    $(this).find(".music-cover-img").animate({width:"80px",height:"80px",marginTop:"0px",marginLeft:"0px"},250);
})


// 鼠标移动到小说列表中的一个元素上时
$("#column-1 .novel-item").mouseenter(function(){
    $("#column-1 .novel-item").removeClass("novel-on");
    $(this).addClass("novel-on");

    $('#column-1 .novel-item').find(".novel-cover").css("display","none");
    $('#column-1 .novel-item').find(".author").css("display","block");

    $(this).find(".novel-cover").css("display","block");
    $(this).find(".author").css("display","none");
})
$("#column-2 .novel-item").mouseenter(function(){
    $("#column-2 .novel-item").removeClass("novel-on");
    $(this).addClass("novel-on");

    $('#column-2 .novel-item').find(".novel-cover").css("display","none");
    $('#column-2 .novel-item').find(".author").css("display","block");

    $(this).find(".novel-cover").css("display","block");
    $(this).find(".author").css("display","none");
})
$("#column-3 .novel-item").mouseenter(function(){
    $("#column-3 .novel-item").removeClass("novel-on");
    $(this).addClass("novel-on");

    $('#column-3 .novel-item').find(".novel-cover").css("display","none");
    $('#column-3 .novel-item').find(".author").css("display","block");

    $(this).find(".novel-cover").css("display","block");
    $(this).find(".author").css("display","none");
})



// 画廊的脚本
$(".card-head-custom").hover(function(){
    $(this).find(".card-img-overlay-black").css("display","block");
    $(this).find(".card-img-overlay-eye").css("display","flex");
    $(this).find(".eye-f-background").animate({width:"90px",height:"90px"},200);
},function(){
    $(this).find(".card-img-overlay-black").css("display","none");
    $(this).find(".card-img-overlay-eye").css("display","none");
    $(this).find(".eye-f-background").animate({width:"75px",height:"75px"},200);
})

$(".card-head-custom").click(function(){
    var imgUrl = $(this).find(".gallery-image").attr("src");
    $("#view-image-detail").attr("src", imgUrl);
})

// 返回顶部的按钮
$("#nav-left-backtop a").hover(function(){
    $(this).css({"backgroundColor":"#d2e9fb","color":"#fff"})
},function(){
    $(this).css({"backgroundColor":"#fff","color":"#ccc"})
})

$("#nav-left-backtop a").click(function(){
    $("html,body").animate({scrollTop:0},500);
})
