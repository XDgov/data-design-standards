---
permalink: /visualizations/line-graph
layout: styleguide
title: Line Graph
aka: [Line Chart]
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
lead: A line graph is a chart that displays a series of data points connected by line segments.
tags: [distribution]
guidance-always:
- Always start the y-axis at zero.
- Always label each line.
- Always ensure that each line is legible.

guidance-recommended:
- It is recommended that you forgo a legend if only a single line is present.

guidance-not-recommended:
- It is not recommended that you use horizontal lines unless conveying exact amounts.
guidance-never:
- Never use a legend for a graph with a single line.
---
<p>
  Line graphs can be used to show how data changes over time and are often used to communicate trends, such as how household income changes each year. The x-axis can display continuous or discrete data such as days, years, or categories, and the y-axis is typically a continuous variable but can also be discrete. Line graphs can also be used to compare multiple trend lines, whereas bar charts can only represent one trend line.
</p>

<h2>Examples</h2>
<div class="usa-chart-card">
  <div class="usa-chart-header">
    <h3 class="usa-chart-title">People without health insurance coverage in New York</h3>
  </div>
  <canvas id="chart-line"></canvas>
  <div class="usa-source-container">
    <div>
      Source:
      <a href="https://www.census.gov/programs-surveys/acs/" target="_blank">
        2016 American Community Survey 1-Year Estimates
      </a>
    </div>
    <div>
      Table:
      <a href="https://data.census.gov/cedsci/" target="_blank">DP05</a>
    </div>
  </div>
</div>