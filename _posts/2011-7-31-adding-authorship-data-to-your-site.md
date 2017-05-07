---
layout: post
title: Adding Authorship Data to Your Site
---

<p>
I figured out how to add authorship markup in the blog!
There is a nice tutorial
<a href="http://www.blindfiveyearold.com/how-to-implement-rel-author">
  here</a>,
and complete documentation in the official
<a href="http://www.google.com/support/webmasters/bin/answer.py?answer=1229920">Webmaster Tools authorship help page</a>.
But it basically comes down to this: There are two options,
with 2 or 3 links.
</p>


<p>
In the 2 link option, you simply add a rel=author link from the
content page to your Google+ profile, and then in the profile a link
back to the root site.
</p>

<img src="/images/2-way-authorship-link.png"
    alt="2-way Google Authorship link" />

<p>
In the 3 way option, which you can use if you have an author page,
you add a rel=author link from the content page to the author page,
which has to be on the same domain. Then you add two links back and
forth between the Google+ profile and the author page.
Those two links have to be marked rel=me.
</p>

<img src="/images/3-way-authorship-link.png"
    alt="3-way Google Authorship link" />

<p>
In Google+ you can mark a link as rel=me if you indicate that the page
is about you.
</p>

<img src="/images/about-me-google-plus.png"
    alt="Indicate in Google+ that the page is about you" />

<p>
After that, you can check that the markup is correct in the
<a href="http://www.google.com/webmasters/tools/richsnippets">
  Rich Snippets Testing Tool</a>.

<img src="/images/rich-snippets-testing-tool.png"
    alt="Rich Snippets Testing tool for authorship" />

<p>
Easy enough, right? If you liked this post, or you have any question
that I can answer just leave me a note on Google+.
</p>

<a rel="author" href="http://plus.google.com/115448600022457507975/">
  <img src="http://www.google.com/images/icons/ui/gprofile_button-64.png" width="64" height="64">
</a>
