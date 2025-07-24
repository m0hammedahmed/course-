import VideoPlayermop from "./VideoPlayermop";
import CourseModel from "./CourseModel";
import CommentsSection from "./CommentsSection";
import "../css/QuizQuestion.css";


export default function Mob() {
  return (
    <div className="mob">
      <VideoPlayermop />
      <CourseModel />
      <CommentsSection />
    </div>
  );
}