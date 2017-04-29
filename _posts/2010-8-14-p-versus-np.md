---
layout: post
title: P versus NP
---

<p>
During the past week shocking news have stormed through the world of
Theoretical Computer Science. A researcher from HP Labs, <a href=http://www.hpl.hp.com/personal/Vinay_Deolalikar/>Vinay Deolalikar</a>
claimed that he had a proof that P  NP.
</p>


<p>
The paper is available
<a href=http://www.hpl.hp.com/personal/Vinay_Deolalikar/Papers/pnp_8_11.pdf>
here</a>.
But so far it seems that it will not stand. Several researchers
pointed out critical defects in the proof that Deolalikar proposed.
It is especially interesting to follow the discussion
in Dick Liptons blog (In 5 posts so far:
<a href="http://rjlipton.wordpress.com/2010/08/08/a-proof-that-p-is-not-equal-to-np/">
  1</a>
<a href="http://rjlipton.wordpress.com/2010/08/09/issues-in-the-proof-that-pnp/">
  2</a>
<a href="http://rjlipton.wordpress.com/2010/08/10/update-on-deolalikars-proof-that-pnp/">
  3</a>
<a href="http://rjlipton.wordpress.com/2010/08/11/deolalikar-responds-to-issues-about-his-pnp-proof/">
  4</a>
<a href="http://rjlipton.wordpress.com/2010/08/12/fatal-flaws-in-deolalikars-proof/">
  5</a>).
Or in Wikipedia for the
<a href="http://en.wikipedia.org/wiki/Vinay_Deolalikar#P_.E2.89.A0_NP">
  short version</a>.
Its amazing to see how many of the worlds most brilliant
mathematicians worked so fast to analyze Deolalikars proof,
including
<a href="http://rjlipton.wordpress.com/2010/08/10/update-on-deolalikars-proof-that-pnp/#comment-4885">
  Terence Tao</a>,
and
<a href="http://gowers.wordpress.com/2010/08/11/my-pennyworth-about-deolalikar/">
  Timothy Gowers</a>.
The fatal blow to the attempted proof seems to be in a letter from
<a href="http://michaelnielsen.org/polymath1/index.php?title=Immerman's_letter">
  Neil Immerman</a>.
There are plenty of references about the proposed proof and the
refutations in
<a href="http://michaelnielsen.org/polymath1/index.php?title=Deolalikar's_P!%3DNP_paper">
  this Wiki</a>.
</p>

<p>
Now for anybody that is not an expert in complexity theory (myself
included), here is a short explanation of what this is all about and
why it matters: P and NP are two classes of algorithms. Colloquially,
algorithms in P are those for which the amount of time that it takes to
execute with an input of size n is a polynomial of n. For example,
finding the maximum in a list of n elements takes approximately n steps
because we just need to go through all n elements and keep track of the
maximum. Problems for which the best possible algorithm is in P are in
general solvable in reasonable time, because even for large values of the
input the time that it takes to run the algorithm is not too big.
</p>

<p>
Algorithms in NP are those for which, if we have a proposed solution,
we can check if it actually solves the problem in polynomial time.
For example, given a set of integers {7, 3, 2, 5, 8} of size 5 we can
check if a subset like {3, 2, 5} adds up to zero in less than 5 steps.
We simply need to add the numbers. However finding a solution in
general takes a much bigger number of steps. One way to solve it is to
analyze all subsets, and for each one, check if its a solution.
But the number of subsets grows exponentially with n, hence the
difficulty.
</p>

<p>
Obviously all algorithms in P are also in NP, because if we can find
the solution in polynomial time then we can verify the solution in
polynomial time (for example by finding it again). The complex question
is whether P is equal to NP or not.
</p>

<p>
These two classes of algorithms are especially interesting for their
practical applications but there are not the only classes by any means.
The following diagram shows some of the most important ones.
The classes at the bottom are contained in the classes on top.
</p>

<a href="http://en.wikipedia.org/wiki/Complexity_class">
  <img src="/images/algorithm-hierarchy.png"
       alt="Hierarchy of algorithm complexity classes"/>
</a>

<p>
And there are many more. The
<a href="http://qwiki.stanford.edu/wiki/Complexity_Zoo">
  Complexity Zoo</a> lists 489 complexity classes.
</p>

<p>
Now that we have seen what the problem is about, why does it matter?
I am going to talk about two important real world consequences of a
possible proof of P=NP. You can find many more
<a href="http://en.wikipedia.org/wiki/P_versus_NP_problem#Consequences_of_proof">
  here</a> if you are interested.
</p>

<p>
The first application is in mathematical research.
As Stephen Cook says, we can
<a href="http://www.claymath.org/millennium/P_vs_NP/Official_Problem_Description.pdf">
  verify a proof of a theorem in polynomial time</a>
so if P=NP then we would be able to create a proof in polynomial time.
This would allow us to build
<a href="http://isabelle.in.tum.de/overview.html">
  automatic theorem provers</a>
that basically do scientific research for us 24/7, continuously
discovering new knowledge. Its obvious the tremendous repercussions
that this would have in the world.
</p>

<a href="http://isabelle.in.tum.de/overview.html">
  <img src="/images/automatic-theorem-prover.png"
       alt="Automatic theorem prover"/>
</a>

<p>
The second example is in biology. It is known that the
<a href="http://en.wikipedia.org/wiki/Hydrophobic-polar_protein_folding_model">
  HP protein folding model</a>
<a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.139.5547&rep=rep1&type=pdf">
  is in NP</a>.
This model basically simplifies the way that amino acids fold in space
to form proteins, the essential actors in all cells.
If we had an algorithm in P to solve this problem we could possibly
design substances that have specific 3D shapes and properties,
instead of simply finding them. For example
<a href="http://en.wikipedia.org/wiki/Anti-idiotypic_vaccine">
  some vaccines</a>
work because the 3D shape of a protein in the vaccine fits the 3D
shape of a protein in the pathogen. Who knows how many illnesses
we could cure with that technology.
</p>

<a href="http://en.wikipedia.org/wiki/Protein_folding">
  <img src="/images/protein-folding.jpg"
       alt="Protein folding"/>
</a>
