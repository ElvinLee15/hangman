# Hangman React Project

# Project Aim
Use all the concepts (React, Components, States, Hooks and Redux) that have been learned in the bootcamp on React and apply it to the creation of the hangman app.

# Project Features:
- Help button to provide instructions to user on how to play the game
- Provide an option for user to restart/reset the game when they win/lose on the game.
- Produce easy to understand UI for user to play the game (button will change colours based on whether they guessed the correct letter or not)

# Instructions running the app:
- Download all the files into a single folder
- Open VSCode and then open the folder at where you stored the downloaded files.
- Open a terminal in VSCode and then type: npm install
- This installs the node package modules required to run the app
- After the installation has finished, in the terminal type: npm start
- This will then initialise the app and it will be ran on your browser on port local:3000.

# Instructions how to play the game:
- Once you have the app running on your browser, you are ready to start playing hangman.
- A hidden word is shown on the screen, represented with lines of "_". If there are multiple words, there will be "|" between the hidden words.
- You are presented buttons with letters on to allow you to guess the letter within the hidden word.
- If you guess the correct letter, new letter(s) will be revealed in the hidden word and the button will change green, to show it is a correct letter and has already been used.
- If you guess incorrectly, the image will show a part of the hangman and the button will turn red to show it is an incorrect letter and has already been used. You will have 10 lives before the hangman image completes/game over.
- Once all letters are guessed of the hidden word, you will be asked whether you want to restart the game to play again.
