---
title: "Efficient Model-Stealing Attacks Against Inductive Graph Neural Networks"
collection: publications
category: manuscripts
permalink: /publication/2024-09-17-efficient-model-stealing-attacks-gnn
excerpt: 'We presents efficient model‑stealing attacks tailored to inductive graph neural networks.'
date: 2024-09-17
venue: 'European Conference on Artificial Intelligence (ECAI)'
paperurl: 'https://arxiv.org/abs/2405.12295'
citation: 'Podhajski, M., Dubiński, J., Boenisch, F., Dziedzic, A., Pregowska, A., & Michalak, T. P. (2024). "Efficient Model-Stealing Attacks Against Inductive Graph Neural Networks." In ECAI 2024 (pp. 1438–1445).'
authors: 'M. Podhajski, **J. Dubiński**, F. Boenisch, A. Dziedzic, A. Pregowska, T. Michalak'
---
Graph Neural Networks (GNNs) are recognized as potent tools for processing real-world data organized in graph structures. Especially inductive GNNs, which allow for the processing of graph-structured data without relying on predefined graph structures, are becoming increasingly important in a wide range of applications. As such these networks become attractive targets for model-stealing attacks where an adversary seeks to replicate the functionality of the targeted network. Significant efforts have been devoted to developing model-stealing attacks that extract models trained on images and texts. However, little attention has been given to stealing GNNs trained on graph data. This paper identifies a new method of performing unsupervised model-stealing attacks against inductive GNNs, utilizing graph contrastive learning and spectral graph augmentations to efficiently extract information from the targeted model. The new type of attack is thoroughly evaluated on six datasets and the results show that our approach outperforms the current state-of-the-art by Shen et al. (2021). In particular, our attack surpasses the baseline across all benchmarks, attaining superior fidelity and downstream accuracy of the stolen model while necessitating fewer queries directed toward the target model.

