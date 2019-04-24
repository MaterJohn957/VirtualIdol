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


//数据统计图表
var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = $('#myChart');
var ctx = 'myChart';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});