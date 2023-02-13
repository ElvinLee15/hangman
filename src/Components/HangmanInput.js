// Hangman render all buttons with the alphabet
import HangmanLetterButton from "./HangmanLetterButton";

import "./HangmanInput.css";

const lettersArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const HangmanInput = () => {

  // Render all of the letterButton with the corresponding letter in the array
  const letterButtons = lettersArr.map((letter) => {
    return <HangmanLetterButton letter={letter} key={letter} />;
  });

  return <div className="hangman-input-container">{letterButtons}</div>;
};

export default HangmanInput;
