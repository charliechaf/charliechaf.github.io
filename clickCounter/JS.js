counter = 0
$("#clickBox").mousedown(function(){
    counter = counter +1
    $(".numberDisplay").html(counter)
});



$("#clickBox").mouseup(function(){
    counter = counter -1
    $(".numberDisplay").html(counter)
});


$("#clickBox").bind('touchstart',function(){
    counter = counter +1
    $(".numberDisplay").html(counter)
});



$("#clickBox").bind('touchend',function(){
    counter = counter -1
    $(".numberDisplay").html(counter)
});