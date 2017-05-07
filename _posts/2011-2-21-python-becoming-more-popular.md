---
layout: post
title: Python Becoming More Popular
---

<p>
The <a href="http://www.tiobe.com/index.php/content/paperinfo/tpci/tpci_definition.htm">
  TIOBE Programming Community index</a> is an indicator of the popularity
of programming languages. In their
<a href="http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html">
  data for February</a>
we can see that Python is steadily rising in popularity.
</p>

<p>
I believe there are two main reasons for this. First, the increasing availability of powerful libraries and frameworks like 
<a href="http://www.djangoproject.com/">Django</a>. And second,
it's faster to program in Python because it's less verbose than other
languages.
</p>

<a href="http://python.org/">
  <img src="/images/python-logo.png"
    alt="Python logo" />
</a>

<p>
For example, here is a simple program in Java, to read a CSV file, add
the numbers in the last column and output the result. It's not
optimized for performance or length. But it should resemble production
code out there.
</p>

``` python
/**
 * This small program reads a CSV file and attempts to sum all the terms
 * in the last column.
 *
 * It assumes that the format of the file is:
 *   one line,234
 *   another line,125
 *   ... etc.
 * consisting of several lines. Each line contains values separated
 * by ',', and the last value is an integer.
 */
public class JavaReader {

  private static final Logger LOGGER = Logger.getLogger(
      JavaReader.class.getName());

  private static final char SEPARATOR = ',';

  public static void main(String args[]) {
    // Check the input arguments.
    if (args.length < 1) {
      LOGGER.severe("Please indicate the file to read");
      return;
    }

    // Open the file.
    FileInputStream stream;
    try {
      stream = new FileInputStream(args[0]);
    } catch (FileNotFoundException e) {
      LOGGER.severe("Please indicate a valid file");
      return;
    }

    // Read line by line.
    BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
    int accumulatedValue = 0;
    try {
      String line = reader.readLine();
      while (line != null) {
        // Find the last ',' and extract the integer.
        int lastSeparatorIndex = line.lastIndexOf(SEPARATOR);
        int value = 0;
        try {
          // Skip the separator, the rest should be the value.
          String valueInput = line.substring(lastSeparatorIndex + 1);
          value = Integer.valueOf(valueInput).intValue();
        } catch (NumberFormatException f) {
          LOGGER.warning("Unable to parse the number");
        }
        accumulatedValue += value;

        line = reader.readLine();
      }
    } catch (IOException e) {
      LOGGER.warning("Unable to read line");
    }

    System.out.println("Accumulated: " + String.valueOf(accumulatedValue));
  }
}
```

<p>
It consists of 61 lines and 1795 characters. By comparison this more
or less equivalent Python program consists of 40 lines and 1051
characters. Again, it wasn't optimized for performance or length,
and it should be similar to real production code.
</p>

``` python
class PythonReader(object):
  """This class reads a CSV file and attempts to sum all the terms in the last
  column.

  It assumes that the format of the file is:
    one line,234
    another line,125
    ... etc.
  consisting of several lines. Each line contains values separated by ',',
  and the last value is an integer.
  """

  SEPARATOR = ','

  def process_file(self, file_name):
    try:
      input_file = open(file_name)
    except IOError:
      logging.error('Unable to open the input file')
      sys.exit()

    accumulated_value = 0
    for line in input_file.readlines():
      last_token = line.split(PythonReader.SEPARATOR)[-1]
      value = 0
      try:
        value = int(last_token)
      except ValueError:
        logging.error('Unable to parse the number')
      accumulated_value += value

    print 'Accumulated: ' + str(accumulated_value)

if __name__ == '__main__':
  if len(sys.argv) < 2:
    logging.error('Please indicate the file to read')
    sys.exit();

  reader = PythonReader()
  reader.process_file(sys.argv[1])
```

<p>
The Java program is significantly longer, even though both do more or
less the same. I believe the difference is because Python natively
lends itself to writing shorter programs. And of course less time
spent coding means more time thinking about how to solve problems and
satisfying customers. Thoughts?
</p>
