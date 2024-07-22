import { dataList } from "./scripts/renderTransactions.js";
export function saveToStorage() {
  localStorage.setItem("key-total-loan", JSON.stringify(dataList));
  console.log("saveToStorage");
}

export function loadFromStorage() {
  const dataRecords = JSON.parse(localStorage.getItem("key-total-loan"));
  let dataList = dataRecords;
  return dataList;
}
