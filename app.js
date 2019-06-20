const lines = {
  line1: {
    text: `Как дела`,
    audio: 'audio/как_дела.mp3'
  },
  line2: {
    text: 'У меня все хорошо, а как ты?',
    audio: 'audio/у_меня_все_хорошо_а_как_ты.mp3'
  }
};
var cont = document.getElementById('cont');
console.log(cont);

for (let key in lines) {
  var sound = document.createElement('audio');
  sound.id = 'audio-player';
  sound.controls = 'controls';
  sound.src = `${lines[key].audio}`;
  sound.type = 'audio/mpeg';
  cont.appendChild(sound);

  var textEl = document.createElement('p');
  textEl.id = 'text';
  textNode = document.createTextNode(lines[key].text);
  textEl.appendChild(textNode);
  cont.appendChild(textEl);
}
