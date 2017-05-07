---
layout: post
title: Google Code Prettify
---


<p>
I just installed the
  <a href="http://code.google.com/p/google-code-prettify/">Google code   
  prettify library</a>
on <a href="http://nounoublog.org">Nounoublog</a>.
</p>

<p>It's a very small and
simple Javascript library to <em>pretty print</em> code.
Pretty printing is of course formatting code to make it look good
and easier to understand, identifying language keywords, constants, etc.
The Google code prettify library supports a wide variety of languages,
including C, Java, Python, Bash, SQL, HTML, Javascript, etc. Even with
the default configuration it generates snippets that are very nice
looking. For example:
</p>

``` python
# Computes the hailstone sequence of an input number
# and prints how many iterations it takes to reach 1.
# For more info see <a href="http://en.wikipedia.org/wiki/Collatz_conjecture">http://en.wikipedia.org/wiki/Collatz_conjecture</a>

import sys

def iterate_hailstone(n):
  if n % 2 == 0:
    return n / 2
  else:
    return 3 * n + 1

if __name__ == '__main__':
  n = int(input('Introduce a natural number: '))
  if (n < 1):
    sys.exit('You need to learn what a natural number is.')

  num_iterations = 0
  while n > 1:
    print n
    n = iterate_hailstone(n)
    num_iterations = num_iterations + 1

  print 'Converged in %d iterations' % num_iterations

```

<p>
Or more succinctly:
</p>

``` python
while(n > 1): n = (n%2) * (3*n+1) + (1 - n%2) * (n/2); n;
```

<p>
Installing the library was painless. Also, it seems very quick to load.
The complete instructions are
<a href="http://google-code-prettify.googlecode.com/svn/trunk/README.html">here</a>.
</p>

<p>
PS. Does the program finish for all natural numbers?
</p>
