---
layout: post
title: SOPA Protest in Google App Engine
---

<p>
Just for trivia, this is how I implemented the SOPA protest page yesterday. 
</p>


``` python
class Sopa(webapp.RequestHandler):
  """Handler for 503 protest Sopa response."""
  def get(self):
    self.response.set_status(503, 'Service Unavailable')
    self.response.out.write(
      '&lt;p&gt;&lt;b&gt;503: Service Unavailable&lt;/b&gt;&lt;/p&gt;' +
      '&lt;p&gt;www.javiertordable.com is not available today in protest with ' +
      'the &lt;a href=\"http://sopastrike.com/\&gt;>Stop Online Piracy Act ' +
      '(SOPA)&lt;/a&gt;.&lt;/p&gt;')
```

<p>
This would work for any simple Python wsgi Google App Engine application
</p>

``` python
def main():
  application = webapp.WSGIApplication([('\.*', Sopa)], debug = False)
  util.run_wsgi_app(application)
```

