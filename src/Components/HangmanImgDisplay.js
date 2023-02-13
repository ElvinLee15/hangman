// Renders and updates hangmanImage when user guesses a letter incorrectly

import { useSelector } from "react-redux";
import "./HangmanImgDisplay.css";

const HangmanImgDisplay = () => {
  // Obtain number of incorrect letters user have guessed
  const storeIncorrectLettersCount = useSelector(
    (state) => state.hangman.incorrectLettersCount
  );

  // Use number of incorrect letters to change the img path of hangmanImage
  return (
    <div className="hangman-img-container">
      <img
        className="hangman-img"
        alt="Hangman Incorrect Guesses"
        src={require(`../hangManImages/state${storeIncorrectLettersCount}.GIF`)}
      ></img>
    </div>
  );
};

export default HangmanImgDisplay;
