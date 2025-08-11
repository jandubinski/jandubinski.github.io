---
title: "Maybe I Should Not Answer That, but… Do LLMs Understand The Safety of Their Inputs?"
collection: publications
category: conferences
permalink: /publication/2025-02-22-maybe-i-should-not-answer-llm-safety
excerpt: 'We investigate whether LLMs implicitly encode safety information, introducing a training-free moderation method that levarages the hidden states of an LLM to detect unsafe inputs.'
date: 2025-02-22
venue: 'ICLR Workshop on Building Trust in Language Models and Applications'
paperurl: 'https://arxiv.org/abs/2502.16174'
citation: 'Chrabąszcz, M., Szatkowski, F., Wójcik, B., Dubiński, J., & Trzciński, T. (2025). "Maybe I Should Not Answer That, but… Do LLMs Understand The Safety of Their Inputs?" ICLR 2025 Workshop on Building Trust in LLMs and Applications.'
authors: 'M. Chrabąszcz, F. Szatkowski, B. Wójcik, **J. Dubiński**, T. Trzciński'
---
With the rise of LLMs, ensuring model safety and alignment has become a critical concern. While modern instruction-finetuned LLMs incorporate alignment during training, they still frequently require moderation tools to prevent unsafe behavior. The most common approach to moderation are guard models that flag unsafe inputs. However, guards require costly training and are typically limited to fixed-size, pre-trained options, making them difficult to adapt to evolving risks and resource constraints. We hypothesize that instruction-finetuned LLMs already encode safety-relevant information internally and explore training-free safety assessment methods that work with off-the-shelf models. We show that simple prompting allows models to recognize harmful inputs they would otherwise mishandle. We also demonstrate that safe and unsafe prompts are distinctly separable in the models' latent space. Building on this, we introduce the Latent Prototype Moderator (LPM), a training-free moderation method that uses Mahalanobis distance in latent space to assess input safety. LPM is a lightweight, customizable add-on that generalizes across model families and sizes. Our method matches or exceeds state-of-the-art guard models across multiple safety benchmarks, offering a practical and flexible solution for scalable LLM moderation.

