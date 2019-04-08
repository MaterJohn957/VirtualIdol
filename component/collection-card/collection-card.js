Vue.component('collection-card-component',
{
    template:
    "\
    <div> \
        <a href='#'> \
            <img class='card-img-top' src='https://i0.hdslb.com/bfs/archive/e1754d964b06887322e17bfb9bdcb34dfaa2cbd5.jpg@380w_240h_100Q_1c.webp' alt='Card image cap'> \
            <div class='card-body'> \
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> \
            </div> \
        </a> \
        <div class='item-bottom clearfix'> \
            <div class='float-left'>收藏于<span>2018-10-9</span></div> \
            <div class='float-right'> \
                <div class='dropdown'> \
                    <a href='#' role='button' \
                    data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> \
                        <i class='fa fa-ellipsis-v'></i> \
                    </a> \
                    <div class='dropdown-menu' aria-labelledby='navbarDropdown'> \
                        <a class='dropdown-item' href='#'>取消收藏</a> \
                        <a class='dropdown-item' href='#'>移动到</a> \
                    </div> \
                </div> \
            </div> \
        </div> \
    </div> \
    "
})
