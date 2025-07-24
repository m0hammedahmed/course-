import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Mob from "./Mob";
import Des from "./Des";

export default function CoursePlayerPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="course-player-page">
      {isMobile ? <Mob /> : <Des />}
    </div>
  );
}
