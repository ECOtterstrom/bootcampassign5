$(document).ready(function(){
  
  var currentTime = moment().hour();
  hourTracker(currentTime);
  var interval = setInterval(hourTracker(currentTime), 2000);
  $("#currentDay").text(moment().format("dddd, MMMM Do"))

  $('.saveBtn').on("click", function(){
      var textAreaValue = $(this).siblings(".description").val()
      var id = $(this).parent().attr("id");

      localStorage.setItem(id, textAreaValue);

  });


  $(".description").each(function(){

    let id = $(this).parent().attr("id");
    $(this).val(localStorage.getItem(id));

  });

});


function hourTracker(currentHour){
  $(".time-block").each(function(){
    var divHour = parseInt($(this).attr("id"));
   
      if(divHour < currentHour) {
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
      } else if (divHour === currentHour) {
        $(this).removeClass("past")
        $(this).removeClass("future")
        $(this).addClass("present")
      } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }

  });
}


