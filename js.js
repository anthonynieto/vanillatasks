// Create variables for Submit & Clear buttons for Event Listeners
var submitbutton = document.getElementById("submit");
var clearbutton = document.getElementById("clearbutton");

// Create variables for DOM nodes/items
var taskinput = document.getElementById("enter_task");
var ul = document.querySelector("ul");


// Check Quantity from local storage
let tasklist;
if (localStorage.getItem('tasks') === null) {
	tasklist = [];


}	else {
	tasklist = JSON.parse(window.localStorage.getItem('tasks'));

	// Add existing values to DOM
	var li = document.createElement("li");
	ul.appendChild(li);
	li.appendChild(document.createTextNode(tasklist));
}

// Retrieve existing tasks from Local Storage
/*tasklist = JSON.parse(window.localStorage.getItem('tasks'));*/

// Iterate through Task object values to console log
/*tasklist.keys(localStorage).forEach(task) ()=>{
	console.log(localStorage.getItem(task));
}*/


// Submit Button adds to Local Storage and DOM
submitbutton.addEventListener("click", function(){
	if (taskinput.value.length < 4){
		alert("please be more specific");
		taskinput.value = "";
	}

	if (taskinput.value.length > 40) {
		alert ("please be brief");
		taskinput.value = "";
	}

		else {

			// Write to local storage
			let tasks; 
			tasks = []; 
			window.localStorage.setItem('tasks',JSON.stringify(taskinput.value));

			// Update the DOM
			var li = document.createElement("li");
			ul.appendChild(li);
			li.appendChild(document.createTextNode(taskinput.value));
			taskinput.value = "";
}});


// Clear Tasks AND local storage
clearbutton.addEventListener("click", function(){
	var tasks = document.getElementById("tasked");
	while (tasks.hasChildNodes()){
		tasks.removeChild(tasks.firstChild);
	localStorage.clear();
	}
});