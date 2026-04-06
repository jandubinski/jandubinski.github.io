---
title: 'Learning Graph Representation of Agent Diffusers'
date: 2025-01-15
permalink: /posts/2025/01/learning-graph-agent-diffuser/
tags:
  - multi-agent systems
  - diffusion models
  - text-to-image
---

**Text-to-image diffusion models** refine images from noise based on textual prompts, but the generation process has distinct phases — early steps rely on text input while later steps focus on visual fidelity. Static model parameters may not be optimal for both.

<img src="/images/blog/lgr-ad-teaser.png" alt="LGR-AD multi-agent architecture" style="width:100%;">

## LGR-AD: Multi-Agent Image Generation

In our **[paper](https://arxiv.org/abs/2505.06761)** at *AAMAS 2025*, we introduce **LGR-AD** — a multi-agent system where each agent represents an expert diffusion sub-model. These agents dynamically adapt to varying conditions and collaborate through a graph neural network that encodes their relationships and performance metrics. A coordination mechanism based on top-k maximum spanning trees optimizes the generation process. LGR-AD outperforms traditional diffusion models across various benchmarks.

<img src="/images/blog/lgr-ad-results.png" alt="LGR-AD generation quality results" style="width:100%;">
