// 所有内容组件


/**
 * 个人关注内容组件
 */
Vue.component('subscription-component',
{
    template:
    "\
    <div class='card'> \
        <img class='card-img-top' src='static/img/idol.jpg' alt='Card image cap'> \
        <div class='card-body'> \
            <h5 class='card-title content-title'><a href='#'>CQU小薇</a></h5> \
            <p class='card-text'>该偶像的简单介绍</p> \
            <p class='card-text'><small class='text-muted'>3小时前更新</small></p> \
        </div> \
    </div> \
    "
})


/**
 * 个人订阅视频组件
 */
Vue.component('subscripted-video-component',
{
    template:
    "\
    <ul class='activity-list'> \
        <li class='activity-item'> \
            <div class='clearfix'> \
                <div class='l-head float-left'> \
                    <a class='l-head-profile' href='#'> \
                        <img src='static/img/profile.jpg' class='rounded-circle'> \
                    </a> \
                </div> \
                <div class='float-left'> \
                    <a class='l-head-name' href='#'>IGN中国</a> \
                    <div class='tags-list'> \
                        <a href='#'><i class='fa fa-tag'></i> 巫师3</a> \
                        <a href='#'><i class='fa fa-tag'></i> CDPR</a> \
                        <a href='#'><i class='fa fa-tag'></i> 单机游戏</a> \
                    </div> \
                </div> \
                <div class='float-right'> \
                    <div class='dropdown'> \
                        <a href='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> \
                            <i class='fa fa-ellipsis-v'></i> \
                        </a> \
                        <div class='dropdown-menu' aria-labelledby='navbarDropdown'> \
                            <a class='dropdown-item' href='#'>分享</a> \
                            <a class='dropdown-item' href='#'>删除</a> \
                        </div> \
                    </div> \
                </div> \
            </div> \
            <div class='content-link'> \
                <a href='#' class='clearfix'> \
                    <div class='rounded content-cover float-left'> \
                        <img src='static/img/video-cover.jpg'> \
                    </div> \
                    <div class='content-info float-left h-100'> \
                        <h6>波兰人的RPG巫师</h6> \
                        <p> \
                            《巫师》这款游戏在很多游戏网站的分类中都是“美式RPG”， \
                            这游戏咋看一眼也确实有着美式RPG的风貌。但是这却是一款地地道道的“波兰式”游戏， \
                            不论是主要角色的人物塑造，还是世界观设定中整个政治版图的分割，都默默的散发着 \
                            一种“非主流”的气息，那么这种气息从何而来？听听麦教授的分析 \
                        </p> \
                    </div> \
                    <div class='content-btn-list'> \
                        <p><i class='fa fa-heart-o'></i> 17</p> \
                        <p><i class='fa fa-commenting-o'></i> 17</p> \
                        <p><i class='fa fa-share-square-o'></i> 17</p> \
                        <p><i class='fa fa-thumbs-o-up'></i> 17</p> \
                        <p><i class='fa fa-thumbs-o-down'></i> 17</p> \
                    </div> \
                </a> \
            </div> \
        </li> \
    </ul> \
    "
})



