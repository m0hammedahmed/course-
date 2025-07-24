import React from 'react';
import { FaBookOpen, FaFilePdf } from 'react-icons/fa';
import { AiOutlineVideoCamera, AiOutlineFileDone } from 'react-icons/ai';
import { FiAward } from 'react-icons/fi';
import '../css/VideoPlayer.css';
import ProgressBar from './ProgressBar';
import CourseWeek from './CourseWeek';

export default function VideoPlayer() {
  return (
    <div className="video_big_container">
      {/* Left Section - Video + Icons */}
      <div className="video-player-container">
        <div className="video-player">
          <video controls>
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="icons-container">
          <button className="icon-button" title="Book">
            <FaBookOpen size={30} color="#4A90E2" />
          </button>
          <button className="icon-button" title="Video Lesson">
            <AiOutlineVideoCamera size={30} color="#E67E22" />
          </button>
          <button className="icon-button" title="PDF Resource">
            <FaFilePdf size={30} color="#D32F2F" />
          </button>
          <button className="icon-button" title="Quiz">
            <AiOutlineFileDone size={30} color="#27AE60" />
          </button>
          <button className="icon-button" title="Certificate">
            <FiAward size={30} color="#F1C40F" />
          </button>
        </div>
      </div>

      {/* Right Section - Info */}
      <div className="sec_cont">
        <div className="firdev">
          <h3>Topics For This Course</h3>
          <ProgressBar percentage={63} />
        </div>

        <div className="secdev">
          <CourseWeek questions={0} duration="10 MINUTES" weekNumber="1 - 4" />
        </div>
      </div>
    </div>
  );
}
