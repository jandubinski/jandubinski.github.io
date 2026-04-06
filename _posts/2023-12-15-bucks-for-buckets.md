---
title: 'B4B: Active Defenses Against Stealing Encoders'
date: 2023-12-15
permalink: /posts/2023/12/bucks-for-buckets/
tags:
  - model stealing
  - active defense
  - encoders
---

**Machine Learning as a Service (MLaaS)** APIs expose high-quality encoders that are expensive to train, making them lucrative targets for **model stealing attacks**. How can API providers defend their models while the attack is happening, without degrading service for legitimate users?

<img src="/images/blog/b4b-teaser.png" alt="B4B framework overview" style="width:100%;">

## Bucks for Buckets (B4B)

In our **[paper](https://arxiv.org/abs/2310.08571)** at *NeurIPS 2023*, we introduce **Bucks for Buckets (B4B)** — the first **active defense** against encoder stealing. B4B exploits the observation that adversaries cover a much larger fraction of the embedding space than legitimate users solving a specific downstream task. It adaptively adjusts the utility of returned representations based on a user's coverage of the embedding space, and individually transforms each user's representations to prevent sybil-based aggregation attacks.

<img src="/images/blog/b4b-results.png" alt="B4B defense effectiveness" style="width:100%;">
