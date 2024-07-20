const transaction = [{ name: "mouse", date: "july 20", months: 3, price: 500 }];

function addTransaction() {
  let addList = "";
}
let totalLoan = 0;

function updateTotalLoan() {
  document.getElementById("totalLoan").textContent = totalLoan.toFixed(2);
}

document.getElementById("addLoan").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("transactionAmount").value);
  if (!isNaN(amount) && amount > 0) {
    totalLoan += amount;
    updateTotalLoan();
  } else {
    alert("Please enter a valid amount to add.");
  }
  document.getElementById("transactionAmount").value = "";
});

document.getElementById("makePayment").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("transactionAmount").value);
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
  document.getElementById("transactionAmount").value = "";
});

updateTotalLoan();
