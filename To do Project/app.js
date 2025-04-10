document.addEventListener("DOMContentLoaded", () => {

  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  
  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  tasks.forEach((task) => {
    renderTask(task);
  });

  addTaskButton.addEventListener("click", () => {
    const taskInput = todoInput.value.trim();

    if (taskInput === "") return;

    const newTask = {
      id: Date.now(),
      task: taskInput,
      completed: false,
    };

    tasks.push(newTask);
    saveTask();
    renderTask();
    todoInput.value = "";
  });

  function renderTask(task) {
    console.log(task);
  }

  function saveTask() {
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});
