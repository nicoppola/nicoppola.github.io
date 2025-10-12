import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ image, title, subtitle }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
