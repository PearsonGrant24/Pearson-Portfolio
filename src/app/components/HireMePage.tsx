import React from "react";
//import "./HireMePage.scss";
import { motion } from "framer-motion";

export default function HireMePage(): JSX.Element {
  return (
    <div className="hire-page">

      {/* ================= HERO ================= */}
      <section className="hire-hero">
        <div className="container hire-hero-inner">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Let’s Build Reliable, Scalable Cloud Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I help companies automate deployments, improve system reliability,
            and scale confidently using modern DevOps practices.
          </motion.p>

          <motion.div
            className="hire-hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#contact" className="btn-primary">Start a Conversation</a>
            {/* <a href="/resume" className="btn-secondary">View Resume</a> */}
            <a
            href="/Pearson-Grant-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Download PDF
          </a>

          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="hire-services">
        <div className="container">
          <h2>How I Can Help</h2>

          <div className="services-grid">
            <div className="service-card">
              <h3>CI/CD Automation</h3>
              <p>
                Design and implement reliable CI/CD pipelines that enable fast,
                safe, and repeatable deployments.
              </p>
            </div>

            <div className="service-card">
              <h3>Cloud Infrastructure</h3>
              <p>
                Architect and manage scalable cloud environments on AWS and Azure,
                optimized for cost and performance.
              </p>
            </div>

            <div className="service-card">
              <h3>Kubernetes & Containers</h3>
              <p>
                Containerize applications and deploy them securely using Kubernetes
                and cloud-native tooling.
              </p>
            </div>

            <div className="service-card">
              <h3>Infrastructure as Code</h3>
              <p>
                Build reproducible infrastructure using Terraform and best IaC
                practices.
              </p>
            </div>

            <div className="service-card">
              <h3>Monitoring & Reliability</h3>
              <p>
                Implement observability using Prometheus and Grafana to reduce
                downtime and improve incident response.
              </p>
            </div>

            <div className="service-card">
              <h3>DevOps Consulting</h3>
              <p>
                Improve DevOps processes, tooling, and collaboration across teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ME ================= */}
      <section className="hire-why">
        <div className="container">
          <h2>Why Work With Me</h2>

          <div className="why-grid">
            <div className="why-item">
              <span>✔</span>
              <p>Strong background in both software development and DevOps</p>
            </div>
            <div className="why-item">
              <span>✔</span>
              <p>Experience supporting real production systems</p>
            </div>
            <div className="why-item">
              <span>✔</span>
              <p>Security, scalability, and reliability first mindset</p>
            </div>
            <div className="why-item">
              <span>✔</span>
              <p>Comfortable working remotely with distributed teams</p>
            </div>
            <div className="why-item">
              <span>✔</span>
              <p>Clear communication and well-documented solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENT ================= */}
      <section className="hire-engagement">
        <div className="container">
          <h2>Engagement Options</h2>

          <div className="engagement-grid">
            <div className="engagement-card">Full-time Remote Roles</div>
            <div className="engagement-card">Contract / Freelance</div>
            <div className="engagement-card">Project-Based Work</div>
            <div className="engagement-card">DevOps Consulting</div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="hire-cta">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>
            Let’s discuss your infrastructure challenges and how I can help you
            build faster, safer, and more reliable systems.
          </p>

          <a href="#contact" className="btn-primary large">
            Contact Me
          </a>
        </div>
      </section>

    </div>
  );
}
