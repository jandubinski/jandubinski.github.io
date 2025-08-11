---
title: "Towards More Realistic Membership Inference Attacks on Large Diffusion Models"
collection: publications
category: manuscripts
permalink: /publication/2024-01-20-towards-more-realistic-membership-inference-diffusion
excerpt: 'We design a fair evaluation framework for membership inference on Stable Diffusion, apply existing and new attacks, and show prior setups overestimate success while true membership detection remains difficult.'
date: 2024
venue: 'Winter Conference on Computer Vision (WACV)'
paperurl: 'https://openaccess.thecvf.com/content/WACV2024/papers/Dubinski_Towards_More_Realistic_Membership_Inference_Attacks_on_Large_Diffusion_Models_WACV_2024_paper.pdf'
citation: 'Dubiński, J., Kowalczuk, A., Pawlak, S., Rokita, P., Trzciński, T., & Morawiecki, P. (2024). "Towards More Realistic Membership Inference Attacks on Large Diffusion Models." In WACV 2024.'
authors: '**J. Dubiński**, A. Kowalczuk, S. Pawlak, P. Rokita, T. Trzciński, P. Morawiecki'
---
Generative diffusion models, including Stable Diffusion and Midjourney, can generate visually appealing, diverse, and high-resolution images for various applications. These models are trained on billions of internet-sourced images, raising significant concerns about the potential unauthorized use of copyright-protected images. In this paper, we examine whether it is possible to determine if a specific image was used in the training set, a problem known in the cybersecurity community and referred to as a membership inference attack. Our focus is on Stable Diffusion, and we address the challenge of designing a fair evaluation framework to answer this membership question. We propose a methodology to establish a fair evaluation setup and apply it to Stable Diffusion, enabling potential extensions to other generative models. Utilizing this evaluation setup, we execute membership attacks (both known and newly introduced). Our research reveals that previously proposed evaluation setups do not provide a full understanding of the effectiveness of membership inference attacks. We conclude that the membership inference attack remains a significant challenge for large diffusion models (often deployed as black-box systems), indicating that related privacy and copyright issues will persist in the foreseeable future.

