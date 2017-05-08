---
layout: post
title: Card Games, Complete Subgraphs, Constant Weight Error Correcting Codes and Finite Projective Geometries
---

<p>
  I was recently in a store buying a gift for a friend and found a
  card game that seemed interesting. The cards have small symbols
  which are arranged in a way such that between two cards there is
  always one symbol in common.
</p>


<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML">
</script>


<img src="/images/spot-it-card-game.png"
  alt="Spot it game" />

<p>
  These are the rules, from the
  <a href="http://www.marblesthebrainstore.com/spot-it-card-game">
    store page</a>:
</p>

<p style="margin-left: 2em;">
  <em>
    Some people can spot a 90% off designer dress in a pile of discounted
    rubbish. They make out street signs from superhero distances. And they
    can identify the rarest of rare birds without even trying. You can be
    one of those people after a few quick rounds of Spot It! This smart game
    contains 55 illustrated cards with eight symbols each. There is always
    one, and only one, matching symbol between any two cards. All you need
    is a sharp eye and quick hands to take home the title of “Spot It! Master
    of the Visual Universe.” Win or lose, every player gets killer visual
    perception skills as a parting gift.
  </em>
</p>

<p>
  You can see an example of the relationship between cards here:
</p>

<img src="/images/spot-it-card-game-2.png"
  alt="Spot it game" />

<p>
  As I was leaving the store I though maybe there is something more to this
  game than meets the eye.
</p>

<h2>Card Games</h2>

<p>
  First of all, <em>how many symbols are there? And are they repeated or
  not?</em> Let's start with the most simple approach. We have 55 cards,
  and we know that there is always a symbol in common between two cards.
  Given 55 cards we have a maximum of

$$
\left(\begin{array}{c}
55\\
2\end{array}\right)=\frac{55\cdot54}{2}=1485
$$

  pairs of cards. Now, that seems a large number of symbols, more than
  one would imagine by looking at the card images. But the real problem
  with this approach is that each card would need 54 symbols, instead of
  just 8.
</p>

<p>
  Let's think about it the other way around. We have 55 cards, with 8 symbols
  each, and each symbol is repeated at least twice. That makes

$$
\frac{55\cdot8}{2}=220
$$

  symbols. Obviously the problem here is that we can't guarantee that between
  any two cards there is always a symbol in common.
</p>

<p>
  Now, if we think for a moment about the second question, what if the symbols
  were not repeated across more than 2 cards? Let \(C_{1}\) be one card from
  the deck, it has 8 symbols, \(C_{1}=\left\{ s_{1},\ldots,s_{8}\right\}\)
  which are shared by at most eight other cards

$$
C_{2},\ldots,C_{9}\,|\, C_{1}\cap C_{2}=\left\{ s_{1}\right\} \ldots C_{1}\cap C_{9}=\left\{ s_{8}\right\}
$$

  what happens when we consider yet another one, \(C_{10}\). Then it has to be

$$
C_{1}\cap C_{10}\in\left\{ s_{1},\ldots,s_{8}\right\} \Rightarrow\exists i\in\left\{ 1,\ldots,8\right\} \,|\, C_{1}\cap C_{10}\cap C_{i}\neq\emptyset
$$

  Or in another words. With 8 symbols the card 1 could only be connected to
  8 other cards, but not the remaining 46, arriving to a contradiction.
  As a matter of fact, if one looks carefully at the images of the deck and
  the video, it's possible to spot 4 cards that share the same symbol.
</p>

<h2>Complete Subgraphs</h2>

<p>
  The combinatorial approach didn't get me very far. Let's go back to the
  original problem and try to model it as a graph. We have 55 nodes, for each
  of the 55 cards. And each pair of nodes is connected through a symbol.
  So we have the complete graph of 55 nodes \(K_{55}\), which has 1485 edges.
  Now we could think that each edge has a color, and that would reduce our
  problem, to the problem of finding a coloring of the dual graph of
  \(K_{55}\). However that doesn't seem to work. In a coloring problem we are
  interested in assigning colors to nodes such that two asjacent nodes have
  different colors. In our case we can perfectly have two adjacent edges with
  the same color, corresponding to one card sharing a symbol with two other
  cards. In any case, the theory of
  <a href="http://en.wikipedia.org/wiki/Graph_coloring">graph coloring</a>
  is <a href="http://en.wikipedia.org/wiki/Chromatic_polynomial">very rich</a>
  so there may be another less obvious approach that works.
</p>

<p>
  Going back to our original graph \(K_{55}\), realize that we can
  have edges coming from the same node that have the same color, for instance

$$
n_{1},n_{2},n_{3}\in V\left(K_{55}\right),\left(n_{1},n_{2}\right),\left(n_{1},n_{3}\right)\in E\left(K_{55}\right)
$$

  such that \(\left(n_{1},n_{2}\right),\left(n_{1},n_{3}\right)\) have
  the same color. But this imposes the additional condition that
  \(\left(n_{2},n_{3}\right)\) has the same color as the other two. Or in
  other words, taking all the edges that have the same color and the
  corresponding nodes should give us a complete subgraph. Going back to
  cards and symbols, this makes obvious sense. If we have 8 cards that
  share a particular symbol, then any two pairs of cards out of those 8
  are connected through that same symbol. We know from the problem
  definition that there is no other symbol that can be shared among any
  pair of those 8 cards.
</p>

<p>
  This seems closely related, but not quite the same as the problem of finding
  <a href="http://en.wikipedia.org/wiki/Clique_(graph_theory)">cliques</a>
  in the graph. In our subgraphs each of the nodes is also connected to nodes
  outside of the subgraph. All other nodes, as a matter of fact. Nevertheless,
  considering that the
  <a href="http://en.wikipedia.org/wiki/Clique_cover">clique cover problem</a>
  is NP-complete, that doesn't augur an easily computable solution to our deck
  problem.
</p>

<p>
  For the sake of example, let's try to find a solution in case we had 6
  cards. We can start taking the complete subgraph with the first 5
  nodes. All with the same color, or symbol a. And then the remaining
  node, with 5 edges to the previous 5. Each one with a different color
  b,c,d,e,f. We can't take the same color for all because the
  destination nodes are not connected within the subgraph. The 6
  cards would be:

$$
\begin{eqnarray*}
C_{1} & = & \left\{ a,b\right\} \\
C_{2} & = & \left\{ a,c\right\} \\
C_{3} & = & \left\{ a,d\right\} \\
C_{4} & = & \left\{ a,e\right\} \\
C_{5} & = & \left\{ a,f\right\} \\
C_{6} & = & \left\{ b,c,d,e,f\right\} \end{eqnarray*}
$$

  These verify that between each pair of cards there is only one symbol in
  common. However they don't satisfy the condition that each card have the
  same number of symbols. In order to satisfy that condition as well,
  we would need to make sure that each node is contained in the same number
  of subgraphs. With a little bit more work we can find a solution for
  \( K_{6}\), which is as follows
</p>

<img src="/images/complete-graph-six-nodes.png"
  alt="Complete Subgraph with six nodes" />

<p>
  Giving the cards:

$$
\begin{eqnarray*}
C_{1} & = & \left\{ a,b,e\right\} \\
C_{2} & = & \left\{ a,d,f\right\} \\
C_{3} & = & \left\{ b,d,g\right\} \\
C_{4} & = & \left\{ c,d,e\right\} \\
C_{5} & = & \left\{ b,c,f\right\} \\
C_{6} & = & \left\{ a,c,g\right\} \end{eqnarray*}
$$

  Again, it's easy to verify that between each pair of cards there is only one
  symbol in common. But now each card has only 3 symbols. In any case,
  following this approach it doesn't seem obvious how to manually scale
  the process to 55 cards.
</p>

<h2>Constant Weight Error Correcting Codes</h2>

<p>
  Here is another insight: we can write a matrix that has one row for each
  card, and one column for each symbol. This reminds to the
  <a href="http://en.wikipedia.org/wiki/Incidence_matrix">
    incidence matrix for the graph</a>,
  but is clearly different. The matrix is:

$$
\begin{array}{c}
\begin{array}{ccccccc}
a & b & c & d & e & f & g\end{array}\\
\left(\begin{array}{ccccccc}
1 & 1 & 0 & 0 & 1 & 0 & 0\\
1 & 0 & 0 & 1 & 0 & 1 & 0\\
0 & 1 & 0 & 1 & 0 & 0 & 1\\
0 & 0 & 1 & 1 & 1 & 0 & 0\\
0 & 1 & 1 & 0 & 0 & 1 & 0\\
1 & 0 & 1 & 0 & 0 & 0 & 1\end{array}\right)\end{array}
$$

  And what we have here is a set of binary words, such that the
  <a href="http://en.wikipedia.org/wiki/Hamming_distance">Hamming distance</a>
  between each pair of words is 4. Between each of the words there is one
  symbol in common, there are two symbols which appear only in the first word,
  two more that appear only in the second word, and the remaining symbols
  don't appear in any of them.
  This is precisely what makes an
  <a href="http://en.wikipedia.org/wiki/Error-correcting_code">
    error correcting code</a> valuable.
  In our particular case we are interested in codes with
  <a href="http://en.wikipedia.org/wiki/Constant-weight_code">
    constant weight</a>,
  because each of the words should have the same number of symbols.
</p>

<p>
  With this, the problem is reduced to finding an error correcting code.
  We have 55 words, corresponding to the 55 cards in the game. The weight
  of each word is 8, because each card has 8 symbols, and the distance
  between words is 14, because for each pair of cards there is one symbol
  in common, 7 appear only in the first card, 7 in the second one, and
  the rest don't appear in any of them.
</p>

<p>
  Three questions arise, first,
  <em>is it possible to build a code like this?</em> second,
  <em>how many symbols do we need?</em> and third,
  <em>how do we actually go about building this code?</em>
</p>

<p>
  Fortunately, there are complete tables that indicate the
  <a href="http://www.win.tue.nl/~aeb/codes/Andw.html">
    bounds for binary constant weight codes</a>.
  Formally, \(A\left(n,d,w\right)\) is the maximum number of words in a
  binary code with word length n, distance d and constant weight w.
  In our case d=14, w=8 and we are looking for the minimum n such that
  \( A\left(n,d,w\right)\geq55\). By looking at the tables we can see
  that \(A\left(n,14,8\right)<55\) for all \(n<55\), and
  \(A\left(56,14,8\right)=49\) and \(A\left(57,14,8\right)=57\).
  And this answers the first two questions. If we take 57 symbols then we
  can build a code with 57 words which verifies our constraints.
  If you look back at the tables you will see a
  <a href="http://www.win.tue.nl/~aeb/codes/Andw.html#d14">note</a>
  which indicates that the maximum is reached by taking
  \(PG\left(2,7\right)\).
</p>

<h2>Finite Projective Geometries</h2>

<p>
  \(PG\left(2,7\right)\) is a
  <a href="http://en.wikipedia.org/wiki/Projective_geometry">
    finite projective geometry</a>
  of dimension 2 and order 7. The order is one less than the number of points
  in a line. In particular, this is the
  <a href="http://en.wikipedia.org/wiki/Projective_plane">projective plane</a>
  built on top of the
  <a href="http://en.wikipedia.org/wiki/Finite_field">finite field</a>
  \(\mathbb{F}_{7}\).
</p>

<p>
  In \(PG\left(2,7\right)\) we have \(7^{2}+7+1=57\) points, 57 lines, 7+1=8
  points on each line, and 8 lines through each point. As such, if we model
  the cards in our deck as lines, and the symbols as points, we can build
  explicitly our deck:
</p>

<p>
Points:

$$
\begin{array}{c}
\left(\underline{0},\underline{0},\underline{1}\right),\\
\left(\underline{0},\underline{1},\underline{0}\right),\left(\underline{0},\underline{1},\underline{1}\right),\left(\underline{0},\underline{1},\underline{2}\right),\left(\underline{0},\underline{1},\underline{3}\right),\left(\underline{0},\underline{1},\underline{4}\right),\left(\underline{0},\underline{1},\underline{5}\right),\left(\underline{0},\underline{1},\underline{6}\right),\\
\left(\underline{1},\underline{0},\underline{0}\right),\left(\underline{1},\underline{0},\underline{1}\right),\left(\underline{1},\underline{0},\underline{2}\right),\left(\underline{1},\underline{0},\underline{3}\right),\left(\underline{1},\underline{0},\underline{4}\right),\left(\underline{1},\underline{0},\underline{5}\right),\left(\underline{1},\underline{0},\underline{6}\right),\\
\left(\underline{1},\underline{1},\underline{0}\right),\left(\underline{1},\underline{1},\underline{1}\right),\left(\underline{1},\underline{1},\underline{2}\right),\left(\underline{1},\underline{1},\underline{3}\right),\left(\underline{1},\underline{1},\underline{4}\right),\left(\underline{1},\underline{1},\underline{5}\right),\left(\underline{1},\underline{1},\underline{6}\right),\\
\left(\underline{1},\underline{2},\underline{0}\right),\left(\underline{1},\underline{2},\underline{1}\right),\left(\underline{1},\underline{2},\underline{2}\right),\left(\underline{1},\underline{2},\underline{3}\right),\left(\underline{1},\underline{2},\underline{4}\right),\left(\underline{1},\underline{2},\underline{5}\right),\left(\underline{1},\underline{2},\underline{6}\right),\\
\left(\underline{1},\underline{3},\underline{0}\right),\left(\underline{1},\underline{3},\underline{1}\right),\left(\underline{1},\underline{3},\underline{2}\right),\left(\underline{1},\underline{3},\underline{3}\right),\left(\underline{1},\underline{3},\underline{4}\right),\left(\underline{1},\underline{3},\underline{5}\right),\left(\underline{1},\underline{3},\underline{6}\right),\\
\left(\underline{1},\underline{4},\underline{0}\right),\left(\underline{1},\underline{4},\underline{1}\right),\left(\underline{1},\underline{4},\underline{2}\right),\left(\underline{1},\underline{4},\underline{3}\right),\left(\underline{1},\underline{4},\underline{4}\right),\left(\underline{1},\underline{4},\underline{5}\right),\left(\underline{1},\underline{4},\underline{6}\right),\\
\left(\underline{1},\underline{5},\underline{0}\right),\left(\underline{1},\underline{5},\underline{1}\right),\left(\underline{1},\underline{5},\underline{2}\right),\left(\underline{1},\underline{5},\underline{3}\right),\left(\underline{1},\underline{5},\underline{4}\right),\left(\underline{1},\underline{5},\underline{5}\right),\left(\underline{1},\underline{5},\underline{6}\right),\\
\left(\underline{1},\underline{6},\underline{0}\right),\left(\underline{1},\underline{6},\underline{1}\right),\left(\underline{1},\underline{6},\underline{2}\right),\left(\underline{1},\underline{6},\underline{3}\right),\left(\underline{1},\underline{6},\underline{4}\right),\left(\underline{1},\underline{6},\underline{5}\right),\left(\underline{1},\underline{6},\underline{6}\right)\end{array}
$$
</p>

<p>
  Lines:
</p>

<img src="/images/projective-geometry-2-7.png"
  alt="Projective geometry PG(2,7)"
  class="big" />

<p>
  Feel free to check my computations. I wrote the table above manually.
  I included it as an image to make the formula rendering easier on the
  browser, but I can share the orginal \(\LaTeX\) code on request.
  I don't have the game with me, so I can't check if this is
  exactly how it's made, remember that the game has 55 cards instead of the
  57 available. This leaves another question open, what other ways are there
  to build a deck like this, possibly with more symbols and less words?
</p>
