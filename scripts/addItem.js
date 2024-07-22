import { displayRecords, dataList, addData } from "./renderTransactions.js";

let totalLoan = 0;

function updateTotalLoan() {
  document.getElementById("totalLoan").textContent = totalLoan.toFixed(2);
  document.getElementById("selectedDate").value = "";
  document.getElementById("inputAmount").value = "";
}

document.getElementById("addLoan").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("inputAmount").value);
  let date = document.getElementById("selectedDate").value;
  if (!isNaN(amount) && amount > 0 && date != null) {
    totalLoan += amount;
    let newData = {
      date: date,
      desc: "Add Credit",
      amount: amount,
      period: 1,
    };

    addData(newData);
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

      let newData = {
        date: date,
        desc: "Pay due payment",
        amount: amount,
        period: null,
      };

      addData(newData);
      updateTotalLoan();
    }
  } else {
    alert("Please enter a valid amount to pay.");
  }
});

displayRecords();
updateTotalLoan();
