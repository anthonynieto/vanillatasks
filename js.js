// Variables for Submit & Clear buttons for Event Listeners
const submitbutton = document.getElementById("submit");
const clearbutton = document.getElementById("clearbutton");
const taskinput = document.getElementById("enter_task");
const ul = document.querySelector("ul");

// Retrieve Local Storage Task Items
getTasks();

// Function to Retrieve from Local Storage
function getTasks(){
let tasks;
	if (localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task){
	
		// DOM Construction for each task
		const li = document.createElement("li");
		ul.appendChild(li);
		li.appendChild(document.createTextNode(task));
	})
};

// Function to Store in Local Storage
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

// Submit Button Event Listener, Local Storage, and DOM
submitbutton.addEventListener("click", function(){
	if (taskinput.value.length < 4){
		alert("ERROR: please be more specific");
		taskinput.value = "";
	}

	else if (taskinput.value.length > 60) {
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

			// Clear Task Value
			taskinput.value = "";
		}
});

// Event Listener for the Clear Button (Clear Tasks AND Empties Storage)
clearbutton.addEventListener("click", function(){
	var tasks = document.getElementById("tasked");
	while (tasks.hasChildNodes()){
		tasks.removeChild(tasks.firstChild);
	}
	localStorage.clear();
});
