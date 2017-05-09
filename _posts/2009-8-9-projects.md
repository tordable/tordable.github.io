---
layout: post
title: Projects
redirect_from: "/research/"
---

Here are some of the projects that I worked on over the last few years:

<h2>Mathematics at Google</h2>

<p>
  There is a wide variety of Mathematics used at Google. For example
  Linear Algebra in the PageRank algorithm, used to rank web pages in
  search results. Or Game Theory, used in ad auctions,
  or Graph Theory in Google Maps.
  At Google there are literally dozens of products which use
  interesting Mathematics. These are not just research prototypes, but real
  Google products; in which Mathematics play a crucial role.
</p>
<p>
  In this presentation, I introduce several applications of Mathematics
  at Google. I begin with a detailed explanation of search on the web and
  PageRank. Then I show a dozen examples of Google products and the
  corresponding Mathematics that are used. The presentation has an extensive
  list of links and references. And it's available in English and Spanish.
  To access the PDF file, simply click on the links or the images below.
</p>

<p>
  <div class="special-text">
    English version:
    <a href="/files/MathematicsAtGoogle.pdf">Mathematics at Google</a>
  </div>
</p>

<a href="/files/MathematicsAtGoogle.pdf">
![](/images/mathematics-at-google.png)
</a>

<p>
  <div class="special-text">
    Presentación en Español:
    <a href="/files/MatematicasEnGoogle.pdf">Las Matemáticas en Google</a>
  </div>
</p>

<a href="/files/MatematicasEnGoogle.pdf">
![](/images/matematicas-en-google.png)
</a>

<p>
  If you have any comments or if you liked the presentation or found a mistake,
  please
  <a href="http://plus.google.com/111582239416079113550/">
    send me a message</a> and let me know.
</p>

<div class="separator"></div>

<h2>MapReduce for integer factorization</h2>

<p>
  As part of the work towards my final examination (DEA in Spain) I wrote
  a short paper on how to use
  <a href="http://en.wikipedia.org/wiki/MapReduce">MapReduce</a>,
  the massive data processing framework originally developed at Google as
  a tool for factoring large integers. This is the abstract:
</p>
<div class="special-text">
  <p>
    Integer factorization is a very hard computational problem. Currently
    no efficient algorithm for integer factorization is publicly known.
    However, this is an important problem on which it relies the security
    of many real world cryptographic systems.
  </p>
  <p>
    I present an implementation of a fast factorization algorithm on
    MapReduce. MapReduce is a programming model for high performance
    applications developed originally at Google. The quadratic sieve algorithm
    is split into the different MapReduce phases and compared against a
    standard implementation.
  </p>
</div>
<p>
  The paper describes the Quadratic Sieve algorithm and how to implement it
  with the MapReduce framework. Also I made two implementations. First using
  a common mathematical tool, <a href="http://www.maplesoft.com/">Maple</a>.
  Second, using the open source MapReduce implementation,
  <a href="http://hadoop.apache.org/">Hadoop</a>.
  The following table shows the differences in performance between both
  versions, normalized.
</p>
![](/images/MapReduceIntegerFactorization-performance.png)
<p>
  The full article in PDF format is here:
  <a href="/files/MapreduceForIntegerFactorization.pdf">
    MapReduce for Integer Factorization</a>.
</p>
<p>
  The paper is also availiable at arXiv.org
  <a href="http://arxiv.org/abs/1001.0421">
    MapReduce for Integer Factorization at arXiv.org</a>.
</p>
<p>
  The code is published under the Apache License 2.0:
  <a href="http://code.google.com/p/mapreduce-integer-factorization/">
    MapReduce for Integer Factorization</a>.
</p>

<div class="separator"></div>

<h2>Bundle Adustment of scenes with moving cameras</h2>

<p>
  During the first part of my Ph.D. I worked with the DAVAP research group
  in topics related to photogrammetry and reconstruction of 3D environments.
  In particular the group is interested in the creation of realistic
  recreations of places and buildings of historical interest.
</p>
<p>
  As part of my work I developed a tool to merge 3D cloud points and
  photographs. It is currently used to create color cloud points from
  a laser scan. You can find more information
  <a href="http://157.88.193.21/~lfa-davap/">here</a>.
</p>
![](/images/coloreador-screenshot.jpg)
<p>
  Currently I am working in another tool to apply bundle adjustment method
  to a scene with a camera in movement, in order to refine the overall
  reconstruction. While the normal approach would try to optimize the camera
  parameters for all the cameras, my approach involves refining the
  coeficients of a particular set of polynomials that approximate the camera
  trajectory and orientation.
</p>
![](/images/bundle-adjustment-screenshot.jpg)
<p>
  I wrote a paper describing this approach. This is the abstract:
</p>
<div class="special-text">
  <p>
    Bundle Adjustment is a method to refine a visual reconstruction to produce
    jointly optimal structure and viewing parameter estimates.
    Bundle Adjustment is typically used in Photogrammetry and Computer Vision
    as the last step of a 3D scene reconstruction.
  </p>
  <p>
    I will expose the theoretical basis of the Bundle Adjustment method, and
    a basic version of the algorithm, which is commonly known. From that
    I will develop the particular case of a scene with moving cameras.
    Finally I will show a detailed example of the algorithm.
  </p>
</div>
<p>
  The full paper is avaliable online in PDF format:
  <a href="/files/BundleAdjustmentMovingCameras.pdf">
    Bundle Adjustment for Scenes with moving cameras</a>.
</p>

<div class="separator"></div>

<h2>Finance AI</h2>

<p>
  FinanceAI is an open source project
  with the goal of providing advanced Artificial Intelligence, Statistical
  and Mathematical tools for amateur and sophisticated investors.
  The purpose was to develop a complete algorithmic trading platform with
  comprehensive AI and Quantitative Finance libraries. It would also provide
  high performance algorithms. I started this project in early 2008, but
  so far it didn't get past the first version, mostly because of lack of time.
</p>
<p>
  The application that I released is called Predictor. Predictor is a tool
  that uses financial statements, income statements, balance sheets and
  cashflow statements and creates powerful pattern classifiers based on
  that data. Then it uses the classifiers to predict financial performance.
</p>

<p>
  You can see more details in the <a href="/finance-ai">
    FinanceAI page</a>.
</p>

<a href="/finance-ai">
![](/images/finance-ai-hosting.png)
</a>

<p>
  FinanceAI is open source, and relesed under the Ms-RL license.
  It is currently hosted on
  <a href="http://www.codeplex.com/financeAI">Codeplex</a>.
</p>
