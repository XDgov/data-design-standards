---
permalink: /components/small-multiples
layout: components
title: Small Multiples
category: Components
lead: Small multiples are a series of small visualizations that allow users to simply and quickly interpret changes across each visualization.
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
      <h5 class="usa-chart-title">Population by Region</h5>
      <canvas id="sm-chart-bar-stacked"></canvas>
    </div>
    <h5 class="usa-color-heading">Why it’s Only Acceptable</h5>
    <p>
      While stacked bar charts are an acceptable visualization type, they can
      also be difficult for users to compare changes across different categories
      of data. The resulting data visualization requires more time and energy
      for users to understand.
    </p>
  </div>
  <div class="usa-chart-card example-side-by-side">
    <h4>{% include svg/success.html %} Preferred Example</h4>
    <div>
      <div class="small-multiple-examples clearfix">
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Population by Region - Q1</h5>
          <canvas id="sm-chart-bar-q1"></canvas>
        </div>
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Population by Region - Q2</h5>
          <canvas id="sm-chart-bar-q2"></canvas>
        </div>
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Population by Region - Q3</h5>
          <canvas id="sm-chart-bar-q3"></canvas>
        </div>
        <div class="sm-example-container">
          <h5 class="usa-chart-title">Population by Region - Q4</h5>
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