/* Misaligned robots from the Truthful AI papers wander into the page margins.
   Click one to align it: it turns green for a second and disappears. Robots
   that are ignored for long enough escape. Runs only on pointer devices with
   room beside the 960px column, and can be switched off from the counter. */
(function () {
  'use strict';

  if (!window.matchMedia) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!matchMedia('(hover: hover)').matches) return;
  if (localStorage.getItem('robots') === 'off') return;

  var PAGE = 960;     // width of the page column
  var SIZE = 64;      // sprite width in px
  var GAP = 16;       // keep this far from the window edge and the column
  var MAX = 3;        // robots on screen at once

  var ROBOTS = [
    { src: 'images/robots/value-leakage.png',     paper: 'Value Leakage' },
    { src: 'images/robots/negation-neglect.png',  paper: 'Negation Neglect' },
    { src: 'images/robots/conditional-evil.png',  paper: 'Conditional Misalignment' },
    { src: 'images/robots/conditional-devil.png', paper: 'Conditional Misalignment' }
  ];

  var layer, score, timer;
  var aligned = parseInt(localStorage.getItem('robots-aligned') || '0', 10) || 0;

  function margin() {
    return (window.innerWidth - PAGE) / 2;
  }

  function rand(a, b) {
    return a + Math.random() * (b - a);
  }

  function schedule(ms) {
    clearTimeout(timer);
    timer = setTimeout(spawn, ms);
  }

  function spawn() {
    var m = margin();
    if (document.hidden || m < SIZE + 2 * GAP || layer.childElementCount >= MAX) {
      schedule(4000);
      return;
    }

    var r = ROBOTS[Math.floor(Math.random() * ROBOTS.length)];
    var el = document.createElement('button');
    el.className = 'robot';
    el.type = 'button';
    el.title = 'Misaligned robot from ' + r.paper + '. Click to align it.';
    el.setAttribute('aria-label', el.title);

    var img = document.createElement('img');
    img.src = r.src;
    img.alt = '';
    el.appendChild(img);

    var span = m - SIZE - 2 * GAP;
    var left = Math.random() < 0.5
      ? GAP + rand(0, span)
      : window.innerWidth - m + GAP + rand(0, span);
    var top = rand(40, Math.max(41, window.innerHeight - SIZE - 80));
    el.style.left = Math.round(left) + 'px';
    el.style.top = Math.round(top) + 'px';
    el.style.animationDelay = '0s, ' + rand(0, 2).toFixed(2) + 's';

    el.addEventListener('click', function () { align(el); });
    el._hint = setTimeout(function () { hint(el); }, 5000);
    el._life = setTimeout(function () { escape(el); }, rand(12000, 18000));
    layer.appendChild(el);
    score.hidden = false;

    schedule(rand(6000, 12000));
  }

  // A robot that has been ignored for a while gets a nudge pointing at it.
  function hint(el) {
    var h = document.createElement('span');
    h.className = 'robot-hint';
    var arrow = document.createElement('span');
    arrow.className = 'robot-hint-arrow';
    arrow.textContent = '\u2191';
    h.appendChild(arrow);
    h.appendChild(document.createTextNode('click to align the AI'));
    el.appendChild(h);
  }

  function align(el) {
    if (el.classList.contains('aligned')) return;
    clearTimeout(el._life);
    clearTimeout(el._hint);
    el.classList.add('aligned');
    el.title = 'Aligned.';
    aligned += 1;
    localStorage.setItem('robots-aligned', String(aligned));
    render();
    setTimeout(function () {
      el.classList.add('gone');
      setTimeout(function () { el.remove(); }, 500);
    }, 1000);
  }

  function escape(el) {
    clearTimeout(el._hint);
    el.classList.add('escaped');
    setTimeout(function () { el.remove(); }, 700);
  }

  function render() {
    score.firstChild.textContent = aligned + (aligned === 1 ? ' robot aligned' : ' robots aligned') + ' \u00b7 ';
  }

  function off(ev) {
    ev.preventDefault();
    localStorage.setItem('robots', 'off');
    clearTimeout(timer);
    layer.remove();
    score.remove();
  }

  function start() {
    layer = document.createElement('div');
    layer.id = 'robots';
    document.body.appendChild(layer);

    score = document.createElement('div');
    score.id = 'robots-score';
    score.hidden = true;
    score.appendChild(document.createTextNode(''));
    var hide = document.createElement('a');
    hide.href = '#';
    hide.textContent = 'hide robots';
    hide.addEventListener('click', off);
    score.appendChild(hide);
    document.body.appendChild(score);
    render();

    window.addEventListener('resize', function () {
      // Margins moved; let the current robots go rather than overlap text.
      Array.prototype.forEach.call(layer.children, escape);
    });

    schedule(rand(8000, 11000));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
