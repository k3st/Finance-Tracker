import { displayRecords } from "./renderTransactions.js";

function addTransaction() {
  let addList = "";
}
let totalLoan = 0;

function updateTotalLoan() {
  document.getElementById("totalLoan").textContent = totalLoan.toFixed(2);
  document.getElementById("selectedDate").value = "";
  document.getElementById("inputAmount").value = "";
}

document.getElementById("addLoan").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("inputAmount").value);

  let date = document.getElementById("selectedDate").value;
  console.log(date);
  if (!isNaN(amount) && amount > 0 && date != null) {
    totalLoan += amount;
    updateTotalLoan();
  } else {
    alert("Please enter a valid amount to add.");
  }
});

document.getElementById("makePayment").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("inputAmount").value);
  if (!isNaN(amount) && amount > 0) {
    if (amount > totalLoan) {
      alert("Payment amount exceeds the total loan.");
    } else {
      totalLoan -= amount;
      updateTotalLoan();
    }
  } else {
    alert("Please enter a valid amount to pay.");
  }
});

displayRecords();
updateTotalLoan();
