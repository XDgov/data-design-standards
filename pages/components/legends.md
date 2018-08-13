---
permalink: /components/legends
layout: components
title: Legends
category: Components
lead: Legends identify the meaning of various elements in a data visualization and can be used as an alternative to labeling data directly.
---
<p>
  Legends are commonly used with data visualizations when there is more than one color or line type being used – most commonly in maps. By moving labels outside of a visualization, legends can help to reduce clutter and make your data visualization more user-friendly as a result.
</p>
<p>
  Legends always include a series of item markers with corresponding labels and can optionally include a title. When using legends, be sure to follow the guidance below.
</p>
<div id="placement">
  <h2>Placement</h2>
  <p>
    Legends should be placed below or parallel to a data visualization, depending on the type of data being labeled and the available space surrounding the data visualization. If using sequential or diverging data, ensure that the legend is displayed in a vertical format next to the visualization so that the data can be properly ordered.
  </p>
</div>
<div id="placement">
  <h2>Title</h2>
  <p>
    A legend title is not necessary to include. When it is included however, it should be descriptive and reinforce the title or subtitle of the visualization. Instead of using a generic title like “Legend” or “Key,” try using a title that captures the meaning of the data being labeled, such as “Population per Square Mile.”
  </p>
  <div class="component-examples clearfix">
    <div class="usa-chart-card example-side-by-side legend-title-example">
      <h4>{% include svg/warning.html %} Acceptable Example</h4>
      <h6 class="legend-title">Legend</h6>
      <h5 class="usa-color-heading">Why it‘s Only Acceptable</h5>
      <p>
        The legend title missed an opportunity to include helpful information about the kind of data inside of the data visualization. If you are including a legend title, be sure to make it descriptive.
      </p>
    </div>
    <div class="usa-chart-card example-side-by-side legend-title-example">
      <h4>{% include svg/success.html %} Preferred Example</h4>
      <h6 class="legend-title">Population per Square Mile</h6>
      <h5 class="usa-color-heading">Why it‘s Preferred</h5>
      <p>
        Now that the legend title describes the type of data being visualized, users will have a better sense of what the data visualization is all about.
      </p>
    </div>
  </div>
</div>
<div id="order">
  <h2>Ordering Elements</h2>
  <p>
    When using sequential data, ensure that the highest number appears first at the top of the legend and the lowest number appears last at the bottom of the legend. For diverging data, a vertical legend is also recommended, with the most extreme values at opposite ends of the legend.
  </p>
  <div class="component-examples clearfix">
    <div class="usa-chart-card example-side-by-side legend-number-example">
      <h4>{% include svg/warning.html %} Acceptable Example</h4>
      <div class="dvs-legend-numbers">
        <h6 class="legend-title">Percentage of Voters</h6>
        {% include components/legend-group.html color="census-blue-light" label="51-60" %}
        {% include components/legend-group.html color="census-blue" label="61-70" %}
        {% include components/legend-group.html color="census-blue-dark" label="71-80" %}
        {% include components/legend-group.html color="census-blue-darker" label="81-90" %}
        {% include components/legend-group.html color="census-blue-darkest" label="91-100" %}
      </div>
      <h5 class="usa-color-heading">Why it‘s Only Acceptable</h5>
      <p>
        By displaying the data in ascending order, the lower numbers appear at
        the top of the legend. This type of order deviates from best practices
        in usability and will result in inconsistent ordering across legends.
      </p>
    </div>
    <div class="usa-chart-card example-side-by-side legend-number-example">
      <h4>{% include svg/success.html %} Preferred Example</h4>
      <div class="dvs-legend-numbers">
        <h6 class="legend-title">Percentage of Voters</h6>
        {% include components/legend-group.html color="census-blue-darkest" label="91-100" %}
        {% include components/legend-group.html color="census-blue-darker" label="81-90" %}
        {% include components/legend-group.html color="census-blue-dark" label="71-80" %}
        {% include components/legend-group.html color="census-blue" label="61-70" %}
        {% include components/legend-group.html color="census-blue-light" label="51-60" %}
      </div>
      <h5 class="usa-color-heading">Why it‘s Preferred</h5>
      <p>
        Now that the data is displayed in descending order, the legend adheres
        to best practices and will result in more consistent and therefore more
        user-friendly data visualizations.
      </p>
    </div>
  </div>
</div>