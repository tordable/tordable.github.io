---
layout: post
title: Really Simple SEO
---

<p> 
SEO stands for Search Engine Optimization, and is the process of improving a website's
structure and content in order to make it easy for search engines to gather the pages and
display them in search results in the best position possible.
</p> 

<img src="/images/all-search-engines.png"
           alt="Search Engines"/> 

<p> 
In this post I am going to explain a few basic principles of SEO and show examples of how
I implemented them in my blog. Also, as I am the Tech Lead of Webmaster Tools backend,
I am going to talk a little bit about some features of Webmaster Tools that are very helpful
for SEO. Please remember that all these tips are not only good for search engines, but also
for users. If you have to choose between doing something to benefit users or search engines,
always choose what is best for users.
</p> 
 
<p> 
 Here is the list of simple SEO tips:
</p> 
 
<ul> 
 
<li><strong>Use a good URL structure, with descriptive URLs.</strong> If the URL has
keywords related to the page topic it will be easier to find in search results. For example,
the url of this post includes the words <em>really simple seo</em>, that are the topic
of the post

```
http://www.javiertordable.com/blog/2010/03/11/really-simple-seo
```

</li> 
 
<li> 
<strong>Use good page titles.</strong> Similar to the previous tip, good page titles,
with appropriate keywords make it easier to find the page in search results. Even though
the title of this page includes the full name of the site, the title begins with a good
description of the content
```
    Really Simple SEO - Javier Tordable blog on Software, Mathematics and
    Technology
```
</li>
 
<li> 
<strong>Have a good meta description for each page.</strong> The meta description
is used by some search engines to show in the snippets in search results (the small
paragraph with a description of the page). If you don't use it, you will have the risk that
the search engine will generate it by itself, with unexpected results. This happened
to me before I had a meta description, my snippet was taken from the RSS feed and
looked awful. My current meta description for the homepage is:
```
    &lt;meta name="description" content="Javier Tordable blog on Software,
    Mathematics and Technology. Javier Tordable is a software engineer at
    Google and Ph.D. candidate in Mathematics."&gt;
```
</li> 
 
<li> 
<strong>Structure the page appropriately, using HTML header tags.</strong> The most
important parts should be within a H1 tag, the second most important in H2, etc.
until H6. For example in this post the blog title and subtitle are within H1 and H2 tags.
The title of the particular post is in a H2, and other less important sections, the about
box and the archives are within an H3 HTML tag
```
    &lt;h1&gt;&lt;a href="/"&gt;Javier Tordable&lt;/a&gt;&lt;/h1&gt;
    &lt;h2&gt;A blog on Software, Mathematics and Technology&lt;/h2&gt;
    &lt;h3&gt;About&lt;/h3&gt;
    &lt;h3&gt;Archives&lt;/h3&gt;
    &lt;h2&gt;Really Simple SEO&lt;/h2&gt;
```
</li>
 
<li> 
<strong>Use the simplest format possible.</strong> Currently search engines are
very advanced and can process Flash, Javascript and other content types, however
it's always easier to access raw HTML content. So prefer to use HTML for most content,
unless Flash or Javascript are essential. Also it will be easier to access the page from
old browsers or other platforms. For example iPhone users can't see Flash pages
</li> 
 
<li> 
<strong>Have a flat internal link structure.</strong> The flatter your link structure
is, the easier it will be for search engines to access a page. Also the easier it will be for
users to access whatever content they are looking for. In my blog I have all the main
sections linked in the top navigation bar, which appears in all pages. And in the right
side of most pages there is a link to all the blog posts
```
    &lt;a href="/blog/all"&gt;All Posts&lt;/a&gt;
```
From the homepage of the site it's possible to access any other content page in
two clicks or less.
</li> 
 
</ul> 
 
<p> 
And now, some interesting pieces of information about your site that you can find in
<a href="http://www.google.com/webmasters/tools/">Webmaster Tools</a>:
</p> 
 
<ul> 
 
<li> 
One of my favorites is <strong>Backlinks</strong>, which will show you all the links
pointing to your site, from all over the Web. Having many quality links is important
because it will be easier for people to find your site, and it will show to search engines
that the site is relevant.
<img src="/images/screenshot-webmaster-tools-backlinks.png"
           alt="Screenshot of Webmaster Tools Backlinks"/> 
</li>
 
<li>Another very useful tool is <strong>Top Search Queries</strong>, which will show
for which queries my site appears in search results. For example, the "bundle adjustment"
query has more requests than "javier tordable" and it appears in the second row in the
following table, while the other query is in the third row. However my site appears in
position 16 for bundle adjustment, and it appears in position one for searches of my
own name
<img src="/images/screenshot-webmaster-tools-top-search-queries.png"
           alt="Screenshot of Webmaster Tools Top Search Queries"/> 
</li>

<li>
Also, another cool piece of information is <strong>Subscriber Stats</strong> which
shows how many subscribers I have for my RSS feed from
<a href="http://www.google.com/reader">Google Reader</a>. In my case I can see that
I have 10 people subscribed. And I can also submit this feed as a Sitemap, which will help
getting my site indexed
<img src="/images/screenshot-webmaster-tools-subscriber-stats.png"
           alt="Screenshot of Webmaster Tools Subscriber Stats"/>
For example, my Sitemap statistics show that I have 11 pages in this sitemap, and they
are all indexed
<img src="/images/screenshot-webmaster-tools-sitemaps.png"
           alt="Screenshot of Webmaster Tools Sitemaps"/>
</li> 

<li> 
And to check that my site is being correctly crawled, I can check the <strong>Crawl Stats
</strong> feature. As you can see in the graph, the number of pages that are crawled
in my site per day has been going up significantly since I implemented all this SEO tips
<img src="/images/screenshot-webmaster-tools-crawl-stats.png"
           alt="Screenshot of Webmaster Tools Crawl Stats"/>
</li>

</ul>

<p> 
To finish, I am just going to point out that there are a lot of SEO resources online.
Doing proper search engine optimization doesn't need to be complicated or expensive.
And is not only good for search engines, but also for users. For more tips, you should
check the
<a href="http://googlewebmastercentral.blogspot.com/2008/11/googles-seo-starter-guide.html">
  Google SEO guide</a>.
</p>
