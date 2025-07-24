import React from "react";
import "../css/CourseMaterials.css";
import { FaClock, FaBook, FaUsers, FaGlobe } from "react-icons/fa";

export default function CourseMaterials() {
  const data = {
    duration: "3 weeks",
    lessons: 8,
    enrolled: "65 students",
    language: "English",
  };

  return (
    <div className="course-materials-wrapper">
      <h2>Course Materials</h2>

      <div className="materials-container">
        {[1, 2].map((_, index) => (
          <div key={index} className="material-card">
            <div className="material-row">
              <FaClock className="icon" />
              <span>Duration:</span>
              <strong>{data.duration}</strong>
            </div>
            <div className="material-row">
              <FaBook className="icon" />
              <span>Lessons:</span>
              <strong>{data.lessons}</strong>
            </div>
            <div className="material-row">
              <FaUsers className="icon" />
              <span>Enrolled:</span>
              <strong>{data.enrolled}</strong>
            </div>
            <div className="material-row">
              <FaGlobe className="icon" />
              <span>Language:</span>
              <strong>{data.language}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
