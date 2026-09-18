# jandubinski.github.io

Personal webpage of Jan Dubiński: https://jandubinski.github.io

Plain static site (no Jekyll), based on [Jon Barron's website template](https://github.com/jonbarron/jonbarron_website).

- `index.html`: the whole page (bio, news, selected research)
- `stylesheet.css`: styles
- `images/<paper>/teaser.png`: Figure 1 of each paper, taken from the arXiv source
- `files/cv.pdf`: CV
- `robots.js`, `images/robots/`: misaligned robots cropped from the Truthful AI
  teasers wander into the page margins; clicking one aligns it (it turns green
  and disappears). Off on touch devices, narrow windows, and for
  `prefers-reduced-motion`; the "hide robots" link in the corner switches it
  off for good via `localStorage`.

Teasers are shown 300px wide and zoom on hover. Each paper row sets
`--fig-h`, the teaser's height at that 300px width (`300 * height / width` of
the image file), which the stylesheet uses to stop tall figures from zooming
past `--target` pixels tall. A new paper needs that value on its `<tr>`.
