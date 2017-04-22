---
layout: post
title: MapReduce Integer Factorization released!
---

<p>
Recently I published the code of
<a href="http://code.google.com/p/mapreduce-integer-factorization/">
  MapReduce for Integer Factorization</a>. It is available under the Apache 2.0
License in Google Code. It includes everything necessary to run in
<a href="http://hadoop.apache.org/">Apache Hadoop</a>, as well as the numerical
libraries used. It has no dependencies apart from the last version of Hadoop.
</p>

<img src="http://hadoop.apache.org/images/hadoop-logo.jpg"
     alt="Hadoop logo" />

<p>
This project is a proof of concept that shows how to use MapReduce, a framework
for distributed computation to solve a purely numerical problem. The main
conclussion is that it's possible to use MapReduce for problems that lie far
ahead from its original area of application, for example number theory.
Also in this case the difficulty involved in developing the MapReduce program
is similar to the difficulty of creating a worksheet in a mathematical
tool like Maple. But the performance of MapReduce is significantly higher.
</p>
<p>
If you have some time, please download it from
<a href="http://code.google.com/p/mapreduce-integer-factorization/">here</a>,
and let me know how it works for you.
</p>