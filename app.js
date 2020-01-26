// game video hide when modal closed
$(function(){
    $('#modalVideo1').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });

    $('#modalVideo2').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });

    $('#modalVideo3').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });
});
