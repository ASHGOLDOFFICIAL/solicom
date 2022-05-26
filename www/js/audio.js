'use strict';

main();

function main() {
  const audioPlayers = document.querySelectorAll('audio');
  audioPlayers.forEach((player) => {
    player.addEventListener('play', (event) => {
      pausePreviousAudio(event);
    });
  });
}

function pausePreviousAudio(event) {
  let audioPlayers = document.querySelectorAll('audio');
  audioPlayers.forEach((player) => {
    if (player !== event.target) {
      player.pause();
    }
  });
}
