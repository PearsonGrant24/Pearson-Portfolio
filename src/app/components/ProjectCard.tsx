import React from "react";

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  technologies: string[];
  coverImage?: string;
  category?: string;
  github?: string;
  caseStudyUrl?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pg-card" aria-labelledby={`title-${project.id}`}>
      <div className="pg-card-media">
        {project.coverImage ? (
          <img src={project.coverImage} alt={project.title} loading="lazy" />
        ) : (
          <div className="pg-card-media-fallback" />
        )}
        {project.category && <span className="pg-badge">{project.category}</span>}
      </div>

      <div className="pg-card-body">
        <h3 id={`title-${project.id}`}>{project.title}</h3>
        {project.subtitle && <div className="pg-sub">{project.subtitle}</div>}
        {project.description && <p className="pg-desc">{project.description}</p>}

        <div className="pg-techs" aria-label="technologies">
          {project.technologies.map((t) => (
            <span className="pg-pill" key={t}>{t}</span>
          ))}
        </div>

        <div className="pg-actions">
          <a className="btn btn-outline" href={project.caseStudyUrl} aria-label={`View case study ${project.title}`}>
            View Case Study
          </a>
          <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
      </div>
    </article>
  );
}
