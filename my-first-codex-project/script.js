"use strict";

const button = document.getElementById("show-time");
const currentTime = document.getElementById("current-time");
const placeholder = document.getElementById("placeholder");
const timezone = document.getElementById("timezone");
const formatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
});

button.addEventListener("click", () => {
  const now = new Date();
  currentTime.dateTime = now.toISOString();
  currentTime.textContent = formatter.format(now);
  timezone.textContent = `本地时区：${formatter.resolvedOptions().timeZone}`;
  placeholder.hidden = true;
  currentTime.hidden = false;
  timezone.hidden = false;
});
