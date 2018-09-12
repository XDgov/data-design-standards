---
permalink: /visualizations/pie-chart
layout: styleguide
title: Pie Chart
aka: [Circle Chart]
category: Visualization types
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
lead: A pie chart is a circular graph that presents values as proportionate slices.
tags: [comparative]
guidance-always:
- Always consider using a [bar chart](!BASEURL!/visualizations/bar-chart) or displaying values directly before using a pie chart.
- Always include a legend or label slices directly.
- Always ensure that the values of the slices total to 100%.
guidance-recommended:
- If you are not presenting the proportion of a total, it is recommended to use a bar chart.
- If differences between the sizes of slices are subtle, it is recommended to use a bar chart.
guidance-not-recommended:
- It is not recommended to include large gaps between each slice, such as in an exploded pie chart.
- It is not recommended to use multi-level pie charts as they are difficult to decipher.
guidance-never:
- Never use three dimensional (3D) graphics as they distort the visual calculation of volume.
---
<div class="usa-viz-warning">
  Before using a pie chart, consider using a
  <a href="{{ site.baseurl }}/visualizations/bar-chart">bar chart</a>
  or displaying numeric values directly for improved usability.
</div>

<p>
  Pie charts are one of the most commonly used data visualizations but are often
  not the most effective way to compare data values. This is mainly due to the
  size of each slice and the number of data categories being represented. Pie
  charts can also be represented as a doughnut chart, which is generally better
  for users to compare the size of each slice or arc.
</p>

<h2>Examples</h2>
<div class="usa-chart-card">
  <div class="usa-chart-header">
    <h3 class="usa-chart-title">2018 Annual Sales</h3>
    <h4 class="usa-chart-subtitle">By Quarter</h4>
  </div>
  <canvas id="chart-pie"></canvas>
  <div class="usa-source-container">
    <div>
      Source: None (fictional data)
  </div>
</div>
