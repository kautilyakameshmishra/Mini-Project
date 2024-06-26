"use strict";

/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/Teri-Jhuki-Nazar.jpg",
    posterUrl: "./assets/images/Teri-Jhuki-Nazar.jpg",
    title: "Teri-Jhuki-Nazar",
    album: "Murder 3",
    year: 2013,
    artist: "Shafqat Amanat Ali x Pritam Chakraborty",
    musicPath: "./assets/music/Teri-Jhuki-Nazar.mp3",
  },
  {
    backgroundImage: "./assets/images/Main-Rang-Sharbaton-Ka.jpg",
    posterUrl: "./assets/images/Main-Rang-Sharbaton-Ka.jpg",
    title: "Main-Rang-Sharbaton-Ka",
    album: "Phata Poster Nikhla Hero",
    year: 2013,
    artist: "Atif Aslam x Chinmayi",
    musicPath: "./assets/music/Main-Rang-Sharbaton-Ka.mp3",
  },
  {
    backgroundImage: "./assets/images/Dildaara-Stand-By-Me.jpg",
    posterUrl: "./assets/images/Dildaara-Stand-By-Me.jpg",
    title: "Dildaara (Stand by Me)",
    album: "Ra.One",
    year: 2011,
    artist: "Shafqat Amanat Ali",
    musicPath: "./assets/music/Dildaara-Stand-By-Me.mp3",
  },
  {
    backgroundImage: "./assets/images/Apna-Bana-Le.jpg",
    posterUrl: "./assets/images/Apna-Bana-Le.jpg",
    title: "Apna Bana Le",
    album: "Bhediya",
    year: 2023,
    artist: "Sachin–Jigar x Amitabh Bhattacharya x Arijit Singh",
    musicPath: "./assets/music/Apna-Bana-Le.mp3",
  },
  {
    backgroundImage: "./assets/images/Dooriyan.jpg",
    posterUrl: "./assets/images/Dooriyan.jpg",
    title: "Dooriyan",
    album: "Love Aaj Kal",
    year: 2009,
    artist: "Pritam Chakraborty x Mohit Chauhan",
    musicPath: "./assets/music/Dooriyan.mp3",
  },
  {
    backgroundImage: "./assets/images/Te-Amo.jpg",
    posterUrl: "./assets/images/Te-Amo.jpg",
    title: "Te Amo",
    album: "Dum Maaro Dum",
    year: 2011,
    artist: "Ash King x Sunidhi Chauhan",
    musicPath: "./assets/music/Te-Amo.mp3",
  },
  {
    backgroundImage: "./assets/images/Beete-Lamhein.jpg",
    posterUrl: "./assets/images/Beete-Lamhein.jpg",
    title: "Beete-Lamhein",
    album: "The Train",
    year: 2007,
    artist: "KK",
    musicPath: "./assets/music/Beete-Lamhein.mp3",
  },
  {
    backgroundImage: "./assets/images/I-Love-You.jpg",
    posterUrl: "./assets/images/I-Love-You.jpg",
    title: "I Love You",
    album: "Bodyguard",
    year: 2011,
    artist: "Ash King x Clinton Cerejo",
    musicPath: "./assets/music/I-Love-You.mp3",
  },
  {
    backgroundImage: "./assets/images/Mera-Mann-Kehne-Laga.jpg",
    posterUrl: "./assets/images/Mera-Mann-Kehne-Laga.jpg",
    title: "Mera Mann Kehne Laga",
    album: "Nautanki Saala!",
    year: 2013,
    artist: "Falak Shabir",
    musicPath: "./assets/music/Mera-Mann-Kehne-Laga.mp3",
  },
  {
    backgroundImage: "./assets/images/Humsafar.jpg",
    posterUrl: "./assets/images/Humsafar.jpg",
    title: "Humsafar",
    album: "Badrinath Ki Dulhania",
    year: 2018,
    artist: "Akhil Sachdeva x Mansheel Gujral",
    musicPath: "./assets/music/Humsafar.mp3",
  },
];

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
};

addEventOnElements(playlistTogglers, "click", togglePlaylist);

/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
};

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});

/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

let audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
};

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
};

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
};

audioSource.addEventListener("loadeddata", updateDuration);

/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
};

playBtn.addEventListener("click", playMusic);

/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time]");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
};

/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipNextBtn.addEventListener("click", skipNext);

/** 
 * Add event listener to detect when the current song ends
 */
audioSource.addEventListener("ended", skipNext);

/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
};

addEventOnElements(ranges, "input", updateRangeFill);

/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
};

playerSeekRange.addEventListener("input", seek);

/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipPrevBtn.addEventListener("click", skipPrev);

/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffledIndexes = []; // Array to store shuffled indexes

const shuffleMusic = function () {
  let newIndex;
  
  do {
    newIndex = getRandomMusic(); // Get a random index
  } while (newIndex === currentMusic || shuffledIndexes.includes(newIndex)); // Ensure it's not the same as current or previously shuffled
  
  currentMusic = newIndex; // Update current music index
  shuffledIndexes.push(currentMusic); // Add the new index to the shuffledIndexes array
  
  // Reset shuffledIndexes if all songs have been shuffled once
  if (shuffledIndexes.length === musicData.length) {
    shuffledIndexes.length = 0;
  }
};

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
};

playerShuffleBtn.addEventListener("click", shuffle);

/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
};

playerRepeatBtn.addEventListener("click", repeat);

/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
};

playerVolumeRange.addEventListener("input", changeVolume);

/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
};

playerVolumeBtn.addEventListener("click", muteVolume);
