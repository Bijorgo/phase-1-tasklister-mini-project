document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", event => {
    event.preventDefault(); // Prevent submit default settings
    
    const newTask = document.createElement("li");
    // Can play with, <ul>, <ol> in the HTML
    const taskDescription = document.querySelector("#new-task-description").value;
    const assignedTo = document.querySelector("#assigned-to-description").value;
    const importanceColor = document.querySelector("#importance").value;

    // Create the to-dos
    newTask.textContent = `To-do: ${taskDescription} Assigned To: ${assignedTo}`;

    // Sort tasks based on priority
    switch (importanceColor) {
      case 'red': 
        newTask.style.color = "red"; 
        break;
      case 'orange': 
        newTask.style.color = "orange"; 
        break;
      case 'yellow': 
        newTask.style.color = "gold"; 
        break;
      case 'green': 
        newTask.style.color = "green"; 
        break;
      case 'blue': 
        newTask.style.color = "blue"; 
        break;
      case 'purple': 
        newTask.style.color = "purple"; 
        break;
      default: 
        newTask.style.color = "black"; 
        break;
    }

    // Add task to the list
    document.querySelector("#tasks").append(newTask);

    // Create a "x" button
    const btn = document.createElement("button");
    btn.textContent = " x ";
    newTask.append(btn);
    btn.addEventListener("click", () => {
      newTask.remove(); // Remove task when 'x' is clicked
    });

    // Create and append edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Update";
    newTask.append(editButton);

    // Edit task functionality
    editButton.addEventListener("click", () => {
      const currentText = taskDescription;
      const currentAssignment = assignedTo;
      // Hold values of current info to be used later if no updates are made

      const newText = form.querySelector("#new-task-description").value || currentText;
      const newAssignment = form.querySelector("#assigned-to-description").value || currentAssignment;
      const newImportanceColor = form.querySelector("#importance").value;
      // I originally wrote this with if statements and used Ada to consolidate this. 
      // Should also be able to be written with string methods
      // || is logical OR. Empty string = falsey
      // Therefore: if form.query... is an empty string, it will return false and implement the fallback, currentText


      // Update task text and reapply color
      newTask.textContent = `To-do: ${newText} Assigned To: ${newAssignment}`;

      switch (newImportanceColor) {
        case 'red': 
          newTask.style.color = "red"; 
            break;
        case 'orange': 
          newTask.style.color = "orange"; 
            break;
        case 'yellow': 
          newTask.style.color = "gold"; 
            break;
        case 'green': 
          newTask.style.color = "green"; 
            break;
        case 'blue': 
          newTask.style.color = "blue"; 
            break;
        case 'purple': 
          newTask.style.color = "purple"; 
            break;
        case `black`:
          newTask.style.color = "black";
        //default: newTask.style.color = "black"; break; //can't firgure out if I need this b/c default should be original input?
      }

      // Reset text boxes
      form.reset();
      newTask.append(btn); // Re-adddelete button
      newTask.append(editButton); // Re-add edit button
      newTask.append(doneButton); //Re-add done button
    });

    // Create and append done button
    const doneButton = document.createElement("button");
    doneButton.textContent = " Done ";
    newTask.append(doneButton);
    doneButton.addEventListener("click", () => {
      newTask.style.textDecoration = "line-through";
      newTask.style.color = "grey"; // Mark task as done by striking it through and turning it grey
      sortTasksByColor(); // re-sort here to de-prioritize 
    });

    // Reset form
    form.reset();

    // Sort tasks by color after adding a new one
    sortTasksByColor();
  });

  // Sort tasks by color priority
  function sortTasksByColor() {
    const tasksList = document.querySelector("#tasks");
    const taskArray = Array.from(tasksList.children);
    // Task list is <ul id="tasks"> and has information like <p> style, text, and buttons
    // taskArray creates an array of the information in #tasks

    const colorPriority = {
      red: 1,
      orange: 2,
      gold: 3,
      green: 4,
      blue: 5,
      purple: 6,
      grey: 7
      // Alt way to sort with "done" as an option: add doneColor = 8
    };

    taskArray.sort((taskA, taskB) => {
      const colorA = taskA.style.color;
      const colorB = taskB.style.color;
      return colorPriority[colorA] - colorPriority[colorB];
    });

    // Append sorted tasks back to the list
    taskArray.forEach(task => tasksList.appendChild(task));
    // This is confusing
  }

});


// ALT METHODS I TRIED AND MAY WANT TO RE-VISIT 

//EDIT BUTTON WITH NEW TEXT BOX
/*
editButton.addEventListener("click",(event) => {
  const newEditBox = document.createElement("input")
  newEditBox.type = "text";
  newEditBox.placeholder = `Edit Text`;
  newEditBox.id = "edit-text-box";
  newTask.append(newEditBox);
  newTask.append(editSubmit);
  editSubmit.addEventListener("click",(event) => {
    const editedTask = newTask.querySelector('#edit-text-box').value
    newTask.textContent = `To-do: ${editedTask} Assigned To: ${assignedTo}`
    newTask.append(btn);
    newTask.append(editButton);
  })  
*/

//SORT PRIORITY BY IF/ELSE STATEMENTS 
/*
     function priorityColor() {
      if (importanceColor == "red") {
        newTask.style.color = "red";
      } else if (importanceColor == "yellow") {
        newTask.style.color = "yellow"
      } else if (importanceColor == "green") {
        newTask.style.color = "green";
      }
     } 
*/


