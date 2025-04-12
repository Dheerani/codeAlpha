const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

let isPlaying = false;

function playMusic() {
  isPlaying = true;
  audio.play();
  playBtn.textContent = 'Pause';
}

function pauseMusic() {
  isPlaying = false;
  audio.pause();
  playBtn.textContent = 'Play';
}

playBtn.addEventListener('click', () => {
  isPlaying ? pauseMusic() : playMusic();
});

audio.addEventListener('timeupdate', updateProgress);

function updateProgress() {
  const { duration, currentTime } = audio;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
