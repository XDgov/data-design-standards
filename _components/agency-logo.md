---
permalink: /components/agency-logo
layout: components
title: Agency Logo
category: Components
lead: Including your agency’s logo can help users quickly determine the origin of your data visualization.
guidance-always:
- Always follow agency brand guidelines for logo spacing and styling.

guidance-never:
- Never overlap a logo with any elements inside of a data visualization.

guidance-recommended:
- It is recommended to place the agency logo in the bottom-left corner of a data visualization.
---
<p>
  When designing data visualizations for sharing, place your agency’s logo in a corner just outside of the data visualization, either in the top-right corner or below the source information. The size and placement of your agency’s logo should not disrupt the contents of a data visualization or its corresponding components.
</p>
<p>
  If your agency logo is presented elsewhere in a website that users will be viewing your data visualization in, including the logo next to your visualization is not necessary. For print-based data visualizations, your agency logo should always be included.
</p>
<p>
  For more information on logo placement, spacing, and styling, refer to your agency’s most recent brand guidelines. For U.S. Census Bureau employees, you can find the Corporate Identity and Branding Standards <a href="https://www.census.gov/about/policies/style-guide.html" target="_blank">here</a>.
</p>
<h2>Example</h2>
<div class="usa-chart-card">
  <div class="usa-chart-header">
    <h3 class="usa-chart-title">Types of Languages Spoken at Home in New York</h3>
  </div>
  <canvas id="barChart"></canvas>
  <div class="usa-source-container">
    Source: <a href="https://www.census.gov/programs-surveys/acs/" target="_blank">2016 American Community Survey 1-Year Estimates</a>
  </div>
  <div class="usa-agency-logo">
    <img src="../assets/img/examples/components/logo/census-logo.png" alt="U.S. Census Bureau">
  </div>
</div>