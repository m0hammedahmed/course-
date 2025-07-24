import React, { useState } from "react";
import "../css/CourseWeek.css";
import { FaLock, FaFileAlt } from "react-icons/fa";
import QuizQuestion from "./QuizQuestion";

export default function CourseWeek({ questions = 0, duration = "0 MINUTES", weekNumber = 1 }) {
  const [showQuiz, setShowQuiz] = useState(false);

  const lessons = [
    { title: "Introduction", locked: true },
    { title: "Course Overview", locked: true },
    {
      title: "Course Quiz",
      questions: questions,
      duration: duration,
      locked: false,
    },
    { title: "Course Exercise / Reference Files", locked: true },
    {
      title: "Code Editor Installation (Optional if you have one)",
      locked: true,
    },
    { title: "Embedding PHP in HTML", locked: true },
  ];

  return (
    <>
      <div className="course-week">
        <h3>Week {weekNumber}</h3>
        <p className="description">
          Advanced story telling techniques for writers: <br />
          Personas, Characters & Plots
        </p>
        <hr />

        {lessons.map((lesson, index) => {
          const isClickable =
            lesson.questions && lesson.questions > 0 && !lesson.locked;

          return (
            <div
              key={index}
              className={`lesson-row ${isClickable ? "clickable" : ""}`}
              onClick={() => {
                if (isClickable) setShowQuiz(true);
              }}
            >
              <div className="lesson-info">
                <FaFileAlt className="icon" />
                <span>{lesson.title}</span>

                {lesson.questions !== undefined && (
                  <>
                    <span className="badge green">
                      {lesson.questions} QUESTION{lesson.questions > 1 ? "S" : ""}
                    </span>
                    <span className="badge red">{lesson.duration}</span>
                  </>
                )}
              </div>
              {lesson.locked && <FaLock className="lock-icon" />}
            </div>
          );
        })}
      </div>

      {showQuiz && (
        <div className="quiz-modal">
          <div className="quiz-content">
            <button className="close-btn" onClick={() => setShowQuiz(false)}>✖</button>
            <QuizQuestion />
          </div>
        </div>
      )}
    </>
  );
}
