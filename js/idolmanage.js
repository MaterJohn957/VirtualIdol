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
    //点击非内容管理的内容时，内容管理部分所有的东西都不能出现
    $('#manage-bottom-video').addClass("manage-hiden")
    $('#manage-bottom-music').addClass("manage-hiden")
    $('#manage-bottom-novel').addClass("manage-hiden")
    $('#manage-bottom-pic').addClass("manage-hiden")
})

// 点击上传作品
$(".upload-works").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#upload-right-content").css("display","block")
    //点击非内容管理的内容时，内容管理部分所有的东西都不能出现
    $('#manage-bottom-video').addClass("manage-hiden")
    $('#manage-bottom-music').addClass("manage-hiden")
    $('#manage-bottom-novel').addClass("manage-hiden")
    $('#manage-bottom-pic').addClass("manage-hiden")
})

// 点击数据中心
$("#data-center").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#data-right-content").css("display","block")
    //点击非内容管理的内容时，内容管理部分所有的东西都不能出现
    $('#manage-bottom-video').addClass("manage-hiden")
    $('#manage-bottom-music').addClass("manage-hiden")
    $('#manage-bottom-novel').addClass("manage-hiden")
    $('#manage-bottom-pic').addClass("manage-hiden")
})

// 点击内容管理
$("#works-management").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#works-right-content").css("display","block")
    //点击内容管理时，显示内容管理中的视频管理的内容
    $('#manage-bottom-video').removeClass("manage-hiden")
})

// 点击粉丝管理
$("#fans-management").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#fans-right-content").css("display","block")
    //点击非内容管理的内容时，内容管理部分所有的东西都不能出现
    $('#manage-bottom-video').addClass("manage-hiden")
    $('#manage-bottom-music').addClass("manage-hiden")
    $('#manage-bottom-novel').addClass("manage-hiden")
    $('#manage-bottom-pic').addClass("manage-hiden")
})

// 点击评论管理
$("#comments-management").click(function(){
    $(".nav-left-item").removeClass("left-item-on")
    $(this).find("a").addClass("left-item-on")
    $(".content-right-item").css("display","none")
    $("#comments-right-content").css("display","block")
    //点击非内容管理的内容时，内容管理部分所有的东西都不能出现
    $('#manage-bottom-video').addClass("manage-hiden")
    $('#manage-bottom-music').addClass("manage-hiden")
    $('#manage-bottom-novel').addClass("manage-hiden")
    $('#manage-bottom-pic').addClass("manage-hiden")
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
        itemStyle: {
            normal: {
                color: '#33CCFF',
                lineStyle: {
                    color: '#0099e8'
                }
            }
        },
        areaStyle: {}
    }]
};
browseChart.setOption(option);

//偶像关注来源饼图
var playSourceChart = echarts.init(document.getElementById('playSource-circle'));
option = {
    title: {
        text: '偶像关注来源',
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        y : 'center',
        data:['Android','iPhone','PC','H5','小程序','站外']
    },
    // toolbox: {
    //     show : true,
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         magicType : {
    //             show: true, 
    //             type: ['pie', 'funnel'],
    //             option: {
    //                 funnel: {
    //                     x: '25%',
    //                     width: '50%',
    //                     funnelAlign: 'left',
    //                     max: 1548
    //                 }
    //             }
    //         },
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {
                    value:998,
                    name:'Android',
                    itemStyle: {color: 'rgb(126,185,238)'},
                },
                {
                    value:310,
                    name:'iPhone',
                    itemStyle: {color: 'rgb(144,237,238)'},
                },
                {
                    value:335,
                    name:'PC',
                    itemStyle: {color: 'rgb(250,223,61)'},
                },
                {
                    value:135,
                    name:'H5',
                    itemStyle: {color: 'rgb(245,152,55)'},
                },
                {
                    value:126,
                    name:'小程序',
                    itemStyle: {color: 'rgb(137,216,125)'},
                },
                {
                    value:233,
                    name:'站外',
                    itemStyle: {color: 'rgb(242,89,64)'},
                },
            ]
        }
    ]
};
playSourceChart.setOption(option);

//偶像关注数据
var favoriteChart = echarts.init(document.getElementById('favoriteNumber-line'));

var dataAxis = ['小薇', '小娜', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小薇', '小爱'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option = {
    title: {
        text: '偶像关注数据'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#33CCFF'},
                            {offset: 0.5, color: '#00a9e8'},
                            {offset: 1, color: '#0099e8'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#00a8ff'},
                            {offset: 0.7, color: '#0f8ccc'},
                            {offset: 1, color: '#0f7fa9'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};
var zoomSize = 6;
favoriteChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});
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
/////////////////////////////数据统计图表到此为止///////////////////////////////




//内容管理部分变化
// 点击视频管理
$('[href="#manage-video"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-video"]').addClass("active");
    $('.manage-bottom').addClass("manage-hiden");
    $('#manage-bottom-video').removeClass("manage-hiden");
})

// 点击音乐管理
$('[href="#manage-music"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-music"]').addClass("active");
    $('.manage-bottom').addClass("manage-hiden");
    $('#manage-bottom-music').removeClass("manage-hiden");
})

// 点击轻小说管理
$('[href="#manage-novel"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-novel"]').addClass("active");
    $('.manage-bottom').addClass("manage-hiden");
    $('#manage-bottom-novel').removeClass("manage-hiden");
})

// 点击图库管理
$('[href="#manage-pic"]').click(function(){
    $("#tab-container a").removeClass('active');
    $('[href="#manage-pic"]').addClass("active");
    $('.manage-bottom').addClass("manage-hiden");
    $('#manage-bottom-pic').removeClass("manage-hiden");
})
