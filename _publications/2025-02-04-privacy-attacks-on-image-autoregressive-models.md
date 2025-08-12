---
title: "Privacy Attacks on Image Autoregressive Models"
collection: publications
category: conferences
permalink: /publication/2025-02-04-privacy-attacks-on-image-autoregressive-models
excerpt: 'We show that image autoregressive models are empirically less private than diffusion models. We introduce the first membership inference attack tailored to IARs, and execute membership inference, dataset inference, and sample extraction to reveal their vulnerability.'
date: 2025-02-04
venue: 'International Conference on Machine Learning (ICML)'
paperurl: 'https://arxiv.org/abs/2502.02514'
citation: 'Kowalczuk, A., Dubiński, J., Boenisch, F., & Dziedzic, A. (2025). "Privacy Attacks on Image Autoregressive Models." In ICML 2025.'
authors: 'A. Kowalczuk*, **J. Dubiński***, F. Boenisch, A. Dziedzic'
bibtex: |
  @article{kowalczuk2025privacy,
    title={Privacy attacks on image autoregressive models},
    author={Kowalczuk, Antoni and Dubi{\'n}ski, Jan and Boenisch, Franziska and Dziedzic, Adam},
    journal={arXiv preprint arXiv:2502.02514},
    year={2025}
  }
---

Image AutoRegressive generation has emerged as a new powerful paradigm with image autoregressive models (IARs) matching state-of-the-art diffusion models (DMs) in image quality (FID: 1.48 vs. 1.58) while allowing for a higher generation speed. However, the privacy risks associated with IARs remain unexplored, raising concerns regarding their responsible deployment. To address this gap, we conduct a comprehensive privacy analysis of IARs, comparing their privacy risks to the ones of DMs as reference points. Concretely, we develop a novel membership inference attack (MIA) that achieves a remarkably high success rate in detecting training images (with a True Positive Rate at False Positive Rate = 1% of 86.38% vs. 6.38% for DMs with comparable attacks). We leverage our novel MIA to provide dataset inference (DI) for IARs, and show that it requires as few as 6 samples to detect dataset membership (compared to 200 for DI in DMs), confirming a higher information leakage in IARs. Finally, we are able to extract hundreds of training data points from an IAR (e.g., 698 from VAR-d30). Our results suggest a fundamental privacy-utility trade-off: while IARs excel in image generation quality and speed, they are empirically significantly more vulnerable to privacy attacks compared to DMs that achieve similar performance.
