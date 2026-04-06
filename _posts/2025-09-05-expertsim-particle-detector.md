---
title: 'ExpertSim: Fast Particle Detector Simulation with Mixture-of-Generative-Experts'
date: 2025-09-05
permalink: /posts/2025/09/expertsim-particle-detector/
tags:
  - particle physics
  - CERN
  - generative models
---

Simulating detector responses at the **Large Hadron Collider** is crucial but computationally expensive, putting significant strain on CERN's computational grid. Generative ML methods offer a faster alternative, but the data distribution varies significantly across simulations.

<img src="/images/blog/expertsim-teaser.png" alt="ExpertSim Mixture-of-Experts overview" style="width:100%;">

## ExpertSim

In our **[paper](https://arxiv.org/abs/2508.20991)** at *ECAI 2025*, we present **ExpertSim** — a Mixture-of-Generative-Experts approach tailored for the **Zero Degree Calorimeter** in the ALICE experiment. Each expert specializes in a different subset of the data, allowing for more precise and efficient generation. ExpertSim improves accuracy over traditional Monte Carlo methods while providing a significant speedup.

<img src="/images/blog/expertsim-results.png" alt="Generated vs true detector response distributions" style="width:100%;">
