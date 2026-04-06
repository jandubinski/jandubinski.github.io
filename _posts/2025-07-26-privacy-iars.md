---
title: 'Image AutoRegressive Models Leak More Training Data Than Diffusion Models'
date: 2025-07-26
permalink: /posts/2025/07/privacy-iars/
tags:
  - privacy attacks
  - Image Autoregressive Models
  - membership inference 
---

**Image AutoRegressive models (IARs)** have recently emerged as a powerful alternative to **diffusion models (DMs)**, surpassing them in image generation quality, speed, and scalability. Yet, despite their advantages, the **privacy risks** of IARs remain completely unexplored. When trained on sensitive or copyrighted data, these models may unintentionally expose training samples, creating major security and ethical concerns.

<img src="/images/blog/privacy-iars-teaser.png" alt="Privacy attacks on IARs overview" style="width:100%;">

## Privacy Attacks on Image AutoRegressive Models

In our **[research paper](https://arxiv.org/abs/2502.02514)** from *ICML 2025*, we investigate **privacy vulnerabilities** in IARs, showing that they exhibit significantly higher privacy risks compared to DMs. We assess IARs' privacy risks from the three perspectives of **membership inference**, **dataset inference**, and **memorization**, and find that IARs reveal substantially more information about their training data than DMs. Along the way, we also discuss ways to mitigate these risks.

<img src="/images/blog/privacy-iars-results.png" alt="MIA results comparing IARs and DMs" style="width:100%;">

Check out our **[blogpost](https://sprintml.com/2025/02/04/iars-privacy.html)** on the SprintML lab page and **[project page](https://www.antonikowalczuk.com/blog/priv_iar/)** on Antoni Kowalczuk's website.
