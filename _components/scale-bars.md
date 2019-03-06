---
permalink: /components/scale-bars
layout: components
title: Scale Bars
category: Components
lead: Scale bars, or bar scales, are small graphics that indicate the proportions of a map to the original geographic area and help users measure distances on maps.
subnav:
- text: Types
  href: "#types"

guidance-always:
- Place the scale bar in a way that does not distrupt the content of the map.

guidance-recommended:
- Use single division or alternating scale bars.

guidance-not-recommended:
- Don’t use any scale bars not mentioned in this guidance unless you are an expert cartographer.
---
<p>
  While scale can be indicated as a ratio or in words (i.e. 1:10, or “One inch to ten miles”), scale bars allow users to measure distances in maps directly. Scale bars should be kept small and simple so that they do not detract from maps. 
</p>

<div id="types">
  <h2>Types of Scale Bars</h2>
  <p>
    Scale bars can take many shapes and sizes, however, we recommend using two of the simplest types of scale bars: the single division bar and the alternating scale bar.
  </p>
  <h3>Single Division Scale Bar</h3>
  <p>
    The single division scale bar is the simplest way to represent scale graphically. This type of scale bar is represented using a single bar or line with two numbers: the start value (usually 0), and the end value. The end value should always include the unit of measurement.
  </p>
  <div class="clearfix component-examples">
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/success.html %} Example: Single Division Scale Bar</h4>
      <div>
        <canvas id="scale-bar-single" class="dvs-canvas" role="img" aria-label="0, 10 miles"></canvas>
      </div>
    </div>
  </div>
  <h3>Alternating Scale Bar</h3>
  <p>
    The alternating scale bar is a more complex alternative to the single division scale bar that consists of several bars in strong contrast to one another to allow more precise measurements of distances in maps. Each bar is labeled with an end value and adjacent to these labels is the unit of measurement.
  </p>
  <div class="clearfix component-examples">
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/success.html %} Example: Alternating Scale Bar</h4>
      <div>
        <canvas id="scale-bar-alt" class="dvs-canvas" role="img" aria-label="0, 10 miles"></canvas>
      </div>
    </div>
  </div>
  <h3>Other Scale Bars</h3>
  <p>
    While there are several other types of scale bars, we recommend starting with the two examples above unless you’re an expert cartographer.
  </p>
</div>