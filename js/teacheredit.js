/**
 * Created by guochao on 2017/7/1.
 */
define(['jquery','text!teacher/teacheredit.html','template','bootstrap','boostrap_date'],function($,htm,tpl){

     return function($this){
         //console.log($this);
         //$(htm).appendTo('body').modal();
         $('.mymodal').remove();
         $.ajax({
             type:'get',
             url:'/api/teacher/edit',
             data:{
                 tc_id: $($this).parent().attr('id')
             },
             success:function(data){
                 //console.log(data);
                 var str = tpl.render(htm,data.result);

                 var node = $(str).appendTo('body')
                     .on('submit',function(e){
                         e.preventDefault();
                         var formdata = $('form').serialize();
                         //console.log(formdata);
                         /////ajax提交修改内容；
                         $.ajax({
                             type:'post',
                             url:'api/teacher/update',
                             data:formdata,
                             success:function(data){
                                 console.log(data);
                                 node.modal('hide');
                                 $('.datetimepicker').remove();
                                 $('aside>.list-group>button').eq(0).trigger('click');
                             }
                         })

                     })
                     .modal();

                 /////添加日期组件

                 $('.tc_join_date').datetimepicker({
                     format: 'yyyy-mm-dd',
                     language:'zh-CN',
                     todayHighlight:true,
                     autoclose:true,
                     minView:2,
                     todayBtn:true


                 });


             }
         })


     }



})