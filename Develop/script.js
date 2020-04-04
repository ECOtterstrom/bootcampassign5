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
var dayStart
var hourNum = $("#hourNum");
var taskText = $("#taskText");
var saveBtn = $("#saveBtn");
//Array of hours
var hours = ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "1:00 p.m.", "2:00 p.m.","3:00 p.m.", "4:00 p.m.", "5:00 p.m."];

//Function to create table
function(createTable) {
  let table = $('<table>');
  let tr = $('tr');
  console.log(table);
}



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