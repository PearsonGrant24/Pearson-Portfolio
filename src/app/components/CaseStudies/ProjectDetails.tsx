// src/pages/ProjectDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import "./ProjectDetails.scss";

type Project = any;
//const API = "http://localhost:5000";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch(`${API}/projects`)
    fetch("/projects.json")
      .then((r) => r.json())
      .then((list) => {
        const found = list.find((p: any) => p.id === id);
        setProject(found || null);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="cs-container"><p>Loading…</p></div>;
  if (!project) return <div className="cs-container"><p>Project not found</p></div>;

  return (
    <main className="cs-container">
      <header className="cs-hero">
        <div className="cs-hero-left">
          <h1>{project.title}</h1>
          <p className="subtitle">{project.shortDescription}</p>

          <div className="meta-row">
            <div className="meta-pill">Role: DevOps</div>
            <div className="meta-pill">Stack: {(project.technologies || []).join(" · ")}</div>
            {project.github && <a className="cs-link" href={project.github} target="_blank" rel="noreferrer">View Code</a>}
            {project.demo && <a className="cs-cta" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
          </div>
        </div>

        <div className="cs-hero-right">
          <img src={project.coverImage || (project.details && project.details.images && project.details.images[0]) || "/placeholder.png"} alt={project.title} />
        </div>
      </header>

      <section className="cs-section">
        <h2>Implementation</h2>
        <p>{project.details?.implementation || "No implementation details provided."}</p>
      </section>

      <section className="cs-section">
        <h2>Results</h2>
        <p>{project.details?.results || "No results provided."}</p>
      </section>

      {project.details?.images?.length > 0 && (
        <section className="cs-gallery">
          <h3>Screenshots</h3>
          <div className="grid">
            {project.details.images.map((img: string, i: number) => (
              <div key={i} className="tile">
                <img src={img} alt={`screenshot-${i}`} />
              </div>
            ))}
          </div>
        </section>
      )}

      <div style={{ marginTop: 30 }}>
        <Link to="/ProjectsPage" className="btn btn-outline">← Back to Projects</Link>
      </div>
    </main>
  );
}
