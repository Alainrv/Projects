// Problem: the page is not interactive. 
// Solution: add interactivity so the user can manage daily tasks. 

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0]; // first button
var incompleteTasksHodler = document.getElementById("incomplete-tasks"); // incomplete-tasks
var completeTasksHodler = document.getElementById("completed-tasks"); // completed-tasks


//New task list item
var createNewTaskElement = function(taskString) {
	// Create List Item
	var listItem = document.createElement("li");

		// input checkbox
		var checkbox = document.createElement("input"); // checkbox
		// label
		var label = document.createElement("label");
		// input (text)
		var editInput = document.createElement("input"); // text
		// button (edit)
		var editButton = document.createElement("button");
		// button (delete)
		var deleteButton =document.createElement("button");		
		// Each elements, needs modifying 

		//Each elements needs appending
		listItem.appendChild(checkbox);
		listItem.appendChild(label);
		listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);


		return listItem;
}


// Add new task
var addTask = function() { 
	console.log("add task...");
	// Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement("some new task");


	// append list item to incompleteTasksHodler
	incompleteTasksHodler.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}


var editTask = function() {
// Edit an existing task
	//When edit button is pressed
		// if the class of the parent is .editMode
			// Switch from .editMode
			// label text become the input's value
		// else 
			//switch to .editMode
			//input value become label' text

		// Toggle .editMode on the parent
}


// Delete task
var deleteTask = function() {

	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}


// Mark task as complete
var taskCompleted = function () {
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completeTasksHodler.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}



// Mark task as incomplete
var taskIncomplete = function () {
	// Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHodler.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("bind list item events..");
		// select the children
		var checkbox = taskListItem.querySelector("input[type=checkbox]");
		var editButton = taskListItem.querySelector("button.edit");
		var deleteButton = taskListItem.querySelector("button.delete");

		// bind editTask to edit button
		editButton.onclick = editTask;
		// bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		// bind checkBoxEventHandler to checkbox
		checkbox.onchange = checkBoxEventHandler;
}

//Set the click handler to the the addTask  function
addButton.onclick = addTask;


// Cycle over incomplete tasks holder ul list items
for (var i = 0; i < incompleteTasksHodler.children.length; i++) {
	// bind events to list items children (taskCompleted)
	bindTaskEvents(incompleteTasksHodler.children[i], taskCompleted);
}

// Cycle over complete tasks holder ul list items
for (var i = 0; i < incompleteTasksHodler.children.length; i++) {
	// bind events to list items children (taskIncomplete)
	bindTaskEvents(completeTasksHodler.children[i], taskIncomplete);
}
 














