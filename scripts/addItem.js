import { addData } from "./renderTransactions.js";
import { dataList } from "../data.js";

function resetInput() {
  document.getElementById("selectedDate").value = "";
  document.getElementById("inputAmount").value = "";
}

document.querySelector("#selectedDate").valueAsDate = new Date();

document.getElementById("addLoan").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("inputAmount").value);
  let date = document.getElementById("selectedDate").value;
  if (!isNaN(amount) && amount > 0 && date != null) {
    let newData = {
      date: date,
      desc: "Add Credit",
      amount: amount,
      period: 1,
    };
    addData(newData);
    resetInput();
  } else {
    alert("Please enter a valid amount to add.");
  }
});

document.getElementById("makePayment").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("inputAmount").value);
  let date = document.getElementById("selectedDate").value;
  if (!isNaN(amount) && amount > 0) {
    if (amount > totalLoan) {
      alert("Payment amount exceeds the total loan.");
    } else {
      let newData = {
        date: date,
        desc: "Pay due",
        amount: amount,
        period: null,
      };
      addData(newData);
      resetInput();
    }
  } else {
    alert("Please enter a valid amount to pay.");
  }
});
