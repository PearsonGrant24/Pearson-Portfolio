---
id: "1765463346885"
title: "Deploying a ChatGPT Clone on AWS EKS"
subtitle: "An end-to-end DevOps implementation using Terraform, Jenkins, and Kubernetes"
category: Software
stack:
  - AWS
  - EKS
  - Terraform
  - Jenkins
  - Docker
  - Prometheus
  - Grafana
---

## Overview

This project demonstrates a **production-style DevOps workflow** for deploying a ChatGPT-like application on AWS Elastic Kubernetes Service (EKS).

The objective was not just deployment, but to design a **secure, automated, observable, and scalable infrastructure** using modern DevOps best practices.

---

## Architecture Design

The infrastructure was provisioned using **Terraform (Infrastructure as Code)** and consists of:

- An AWS VPC with public and private subnets
- An EKS cluster for container orchestration
- EC2 instances hosting Jenkins and SonarQube
- IAM roles and security groups enforcing least privilege access

![EKS Architecture](/uploads/architecture-diagram.png)

---

## CI/CD Pipeline (Jenkins)

The CI/CD pipeline was designed to automate:

1. Source code checkout from GitHub
2. Dependency installation
3. Static code analysis using SonarQube
4. Security scanning with Trivy
5. Docker image build & push
6. Deployment to EKS

```groovy
pipeline {
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t chatgpt-ui .'
      }
    }
    stage('Deploy') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
