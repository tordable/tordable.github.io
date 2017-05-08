---
layout: post
title: A One-line primality test
---

<p>
A primality test in one line of Perl:
</p>

``` perl
perl -wle 'print "Prime" if (1 x shift) !~ /^1?$|^(11+?)\1+$/' [number]
```

<p>
Originally written by <a href="http://abigail.be/">Abigail</a>. Explained in
detail by
<a href="http://neilk.net/blog/2000/06/01/abigails-regex-to-test-for-prime-numbers/">
  Neil Kandalgaonkar</a>. Kudos to <a href="http://petewarden.com/2013/11/09/five-short-links-56/">
  Pete Warden</a> for the link.
</p>
