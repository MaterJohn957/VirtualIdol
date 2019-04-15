Vue.component('history-record-component',
{
    template:
    '\
    <li class="history-item clearfix"> \
        <div class="h-100 l-info float-left"> \
            <i class="fa fa-caret-right text text"></i> \
            <p class="text text-time">2018-10-6 14:51</p> \
        </div> \
        <div class="h-100 r-info float-right"> \
            <div class="media"> \
                <a href="#" class="align-self-start mr-3"> \
                    <img class="rounded" src="static/img/profile.jpg"> \
                </a> \
                <div class="media-body"> \
                    <a href="#" class="title">Top-aligned media</a> \
                    <a href="#" class="author"> \
                        <img class="rounded-circle" src="https://i0.hdslb.com/bfs/face/ab85323352b2af52e7a5477cd963d5da98fdab4e.jpg@20w_20h.webp"> \
                        <p>皇族电子竞技俱乐部</p> \
                    </a> \
                    <a href="#" class="float-right trash-btn" data-toggle="tooltip" data-placement="right" title="删除这条浏览记录"> \
                        <i class="fa fa-trash"></i> \
                    </a> \
                </div> \
            </div> \
        </div> \
    </li> \
    '
})