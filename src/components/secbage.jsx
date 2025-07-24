import React from 'react';
import CourseMaterials from './CourseMaterials';
import '../css/SecPage.css';
import CourseWeek from './CourseWeek';
import CommentsSection from './CommentsSection';


export default function SecPage() {
  return (
    <div className="container">
      <div className="fir">
        <CourseMaterials />
        <CommentsSection />
    </div>
    <div className="sec">
<CourseWeek questions={2} duration="15 MINUTES" weekNumber={"5 - 8"} />
<CourseWeek 
  questions={10} 
  duration="20 MINUTES" 
  weekNumber={"9 - 15"} 
  style={{ marginTop: '20px', important: true }}
/>
    </div>
    </div>
  );
}
