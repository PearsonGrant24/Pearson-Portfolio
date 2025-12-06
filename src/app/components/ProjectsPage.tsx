// import React, { useMemo, useState } from "react";
// // import "./Projects.scss";

// type Project = {
//   id: string;
//   title: string;
//   category: "Software" | "Design" | "Marketing" | "Scratch";
//   description: string;
//   tech: string[];
//   image: string;
//   iconColor: string; // accent color for the icon
// };

// const PROJECTS: Project[] = [
//   {
//     id: "p1",
//     title: "Chatgpt clone deloyment on EKS ",
//     category: "Software",
//     description:
//       "Implemented a CI/CD pipeline for automated testing and deployment.",
//     tech: ["Jenkins", "Docker", "Kubernetes"],
//     image: "/assets/elements/img/projects/ci-pipeline.png",
//     iconColor: "#FF6B6B",
//   },
//   {
//     id: "p2",
//     title: "Terraform–Ansible Multi-Server Deployment (AWS)",
//     category: "Software",
//     description: "Designed and deployed cloud infrastructure using Terraform.",
//     tech: ["Terraform", "AWS"],
//     image: "/assets/elements/img/projects/pro-structure.png",
//     iconColor: "#5B8CFF",
//   },
//   {
//     id: "p3",
//     title: "Super Mario Deployment on EKS",//"Microservices Deployment",
//     category: "Software",
//     description: "Deployed a scalable microservices app with Kubernetes.",
//     tech: ["Kubernetes", "Helm"],
//     image: "/assets/elements/img/projects/supermario.jpeg",
//     iconColor: "#8A5CFF",
//   },
//   {
//     id: "p4",
//     title: "Product Flyer Design",
//     category: "Design",
//     description: "High-conversion marketing flyer for product launches.",
//     tech: ["Canva", "Photoshop"],
//     image: "/images/projects/flyer-design.jpg",
//     iconColor: "#FFB86B",
//   },
//   {
//     id: "p5",
//     title: "Social Campaign",
//     category: "Marketing",
//     description: "Social media marketing campaign that boosted engagement.",
//     tech: ["Meta", "Ads", "Google Analytics"],
//     image: "/images/projects/social-campaign.jpg",
//     iconColor: "#32D4D4",
//   },
//   {
//     id: "p6",
//     title: "Educational Game",
//     category: "Scratch",
//     description: "Interactive educational programming activity for children.",
//     tech: ["Scratch"],
//     image: "/images/projects/scratch-game.jpg",
//     iconColor: "#FF7BD4",
//   },
// ];

// const CATEGORIES = ["All", "Software", "Design", "Marketing", "Scratch"] as const;

// export default function Projects(): JSX.Element {
//   const [filter, setFilter] = useState<typeof CATEGORIES[number]>('All');

//   const filtered = useMemo(() => {
//     if (filter === "All") return PROJECTS;
//     return PROJECTS.filter((p) => p.category === filter);
//   }, [filter]);

//   return (
//     <section className="projects-section" id="projects">
//       <div className="projects-inner container">
//         <header className="projects-header">
//           <h2>My Work Portfolio</h2>
//           <p className="subtitle">
//             Explore recent work across DevOps, software, design and marketing.
//           </p>

//           <div className="filters" role="tablist" aria-label="Project categories">
//             {CATEGORIES.map((c) => (
//               <button
//                 key={c}
//                 className={`filter-btn ${filter === c ? "active" : ""}`}
//                 onClick={() => setFilter(c)}
//                 aria-pressed={filter === c}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         </header>

//         <div className="grid">
//           {filtered.map((p) => (
//             <article key={p.id} className="project-card" tabIndex={0}>
//               <div className="card-media">
//                 <img src={p.image} alt={p.title} loading="lazy" />
//                 <span className="badge">{p.category}</span>
//               </div>

//               <div className="card-body">
//                 {/* <div className="card-icon" style={{ background: `linear-gradient(135deg, ${p.iconColor}, rgba(0,0,0,0.05))` }}>
//                    simple SVG "stack" icon tuned to color 
//                   <svg viewBox="0 0 24 24" aria-hidden>
//                     <rect x="3" y="5" width="18" height="3" rx="1.2" fill="#fff" opacity="0.95"></rect>
//                     <rect x="6" y="11" width="12" height="3" rx="1.2" fill="#fff" opacity="0.95"></rect>
//                     <rect x="9" y="17" width="6" height="3" rx="1.2" fill="#fff" opacity="0.95"></rect>
//                   </svg>
//                 </div> */}

//                 <h3 className="card-title">{p.title}</h3>
//                 <p className="card-desc">{p.description}</p>

//                 {/* <p className="card-tech">{p.tech}</p> */}
//                 <div className="card-tech-list">
//                   {p.tech.map((t) => (
//                     <span className="tech-pill" key={t}>{t}</span>
//                   ))}
//                 </div>

//                 <div className="card-actions">
//                   <a className="btn-outline" href="TerraformAnsible" onClick={(e)=>e.preventDefault()}>View Case Study</a>
//                   <a className="btn-primary" href="#" onClick={(e)=>e.preventDefault()}>Portfolio</a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useMemo, useState } from "react";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard.tsx";
// import "../styles/projects.scss";

type Project = typeof projectsData[number];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>(projectsData.map((p) => p.category || "Software"));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return projectsData;
    return projectsData.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <main className="projects-page">
      <div className="projects-hero container">
        <h1>My Work Portfolio</h1>
        <p className="lead">Explore recent work across DevOps, software, and infrastructure.</p>

        <div className="filter-row" role="tablist" aria-label="project categories">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <section className="projects-grid" aria-live="polite">
          {filtered.map((p: Project) => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </section>
      </div>
    </main>
  );
}
