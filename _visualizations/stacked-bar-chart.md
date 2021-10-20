---
permalink: /visualizations/stacked-bar-chart
layout: styleguide
title: Stacked Bar Chart
aka: [Stacked Bar Graph]
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
lead: A stacked bar chart is a bar chart that includes subgroups of data in each bar.
tags: [comparative]
guidance-always:
- Begin the bar lengths at zero.
- Include a legend along with labels.
- Maintain an even amount of space between bars.

guidance-recommended:
- Order groups by their total value or the values of a selected subgroup.
- Include no more than five subgroups.
- Use a sequential or diverging color scheme if the subgroups have an order.
- Use a qualitative color scheme if the subgroups do not have an order.

guidance-not-recommended:
- Don’t order groups by their alphabetical label.
guidance-never:
- Never depict more than five subgroups.
---

<p>
  The length of each bar communicates the total value of a group which is a sum of it’s subgroup values, and the length of each subgroup represents their individual values. Stacked bar charts are best used to compare data between groups and between subgroups.
</p>
<p>
  Stacked bar charts are best for depicting large changes of a subgroup or for gathering a quick, high level view of the content. Stacked bar charts are not optimal for conveying detailed or subtle changes in the subgroup values. As the subgroups get further from the axis, the values become harder to determine.
</p>

<h2>Examples</h2>
<div class="usa-chart-card">
  <div class="usa-chart-header">
    <h3 class="usa-chart-title">Population by Region</h3>
  </div>
  <canvas id="chart-bar-stacked"></canvas>
  <div class="usa-source-container">
    <div>
      Source: None (fictional data)
    </div>
  </div>
</div>