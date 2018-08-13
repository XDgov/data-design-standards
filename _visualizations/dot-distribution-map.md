---
permalink: /visualizations/dot-distribution-map
layout: styleguide
title: Dot Distribution Map
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
- Always include a legend that indicates how many units of data are represented with each dot.
- Always use the same size dot and ensure the size of the dots is appropriate for the scale and size of the map.
- Always ensure that colors are distinguishable when viewed at scale if using more than one color.

guidance-recommended:
- It is recommended that dots be placed randomly within a geographic entity. Subject matter expertise can be used to place the dots in a systematic fashion.
- It is recommended that dot distribution maps of the United States use an Albers equal-area projection, including insets of Alaska, Hawaii, and Puerto Rico, if applicable.
---

<p>
  Dot distribution maps are used to convey the intensity of an attribute. Each dot on the map represents one or more phenomena being mapped. The author of the map determines the value represented by each dot, and each dot is often placed randomly on the map based on the aggregate totals of their respective source polygons.
</p>
<p>
  A dot distribution map can be layered over other thematic map types. For example, a
  <a href="{{ site.baseurl }}/visualizations/choropleth-map">choropleth map</a> can be used underneath the dot distribution symbol to show two different variables.
</p>