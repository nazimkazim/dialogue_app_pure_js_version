const lines = {
  speaker1_1: {
    text: `как дела?`,
    audio: 'audio/аудио1.mp3',
    prompt: '',
    speaker: 1
  },
  speaker2_1: {
    text: 'у меня все хорошо, а как ты?',
    audio: 'audio/аудио2.mp3',
    prompt: 'Say that you are OK and ask how is your partner doing',
    speaker: 2
  },
  speaker1_2: {
    text: 'у меня тоже неплохо, кстати а что ты делаешь в субботу',
    audio: 'audio/аудио3.mp3',
    prompt: '',
    speaker: 1
  },
  speaker2_2: {
    text: 'в субботу у меня футбол, а что?',
    audio: 'audio/аудио4.mp3',
    speaker: 2,
    prompt:
      'tell your partner that you have football on Saturday, and ask him why he is asking you (а что? = and what?)'
  }
};
var cont = document.getElementById('cont');

for (let key in lines) {
  // Creater speaker 1 div
  speaker1Div = document.createElement('div');
  speaker1Div.classList = 'speaker-1';

  // Create speaker 2 div
  speaker2Div = document.createElement('div');
  speaker2Div.classList = 'speaker-2';

  var sound = document.createElement('audio');
  var soundDiv = document.createElement('div');
  soundDiv.classList = 'sound-cont';
  sound.classList = 'audio-player';
  sound.controls = 'controls';
  sound.src = `${lines[key].audio}`;
  sound.type = 'audio/mpeg';
  soundDiv.appendChild(sound);

  if (lines[key].prompt !== '') {
    var promptEl = document.createElement('p');
    var promptCont = document.createElement('div');
    promptCont.classList = 'prompt-cont';
    promptEl.classList = 'prompt';
    promptNode = document.createTextNode(lines[key].prompt);
    promptEl.appendChild(promptNode);
    promptCont.appendChild(promptEl);
  }

  var textEl = document.createElement('p');
  var textCont = document.createElement('div');
  textEl.classList = 'text';
  textCont.classList = 'text-cont';
  textNode = document.createTextNode(lines[key].text);
  textEl.appendChild(textNode);
  textCont.appendChild(textEl);

  if (lines[key].speaker === 1) {
    // append to speaker 1 div
    speaker1Div.appendChild(soundDiv);
    speaker1Div.appendChild(textCont);
    cont.appendChild(speaker1Div);
  } else {
    // append to speaker 2 div
    speaker2Div.appendChild(soundDiv);
    speaker2Div.appendChild(promptCont);
    speaker2Div.appendChild(textCont);
    cont.appendChild(speaker2Div);
  }
}
