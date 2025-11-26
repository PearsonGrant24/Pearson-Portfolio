import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="name">Pearson Grant</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DevOps Engineer | Cloud | CI/CD | Kubernetes | Terraform
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          I build scalable, secure and automated cloud infrastructure.  
          Delivering fast, reliable deployments using modern DevOps tools & practices.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Hire Me</a>
        </motion.div>

        {/* TECHNOLOGY LOGO STRIP */}
        <motion.div
          className="tech-logos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
        >
          <img src="/logos/aws.svg" alt="AWS" />
          <img src="/logos/docker.svg" alt="Docker" />
          <img src="/logos/kubernetes.svg" alt="Kubernetes" />
          <img src="/logos/terraform.svg" alt="Terraform" />
          <img src="/logos/jenkins.svg" alt="Jenkins" />
          <img src="/logos/azure.svg" alt="Azure" />
          <img src="/logos/github.svg" alt="GitHub" />
          <img src="/logos/linux.svg" alt="Linux" />
        </motion.div>
      </div>

      <motion.div
        className="hero-graphic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </motion.div>
    </section>

    <section id="about" className="about-section py-5">
  <div className="container">
    <div className="row align-items-center">
      
      {/* <!-- Left Image --> */}
      <div className="col-md-5 text-center">
        <img src="https://i.postimg.cc/fLWPqQkr/profile-example.png" 
             className="img-fluid about-img" alt="Pearson Grant"/>
      </div>

      {/* <!-- Right Content --> */}
      <div className="col-md-7">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m <strong>Pearson Grant</strong>, a dedicated DevOps Engineer with strong experience in 
          cloud infrastructure, CI/CD automation, and systems engineering. I bridge the gap between 
          development and operations by creating scalable, secure, and automated cloud architectures.
        </p>

        <p className="about-text">
          With hands-on expertise in <strong>AWS, Azure, Terraform, Kubernetes, Docker, GitHub Actions, Jenkins, and Ansible</strong>,  
          I work to eliminate manual processes and deliver fast, reliable, repeatable deployments.
        </p>

        <hr className="section-divider"/>

        {/* <!-- Experience Area --> */}
        <h3 className="subheading">Experience</h3>

        <div className="experience-item">
          <h4>DevOps Engineer — XYZ Company</h4>
          <p className="exp-date">2024 — Present</p>
          <p className="exp-text">
            Working on cloud automation, CI/CD pipeline optimization, and Kubernetes-based deployments.
          </p>
        </div>

        <div className="experience-item">
          <h4>Software Developer — ABC Solutions</h4>
          <p className="exp-date">2022 — 2023</p>
          <p className="exp-text">
            Built scalable backend solutions, integrated APIs, and collaborated with cross-functional teams.
          </p>
        </div>

        <div className="experience-item">
          <h4>DevOps Intern — TechLabs Africa</h4>
          <p className="exp-date">2021 — 2022</p>
          <p className="exp-text">
            Assisted in containerizing applications and automating infrastructure using Terraform.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Home;
