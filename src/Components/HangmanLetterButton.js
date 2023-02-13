// Hangman letter buttons to allow user to select which letter to guess with

import "./HangmanLetterButton.css";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIncorrectLetters,
  updateRevealedWord,
  resetOff,
} from "../Store/hangmanReducers";

const HangmanLetterButton = (props) => {
  const reset = useSelector((state) => state.hangman.reset);
  const [buttonClass, setButtonClass] = useState("letter-button");
  const dispatch = useDispatch();

  const usedLettersArr = useSelector((state) => state.hangman.usedLetters);
  const currentWord = useSelector((state) => state.hangman.currentWord);

  const handleUserSelectLetter = (e) => {
    e.preventDefault();

    // Letter user has selected
    const userSelectLetter = e.target.value.toLowerCase();

    // Check whether letter has been used or not
    const checkUsedLetter = usedLettersArr.includes(userSelectLetter);

    // Letter has been used
    if (checkUsedLetter === true) {
      alert("Letter has already been used");
    }

    // Letter hasn't been used
    else {
      // Check whether selected letter is correct or not
      const checkCorrectLetter = currentWord.includes(userSelectLetter);

      // Letter is wrong
      if (checkCorrectLetter === false) {
        // Change className of button to change style to incorrect letter
        setButtonClass("incorrect-letter-button");
        dispatch(updateIncorrectLetters(userSelectLetter));
      }

      // Letter is correct
      else {
        // Change className of button to change style to correct letter
        setButtonClass("correct-letter-button");

        // Update the letters shown on the revealed word
        dispatch(updateRevealedWord(userSelectLetter));
      }
    }
  };

  useEffect(() => {
    if (reset === true) {
      setButtonClass("letter-button");
      dispatch(resetOff());
    }
  }, [reset]);

  return (
    <button
      className={buttonClass}
      value={props.letter}
      onClick={handleUserSelectLetter}
    >
      {props.letter}
    </button>
  );
};

export default HangmanLetterButton;
