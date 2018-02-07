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
  with a sequential color palette. This type of palette can be used when data
  values can be ordered from low to high, with darker colors representing higher
  values.
</p>
<p>
  Sequential colors are most commonly used to render a single category of data,
  such as a bar chart, or when visualizing a complex set of data with many
  categories, such as a choropleth map.
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
  {% include colors/color-card-sequence.html hexValues="5D2818,853A22,C25432,FF7043,FF9776,FFBEA9,FFE4DC" name="census-color-orange" %}
</div>
<h5 class="usa-color-heading">Grey Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-sequence.html hexValues="081627,112E51,205493,2e78d2,6DA1E0,97BCE9,C1D7F2" name="census-color-grey" %}
</div>
<h4>Qualitative Colors</h4>
<p>
  The four primary colors can also be used to create a qualitative color
  palette. Qualitative colors are most commonly used when rendering categorical
  data, such as gender or race.
</p>
<p>
  When using this type of palette, try using colors with just enough variance
  in their hue brightness to ensure all of the categories are represented
  similarly. Alternatively, a highlight color with a brighter hue can be used to
  draw attention to a particular category of data.
</p>
<h5 class="usa-color-heading">Example Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-categorical.html hexValues="26C6DA,112E51,FF7043,78909C,2E78D2,008393,FFBEA9" nameValues="census-color-teal,census-color-navy,census-color-orange,census-color-grey,census-color-blue,census-color-teal-dark,census-color-orange-lighter" %}
</div>
<h5 class="usa-color-heading">Example Palette with Highlight</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-categorical.html hexValues="A9E8F0,97BCE9,26C6DA,97BCE9,D4F4F8" nameValues="census-color-teal-lighter,census-color-blue-lighter,census-color-orange,census-color-grey-lighter,census-color-teal-lightest" %}
</div>
<h4>Diverging Colors</h4>
<p>
  Like sequential colors, diverging colors are commonly used to render a single
  category of data when data values can be ordered from low to high. The key
  difference however is that diverging colors have a breakpoint in values. To
  illustrate this, a different color is used on each end of the value scale and
  the middle value, or breakpoint, is represented as a neutral color.
</p>
<h5 class="usa-color-heading">Example Palette</h5>
<div class="usa-grid-full usa-grid-colors">
  {% include colors/color-card-categorical.html hexValues="112E51,97BCE9,C1D7F2,FFBEA9,853A22" nameValues="census-color-navy,census-color-blue-lighter,census-color-grey-lightest,census-color-orange-lighter,census-color-orange-darker" %}
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
<h4>Accessible Text Combinations</h4>
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