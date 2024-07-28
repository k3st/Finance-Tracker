// import { updateTotalLoan } from "../scripts/addItem.js";

let display = 1;
document.querySelector(".js-toggle-button").addEventListener("click", () => {
  showAddItem();
});
function showAddItem() {
  const div = document.getElementById("js-action-panel");
  const containerHeight = document.getElementById("js-container");
  if (display === 1) {
    div.style.display = "block";
    display = 0;
    containerHeight.style.height = "40%";
  } else {
    div.style.display = "none";
    display = 1;
    containerHeight.style.height = "75%";
  }
}
document
  .getElementById("js-action-panel")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
