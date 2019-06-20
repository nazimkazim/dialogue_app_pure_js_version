const lines = {
  speaker1_1: {
    text: `как дела`,
    audio: 'audio/аудио1.mp3',
    prompt: ''
  },
  speaker2_1: {
    text: 'у меня все хорошо, а как ты?',
    audio: 'audio/аудио2.mp3',
    prompt: 'Say that you are OK and ask how is your partner doing'
  },
  speaker1_2: {
    text: 'у меня тоже неплохо, кстати а что ты делаешь в субботу',
    audio: 'audio/аудио3.mp3',
    prompt: ''
  },
  speaker2_2: {
    text: 'в субботу у меня футбол, а что?',
    audio: 'audio/аудио4.mp3',
    prompt:
      'tell him that you have football on Saturday, and ask him why he is asking you (а что? = and what?)'
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

  if (lines[key].prompt !== '') {
    var promptEl = document.createElement('p');
    promptEl.id = 'prompt';
    promptNode = document.createTextNode(lines[key].prompt);
    promptEl.appendChild(promptNode);
    cont.appendChild(promptEl);
  }

  var textEl = document.createElement('p');
  textEl.id = 'text';
  textNode = document.createTextNode(lines[key].text);
  textEl.appendChild(textNode);
  cont.appendChild(textEl);
}
