import React from "react";
import { motion } from "framer-motion";

const ResumePage: React.FC = () => {
  return (
    <section className="resume-page">
      <div className="resume-container">

        {/* // Header  */}
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Pearson Grant</h1>
          <h2>DevOps Engineer</h2>
          <p className="resume-meta">
            Remote · pearsongrant23@gmail.com · GitHub: PearsonGrant24
          </p>

          <a
            href="/Pearson-Grant-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-download"
          >
            Download PDF
          </a>
        </motion.div>

        {/* Summary */}
        <div className="resume-section">
          <h3>Professional Summary</h3>
          <p>
            DevOps Engineer with experience designing, automating, and operating
            scalable cloud infrastructure. Strong background in CI/CD,
            Infrastructure as Code, containerization, and monitoring. Focused on
            reliability, automation, and continuous improvement.
          </p>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h3>Technical Skills</h3>
          <ul className="skills-grid">
            <li>AWS, Azure</li>
            <li>Docker, Kubernetes, ECS, EKS</li>
            <li>Terraform, CloudFormation</li>
            <li>GitLab CI, Jenkins, GitHub Actions</li>
            <li>Prometheus, Grafana</li>
            <li>Python, Node.js</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="resume-section">
          <h3>Experience</h3>

          <div className="resume-job">
            <h4>DevOps Engineer — CargoSummit</h4>
            <span>May 2025 – Present</span>
            <ul>
              <li>Built GitLab CI/CD pipelines for APIs and microservices.</li>
              <li>Designed Terraform modules for AWS infrastructure.</li>
              <li>Implemented monitoring using Prometheus and Grafana.</li>
            </ul>
          </div>

          <div className="resume-job">
            <h4>DevOps Engineer — Mambos Chicken</h4>
            <span>Jan 2024 – Dec 2024</span>
            <ul>
              <li>Automated deployments with Jenkins pipelines.</li>
              <li>Deployed services using Docker, ECS, and Kubernetes.</li>
              <li>Integrated SonarQube for code quality checks.</li>
            </ul>
          </div>

          <div className="resume-job">
            <h4>Software Developer — Willez Engineering</h4>
            <span>Feb 2021 – Dec 2023</span>
            <ul>
              <li>Developed backend services using Python, Java, and Node.js.</li>
              <li>Automated operational tasks using Python scripts.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h3>Education</h3>
          <p>
            Bachelor of Software Engineering (Honours) <br />
            Zimbabwe Open University
          </p>
        </div>

        {/* Certifications */}
        <div className="resume-section">
          <h3>Certifications</h3>
          <ul>
            <li>Microsoft Azure Fundamentals</li>
            <li>Oracle Data Management</li>
            <li>Microsoft C# Certification</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ResumePage;
