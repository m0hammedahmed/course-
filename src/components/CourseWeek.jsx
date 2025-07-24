import React from "react";
import "../css/CourseWeek.css";
import { FaLock, FaFileAlt } from "react-icons/fa";

export default function CourseWeek() {
  const lessons = [
    { title: "Introduction", locked: true },
    { title: "Course Overview", locked: true },
    {
      title: "Course Overview",
      questions: 0,
      duration: "10 MINUTES",
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
    <div className="course-week">
      <h3>Week 1-4</h3>
      <p className="description">
        Advanced story telling techniques for writers: <br />
        Personas, Characters & Plots
      </p>
      <hr />

      {lessons.map((lesson, index) => (
        <div key={index} className="lesson-row">
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
    </div>
  );
}
