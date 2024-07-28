import { saveToStorage, dataList, loadFromStorage } from "../data.js";

let payableDue,
  total = 0;
let excessPayment = 0; /// add this function later

function computeMonthlyDue(data) {
  // const todaysMonth = new Date("2024-08-28").getMonth();

  const todaysMonth = new Date().getMonth();
  const isDueForThisMonth = new Date(data.date).getMonth() + data.period;
  if (todaysMonth === isDueForThisMonth) payableDue += data.amount;
  else payableDue = payableDue;

  document.getElementById("monthly-due").textContent = payableDue.toFixed(2);
}

function dueDatePeriod(periods, selectedDates) {
  const date = new Date(selectedDates);

  for (let i = 0; (i) => period; i++) {
    dueDate = today.getMonth();
  }

  let dueDate = date.getMonth() + periods;
  console.log("done");

  return dueDate;
}

export function addData(newDataList) {
  dataList.push(newDataList);

  displayRecords();
  saveToStorage();
}

function computeMonthlyAndTotalLoan() {
  total = 0;
  payableDue = 0;

  dataList.forEach((data) => {
    if (data.desc === "Add Credit") {
      computeMonthlyDue(data);
      total += data.amount;
    } else if (data.desc === "Pay due") total -= data.amount;
    else total = total;
  });

  document.getElementById("totalLoan").textContent = total.toFixed(2);
}

export function displayRecords() {
  let recordsHTML = "";
  computeMonthlyAndTotalLoan();
  dataList.forEach((data) => {
    recordsHTML += `    
    <div class="container-record">      
      <div class="corner-text top-left">(${data.period}) ${data.desc}</div>
      <div class="corner-text top-right"> ${data.amount}</div>
      <div class="corner-text bottom-right"> ${data.date}</div>
    </div>
    `;
  });

  document.getElementById("js-container").innerHTML = recordsHTML;
}
loadFromStorage();
displayRecords();
