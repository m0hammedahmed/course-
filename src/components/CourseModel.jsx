import React, { useState } from 'react';
import '../css/CourseModel.css';
import { FaLock } from 'react-icons/fa';
import ProgressBar from './ProgressBar';
import QuizQuestion from "./QuizQuestion";

export default function CourseModel() {
  const [showQuiz, setShowQuiz] = useState(false);

  const modules = [
    {
      title: 'Course Introduction',
      lessons: [
        { title: 'Introduction', progress:<ProgressBar percentage={63} />, duration: '5 MINUTES', quiz: '0 QUESTIONS' },
        { title: 'Course Overview', duration: '10 MINUTES', quiz: '2 QUESTIONS', locked: false },
        { title: 'Course Exercise / Reference Files', locked: true },
        { title: 'Code Editor Installation (Optional)', locked: true },
        { title: 'Embedding PHP in HTML', locked: true },
      ]
    }
  ];

  const [openModules, setOpenModules] = useState([0]);

  const toggleModule = (index) => {
    setOpenModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleQuizOpen = (quiz) => {
    if (quiz && quiz !== '0 QUESTIONS') {
      setShowQuiz(true);
    }
  };

  return (
    <div className="course-module">
      {modules.map((mod, idx) => (
        <div key={idx} className="module">
          <div className="module-header" onClick={() => toggleModule(idx)}>
            <span>{mod.title}</span>
            <span>{openModules.includes(idx) ? '−' : '+'}</span>
          </div>

          {openModules.includes(idx) && mod.lessons.length > 0 && (
            <ul className="lesson-list">
              {mod.lessons.map((lesson, i) => (
                <li key={i} className={`lesson-item ${i === 1 ? 'active' : ''}`}
                    onClick={() => handleQuizOpen(lesson.quiz)}>
                  <div className="lesson-content">
                    <span className="icon-doc" />
                    <span>{lesson.title}</span>
                    {lesson.locked && <FaLock className="lock-icon" />}
                  </div>
                  {lesson.progress && <span className="progress">{lesson.progress}</span>}
                  {lesson.quiz && (
                    <div className="lesson-tags">
                      <span className="tag green">{lesson.quiz}</span>
                      <span className="tag red">{lesson.duration}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {showQuiz && (
        <div className="quiz-fixed-panel">
          <div className="quiz-inner">
            <button className="close-icon" onClick={() => setShowQuiz(false)}>
              ✖
            </button>
            <QuizQuestion />
          </div>
        </div>
      )}
    </div>
  );
}
