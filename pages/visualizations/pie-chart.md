---
permalink: /visualizations/pie-chart
layout: styleguide
title: Pie Chart
category: Visualization types
lead: A pie chart is a ciruclar graph that presents values as proportionate slices.
tags:
- Comparative
guidance-always:
- Always consider using a bar chart or displaying values directly before using a pie chart.
- Always include a legend or label slices directly.
guidance-not-recommended:
- It is not recommended to include spaces between each slice, such as in an exploded pie chart.
- It is not recommended to use multi-level pie charts as they are difficult to decipher.
guidance-never:
- Never use a 3D pie chart.
---
<div class="usa-viz-warning">
  Before considering a pie chart, we recommend considering using 
  <a href="{{ site.baseurl }}/visualizations/bar-chart">bar charts</a>
  or displaying numeric values directly.
</div>

<p>
  Pie charts are one of the most commonly used data visualizations but are often
  not the most effective way to compare data values. This is mainly due to the 
  size of each slice and the number of data categories being represented. Pie
  charts can also be represented as a doughnut chart, which is generally better
  for users to compare the size of each slice or arc.
</p>
