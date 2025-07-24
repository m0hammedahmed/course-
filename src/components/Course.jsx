import React, { useState } from "react";
import "../css/Course.css";
import { FaLock, FaFileAlt } from "react-icons/fa";
import QuizQuestion from "./QuizQuestion";

export default function Course({ questions = 0, duration = "0 MINUTES", weekNumber = 1 }) {
  const [showQuiz, setShowQuiz] = useState(false);

  const lessons = [
    { title: "Introduction", locked: true },
    { title: "Course Overview", locked: true },
    {
      title: "Course Quiz",
      questions,
      duration,
      locked: false,
    },
    { title: "Course Exercise / Reference Files", locked: true },
    { title: "Code Editor Installation", locked: true },
    { title: "Embedding PHP in HTML", locked: true },
  ];

  return (
    <>
      <div className="course-wrapperr">
        <h3 className="course-title">Week {weekNumber}</h3>
        <p className="course-description">
          Advanced storytelling techniques for writers: <br />
          Personas, Characters & Plots
        </p>
        <hr className="course-divider" />

        <div className="course-columns">
          {Array.from({ length: 2 }, (_, colIndex) => (
            <div className="course-column" key={colIndex}>
              {lessons
                .slice(colIndex * 3, colIndex * 3 + 3)
                .map((lesson, index) => {
                  const isClickable = lesson.questions && !lesson.locked;
                  return (
                    <div
                      key={index}
                      className={`course-lesson ${isClickable ? "clickable-lesson" : ""}`}
                      onClick={() => isClickable && setShowQuiz(true)}
                    >
                      <div className="lesson-content">
                        <FaFileAlt className="lesson-icon" />
                        <span className="lesson-title">{lesson.title}</span>

                        {lesson.questions !== undefined && (
                          <>
                            <span className="lesson-badge green-badge">
                              {lesson.questions} Q
                            </span>
                            <span className="lesson-badge red-badge">
                              {lesson.duration}
                            </span>
                          </>
                        )}
                      </div>
                      {lesson.locked && <FaLock className="lesson-lock-icon" />}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {showQuiz && (
        <div className="quiz-overlay">
          <div className="quiz-box">
            <button className="quiz-close-btn" onClick={() => setShowQuiz(false)}>✖</button>
            <QuizQuestion />
          </div>
        </div>
      )}
    </>
  );
}
