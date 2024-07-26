import { saveToStorage, dataList, loadFromStorage } from "../data.js";

// export let dataList = [
//   { date: "oneDate", desc: "oneDesc", amount: 1000, period: 1 },
//   { date: "twoDate", desc: "twoDesc", amount: 2000, period: 2 },
//   { date: "threeDate", desc: "threeDesc", amount: 3000, period: 3 },
// ];

export function addData(newDataList) {
  console.log("fun addData()");
  dataList.push(newDataList);

  displayRecords();
  console.log(dataList);
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
  let headerHTML = `

  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Amount</th>
    <th>Period</th>
  </tr>
  `;

  recordsHTML = recordsHTML + headerHTML;
  computeTotalLoan();

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

export function displayRecordsTwo() {
  let recordsHTML = "";
  computeTotalLoan();
  console.log(dataList);
  dataList.forEach((data) => {
    recordsHTML += `    
    <div class="container-record">      
      <div class="corner-text top-left">(${data.period}) ${data.desc}</div>
      <div class="corner-text top-right"> ${data.amount}</div>
      <div class="corner-text bottom-right"> ${data.date}</div>
    </div>
    `;
  });

  document.querySelector(".js-container").innerHTML = recordsHTML;
}
loadFromStorage();
displayRecordsTwo();
