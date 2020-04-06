Read Me for Work Day Planner Assignment

This Work Day Planner was built on the following pseudo code:
  1. Create a table - displays work hours 9-5 and save buttons, and inputs
  2. Input rows store into local storage when save is pressed 
  3. Change colors of each row based on time (past, present, future)
  4. Individual inputs for each block
  5. Display the current date at the top
  6. Use Moment.js to format the date 

The Work Day Planner script.js file contains the following functions:
  1. Function to create table - used to create the rows in the day planner body.  This function fulfills the following requirements:
	 a. WHEN I scroll down, THEN I am presented with timeblocks for standard business hours
	 b. WHEN I click into a timeblock, THEN I can enter an event
	 
  2. Function to clear local storage - used to clear local storage before adding new items, inside the function to save items to local storage
  
  3. Function to save items to local storage - when the Save button is clicked this saves task entries to local storage. This function fulfills the following requirements:
     a. WHEN I click the save button for that timeblock, THEN the text for that event is saved in local storage  
 
	 
  4. Function to set the current date - this function sets the current date in the jumbotron at the top of the Day Planner.  This function fulfills the following requirements:
	 a.  WHEN I open the planner, THEN the current day is displayed at the top of the calendar

Unfulfilled Requirements:
  1. WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  2. WHEN I refresh the page, THEN the saved events persist
	 