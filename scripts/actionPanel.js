// import { updateTotalLoan } from "../scripts/addItem.js";

document.querySelector(".js-action-panel").addEventListener("click", () => {
  showAddItem();
});
function showAddItem() {
  console.log("showAddItem");
  const text = document.querySelector(".js-content");
  if (text.style.display === "none") {
    text.style.display = "block";
    this.textContent = "Hide Text";
  } else {
    text.style.display = "none";
    this.textContent = "Show Text";
  }
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
