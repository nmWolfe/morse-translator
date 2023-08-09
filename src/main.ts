import "./styles.scss";
import { Morse } from "./types";

const engInput = document.querySelector(".eng-input") as HTMLInputElement;
const engSubmit = document.querySelector(".eng-submit") as HTMLButtonElement;
const engCode = document.querySelector(".eng-code") as HTMLDivElement;

if (!engInput || !engSubmit || !engCode) {
  throw new Error("Eng var error");
}

// Store the morse code in an object

const morseCode: Morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/",
  "?": "..--..",
  "!": "-.-.--",
  ".": ".-.-.-",
  ",": "--..--",
  "'": ".----.",
  '"': ".-..-.",
  ";": "-.-.-.",
  ":": "---...",
  "+": ".-.-.",
  "-": "-....-",
  "/": "-..-.",
  "=": "-...-",
  "(": "-.--.",
  ")": "-.--.-",
};
// Take string input, split letters, search morse object for corresponding key
const handleStrSplit = (string: string) => {
  const lowerStr = string.toLowerCase();
  return lowerStr.split("");
};
const handleMorseConvert = (string: string[]) => {
  let morseStr: string[] = [];
  for (let i: number = 0; i < string.length; i++) {
    morseStr.push(morseCode[string[i]]);
  }
  return morseStr.join(" ");
};
const handleEngMorse = (string: string) => {
  const splitStr = handleStrSplit(string);
  const morseArr = handleMorseConvert(splitStr);
  engCode.innerHTML = morseArr;
};
// Return input as morse code to page
engSubmit.addEventListener("click", () => {
  handleEngMorse(engInput.value);
});
