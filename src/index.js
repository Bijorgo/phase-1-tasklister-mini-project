document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", event => {
    event.preventDefault();
      // prevents default functions of submit
    //console.log("The form has been submitted");
    const newTask = document.createElement("p");
    //console.log(newTask);
    const taskDescription = document.querySelector("#new-task-description").value;
    const assignedTo = document.querySelector("#assigned-to-description").value;
    newTask.textContent = `To-do: ${taskDescription} Assigned To: ${assignedTo}`
    document.querySelector("#tasks").append(newTask);
      // creates a "to-do" list visible in browser
      // uses second input to display "assigned to"

    
    const btn = document.createElement("button");
    btn.textContent = " x ";
    newTask.append(btn);
    btn.addEventListener("click", event => {
      newTask.remove();
      // creates a delete function
    }); // closes button event listener

     const importanceColor = document.querySelector("#importance").value;
    console.log(importanceColor);

     function priorityColor() {
      if (importanceColor == "red") {
        newTask.style.color = "red";
      } else if (importanceColor == "yellow") {
        newTask.style.color = "yellow"
      } else if (importanceColor == "green") {
        newTask.style.color = "green";
      }
     }
    
     priorityColor();
      // this function colors text based on priority selection using if else statements

      // sort based on priority 

     function sortTasksByColor(){
      const tasksList = document.querySelector("#tasks");
      const taskArray = Array.from(tasksList.children);
      console.log(taskArray);
      console.log(tasksList);
      // taskList is <ul id="tasks"> and has information like <p> style, text, and button "x"
      // taskArray creates an array of the information in #tasks

      const colorPriority = {
        red: 1,
        yellow: 2,
        green: 3,
        };
        // this assigns each color a sortable priority number

      taskArray.sort((taskA, taskB) => {
        const colorA = taskA.style.color;
        const colorB = taskB.style.color;
        return colorPriority[colorA] - colorPriority[colorB];
        }); // closes tasks.sort
        // this compares the priority number and determines order

      taskArray.forEach(task => tasksList.appendChild(task));
        // this re-orders tasks within taskContainer 
     
      } // closes sortTasksByColor
    
    
    form.reset();
    // resets "new-task-description" field after each submit

    sortTasksByColor(); 
    // placed here, this sorts tasks each time a new task is submit 

    // add edit function
      //create edit button
      //append button to newTask
      //.addEventListener("click" => {.?.})
      //add some sort of edit function: document.querySelector("#").textContent = "xxx"
      //newTask.textContent = `To-do: ${} Assigned To: ${} with new text

  }) // closes submit event listener

}); // closes DOMContentLoaded event listener
  
  


/* 
Deliverables:
+As a user, I should be able to type a task into the input field.
+As a user, I should be able to click some form of a submit button.
+As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
 
Stretch Deliverables:
+A delete function that will remove tasks from your list

+A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
    As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority

+An additional input field (e.g. user, duration, date due) ASSIGNED TO
    html- create new input
    JavaScript- take value of input and add it to p tag

Ability to edit tasks
Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
*/