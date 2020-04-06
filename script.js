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

//Array of hours
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM","3PM", "4PM", "5PM"];
var tr, hourNum, taskText, saveBtn, taskInput, save, i


//Function to create table
function createTable() {
  

    for (var i=0; i < hours.length; i++){
      tr = $('<tr>');
      hourNum = $('<td>');
      taskText = $('<td>');
      saveBtn = $('<td>');
     
      hourNum.text(hours[i]);
      taskInput = $('<textarea id="task" class = "input" rows="2" cols="115">');
      taskText.append(taskInput);
      save = $('<button type="button" class="saveBtn btn-lg"><i class="far fa-save"></i></button>');
      saveBtn.append(save);
      tr.append(hourNum, taskText, saveBtn);
      $("#dayPlan").append(tr);
    }
  };
  createTable();

  //Function to clear local storage before adding new items  
  function deleteItems() {
    localStorage.clear();
  }
  deleteItems();
    
  //Function to save inputs to local storage
  $('.saveBtn').click(function(){
      
  $('textarea').each(function(){
    var entry, value;
    entry = $(this);
    value = (entry.val()); 
    localStorage.setItem(value, value);
    //alert($(this).val())
    });
  });
    console.log(localStorage);

  //Function to change colors of each row based on time (past, present, future)
  


  //Function to call load the current date at top of screen
  function currentDate() {
    let date = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').append(date); 
  }
  currentDate();
