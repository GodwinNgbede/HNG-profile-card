const userTime = document.getElementById("profile-time");

function updateTime() {
  const timeNow = Date.now();

  userTime.textContent = `Current Time (ms): ${timeNow}`;
}
setInterval(updateTime, 100);
updateTime();
