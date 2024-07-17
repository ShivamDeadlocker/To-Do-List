function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var routineSelect = document.getElementById("routineSelect");

    // Check if the task input is empty
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return; // Exit the function if no task is provided
    }

    if (taskInput.value.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value + " - " + routineSelect.value;

        // Add click event to mark task as completed
        taskText.addEventListener("click", function() {
            this.parentNode.classList.toggle("checked");
        });

        // Create an input field for editing
        var editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = taskInput.value;
        editInput.style.display = "none";

        // Create buttons for editing and saving changes
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            taskText.style.display = "none";
            editInput.style.display = "inline";
            editInput.focus();
        });

        var saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.style.display = "none";
        saveButton.addEventListener("click", function() {
            taskText.textContent = editInput.value;
            taskText.style.display = "inline";
            editInput.style.display = "none";
        });

        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent li click event from firing
            taskList.removeChild(li);
        });

        // Create a date element for the task
        var dateElement = document.createElement("span");
        dateElement.textContent = getFormattedDate();

        // Append elements to the list item
        li.appendChild(taskText);
        li.appendChild(editInput);
        li.appendChild(editButton);
        li.appendChild(saveButton);
        li.appendChild(deleteButton);
        li.appendChild(dateElement);

        // Append the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
        routineSelect.value = "homework";
    }
}

function getFormattedDate() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

function clearAllTasks() {
    var taskList = document.getElementById("taskList");
    // Check if there are no tasks to clear
    if (taskList.children.length === 0) {
        alert("You should have at least one task!");
        return; // Exit the function if there are no tasks
    }
    taskList.innerHTML = ""; // Remove all child elements (tasks)
}

// Variable to track the current theme
var isDarkTheme = false;

// Function to toggle between dark and light themes
function toggleTheme() {
    var appElement = document.getElementById("app");

    // Toggle the theme class
    isDarkTheme = !isDarkTheme;
    appElement.classList.toggle("dark-theme", isDarkTheme);
}


