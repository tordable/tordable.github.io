---
layout: post
Title: Nounoublog updated
---

<p>
Over the last few weeks this blog has changed dramatically. It looks pretty
much the same as when it started but under the covers the code of the blogging
platform, <a href="http://code.google.com/p/nounoublog/">Nounoublog</a>
is very different. I am going to talk about three of the features that
I have been working on lately:
</p>

<ul>
  <li>Archives</li>
  <li>RSS Feed</li>
  <li>Admin console</li>
</ul>

<p>
And I will show a few snippets of the actual code that powers the blog.
</p>
<p>
For those that visit the blog for the first time, Nououblog is a small
blogging platform developed in
<a href="http://code.google.com/appengine/">Google App Engine</a>.
I started working on it basically for two reasons. First, I wanted to learn
how to develop applications for Google App Engine. And second, because I wanted
a simple but highly customizable platform, with free hosting and no ads.
</p>

<p>
<img src="http://code.google.com/appengine/images/appengine_lowres.gif"
     alt="Google App Engine logo" />
</p>


<h3>Archives</h3>

<p>
Now the blog has an archives section. It is the small set of links in the right
side. It will let you view all the posts since the creation of the blog.
</p>
<p>
For example, if you click in <a href="/blog/2009">2009</a>, it will show you
all the posts from the previous year. In order to enable this I had to update
the url structure of the blog. Now paths have the form:
</p>
<pre>
http://www.javiertordable.com/blog/2010/01/30/the-eternal-night
</pre>

<p>
With slashes separating the different parts of the url. And all the following
are valid urls:
</p>

<pre>
http://www.javiertordable.com/blog/2010/01/30/
http://www.javiertordable.com/blog/2010/01/
http://www.javiertordable.com/blog/2010/
</pre>

<p>
Each one will show respectively all the posts of the day, the month, and the
year. Each one has its own handler. Here is for example the handler that
returns all the posts in a year:
</p>

<pre>
class BlogYear(webapp.RequestHandler):
  """Request handler for all blog posts in a given year.

  This handler answers all requests for /blog/YYYY and /blog/YYYY/.
  """
  def get(self):
    # Get the year from the path.
    path = self.request.path[len('/' + config.BLOG_PREFIX + '/'):]
    (year, month, day, desired_url) = extract_url_parts(path)

    # Get the list of all posts of the year.
    posts = get_posts_in_date(year, month=None, day=None)

    # And return an archives page with the posts.
    s = pages.ArchivesPageGenerator()
    self.response.out.write(s.generate(posts, str(year)))
</pre>

<p>
There are similar handlers for all the posts in a month and all the posts
in a day.
</p>


<h3>RSS Feed</h3>

<p>
An <a href="http://en.wikipedia.org/wiki/RSS">RSS feed</a> is a specially
formatted XML file, which includes data about the posts in a blog. It is
updated automatically by the blog, so that when it changes, RSS subscribers
know that there is new content. There are applications like
<a href="http://www.google.com/reader/">Google Reader</a> that are very
helpful to keep track of many RSS feeds and alerting when there is new
stuff to read.
</p>

<p>
In the <a href="http://code.google.com/p/nounoublog/">
  Nounoublog blogging platform</a>, you can access the RSS feed by clicking
in the <a href="/blog/rss.xml">RSS</a> link at the top of the page.
In the browser you may see only a bunch of text, but if you add this link to
your Google Reader subscriptions you will see a list of the most recent posts.
</p>

<p>
Same as before the RSS feed is powered by its own handler, which is very
simple:
</p>

<pre>
class RssFeed(webapp.RequestHandler):
  """Handler for the RSS feed.

  This feed contains a list with all the blog posts, from last to first.
  This list is subject to the maximum item retrieval limit of the DB.
  """
  def get(self):
    # Get the list of all posts.
    posts = get_all_posts()

    # Return the xml feed with the posts.
    template_values = {'posts': posts}
    self.response.out.write(template.render(template_path("rss_feed"),
                                            template_values))
</pre>

<p>
Where the template provides the XML structure of the feed, and inserts
the data corresponding to the posts
</p>

<pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;iso-8859-1&quot;?&gt;
&lt;rss version=&quot;2.0&quot;&gt;
&lt;channel&gt;

&lt;title&gt;Javier Tordable Blog&lt;/title&gt;
&lt;link&gt;http://www.javiertordable.com&lt;/link&gt;
&lt;description&gt;
  Javier Tordable blog on Software, Mathematics and Technology
&lt;/description&gt;
&lt;generator&gt;Nounoublog&lt;/generator&gt;
&lt;docs&gt;https://code.google.com/p/nounoublog/&lt;/docs&gt;

{# Loop over all the blog posts. #}
{% for post in posts %}
&lt;item&gt;
&lt;title&gt;{{ post.title }}&lt;/title&gt;
&lt;link&gt;{{ post.absolute_url }}&lt;/link&gt;
&lt;pubDate&gt;{{ post.rss_pub_date }}&lt;/pubDate&gt;
&lt;guid&gt;{{ post.absolute_url }}&lt;/guid&gt;
&lt;description&gt;{{ post.escaped_content }}&lt;/description&gt;
&lt;/item&gt;
{% endfor %}

&lt;/channel&gt;
&lt;/rss&gt;
</pre>

<p>
Notice that in the Django template the post elements appear as attributes
while in fact they are method calls. Also I use as GUID the url of the post,
as it is intended to be a permanent link</a>.
</p>


<h3>Admin console</h3>

<p>
The last item that I have been working on is the administration console.
This is still work in progress, but I expect that once I am done with it I
will post more often.
</p>
<p>
The admin console will have options to:
</p>

<ul>
  <li>Add posts</li>
  <li>Edit posts</li>
  <li>Add static pages</li>
  <li>Edit static pages</li>
  <li>Edit the CSS</li>
  <li>Edit redirects</li>
</ul>

<p>
All these options seem very normal with the exception of the redirects.
How does it work? For example, when going to:
</p>

<pre>
http://www.javiertordable.com/blog/2009-12-01/my-first-blog-post
</pre>

<p>
You are redirected to another url, which appears in the url bar. Notice
how the dashes are now forward slash bars
</p>

<pre>
http://www.javiertordable.com/blog/2009/12/01/my-first-blog-post
</pre>

<p>
I added support for redirects because I changed the site several times
(including the url structure), and I didn't want to serve 404 error pages
for all old urls.
</p>
<p>
Keep visiting the blog or subscribe to the <a href="/blog/rss.xml">RSS</a> feed
for more news on Nouonublog!
</p>
