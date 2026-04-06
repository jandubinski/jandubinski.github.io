---
title: "On Stealing Graph Neural Network Models"
collection: publications
category: conferences
permalink: /publication/2025-11-10-on-stealing-graph-neural-network-models
excerpt: 'We demonstrate how an adversary can extract a GNN with very limited interactions, first obtaining the model backbone without direct queries, then strategically utilizing a fixed query limit to extract the most informative data.'
date: 2025-11-10
venue: 'AAAI Conference on Artificial Intelligence (AAAI)'
paperurl: 'https://arxiv.org/abs/2511.07170'
citation: 'Podhajski, M., Dubiński, J., Boenisch, F., Dziedzic, A., Pręgowska, A., & Michalak, T. P. (2026). "On Stealing Graph Neural Network Models." In AAAI 2026.'
authors: 'M. Podhajski, **J. Dubiński**, F. Boenisch, A. Dziedzic, A. Pręgowska, T. P. Michalak'
bibtex: |
  @inproceedings{DBLP:conf/aaai/PodhajskiDBDPM26,
    author       = {Marcin Podhajski and Jan Dubinski and Franziska Boenisch and Adam Dziedzic and Agnieszka Pregowska and Tomasz Pawel Michalak},
    title        = {On Stealing Graph Neural Network Models},
    booktitle    = {Fortieth {AAAI} Conference on Artificial Intelligence, {AAAI} 2026, Singapore, January 20-27, 2026},
    pages        = {24846--24854},
    publisher    = {{AAAI} Press},
    year         = {2026},
    doi          = {10.1609/AAAI.V40I29.39671},
  }
---
Current graph neural network (GNN) model-stealing methods rely heavily on queries to the victim model, assuming no hard query limits. However, in reality, the number of allowed queries can be severely limited. In this paper, we demonstrate how an adversary can extract a GNN with very limited interactions with the model. Our approach first enables the adversary to obtain the model backbone without making direct queries to the victim model and then to strategically utilize a fixed query limit to extract the most informative data. The experiments on eight real-world datasets demonstrate the effectiveness of the attack, even under a very restricted query limit and under defense against model extraction in place. Our findings underscore the need for robust defenses against GNN model extraction threats.
