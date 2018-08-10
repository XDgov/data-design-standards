---
permalink: /visualizations/choropleth-map
layout: styleguide
title: Choropleth Map
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
lead: A choropleth map is a type of map in which geographic areas are assigned a color in relation to a data variable.
tags:
- Comparative
- Distribution
- Geospatial
guidance-always:
- Always include a legend.
- Always choose an appropriate method of grouping your data if it is numeric.:
  - The Natural Breaks classification method groups data based on gaps in the data.
  - The Equal Interval method divides the data range into equal intervals. This method works best when data are evently distributed. If the distribution is uneven, the predominant values will dominate the map.
  - The Quantile method partitions the data so that every group has an equal number or nearly equal number of values. This can give a choropleth map an even, aesthetically pleasing color distribution.
  - Subject matter expertise can be used to place data into groups.

guidance-recommended:
- It is recommended to limit the number of categories to five or fewer.:
  - Fewer categories on a map helps users to better understand what is being visualized and allows for trends in the data to be more easily identified.
- It is recommended to round numbers in a legend for improved legibility.
- It is recommended that, if used, a national average or median for comparison be placed close to the map’s legend.
- It is recommended that choropleth maps of the United States use an Albers equal-area projection, including insets of Alaska, Hawaii, and Puerto Rico, if applicable.
- It is recommended to avoid or limit the use of dots, lines, or hatching patterns on a choropleth map. 

guidance-never:
- Never enlarge or highlight D.C. when it is treated as a county equivalent, unless the map’s focus is specifically related to D.C.
- Never use a qualitative or categorical color scheme to map numeric data.

---

<p>
  Choropleth maps are best used to display the geographic distribution of data. You can also use a choropleth map to make comparisons between geographic areas, but be aware that any geographic patterns will depend on the method used to group your data. The data in a choropleth map can be categorical or numeric.
</p>