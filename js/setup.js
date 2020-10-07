'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES,
    surname: WIZARD_SURNAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: WIZARD_NAMES,
    surname: WIZARD_SURNAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: WIZARD_NAMES,
    surname: WIZARD_SURNAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: WIZARD_NAMES,
    surname: WIZARD_SURNAMES,
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  }
];

var renderWizard = (wizard) => {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  function getRandomElement(array) {
    for (var i = 0; i < array.length; i++) {
      var randomIndex = Math.floor(Math.random() * array.length);
      var randomElement = array[randomIndex];
    }
    return randomElement;
  }

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(wizard.name) + '\n ' + getRandomElement(wizard.surname);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(wizard.coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(wizard.eyesColor);

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
