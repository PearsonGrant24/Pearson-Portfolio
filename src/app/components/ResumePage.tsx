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

          <div className="resume-job">
            <h4>DevOps Engineer — Mambos Chicken</h4>
            <span>Jan 2024 – Dec 2024</span>
            <ul>
              <li> - Built and maintained CI/​​CD pipelines using GitHub Actions and Jenkins for automated build, test, and
                    deploymentworkflows.</li>
                <li> - Integrated security scanning (e.g., container and code analysis) into pipelines to improve release quality.</li>
                <li> - Automated Docker image build and registry workflows to support continuous delivery.</li>
                <li> - Containerized applications using Docker and deployed workloads to AWS EKS clusters.</li>
                <li> - Provisioned AWS infrastructure using Terraform including EC2, IAM, and networking resources.</li>
                     
            </ul>
          </div>

          <div className="resume-job">
            <h4>Software Developer — Willez Engineering</h4>
            <span>Feb 2021 – Dec 2023</span>
            <ul>
                <li> - Developed backend features (Python, Java, Node.js).</li>
                <li> - Wrote automation scripts in Python.</li>
                <li> - Performed API testing & release validation.</li>
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
