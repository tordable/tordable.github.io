---
layout: post
Title: GitHub Pages as a Blogging Platform
---

I used Ghost for a while. It's a simple and straightforward platform that simply gets out of the way and lets you write and publish a blog. And I've been a happy customer of the hosted version, paying a bit less than $100 a year for it. However, recently Ghost decided to raise [prices](https://ghost.org/pricing/ ) by more than 100% and target a higher end market. At which point it's hard for me to justify the expense. So I began looking for alternatives.

![](/images/blogging.jpg)

One reasonable approach would have been to install Ghost in a shared VM and use the open source version instead of the hosted one. And there are quite a few cloud providers that provide quick installs of Ghost, like for example [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-ghost-application ), which is fairly affordable, starting at 5$ a month. Another one would be [Scaleway](https://www.scaleway.com/imagehub/ghost/ ), which is even cheaper, at 3 Euro a month.

Of course, I could also have switched completely to a platform like [Medium](https://medium.com/@tordable ), which has some advantages, like an embedded sharing mechanism, and a great looking template. However, that would have implied giving up control over all the content and structure of the blog. Including for example the pattern of the URLs. Medium ends URLs in a random sequence of characters. It would have been a hassle to add all the required redirects to prevent old pages from breaking.

Eventually I found about [Github pages](https://pages.github.com/ ). Github provides a very basic solution for hosting static content. By itself, Github pages is not terribly interesting for a blog, because a blog is not completely static. For example, when a new post is added an index or an rss feed needs to be updated as well. And that's where Jekyll comes in. [Jekyll](https://jekyllrb.com/ ) is a static website generator. It takes text content in Markdown and generates a fully formatted HTML site, including indices and RSS feeds. So in order to publish a blog one only needs to add a file, re-run Jekyll and then publish the resulting output.

The key that makes this workflow practical is that Github pages is tightly integrated with Jekyll. So I didn't even need to install Jekyll locally and run it after every change. I can just check in the blog post files in a Github repo, and it [takes care of everything else](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/ ).

Jekyll also supports templates, including a small library of [predefined templates](https://help.github.com/articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser/ ). The quality and variety are not really comparable to Wordpress. However, the level of customization is fantastic. Also whereas many Wordpress templates are complex and full of undocumented code, Jekyll templates are very simple and easy to modify, and at the same time quite powerful. Including, for example, [defining variables](https://jekyllrb.com/docs/variables/ ) for each blog post in the source markdown file, and have the HTML generator use that data.

The most useful resource that I found to make this transition is this article from [Barry Clark](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/ ) together with his bare-bones site template in [Github](https://github.com/barryclark/jekyll-now ). I was able to port my blog from Ghost to Github + Jekyll without changing anything substantial in the templates. I updated the styling, fonts and so on, but I didn't have to update any HTML templates. All in all, the transition took a bit longer than expected because many of my blog posts were originally written in HTML, instead of Markdown. And I had to update the formatting, JavaScript library includes, and update a bunch of broken links. But the end result seems to work very well. Tell me if you like the new design!

<p>
Don't forget to follow me on twitter: <a class="twitter-follow-button"
  href="https://twitter.com/tordable"
  data-size="large">
Follow @tordable</a>  
</p>
