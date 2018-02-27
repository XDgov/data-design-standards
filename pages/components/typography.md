---
permalink: /components/typography
layout: components
title: Typography
category: Components
lead: Typography is one of the most effective tools for communicating the meaning of data to users. When building data visualizations, establishing a clear hierarchy of typographic elements and using easy-to-read font families will help users better understand and interact with your data.
---
<div id="typeface">
  <h2>Typeface</h2>
  <h4>Roboto</h4>
  <div class="usa-grid-full">
    <div class="usa-width-one-half">
      <p>
        Robot is a sans-serif typeface developed by Google. With a variety of weights that read easily at all sizes, Roboto provides clear headers as well as highly-readable body text.
      </p>
      <p>
        Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settle in to their natural width.
      </p>
      <p>Roboto is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>.</p>
    </div>
    <div class="usa-width-one-half usa-end-row usa-font-samples">
      <span class="text-huge">Aa</span>
      <div>
        <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
      </div>
    </div>
  </div>
</div>
<div id="typesetting">
  <h2>Typesetting</h2>
  <p>
    Using a clear hiearchy of type and consistent alignment helps users to focus
    on the most important elements of data visualizations. In addition to the
    text elements inside of a visualization, it’s also important to extend these
    principles to external elements, such as the title, description, and source
    information of the data visualization.
  </p>
  <div class="usa-chart-card typography-card">
    <h3 class="usa-chart-title">
      Chart Title
    </h3>
    <h4 class="usa-chart-subtitle">
      Chart Subtitle
    </h4>
    <div class="usa-source-container">
      Source or Program Information
    </div>
  </div>
  <h3>Examples</h3>
  <div class="usa-chart-card">
    <div class="usa-chart-header">
      <h3 class="usa-chart-title">
        Types of Languages Spoken at Home in New York
      </h3>
      <h4 class="usa-chart-subtitle">
        English-only is the most spoken language at home.
      </h4>
    </div>
    <canvas id="typography-chart"></canvas>
    <div class="usa-source-container">
      Survey/Program: <a href="https://www.census.gov/programs-surveys/acs/" target="_blank">2016 American Community Survey 1-Year Estimates</a>
    </div>
  </div>
</div>