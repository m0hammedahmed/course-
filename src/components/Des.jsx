
import React from 'react';
import Navbar from "./Navbar";
import VideoPlayer from "./VideoPlayer";
import SecPage from "./secbage";
import CommentsSection from "./CommentsSection";

export default function Des() {
  return (
    <div className="des">
        {/* ✅ Navbar only for desktop */}
        <Navbar />
    
        {/* ✅ Video Player */}
        <VideoPlayer />
    
        {/* ✅ Section Page — فقط للديسكتوب */}
        <SecPage />
    
       
       
     
     
    </div>
  );
}
