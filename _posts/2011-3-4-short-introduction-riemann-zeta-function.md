---
layout: post
title: A short introduction to the Riemann Zeta Function
---

<p>
  <strong>The Riemann Zeta Function</strong>
</p>

<p>
  In the late 17th century it was known that the harmonic series is divergent, as it was proved by Pietro Mengoli, Johann Bernoulli and
Jakob Bernoulli:
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\sum_{n%3D1}^{\infty}\frac{1}{n}%3D1%2B\frac{1}{2}%2B\frac{1}{3}%2B\frac{1}{4}%2B\ldots" />
</p>

<p>
Euler considered the series of the form:
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\sum_{n%3D1}^{\infty}\frac{1}{n^{k}}" />
</p>

<p>
for integer values of <img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=k%3E1" />, which can
be easily shown to converge
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=n\left(n%2B1\right)%3Dn^{2}%2Bn%3C2n^{2}\Rightarrow\frac{2}{n\left(n%2B1\right)}%3E\frac{1}{n^{2}}" />
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\sum_{n%3D1}^{\infty}\frac{1}{n^{2}}%3C\sum_{n%3D1}^{\infty}\frac{2}{n\left(n%2B1\right)}%3D2\sum_{n%3D1}^{\infty}\left(\frac{1}{n}-\frac{1}{n%2B1}\right)%3D" />
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=2\left[1%2B\left(\frac{1}{2}-\frac{1}{2}\right)%2B\left(\frac{1}{3}-\frac{1}{3}\right)%2B\sum_{n%3D4}^{\infty}\left(\frac{1}{n}-\frac{1}{n}\right)\right]%3D2" />
</p>

<p>
and obviously
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\forall%20n\geq1,\forall%20k\geq2,n^{k}\geq%20n^{2}\Rightarrow\frac{1}{n^{k}}\leq\frac{1}{n^{2}}" />
</p>

<p>
Posteriorly Dirichlet and Chebyshev would consider real valued exponents.
It is also easy to prove that
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\forall%20s\in\mathbb{R},s%3E1\,\sum_{n%3D1}^{\infty}\frac{1}{n^{s}}" />
is a convergent series.
Riemann went one step further and considered a complex variable
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=s" />
and proved that
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\sum_{n%3D1}^{\infty}\frac{1}{n^{s}}" />
converges for
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=Re\left(s\right)%3E1" />
 and it can be continued analitically to all complex values 
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=s\neq1" />. This extension of
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\sum_{n%3D1}^{\infty}\frac{1}{n^{s}}" />
</p>

<p>
is well defined and holomorphic in
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\mathbb{C}\setminus\left\{%201\right\}" />, it is denoted
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\zeta" />
and is called the Riemann Zeta Function.
</p>

<p>
  <strong>Some properties of 
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\zeta" />
  </strong>
</p>

<p>
The zeta function can be written for
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=Re\left(s\right)%3E1" />
as the sum of a series and the Euler product formula allows us to write
it as an infinite product:
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\sum_{n%3D1}^{\infty}\frac{1}{n^{s}}%3D\prod_{p\,%20prime}\frac{1}{1-p^{-s}}" />
</p>

<p>
One of the steps in proving that
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\zeta" />
is holomorphic in
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\mathbb{C}\setminus\left\{%201\right\}" />
consists in verifiying the following functional equation
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\zeta\left(s\right)%3D2\left(s\pi\right)^{s-1}sin\left(\frac{\pi%20s}{2}\right)\Gamma\left(1-s\right)\zeta\left(1-s\right)\" />
</p>

<p>
where
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\Gamma" />
is the gamma function
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\Gamma\left(z\right)%3D\int_{0}^{\infty}t^{z-1}e^{-t}dt" />.
The fact that it verifies this functional equation allows to prove
many other interesting properties.
</p>

<p>
In his original paper, Riemann suggested that all zeroes of
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\zeta" />
which are not trivial (
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=-2,-4,\ldots" />
) are in the line
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\left\{%20z\in\mathbb{C}:Re\left(z\right)%3D\frac{1}{2}\right\}" />
</p>

<p>
This came to be known as the Riemann Hypothesis and it's been an open
problem for over 150 years.
</p>

<p>
Proving the Riemann Hypothesis would have many significant consequences.
One of the most important ones is the precise caracterization of the
distribution of prime numbers. Let's take the prime counting function
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=\pi\left(x\right)" />, which gives for each
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=x" />
the number of prime numbers less than or equal to
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=x" />. The Prime Number Theorem states that
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\pi\left(x\right)\sim\frac{x}{ln\,%20x}" />
</p>

<p>
This theorem was originally proved independently by Hadamard and de la
Valle Poussin. If we consider
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=Li\left(x\right)%3D\int_{2}^{x}\frac{1}{ln\,%20t}dt%3Dli\left(x\right)-li\left(2\right)" />
</p>

<p>
then the Prime Number Theorem can be written as
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\pi\left(x\right)\sim%20li\left(x\right)\sim%20Li\left(x\right)" />
</p>

<p>
Von Koch proved that if and only if the Riemann hypothesis is true then
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\pi\left(x\right)%3DLi\left(x\right)%2BO\left(\sqrt{x}ln\,%20x\right)" />
</p>

<p>
and Schoenfeld stated more precisely that the Riemann hypothesis is
equivalent to
</p>

<p>
  <img src="https://chart.googleapis.com/chart?cht=tx&chl=\left|\pi\left(x\right)-li\left(x\right)\right|%3C\frac{\sqrt{x}ln\,%20x}{8\pi}" />
</p>

<p>
for all
<img class="inline" src="https://chart.googleapis.com/chart?cht=tx&chl=x>2657" />
and this is indeed the tightest limit possible.
</p>
