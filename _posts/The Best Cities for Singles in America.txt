---
layout: post
title: The Best Cities for Singles in America
---

<script type='text/javascript' src='https://www.google.com/jsapi'>
</script>

<p>
A few weeks back I had a conversation with a friend about different
places in the US where she was considering moving. And one of the
factors was the dating scene in each one of those places. This brought
to my memory a graph that probably many of you have already seen:
</p>


<img src="/images/national-geographic-chart.jpg"
    alt="National Geographic Chart">


<p>
This map basically says the following:
</p>
<ul>
  <li>If the dot is blue, there are more men than women</li>
  <li>If the dot is orange, there are more women than men</li>
  <li>The bigger the dot, the greater the difference</li>
</ul>

<p>
However it has a series of problems. First of all, it's too dense.
Second, it is not clear that the number of single men minus
the number of single women (or the opposite) is what really matters,
because obviously the bigger the city the less important the difference
is. For example, in a city of 1 million we could have
100K singles and 20K more single men than woman. This means there are
3 single men for every two single woman.
However in a city of 10 million, with 1 million singles, the fact that
there are 20K more single men, only means there are
approximately 1.02 single men for every single woman. It seems that
the proportion of single men to single woman is more indicative than
the difference.
And third and most important, I didn't know for sure if the data in
the graph is reliable, as there are no sources cited. So, as you can
imagine I decided to check if there is actually any truth in this
chart.
</p>

<p>
Here is the list of steps necessary to get the interesting data from
the Census:
</p>
<ol>
  <li>Start in the <a href="http://factfinder.census.gov">
    Census fact finder homepage</a></li>
  <li>Click on Data Sets on the left navigation bar</li>
  <li>Select SF3 and click on Detailed Table</li>
  <li>In the Geography Type section choose Metropolitan
    Statistical Area</li>
  <li>Make sure all statistical areas are selected and click Next</li>
  <li>Now choose the table P18. Sex by marital status for
    the population 15+ years</li>
  <li>Click on Add and then Show result</li>
</ol>

<p>
From this table we want the "Never married" rows. Because the table
is too big to analyze directly (280 columns) Let's download it and
map the results using the Google Charts API.
</p>

<p>
You may need to clean up the downloaded file, because there
are copyright notices and extra end of line characters. Also you may
keep only the interesting lines, which are 3:
</p>
<ul>
  <li>The header of the table, which contains the name of the
    metropolitan areas</li>
  <li>The row for Male / Never Married individuals</li>
  <li>The row for Female / Never Married individuals</li>
</ul>

<p>
After removing all other rows, it's possible to parse the file and
extract the interesting data with a small python script like this:
</p>

<pre>
    input_file = open('DTDownload.csv')

    # First process the header line.
    header = input_file.readline()
    header = header[5:-2]  # Remove " ", at beginning and "\n at the end.
    tokens = header.split('","')
    cities = []
    for token in tokens:
        token = token.replace('MSA', '')  # Eliminate the MSA suffix.
        token = token.replace('CMSA', '')
        if token.find('--'):  # Remove everything after --
            token = token[:token.find('--')]
        cities.append(token)

    # Now process "Never married" men.
    line = input_file.readline()
    line = line[17:-2]  # Remove "Never married" at beginning and " at end.
    tokens = line.split('","')
    single_men = []
    for token in tokens:
        token = token.replace(',', '')  # Eliminate the , for thousands.
        single_men.append(int(token))

    # Now process "Never married" women.
    line = input_file.readline()
    line = line[17:-2]  # Remove "Never married" at beginning and " at end.
    tokens = line.split('","')
    single_women = []
    for token in tokens:
        token = token.replace(',', '')  # Eliminate the , for thousands.
        single_women.append(int(token))

    # And from those two quantities compute the ratio of single men
    # to single women. The higher, the better for women. Reverse the
    # quotient to get the other side.
    ratios = []
    for i in xrange(len(single_men)):
        ratio = float(single_men[i]) / float(single_women[i])
        ratios.append(ratio)

    # Now print the name of the city and ratio in the format accepted
    # by the Google Charts API, which is:
    #   data.setValue(0, 0, 'New York');
    #   data.setValue(0, 1, 1.064382);
    for i in xrange(len(cities)):
        print 'data.setValue(%(row)d, 0, \'%(city)s\');' % \
            {'row': i, 'city': cities[i]}
        print 'data.setValue(%(row)d, 1, %(ratio)f);' % \
            {'row': i, 'ratio': ratios[i]}
</pre>

<p>
And to display the data, just include it into a
<a href="http://code.google.com/apis/ajax/playground/?type=visualization#geo_map">
  Google Charts visualization</a>.
Unfortunately I couldn't figure out how to make the circles bigger or
smaller based on one parameter and to set the color based on another
parameter. Please tell me if you know how to do it. Anyway,
until I find some time to learn
<a href="http://vis.stanford.edu/protovis/">Protovis</a>,
bear with me. What I did is
split the chart into two, one for guys and one for girls. And to have
it load faster, and avoid overloading with too much detail,
I just took a small number of cities (This was actually Noha's idea
so the credit should go to her). Here is how the chart looks like for
girls, the bigger and bluer the better. It means there are more single
guys for each single girl:
</p>

<script type="text/javascript">
  google.load('visualization', '1', {'packages': ['geomap']});
  google.setOnLoadCallback(drawMap1);

  function drawMap1() {
    var data = new google.visualization.DataTable();
    data.addRows(28);
    data.addColumn('string', 'City');
    data.addColumn('number', 'Ratio');
    data.setValue(0, 0, 'Atlanta');
    data.setValue(0, 1, 1.167621);
    data.setValue(1, 0, 'Boston');
    data.setValue(1, 1, 1.082052);
    data.setValue(2, 0, 'Chicago');
    data.setValue(2, 1, 1.128832);
    data.setValue(3, 0, 'Cleveland');
    data.setValue(3, 1, 1.080480);
    data.setValue(4, 0, 'Dallas');
    data.setValue(4, 1, 1.250400);
    data.setValue(5, 0, 'Denver');
    data.setValue(5, 1, 1.271842);
    data.setValue(6, 0, 'Detroit');
    data.setValue(6, 1, 1.121086);
    data.setValue(7, 0, 'Houston');
    data.setValue(7, 1, 1.225656);
    data.setValue(8, 0, 'Indianapolis');
    data.setValue(8, 1, 1.116891);
    data.setValue(9, 0, 'Jacksonville');
    data.setValue(9, 1, 1.184223);
    data.setValue(10, 0, 'Kansas City');
    data.setValue(10, 1, 1.137844);
    data.setValue(11, 0, 'Las Vegas');
    data.setValue(11, 1, 1.417289);
    data.setValue(12, 0, 'Los Angeles');
    data.setValue(12, 1, 1.214651);
    data.setValue(13, 0, 'Memphis');
    data.setValue(13, 1, 1.049954);
    data.setValue(14, 0, 'Miami');
    data.setValue(14, 1, 1.178491);
    data.setValue(15, 0, 'Milwaukee');
    data.setValue(15, 1, 1.089912);
    data.setValue(16, 0, 'Minneapolis');
    data.setValue(16, 1, 1.146799);
    data.setValue(17, 0, 'New Orleans');
    data.setValue(17, 1, 1.028731);
    data.setValue(18, 0, 'New York');
    data.setValue(18, 1, 1.064382);
    data.setValue(19, 0, 'Orlando');
    data.setValue(19, 1, 1.224336);
    data.setValue(20, 0, 'Philadelphia');
    data.setValue(20, 1, 1.055936);
    data.setValue(21, 0, 'Phoenix');
    data.setValue(21, 1, 1.325386);
    data.setValue(22, 0, 'Portland');
    data.setValue(22, 1, 1.253985);
    data.setValue(23, 0, 'Salt Lake City');
    data.setValue(23, 1, 1.270336);
    data.setValue(24, 0, 'San Diego');
    data.setValue(24, 1, 1.378117);
    data.setValue(25, 0, 'San Francisco');
    data.setValue(25, 1, 1.261324);
    data.setValue(26, 0, 'Seattle');
    data.setValue(26, 1, 1.270545);
    data.setValue(27, 0, 'Washington');
    data.setValue(27, 1, 1.061015);

    var options = {};
    options['region'] = 'US';
    options['width'] = 500;
    options['height'] = 300;
    options['colors'] = [0xFFFFFF, 0x0000FF, 0x000055];
    options['dataMode'] = 'markers';

    var container = document.getElementById('map_canvas1');
    var geomap = new google.visualization.GeoMap(container);
    geomap.draw(data, options);
  };
</script>

<p>
<div id='map_canvas1' style="margin-left: 40px;"></div>
</p>

<p>
It seems that the West Coast, Texas and Florida are the best places for
girls.
Here is how it looks like when taking all 280 cities. I did
not include the visualization, but a simple image because it
takes quite a while to load.
</p>

<img src="/images/best-cities-for-singles-chart-guys.jpg"
    alt="Chart of the best cities for single guys">

<p>
The one for guys is the opposite, the bigger and more pink, the better.
It means there are more single girls for each single guy:
</p>

<script type="text/javascript">
  google.load('visualization', '1', {'packages': ['geomap']});
  google.setOnLoadCallback(drawMap2);

  function drawMap2() {
    var data = new google.visualization.DataTable();
    data.addRows(28);
    data.addColumn('string', 'City');
    data.addColumn('number', 'Ratio');
    data.setValue(0, 0, 'Atlanta');
    data.setValue(0, 1, 0.856442287);
    data.setValue(1, 0, 'Boston');
    data.setValue(1, 1, 0.924170003);
    data.setValue(2, 0, 'Chicago');
    data.setValue(2, 1, 0.885871414);
    data.setValue(3, 0, 'Cleveland');
    data.setValue(3, 1, 0.925514586);
    data.setValue(4, 0, 'Dallas');
    data.setValue(4, 1, 0.799744082);
    data.setValue(5, 0, 'Denver');
    data.setValue(5, 1, 0.786261187);
    data.setValue(6, 0, 'Detroit');
    data.setValue(6, 1, 0.891992229);
    data.setValue(7, 0, 'Houston');
    data.setValue(7, 1, 0.815889613);
    data.setValue(8, 0, 'Indianapolis');
    data.setValue(8, 1, 0.895342518);
    data.setValue(9, 0, 'Jacksonville');
    data.setValue(9, 1, 0.84443555);
    data.setValue(10, 0, 'Kansas City');
    data.setValue(10, 1, 0.878855098);
    data.setValue(11, 0, 'Las Vegas');
    data.setValue(11, 1, 0.705572399);
    data.setValue(12, 0, 'Los Angeles');
    data.setValue(12, 1, 0.823281749);
    data.setValue(13, 0, 'Memphis');
    data.setValue(13, 1, 0.952422678);
    data.setValue(14, 0, 'Miami');
    data.setValue(14, 1, 0.848542755);
    data.setValue(15, 0, 'Milwaukee');
    data.setValue(15, 1, 0.917505266);
    data.setValue(16, 0, 'Minneapolis');
    data.setValue(16, 1, 0.871992389);
    data.setValue(17, 0, 'New Orleans');
    data.setValue(17, 1, 0.972071416);
    data.setValue(18, 0, 'New York');
    data.setValue(18, 1, 0.939512318);
    data.setValue(19, 0, 'Orlando');
    data.setValue(19, 1, 0.816769253);
    data.setValue(20, 0, 'Philadelphia');
    data.setValue(20, 1, 0.947027093);
    data.setValue(21, 0, 'Phoenix');
    data.setValue(21, 1, 0.75449718);
    data.setValue(22, 0, 'Portland');
    data.setValue(22, 1, 0.797457705);
    data.setValue(23, 0, 'Salt Lake City');
    data.setValue(23, 1, 0.787193309);
    data.setValue(24, 0, 'San Diego');
    data.setValue(24, 1, 0.725627795);
    data.setValue(25, 0, 'San Francisco');
    data.setValue(25, 1, 0.792817706);
    data.setValue(26, 0, 'Seattle');
    data.setValue(26, 1, 0.787063819);
    data.setValue(27, 0, 'Washington');
    data.setValue(27, 1, 0.942493744);

    var options = {};
    options['region'] = 'US';
    options['width'] = 500;
    options['height'] = 300;
    options['colors'] = [0xFFFFFF, 0xFF0088, 0xFF0022];
    options['dataMode'] = 'markers';

    var container = document.getElementById('map_canvas2');
    var geomap = new google.visualization.GeoMap(container);
    geomap.draw(data, options);
  };
</script>

<p>
<div id='map_canvas2' style="margin-left: 40px;"></div>
</p>

<p>
So the best places for guys seem to be the East Coast and the Great
Lakes area. In particular the Bos-Wash corridor seems to be quite good.
And here is how it looks like when taking all metropolitan areas:
</p>

<img src="/images/best-cities-for-singles-chart-girls.jpg"
    alt="Chart of the best cities for single girls">

<p>
Does anyone know of similar charts for other countries? I have never
seen one myself. But after what we said before, if you can find
census-like data now you can make one yourself!
</p>
