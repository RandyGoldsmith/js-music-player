const music = document.querySelector('audio');
const playBtn = document.getElementById('play');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const name = document.getElementById('track-name');
const artist = document.getElementById('track-artist');
const image = document.querySelector('img');

let isPlaying = false;


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

playBtn.addEventListener('click', () => (isPlaying ? pauseMusic() : playMusic()));

const play_list = [
    {
        name: "Bio Unit",
        img: "img/BioUnit.jpg",
        track: "Aerial",
        path: "music/BioUnit.mp3"
    },
    {
        name: "Eaters",
        img: "img/Eaters.jpg",
        track: "Tatsumaki",
        path: "music/Eaters.mp3"
    },
    {
        name: "Marc Burt",
        img: "img/MarcBurt.jpg",
        track: "Deep Sea",
        path: "music/MarcBurt.mp3"
    }
]

