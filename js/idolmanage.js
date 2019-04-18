new Vue({ el: '#navbar' })

$(function(){
    $("#data-right-content").css("display","block")
})

// 点击左侧导航相应的右侧内容变换的事件
// 点击头像
$(".idol-profile").hover(function(){
    $(this).find(".idol-img-black-overlay").css("display","flex")
},function(){
    $(this).find(".idol-img-black-overlay").css("display","none")
})
$(".idol-profile").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#info-right-content").css("display","block")
})

// 点击上传作品
$(".upload-works").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#upload-right-content").css("display","block")
})

// 点击数据中心
$("#data-center").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#data-right-content").css("display","block")
    
})

// 点击作品管理
$("#works-management").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#works-right-content").css("display","block")
})

// 点击粉丝管理
$("#fans-management").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#fans-right-content").css("display","block")
})

// 点击评论管理
$("#comments-management").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#comments-right-content").css("display","block")
})