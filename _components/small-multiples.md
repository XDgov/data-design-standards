---
permalink: /components/small-multiples
layout: components
title: Small Multiples
category: Components
lead: Small multiples are a series of small visualizations that allow users to simply and quickly interpret changes across each visualization.

guidance-always:
- Always place the scale bar in a way that does not distrupt the content of the map.

guidance-recommended:
- It is recommended that the graphs be ordered in some logical manner, e.g. time.
- If it makes sense for the type of chart used and if space allows, it is recommended to align the charts in a single row or column so that the viewer can make comparisons along a single baseline.

guidance-not-recommended:
- It is not recommended to use any scale bars not mentioned in this guidance unless you are an expert cartographer.
---
<p>
  Small multiples are best used when representing simple visualizations that include a small number of dimensions. Because small multiples are used to compare differences across visualizations, the visualization type used and the data compared should be consistent across the entire series of visualizations.
</p>
<p>
  Small multiples can be used with bar charts, histograms, line graphs, pie charts, and choropleth maps. Other visualization types are often too complex to be rendered at a small size, resulting in changes across visualizations becoming lost.
</p>
<h2>Example</h2>
<div class="clearfix component-examples">
  <div class="usa-chart-card example-side-by-side">
    <h4>{% include svg/warning.html %} Acceptable Example</h4>
    <div>
      <h5 class="usa-chart-title">Quarterly Population Rates by Regional Office</h5>
      <canvas id="sm-chart-bar-stacked"></canvas>
    </div>
    <h5 class="usa-color-heading">Why it’s Only Acceptable</h5>
    <p>
      Choosing the right data visualization depends on a number of factors, one
      of which is intent. In this case, the intent of this visualization is to
      visualize quarterly population rates by regional office. A stacked bar
      chart excels at showing broader changes in data across several categories,
      but when it comes to understanding granular changes in data, it requires
      more time and energy for users to understand.
    </p>
  </div>
  <div class="usa-chart-card example-side-by-side">
    <h4>{% include svg/success.html %} Preferred Example</h4>
    <div>
      <div class="small-multiple-examples clearfix">
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Quarterly Population Rates for Atlanta</h5>
          <canvas id="sm-chart-bar-q1"></canvas>
        </div>
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Quarterly Population Rates for Chicago</h5>
          <canvas id="sm-chart-bar-q2"></canvas>
        </div>
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Quarterly Population Rates for Denver</h5>
          <canvas id="sm-chart-bar-q3"></canvas>
        </div>
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Quarterly Population Rates for New York</h5>
          <canvas id="sm-chart-bar-q4"></canvas>
        </div>
      </div>
    </div>
    <h5 class="usa-color-heading">Why it’s Preferred</h5>
    <p>
      In this preferred example, each category of data is represented as its own
      horizontal bar chart. Although this approach takes up more space, it also
      allows for easier comparisons of values across each data category.
    </p>
  </div>
</div>