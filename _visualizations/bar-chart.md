---
permalink: /visualizations/bar-chart
layout: styleguide
title: Bar Chart
aka: [Bar Graph]
category: Visualization types
lead: A bar chart displays categorical data with rectangular bars whose length or height corresponds to the value of each data point.
components:
  - Agency Logo
  - Axes
  - Colors
  - Grids
  - Labels
  - Legends
  - Source
  - Titles
  - Typography
tags: [comparative]
guidance-always:
- Use independent categories of data.
- Label each category of data.
- When visualizing data between 0% and 100%, start tick marks at 0%.

guidance-recommended:
- Use bar charts when comparing large changes in data values.
- Limit the number of bars or else a bar chart becomes difficult to understand.

guidance-never:
- Never omit the space between bars – otherwise the bar chart will appear to be a histogram.
- Never use three dimensional (3D) graphics as they distort the visual calculation of volume.
---

<p>
  Bar charts can be visualized using vertical or horizontal bars. Bar charts are best used to compare a single category of data or several. When comparing more than one category of data, the bars can be grouped together to created a grouped bar chart.
</p>
<p>
  Bar charts use volume to demonstrate differences between each bar. Because of this, bar charts should always start at zero. When bar charts do not start at zero, it risks users misjudging the difference between data values.
</p>

<h2>Examples</h2>

<div class="usa-chart-card">
  <div class="usa-chart-header">
    <h3 class="usa-chart-title">Types of Languages Spoken at Home in New York</h3>
  </div>
  <canvas id="barChart"></canvas>
  <div class="usa-source-container">
    Source: <a href="https://www.census.gov/programs-surveys/acs/" target="_blank">2016 American Community Survey 1-Year Estimates</a>
  </div>
</div>