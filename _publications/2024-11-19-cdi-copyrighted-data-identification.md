---
title: "CDI: Copyrighted Data Identification in Diffusion Models"
collection: publications
category: conferences
permalink: /publication/2024-11-19-cdi-copyrighted-data-identification
excerpt: 'We show that existing membership inference attacks are ineffective for large diffusion models and we propose CDI, a dataset inference approach that aggregates signals across many samples to reliably detect copyrighted training data with over 99% confidence.'
date: 2025-11-19
venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)'
paperurl: 'https://arxiv.org/abs/2411.12858'
citation: 'Dubiński, J., Kowalczuk, A., Boenisch, F., & Dziedzic, A. (2025). "CDI: Copyrighted Data Identification in Diffusion Models." In CVPR 2025.'
authors: '**J. Dubiński***, A. Kowalczuk*, F. Boenisch, A. Dziedzic'
bibtex: |
  @inproceedings{dubinski2025cdi,
    title={Cdi: Copyrighted data identification in diffusion models},
    author={Dubi{\'n}ski, Jan and Kowalczuk, Antoni and Boenisch, Franziska and Dziedzic, Adam},
    booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
    pages={18674--18684},
    year={2025}
  }
---
Diffusion Models (DMs) benefit from large and diverse datasets for their training. Since this data is often scraped from the Internet without permission from the data owners, this raises concerns about copyright and intellectual property protections. While (illicit) use of data is easily detected for training samples perfectly re-created by a DM at inference time, it is much harder for data owners to verify if their data was used for training when the outputs from the suspect DM are not close replicas. Conceptually, membership inference attacks (MIAs), which detect if a given data point was used during training, present themselves as a suitable tool to address this challenge. However, we demonstrate that existing MIAs are not strong enough to reliably determine the membership of individual images in large, state-of-the-art DMs. To overcome this limitation, we propose CDI, a framework for data owners to identify whether their dataset was used to train a given DM. CDI relies on dataset inference techniques, i.e., instead of using the membership signal from a single data point, CDI leverages the fact that most data owners, such as providers of stock photography, visual media companies, or even individual artists, own datasets with multiple publicly exposed data points which might all be included in the training of a given DM. By selectively aggregating signals from existing MIAs and using new handcrafted methods to extract features for these datasets, feeding them to a scoring model, and applying rigorous statistical testing, CDI allows data owners with as little as 70 data points to identify with a confidence of more than 99% whether their data was used to train a given DM. Thereby, CDI represents a valuable tool for data owners to claim illegitimate use of their copyrighted data.