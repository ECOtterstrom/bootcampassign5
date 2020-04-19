$(document).ready(function(){
  
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