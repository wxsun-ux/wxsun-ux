/**
 * Created by zhengyeye on 2017/8/23.
 */
$(function () {
   'use strict';
    var sidebar = $('#sidebar'),//选择侧栏
         mask = $('.mask'),//选择mask
         sidebar_trigger = $('#sidebar_trigger'),//选择侧栏触发器
         backbutton = $('.back-to-top');//选择返回菜单
    function showSideBar() {//显示侧栏
        mask.fadeIn();//显示mask
        sidebar.css('transform','translate(0,0)');//调整侧栏相关的css
    }
    function hideSideBar() {//隐藏侧栏
        mask.fadeOut();//隐藏ask
        // sidebar.css('right',-sidebar.width());
        sidebar.css('transform','translate('+sidebar.width()+'px'+',0)');//调整侧栏相关的css
    }

    sidebar_trigger.on('click',showSideBar);//监听侧栏触发器点击事件
    mask.on('click',hideSideBar);//监听mask点击事件
    backbutton.on('click',function () {//监听返回按钮点击事件
        $('html,body').animate({scrollTop:0},800)
    });
    $(window).on('scroll',function () {//监听window scroll事件
        //如果已滚动的部分高于窗口的高度
        if($(window).scrollTop() > $(window).height()){
           backbutton.fadeIn();
        }else{
           backbutton.fadeOut();
        }
    });
    //触发scroll事件
    $(window).trigger('scroll');
});