---
title: 'Backdoor Vectors: Backdoor Attacks as Task Arithmetic'
date: 2025-10-20
permalink: /posts/2025/10/backdoor-vectors/
tags:
  - backdoor attacks
  - model merging
  - task arithmetic
---

**Model merging** has emerged as an effective method for combining large models, but it poses significant security risks. Recent work shows it is highly susceptible to **backdoor attacks** — hidden triggers that allow adversaries to control the merged model's output at inference time.

<img src="/images/blog/backdoor-vectors-teaser.png" alt="Backdoor Vector framework" style="width:100%;">

## Backdoor Vectors

In our **[paper](https://arxiv.org/abs/2510.08016)**, we propose treating the backdoor attack itself as a **task vector**. The Backdoor Vector (BV) is simply the weight difference between a backdoored fine-tuned model and a clean one. This reveals new insights into attack similarity and transferability. We also introduce **Sparse Backdoor Vectors (SBV)** — the first method to leverage merging to improve attack effectiveness — and **Injection BV Subtraction (IBVS)**, an assumption-free defense that remains effective even when the backdoor threat is entirely unknown.

<img src="/images/blog/backdoor-vectors-results.png" alt="BV scaling: accuracy stays flat while attack success rate rises" style="width:100%;">
