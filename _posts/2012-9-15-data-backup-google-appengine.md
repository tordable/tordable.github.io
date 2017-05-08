---
layout: post
title: Data backup in Google AppEngine
---

<p>
Today I'm just going to share a little bit of code to download content
from the DataStore in Google AppEngine.
A few days ago I was worried about not having a recent backup of my blog.
So I decided to write some code to download all the blog content in a
convenient <a href="http://docs.python.org/library/zipfile.html">
  ZIP file</a>. Here it is:
</p>

``` python
class Backup(webapp.RequestHandler):
  """Handler to download a file with a backup of the site.

  Beware of the maximum response size in AppEngine, which could
  cause failures with big files.
  """
  def get(self):
    # Set up headers for the browser to correctly recognize the ZIP file.
    self.response.headers['Content-Type'] ='application/zip'
    self.response.headers['Content-Disposition'] = \
        'attachment; filename=' + BACKUP_FILE_NAME

    # Write ZIP file directly to output stream.
    output = ZipFile(self.response.out, "w", ZIP_DEFLATED)

    # Compress posts and emit them directly to HTTP response stream.
    # Encode file_name as ASCII, which is what the zipfile library uses.
    for post in app.get_all_posts_and_drafts():
      file_name = BACKUP_POSTS_DIRECTORY + post.title + '.txt'
      file_info = ZipInfo()
      file_info.filename = file_name.encode('ascii', 'ignore')
      file_info.date_time = (post.date.year,
                             post.date.month,
                             post.date.day,
                             post.date.hour,
                             post.date.minute,
                             post.date.second)
      file_info.external_attr = 0644 << 16L  # R/W permissions.
      post_content = 'Title: ' + post.title + '\nDate: ' + str(post.date) \
          + '\nUrl: ' + post.desired_url + '\n\n' + post.content
      output.writestr(file_info, post_content.encode('ascii', 'ignore'))

    # Now add the images. Same as before, encode the file_name as ASCII.
    for image in app.get_all_images():
      file_name = BACKUP_IMAGES_DIRECTORY + image.name
      file_info = ZipInfo()
      file_info.filename = file_name.encode('ascii', 'ignore')
      file_info.external_attr = 0644 << 16L  # R/W permissions.
      output.writestr(file_info, image.get_data())

    output.close()
```
