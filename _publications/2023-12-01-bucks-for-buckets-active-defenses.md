---
title: "Bucks for Buckets (B4B): Active Defenses Against Stealing Encoders"
collection: publications
category: manuscripts
permalink: /publication/2023-12-01-bucks-for-buckets-active-defenses
excerpt: 'B4B is an active defense against encoder model stealing.'
date: 2023
venue: 'Advances in Neural Information Processing Systems (NeurIPS)'
paperurl: 'https://proceedings.neurips.cc/paper_files/paper/2023/file/ad1efab57a04d93f097e7fbb2d4fc054-Paper-Conference.pdf'
citation: 'Dubiński, J., Pawlak, S., Boenisch, F., Trzcinski, T., & Dziedzic, A. (2023). "Bucks for Buckets (B4B): Active Defenses Against Stealing Encoders." In NeurIPS 2023 (Vol. 36, pp. 55237–55259).'
authors: '**J. Dubiński***, S. Pawlak*, F. Boenisch*, T. Trzcinski, A. Dziedzic'
---
Machine Learning as a Service (MLaaS) APIs provide ready-to-use and high-utility encoders that generate vector representations for given inputs. Since these encoders are very costly to train, they become lucrative targets for model stealing attacks during which an adversary leverages query access to the API to replicate the encoder locally at a fraction of the original training costs. We propose Bucks for Buckets (B4B), the first active defense that prevents stealing while the attack is happening without degrading representation quality for legitimate API users. Our defense relies on the observation that the representations returned to adversaries who try to steal the encoder's functionality cover a significantly larger fraction of the embedding space than representations of legitimate users who utilize the encoder to solve a particular downstream task. B4B leverages this to adaptively adjust the utility of the returned representations according to a user's coverage of the embedding space. To prevent adaptive adversaries from eluding our defense by simply creating multiple user accounts (sybils), B4B also individually transforms each user's representations. This prevents the adversary from directly aggregating representations over multiple accounts to create their stolen encoder copy. Our active defense opens a new path towards securely sharing and democratizing encoders over public APIs.


