import React, { useState } from "react";
import "../css/CourseWeek.css";
import { FaLock, FaFileAlt } from "react-icons/fa";
import QuizQuestion from "./QuizQuestion";

export default function CourseWeek({ weekNumber, questions, duration, className }) {
  const [showQuiz, setShowQuiz] = useState(false);

  const lessons = [
    { title: "Introduction", locked: true },
    { title: "Course Overview", locked: true },
    {
      title: "Course Quiz",
      questions: questions || 0,
      duration: duration || "0 MINUTES",
      locked: false,
    },
    { title: "Course Exercise / Reference Files", locked: true },
    {
      title: "Code Editor Installation (Optional if you have one)",
      locked: true,
    },
    { title: "Embedding PHP in HTML", locked: true },
  ];

  const handleLessonClick = (lesson) => {
    if (
      !lesson.locked &&
      lesson.title === "Course Quiz" &&
      lesson.questions > 0
    ) {
      setShowQuiz(true);
    }
  };

  return (
    <div className={`course-week ${className || ""}`}>
      <h3>Week {weekNumber}</h3>
      <p className="description">
        Advanced story telling techniques for writers: <br />
        Personas, Characters & Plots
      </p>
      <hr />

      {lessons.map((lesson, index) => (
        <div
          key={index}
          className={`lesson-row ${
            !lesson.locked &&
            lesson.title === "Course Quiz" &&
            lesson.questions > 0
              ? "clickable"
              : ""
          }`}
          onClick={() => handleLessonClick(lesson)}
        >
          <div className="lesson-info">
            <FaFileAlt className="icon" />
            <span>{lesson.title}</span>
            {lesson.questions !== undefined && (
              <>
                <span className="badge green">{lesson.questions} QUESTION</span>
                <span className="badge red">{lesson.duration}</span>
              </>
            )}
          </div>
          {lesson.locked && <FaLock className="lock-icon" />}
        </div>
      ))}

      {showQuiz && (
        <div className="quiz-modal">
          <div className="quiz-content">
            <button className="close-btn" onClick={() => setShowQuiz(false)}>✖</button>
            <QuizQuestion />
          </div>
        </div>
      )}
    </div>
  );
}
