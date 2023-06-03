const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// Toggle Sidebar
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

const searchButton = document.querySelector(
  "#content nav form .form-input button"
);
const searchButtonIcon = document.querySelector(
  "#content nav form .form-input button .bx"
);
const searchForm = document.querySelector("#content nav form");

searchButton.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchButtonIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add("hide");
} else if (window.innerWidth > 576) {
  searchButtonIcon.classList.replace("bx-x", "bx-search");
  searchForm.classList.remove("show");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

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
