---
title: 'Do LLMs Understand The Safety of Their Inputs?'
date: 2025-03-05
permalink: /posts/2025/03/llm-safety-latent-space/
tags:
  - LLM safety
  - moderation
  - latent space
---

Modern **instruction-finetuned LLMs** incorporate safety alignment during training, yet they still frequently require external moderation tools. Guard models are costly to train and hard to adapt to evolving risks. But what if the LLM **already knows** when an input is unsafe?

<img src="/images/blog/llm-safety-teaser.png" alt="Latent Prototype Moderator concept" style="width:100%;">

## Latent Prototype Moderator

In our **[paper](https://arxiv.org/abs/2502.16174)** at the *ICLR 2025 Workshop on Building Trust in LLMs*, we show that safe and unsafe prompts are **distinctly separable** in the model's latent space. Building on this, we introduce the **Latent Prototype Moderator (LPM)** — a training-free moderation method that uses Mahalanobis distance in latent space to assess input safety. LPM is a lightweight, customizable add-on that generalizes across model families and sizes, matching or exceeding state-of-the-art guard models across multiple safety benchmarks.

<img src="/images/blog/llm-safety-results.png" alt="LPM benchmark results" style="width:100%;">
