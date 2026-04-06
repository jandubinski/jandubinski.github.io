---
title: 'CDI: Copyrighted Data Identification in Diffusion Models'
date: 2025-06-20
permalink: /posts/2025/06/cdi-copyrighted-data/
tags:
  - copyright
  - diffusion models
  - dataset inference
---

**Diffusion models** are trained on massive datasets scraped from the internet, often without permission from the data owners. Can a data owner reliably verify whether their images were used for training?

<img src="/images/blog/cdi-teaser.png" alt="CDI framework overview" style="width:100%;">

## From Membership Inference to Dataset Inference

In our **[paper](https://arxiv.org/abs/2411.12858)** at *CVPR 2025*, we demonstrate that existing **membership inference attacks** are not strong enough to reliably detect individual images in large, state-of-the-art diffusion models. To overcome this, we propose **CDI** — a dataset inference framework that aggregates signals from multiple data points belonging to a single owner. By combining existing MIA signals with new handcrafted features and rigorous statistical testing, CDI enables data owners with as few as **70 samples** to identify with over **99% confidence** whether their data was used for training.

<img src="/images/blog/cdi-results.png" alt="CDI detection results" style="width:100%;">
