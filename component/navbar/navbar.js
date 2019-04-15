// 顶端导航栏
Vue.component('navbar-component', 
{ 
    template: 
    "\
    <nav class='navbar navbar-expand-lg bg-light'> \
        <div class='container'> \
            <a href='index.html'><img class='logo' src='static/img/logo.png'></a> \
            <div class='collapse navbar-collapse' id='navbarSupportedContent'> \
                <ul class='navbar-nav mr-auto'> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='./index.html'>主站</a> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='#'>比赛</a> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='#'>直播</a> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='#'>周边</a> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='#'>会员</a> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='#'>关于</a> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='#'>下载工具</a> \
                    </li> \
                </ul> \
                <ul class='nav justify-content-end'> \
                    <li class='nav-item dropdown'> \
                        <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> \
                            <img width='30px' height='30px' src='static/img/profile.jpg' class='img-fluid rounded-circle'>  \
                        </a> \
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'> \
                            <h3 class='dropdown-item' style='text-align: center;'>'D20'</h3> \
                            <div class='dropdown-divider'></div> \
                            <a class='dropdown-item' href='user.html'>我的关注</a> \
                            <a class='dropdown-item' href='favorite.html'>我的收藏</a> \
                            <a class='dropdown-item' href='history.html'>我的历史</a> \
                            <div class='dropdown-divider'></div> \
                            <a class='dropdown-item' href='setting.html'>设置</a> \
                            <a class='dropdown-item' href='index.html'>注销</a> \
                        </div> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='message.html' data-toggle='tooltip' data-placement='bottom' title='消息中心'><i class='fa fa-bell'></i></a> \
                    </li> \
                    <li class='nav-item'> \
                        <a class='nav-link' href='broker.html' data-toggle='tooltip' data-placement='bottom' title='前往经纪人办公室'><i class='fa fa-user'></i></a> \
                    </li> \
                </ul> \
            </div> \
        </div> \
    </nav>"
})
