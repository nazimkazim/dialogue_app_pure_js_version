const lines = {
  line1: {
    text: `<p>Как дела</p>`,
    audio: 'audio/как_дела.mp3'
  },
  line2: {
    text: '<p>У меня все хорошо, а как ты?</p>',
    audio: 'audio/у_меня_все_хорошо_а_как_ты.mp3'
  }
};
var cont = document.getElementsByClassName('container');
console.log(cont);

for (let key in lines) {
  console.log(lines[key].audio);
  console.log(lines[key].text);
  var sound = document.createElement('audio');
  sound.id = 'audio-player';
  sound.controls = 'controls';
  sound.src = `${lines[key].audio}`;
  sound.type = 'audio/mpeg';
  document.body.appendChild(sound);
}
