---
title: "Backdoor Vectors: a Task Arithmetic View on Backdoor Attacks and Defenses"
collection: publications
category: preprints
permalink: /publication/2025-10-09-backdoor-vectors-task-arithmetic
excerpt: 'We propose treating backdoor attacks as task vectors, revealing new insights into attack similarity and transferability, and introduce Sparse Backdoor Vectors for stronger attacks and Injection BV Subtraction as an assumption-free defense for model merging.'
date: 2025-10-09
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2510.08016'
citation: 'Pawlak, S., Dubiński, J., Marczak, D., & Twardowski, B. (2025). "Backdoor Vectors: a Task Arithmetic View on Backdoor Attacks and Defenses." arXiv preprint arXiv:2510.08016.'
authors: 'S. Pawlak, **J. Dubiński**, D. Marczak, B. Twardowski'
bibtex: |
  @misc{pawlak2025backdoorvectorstaskarithmetic,
    title={Backdoor Vectors: a Task Arithmetic View on Backdoor Attacks and Defenses}, 
    author={Stanisław Pawlak and Jan Dubiński and Daniel Marczak and Bartłomiej Twardowski},
    year={2025},
    eprint={2510.08016},
    archivePrefix={arXiv},
    primaryClass={cs.LG},
    url={https://arxiv.org/abs/2510.08016}, 
  }
---
Model merging (MM) recently emerged as an effective method for combining large deep learning models. However, it poses significant security risks. Recent research shows that it is highly susceptible to backdoor attacks, which introduce a hidden trigger into a single fine-tuned model instance that allows the adversary to control the output of the final merged model at inference time. In this work, we propose a simple framework for understanding backdoor attacks by treating the attack itself as a task vector. Backdoor Vector (BV) is calculated as the difference between the weights of a fine-tuned backdoored model and fine-tuned clean model. BVs reveal new insights into attacks understanding and a more effective framework to measure their similarity and transferability. Furthermore, we propose a novel method that enhances backdoor resilience through merging dubbed Sparse Backdoor Vector (SBV) that combines multiple attacks into a single one. We identify the core vulnerability behind backdoor threats in MM: inherent triggers that exploit adversarial weaknesses in the base model. To counter this, we propose Injection BV Subtraction (IBVS) - an assumption-free defense against backdoors in MM. Our results show that SBVs surpass prior attacks and is the first method to leverage merging to improve backdoor effectiveness. At the same time, IBVS provides a lightweight, general defense that remains effective even when the backdoor threat is entirely unknown.
