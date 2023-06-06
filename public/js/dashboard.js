const addTodoButton = document.getElementById("addTodo");
const todoList = document.querySelector(".todo-list");

// Function to add a new todo item
function addTodo() {
  const newTodo = document.createElement("li");
  newTodo.innerHTML = `
    <input type="text" placeholder="Todo" />
    <i class="bx bx-edit"></i>
    <i class="bx bx-trash"></i>
  `;
  todoList.appendChild(newTodo);
}

// Function to remove a todo item
function removeTodo() {
  const todoItem = this.parentElement;
  todoList.removeChild(todoItem);
}

// Function to edit a todo item
function editTodo() {
  const todoInput = this.previousElementSibling;
  todoInput.disabled = !todoInput.disabled;
  todoInput.focus();
}

// Add event listeners
addTodoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("bx-trash")) {
    removeTodo.call(event.target);
  } else if (event.target.classList.contains("bx-edit")) {
    editTodo.call(event.target);
  }
});
