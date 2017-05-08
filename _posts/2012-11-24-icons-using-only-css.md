---
layout: post
title: How to make icons using only CSS
---

<p>
A few days ago I had the chance to watch a talk by
<a href="http://stevesouders.com/">Steve Souders</a>, who is one of the world's
top experts on website performance. I started thinking about how to apply
some of the techniques that he mentions to my site, and I decided to replace
the icons that appear at the top. These are links to subscribe to blog updates,
the RSS feed, the feedburner email subscription, and links to twitter
and Google+, which I update when there are new blog posts. I decided to replace
these image icons with icons made using only CSS.
</p>

This has several advantages:

<ul>
  <li>4 HTTP calls less. And as the number of TCP connections from the browser
    is limited, this would allow other content to be downloaded faster
  <li>Potentially one DNS call less, because the g+ icon is in a different
    domain than most of the blog
  <li>A few less KB of data that need to be transmitted over the wire
  <li>3 less requests to the AppEngine web server, for the images
  <li>Nicer, more sleek look, which is resolution independent. Try zooming
    into the icons!
</ul>

So here is how I did it. First, the general style for all the buttons. Using
the same color schema as the rest of the blog:


``` css
/* Subscribe icons */
.subscribe-icon {
  /* Little boxes on the right side. */
  display: inline;
  float: right;

  /* Same colors as the title. */
  color: #eee;
  background-color: #34343e;

  /* Buttons with rounded corners, 2 px between them. */
  margin: 1px;
  border-radius: 4px;
}
```

The twitter icon is probably the easiest one, I simply took a <em>t</em> in an
appropriate font, and gave it a reasonable size and position. I added
a little bit of shadow to give it depth:


``` css
/* Lowercase t in a box. Similar to the twitter logo. */
.twitter-icon {
  font-family: monospace;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 1px 1px #aaa;

  width: 20px;
  height: 22px;
  padding: 1px 0px 0px 4px;
}
```


The Google+ icon is very similar, but with
<a href="http://www.w3schools.com/cssref/pr_pos_overflow.asp">
  overflow: hidden</a> to make the text out of the box dissappear:


``` css
/* g+ text overflowing from a box. Similar to the Google+ icon. */
.gplus-icon {
  font-family: times, serif;
  font-size: 27px;
  text-shadow: 1px 1px #aaa;

  /* Cut the text outside of the box. */
  overflow: hidden;

  width: 24px;
  height: 23px;
}
```


The email icon has another twist, it uses a special Unicode character that
represents an envelope. This trick is commonly used in many sites, for example
for zippys:


``` html
&lt;span class="subscribe-icon email-icon"&gt;&amp;#009993;&lt;/span&gt;
```


The CSS of the button is basically the same:


``` css
/* Unicode envelope character inside of a box. */
.email-icon {
  font-weight: 600;
  font-size: 23px;

  width: 20px;
  height: 18px;
  padding: 3px 2px 2px 2px;
}
```


Finally, the RSS button, which is the most complex one. The <em>waves</em> are
made as circles, in which the left and bottom parts are hidden. It has 5 parts:


<ul>
  <li>The outside button, which similar to the other 3 buttons
  <li>The dot at the bottom left
  <li>A top right quadrant of a circle, in small size
  <li>Another quadrant, but a little bit bigger
  <li>Most importantly, a container box for the circles, which hides the rest
    of the objects and allows to see only one quadrant
</ul>


This is the HTML:


``` html
&lt;a href="/blog/rss.xml"&gt;
  &lt;span class="subscribe-icon rss-icon"&gt;
    &lt;span class="rss-icon-dot"&gt;.&lt;/span&gt;
    &lt;span class="rss-icon-container"&gt;
      &lt;span class="rss-icon-small-wave"&gt;&amp;nbsp;&lt;/span&gt;
      &lt;span class="rss-icon-big-wave"&gt;&amp;nbsp;&lt;/span&gt;
    &lt;/span&gt;
  &lt;/span&gt;
&lt;/a&gt;
```


And the CSS:


``` css
/* Outer box for the RSS icon. */
.rss-icon {
  width: 22px;
  height: 23px;
  padding-left: 2px;
}

/* The dot at the bottom left of the RSS icon. */
.rss-icon-dot {
  font-family: times, serif;
  font-size: 36px;

  position: relative;
  left: -1px;
  top: -3px;
}

/* Container that marks the borders of the RSS icon waves. */
.rss-icon-container {
  display: block;
  width: 20px;
  height: 20px;

  /* Show only one quadrant. Hide the rest of the circle. */
  overflow: hidden;

  position: relative;
  left: 1px;
  top: -29px;
}

/* The small wave at the right of the icon. Only one quadrant. */
.rss-icon-small-wave {
  display: block;
  width: 16px;
  height: 16px;

  border-style: solid;
  border-width: 3px 3px 0px 0px;
  border-radius: 50%;
  border-color: #eee;

  position: relative;
  left: -8px;
  top: 9px;
}

/* The big wave at the right of the icon. Only one quadrant. */
.rss-icon-big-wave {
  display: block;
  width: 28px;
  height: 28px;

  border-style: solid;
  border-width: 3px 3px 0px 0px;
  border-radius: 50%;
  border-color: #eee;

  position: relative;
  left: -14px;
  top: -15px;
}
```


As the end result, this is how the icons look like, made with just a few
bytes of CSS:


<img src="/images/css-icons.png"
  alt="Icons made using only CSS">


I hope that was useful. If you have a website check out what icons you can
convert to CSS. And if you liked the post, don't forget to share using the
Google+ button.
