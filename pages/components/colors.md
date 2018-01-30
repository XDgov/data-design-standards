---
permalink: /components/colors
layout: components
title: Colors
category: Components
lead: The colors featured in this section adhere to U.S. Census Bureau’s brand guidelines and can be easily customized to fit your needs.
---

<h2>Palette</h2>
<p>
  This palette is designed to delight users with a mix of warm and cool tones
  that are as unique as they are vibrant. The simple and minimalistic nature
  of this palette will ensure users can differentiate categories and sequencing
  of data more easily.
</p>
<p>
  We encourage everyone using these standards to reference their own Agency’s
  brand guidelines and to reference the Text Accessibility section below for
  guidance on using 508-compliant colors.
</p>
<h4>Primary Colors</h4>
<p>
  This palette’s primary colors are teal, navy, orange, and grey.
</p>
<div class="usa-grid-full">
  {% include colors/color-card.html hex="26C6DA" name="census-color-teal" %}
  {% include colors/color-card.html hex="112E51" name="census-color-navy" %}
  {% include colors/color-card.html hex="FF7043" name="census-color-orange" %}
  {% include colors/color-card.html hex="78909C" name="census-color-grey" %}
</div>
<h4>Sequential Colors</h4>
<p>
  Each of the four primary colors can be used to create a data visualization
  with a sequential color palette. This is useful when a data visualization uses
  color to designate changes in values, particularly within a numeric range.
</p>
<p>
  Sequential colors are most commonly used when rendering a single category of
  data in a visualization, such as a bar chart, or when visualizing a complex
  set of data with many categories, such as a choropleth map.
</p>
<h5 class="usa-color-heading">Teal Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-sequence.html hexValues="00282D,005660,008393,26C6DA,7DDDE9,A9E8F0,D4F4F8" name="census-color-teal" %}
</div>
<h5 class="usa-color-heading">Blue Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-sequence.html hexValues="081627,112E51,205493,2E78D2,6DA1E0,97BCE9,C1D7F2" name="census-color-blue" %}
</div>
<h5 class="usa-color-heading">Orange Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-sequence.html hexValues="5D2818,853A22,C25432,26C6DA,FF9776,FFBEA9,FFE4DC" name="census-color-orange" %}
</div>
<h5 class="usa-color-heading">Grey Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-sequence.html hexValues="081627,112E51,205493,2e78d2,6DA1E0,97BCE9,C1D7F2" name="census-color-grey" %}
</div>
<h4>Categorical Colors</h4>
<p>
  The four primary colors can also be used to create a categorical color
  palette. This is useful when a data visualization contains a legend and each
  category of data is associated with a color. 
</p>
<p>
  Categorical colors are most commonly used when rendering several categories
  of data, such as in a stacked bar chart or a grouped bar chart. When selecting
  colors for a categorical data visualization, be sure to choose colors that
  represent the relationship of each category to another.
</p>
<p>
  For more information, visit xxxxx.
</p>
<h5 class="usa-color-heading">Example Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-categorical.html hexValues="26C6DA,112E51,FF7043,78909C,2E78D2,008393,FFBEA9" nameValues="census-color-teal,census-color-navy,census-color-orange,census-color-grey,census-color-blue,census-color-teal-dark,census-color-orange-lighter" %}
</div>
<h2>Text Accessibility</h2>
<p>
  The WCAG (Web Content Accessibility Guidelines) ensure that content is accessible by everyone. To meet these standards, text and interactive elements should have a color contrast ratio of <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank">at least 4.5:1</a>. This ensures that viewers who cannot see the full color spectrum are able to read the text.
</p>
<p>
  The options below offer color palette combinations that fall within the range of Section 508 compliant foreground/background color contrast ratios. To ensure that text remains accessible, use only these permitted color combinations.
</p>
<p>
  If you choose to customize beyond this palette, this <a href="http://webaim.org/resources/contrastchecker/" target="_blank"> color contrast tool</a> is a useful resource for testing the compliance of any color combination.
</p>
<h4>Accessible Combinations</h4>
<h5>Colors on White Background</h5>
<div class="usa-grid-full">
  <div class="usa-width-one-half">
    {% include accessibility/text-examples-neutral.html colorName="Teal" %}
    {% include accessibility/text-examples-neutral.html colorName="Blue" %}
  </div>
  <div class="usa-width-one-half">
    {% include accessibility/text-examples-neutral.html colorName="Orange" %}
    {% include accessibility/text-examples-neutral.html colorName="Grey" %}
  </div>
</div>
 <h5>Neutrals on a Colored Background</h5>
 <div class="usa-grid-full">
   <div class="usa-width-one-half">
     {% include accessibility/text-examples-color.html colorName="Teal" %}
     {% include accessibility/text-examples-color.html colorName="Blue" %}
   </div>
   <div class="usa-width-one-half">
     {% include accessibility/text-examples-color.html colorName="Orange" %}
     {% include accessibility/text-examples-color.html colorName="Grey" %}
   </div>
 </div>