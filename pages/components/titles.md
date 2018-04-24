---
permalink: /components/titles
layout: components
title: Titles
category: Components
lead: Titles give users a clear overview of what a data visualization is about.
subnav:
- text: Title
  href: "#titles"
- text: Subtitle
  href: "#subtitles"
---
<p>
  In addition to a traditional title element, data visualizations can also
  contain subtitles and axis titles to further clarify the purpose of a data
  visualization to users.
</p>
<div id="titles">
  <h2>Title</h2>
  <p>
    Titles should be present on all data visualizations and contain no more than
    two lines of text. A title should broadly describe what is contained in a
    data visualization without identifying any trends or highlights in the data.
  </p>
  <p>
    Titles should appear above a visualization or as the first element directly
    adjacent to it.
  </p>
</div>
<div id="subtitles">
  <h2>Subtitle</h2>
  <p>
    Subtitles can be used to describe any trends or highlights in a data
    visualization. Subtitles can also be used to indicate the unit of 
    measurement if preferable to an axis title. While subtitles are optional,
    their presence helps to clarify the purpose of a visualization to users.
  </p>
  <p>
    Subtitles should appear directly below the Title of a visualization.
  </p>
</div>
<div id="examples">
  <h2>Examples</h2>
  <div class="component-examples clearfix">
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/warning.html %} Bad Example</h4>
      <div class="usa-chart-header">
        <h3 class="usa-chart-title">Age in the United States</h3>
      </div>
      <h5 class="usa-color-heading">Why it’s Bad</h5>
      <p>
        While the title is short and to the point, it doesn’t reveal much
        about what’s inside the data visualization. This title could be paired
        with a subtitle to contextualize the data visualization more.
      </p>
    </div>
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/success.html %} Good Example</h4>
      <div class="usa-chart-header">
        <h3 class="usa-chart-title">Age in the United States</h3>
        <h4 class="usa-chart-subtitle">Older adults are projected to outnumber children by 2035.</h4>
        <h5 class="usa-color-heading">Why it’s Better</h5>
        <p>
          Now that the title has been paired with a subtitle, users will better
          understand what the data visualization is trying to communicate.
        </p>
      </div>
    </div>
  </div>
</div>