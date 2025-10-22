const userTime = document.getElementById("profile-time");
const form = document.getElementById("contact-form");
const alertMessageEL = document.getElementById("alert-message");
const submitButtonEl = document.getElementById("submit-button");
const userMessageEl = document.getElementById("user-message");

// HOME TIME UPDATE IN ms
function updateTime() {
  const timeNow = Date.now();
  if (!userTime) return;

  userTime.textContent = `Current Time (ms): ${timeNow}`;
}
setInterval(updateTime, 100);
updateTime();

// SUBMIT BUTTON MESSAGE

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("user-email").value.trim();
  const message = document.getElementById("user-message").value.trim();

  if (!name || !email || !message) {
    alertMessageEL.textContent = "All fields are required";

    return;
  }
  alertMessageEL.style.display = "block";

  form.reset();
  setTimeout(() => {
    alertMessageEL.style.display = "none";
  }, 3000);

  console.log(alertMessageEL);
});
