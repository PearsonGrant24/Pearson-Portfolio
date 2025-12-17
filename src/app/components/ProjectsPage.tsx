import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
//import "../styles/ProjectsPage.scss";

type Project = {
  id: string;
  title: string;
  shortDescription?: string;
  category?: string[];
  details?: {
    implementation?: string;
    results?: string;
    images?: string[];
  };
  technologies?: string[];
  github?: string;
  demo?: string;
  coverImage?: string;
  createdAt?: number;
  updatedAt?: number;
};

export default function ProjectsPage(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
   const [activeFilter, setActiveFilter] = useState<string>("All");


  useEffect(() => {
  setLoading(true);

  fetch("/projects.json")
    .then((res) => res.json())
    .then((data) => setProjects(Array.isArray(data) ? data : []))
    .catch((err) => {
      console.error("Failed to load projects", err);
      setProjects([]);
    })
    .finally(() => setLoading(false));
}, []);


  // derive filters from technologies (unique)

  const categories = useMemo(() => {
  const set = new Set<string> (projects.map((p) => p.category || "Software"));
    
    // const set = new Set<string>();

    // projects.forEach((p) => {
    //   if (Array.isArray(p.category)) {
    //     p.category.forEach((c) => set.add(c));
    //   }
    // });

    return ["All", ...Array.from(set)];
  }, [projects]);

  // Filtering logic (corrected)
  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;

     return projects.filter((p) => 
   p.category === activeFilter);
   // );
  }, [projects, activeFilter]);

  // const [filter, setFilter] = useState<string>("All");

  // const categories = useMemo(() => {
  //   const set = new Set<string>
  // (projects.map((p) => p.category || "Software"));
  //   return ["All", ...Array.from(set)];
  // }, []);

  // const filtered = useMemo(() => {
  //   if (filter === "All") return projects;
  //   return projects.filter((p) => 
  // p.category === filter);
  // }, [filter]);


  // const filters = useMemo(() => {
  //   const set = new Set<string>();
  //   projects.forEach((p) => p.category .forEach((t) => set.add(t)));
  //   return ["All", ...Array.from(set)];
  // }, [projects]);

  // const filtered = useMemo(() => {
  //   if (activeFilter === "All") return projects;
  //   return projects.filter((p) => (p.category || []).includes(activeFilter));
  // }, [projects, activeFilter]);

  return (
    <div className="pg-projects-page">
      <div className="pg-hero">
        <div className="pg-hero-inner container">
          <h1 className="pg-title">My Work Portfolio</h1>
          <p className="pg-sub">
            Explore recent work across DevOps, infrastructure automation, cloud engineering,
            and software projects — detailed case studies, architecture and outcomes.
          </p>

          <div className="pg-filters" role="tablist" aria-label="Project filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`pg-filter-btn ${activeFilter === c ? "active" : ""}`}
              onClick={() => setActiveFilter(c)}
              aria-pressed={activeFilter === c}
            >
              {c}
            </button>
          ))}
        </div>
          
        </div>
      </div>

      <div className="container pg-grid-wrap">
        {loading ? (
          <div className="pg-loading">Loading projects…</div>
        ) : filtered.length === 0 ? (
          <div className="pg-empty">No projects found.</div>
        ) : (
          <div className="pg-grid">
            {filtered.map((p) => {
              const image = p.coverImage ?? p.details?.images?.[0] ?? "/placeholder.png";
              return (
                <article className="pg-card" key={p.id}>

                  <div className="pg-card-media">
                    {p.coverImage ? (
                      <img src={p.coverImage} alt={p.title} loading="lazy" />
                    ) : (          
                      <div className="pg-card-media-fallback" />
                    )}
                    {p.category && <span className="pg-badge">{p.category}</span>}
                  </div>

                  <div className="pg-card-body">
                    <div className="pg-card-meta">
                      <div className="pg-card-title">{p.title}</div>
                      <div className="pg-card-sub">{p.shortDescription}</div>
                    </div>

                    <div className="pg-card-tags">
                      {(p.technologies || []).map((t) => (
                        <span className="pg-pill" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pg-card-actions">
                      <a
                        className="pg-btn pg-btn-outline"
                        href={p.github ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View code for ${p.title}`}
                      >
                        View Code
                      </a>

                      <Link to={`/CaseStudies/${p.id}`} className="pg-btn pg-btn-primary" aria-label={`Open case study ${p.title}`}>
                        Case Study
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

{/* <div className="pg-category-pill">
                  {p.category ?? "General"}
                </div> */}