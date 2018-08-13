---
permalink: /visualizations/bubble-chart
layout: styleguide
title: Bubble Chart
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
lead: A bubble chart is a variation of a scatter plot that displays data points as bubbles.
tags: [correlation, distribution]
guidance-always:
- Always include a legend if more than one category of data is being visualized.
- Always ensure that smaller dots are visible when overlapping with larger dots.:
  - Either by placing smaller dots above larger dots or by making the larger dots transparent.

guidance-recommended:
- It is recommended that the title explain the unit of analysis.
- It is recommended that you include point labels or markers for specific observations.

guidance-not-recommended:
- It is not recommended to use a bubble chart if there are an excessive number of values that result in the dots appearing illegible.

guidance-never:
- Never let larger values obscure smaller values.
- Never use symbols for point markers that do not have a proportionate width and height.:
  - A symbol that has an equal width and height is a more accurate way to present a given data value.
- Never include more than 3 sets of values in a static bubble chart.
---

<p>
  A bubble chart consists of a series of values that are plotted on an x-axis and y-axis, with each axis representing a variable and each value represented as a dot. The third variable value is then used to proportionally scale each bubble or dot. Bubble charts often include an independent variable, such as years of education, a dependent variable, such as annual income, and a proportional variable, such as population. When the dots are plotted against these two axes, bubble charts communicate the strength, type, and proportion of the relationship that exists between these variables.
</p>