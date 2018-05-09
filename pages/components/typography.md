---
permalink: /components/typography
layout: components
title: Typography
category: Components
lead: Typography is one of the most effective tools for communicating the meaning of data to users. When building data visualizations, establishing a clear hierarchy of typographic elements and using easy-to-read font families will help users better understand and interact with your data.
subnav:
- text: Typefaces
  href: "#typefaces"
- text: Type Sizing
  href: "#sizing"
- text: Typesetting
  href: "#typesetting"
---
<div id="typefaces">
  <h2>Typefaces</h2>
  <p>
    The typefaces presented in this section adhere to 2018 U.S. Census Bureau
    Identity and Branding Standards. If you are not a member of the U.S. Census
    Bureau, we recommend referencing your agency’s latest brand guidance for
    typeface recommendations. 
  </p>
  <h3>Roboto</h3>
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
  <h3 class="serif">Lora</h3>
  <div class="usa-grid-full">
    <div class="usa-width-one-half">
      <p>
        Lora is a serif typeface developed by Google. It is a well-balanced contemporary serif with roots in calligraphy. Lora is a text typeface with moderate contrast well suited for body text.
      </p>
      <p>
        Technically Lora is optimized for screen appearance, and works equally well in print.
      </p>
      <p>Lora is licensed under the <a href="http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web" target="_blank">Open Font License 1.1</a>.</p>
    </div>
    <div class="usa-width-one-half usa-end-row usa-font-samples serif">
      <span class="text-huge">Aa</span>
      <div>
        <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
        <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
        <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
      </div>
    </div>
  </div>
  <h3>Choosing a Typeface for Screens</h3>
  <p>
    When designing data visualizations for screens, such as mobile, web, or
    presentation, we generally recommend using sans-serif fonts. Sans-serif
    fonts tend to scale better in lower-resolution screens and are more commonly
    used in websites.
  </p>
</div>
<div id="sizing">
  <h2>Font Sizing</h2>
  <p>
    Data visualizations use a blend of font sizes to establish a clear hierarchy
    of elements, known as typesetting. To maximize the usability of a data
    visualization, font sizes should be optimized for readability.
  </p>
  <p>
    Readability of type depends on the display quality and
    <a href="http://www.hf.faa.gov/webtraining/visualdisplays/text/size1a.htm" target="_blank">viewing distance</a>
    for presenting a data visualization. For example, websites often use a 16pt
    font size as it is optimized for legibility given the average view distance
    and screen quality.
  </p>
  <h3>Accessibility</h3>
  <p>
    As a general rule, we recommend using a minimum font size of 9pt for screens
    and 6pt for print. Though there are no rigid requirements for 508 compliance
    regarding font sizes, striving for font sizes as close to 16pt as possible
    will ensure your data visualizations are as readable and user-friendly as
    possible.
  </p>
  <p>
    Below is a spectrum of font sizes that demonstrates the difficulty of
    reading text below the 9pt threshold.
  </p> 
  <div>
    <div class="type-sizes">
      {% assign sizes="6,7,8,9,10,11,12,14,16,18,21,24,28,32,36,42,48,60" %}
      {% assign sizesArray = sizes | split: "," %}
      {% for size in sizesArray %}
        {% include typography/size_example.html font_size=size %}
      {% endfor %}
    </div>
  </div>
</div>
<div id="spacing">
  <h2>Letter Spacing</h2>
  <p>
    Letter spacing, or kerning, is the spacing between individual characters. We
    recommend using the default letter spacing of whichever typeface you choose
    to maximize the readability of text in your data visualization.
  </p>
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
  <h3>Example</h3>
  <div class="usa-chart-card">
    <div class="usa-chart-header">
      <h3 class="usa-chart-title">
        Languages Spoken at Home in New York
      </h3>
      <h4 class="usa-chart-subtitle">
        English-only is the most commonly spoken language at home.
      </h4>
    </div>
    <canvas id="typography-chart"></canvas>
    <div class="usa-source-container">
      Survey/Program: <a href="https://www.census.gov/programs-surveys/acs/" target="_blank">2016 American Community Survey 1-Year Estimates</a>
    </div>
  </div>
</div>