---
title: 'Towards More Realistic Membership Inference Attacks on Large Diffusion Models'
date: 2024-02-05
permalink: /posts/2024/02/membership-inference-diffusion/
tags:
  - membership inference
  - diffusion models
  - privacy
---

**Generative diffusion models** like Stable Diffusion are trained on billions of internet-sourced images, raising concerns about unauthorized use of copyrighted data. **Membership inference attacks (MIAs)** aim to determine whether a specific image was used during training — but how effective are they really?

<img src="/images/blog/mia-diffusion-teaser.png" alt="Membership inference attack pipeline for diffusion models" style="width:100%;">

## A Fair Evaluation Framework

In our **[paper](https://arxiv.org/abs/2306.12983)** at *WACV 2024*, we identify that previously proposed evaluation setups **overestimate** the success of membership inference attacks on large diffusion models. We propose a methodology to establish a **fair evaluation setup** and apply both existing and new attacks to Stable Diffusion. Our results show that membership inference remains a significant challenge for large diffusion models deployed as black-box systems.

<img src="/images/blog/mia-diffusion-results.png" alt="Membership inference results on Stable Diffusion" style="width:100%;">
