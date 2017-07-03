/**
 * Created by guochao on 2017/7/2.
 */
define(['jquery', 'text!teacher/courseClass.html','template','courseshow','coursesadd'],function($,htm,tpl,courseSh,coursesAD){
    return function(){
        $('section>.maincont').empty();
        $.ajax({
            type:'get',
            url:'/api/category',
            success:function(data){
                console.log(data);
                var str = tpl.render(htm,data.result);
                /////点击编辑分类
                var node =$(str).on('click','td:last-child>button',function(){
                    $this = this;
                    courseSh();
                }).on('click','.btnadd',function(){
                    coursesAD();
                });

                $('section>.maincont').html(node);
            }
        })

    }
})




