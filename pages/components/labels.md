---
permalink: /components/labels
layout: components
title: Labels
category: Components
lead: Labels make it easier for users to understand data visualizations by using text to reinforce visual concepts.
subnav:
- text: Data Labels
  href: "#data-labels"
- text: Annotations
  href: "#annotations"
- text: Map Labels
  href: "#map-labels"
---
<p> 
  Labels are traditionally used to label axes and legends, however, they can
  also be used inside of data visualizations to communicate categories, values,
  or annotations. Where possible, labels should be used in favor of legends or
  tooltips to make it easier for users to understand data visualizations.
</p>
<div id="data-labels">
  <h2>Data Labels</h2>
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
</div>
<div id="annotations">
  <h2>Annotations</h2>
  <p>
    Annotations can be used to help tell the story of a data visualization. Before
    choosing to use annotations, make sure they do not reduce a user’s ability
    to understand the data inside of your data visualization.
  </p>
</div>
<div id="map-labels">
  <h2>Map Labels</h2>
  <p>
    Depending on the type of map being used, labels may or may not be necessary.
    For example, a United States-based thematic map may not need labels if the
    map is showing general trends.
  </p>
  <h3>Labeling States</h3>
  <p>
    When labeling states in a United States-based map, always use the 2-letter
    USPS abbreviation. Each label should be easy to ready without interfering
    with the map’s content.
  </p>
  <h3>Styling Map Labels</h3>
  <p>
    When labeling different geographic area types in a map, try using different
    fonts, colors, and text properties to differentiate each label type. Using
    identical typography for different geographic labels may result in users
    confusing different types of labels.
  </p>
</div>