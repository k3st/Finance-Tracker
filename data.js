export let dataList = JSON.parse(localStorage.getItem("key-total-loan"));

export function saveToStorage() {
  localStorage.setItem("key-total-loan", JSON.stringify(dataList));
  console.log("saveToStorage");
}

export function loadFromStorage() {
  dataList = JSON.parse(localStorage.getItem("key-total-loan"));
  if (!dataList) {
    dataList = [
      { date: "oneDate", desc: "Add Credit", amount: 1000, period: 1 },
      { date: "twoDate", desc: "Pay due", amount: 2000, period: null },
      { date: "threeDate", desc: "Add Credit", amount: 3000, period: 3 },
    ];
  }
  console.log("loadFromStorage");
}
