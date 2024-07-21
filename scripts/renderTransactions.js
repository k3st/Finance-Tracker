export let totalLoan = JSON.parse(localStorage.getItem("totalLoan"));

function saveToStorage() {
  localStorage.setItem("totalLoan", JSON.stringify(totalLoan));
}

// export let cart = JSON.parse(localStorage.getItem('cart'));
// function saveToStorage() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

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
