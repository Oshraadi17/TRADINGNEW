
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    muteBtn.textContent = "🔊";
  } else {
    music.muted = true;
    muteBtn.textContent = "🔇";
  }
});
