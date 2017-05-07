---
layout: post
title: How to Resize All Images in a Directory
---

<p>
At some point or another, pretty much everybody has had to
bulk process all the images in a directory. Either to resize
them to a smaller size to share them, or do some other simple
transformation.
</p>

<p>
Well, here is a very easy way to do it with a dozen lines of
Python.
</p>


``` python
# Resize all images in a directory to half the size.
#
# Save on a new file with the same name but with "small_" prefix
# on high quality jpeg format.
#
# If the script is in /images/ and the files are in /images/2012-1-1-pics
# call with: python resize.py 2012-1-1-pics

import Image
import os
import sys

directory = sys.argv[1]

for file_name in os.listdir(directory):
  print("Processing %s" % file_name)
  image = Image.open(os.path.join(directory, file_name))

  x,y = image.size
  new_dimensions = (x/2, y/2)
  output = image.resize(new_dimensions, Image.ANTIALIAS)

  output_file_name = os.path.join(directory, "small_" + file_name)
  output.save(output_file_name, "JPEG", quality = 95)

print("All done")
```
