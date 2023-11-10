import React, { useState } from "react";
import "./App.css";

const choices = ["rock", "paper", "scissors"];

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleUserChoice(choice)}
            className={`choice ${choice}`}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;
