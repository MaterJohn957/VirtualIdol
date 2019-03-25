// 用户名片
Vue.component("user-card-component",
{
    template:
    ' \
    <div class="userinfo-card"> \
        <div class="user-bg"></div> \
        <div class="user-detail"> \
            <div class="user-profile"> \
                <a href="#"> \
                    <img src="static/img/profile-big.jpg" class="img-fluid rounded-circle"> \
                </a> \
            </div> \
            <div class="user-nane"> \
                <a href="#">普通用户李劲言</a> \
                <div class="user-intro"><i>Love playing.....</i></div> \
            </div> \
            <br><br> \
            <div class="clearfix"> \
                <div class="float-left user-focuson"> \
                    <a href="#">关注</a> \
                    <p>12</p> \
                </div> \
                <div class="float-left user-fans"> \
                    <a href="#">粉丝</a> \
                    <p>12</p> \
                </div> \
            </div> \
            <a href="setting.html"><button type="button" style="width:100%;" class="btn">设置中心</button></a> \
            <div class="divided-line"></div> \
            <p class="user-email"><i class="fa fa-envelope-o"></i> <i>794486346@qq.com</i></p> \
        </div> \
    </div> \
    '
})
