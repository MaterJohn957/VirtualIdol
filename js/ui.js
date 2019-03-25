
var pause = false;
var ready = false;

//通过设置pause = true 执行 render函数中 if（pause）语句 传入时间差0来实现动作暂停（一直渲染前时间差下的帧） 并不是真正的暂停 设置doAnimatio = false;可以达到暂停效果 但pmx文件用此方法，模型或出现错误  
function mmdPlayOrPause(){
    
    this.play = function (){
        ready = true;
        pause = false;
        helper.audioManager.audio.play();
        helper.doAnimation = true;
        $(".play-btn i").attr("class","fa fa-pause");
    };
    this.pause = function (){
        ready = false;
        pause = true;
        helper.audioManager.audio.pause();
        helper.doAnimation = false;
        $(".play-btn i").attr("class","fa fa-play");
    };
    this.check = function(){
        if( $(".play-btn i").attr("class") == "fa fa-pause" ){
            this.pause();
        }else{
            this.play();
        }
    };

            
}

var checkBtn = new mmdPlayOrPause();
$(".play-btn").click(function (){ 
           
    // if($("#begainPlayBtn").attr("class") == "glyphicon glyphicon-play")$("#closeAlertBtn").trigger("click");
        checkBtn.check();

})



//镜头控制------------------------------------
$(".camera-control-btn").click(function(){
    if(helper.doCameraAnimation)
        helper.doCameraAnimation = false;
    else
        helper.doCameraAnimation = true;
})

//控制全屏------------------------------------
$(".full-screen-btn").click(function(){
    if(isFullscreen()){
        exitFullscreen();
    }
    else{
        requestFullScreen();
    }
})


