---
permalink: /visualizations/dot-distribution-map
layout: styleguide
title: Dot Distribution Map
aka: [Dot Density Map]
category: Visualization types
components:
  - Agency Logo
  - Colors
  - Grids
  - Labels
  - Legends
  - Source
  - Titles
  - Typography
lead: A dot distribution map is a type of map that uses the density of dot symbols that are the same size to show the presence of a feature or phenomenon.
tags: [distribution]
guidance-always:
- Include a legend that shows how many units of data are represented with each dot.
- Use the same size dots and ensure the size of each dot is appropriate for the scale and size of the map.
- Ensure that colors are distinguishable.

guidance-recommended:
- Place dots randomly within a geographic entity. Alternatively, dots can be placed in a systematic fashion using subject-matter expertise.
- Use an Albers equal-area projection when creating a map of the United States, including insets of Alaska, Hawaii, and Puerto Rico, if applicable.
---

<p>
  Dot distribution maps are used to convey the intensity of an attribute. Each dot on the map represents one or more phenomena being mapped. The author of the map determines the value represented by each dot, and each dot is often placed randomly on the map based on the aggregate totals of their respective source polygons.
</p>
<p>
  A dot distribution map can be layered over other thematic map types. For example, a
  <a href="{{ site.baseurl }}/visualizations/choropleth-map">choropleth map</a> can be used underneath the dot distribution symbol to show two different variables.
</p>

<h2>Examples</h2>
<div class="usa-chart-card">
  <div class="usa-chart-header">
    <h3 class="usa-chart-title">Static Dot Distribution Map of New York City</h3>
  </div>
  <div class="usa-chart-static">
    <img src="../assets/img/examples/dot-density-map/Dot_Density_NY_hispanic_dotdistribution.jpg" alt="Residential Distribution of Four Hispanic Subgroups, New York City: 2010">
  </div>
</div>