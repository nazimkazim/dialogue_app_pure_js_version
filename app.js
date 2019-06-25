const lines = {
  speaker1_1: {
    text: `как дела?`,
    audio: 'audio/аудио1.mp3',
    prompt: '',
    speaker: 1,
    open: false
  },
  speaker2_1: {
    text: 'у меня все хорошо, а как ты?',
    open: false,
    audio: 'audio/аудио2.mp3',
    prompt: 'Say that you are OK and ask how is your partner doing',
    speaker: 2
  },
  speaker1_2: {
    text: 'у меня тоже неплохо, кстати а что ты делаешь в субботу',
    audio: 'audio/аудио3.mp3',
    prompt: '',
    speaker: 1,
    open: false
  },
  speaker2_2: {
    text: 'в субботу у меня футбол, а что?',
    audio: 'audio/аудио4.mp3',
    open: false,
    speaker: 2,
    prompt:
      'tell your partner that you have football on Saturday, and ask him why he is asking you (а что? = why are you asking?)'
  },
  speaker1_3: {
    text: 'Просто я хотел пригласить тебя на день рождения',
    audio: 'audio/аудио5.mp3',
    speaker: 1,
    prompt: '',
    open: false
  }
};

var cont = document.getElementById('cont');

for (let key in lines) {
  // Create toggle button
  var toggleButton = document.createElement('button');
  var toggleButtonCont = document.createElement('div');
  toggleButtonCont.classList = 'toggle-text';
  var togglePNode = document.createTextNode('show text');
  toggleButton.appendChild(togglePNode);
  toggleButton.classList = 'grow_box';
  toggleButtonCont.appendChild(toggleButton);

  // Create speaker 1 div
  speaker1Div = document.createElement('div');
  speaker1Div.classList = 'speaker-1';

  // Create speaker 2 div
  speaker2Div = document.createElement('div');
  speaker2Div.classList = 'speaker-2';

  // Create a sound container
  var sound = document.createElement('audio');
  var soundDiv = document.createElement('div');
  soundDiv.classList = 'sound-cont';
  sound.classList = 'audio-player';
  sound.controls = 'controls';
  sound.src = `${lines[key].audio}`;
  sound.type = 'audio/mpeg';
  soundDiv.appendChild(sound);

  if (lines[key].prompt !== '') {
    // Create a prompt container
    var promptEl = document.createElement('p');
    var promptCont = document.createElement('div');
    promptCont.classList = 'prompt-cont';
    promptEl.classList = 'prompt';
    promptNode = document.createTextNode(lines[key].prompt);
    promptEl.appendChild(promptNode);
    promptCont.appendChild(promptEl);
  }

  // Create a text container
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
    speaker1Div.appendChild(toggleButtonCont);
  } else {
    // append to speaker 2 div
    speaker2Div.appendChild(soundDiv);
    speaker2Div.appendChild(textCont);
    textCont.classList += ' text-cont-greenish';
    speaker2Div.appendChild(promptCont);
    cont.appendChild(speaker2Div);
    speaker2Div.appendChild(toggleButtonCont);
  }
}

const showText = function(event) {
  event.target.parentNode.parentNode.children[1].childNodes[0].classList.toggle(
    'show'
  );
};

document.querySelector('#cont').addEventListener('click', showText);
