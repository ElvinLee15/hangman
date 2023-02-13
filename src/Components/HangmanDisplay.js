// Display all components of the Hangman game
import "./HangmanDisplay.css";

import Header from "./Header";
import HangmanInput from "./HangmanInput";
import HangmanWordReveal from "./HangmanWordReveal";
import HangmanImgDisplay from "./HangmanImgDisplay";
import HangmanVictory from "./HangmanVictory";
import HangmanGameOver from "./HangmanGameOver";

const HangmanDisplay = () => {
  return (
    <div className="hangman-display-container">
      <Header />
      <HangmanInput />
      <HangmanWordReveal />
      <HangmanImgDisplay />
      <HangmanVictory />
      <HangmanGameOver/>
    </div>
  );
};

export default HangmanDisplay;
