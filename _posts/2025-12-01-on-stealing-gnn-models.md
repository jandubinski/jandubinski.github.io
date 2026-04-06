---
title: 'On Stealing Graph Neural Network Models'
date: 2025-12-01
permalink: /posts/2025/12/on-stealing-gnn-models/
tags:
  - model stealing
  - graph neural networks
  - security
---

Current **GNN model-stealing methods** rely heavily on queries to the victim model, assuming no hard query limits. In practice, the number of allowed queries can be severely limited.

<img src="/images/blog/gnn-stealing-teaser.png" alt="GNN stealing attack overview" style="width:100%;">

## Stealing GNNs with Minimal Queries

In our **[paper](https://arxiv.org/abs/2511.07170)** at *AAAI 2026*, we show how an adversary can extract a GNN with **very limited interactions**. Our approach first obtains the model backbone without direct queries to the victim, then strategically utilizes a fixed query budget to extract the most informative data. Experiments on eight real-world datasets demonstrate the attack's effectiveness even under severe query restrictions and active defenses.

<img src="/images/blog/gnn-stealing-results.png" alt="Attack accuracy and fidelity under query budgets" style="width:100%;">
