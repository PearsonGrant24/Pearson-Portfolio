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
          <a href="ProjectsPage" className="btn primary">View Projects</a>
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

    </>
  );
};

export default Home;
