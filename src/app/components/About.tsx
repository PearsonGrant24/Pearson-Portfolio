import React from "react";
// import "./About.scss";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Briefcase,
  FolderKanban,
} from "lucide-react";

const About = () => {
  return (
    <div className="about-wrapper">

      {/* ================= HEADER SECTION ================= */}
      <section className="about-header">
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
            

        {/* Quick Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPin className="text-yellow-400 mb-3" size={32} />
            <h3 className="font-semibold text-gray-200">Location</h3>
            <p className="text-white mt-1">Harare, Zimbabwe</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail className="text-yellow-400 mb-3" size={32} />
            <h3 className="font-semibold text-gray-200">Email</h3>
            <p className="text-white mt-1">pearsongrant23@gmail.com</p>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center">
            <Briefcase className="text-yellow-400 mb-3" size={32} />
            <h3 className="font-semibold text-gray-200">Experience</h3>
            <p className="text-white mt-1">4+ Years</p>
          </div>

          {/* Projects */}
          <div className="flex flex-col items-center">
            <FolderKanban className="text-yellow-400 mb-3" size={32} />
            <h3 className="font-semibold text-gray-200">Projects Completed</h3>
            <p className="text-white mt-1">15+ Projects</p>
          </div>
        </div>

          </motion.div>

          <motion.div
            className="header-image"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="assets/elements/img/pearson.jpg" alt="Pearson Grant" />
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
              <span className="company">CargoSummit</span>
              <ul>
                <li>Built GitLab CI/CD pipelines for APIs and microservices.</li>
                <li>Developed Terraform IaC modules (EKS, VPC, RDS, IAM).</li>
                <li>Implemented pipeline quality gates + security checks.</li>
                <li>Created monitoring dashboards using Grafana & Prometheus.</li>
              </ul>
            </div>
            <span className="duration">2025 – Present</span>
          </div>

          <div className="experience-card">
            <div>
              <h3>DevOps Engineer</h3>
              <span className="company">Mambos Chicken</span>
              <ul>
                <li>Automated deployments with Jenkins pipelines.</li>
                <li>Deployed apps using Docker, ECS & Kubernetes.</li>
                <li>Integrated SonarQube for code scanning.</li>
                <li>Improved system reliability using logging + alerting.</li>
              </ul>
            </div>
            <span className="duration">2024</span>
          </div>

          <div className="experience-card">
            <div>
              <h3>Software Developer</h3>
              <span className="company">Willez Engineering</span>
              <ul>
                <li>Developed backend features (Python, Java, Node.js).</li>
                <li>Wrote automation scripts in Python.</li>
                <li>Performed API testing & release validation.</li>
              </ul>
            </div>
            <span className="duration">2021 – 2023</span>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
