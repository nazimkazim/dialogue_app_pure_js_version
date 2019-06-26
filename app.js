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
    speaker: 2,
    helpers: [
      {
        word_mother: "I'm all right",
        word_target: 'У меня все хорошо'
      },
      {
        word_mother: 'And you?',
        word_target: 'А как ты?'
      }
    ]
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
      'tell your partner that you have football on Saturday, and ask him why he is asking you (а что? = why are you asking?)'
  },
  speaker1_3: {
    text: 'Просто я хотел пригласить тебя на день рождения',
    audio: 'audio/аудио5.mp3',
    speaker: 1,
    prompt: ''
  },
  speaker2_3: {
    text: 'Ты знаешь в субботу у меня работа, к сожалению, я не смогу прийти',
    audio: 'audio/аудио6.mp3',
    speaker: 2,
    prompt:
      'Tell that on Saturday, unfortunately, you have work, and that you cannot come. You can start with "You know what"'
  },
  speaker1_4: {
    text: 'Тогда как насчет воскресенья',
    audio: 'audio/аудио7.mp3',
    speaker: 1,
    prompt: ''
  },
  speaker2_4: {
    text:
      'Да, давай увидимся в Воскресенье, как раз, у буду свободен весь день',
    audio: 'audio/аудио8.mp3',
    speaker: 2,
    prompt:
      "Tell your partner: Yes, let's meet on Sunday, it just so happens that, I will be free on Sunday the entire day"
  }
};

var cont = document.getElementById('cont');
var overallScore = 0;
var ratings =
  '<div class="ratings"><input class="rating-check" type="radio" name="name" id="id-5"><label for="id-5"></label><input class="rating-check" type="radio" name="name" id="id-4"><label for="id-4"></label><input class="rating-check" type="radio" name="name" id="id-3" checked><label for="id-3"></label><input class="rating-check" type="radio" name="name" id="id-2"><label for="id-2"></label><input class="rating-check" type="radio" name="name" id="id-1"><label for="id-1"></label></div>';

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

  // Create a tooltip
  var tooltip = document.createElement('div');
  tooltip.classList = 'tooltip';
  tooltip.innerHTML += 'tip';

  // Create a tooltip item
  var itemMotherWord = document.createElement('span');
  var itemTargetWord = document.createElement('span');
  itemMotherWord.classList = 'tip';
  itemTargetWord.classList = 'tip';

  if (lines[key].helpers) {
    let helpers = lines[key].helpers;
    for (let i = 0; i < helpers.length; i++) {
      var itemTextWordMother = document.createTextNode(helpers[i].word_mother);
      var itemTextWordTarget = document.createTextNode(helpers[i].word_target);
      itemMotherWord.appendChild(itemTextWordMother);
      itemTargetWord.appendChild(itemTextWordTarget);
    }
  }

  if (lines[key].helpers) {
    tooltip.appendChild(itemTargetWord);
    tooltip.appendChild(itemMotherWord);
  }

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
    speaker1Div.appendChild(tooltip);
  } else {
    // append to speaker 2 div
    speaker2Div.appendChild(soundDiv);
    speaker2Div.appendChild(tooltip);
    speaker2Div.appendChild(textCont);
    textCont.classList += ' text-cont-greenish';
    speaker2Div.appendChild(promptCont);
    cont.appendChild(speaker2Div);
    speaker2Div.appendChild(toggleButtonCont);
    speaker2Div.appendChild(tooltip);
    speaker2Div.innerHTML += ratings;
  }
}

const showText = function(event) {
  event.target.parentNode.parentNode.children[1].childNodes[0].classList.toggle(
    'show'
  );
};

const giveRatings = function(event) {
  console.log(event.target);
};

document.querySelector('.rating-check').addEventListener('click', giveRatings);

document.querySelector('#cont').addEventListener('click', showText);
