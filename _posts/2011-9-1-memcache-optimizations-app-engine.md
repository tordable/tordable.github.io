---
layout: post
title: Memcache Optimizations in App Engine
---

<p>
Google just announced that 
<a href="http://googleappengine.blogspot.com/2011/08/50-credit-for-new-billing-signups-and.html">
  App Engine is going to be out of preview soon</a>.
And there is a new pricing model as part of the changes. So I decided to
take a look at the resource usage of this blog and found out that the
<a href="http://www.javiertordable.com/blog/rss.xml">RSS feed</a> is the
most expensive request.
</p>

<p>I decided to optimize it by caching it in the
memcache and 5 minutes later it's working in production (talking about
fast software development cycles...).
</p>

<img src="/images/implement-memcache.png" alt="Implementing memcache diff" />
