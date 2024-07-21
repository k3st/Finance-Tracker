// export let cart = JSON.parse(localStorage.getItem('cart'));
// function saveToStorage() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// import dataInstance from "../data";

export function displayRecords() {
  let dataList = [
    { date: "oneDate", desc: "oneDesc", period: 1 },
    { date: "twoDate", desc: "twoDesc", period: 2 },
    { date: "threeDate", desc: "threeDesc", period: 3 },
  ];
  console.log("displayrecords");
  let recordsHTML = "";
  dataList.forEach((data) => {
    recordsHTML += `
    <tr> 
      <td>${dataList.date}</td>
      <td>${dataList.desc}</td>
      <td>${dataList.period}</td>
    </tr>
    `;
  });

  document.querySelector(".js-div-tr").innerHTML = recordsHTML;
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
