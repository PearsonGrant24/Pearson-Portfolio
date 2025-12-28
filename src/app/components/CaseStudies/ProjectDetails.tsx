import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import "../styles/CaseStudyPage.scss";

type Project = {
  id: string;
  title: string;
  shortDescription?: string;
  details?: {
    implementation?: string;
    results?: string;
    images?: string[];
  };
  technologies?: string[];
  github?: string;
  demo?: string;
  coverImage?: string;
};

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => {
        const found = data.find((p) => p.id === id);
        setProject(found || null);
      });
  }, [id]);

  if (!project) {
    return <div className="cs-loading">Loading case study…</div>;
  }

  return (
    <article className="cs-page">
      {/* HERO */}
      <header className="cs-hero">
        <h1>{project.title}</h1>
        <p className="cs-subtitle">{project.shortDescription}</p>

        <div className="cs-meta">
          {project.technologies?.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </header>

      {/* COVER IMAGE */}
      {project.coverImage && (
        <div className="cs-cover">
          <img src={project.coverImage} alt={project.title} />
        </div>
      )}

      {/* CONTENT */}
      <section className="cs-content">
        {/* IMPLEMENTATION */}
        <div className="cs-section">
          <h2>Implementation</h2>
          <p>{project.details?.implementation}</p>
        </div>

        {/* RESULTS */}
        <div className="cs-section">
          <h2>Results</h2>
          <p>{project.details?.results}</p>
        </div>

        {/* GALLERY */}
        {project.details?.images && (
          <div className="cs-section">
            <h2>Architecture & Screenshots</h2>
            <div className="cs-gallery">
              {project.details.images.map((img, i) => (
                <img key={i} src={img} alt={`Screenshot ${i + 1}`} />
              ))}
            </div>
          </div>
        )}

        {/* LINKS */}
        <div className="cs-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              View Source Code
            </a>
          )}
          {project.demo && project.demo !== "Not Available" && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Download pdf
            </a>
          )}
        </div>
      </section>
    </article>
  );
}
