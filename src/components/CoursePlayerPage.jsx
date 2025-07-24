import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Mob from "./Mob";
import Des from "./Des";
import Ipd from "./Ipd";

export default function CoursePlayerPage() {
  const isMobile = useMediaQuery({ maxWidth: 759 });
  const isTablet = useMediaQuery({ minWidth: 760, maxWidth: 1300 });
  const isDesktop = useMediaQuery({ minWidth: 1301 });

  return (
    <div className="course-player-page">
      {isMobile && <Mob />}
      {isTablet && <Ipd />}
      {isDesktop && <Des />}
    </div>
  );
}
