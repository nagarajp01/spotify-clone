// Function that plays a song when you click on it
function playSong(src) {
  const player = document.getElementById('player'); // find the <audio> player
  player.src = src;   // set the song file
  player.play();      // start playing
}