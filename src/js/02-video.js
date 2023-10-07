import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// console.log(throttle)
const iFrameEl = document.querySelector('iframe')
// console.dir(iFrameEl)


const player = new Player(iFrameEl);

// player.on('timeupdate', )
const LS_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem(LS_KEY, JSON.stringify(data.seconds))
};

const throttleOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttleOnPlay);


const saveTime = localStorage.getItem(LS_KEY)
console.log(saveTime)

player.setCurrentTime(JSON.parse(saveTime)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('play', onPlay);
