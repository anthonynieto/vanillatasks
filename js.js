// Create variables for Submit & Clear buttons for Event Listeners
var submitbutton = document.getElementById("submit");
var clearbutton = document.getElementById("clearbutton");

// Create variables for DOM nodes/items
var taskinput = document.getElementById("enter_task");
var ul = document.querySelector("ul");

tasklist = JSON.parse(window.localStorage.getItem('tasks'));

if (tasklist === null){
	console.log('tasklist is empty');
	tasklist = [];
}	

	else {
	console.log('You have tasks to do!');
	tasklist = JSON.parse(window.localStorage.getItem('tasks'));

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

	else if (taskinput.value.length > 40) {
		alert ("ERROR: please be brief");
		taskinput.value = "";
	}

		else {
			window.localStorage.setItem('tasks',JSON.stringify(taskinput.value));

			// Update the DOM
			var li = document.createElement("li");
			ul.appendChild(li);
			li.appendChild(document.createTextNode(taskinput.value));
			console.log(`Congrats, you have added a new task: ${taskinput.value}`);
			taskinput.value = "";
}});


// Clear Tasks AND local storage
clearbutton.addEventListener("click", function(){
	var tasks = document.getElementById("tasked");
	while (tasks.hasChildNodes()){
		tasks.removeChild(tasks.firstChild);
	localStorage.clear();
	console.log('All Tasks cleared from Local Storage');
}});
