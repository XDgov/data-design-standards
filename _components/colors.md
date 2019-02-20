---
permalink: /components/colors
layout: components
title: Colors
category: Components
lead: The colors featured in this section adhere to U.S. Census Bureau’s brand guidelines and can be easily customized to fit your needs.
subnav:
- text: Palette
  href: "#palette"
- text: Color Accessibility
  href: "#color-accessibility"
- text: Text Accessibility
  href: "#text-accessibility"

guidance-always:
- Use 508-compliant color schemes in your data visualizations.
- Use a neutral background.

guidance-recommended:
- Refer to your agency’s brand guidelines to determine what colors to use.
- Be consistent in how you use color to label data across data visualiations.
---

<div id="palette">
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
  <h4>Featured Colors</h4>
  <p>
    This palette’s featured colors are teal, navy, orange, and grey.
  </p>
  <div class="usa-grid-full">
    {% include colors/color-card.html cmyk="81, 24, 31, 0" hex="0095A8" name="census-color-teal" rgb="0, 149, 168" vanity_name="Teal" %}
    {% include colors/color-card.html cmyk="79, 43, 0, 68" hex="112E51" name="census-color-navy" rgb="17, 46, 81" vanity_name="Navy" %}
    {% include colors/color-card.html cmyk="0, 56, 74, 0" hex="FF7043" name="census-color-orange" rgb="255, 112, 67" vanity_name="Orange" %}
    {% include colors/color-card.html cmyk="23, 8, 0, 39" hex="78909C" name="census-color-grey" rgb="120, 144, 156" vanity_name="Grey" %}
  </div>
  <h4>Sequential Colors</h4>
  <p>
    Each of the four primary colors can be used to create a data visualization
    with a sequential color palette. This type of palette can be used when data
    values can be ordered from low to high. To reflect that the data is
    sequential (also known as continuous), all of the data values should be
    variations of the same color hue, where lower values are lighter and higher
    values are darker.
  </p>
  <p>
    Sequential colors are most commonly used to render a single category of data,
    such as a bar chart, or when visualizing a complex set of data with many
    categories.
  </p>
  <h5 class="usa-color-heading">Teal Palette</h5>
  <div class="usa-grid-full usa-grid-colors">
    {% include colors/color-card-sequence.html cmykValues="100, 13, 0, 82;100, 11, 0, 68;100, 11, 0, 52;100, 11, 0, 34;100, 11, 0, 16;58, 4, 0, 8;34, 4, 0, 0" hexValues="00282E,004851,006C7A,26C6DA,00BED6,6BEFF9,D4F4F8" name="census-color-teal" rgbValues="0, 40, 46;0, 72, 81;0, 108, 122;0, 149, 168;0, 190, 214;99, 225, 234;168, 245, 255" vanityNames="Darkest Teal, Darker Teal, Dark Teal, Teal, Light Teal, Lighter Teal, Lightest Teal" %}
  </div>
  <h5 class="usa-color-heading">Blue Palette</h5>
  <div class="usa-grid-full usa-grid-colors">
    {% include colors/color-card-sequence.html cmykValues="79, 44, 0, 85;79, 43, 0, 68;78, 43, 0, 42;78, 43, 0, 18;51, 28, 0, 12;35, 19, 0, 9;20, 11, 0, 5" hexValues="081627,112E51,205493,2E78D2,6DA1E0,97BCE9,C1D7F2" name="census-color-blue" rgbValues="8, 22, 39;17, 46, 81;32, 84, 147;46, 120, 210;109, 161, 224;151, 188, 233;193, 215, 242" vanityNames="Darkest Blue, Navy, Dark Blue, Blue, Light Blue, Lighter Blue, Lightest Blue" %}
  </div>
  <h5 class="usa-color-heading">Orange Palette</h5>
  <div class="usa-grid-full usa-grid-colors">
    {% include colors/color-card-sequence.html cmykValues="0, 57, 74, 64;0, 56, 74, 48;0, 57, 74, 24;0, 56, 74, 0;0, 41, 54, 0;0, 25, 34, 0;0, 11, 14, 0" hexValues="5D2818,853A22,C25432,FF7043,FF9776,FFBEA9,FFE4DC" name="census-color-orange" rgbValues="93, 40, 24;133, 58, 34;194, 84, 50;255, 112, 67;255, 151, 118;255, 190, 169;255, 228, 220" vanityNames="Darkest Orange, Darker Orange, Dark Orange, Orange, Light Orange, Lighter Orange, Lightest Orange" %}
  </div>
  <h5 class="usa-color-heading">Grey Palette</h5>
  <div class="usa-grid-full usa-grid-colors">
    {% include colors/color-card-sequence.html cmykValues="31, 10, 0, 81;32, 10, 0, 69;32, 10, 0, 57;23, 8, 0, 39;19, 6, 0, 20;10, 4, 0, 13;4, 1, 0, 5" hexValues="222C31,364850,4B636E,78909C,A7C0CD,C8D7DF,E8EFF2" name="census-color-grey" rgbValues="34, 44, 49;54, 72, 80;75, 99, 110;120, 144, 156;167, 192, 205;200, 215, 223;232, 239, 242" vanityNames="Darkest Grey, Darker Grey, Dark Grey, Grey, Light Grey, Lighter Grey, Lightest Grey" %}
  </div>
  <h4>Qualitative Colors</h4>
  <p>
    The four primary colors can also be used to create a qualitative color
    palette. Qualitative colors are used to render categorical data, such as
    gender or race, that has no inherent sequential order.
  </p>
  <p>
    When using this type of palette, try using colors with just enough variance
    in their hue and brightness to ensure all of the categories are represented
    similarly.
  </p>
  <h5 class="usa-color-heading">Example Palette</h5>
  <div class="usa-grid-full usa-grid-colors">
    {% include colors/color-card-categorical.html cmykValues="100, 11, 0, 34;79, 43, 0, 68;0, 56, 74, 0;23, 8, 0, 39;78, 43, 0, 18;100, 11, 0, 52;0, 41, 54, 0" hexValues="26C6DA,112E51,FF7043,78909C,2E78D2,006C7A,FFBEA9" nameValues="census-color-teal,census-color-navy,census-color-orange,census-color-grey,census-color-blue,census-color-teal-dark,census-color-orange-lighter" rgbValues="0, 149, 168;17, 46, 81;255, 112, 67;120, 144, 156;46, 120, 210;0, 108, 122;255, 151, 118" vanityNames="Teal, Navy, Orange, Grey, Blue, Dark Teal, Light Orange" %}
  </div>
  <p>
    Alternatively, a highlight color can be used with a qualitative palette to
    draw attention to a particular category of data. With this type of palette,
    a bias is shown towards the highlight color so use this type of palette
    with caution. 
  </p>
  <h5 class="usa-color-heading">Example Palette with Highlight</h5>
  <div class="usa-grid-full usa-grid-colors">
    {% include colors/color-card-categorical.html cmykValues="0, 25, 34, 0;35, 19, 0, 9;0, 56, 74, 0;10, 4, 0, 13;34, 4, 0, 0" hexValues="FFBEA9,97BCE9,26C6DA,97BCE9,D4F4F8" nameValues="census-color-orange-lighter,census-color-blue-lighter,census-color-orange,census-color-grey-lighter,census-color-teal-lightest" rgbValues="255, 190, 169;151, 188, 233;255, 112, 67;200, 215, 223;168, 245, 255" vanityNames="Lighter Orange, Lighter Blue, Orange, Lighter Grey, Lightest Teal" %}
  </div>
  <h4>Diverging Colors</h4>
  <p>
    Like sequential colors, diverging colors are commonly used to render a single
    category of data when data values can be ordered from low to high. The key
    difference however is that diverging colors bring attention to a significant
    break point in the data. To illustrate this, a different color is used on
    each end of the value scale and the breakpoint, or middle value, is
    represented as a neutral color. Data values that are furthest from the break
    point are shaded darker, while values that are closer are shaded lighter.
  </p>
  <h5 class="usa-color-heading">Example Palette</h5>
  <div class="usa-grid-full usa-grid-colors">
    {% include colors/color-card-categorical.html cmykValues="79, 43, 0, 68;35, 19, 0, 9;4, 1, 0, 5;0, 25, 34, 0;0, 56, 74, 48" hexValues="112E51,97BCE9,C1D7F2,FFBEA9,853A22" nameValues="census-color-navy,census-color-blue-lighter,census-color-grey-lightest,census-color-orange-lighter,census-color-orange-darker" rgbValues="17, 46, 81;151, 188, 233;232, 239, 242;255, 190, 169;133, 58, 34" vanityNames="Navy, Lighter Blue, Lightest Grey, Lighter Orange, Darker Orange" %}
  </div>
  <h4>No Data Colors</h4>
  <p>
    Occasionally, it is necessary to color in elements of a data visualization
    where no data exists, such as in maps. In these cases, a neutral color
    should be used to represent a “No Data” class. This class should be added to
    the visualization’s corresponding legend.
  </p>
</div>
<div id="color-accessibility">
  <h2>Color Accessibility</h2>
  <p>
    The WCAG (Web Content Accessibility Guidelines) ensure that content is accessible by everyone. To meet these standards, text and interactive elements should have a color contrast ratio of <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank">at least 4.5:1</a>. This ensures that viewers who cannot see the full color spectrum are able to read the text.
  </p>
  <h3>Best Practices</h3>
  <p>
    In general, any steps taken to improve the color accessibility of a data
    visualization improves the user experience for everyone. Below are a list of
    recommendations for how to make data visualizations more user-friendly: 
  </p>
  <ul>
    <li>
      Use text elements to label data directly to rely less on color.
    </li>
    <li>
      Use tools such as <a href="http://colorbrewer2.org/" target="_blank">color
      brewer</a> to select a palette that is 508-compliant.
    </li>
    <li>
      When using sequential and diverging colors, adjust your color palette to
      ensure there is enough contrast between colors.
    </li>
    <li>
      When using a qualitative color palette where contrasting is not encouraged,
      try to avoid conflicting color combinations. Some examples include:
      <ul>
        <li>red & green</li>
        <li>green & brown</li>
        <li>green & blue</li>
        <li>blue & grey</li>
        <li>blue & purple</li>
        <li>green & grey</li>
        <li>green & black</li>
      </ul>
    </li>
  </ul>
</div>
<div id="text-accessibility">
  <h2>Text Accessibility</h2>
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
</div>