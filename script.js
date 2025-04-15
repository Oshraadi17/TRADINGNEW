
const logo = document.getElementById("logo");
const launchContent = document.getElementById("launch-content");
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

setTimeout(() => {
  logo.style.display = "none";
  launchContent.style.display = "block";
}, 2500);

muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
});
