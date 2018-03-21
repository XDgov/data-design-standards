---
permalink: /components/axes
layout: components
title: Axes
category: Components
lead: Axes provide vital reference information for several chart types.
subnav:
- text: Titles
  href: "#axis-titles"
- text: Tick Marks
  href: "#tick-marks"
---
<p>
  Typically charts contain two axes: an x-axis and a y-axis. In many cases, one
  axis is used to establish the continous interval of a dataset (i.e. time),
  while the other axis is used to map a datapoint against a value (i.e. a
  percentage, dollar amount, or integer).
</p>
<p>
  Axes aren't always necessary in data visualizations, but should be considered
  for use by default. When using
  <a href="{{ site.baseurl }}/components/labels#data-labels">data labels</a>,
  you can omit including the axis being used for interval labels.
</p>

<div id="axis-title">
  <h2>Titles</h2>
  <p>
    Axis titles provide helpful contextual information about the tick marks of
    a given axis, such as the unit of measurement or the data’s subject. Axis
    titles should only be used when a subtitle does not indicate the unit of
    measurement or the title doesn’t sufficiently contextualize the data.
  </p>
</div>
<div id="tick-marks">
  <h2>Tick Marks</h2>
  <p>
    Tick marks are used to indicate a reference value at a given point in a
    chart. Tick marks function similar to the lines on a ruler – not all tick
    marks need to be labeled, but they do need to establish a continous interval
    by ensuring the number of tick marks between each labeled tick mark is
    always the same.
  </p>
  <p>
    When using tick marks, try not to label too many elements or use too many
    marks along an axis. If tick marks appear cluttered, users won’t be
    able to determine the value of various datapoints.
  </p>
</div>