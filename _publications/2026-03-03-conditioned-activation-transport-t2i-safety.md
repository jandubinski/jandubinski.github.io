---
title: "Conditioned Activation Transport for T2I Safety Steering"
collection: publications
category: preprints
permalink: /publication/2026-03-03-conditioned-activation-transport-t2i-safety
excerpt: 'We propose Conditioned Activation Transport (CAT), a framework that employs geometry-based conditioning and nonlinear transport maps to steer T2I models away from unsafe content generation while preserving image quality on benign prompts.'
date: 2026-03-03
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2603.03163'
citation: 'Chrabąszcz, M., Szymczyk, A., Dubiński, J., Trzciński, T., Boenisch, F., & Dziedzic, A. (2026). "Conditioned Activation Transport for T2I Safety Steering." arXiv preprint arXiv:2603.03163.'
authors: 'M. Chrabąszcz, A. Szymczyk, **J. Dubiński**, T. Trzciński, F. Boenisch, A. Dziedzic'
bibtex: |
  @misc{chrabąszcz2026conditionedactivationtransportt2i,
    title={Conditioned Activation Transport for T2I Safety Steering}, 
    author={Maciej Chrabąszcz and Aleksander Szymczyk and Jan Dubiński and Tomasz Trzciński and Franziska Boenisch and Adam Dziedzic},
    year={2026},
    eprint={2603.03163},
    archivePrefix={arXiv},
    primaryClass={cs.CV},
    url={https://arxiv.org/abs/2603.03163}, 
  }
---
Despite their impressive capabilities, current Text-to-Image (T2I) models remain prone to generating unsafe and toxic content. While activation steering offers a promising inference-time intervention, we observe that linear activation steering frequently degrades image quality when applied to benign prompts. To address this trade-off, we first construct SafeSteerDataset, a contrastive dataset containing 2300 safe and unsafe prompt pairs with high cosine similarity. Leveraging this data, we propose Conditioned Activation Transport (CAT), a framework that employs a geometry-based conditioning mechanism and nonlinear transport maps. By conditioning transport maps to activate only within unsafe activation regions, we minimize interference with benign queries. We validate our approach on two state-of-the-art architectures: Z-Image and Infinity. Experiments demonstrate that CAT generalizes effectively across these backbones, significantly reducing Attack Success Rate while maintaining image fidelity compared to unsteered generations.
