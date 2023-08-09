// Take string input, split letters, search morse object for corresponding key
import { Morse } from "./types";

export const morseCode: Morse = {
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

// Eng to Morse
export const handleStrSplit = (string: string) => {
  const lowerStr = string.toLowerCase();
  return lowerStr.split("");
};
export const handleMorseConvert = (string: string[]) => {
  let morseStr: string[] = [];
  for (let i: number = 0; i < string.length; i++) {
    morseStr.push(morseCode[string[i]]);
  }
  return morseStr.join(" ");
};

// Morse To Eng
export const handleMorseSplit = (string: string) => {
  return string.split(" ");
};
export const handleEngConvert = (string: string[]) => {
  const engConvert = [];
  for (let i = 0; i < string.length; i++) {
    engConvert.push(
      Object.keys(morseCode).filter((key) => {
        return morseCode[key] === string[i];
      })
    );
  }
  return engConvert.join("");
};
