import { useSelector } from "react-redux";
import "./HangmanWordReveal.css"

const HangManWordReveal = () => {
  // Obtain initial value of revealed word as "_"
  const storeRevealWord = useSelector(
    (state) => state.hangman.currentWordReveal
  ).join(" ");

  return (
    <div className="hangman-word-reveal-container">
      <div className="current-word-reveal">{storeRevealWord}</div>
    </div>
  );
};

export default HangManWordReveal;
