import React, { useState, useEffect } from "react";
import "../css/QuizQuestion.css";

export default function QuizQuestion({ onClose }) {
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(572); // 9:32

  const options = ["Assam", "Bihar", "Karnataka", "Uttar Pradesh"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const mins = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="quiz-wrapper">
      {/* ✅ Header with timer and close button */}
      <div className="quiz-header">
        <div className="timer-wrapper">
          <div className="timer">⏰ {formatTime(timer)}</div>
        </div>
      </div>

      {/* ✅ Progress Indicator */}
      <div className="progress-indicators">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className={`step ${num === 2 ? "active-step" : ""}`}>
            {num}
          </div>
        ))}
      </div>

      {/* ✅ Question & Options */}
      <div className="question-box">
        <h4>1.</h4>
        <p>
          Among the following states of India, which one has the oldest rock
          formations in the country?
        </p>

        <div className="options">
          {options.map((option, index) => (
            <label
              key={index}
              className={`option ${selected === index ? "selected" : ""}`}
              onClick={() => setSelected(index)}
            >
              <input
                type="radio"
                name="option"
                checked={selected === index}
                readOnly
              />
              <span className="custom-check"></span>
              <div className="option-text">{option}</div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
