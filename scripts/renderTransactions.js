import { saveToStorage, loadFromStorage } from "../data.js";

export let dataList = [
  { date: "oneDate", desc: "oneDesc", amount: 1000, period: 1 },
  { date: "twoDate", desc: "twoDesc", amount: 2000, period: 2 },
  { date: "threeDate", desc: "threeDesc", amount: 3000, period: 3 },
];

export function addData(newDataList) {
  console.log("fun addData()");
  dataList.push(newDataList);

  displayRecords();
  console.log(dataList);
  saveToStorage();
}

export function displayRecords() {
  loadFromStorage();
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
loadFromStorage();
