import React from "react";
import "../css/ProgressBar.css";

export default function ProgressBar({ percentage }) {
  return (
    <div className="progress-container">
      <div className="bubble" style={{ left: `${percentage}%` }}>
        <div className="circle">You</div>
        <div className="triangle"></div>
      </div>

      <div className="bar">
        <div className="filled" style={{ width: `${percentage}%` }}></div>
      </div>

      <div className="percentage" style={{ left: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
}
