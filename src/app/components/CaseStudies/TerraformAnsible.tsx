import React from "react";
// import "./CaseStudy.scss";
// import arch from "/case_study_assets/case_architecture_diagram.svg";
// import jenkinsMock from "/case_study_assets/jenkins_mock.svg";
// import terraformMock from "/case_study_assets/terraform_mock.svg";
// import ansibleMock from "/case_study_assets/ansible_mock.svg";
import { motion } from "framer-motion";

export default function TerraformAnsible() {
  return (
    <main className="case-study-page">
      <section className="cs-hero">
        <div className="cs-inner container">
          <motion.div className="cs-left" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1>Terraform + Ansible + Jenkins — Automated Infra & Config</h1>
            <p className="subtitle">
              End-to-end automation: Terraform provisions cloud infrastructure, Ansible configures servers,
              and Jenkins orchestrates the CI/CD pipeline for repeatable, auditable deployments.
            </p>

            <div className="meta-grid">
              <div className="meta">
                <div className="meta-title">Duration</div>
                <div className="meta-value">4 weeks</div>
              </div>

              <div className="meta">
                <div className="meta-title">Role</div>
                <div className="meta-value">Lead DevOps Engineer</div>
              </div>

              <div className="meta">
                <div className="meta-title">Stack</div>
                <div className="meta-value">Terraform · Ansible · Jenkins · AWS</div>
              </div>

              <div className="meta">
                <div className="meta-title">Repo</div>
                <div className="meta-value"><a href="#" className="link">View on GitHub</a></div>
              </div>
            </div>

            <div className="cs-cta">
              <a className="btn primary" href="#">Live Demo</a>
              <a className="btn ghost" href="#">Download Docs</a>
            </div>
          </motion.div>

          <motion.div className="cs-right" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {/* <img src={arch} alt="Architecture diagram" /> */}
            <img src='./g.png' alt="Architecture diagram" />
          </motion.div>
        </div>
      </section>

      <section className="cs-details container">
        <h2>Implementation</h2>

        <article className="cs-block">
          <h3>Terraform — Infrastructure as Code</h3>
          <p>
            I built reusable Terraform modules that provisioned a VPC, EKS cluster, RDS instance,
            and required IAM roles. State was stored in S3 with locking via DynamoDB to support team collaboration.
          </p>
          {/* <img src={terraformMock} alt="Terraform plan" className="mock" /> */}
          <img src='terraformMock.jpg' alt="Terraform plan" className="mock" /> 
        </article>

        <article className="cs-block">
          <h3>Ansible — Configuration Management</h3>
          <p>
            A dynamic inventory script generated host groups that Ansible consumed. Playbooks installed runtime dependencies,
            configured Docker, and deployed application containers. Playbooks were idempotent and tagged for selective runs.
          </p>
          {/* <img src={ansibleMock} alt="Ansible run" className="mock" /> */}
          <img src='ansibleMock.png' alt="Ansible run" className="mock" />
        </article>

        <article className="cs-block">
          <h3>Jenkins — Pipeline Orchestration</h3>
          <p>
            Jenkins pipelines triggered on Git pushes. Pipeline steps included terraform plan/apply, inventory generation,
            and ansible-playbook runs. Notifications were sent on success/failure and artifacts were archived.
          </p>
          <img src='jenkinsMock.png' alt="Jenkins pipeline" className="mock" />
        </article>

        <article className="cs-results">
          <h3>Results & Impact</h3>
          <ul>
            <li>Provisioning automated end-to-end; reduced setup time by ~85%.</li>
            <li>Zero configuration drift in environments via Ansible enforcement.</li>
            <li>Repeatable pipelines with clear auditable runs (Terraform state + Jenkins logs).</li>
          </ul>
        </article>

        <article className="cs-learnings">
          <h3>Challenges & Learnings</h3>
          <p>
            Key challenges included inventory parsing issues and agent permissions for Docker usage in Jenkins.
            Solutions included a robust inventory script and installing Docker on Jenkins agents via Ansible.
          </p>
        </article>

        <div className="cs-actions">
          <a className="btn primary" href="#">View GitHub</a>
          <a className="btn outline" href="#">Download Full Case Study (PDF)</a>
        </div>
      </section>
    </main>
  );
}
