import { handleStrSplit, handleMorseConvert } from "./functions";

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

describe("handleMorseConvvert", () => {
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
