const music = document.querySelector('audio');
const playBtn = document.getElementById('play');
const previousBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('name');
const artist = document.getElementById('artist');
const image = document.querySelector('img');
const volume_slider = document.getElementById('volume_slider');
const volume_down = document.getElementById('down');
const volume_up = document.getElementById('up');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress-bar');
const durationEl = document.getElementById('end-time');
const currentTimeEl = document.getElementById('current-time');

// Variables 
let isPlaying = false;
let currentSongIndex = 0;
const play_list = [
    {
        name: "Bio Unit",
        img: "img/BioUnit.jpg",
        displaySong: "Aerial",
        path: "music/BioUnit.mp3"
    },
    {
        name: "Eaters",
        img: "img/Eaters.jpg",
        displaySong: "Tatsumaki",
        path: "music/Eaters.mp3"
    },
    {
        name: "Marc Burt",
        img: "img/MarcBurt.jpg",
        displaySong: "Deep Sea",
        path: "music/MarcBurt.mp3"
    }
]

// Functions for controls
function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadSong(song) {
    title.textContent = song.displaySong;
    artist.textContent = song.name;
    music.src = song.path;
    image.src = song.img;
}

function nextSong() {
    currentSongIndex++;
    if(currentSongIndex > play_list.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(play_list[currentSongIndex]);
    playMusic();
}

function previousSong() {
    currentSongIndex--
    if(currentSongIndex < 0) {
        currentSongIndex = play_list.length - 1;
    }
    loadSong(play_list[currentSongIndex]);
    playMusic();
}

function setVolume() {
    music.volume = volume_slider.value / 100;
}

function updateProgressBar(e) {
    if(isPlaying) {
        const { duration, currentTime } = e.srcElement;
        let progressBarPercentage = (currentTime / duration) * 100;
        progress.style.width = `${progressBarPercentage}%`;

        const durationMin = Math.floor(duration / 60);
        const durationSec = Math.floor(duration % 60);
        if(durationSec < 10) {
            durationSec = `0${durationSec}`;
        }
        if(durationSec) {
            durationEl.textContent = `${durationMin}:${durationSec}`;
        }
        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);
        if(currentSec < 10) {
            currentSec = `0${currentSec}`;
        }
        currentTimeEl.textContent = `${currentMin}:${currentSec}`;
    }
}

// Event listeners 
playBtn.addEventListener('click', () => (isPlaying ? pauseMusic() : playMusic()));
previousBtn.addEventListener('click', previousSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
volume_down.addEventListener('click', () => {
    let oldValue = Number(volume_slider.value);
    volume_slider.value = oldValue - 10
    setVolume();
});

volume_up.addEventListener('click', () => {
    let oldValue = Number(volume_slider.value);
    volume_slider.value = oldValue + 10;
    setVolume();
});

