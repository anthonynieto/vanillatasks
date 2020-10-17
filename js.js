// Create variables for Submit & Clear buttons for Event Listeners
const submitbutton = document.getElementById("submit");
const clearbutton = document.getElementById("clearbutton");
const taskinput = document.getElementById("enter_task");
const ul = document.querySelector("ul");

// tasklist = JSON.parse(window.localStorage.getItem('tasks'));

// DOM Event Listener
var DOMContent = document.addEventListener('DOMContentLoaded', getTasks);

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
			const li = document.createElement("li");
			ul.appendChild(li);
			li.appendChild(document.createTextNode(taskinput.value));

			// Store in LocalStorage
			storeInLocalStorage(taskinput.value);

			// Clear Task
			taskinput.value = "";
		}
});

// Get Tasks from LS
function getTasks(){
	let tasks;
	if (localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task){
	
		const li = document.createElement("li");
		ul.appendChild(li);
		li.appendChild(document.createTextNode(task));
	})
};

function storeInLocalStorage(task){
	let tasks;
	if (localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks AND local storage
clearbutton.addEventListener("click", function(){
	var tasks = document.getElementById("tasked");
	while (tasks.hasChildNodes()){
		tasks.removeChild(tasks.firstChild);
	}
	localStorage.clear();
});
