---
title: 'Efficient Model-Stealing Attacks Against Inductive Graph Neural Networks'
date: 2024-10-01
permalink: /posts/2024/10/efficient-gnn-stealing/
tags:
  - model stealing
  - graph neural networks
  - security
---

**Inductive Graph Neural Networks (GNNs)** are becoming increasingly important in real-world applications, making them attractive targets for model-stealing attacks. While significant effort has been devoted to stealing models trained on images and text, little attention has been given to GNNs.

<img src="/images/blog/gnn-ecai-teaser.png" alt="GNN model stealing attack overview" style="width:100%;">

## Unsupervised GNN Stealing

In our **[paper](https://arxiv.org/abs/2405.12295)** at *ECAI 2024*, we introduce a new method for **unsupervised model-stealing attacks** against inductive GNNs, using graph contrastive learning and spectral graph augmentations to efficiently extract information from the target model. Our approach outperforms prior state-of-the-art across all six evaluated datasets, achieving superior fidelity and downstream accuracy while requiring fewer queries.

<img src="/images/blog/gnn-ecai-results.png" alt="Attack performance across datasets" style="width:100%;">
