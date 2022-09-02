import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

let currentTime = Number(localStorage.getItem(STORAGE_KEY));

function getTime(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

player.on('timeupdate', throttle(getTime, 1000));

player.setCurrentTime(currentTime);
