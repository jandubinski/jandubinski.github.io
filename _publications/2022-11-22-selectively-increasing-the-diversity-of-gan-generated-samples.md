---
title: "Selectively Increasing the Diversity of GAN-generated Samples"
collection: publications
category: manuscripts
permalink: /publication/2022-11-22-selectively-increasing-the-diversity-of-gan-generated-samples
excerpt: 'We propose a simple regularizer that selectively increases the diversity of GAN outputs where variety is desired,'
date: 2022
venue: 'International Conference on Neural Information Processing (ICONIP)'
paperurl: 'https://arxiv.org/abs/2207.01561'
citation: 'Dubiński, J., Deja, K., Wenzel, S., Rokita, P., & Trzciński, T. (2022). "Selectively Increasing the Diversity of GAN-generated Samples." In ICONIP 2022 (pp. 260–270).'
authors: '**J. Dubiński**, K. Deja, S. Wenzel, P. Rokita, T. Trzciński'
---
Generative Adversarial Networks (GANs) are powerful models able to synthesize data samples closely resembling the distribution of real data, yet the diversity of those generated samples is limited due to the so-called mode collapse phenomenon observed in GANs. Especially prone to mode collapse are conditional GANs, which tend to ignore the input noise vector and focus on the conditional information. Recent methods proposed to mitigate this limitation increase the diversity of generated samples, yet they reduce the performance of the models when similarity of samples is required. To address this shortcoming, we propose a novel method to selectively increase the diversity of GAN-generated samples. By adding a simple, yet effective regularization to the training loss function we encourage the generator to discover new data modes for inputs related to diverse outputs while generating consistent samples for the remaining ones. More precisely, we maximise the ratio of distances between generated images and input latent vectors scaling the effect according to the diversity of samples for a given conditional input. We show the superiority of our method in a synthetic benchmark as well as a real-life scenario of simulating data from the Zero Degree Calorimeter of ALICE experiment in LHC, CERN.

