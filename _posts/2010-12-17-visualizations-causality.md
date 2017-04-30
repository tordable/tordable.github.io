---
layout: post
title: Visualizations to Show Causality
---

<p>
Recently I have been reading about the best way to design a graph / visualization / infographic
to express a particular message.
Some cases are easier than others. To show distribution of a total into parts one chart that works well is the Pie Chart. Take a look at this example:
</p>

<script type="text/javascript" src="https://www.google.com/jsapi">
</script>
<script type="text/javascript">
  google.load('visualization', '1', {packages: ['corechart']});
  google.load('visualization', '1', {packages: ['motionchart']});
</script>

<script type="text/javascript">
      function drawVisualization1() {
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Product');
        data.addColumn('number', 'Revenue');
        data.addRows(7);
        data.setValue(0, 0, 'iPhone');
        data.setValue(0, 1, 8822);
        data.setValue(1, 0, 'Laptops');
        data.setValue(1, 1, 3194);
        data.setValue(2, 0, 'Desktops');
        data.setValue(2, 1, 1676);
        data.setValue(3, 0, 'iPad');
        data.setValue(3, 1, 2792);
        data.setValue(4, 0, 'iPod');
        data.setValue(4, 1, 1477);
        data.setValue(5, 0, 'iTunes');
        data.setValue(5, 1, 1243);
        data.setValue(6, 0, 'Other');
        data.setValue(6, 1, 1139);
      
        // Create and draw the visualization.
        new google.visualization.PieChart(document.getElementById('visualization1')).
          draw(data, {title:"Apple. Revenue by product in Q4 2010 (M). Total: 20,343"});
      }
      

      google.setOnLoadCallback(drawVisualization1);

      function drawVisualization2() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Revenue');
        data.addColumn('number', 'Net Income');
        data.addRows(4);
        data.setValue(0, 0, '2007');
        data.setValue(0, 1, 24578);
        data.setValue(0, 2, 3495);
        data.setValue(1, 0, '2008');
        data.setValue(1, 1, 37491);
        data.setValue(1, 2, 6119);
        data.setValue(2, 0, '2009');
        data.setValue(2, 1, 42905);
        data.setValue(2, 2, 8235);
        data.setValue(3, 0, '2010');
        data.setValue(3, 1, 65225);
        data.setValue(3, 2, 14013);
      
        var chart = new google.visualization.LineChart(document.getElementById('visualization2'));
        chart.draw(data, {width: 600, height: 400, title: 'Apple. Financial performance per year (M).'});
      }

      google.setOnLoadCallback(drawVisualization2);

      function drawVisualization3() {
      var data = new google.visualization.DataTable();
              data.addColumn('number', 'Population');
              data.addColumn('number', 'Population / GDP');
              data.addRows(6);
              data.setValue(0, 0, 81);
              data.setValue(0, 1, 2806);
              data.setValue(1, 0, 65);
              data.setValue(1, 1, 2108);
              data.setValue(2, 0, 62);
              data.setValue(2, 1, 2139);
              data.setValue(3, 0, 60);
              data.setValue(3, 1, 1704);
              data.setValue(4, 0, 46);
              data.setValue(4, 1, 1360);
              data.setValue(5, 0, 17);
              data.setValue(5, 1, 658);
      
              var chart = new google.visualization.ScatterChart(document.getElementById('visualization3'));
              chart.draw(data, {width: 500, height: 400,
                                title: 'GDP (PPP) versus population',
                                hAxis: {title: 'Population (Million)', minValue: 0, maxValue: 15},
                                vAxis: {title: 'GDP (PPP Adjusted. USD Billion)', minValue: 0, maxValue: 15},
                                legend: 'none'
                               });
      
      }

      google.setOnLoadCallback(drawVisualization3);

    function drawVisualization4() {
    var data = new google.visualization.DataTable();
      data.addRows(2);
      data.addColumn('string', 'Name');
      data.addColumn('date', 'Date');
      data.addColumn('number', 'Time (Hours)');
      data.addColumn('number', 'Distance (Miles)');
      data.setValue(0, 0, 'Runner');
      data.setValue(0, 1, new Date (0,0,1));
      data.setValue(0, 2, 0);
      data.setValue(0, 3, 0);
      data.setValue(1, 0, 'Runner');
      data.setValue(1, 1, new Date (0,0,2));
      data.setValue(1, 2, 1);
      data.setValue(1, 3, 6);
    
      var motionchart = new google.visualization.MotionChart(
          document.getElementById('visualization4'));
      motionchart.draw(data, {'width': 470,
                              'height': 350,
                              'showChartButtons' : false,
                              'showSidePanel' : false,
                              'showXScalePicker': false,
                              'showYScalePicker': false});
    }
    

    google.setOnLoadCallback(drawVisualization4);
</script>

<p>
  <div id="visualization1" style="position: relative; left: -30px; width: 600px; height: 400px;"></div>
Source:
<a href="http://www.apple.com/pr/library/2010/10/18results.html">
  http://www.apple.com/pr/library/2010/10/18results.html</a>
</p>

<p>
It works well because the pie represents a total, and all the parts add up to the total. The area
of each part is proportional to the fraction of the total that it represents. This graph shows the
distribution of the total revenue among its parts, but it doesnt explain for instance how this
revenue changes over time.
To show changes over time a chart that works well is a line chart. This chart shows the years in increasing order from left to right. In Western cultures
we normally associate time progress with movement from left to right
because it's the same direction in which we read.
</p>

<p>
  <div id="visualization2" style="position: relative; left: -30px; width: 500px; height: 400px;"></div>
Source: 
<a href="http://www.google.com/finance?q=NASDAQ:AAPL&fstype=ii">
  http://www.google.com/finance?q=NASDAQ:AAPL&fstype=ii</a>
</p>

<p>
Notice that in both cases the title indicates what data is shown in the graph and the time period in
which it applies. Also we have units for all the numbers in the chart (Million / M). And in the second
chart the axis are correctly labeled. Finally, the source of the data is indicated for both charts.
</p>

<p>
A more difficult problem is how to show causality. That is, how to show in a a graph that a certain
condition results in a corresponding effect. Or that a change in one variable results in a change in a
different value.
</p>

<p>
Usually causality is expressed with a scatter plot, or a line chart. However in those cases its hard
to distinguish between real causality and mere correlation. If we plot for example the speed of a
runner with the total distance traveled after 1 hour, its obvious that both numbers are completely
determined by each other, and the correlation is 1.
However causality is generally more unidirectional, where correlation is bidirectional. What I mean
by this, is that when we talk about causality we normally express that one condition implies another.
When we talk about correlation that usually means that two measures are tied together, but its not clear
if there is a causal relationship from one to the other, or vice-versa.
</p>

<p>
In a static graph in general its hard to distinguish correlation from causality. The most common
resource is to write the independent variable (the source in the causal relationship) in the lower axis,
while leaving the dependent variable in the vertical axis. However this may not be as effective as
intended.
</p>

<p>
For example, this chart shows the population and GDP of 6 European countries: Germany, France,
UK, Italy, Spain and Netherlands. From the chart its not clear weather a higher population implies a
higher GDP, or the other way around. Most likely there is no causal relationship altogether.
India for example has a higher population than all of them combined, but its GDP (PPP) is comparable
to Spain. The other implication is not true either, Australia has a higher GDP (PPP) then Mexico,
but less than 20% of the population.
</p>

<p>
  <div id="visualization3" style="position: relative; left: -30px; width: 500px; height: 400px; 
      margin-left: auto; margin-right: auto;"></div>
  Source:
<a href="http://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)"> 
  http://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)</a>
</p>

<p>
I think one tool that is very useful to distinguish causality from correlation is a dynamic chart. In this chart not
only we can put the causal variable in the lower axis, but we can also give the reader the freedom
to alter that variable manually. This will trigger the change in the dependent variable.
And because of the technical implementation of the chart its impossible to modify it the other
way around. There is no way to modify the dependent variable and see the value of the
independent variable. This asymmetry in the visualization is what enhances the message of causality,
as opposed to mere correlation. Try it out in the example below!
</p>

<p>
  <div id="visualization4" style="width: 470px; height: 350px;
      padding-left: 70px;"></div>
</p>
<p>
  Source: v = ds/dt
<a href="http://en.wikipedia.org/wiki/Speed">
   http://en.wikipedia.org/wiki/Speed</a>
</p>
