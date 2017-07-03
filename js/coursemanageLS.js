/**
 * Created by guochao on 2017/7/2.
 */
define(['jquery', 'text!teacher/coursemanageLS.html','template','coursemanageEdit'],function($,htm,tpl,coursemanageEd){
    return function(){
        $('section>.maincont').empty();
        $.ajax({
            type:'get',
            url:'/api/course',
            success:function(data){
                console.log(data);
                //console.log(htm);
                var str = tpl.render(htm,data.result);
                //console.log(str);
                ///////µã»÷±à¼­·ÖÀà
                var node =$(str).on('click','.btedit',function(){
                ////    $this = this;

                    coursemanageEd();
                ////}).on('click','.btnadd',function(){
                ////    coursesAD();
                });

                $('section>.maincont').html(node);
            }
        })

    }
})