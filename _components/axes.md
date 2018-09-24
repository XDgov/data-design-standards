---
permalink: /components/axes
layout: components
title: Axes
category: Components
lead: Axes provide vital reference information for users to associate data points with values, especially when data points are not labeled directly in a chart.
subnav:
- text: Titles
  href: "#axis-titles"
- text: Tick Marks
  href: "#tick-marks"
- text: Comparing Visualizations
  href: "#comparing-visualizations"
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

<div id="axis-titles">
  <h2>Titles</h2>
  <p>
    Axis titles provide helpful contextual information about the tick marks of
    a given axis, such as the unit of measurement. When axis titles are used in
    conjunction with titles and subtitles, users will be able to more easily
    understand what a visualization is about.
  </p>
  <h3>Examples</h3>
  <div class="component-examples clearfix">
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/warning.html %} Acceptable Example</h4>
      <div class="clearfix">
        <div class="axis-title-example-canvas">
          <canvas id="axis-title-bad-example" role="img" aria-label="Voters. 40%, 45%, 50%, 55%, 60%"></canvas>
        </div>
        <div class="axis-title-example-desc">
          <h5 class="usa-color-heading">Why it’s Only Acceptable</h5>
          <p>
            The axis title missed an opportunity to include the unit of
            measurement for the tick marks in the y-axis. As a result, the tick
            marks include a percentage symbol after each labeled tick and the
            title isn’t that useful.
          </p>
        </div>
      </div>
    </div>
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/success.html %} Preferred Example</h4>
      <div class="clearfix">
        <div class="axis-title-example-canvas">
          <canvas id="axis-title-good-example" role="img" aria-label="Percentage of Voters. 40, 45, 50, 55, 60"></canvas>
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
    able to determine the value of various data points.
  </p>
  <h3>Examples</h3>
  <div class="clearfix component-examples">
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/warning.html %} Acceptable Example</h4>
      <div>
        <canvas id="tick-marks-cluttered" class="dvs-canvas" role="img" aria-label="0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25"></canvas>
      </div>
      <h5 class="usa-color-heading">Why it’s Only Acceptable</h5>
      <p>
        Labeling every tick mark isn’t necessary and can often cause
        labels to clutter and overlap, especially in smaller visualizations or
        when viewed on smaller screen sizes.
      </p>
    </div>
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/success.html %} Preferred Example</h4>
      <div>
        <canvas id="tick-marks-good" role="img" aria-label="0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25"></canvas>
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
<div id="comparing-visualizations">
  <h2>Comparing Visualizations</h2>
  <p>
    When creating data visualizations that are designed to be compared, always
    use consistent axes. This allows users to accurately compare the data across
    each without having to consider the variances resulting from axes with
    different start and end values.
  </p>
  <h3>Examples</h3>
  <div class="clearfix component-examples">
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/warning.html %} Failed Example</h4>
      <div>
        <h5>Bar Example</h5>
        <canvas id="axes-comparison-bad-first" class="dvs-canvas" role="img"></canvas>
        <h5>Bar Example 2</h5>
        <canvas id="axes-comparison-bad-second" class="dvs-canvas" role="img"></canvas>
      </div>
      <h5 class="usa-color-heading">Why it Fails</h5>
      <p>
        In both examples, it appears that the "Col 1" values (left-most bars)
        are nearly identical. However, if you look closely at the tick
        marks on each y-axis, you'll see that the "Col 1" value in the
        second example is thirty percentage points less than it is in the first example.
      </p>
      <p>
        A data visualization is designed to add visual dimension to data, but
        if the visualized elements give users false impressions of the data,
        than the data visualization isn’t useful. For these reasons, it is
        important that the y-axis be consistent across all data visualizations
        that are designed for comparison.
      </p>
    </div>
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/success.html %} Preferred Example</h4>
      <div>
        <h5>Bar Example 3</h5>
        <canvas id="axes-comparison-good-first" class="dvs-canvas" role="img"></canvas>
        <h5>Bar Example 4</h5>
        <canvas id="axes-comparison-good-second" class="dvs-canvas" role="img"></canvas>
      </div>
      <h5 class="usa-color-heading">Why it Meets the Requirements</h5>
      <p>
        Using the same data as the first set of examples, these preferred
        examples feature a consistent y-axis that make it easier to
        distinguish differences between each chart. The result produces a pair
        of data visualizations where the changes in values correspond to the
        changes in each visualization.
      </p>
    </div>
  </div>
</div>