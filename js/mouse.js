/**
 *自定义鼠标右键小插件
 **/
var kyomouseMenu = {};
kyomouseMenu = (function () {
    return {
        sys: function (obj) {
            $('.mouse_menu').remove();
            // 定义菜单事件
            var munehtml='<div class="mouse_menu app-menu"><ul>' +
                '<li><a menu="menu1" target="_blank">小望云</a></li>' +
                '<li><a menu="menu2" target="_blank">北屋博客</a></li>' +
                '<li><a menu="menu3" target="_blank">望云小游戏</a></li>' +
                '<li><a menu="menu4" target="_blank">雁过留声</a></li>' +
                '</ul></div>';
            mouseMenuApp = $(munehtml)
                .find('a').attr('href', 'javascript:;')
                .end().appendTo('body');
            //绑定事件
            $('.app-menu a[menu="menu1"]').on('click', function () {
                window.location.href="http://www.xiaowangyun.com";
            });
            $('.app-menu a[menu="menu2"]').on('click', function () {
                window.location.href ="http://www.xiaowangyun.com/wyblog";
            });
            $('.app-menu a[menu="menu3"]').on('click', function () {
                window.location.href="http://h5.xiaowangyun.com/games";
            });
            $('.app-menu a[menu="menu4"]').on('click', function () {
                window.location.href="http://www.xiaowangyun.com/wyleavemsg";
            });
            return mouseMenuApp;
        }
    }
})();
//取消系统默认右键
$('html').on('contextmenu', function () {
    return false;
}).click(function () {
    $('.mouse_menu').hide();
});
//界面右击
$('html').on('contextmenu', function (e) {
    var mousemenu = kyomouseMenu.sys();
    //没有滚动条可行
    // l = ($(document).width() - e.clientX) < mousemenu.width() ? (e.clientX - mousemenu.width()) : e.clientX;
    // t = ($(document).height() - e.clientY) < mousemenu.height() ? (e.clientY - mousemenu.height()) : e.clientY;

    //当滑动滚动条时也能准确获取菜单位置
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var l=e.clientX+"px";
    var t=e.clientY+scrollTop+"px";
    mousemenu.css({left: l, top: t}).show();
    return false;
});