/**
 * Created by guochao on 2017/7/2.
 */
define(['jquery','text!teacher/coursemanageEdit.html','template','bootstrap','boostrap_date'],function($,htm,tpl){

      return function(){
          console.log(htm);
          $('section>.maincont').empty().html(htm);

      }



})