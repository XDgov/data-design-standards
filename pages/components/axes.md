---
permalink: /components/axes
layout: components
title: Axes
category: Components
lead: Axes provide vital reference information for users to associate datapoints with values, especially when datapoints are not labeled directly in a chart.
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
  you can omit the axis being used for interval labels.
</p>

<div id="axis-title">
  <h2>Titles</h2>
  <p>
    Axis titles provide helpful contextual information about the tick marks of
    a given axis, such as the unit of measurement. When axis titles are used in
    conjunction with titles and subtitles, users will be able to more easily
    understand what a visualization is about.
  </p>
  <div class="axis-title-examples clearfix">
    <div class="usa-chart-card axis-tick-example">
      <h4>{% include svg/warning.html %} Bad Example</h4>
      <div class="clearfix">
        <div class="axis-title-example-canvas">
          <canvas id="axis-title-bad-example"></canvas>
        </div>
        <div class="axis-title-example-desc">
          <h5 class="usa-color-heading">Why it’s Bad</h5>
          <p>
            The axis title missed an opportunity to include the unit of
            measurement for the tick marks in the y-axis. As a result, the tick
            marks include a percentage symbol after each labeled tick and the
            title isn’t that useful.
          </p>
        </div>
      </div>
    </div>
    <div class="usa-chart-card axis-tick-example">
      <h4>{% include svg/success.html %} Good Example</h4>
      <div class="clearfix">
        <div class="axis-title-example-canvas">
          <canvas id="axis-title-good-example"></canvas>
        </div>
        <div class="axis-title-example-desc">
          <h5 class="usa-color-heading">Why it’s Better</h5>
          <p>
            Now that the title features the unit of measurement, the tick marks
            no longer need a percentage symbol. The title also makes it easier
            for users to understand what the visualization is about as a result.
          </p>
        </div>
      </div>
    </div>
  </div>
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
  <h3>Examples</h3>
  <div class="clearfix">
    <div class="usa-chart-card axis-tick-example">
      <h4>{% include svg/warning.html %} Bad Example</h4>
      <div>
        <canvas id="tick-marks-cluttered" class="dvs-canvas"></canvas>
      </div>
      <h5 class="usa-color-heading">Why it’s Bad</h5>
      <p>
        Labelling every tick mark isn’t necessary and can often cause
        labels to clutter and overlap, especially in smaller visualizations or
        when viewed on smaller screen sizes.
      </p>
    </div>
    <div class="usa-chart-card axis-tick-example">
      <h4>{% include svg/success.html %} Good Example</h4>
      <div>
        <canvas id="tick-marks-good"></canvas>
      </div>
      <h5 class="usa-color-heading">Why it’s Better</h5>
      <p>
        Using less labels results in more legible tick marks that are less
        cluttered. You can also use varying heights for labeled and unlabeled
        marks for a clearer hierarchy of elements.
      </p>
    </div>
  </div>
</div>