document.addEventListener("DOMContentLoaded", () => {
	let taskList = document.getElementById('tasks');
	let taskEntry = document.getElementById('create-task-form');

	taskEntry.onsubmit = (e) => {
		e.preventDefault(); 
		let newTaskDescription = document.getElementById('new-task-description').value;
		var entry = document.createElement('li');
		entry.appendChild(document.createTextNode(newTaskDescription));
		taskList.appendChild(entry);
		taskEntry.reset()
	}

	taskList.onclick = () => {

	}
});