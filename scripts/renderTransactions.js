import { saveToStorage, dataList, loadFromStorage } from "../data.js";

// export let dataList = [
//   { date: "oneDate", desc: "oneDesc", amount: 1000, period: 1 },
//   { date: "twoDate", desc: "twoDesc", amount: 2000, period: 2 },
//   { date: "threeDate", desc: "threeDesc", amount: 3000, period: 3 },
// ];

export function addData(newDataList) {
  dataList.push(newDataList);

  displayRecords();
  saveToStorage();
}

function computeTotalLoan() {
  let total = 0;

  dataList.forEach((data) => {
    if (data.desc === "Add Credit") total += data.amount;
    else if (data.desc === "Pay due") total -= data.amount;
    else total = total;
  });

  document.getElementById("totalLoan").textContent = total.toFixed(2);
}

export function displayRecords() {
  let recordsHTML = "";
  computeTotalLoan();
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
