'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const userDialog = document.querySelector(`.setup`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);
const amountWizards = 4;

const generateWizards = () => {

  const wizards = [];
  for (let i = 0; i < amountWizards; i++) {
    wizards.push({
      name: getRandomElement(WIZARD_NAMES),
      surname: getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    });
  }
  return wizards;
};


// function shuffleArray(array) {
//   let mixedArray = array.slice();
//   for (let i = mixedArray.length - 1; i > 0; i--) {
//     let randomIndex = Math.floor(Math.random() * (i + 1));
//     let tempValue = mixedArray[i];
//     mixedArray[i] = mixedArray[randomIndex];
//     mixedArray[randomIndex] = tempValue;
//   }
//   return mixedArray;
// }

const getRandomElement = (array) => {

  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];
  return randomElement;
};

const renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name + `\n ` + wizard.surname;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};


const drawWizards = (wizards) => {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};


const init = () => {
  const wizards = generateWizards();
  drawWizards(wizards);
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  userDialog.classList.remove(`hidden`);
};

init();
