// Create variables for Submit & Clear buttons for Event Listeners
var submitbutton = document.getElementById("submit");
var clearbutton = document.getElementById("clearbutton");

// Create variables for DOM nodes/items
var taskinput = document.getElementById("enter_task");
var ul = document.querySelector("ul");

tasklist = JSON.parse(window.localStorage.getItem('tasks'));

if (tasklist === null){
	tasklist = [];
}	

	else {

	// Add existing values to DOM
	var li = document.createElement("li");
	ul.appendChild(li);
	li.appendChild(document.createTextNode(tasklist));
}

// Submit Button adds to Local Storage and DOM
submitbutton.addEventListener("click", function(){
	if (taskinput.value.length < 4){
		alert("ERROR: please be more specific");
		taskinput.value = "";
	}

	else if (taskinput.value.length > 20) {
		alert ("ERROR: please be more brief");
		taskinput.value = "";
	}

		else {
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
}});
