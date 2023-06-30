// 02-video.js
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const PLAYER_CURRENT_TIME = 'videoplayer-current-time';

function saveLocalStorage(e) {
  const currentTime = e.seconds;

  localStorage.setItem(PLAYER_CURRENT_TIME, JSON.stringify(currentTime));
}

function resumeWatching() {
  player.on('timeupdate', throttle(saveLocalStorage, 1000));
  const getTime = JSON.parse(localStorage.getItem(PLAYER_CURRENT_TIME));
  if (getTime) {
    return player.setCurrentTime(getTime)
      .then(function (seconds) {
        console.log('Resuming at ' + seconds + ' seconds.');
      })
      .catch(function (error) {
        console.error('Error setting current time:', error);
      });
  }
}

player.ready().then(function () {
  player.on('play', resumeWatching);
}).catch(function (error) {
  console.error('Error initializing player:', error);
});
