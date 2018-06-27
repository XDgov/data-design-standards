---
permalink: /components/grids
layout: components
title: Grids
category: Components
lead: Grids provide helpful reference lines inside a wide range of data visualizations that help users better understand the data inside a visualization.
subnav:
- text: Grid Lines
  href: "#grid-lines"
- text: Grids in Maps
  href: "#graticules"
---
<p>
  When used in traditional data visualizations, such as line graphs or bar charts, grids help users trace data points to their corresponding value in the x or y-axis. Alternatively, when grids are used in maps, grids provide useful location data outside of the depicted geographic boundaries, such as county or state lines.
</p>
<p>
  While grids are not required in charts or graphs, consider using them when data points are not directly labeled. For mapping guidance, see the <a href="#graticules">“Grids in Maps”</a> section below.
</p>
<div id="grid-lines">
  <h2>Grid Lines</h2>
  <p>
    Grid lines are the individual lines that a grid is composed of. Grid lines should be rendered in a color, such as gray, that doesn’t clutter the data visualization and should have just enough contrast to be visible. Grid lines should never overlap data points and instead be rendered in the background.
  </p>

  <div class="usa-chart-card">
    <div class="usa-chart-header">
      <h3 class="usa-chart-title">{% include svg/success.html %} Vertical Grid Example: Means of Transportation to Work in New York</h3>
      <h4 class="usa-chart-subtitle">Driving Alone is Still Popular</h4>
    </div>
    <canvas id="component-grid-chart"></canvas>
    <div class="usa-source-container">
      <div>
        Survey/Program:
        <a href="https://www.census.gov/programs-surveys/acs/" target="_blank">
          2016 American Community Survey 1-Year Estimates
      </a>
      <div>
        Table:
        <a href="https://data.census.gov/cedsci/" target="_blank">DP03</a>
      </div>
    </div>
  </div>

</div>
<div id="graticules">
  <h2>Grids in Maps</h2>
  <p>
    Grids can be displayed in two ways on a map: either as a traditional grid or as a graticule. Traditional grids correspond to grid systems outside of latitude and longitude, such as the military grid system. Unless you are an expert cartography, we highly recommend avoiding these types of grids.
  </p>
  <p>
    Alternatively, <strong>graticules</strong> are lines showing the latitude and longitude of the earth on a map. Graticules can help contextualize a map for users but aren’t always necessary. When using graticules, be sure to follow the grid lines guidance above to ensure the lines don’t distract from the contents of the map.
  </p>
</div>