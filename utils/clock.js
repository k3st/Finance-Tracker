function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const date = new Date().toDateString();
  clockElement.textContent = `${hours}:${minutes}:${seconds} || ${date}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
