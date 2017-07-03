/**
 * Created by guochao on 2017/6/30.
 */
require.config({
    baseUrl:'js/',
    paths:{
        jquery:'lib/jquery-3.2.1.min',
        cookie:'lib/jquery.cookie',
        bootstrap:'../assets/bootstrap/js/bootstrap.min',
        text:'lib/text',
        teacher:'../tpls',
        template:'lib/template-web',
        boostrap_date:'../assets/boostrap_date/js/bootstrap-datetimepicker'

    },
    shim:{   /////shim中写入依赖向
        bootstrap:{
            deps:['jquery']
        },
        cookie:{
            deps:['jquery']
        }
    }
})

require(['jquery','courseClass','coursemanageLS','cookie','teacherlast'],function($,courseCl,courseMgLs){

    if(!$.cookie().info){
        window.location.href='../login.html';
    }
    var data = JSON.parse($.cookie().info);
    $('.pict>img').attr('src',data.tc_avatar);

    $('aside>.list-group>button').eq(0).trigger('click');


    /////课程管理
    $('aside>.list-group').on('click', 'button:nth-child(2)', function () {

        courseMgLs();

    })





    /////课程分类
    $('aside>.list-group').on('click', 'button:nth-child(7)', function () {
        //console.log(44444444);
        courseCl();

    })
})