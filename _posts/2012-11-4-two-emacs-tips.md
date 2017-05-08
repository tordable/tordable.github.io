---
layout: post
title: Two emacs tips
---

<p>
I've been using emacs for a few years now. And even though I am
not an expert I appreciate how powerful it is. It never ceases to
amaze me how many configuration options are available.
</p>

<p>
The first tip I want to share is about formatting rules.
For example, I write my code in lines of at most 80 characters
(and you all should do too, see the <a
href="http://google-styleguide.googlecode.com/svn/trunk/cppguide.xml?showone=Line_Length#Line_Length">
  style guide</a>).
It's nice to have an indication from the editor if the line is longer.
So I set up emacs to turn the font weight to bold when
the line is too long. I also have a special configuration to
indicate tabs
(which are <a href="http://google-styleguide.googlecode.com/svn/trunk/cppguide.xml?showone=Spaces_vs._Tabs#Spaces_vs._Tabs">
  forbidden</a>)
and trailing whitespaces at the end of the line
(which are <a href="http://google-styleguide.googlecode.com/svn/trunk/cppguide.xml?showone=Horizontal_Whitespace#Horizontal_Whitespace">
  forbidden as well</a>).
</p>

``` lisp
;; Special fonts for > 80 chars, tabs and trailing whitespace.</span>
(custom-set-faces
  <span class="nocode">&#39;</span>(my-long-line-face ((((class color)) (:weight bold))) t)
  <span class="nocode">&#39;</span>(my-trailing-space-face ((((class color)) (:background "PeachPuff"))) t))

;; Mark lines longer than 80 characters, and indicate trailing whitespace.</span>
(add-hook <span class="nocode">&#39;</span>font-lock-mode-hook
   (function (lambda ()
     (setq font-lock-keywords
       (append font-lock-keywords
         <span class="nocode">&#39;</span>(("^.\\{81,\\}$" (0 <span class="nocode">&#39;</span>my-long-line-face t))
           ("[ \t]+$" (0 <span class="nocode">&#39;</span>my-trailing-space-face t))))))))
```

<p> The second tip is to enable emacs to highligt links, to be able to
click on them from within emacs and open the link in <a
href="https://www.google.com/intl/en/chrome/browser/">Chrome</a>.
Or if you want to use the keyoard only, move to the link and press
C-c &lt;RET&gt;.
</p>

``` lisp
;; Add Chrome to the $PATH.</span>
(add-to-list <span class="nocode">&#39;</span>exec-path "/opt/google/chrome")

;; Set it as default.</span>
(setq browse-url-browser-function <span class="nocode">&#39;</span>browse-url-generic
      browse-url-generic-program "chrome")

;; After loading the file, follow links.</span>
(add-hook <span class="nocode">&#39;</span>find-file-hook <span class="nocode">&#39;</span>goto-address-mode)
```

<p>
And with these changes emacs looks like this:
</p>

<img src="/images/emacs-configuration-options.png"
  alt="emacs configuration options" />
