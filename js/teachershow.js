/**
 * Created by guochao on 2017/6/30.
 */
////查看讲师详细信息；
define(['jquery','text!teacher/teachershow.html','template','bootstrap'],function($,htm,tpl){
    //console.log($);

    return function($this){

        //var str = tmp.render(htm,);
        $.ajax({
            type:'get',
            url:'/api/teacher/view',
            data:{
                tc_id:$($this).parent().attr('id')
            },
            success:function(data){
                //console.log(data);

               var str = tpl.render(htm,data.result);
                $('.viewCover').remove();
                $(str).appendTo('body').modal();

            }
        })
    }
})