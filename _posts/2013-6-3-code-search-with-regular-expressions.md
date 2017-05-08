---
layout: post
title: Code Search with Regular Expressions
---

<p>
A few days ago I found out about
<a href="https://code.google.com/p/codesearch/">codesearch</a>. It's a
group of command-line tools to index and search code using regular
expressions. It was originally developed by fellow googler
<a href="http://swtch.com/~rsc/">Russ Cox</a>. It uses the same algorithms
that were behind Google Code Search.
</p>

<img src="/images/google-codesearch.png"
  alt="Google Code search" />

<p>
I played with it a little bit and I'm impressed by how fast it is. Also, it
can be <a href="https://github.com/abingham/codesearch.el">
    integrated easily with emacs</a>. However, I think it would be even better
with a simple web interface. For example, to show the content of the files
and highlight matching expressions. Actually that would be a nice weekend
project...
</p>
