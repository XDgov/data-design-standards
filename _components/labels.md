---
permalink: /components/labels
layout: components
title: Labels
category: Components
lead: Labels make it easier for users to understand data visualizations by using text to reinforce visual concepts.
subnav:
- text: Chart Labels
  href: "#chart-labels"
- text: Map Labels
  href: "#map-labels"
- text: Accessibility
  href: "#accessibility"

guidance-always:
- Always be consistent when labeling states, territories, or districts in a United States-based map.
- Always use labels that are easily readable without interfering with the map’s content. 

guidance-recommended:
- It is recommended to use the 2-letter USPS abbreviation for states in a small format or page-sized maps.
- It is recommended to use different fonts and font styles to differentiate geographic area types.
---
<p> 
  Labels are traditionally used to label axes and legends, however, they can
  also be used inside of data visualizations to communicate categories, values,
  or annotations. Where possible, labels should be used instead of legends or
  tooltips to make it easier for users to understand data visualizations.
</p>
<div id="chart-labels">
  <h2>Chart and Graph Labels</h2>
  <h3>Data Labels</h3>
  <p>
    Data labels are applied directly to elements inside of a visualization to
    show the value of a datapoint or the category of the data. When using data
    labels, you can omit the corresponding axis to reduce redundancies.
  </p>
  <p>
    When using data labels for categories, such as in a line graph, you can omit
    using a legend as this is the prefered method for representing categorical
    data.
  </p>
  <div class="component-examples clearfix">
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/warning.html %} Failed Example</h4>
      <div class="clearfix data-label-example-container">
        <canvas id="data-label-fail" role="img" aria-label="Example: 50%"></canvas>
        <div>
          <h5 class="usa-color-heading">Why it Fails</h5>
          <p>
            While it is acceptable to place text labels inside of visualization
            elements, the text color must contrast the background element enough
            to meet Section 508 guidelines. For more information, refer to the
            <a href="colors#text-accessibility">color accessibility</a>
            guidance.
          </p>
        </div>
      </div>
    </div>
    <div class="usa-chart-card example-side-by-side">
      <h4>{% include svg/success.html %} Preferred Example</h4>
      <div class="clearfix data-label-example-container">
        <canvas id="data-label-success" role="img" aria-label="Example: 50%"></canvas>
        <div>
          <h5 class="usa-color-heading">Why it Meets the Requirements</h5>
          <p>
            In this example, the background color has been
            changed to meet the minimum contrast ratio when paired with white
            text. Alternatively, text elements can also
            be displayed just outside of visualization elements.
          </p>
        </div>
      </div>
    </div>
  </div>
  <h3>Annotations</h3>
  <p>
    Annotations can be used to help tell the story of a data visualization. Before
    choosing to use annotations, make sure they do not reduce a user’s ability
    to understand the data inside of your data visualization.
  </p>
  <h3>Typography</h3>
  <p>
    Labels in charts and graphs should be displayed in sentence case. Sentence
    case is a type of letter casing, like uppercase or lowercase, where only the
    first word and proper nouns are capitalized.
  </p>
  <div class="clearfix component-examples">
    <div class="usa-chart-card example-side-by-side">
      <h4>Example: Sentence Casing vs. Other Casings</h4>
      <div class="label-example-container">
        <div class="label-example-preferred label-example">{% include svg/success.html %} Under 5 years <span>– Sentence case</span></div>
        <div class="label-example">{% include svg/warning.html %} Under 5 Years <span>– Title case</span></div>
        <div class="label-example">{% include svg/warning.html %} under 5 years <span>– Lowercase</span></div>
      </div>
    </div>
  </div>
</div>
<div id="map-labels">
  <h2>Map Labels</h2>
  <p>
    Depending on the type of map being used, labels may or may not be necessary.
    For example, a United States-based thematic map may not need labels if the
    map is showing general trends.
  </p>
  <h3>Labeling States, Territories, and Districts</h3>
  <p>
    When labeling states, territories, or districts in a United States-based map,
    it is important to be consistent. For small format or page-sized maps, the
    2-letter USPS abbreviation is preferred. Each label should be easy to ready
    without interfering with the map’s content.
  </p>
  <div class="clearfix component-examples">
    <div class="usa-chart-card example-side-by-side">
      <h4>Example: Label for Washington, D.C.</h4>
      <div class="label-example-container">
        <div class="label-example-preferred label-example">{% include svg/success.html %} DC <span>– USPS Abbreviation</span></div>
        <div class="label-example">{% include svg/warning.html %} D.C.</div>
        <div class="label-example">{% include svg/warning.html %} Wash. D.C.</div>
      </div>
    </div>
  </div>
  <h3>Styling Map Labels</h3>
  <p>
    When labeling different geographic area types in a map, try using different
    fonts and font styles, such as bold, italics, color, size, and  casing
    (such as uppercase or sentence case). Using identical typography for
    different geographic labels may result in users confusing different types of
    labels.
  </p>
</div>
<div id="accessibility">
  <h2>Label Accessibility</h2>
  <p>
    The WCAG (Web Content Accessibility Guidelines) ensure that content is
    accessible by everyone. WCAG 2.0 AA conformance is required by the
    <a href="https://www.section508.gov/content/build/website-accessibility-improvement/WCAG-conformance" target="_blank">Revised 508 Standards</a>, which means that conformance to
    these guidelines is a requirement for all web-based data visualizations
    produced by the U.S. Government.
  </p>
  <p>
    To ensure your labels are 508 and WCAG 2.0 AA compliant, ensure your labels
    adhere to the
    <a href="{{ site.baseurl }}/components/typography" target="_blank">
      typographic
    </a>
    and
    <a href="{{ site.baseurl}}/components/color" target="_blank">
      color
    </a>
    guidance outlined in their respective components and follow the guidance
    below for web-based visualizations.
  </p>
  <h3>
    Label Fallbacks for Web-based Visualizations
  </h3>
  <h4>Static Images</h4>
  <p>
    Labels should be inserted into images as comma-separated key value pairs
    (i.e. "Lumber: 10%, Coal: 15%") using the <code>aria-label</code> attribute
    of the <code>img</code> tag. 
  </p>
  <h4>SVG</h4>
  <p>
    SVGs (Scalable Vector Graphics) are a type of graphic that can be displayed
    in one of two ways: as a static image or inline. When using an SVG inline, a
    <code>desc</code> element may be used by including data labels as 
    comma-separated key value pairs (i.e. "Lumber: 10%, Coal: 15%"). 
  </p>
  <h4>Canvas</h4>
  <p>
    Unlike SVGs, canvas elements are rendered using Javascript and contain no
    HTML elements inside. Canvas elements accept a limited number of attributes,
    so we recommend including a visualization’s data labels inside the
    <code>aria-label</code> attribute using comma-separated key value pairs
    (i.e. "Lumber: 10%, Coal: 15%").
  </p>
  <h4>Tabular Alternatives</h4>
  <p>
    In addition to the above methods, tables may also be included as a fallback
    method for representing data belonging to a data visualization.
  </p>
  <h3>Label Fallbacks for Documents and Presentations</h3>
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