/**
 * Created by guochao on 2017/7/2.
 */

define(['jquery','text!teacher/coursesadd.html','template','bootstrap'],function($,htm,tpl){
    return function() {
        //console.log($this);
        //$(htm).appendTo('body').modal();
        $('.mymodal').remove();
        $.ajax({
            type:'get',
            url:'/api/category/top',
            success:function(data){
               var str =tpl.render(htm,data.result);
                var node=$(str).on('submit',function(e){
                    e.preventDefault();
                    var formdata = $('form').serialize();
                    $.ajax({
                        type:'post',
                        url:'/api/category/add',
                        data:formdata,
                        success:function(a){
                            //console.log(a);
                            node.modal('hide');
                            $('aside>.list-group>button').eq(6).trigger('click');
                        }
                    })


                }).appendTo('body').modal();

            }
        })

        //    $.ajax({
        //        type:'get',
        //        url:'/api/category/edit',
        //        data:{cg_id:$($this).parent().attr('id')},
        //        success:function(data){
        //            console.log(data);
        //            var str = tpl.render(htm,data);
        //            var node = $(str).on('submit',function(){
        //                var formdata = $('.courseshow').serialize();
        //
        //                $.ajax({
        //                    type:'post',
        //                    url:'/api/category/modify',
        //                    data:formdata,
        //                    success:function(){
        //
        //                        node.modal('hide');
        //                        $('aside>.list-group>button').eq(6).trigger('click');
        //                    }
        //                })
        //                return false;
        //            }).appendTo('body').modal();
        //        }
        //    })
        //}

    }
})