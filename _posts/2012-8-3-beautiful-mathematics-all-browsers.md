---
layout: post
title: Beautiful Mathematics in All Browsers
---

<p>
I recently discovered the wonderful
<a href="http://www.mathjax.org/">MathJax</a>. MathJax
is a JavaScript library that displays mathematical formulas
in web pages. It's very easy to set up and it renders
beautiful mathematics.
</p>


<img src="/images/mathjax.gif"
    alt="MathJax logo" />

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?...">
</script>


<p>
For example:
</p>

<p style="margin-left: 2em;">
  <em>
    Suppose \( U \) is an open subset of the complex plane
    \( \mathbb{C} \),
    \( f : U  \mathbb{C} \) a holomorphic function,
    and the closed disk \( D = \{z : |z  z_0|  r\} \)
    is completely contained in \( U \).
    Let \( \gamma \) be the circle
    forming the boundary of \( D \).
    Then for every a in the interior of \( D \):
  </em>

  $$
    f(a) = \frac{1}{2 \pi i}
      \oint_{\gamma}{ \frac{f(z)}{z-a} dz}
  $$

  <em>
    where the contour integral is taken counter-clockwise.
  </em>
</p>

<p>
  That is, of course, <a href="http://en.wikipedia.org/wiki/Cauchy%27s_integral_formula">
    Cauchy's integral formula</a>.
</p>
