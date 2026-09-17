# jandubinski.github.io

Personal webpage of Jan Dubiński: https://jandubinski.github.io

Plain static site (no Jekyll), based on [Jon Barron's website template](https://github.com/jonbarron/jonbarron_website).

- `index.html`: the whole page (bio, news, selected research)
- `stylesheet.css`: styles
- `images/<paper>/teaser.png`: Figure 1 of each paper, taken from the arXiv source
- `files/cv.pdf`: CV

Teasers are shown 300px wide and zoom on hover. Each paper row sets
`--fig-h`, the teaser's height at that 300px width (`300 * height / width` of
the image file), which the stylesheet uses to stop tall figures from zooming
past `--target` pixels tall. A new paper needs that value on its `<tr>`.
