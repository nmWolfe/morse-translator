import {
  handleStrSplit,
  handleMorseConvert,
  handleMorseSplit,
  handleEngConvert,
} from "./functions";

describe("handleStrSplit", () => {
  it("should split a string into an array", () => {
    const result = handleStrSplit("hello");

    expect(result).toEqual(["h", "e", "l", "l", "o"]);
  });

  it("should split multiple words", () => {
    const result = handleStrSplit("I will split");

    expect(result).toEqual([
      "i",
      " ",
      "w",
      "i",
      "l",
      "l",
      " ",
      "s",
      "p",
      "l",
      "i",
      "t",
    ]);
  });
});

describe("handleMorseConvert", () => {
  it("should convert a passed array into morse code", () => {
    const arr = ["i", " ", "a", "m", " ", "h", "e", "r", "e"];
    const result = handleMorseConvert(arr);

    expect(result).toEqual(".. / .- -- / .... . .-. .");
  });

  it("should handle different operators", () => {
    const arr = [",", ".", "?", "(", "+"];
    const result = handleMorseConvert(arr);

    expect(result).toEqual("--..-- .-.-.- ..--.. -.--. .-.-.");
  });
});

describe("handleMorseSplit", () => {
  it("should split the input string on a space", () => {
    const result = handleMorseSplit(".... . -.--");

    expect(result).toEqual(["....", ".", "-.--"]);
  });
});

describe("handleEngConvert", () => {
  it("should convert an eng array into morse", () => {
    const arr = ["....", ".", "-.--"];
    const result = handleEngConvert(arr);

    expect(result).toEqual("hey");
  });
});
