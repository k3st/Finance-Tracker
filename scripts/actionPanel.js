// import { updateTotalLoan } from "../scripts/addItem.js";

let display = 1;
document.querySelector(".js-toggle-button").addEventListener("click", () => {
  showAddItem();
});
function showAddItem() {
  console.log("showAddItem");
  const div = document.getElementById("js-action-panel");
  if (display === 1) {
    div.style.display = "block";
    display = 0;
  } else {
    div.style.display = "none";
    display = 1;
  }
}
document
  .getElementById("js-action-panel")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
