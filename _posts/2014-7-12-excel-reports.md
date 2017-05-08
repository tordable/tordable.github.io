---
layout: post
title: Excel Reports
---

<p>
Everybody who has spent some time working in a business of any size knows that
Excel is ubiquitous. It's surprising that there are so few companies out there
working in the spreadsheet world.
<p>

<p>
Recently I had to create a bunch of Excel reports, and I took some time to
explore ideas on how to structure a library for easy report creation.
I took the excellent
    <a href="https://xlsxwriter.readthedocs.org/">XlsxWriter</a>
library and built a few conveniences on top of it. Check out the first
iteration of <a href="https://github.com/tordable/XlsxReports">XlsxReports</a>
in my Github page.
</p>

<p>
The code to create a report looks like this:
</p>

``` python
#!/usr/bin/python2

"""Example XLS report."""

__author__ = 'jt@javiertordable.com'

from XlsxReports.layout import (
  HideOutsideLayout,
  PaddingLayout,
  TableLayout)
from XlsxReports.style import (
  EmptyStyle,
  FixedStyle,
  TableStyle)
from XlsxReports.table import Table
from XlsxReports.xls import new_workbook


LIGHT_GREY = '#BBBBBB'


def main():
  workbook = new_workbook('my_file.xlsx')
  sheet = workbook.add_worksheet('TableData')

  table = Table('Data', ['Name', 'Id', 'Data'])
  table.add_row(['John', '1', 'First'])
  table.add_row(['Jane', '2', 'Second'])

  table_style = TableStyle(workbook, table)
  table_layout = TableLayout(table_style, table)

  padding_style = FixedStyle(workbook, '', LIGHT_GREY)
  padding_layout = PaddingLayout(padding_style, table_layout,
                                 1, 1, 1, 1)

  overall_style = EmptyStyle(workbook)
  overall_layout = HideOutsideLayout(overall_style,
                                     padding_layout)

  start_position = (0, 0)
  overall_layout.draw(sheet, start_position)
  workbook.close()


if __name__ == '__main__':
  main()
```

<p>
and generates an Excel spreadsheet like the following:
</p>

<a href="https://github.com/tordable/XlsxReports">
<img src="/images/spreadsheet.png"
  alt="A spreadsheet generated with Python"/>
</a>

<p>
Please, let me know if you find it useful!
</p>
