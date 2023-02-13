// Header will include heading (Hangman), help button that will show a popup of the rules

import { useState } from "react";
import { Modal } from "react-bootstrap";

import "./Header.css";

// Help Button that shows popup of the rules of the game
const Help = () => {
  const [showRules, setShowRules] = useState(false);

  // Function to hide/close rules popup
  const handleClose = () => setShowRules(false);

  // Function to show rules popup
  const handleShow = () => setShowRules(true);

  return (
    <div className="help-button-popup-container">
      <button className="help-button" onClick={handleShow}>Help</button>
      <Modal show={showRules} onHide={handleClose}>
        <Modal.Header className="help-header" closeButton>Rules of the Game:</Modal.Header>
        <Modal.Body>
          <ol>
            <li>
              Guess the letters of the hidden word(s), by typing a letter into
              the input box and then submitting your letter with the button.
            </li>
            <li>You cannot reuse letters that have already been submitted.</li>
            <li>
              Each time a correct letters is guessed, new letter(s) will be
              revealed. Once all letters are revealed you have won the game!
            </li>
            <li>
              Each time an incorrect guess is made, a new part of the hangman
              will be drawn. Giving you 10 lives until the drawing is complete
              and Game is Over
            </li>
          </ol>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading1">Hangman</h1>
      <Help />
    </header>
  );
};

export default Header;
