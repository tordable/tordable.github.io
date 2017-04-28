---
layout: post
title: New Google Chart Tools
---

<p>
Google recently released a new set of tools for graphics and interactive
visualizations called <a href="http://code.google.com/apis/charttools/">
    Google Chart Tools</a>. Google Chart Tools replaces the previous
Charts API (for static images) and Visualization API (for dynamic
graphics). And it combines both APIs within a single framework. Here is
a <a href="http://googlecode.blogspot.com/2010/02/announcing-google-chart-tools.html">
    link to the official announcement</a>.
</p>

<p>
This is an example of the Charts API, a map with a couple of
countries marked in a different color:
</p>

<img src="http://chart.apis.google.com/chart?cht=t&chtm=world&chs=440x220&chld=USES&chd=t:10,50&chco=FFFFFF,00FF00,005500&chf=bg,s,EAF7FE"
    alt="Example of Google Charts API, colored map"/>

<p>
This map was generated with the following link:
</p>

```
http://chart.apis.google.com/chart?cht=t&chtm=world&chs=440x220
&chld=USES&chd=t:10,50&chco=FFFFFF,00FF00,005500&chf=bg,s,EAF7FE
```

<p>
Let me go over each part in that link and explain what it means:
</p>
<ul>
  <li><strong>cht=t</strong> indicates that this is a graph of type
      map</li>
  <li><strong>chtm=world</strong> says that the map should include the
      whole world</li>
  <li><strong>chs=440x220</strong> is the size of the chart</li>
  <li><strong>chld=USES</strong> is the list of countries to display
      in a different color, US and ES</li>
  <li><strong>chd=t:10,50</strong> is the intensity of the color of
      each country. US=10, ES=50</li>
  <li><strong>chco=FFFFFF,00FF00,005500</strong> is the color gradient
      FFFFFF=white for the background, 00FF00 light green (US) and
      005500 medium green (ES)</li>
  <li><strong>chf=bg,s,EAF7FE</strong> is the background color, light
      blue</li>
</ul>
<p>
Here is another example, but this time of an interactive visualization:
</p>
<script type='text/javascript' src='https://www.google.com/jsapi'>
</script>
<script type='text/javascript'>
  google.load('visualization', '1', {'packages': ['geomap']});
  google.setOnLoadCallback(drawMap);

  function drawMap() {
    var data = new google.visualization.DataTable();
    data.addRows(6);
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Coolness');
    data.setValue(0, 0, 'Spain');
    data.setValue(0, 1, 100);
    data.setValue(1, 0, 'Brazil');
    data.setValue(1, 1, 80);
    data.setValue(2, 0, 'United States');
    data.setValue(2, 1, 70);
    data.setValue(3, 0, 'Canada');
    data.setValue(3, 1, 40);
    data.setValue(4, 0, 'Russia');
    data.setValue(4, 1, 20);
    data.setValue(5, 0, 'China');
    data.setValue(5, 1, 10);

    var options = {};
    options['dataMode'] = 'regions';
    options['width'] = 440;
    options['height'] = 220;
    options['colors'] = [0xEAF7FE, 0xA5EF63, 0x50AA00, 0x267114]

    var container = document.getElementById('map_canvas');
    var geomap = new google.visualization.GeoMap(container);
    geomap.draw(data, options);
  };
</script>
<p>
<div id='map_canvas' style="margin-left: 70px;"></div>
</p>
<p>
In this case the map is dynamic. Moving the mouse over the different
countries will display a message, which contains the value used to
select the color of the country. Now the code is a little bit longer,
about 30 lines of Javascript, so I am not going to include it, but
there is a detailed explanation here:
<a href="http://code.google.com/apis/visualization/documentation/">
    Google Chart Tools, Introduction</a>.
</p>
<p>
These tools are probably not as powerful as custom made visualizations,
like the ones that I talked about in a previous post,
<a href="http://www.javiertordable.com/blog/2009/12/03/interesting-visualizations-changes-over-time">
    Interesting Visualizations: Changes Over Time</a>, but they are
definitely easier to create and modify.
</p>
<p>
To finish, I am just going to quote Robert Kosara and his blog on
visualization <a href="http://eagereyes.org/">Eager Eyes</a>,
"JavaScript for visualization is clearly the way to go. It's fast,
versatile, works much better than Flash or Java, and is obviously way
ahead of static images". You can check the complete post
<a href="http://eagereyes.org/blog/2010/javascript-key-to-in-browser-visualization">
    here</a>.
