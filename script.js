// Pseudo code
// 1. Create a table - displays work hours 9-5 and save buttons, and inputs
// 2. Input rows store into local storage when save is pressed 
// 3. Change colors of each row based on time (past, present, future)
// 4. Individual inputs for each block
// 5. Display the current date at the top
// 6. Use Moment.js to format the date 

// let table = $('<table>'); (create) JQuery
// let table = $('table'); (find) JQuery
// let table1 = document.createElement('table') Javascript
// let table1 = document.querySelector('table') Javascript

//Variables
// var dayStart
// var hourNum = $("#hourNum");
// var taskText = $("#taskText");
// var saveBtn = $("#saveBtn");

//Array of hours
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM","3PM", "4PM", "5PM"];



//Function to create table
function createTable() {
  

    for (var i=0; i < hours.length; i++){
      let tr = $('<tr>');
      let hourNum = $('<td>');
      let taskText = $('<td>');
      let saveBtn = $('<td>');
     
      hourNum.text(hours[i]);
      var taskInput = $('<textarea id="task" class = "input" rows="2" cols="115">');
      taskText.append(taskInput);
      var save = $('<button type="button" class="saveBtn btn-lg"><i class="far fa-save"></i></button>');
      saveBtn.append(save);
      tr.append(hourNum, taskText, saveBtn);
      $("#dayPlan").append(tr);
    }
  };
  createTable();

  //Function to save inputs to local storage
  $('.saveBtn').click(function(){
    // alert('Click!')
    $('.input').each(function(){
      alert($(this).val())
    });
  });
console.log(task);
  // $('.input').click(function(){
  //   alert('Click2!')
  // })
  

  // $(document).ready(function(){
  //   $('saveBtn').on('click', function(){
  //     alert('Click!')
  //     // $('input[type="textarea"]').each(function(){    
  //     //     var id = $("textarea#task[i]").attr('id');
  //     //     var value = $("textarea#task[i]").val();
  //     //    localStorage.setItem(id, value);
         
  //       //  if (localStorage.getItem("textarea#task[0]") === null) {
  //       //   console.log("not there!")
  //       // } else {
  //       //   console.log("added")
  //       // }   
  //     });
  //   });
  // });

  







  // console.log(task);


  //Function to change colors of each row based on time (past, present, future)
  


  //Function to call load the current date at top of screen
  function currentDate() {
    let date = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').append(date); 
  }
  currentDate();


//Create row with hours col, task col, save button
//Use for loop on the hours array to put one of the hours in the hours col, then create new rows with each subsequent hour

{/* <h3>A demonstration of how to access a TEXTAREA element</h3>

Address:<br>
<textarea id="myTextarea">
342 Alvin Road
Ducksburg</textarea>

<p>Click the button to get the content of the text area.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myTextarea").value;
  document.getElementById("demo").innerHTML = x;
}
</script> */}