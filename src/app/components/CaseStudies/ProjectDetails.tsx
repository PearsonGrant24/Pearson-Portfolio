import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import "./CaseStudyPage.scss";

type Project = {
  id: string;
  title: string;
  shortDescription?: string;
  technologies?: string[];
  details?: {
    implementation?: string;
    results?: string;
    images?: string[];
  };
  github?: string;
  mediumUrl?: string;
  pdfUrl?: string;
  coverImage?: string;
};

export default function CaseStudyPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("/projects.json")
    .then((res) => res.json())
    .then((projects) => {
      const found = projects.find((p: any) => p.id === id);
      setProject(found || null);
    })
    .catch((err) => console.error("Failed to load project", err))
    .finally(() => setLoading(false));
}, [id]);

  if (loading) return <div className="cs-loading">Loading case study…</div>;
  if (!project) return <div className="cs-error">Project not found.</div>;

  const heroImage =
    project.details?.images?.[0] || "/placeholder-project.png";

  return (
    <div className="cs-wrapper">
      <div className="cs-container">
        {/* TITLE */}
        <h1 className="cs-title">{project.title}</h1>

        {/* DESCRIPTION */}
        {project.shortDescription && (
          <p className="cs-description">{project.shortDescription}</p>
        )}

        {/* TECHNOLOGIES */}
        <div className="cs-tech-stack">
          {(project.technologies || []).map((tech) => (
            <span key={tech} className="cs-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* IMAGE */}
        {/* <div className="cs-image-wrapper">
          <img src={heroImage} alt={project.title} />
        </div>
         */}
         {project.coverImage && (
        <div className="cs-cover">
          <img src={project.coverImage} alt={project.title} />
        </div>
      )}

        {/* CONTENT */}
        <section className="cs-section">
          <h2>Implementation</h2>
          <p>{project.details?.implementation}</p>
        </section>

        <section className="cs-section">
          <h2>Results & Impact</h2>
          <p>{project.details?.results}</p>
        </section>

        {/* ACTIONS */}
        <div className="cs-actions">
          {project.mediumUrl ? (
            <a
              href={project.mediumUrl}
              target="_blank"
              rel="noreferrer"
              className="cs-btn cs-btn-outline"
            >
              Read on Medium
            </a>
          ) : (
            <span className="cs-btn cs-btn-disabled">Medium Article Coming Soon</span>
          )}

          {project.pdfUrl ? (
            <a
              href={project.pdfUrl}
              download
              className="cs-btn cs-btn-primary"
            >
              Download PDF
            </a>
          ) : (
            <span className="cs-btn cs-btn-disabled">PDF Not Available</span>
          )}
        </div>

      </div>
    </div>
  );
}


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";
// // import "./CaseStudyPage.scss";

// export default function CaseStudyPage() {
//   const { id } = useParams();
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     fetch(`/content/case-studies/chatggpt-eks.md`)
//       .then((res) => res.text())
//       .then(setContent);
//   }, [id]);

//   return (
//     <article className="cs-md-page">
//       <div className="cs-md-inner">
//         <ReactMarkdown
//           remarkPlugins={[remarkGfm]}
//           rehypePlugins={[rehypeHighlight]}
//         >
//           {content}
//         </ReactMarkdown>

//         <div className="cs-md-footer">
//           <Link to="/Projects">← Back to Projects</Link>
//         </div>
//       </div>
//     </article>
//   );
// }
