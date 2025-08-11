---
title: "Learning Graph Representation of Agent Diffuser"
collection: publications
category: conferences
permalink: /publication/2025-01-01-learning-graph-representation-of-agent-diffuser
excerpt: 'We present LGR-AD, a multi-agent diffusion framework where expert sub-models coordinate through a learned graph, enabling dynamic adaptation during generation and outperforming standard diffusion models in accuracy and diversity.'
date: 2025-01-01
venue: 'International Conference on Autonomous Agents and Multiagent Systems (AAMAS)'
paperurl: 'https://arxiv.org/abs/2505.06761'
citation: 'Djenouri, Y., Belmecheri, N., Michalak, T., Dubiński, J., Belbachir, A. N., & Yazidi, A. (2025). "Learning Graph Representation of Agent Diffuser." In AAMAS 2025.'
authors: 'Y. Djenouri, N. Belmecheri, T. Michalak, **J. Dubiński**, A. N. Belbachir, A. Yazidi'
---

Diffusion-based generative models have significantly advanced text-to-image synthesis, demonstrating impressive text comprehension and zero-shot generalization. These models refine images from random noise based on textual prompts, with initial reliance on text input shifting towards enhanced visual fidelity over time. This transition suggests that static model parameters might not optimally address the distinct phases of generation. We introduce LGR-AD (Learning Graph Representation of Agent Diffusers), a novel multi-agent system designed to improve adaptability in dynamic computer vision tasks. LGR-AD models the generation process as a distributed system of interacting agents, each representing an expert sub-model. These agents dynamically adapt to varying conditions and collaborate through a graph neural network that encodes their relationships and performance metrics. Our approach employs a coordination mechanism based on top-k maximum spanning trees, optimizing the generation process. Each agent's decision-making is guided by a meta-model that minimizes a novel loss function, balancing accuracy and diversity. Theoretical analysis and extensive empirical evaluations show that LGR-AD outperforms traditional diffusion models across various benchmarks, highlighting its potential for scalable and flexible solutions in complex image generation tasks.
