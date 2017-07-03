require.config({
    baseUrl:'js/',
    paths:{
        jquery:'lib/jquery-3.2.1.min',
        cookie:'lib/jquery.cookie',
        bootstrap:'../assets/bootstrap/js/bootstrap.min'

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

require(['jquery','cookie'],function($){

       $('form').on('submit',function(e){
           e.preventDefault();
           var formData=$(this).serialize();
           //console.log(formData);

           $.ajax({
               url:'/api/login',
               type:'post',
               data:formData,
               success:function(data){
                   //localStorage.setItem('info',JSON.stringify(data.result));
                   $.cookie('info',JSON.stringify(data.result),{
                       expires:7
                   });
                   window.location.href='../';

               }
           })

   //
   //
       })
   //}








})