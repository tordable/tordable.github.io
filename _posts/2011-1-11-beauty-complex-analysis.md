---
layout: post
title: The Beauty of Complex Analysis
---

<p>
<a href="http://en.wikipedia.org/wiki/Complex_analysis">Complex Analysis</a>
is the branch of mathematics that studies functions of complex numbers.
These numbers are those given by  a + bi, where i is the imaginary unit,
the square root of -1. We can think of complex numbers as points in a plane,
where the x coordinate indicates the real component and the y coordinate
indicates the imaginary component.
</p>

<img src="/images/complex-number.png"
  alt="Complex number" />

<p>
From that, we can consider functions of complex variable as maps that take each
point in the plane to another point in the plane.
</p>

<p>
There is one characteristic of Complex Analysis that makes it especially beautiful.
Inside of it we can find objects that appear to be very complicated but happen to be
relatively simple. Reciprocally, there are objects that appear to be very simple
but are indeed extremely complex.
</p>

<p>
For example, in Complex Analysis we study
<a href="http://en.wikipedia.org/wiki/Holomorphic_function">holomorphic functions</a>.
These are essentially functions that are differentiable in the complex sense.
Which means that the function is continuous and both its real and imaginary
parts have partial derivatives that satisfy the (apparently simple) Cauchy-Riemann
equations. At first sense this is a very general definition.
Considering the huge variety of differentiable functions in the real line we would
imagine that there is also an extreme variety of holomorphic functions in the plane.
However in complex analysis we have for example the following theorems,
which impose very strong conditions on holomorphic functions:
</p>

<ul>
  <li>
  If a function is holomorphic in the entire plane and its bounded in module,
  then its constant. This is
  <a href="http://en.wikipedia.org/wiki/Liouville's_theorem_(complex_analysis)">
    Liouville's_theorem</a> and it actually proves the
  <a href="http://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra">
    Fundamental Theorem of Algebra</a>
  </li>
  <li>
  If we know the value of a holomorphic function in a circle, then we can know
  the value in every single point inside of the disk, by the
  <a href="http://en.wikipedia.org/wiki/Cauchy's_integral_formula">
    Cauchy Integral Formula</a>
  </li>
  <li>
  If two holomorphic functions are equal in an infinite number of points
  (with one accumulation point) then they are equal in a complete disk,
  this is because they are
  <a href="http://en.wikipedia.org/wiki/Holomorphic_functions_are_analytic">analytic</a>
  </li>
</ul>

<p>
The last point is particularly shocking when one compares it with real functions.
For example, the function {0 if x < 0 and exp(-1/x) if x >= 0} is identically equal
to the constant 0 on the left side of the graph, and both are infinitely differentiable.
However, they are obviously different functions. As a matter of fact, this function
is a counterexample to show that the 3 properties above don't apply to real functions.
</p>

<a href="http://en.wikipedia.org/wiki/File:Non-analytic_smooth_function.png">
  <img src="/images/non-analytic-smooth-function.png"
    alt="Graph of a non-analytic smooth function" />
</a>

<p>
Holomorphic functions are very structured when compared with real differentiable
functions. In that sense they are more <em>simple</em> than what intuition would suggest.
</p>

<p>
On the other hand, we have objects like the
<a href="http://en.wikipedia.org/wiki/Mandelbrot_set">Mandelbrot set</a>, which
can be expressed in a very simple and concise way, but which is indeed very complex.
From Wikipedia:  A complex number c is in the Mandelbrot set if, when starting with
z0 = 0 and applying the iteration:  z_n+1 = (z_n)^2 + c
the absolute value of z_n never exceeds a certain boundary, however large n gets.
In spite of this simplicity, the graphical representation of a part of this set looks like this:
</p>

<a href="http://en.wikipedia.org/wiki/File:Mandel_zoom_11_satellite_double_spiral.jpg">
  <img src="/images/mandelbrot-set-small.jpg"
    alt="Mandelbrot set detail" />
</a>

<p>
Another example, even more interesting: Consider the
<a href="http://en.wikipedia.org/wiki/Riemann_zeta_function">Riemann Zeta Function</a>:
</p>

<img src="/images/riemann-zeta-function.png"
  alt="The Riemann Zeta Function" />

<p>
where s is a complex parameter. This function can be defined in a seemingly
very simple way. However it satisfies many remarkable properties. For instance,
if we restrict ourselves to the stripe of the complex plane where the real component
x is  < x < 1 and take a section of the stripe and any holomorphic function
which doesnt take the the value 0 we have that, informally, this function can be
approximated by the zeta function as precisely as we want in another section of the strip
right above or below. This property is called the
<a href="http://en.wikipedia.org/wiki/Zeta_function_universality">
  Universality of the Riemann Zeta Function</a>
</p>

<a href="http://en.wikipedia.org/wiki/File:Voronin_universality_theorem.png">
  <img src="/images/voronin-universality-theorem.png"
    alt="Voronin's Universality Theorem" />
</a>

<p>
Think about that, it doesnt matter how complex an holomorphic function is inside
of that area. As long as it doesnt become 0, there is another area in which the
zeta function approximates it as precisely as we want. In that sense the structure
of the zeta function is so rich that it <em>contains</em> within itself the shape of every other
non-vanishing holomorphic function.
</p>
