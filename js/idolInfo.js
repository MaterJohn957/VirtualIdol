$(function(){
    /**
     * 获取图片url
     */
    function getObjectURL(file) 
    {
        var url = null ;
        if (window.createObjectURL!=undefined) 
        {   // basic
            url = window.createObjectURL(file) ;
        }
        else if (window.URL!=undefined) 
        {
            // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } 
        else if (window.webkitURL!=undefined) {
            // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }

    /**
     * 预览图片
     */
    $('.upload').change(function(){
        var imgUrl = getObjectURL(this.files[0]);
        console.log(imgUrl);
        if(imgUrl){
            var htmlStr = "<div class=\"img-wrap\">"+
            "<span class=\"img-delete\">删除图片</span>"+
            "<img src=\""+imgUrl+"\" class=\"img-style\"></div>";
            /*添加html代码*/
            $('#img-show').html(htmlStr);
        }
    })

    /**
     * 删除图片
     */
    $('*').on("click",".img-delete",function(){
        $('#img-show').empty();
    })

    /**
     * 删除按钮滑动
     */
    $('*').on("mouseenter",".img-wrap",function(){
        $('.img-delete').slideDown();
    })
    $('*').on("mouseleave",".img-wrap",function(){
        $('.img-delete').slideUp();
    })

})