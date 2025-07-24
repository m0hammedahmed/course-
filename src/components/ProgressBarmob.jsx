import React from "react";
import "../css/ProgressBar.css";

export default function ProgressBarmob({ percentage }) {
  return (
    <div className="progress-container">
      <div className="bubble" style={{ left: `${percentage}%` }}>
       
     
      </div>

      <div className="bar">
        <div className="filled" style={{ width: `${percentage}%` }}></div>
      </div>

      <div className="percentage" style={{ left: `${percentage}%` }}>
        
      </div>
    </div>
  );
}
