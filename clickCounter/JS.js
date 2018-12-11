//counter = 0
//$("#clickBox").mousedown(function(){
//    counter = counter +1
//    $(".numberDisplay").html(counter)
//});
//
//
//
//$("#clickBox").mouseup(function(){
//    counter = counter -1
//    $(".numberDisplay").html(counter)
//});
//
//
//$("#clickBox").ontouchstart(function(){
//    counter = counter +1
//    $(".numberDisplay").html(counter)
//});
//
//
//
//$("#clickBox").ontouchend(function(){
//    counter = counter -1
//    $(".numberDisplay").html(counter)
//});

function countTouches(event) {
  var x = event.touches.length;
  $(".numberDisplay").html(x);

}