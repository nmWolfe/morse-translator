import "../scss/styles.scss";
import {
  handleStrSplit,
  handleMorseConvert,
  handleMorseSplit,
  handleEngConvert,
} from "./functions";

const engInput = document.querySelector("#eng-input") as HTMLInputElement;
const engSubmit = document.querySelector("#eng-submit") as HTMLButtonElement;
const engCode = document.querySelector("#eng-code") as HTMLDivElement;
if (!engInput || !engSubmit || !engCode) {
  throw new Error("Eng var error");
}
const morseInput = document.querySelector("#morse-input") as HTMLInputElement;
const morseSubmit = document.querySelector(
  "#morse-submit"
) as HTMLButtonElement;
const morseDisplay = document.querySelector("#morse-code") as HTMLDivElement;
if (!morseInput || !morseSubmit || !morseDisplay) {
  throw new Error("Morse var error");
}

// Handle Eng - Morse
const handleEngToMorse = (string: string) => {
  const splitStr = handleStrSplit(string);
  const morseArr = handleMorseConvert(splitStr);
  engCode.innerHTML = morseArr;
};
engSubmit.addEventListener("click", () => {
  handleEngToMorse(engInput.value);
});

// Handle Morse - Eng

const handleMorseToEng = (string: string) => {
  const splitStr = handleMorseSplit(string);
  const engArr = handleEngConvert(splitStr);

  morseDisplay.innerHTML = engArr;
};
morseSubmit.addEventListener("click", () => {
  handleMorseToEng(morseInput.value);
});
