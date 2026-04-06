---
title: "ExpertSim: Fast Particle Detector Simulation Using Mixture-of-Generative-Experts"
collection: publications
category: conferences
permalink: /publication/2025-08-28-expertsim-particle-detector-simulation
excerpt: 'We present ExpertSim, a Mixture-of-Generative-Experts approach for simulating the Zero Degree Calorimeter in the ALICE experiment at CERN, improving both accuracy and speed over traditional Monte Carlo methods.'
date: 2025-10-25
venue: 'European Conference on Artificial Intelligence (ECAI)'
paperurl: 'https://arxiv.org/abs/2508.20991'
citation: 'Będkowski, P., Dubiński, J., Szatkowski, F., Deja, K., Rokita, P., & Trzciński, T. (2025). "ExpertSim: Fast Particle Detector Simulation Using Mixture-of-Generative-Experts." In ECAI 2025.'
authors: 'P. Będkowski, **J. Dubiński**, F. Szatkowski, K. Deja, P. Rokita, T. Trzciński'
bibtex: |
  @inproceedings{DBLP:conf/ecai/BedkowskiDSDRT25,
    author       = {Patryk Bedkowski and Jan Dubinski and Filip Szatkowski and Kamil Deja and Przemyslaw Rokita and Tomasz Trzcinski},
    title        = {ExpertSim: Fast Particle Detector Simulation Using Mixture-of-Generative-Experts},
    booktitle    = {{ECAI} 2025 - 28th European Conference on Artificial Intelligence, Bologna, Italy, October 25-30, 2025},
    series       = {Frontiers in Artificial Intelligence and Applications},
    pages        = {2049--2056},
    publisher    = {{IOS} Press},
    year         = {2025},
    doi          = {10.3233/FAIA251042},
  }
---
Simulating detector responses is a crucial part of understanding the inner workings of particle collisions in the Large Hadron Collider at CERN. Such simulations are currently performed with statistical Monte Carlo methods, which are computationally expensive and put a significant strain on CERN's computational grid. Therefore, recent proposals advocate for generative machine learning methods to enable more efficient simulations. However, the distribution of the data varies significantly across the simulations, which is hard to capture with out-of-the-box methods. In this study, we present ExpertSim - a deep learning simulation approach tailored for the Zero Degree Calorimeter in the ALICE experiment. Our method utilizes a Mixture-of-Generative-Experts architecture, where each expert specializes in simulating a different subset of the data. This allows for a more precise and efficient generation process, as each expert focuses on a specific aspect of the calorimeter response. ExpertSim not only improves accuracy, but also provides a significant speedup compared to the traditional Monte-Carlo methods, offering a promising solution for high-efficiency detector simulations in particle physics experiments at CERN.
