---
title: "Progressive Latent Replay for Efficient Generative Rehearsal"
collection: publications
category: conferences
permalink: /publication/2022-11-22-progressive-latent-replay-for-efficient-generative-rehearsal
excerpt: 'We reduce the cost of generative rehearsal for continual learning by modulating the frequency of rehearsal based on the depth of the network.'
date: 2022-11-22
venue: 'International Conference on Neural Information Processing (ICONIP)'
paperurl: 'https://arxiv.org/abs/2207.01562'
citation: 'Pawlak, S., Szatkowski, F., Bortkiewicz, M., Dubiński, J., & Trzciński, T. (2022). "Progressive Latent Replay for Efficient Generative Rehearsal." In ICONIP 2022 (pp. 457–467).'
authors: 'S. Pawlak, F. Szatkowski, M. Bortkiewicz, **J. Dubiński**, T. Trzciński'
---
We introduce a new method for internal replay that modulates the frequency of rehearsal based on the depth of the network. While replay strategies mitigate the effects of catastrophic forgetting in neural networks, recent works on generative replay show that performing the rehearsal only on the deeper layers of the network improves the performance in continual learning. However, the generative approach introduces additional computational overhead, limiting its applications. Motivated by the observation that earlier layers of neural networks forget less abruptly, we propose to update network layers with varying frequency using intermediate-level features during replay. This reduces the computational burden by omitting computations for both deeper layers of the generator and earlier layers of the main model. We name our method Progressive Latent Replay and show that it outperforms Internal Replay while using significantly fewer resources.

