import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../Store/hangmanReducers";

const HangmanGameOver = () => {
  const dispatch = useDispatch();
  const incorrectLettersCount = useSelector(
    (state) => state.hangman.incorrectLettersCount
  );

  const [showRestart, setShowRestart] = useState(false);

  // When restart button is clicked, popup closes and store values are reset with a new word.
  const handleRestart = () => {
    setShowRestart(false);
    dispatch(restartGame());
  };

  // Open restart popup when triggered
  const handleOpen = () => setShowRestart(true);

  // Render popup once the user have ran out of lives
  useEffect(() => {
    if (incorrectLettersCount === 10) {
      handleOpen();
    }
  });

  // Render popup asking whether user want to play again or not
  return (
    <>
      <Modal
        show={showRestart}
        onHide={handleRestart}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Game Over, you have ran out of lives</Modal.Title>
        </Modal.Header>
        <Modal.Body>To play again, click the Restart Button.</Modal.Body>
        <Modal.Footer>
          <Button
            className="restart-button"
            variant="primary"
            onClick={handleRestart}
          >
            Restart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HangmanGameOver;
