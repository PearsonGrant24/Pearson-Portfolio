import React from "react";
import { motion } from "framer-motion";


const About = () => {

  React.useEffect(() => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter: any) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/\D/g, "");

      const increment = target / 40;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + "+";
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
    });
  }, []);

  return (
    <div className="about-wrapper">

     
{/* ================= HEADER SECTION ================= */}
<section className="about-header">
  <div className="header-glow"></div>

  <div className="header-content">
    <motion.div
      className="header-text"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>About Me</h1>

      <p>
        I am a DevOps Engineer who builds scalable cloud infrastructure,
        automates deployments, and improves system reliability using modern
        DevOps tools. With experience across AWS, CI/CD, containerization,
        Kubernetes, IaC, and monitoring, I help companies move faster,
        deploy safer, and operate more efficiently.
      </p>

      {/* ===== INFO GRID ===== */}
      <div className="info-grid">
        <div className="info-card">
          <svg className="icon" stroke="#facc15" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a8.38 8.38 0 0113 0" />
          </svg><br/>
          <span className="label">Location</span><br/>
          <span className="value">Harare,Zimbabwe</span>
        </div>

        <div className="info-card">
          <svg className="icon" stroke="#38bdf8" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8 8-8" />
          </svg><br/>
          <span className="label">Email</span><br/>
          <span className="value">pearsongrant23@gmail.com</span>
        </div>

        <div className="info-card">
          <svg className="icon" stroke="#a78bfa" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v10H3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
          </svg>
          <span className="label">Experience</span>
          <span className="value counter" data-target="4">0+ Years</span>
        </div>

        <div className="info-card">
          <svg className="icon" stroke="#fb7185" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span className="label">Projects</span>
          <span className="value counter" data-target="15">0+ Completed</span>
        </div>
      </div>
      {/* ===== END INFO GRID ===== */}

    </motion.div>

    <motion.div
      className="header-image"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="image-glow">
        <img src="/assets/elements/img/pearson.jpg" alt="Pearson Grant" />
      </div>
    </motion.div>
  </div>
</section>


      {/* ================= SKILLS SECTION ================= */}
      <section className="skills-section">
        <h2>My Skills</h2>
        <p>These are the primary skills and technologies I utilize in my work.</p>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="icon">☁️</div>
            <h3>Cloud Platforms</h3>
            <p>AWS, Azure</p>
          </div>

          <div className="skill-card">
            <div className="icon">⚙️</div>
            <h3>CI/CD</h3>
            <p>GitLab, Jenkins, GitHub Actions</p>
          </div>

          <div className="skill-card">
            <div className="icon">📦</div>
            <h3>Containerization</h3>
            <p>Docker, Kubernetes</p>
          </div>

          <div className="skill-card">
            <div className="icon">📐</div>
            <h3>Infrastructure as Code</h3>
            <p>Terraform, CloudFormation</p>
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="experience-section">
        <h2>Experience</h2>
        <p>A brief overview of my professional experience.</p>

        {/* EXPERIENCE LIST */}
        <div className="experience-list">

          <div className="experience-card">
            <div>
              <h3>DevOps Engineer</h3>
              <span className="company">CargoSummit </span><span className="remote"> -- remote </span>
              <ul>
                <li> - Designed and maintained CI/​​CD pipelines using GitHub Actions and Jenkins, improving deployment speed and
                consistency.</li>
                <li> - Automated infrastructure provisioning using Terraform, reducing manual configuration and improving environment
                reproducibility.</li>
                <li> - Built and deployed containerized applications using Docker and Kubernetes in cloud environments.</li>
                <li> - Monitored application and infrastructure performance using logging and basic observability tools, identifying and
                resolving deployment issues.</li>
                <li> - Troubleshot build failures, deployment errors, and environment inconsistencies across development and
                production.</li>
                <li> - Collaborated with developers to streamline release processes and improve deployment reliability</li>
                <li> - Contributed to incident resolution and root cause analysis (RCA), helping prevent recurring issues.</li>
                <li> - Wrote automation scripts in Bash/​​Python to reduce manual operational tasks.</li>

              </ul>
            </div>
            <span className="duration">2025 – Present</span>
          </div>

          <div className="experience-card">
            <div>
              <h3>DevOps Engineer</h3>
              <span className="company">Mambos Chicken  </span> <span className="remote"> -- on site </span>
              <ul>
                <li> - Built and maintained CI/​​CD pipelines using GitHub Actions and Jenkins for automated build, test, and
                    deploymentworkflows.</li>
                <li> - Integrated security scanning (e.g., container and code analysis) into pipelines to improve release quality.</li>
                <li> - Automated Docker image build and registry workflows to support continuous delivery.</li>
                <li> - Containerized applications using Docker and deployed workloads to AWS EKS clusters.</li>
                <li> - Provisioned AWS infrastructure using Terraform including EC2, IAM, and networking resources.</li>
              </ul>
            </div>
            <span className="duration">01/2024 - 12/2024</span>
          </div>

          <div className="experience-card">
            <div>
              <h3>Software Developer</h3> 
              <span className="company">Willez Engineering</span> <span className="remote"> -- on site </span>
              <ul>
                <li> - Developed backend features (Python, Java, Node.js).</li>
                <li> - Wrote automation scripts in Python.</li>
                <li> - Performed API testing & release validation.</li>
              </ul>
            </div>
            <span className="duration">02/2021 – 12/2023</span>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
