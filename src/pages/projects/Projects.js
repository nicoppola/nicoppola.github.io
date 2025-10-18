import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

import catholicDashPic from '../../assets/images/catholic_dash.png';
import happyPlantPic from '../../assets/images/happyPlant.png';
import signagePic from '../../assets/images/signage.png';

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="subtitle">Turning ideas into elegant, functional experiences.</p>

      <div className="project-grid">
        <ProjectCard
          image={catholicDashPic}
          title="Catholic Dashboard"
          subtitle="A kotlin/compose multiplatform project that provides a quick reference to prayers and Catholic info about each day."
        />
        <ProjectCard
          image={signagePic}
          title="Digital Signage"
          subtitle="A side by side digital signage solution with a photo/signage management website.  Runs on a raspberry pi zero 2w."
        />
        <ProjectCard
          image={happyPlantPic}
          title="Happy Plant"
          subtitle="Temperature and humidity monitor that aggregates data in a time series database."
        />
      </div>
    </div>
  );
}
