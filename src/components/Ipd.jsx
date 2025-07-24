import VideoPlayeripd from './VideoPlayeripd';
import React from 'react';
import Navbar from './Navbar';
import CourseMaterials from './CourseMaterials';
import CommentsSection from './CommentsSection';
export default function Ipd() {
  return (
    <div className="video-player-ipd">
      {/* ✅ Navbar only for desktop */}
      <Navbar />
<VideoPlayeripd />
      {/* ✅ Course Materials */}
      <CourseMaterials />
      {/* ✅ Comments Section */}
      <CommentsSection />

    </div>
  );
}
