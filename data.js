export let dataList = JSON.parse(localStorage.getItem("key-total-loan"));

export function saveToStorage() {
  localStorage.setItem("key-total-loan", JSON.stringify(dataList));
}

export function loadFromStorage() {
  dataList = JSON.parse(localStorage.getItem("key-total-loan"));
  if (!dataList) {
    dataList = [
      { date: "2024-06-27", desc: "Add Credit", amount: 1000, period: 1 },
    ];
  }
}
