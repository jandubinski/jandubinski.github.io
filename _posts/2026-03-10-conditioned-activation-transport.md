---
title: 'Conditioned Activation Transport for T2I Safety Steering'
date: 2026-03-10
permalink: /posts/2026/03/conditioned-activation-transport/
tags:
  - T2I safety
  - activation steering
  - generative models
---

Despite their impressive capabilities, current **Text-to-Image (T2I)** models remain prone to generating unsafe content. While **activation steering** offers a promising inference-time intervention, we find that linear steering methods frequently degrade image quality on benign prompts.

<img src="/images/blog/cat-teaser.jpg" alt="Comparison of steering methods on unsafe prompts" style="width:100%;">

## Conditioned Activation Transport (CAT)

In our **[paper](https://arxiv.org/abs/2603.03163)**, we first construct **SafeSteerDataset** — 2,300 contrastive safe/unsafe prompt pairs with high cosine similarity. We then propose **CAT**, a framework that uses geometry-based conditioning and nonlinear transport maps. By activating transport maps only within unsafe activation regions, CAT minimizes interference with benign queries. Validated on Z-Image and Infinity architectures, CAT significantly reduces Attack Success Rate while maintaining image fidelity.

<img src="/images/blog/cat-results.png" alt="Synthetic 2D transport comparisons" style="width:100%;">
