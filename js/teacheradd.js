/**
 * Created by guochao on 2017/7/2.
 */
/**
 * Created by guochao on 2017/7/1.
 */
define(['jquery','text!teacher/teacheradd.html','template','bootstrap','boostrap_date'],function($,htm,tpl){

    return function() {
            //console.log(data);
            var node = $(htm).on('submit',function(e){
                    e.preventDefault();
                    var formdata = $('form').serialize();
                    //console.log(formdata);
                    ///ajax提交修改内容；
                    $.ajax({
                        type:'post',
                        url:'api/teacher/add',
                        data:formdata,
                        success:function(data){
                            console.log(data);
                            node.modal('hide');
                            $('aside>.list-group>button').eq(0).trigger('click');


                        }
                    })

                }).appendTo('body').modal();

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