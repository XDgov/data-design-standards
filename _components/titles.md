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
- text: Accessibility
  href: "#accessibility"

guidance-always:
- Always include a title with your data visualization.
- Always write a user-friendly title that tells people what your data visualization is about.
- Always place subtitles directly below the title when a subtitle is included.

guidance-recommended:
- It is recommended to include a subtitle to users with more context about the data visualization.
- It is recommended that a title contain no more than 2 lines of text or 8 words.
- It is recommended to place titles directly above or immediately adjacent to your data visualization.
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
  <div id="examples">
    <h3>Examples</h3>
    <div class="component-examples clearfix">
      <div class="usa-chart-card example-side-by-side">
        <h4>{% include svg/warning.html %} Acceptable Example</h4>
        <div class="usa-chart-header">
          <h3 class="usa-chart-title">Age in the United States</h3>
        </div>
        <h5 class="usa-color-heading">Why it’s Only Acceptable</h5>
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
</div>
<div id="accessibility">
  <h2>Title Accessibility</h2>
  <p>
    The WCAG (Web Content Accessibility Guidelines) ensure that content is
    accessible by everyone. WCAG 2.0 AA conformance is required by the
    <a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines" target="_blank">Revised 508 Standards</a>, which means that conformance to
    these guidelines is a requirement for all web-based data visualizations
    produced by the U.S. Government.
  </p>
  <p>
    Conformance to these guidelines can be achieved by being as descriptive as
    possible in your titles, per the guidance above, and by providing alt text
    fallbacks inside of your data visualizations.
  </p>
  <h3>Title Fallbacks for Web-based Visualizations</h3>
  <p>
    Depending on the format of your data visualization, title fallbacks for
    screen readers can be included in a number of ways:
  </p> 
  <h4>Static Images</h4>
  <p>
    Title and subtitle content should be inserted into images using the
    <code>alt</code> attribute of the <code>img</code> tag. 
  </p>
  <h4>SVG</h4>
  <p>
    SVGs (Scalable Vector Graphics) are a type of graphic that can be displayed
    in one of two ways: as a static image or inline. When using an SVG inline, a
    <code>title</code> element should be included containing the
    visualization’s title. A <code>desc</code> element may also be added that
    can contain the visualization’s subtitle and description.
  </p>
  <h4>Canvas</h4>
  <p>
    Unlike SVGs, canvas elements are rendered using Javascript and contain no
    HTML elements inside. Canvas elements accept a limited number of attributes,
    so we recommend including a visualization’s title and subtitle content
    inside the <code>aria-label</code> attribute.
  </p>
  <h3>Title Fallbacks for Documents and Presentations</h3>
  <p>
    Did you know that documents and presentations must also be
    508 compliant? Similar to the guidance for web-based visualizations,
    documents and presentations support alt-text fallbacks for static images
    and interactive elements.
  </p>
  <p>
    For guidance on creating 508-compliant documents and presentations, refer to
    Section 508’s
    <a href="https://www.section508.gov/content/build/create-accessible-documents" target="_blank">guide for creating accessible electronic documents</a>.
  </p>
</div>