const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText) {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);

    // Add animation class
    setTimeout(() => {
      newTask.classList.add("show");
    }, 10); // Brief delay to allow for CSS transition

    taskInput.value = ""; // Clear input field
  } else {
    alert("Please enter a task.");
  }
});
