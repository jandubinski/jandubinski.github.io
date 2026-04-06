---
title: "Universal Properties of Activation Sparsity in Modern Large Language Models"
collection: publications
category: conferences
permalink: /publication/2025-08-30-universal-properties-activation-sparsity
excerpt: 'We introduce a general framework for evaluating sparsity robustness in modern LLMs and uncover universal properties of activation sparsity across diverse model families and scales, showing that sparsity potential grows with model size.'
date: 2026-04-23
venue: 'International Conference on Learning Representations (ICLR)'
paperurl: 'https://arxiv.org/abs/2509.00454'
citation: 'Szatkowski, F., Będkowski, P., Devoto, A., Dubiński, J., Minervini, P., Piórczyński, M., Scardapane, S., & Wójcik, B. (2026). "Universal Properties of Activation Sparsity in Modern Large Language Models." In ICLR 2026.'
authors: 'F. Szatkowski, P. Będkowski, A. Devoto, **J. Dubiński**, P. Minervini, M. Piórczyński, S. Scardapane, B. Wójcik'
bibtex: |
  @misc{szatkowski2026universalpropertiesactivationsparsity,
    title={Universal Properties of Activation Sparsity in Modern Large Language Models}, 
    author={Filip Szatkowski and Patryk Będkowski and Alessio Devoto and Jan Dubiński and Pasquale Minervini and Mikołaj Piórczyński and Simone Scardapane and Bartosz Wójcik},
    year={2026},
    eprint={2509.00454},
    archivePrefix={arXiv},
    primaryClass={cs.LG},
    url={https://arxiv.org/abs/2509.00454}, 
  }
---
Activation sparsity is an intriguing property of deep neural networks that has been extensively studied in ReLU-based models, due to its advantages for efficiency, robustness, and interpretability. However, methods relying on exact zero activations do not directly apply to modern Large Language Models (LLMs), leading to fragmented, model-specific strategies for LLM activation sparsity and a gap in its general understanding. In this work, we introduce a general framework for evaluating sparsity robustness in contemporary LLMs and conduct a systematic investigation of this phenomenon in their feedforward (FFN) layers. Our results uncover universal properties of activation sparsity across diverse model families and scales. Importantly, we observe that the potential for effective activation sparsity grows with model size, highlighting its increasing relevance as models scale. Furthermore, we present the first study of activation sparsity in diffusion-based LLMs. Overall, our work provides a comprehensive perspective and practical guidance for harnessing activation sparsity in LLM design and acceleration.
