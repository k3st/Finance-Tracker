// export let cart = JSON.parse(localStorage.getItem('cart'));
// function saveToStorage() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// import dataInstance from "../data";

export function displayRecords() {
  let dataList = [
    { date: "oneDate", desc: "oneDesc", amount: 1000, period: 1 },
    { date: "twoDate", desc: "twoDesc", amount: 2000, period: 2 },
    { date: "threeDate", desc: "threeDesc", amount: 3000, period: 3 },
  ];
  console.log(dataList);
  let recordsHTML = "";

  let headerHTML = `
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Amount</th>
    <th>Period</th>
  </tr>
  `;

  recordsHTML = recordsHTML + headerHTML;
  dataList.forEach((data) => {
    recordsHTML += `    
    <tr> 
      <td>${data.date}</td>
      <td>${data.desc}</td>
      <td>${data.amount}</td>
      <td>${data.period}</td>
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
