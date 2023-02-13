import { createSlice } from "@reduxjs/toolkit";

import { hangmanHiddenWord, randomWord } from "../Components/hangmanHiddenWord";

let currentWord = randomWord().toLowerCase();
let currentWordArr = currentWord.split("");
let currentWordReveal = hangmanHiddenWord(currentWord);

// Store letters that use have submitted
const usedLetters = [];

// Check whether there are multiple words
const checkMultipleWords = (currentWord) => {
  let correctLettersCount = 0;
  if (currentWord.includes("-") === true) {
    // Set correct letters count to take account of space between word
    correctLettersCount += 1;
  } else {
    correctLettersCount = 0;
  }
  return correctLettersCount;
};

export const hangmanSlice = createSlice({
  name: "hangman",
  initialState: {
    usedLetters,
    currentWord: currentWordArr,
    currentWordReveal: currentWordReveal,
    correctLettersCount: checkMultipleWords(currentWord),
    incorrectLettersCount: 0,
    reset: false,
  },

  reducers: {
    updateRevealedWord: (state, action) => {
      const currentWord = state.currentWord;
      const currentWordReveal = state.currentWordReveal;
      const userSelectLetter = action.payload;
      const usedLettersArr = state.usedLetters;

      // Update usedLetterArr with the selected user letter
      usedLettersArr.push(userSelectLetter);

      // Map through current word in play and update current letters revealed
      currentWord.map((letter, index) => {
        if (userSelectLetter === letter) {
          currentWordReveal[index] = letter;

          // Update correctLettersCount each time a letter matches
          state.correctLettersCount = state.correctLettersCount + 1;
        }
        return letter;
      });
    },

    updateIncorrectLetters: (state, action) => {
      const userSelectLetter = action.payload;
      const usedLettersArr = state.usedLetters;

      // Update usedLetterArr with the selected user letter
      usedLettersArr.push(userSelectLetter);

      // Update number of times user selects letter wrong to update hangman image
      state.incorrectLettersCount = state.incorrectLettersCount + 1;
    },

    restartGame: () => {
      // Reset store back to default and generate a new word in play
      let newWord = randomWord().toLowerCase();
      let newWordArr = newWord.split("");
      let newWordReveal = hangmanHiddenWord(newWord);

      const initialHangmanState = {
        usedLetters: [],
        currentWord: newWordArr,
        currentWordReveal: newWordReveal,
        correctLettersCount: checkMultipleWords(newWord),
        incorrectLettersCount: 0,
        reset: true,
      };
      return initialHangmanState;
    },

    // Turn reset back to false after game has finished resetting
    resetOff: (state) => {
      state.reset = false;
    },
  },
});

export const {
  updateRevealedWord,
  updateIncorrectLetters,
  restartGame,
  resetOff,
} = hangmanSlice.actions;
export default hangmanSlice.reducer;
