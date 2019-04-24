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


//////////////////////////////////////////////////////////数据统计图表//////////////////////////
// 视频播放数据
var browseChart = echarts.init(document.getElementById('browse-line'));

var option = {
    title: {
        text: '视频播放数据'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'播放量',
        data: [820, 932, 901, 934, 1290, 1330, 1200, 930, 1020],
        type: 'line',
        // 折线颜色
        itemStyle: {
            normal: {
                color: '#33CCFF',
                lineStyle: {
                    color: '#33CCFF'
                }
            }
        },
        areaStyle: {}
    }]
};
// 使用刚指定的配置项和数据显示图表。
browseChart.setOption(option);

//视频收藏数据
var favoriteChart = echarts.init(document.getElementById('favoriteNumber-line'));

var option = {
    title: {
        text: '视频收藏数据'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'播放量',
        data: [820, 932, 901, 934, 1290, 1330, 1200, 930, 1020],
        type: 'line',
        // 折线颜色
        itemStyle: {
            normal: {
                color: '#33CCFF',
                lineStyle: {
                    color: '#33CCFF'
                }
            }
        },
        areaStyle: {}
    }]
};
favoriteChart.setOption(option);

//观众留存率
var viewChart = echarts.init(document.getElementById('viewLost-line'));

var option = {
    title: {
        text: '观众留存率'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25', '2019/4/25']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'播放量',
        data: [820, 932, 901, 934, 1290, 1330, 1200, 930, 1020],
        type: 'line',
        // 折线颜色
        itemStyle: {
            normal: {
                color: '#33CCFF',
                lineStyle: {
                    color: '#33CCFF'
                }
            }
        },
        areaStyle: {}
    }]
};
viewChart.setOption(option);


//内容管理部分变化
// 点击视频管理
$('[href="#manage-video"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-video"]').addClass("active");
})

// 点击音乐管理
$('[href="#manage-music"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-music"]').addClass("active");
})

// 点击轻小说管理
$('[href="#manage-novel"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-novel"]').addClass("active");
})

// 点击图库管理
$('[href="#manage-pic"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-pic"]').addClass("active");
})
