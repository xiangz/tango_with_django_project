$(document).ready(function(){



    $('#likes').click(function(){

        var catid;
        catid = $(this).attr("data-catid");

        $.get('/rango/like_category/', {category_id: catid}, function(data){
                           $('#like_count').html(data);
                           $('#likes').hide();
                       });
    });

    $('#suggestion').keyup(function(){
        // alert("@@@@");
        var query;
        query=$(this).val();
        // alert(query);
        $.get('/rango/suggest_category/',{suggestion:query},function(data){
            // alert("@@@@");
            $('#cats').html(data);
        });
    });

    $('.rango-add').click(function(){

        var catid = $(this).attr("data-catid");
        var url = $(this).attr("data-url");
        var title = $(this).attr("data-title");
        // alert("==catid =="+catid+"====url==="+url+"====title==="+title);
        var me =$(this)
        $.get('/rango/auto_add_page/',{category_id:catid,url:url,title:title},function(data){
            $('#pages').html(data);
            me.hide();

        });

    });

});
