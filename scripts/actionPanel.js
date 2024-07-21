// import { updateTotalLoan } from "../scripts/addItem.js";

let display = 1;
document.querySelector(".js-toggle-button").addEventListener("click", () => {
  showAddItem();
});
function showAddItem() {
  console.log("showAddItem");
  const div = document.getElementById("action-panel");
  if (display === 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }

  // if (div.style.display === "none") {
  //   div.style.display = "block";
  //   this.textContent = "Hide Text";
  // } else {
  //   text.style.display = "none";
  //   this.textContent = "Show Text";
  // }
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";
  renderTodoList();
}
