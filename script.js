const volume = document.getElementById('volume');
const playBtn = document.querySelector('.play');
const song = document.querySelector('audio');
const muteBtn = document.querySelector('.mute');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const zvuk = document.querySelector('.zvuk');
const playlistBtn = document.getElementById('playlist');
const bottom = document.querySelector('.bottom');
const arrows = document.querySelectorAll('.chosenStation img');
const chosenStation = document.querySelector('.chosenStation');
const current = document.querySelectorAll('.current');
const radioStation = document.querySelector('.radioStation');
const currentStation = document.querySelector('.currentStation');
const stationsMenu = document.querySelector('.stationsMenu');
const nowPlaying = document.querySelector('.nowPlaying');

const songs = [
  'songs/Rade Lacković - Avantura.mp3',
  'songs/MINA KOSTIĆ - GRUDI OD BETONA.mp3',
  'songs/Marinko Rokvić - Tri U Jednoj.mp3',
  'songs/MILE KITIĆ - ZAPALIĆU SVE.mp3',
  '/api/',
];
let currentSong = 0;

playBtn.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    playBtn.classList.add('playing');
  } else {
    song.pause();
    playBtn.classList.remove('playing');
  }
});

prevBtn.addEventListener('click', () => {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  song.setAttribute('src', songs[currentSong]);
  let songName = song.getAttribute('src').slice(6, -4).toUpperCase();
  nowPlaying.innerText = songName;
  song.play();
  playBtn.classList.add('playing');
});
nextBtn.addEventListener('click', () => {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }
  song.setAttribute('src', songs[currentSong]);
  let songName = song.getAttribute('src').slice(6, -4).toUpperCase();
  nowPlaying.innerText = songName;
  song.play();
  playBtn.classList.add('playing');
});

song.volume = 0.5;

volume.addEventListener('input', (e) => {
  let newVol = +(e.currentTarget.value / 100);
  song.volume = newVol;
});

muteBtn.addEventListener('click', () => {
  muteBtn.classList.toggle('muted');
  if (song.muted) {
    song.muted = false;
  } else {
    song.muted = true;
  }
});

playlistBtn.addEventListener('click', () => {
  bottom.classList.toggle('hideBottom');
});

chosenStation.addEventListener('click', () => {
  stationsMenu.classList.toggle('open');
});

current.forEach((el) =>
  el.addEventListener('click', () => {
    current.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
    radioStation.innerText = el.innerText;
    currentStation.innerText = el.innerText;
  })
);
