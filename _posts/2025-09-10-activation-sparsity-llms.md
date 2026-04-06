---
title: 'Universal Properties of Activation Sparsity in Modern LLMs'
date: 2025-09-10
permalink: /posts/2025/09/activation-sparsity-llms/
tags:
  - LLMs
  - activation sparsity
  - efficiency
---

**Activation sparsity** has been extensively studied in ReLU-based models, but methods relying on exact zero activations don't directly apply to modern LLMs that use SiLU or GELU activations. This has led to fragmented, model-specific strategies and a gap in general understanding.

<img src="/images/blog/sparsity-teaser.png" alt="Activation sparsity exploitation in FFN layers" style="width:100%;">

## A Unified Framework for LLM Sparsity

In our **[paper](https://arxiv.org/abs/2509.00454)** at *ICLR 2026*, we introduce a **general framework** for evaluating sparsity robustness in contemporary LLMs and conduct a systematic investigation across diverse model families and scales. We uncover **universal properties** of activation sparsity — notably that the potential for effective sparsity **grows with model size**. We also present the first study of activation sparsity in **diffusion-based LLMs**.

<img src="/images/blog/sparsity-results.png" alt="Critical sparsity across model sizes and tasks" style="width:100%;">
