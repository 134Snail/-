/**
 * Created by guochao on 2017/6/30.
 */
define(['jquery', 'text!teacher/teacherlast.html', 'template', 'teachershow','teacheredit','teacheradd'], function ($, htm, tpl, thshow,thedit,thadd) {

    $('aside>.list-group').on('click', 'button:nth-child(1)', function () {
        $('section>.maincont').empty();
        $.ajax({
            type: 'get',
            url: '/api/teacher',
            success: function (data) {
                //console.log(data);
                var str = tpl.render(htm, data.result);
                //console.log(str);

                ////点击修改账户状态；
                $(str).on('click', 'tr>td:last-child>button:last-child', function () {
                    $this = this;
                    $.ajax({
                        type: 'post',
                        url: 'api/teacher/handle',
                        data: {
                            tc_id: $(this).parent().attr('id'),
                            tc_status: $(this).attr('data-status')
                        },
                        success: function (data) {
                            $($this).attr('data-status', data.result.tc_status);

                            $('aside>.list-group>button').eq(0).trigger('click');


                        }
                    })
                })
                    /////点击查看详细信息；
                    .on('click', 'tr>td:last-child>button:first-child', function () {
                        var $this = this;
                        thshow($this);

                    })
                    /////编辑讲师
                    .on('click', 'tr>td:last-child>button:nth-child(2)',function(){
                        var $this = this;
                        console.log($this);
                        thedit($this);
                    })
                    //////添加讲师
                    .on('click','.btnadd',function(){
                        thadd();
                    })
                    .appendTo('section>.maincont');

            }
        })


    })

})