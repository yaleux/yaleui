# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized vertical columns, and don't know how to quick and easily get it all done. Solution: The awesome grid!</p>

---

## Overview

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## Nesting

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create vertical columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

## Nesting Rows

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

```html
<div class="row">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>
```

<div class="row display">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>

---

## Block Grids
```html_example
<div class="row small-up-1 medium-up-2 large-up-4">
  <div class="column">
    <img src="//placehold.it/300x300" class="thumbnail" alt="">
  </div>
  <div class="column">
    <img src="//placehold.it/300x300" class="thumbnail" alt="">
  </div>
  <div class="column">
    <img src="//placehold.it/300x300" class="thumbnail" alt="">
  </div>
  <div class="column">
    <img src="//placehold.it/300x300" class="thumbnail" alt="">
  </div>
  <div class="column">
    <img src="//placehold.it/300x300" class="thumbnail" alt="">
  </div>
  <div class="column">
    <img src="//placehold.it/300x300" class="thumbnail" alt="">
  </div>
</div>
```

# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

## Blues

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #00356B"></span>
      #00356B
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #286DC0"></span>
      #286DC0
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #63AAFF"></span>
      #63AAFF
    </div>
  </div>  
</div>

---

## Grays  

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #222222"></span>
      #222222
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #4a4a4a"></span>
      #4a4a4a
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #978D85"></span>
      #978D85
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #DDDDDD"></span>
      #DDDDDD
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #F9F9F9"></span>
      #F9F9F9
    </div>
  </div>
</div>

---

## Accent Colors

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #5F712D"></span>
      #5F712D
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #BD5319"></span>
      #BD5319
    </div>
  </div>
</div>




# Typography

<p class="lead">This design uses Yale New for headings and Open Sans for paragraph text.</p>

---


## Paragraphs

This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content&mdash;so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Use the `<strong>` and `<em>` tags to denote text that should be displayed or read with emphasis. Browsers will **bold** and *italicize* the words, while screen readers will read them with *emphasis*.

<div class="callout primary">
  <p>If the emphasis of a phrase is important, don't make the emphasis purely visual&mdash;use the `<em>` or `<strong>` tags to mark it as well. Both of these tags have built-in styles, but there's no harm in adding additional styles in specific contexts.</p>
</div>

```html
<p>This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>. You can also use em to <em>italicize your words</em>.</p>
```

---

## Header

<div class="callout primary">
  <p>Avoid skipping heading levels when structuring your document, as it confuses screen readers. For example, after using an <code>&lt;h2&gt;</code> in your code, the next heading used should be either <code>&lt;h2&gt;</code> or <code>&lt;h3&gt;</code>. If you need a heading to look bigger or smaller to match a specific style, use CSS to override the default size.</p>
</div>

```html_example
<h1>h1. This is a very large header.</h1>
<h2>h2. This is a large header.</h2>
<h3>h3. This is a medium header.</h3>
<h4>h4. This is a moderate header.</h4>
<h5>h5. This is a small header.</h5>
<h6>h6. This is a tiny header.</h6>
```

---

## Small Header Segments

By inserting a `<small>` element into a header Foundation will scale the header font size down for an inline element, allowing you to use this for subtitles or other secondary header text.

```html_example
<h3>Foundation for Sites <small>Version 6.0.4</small></h3>
```

---

## Links

Links are very standard, and the color is preset to the Foundation primary color. <a href="global.html">Learn more about Foundation's global colors.</a>

<div class="callout">
  <p>To make links screen reader-friendly, avoid using vague words like "here" or "read more" within link text. The text of the link itself should adequately describe where the link goes.</p>
</div>

```html
<p>Links are very standard, and the color is preset to the Foundation primary color. <a href="global.html">Learn more about Foundation's global colors.</a></p>
```

---

## Dividers

Use dividers to define thematic breaks between paragraphs. To denote the end of one section of a page and the start of another, it's better to use the `<section>` tag.

```html
<hr>
```

---

## Unordered Lists

Use an unordered list to... *list things*, if the order of the items doesn't matter.

```html_example
<ul>
  <li>List item with a much longer description or more content.</li>
  <li>List item</li>
  <li>List item
    <ul>
      <li>Nested list item</li>
      <li>Nested list item</li>
      <li>Nested list item</li>
    </ul>
  </li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

---

## Ordered Lists

Use an `<ol>` when creating a list where the order of the items is important, like ranking pizza toppings from best to worst.

```html_example
<ol>
  <li>Cheese (essential)</li>
  <li>Pepperoni</li>
  <li>Bacon
    <ol>
      <li>Normal bacon</li>
      <li>Canadian bacon</li>
    </ol>
  </li>
  <li>Sausage</li>
  <li>Onions</li>
  <li>Mushrooms</li>
</ol>
```

---

## Definition Lists

A definition list (`<dl>`) is used to display name-value pairs, like metadata or a dictionary definition. Each term (`<dt>`) is paired with one or more definitions (`<dd>`).

```html_example
<dl>
  <dt>Time</dt>
  <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
  <dt>Space</dt>
  <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
  <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
</dl>
```

---

## Blockquotes

Sometimes other people say smart things, and you may want to mention those things with a quote. We've got you covered.

```html_example
<blockquote>
  Those people who think they know everything are a great annoyance to those of us who do.
  <cite>Isaac Asimov</cite>
</blockquote>
```

---

## Abbreviations

Use the `<abbr>` tag to annotate a shortened term. Abbreviations must always have a `title` attribute which clarifies the full term.

```html_example
<p>In my dream last night, I saw <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien and George <abbr title="Raymond Richard">R. R.</abbr> Martin hanging out on Sunset <abbr title="Boulevard">Blvd</abbr>.</p>
```

---

## Code

Format references to code with the `<code>` tag.

```html_example
Remember to escape angle brackets when printing HTML: <code>&lt;div&gt;</code>
```

---

## Keystrokes

Use the `<kbd>` element to annotate a key stroke or combination.

```html_example
<p>Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows) to play Half-Life 3.</p>
```

---

## Accessibility

Text is core to the content of your page, so making it accessible to everyone is important. Here are some general guidelines to follow.

### Text vs. Images

Prefer using actual text over text inside a graphic. Assistive technologies can't read an image, and the text in an image can't be resized by a browser, like normal text. If an image has text that needs to be read, add it in the `alt` attribute of the image.

```html
<img src="assets/img/buy-now.jpg" alt="Buy now">
```

---

### Contrast

The contrast between the color of an element's text and its background should be high enough that low-vision users can read it. **The minimum recommended contrast ratio is 4.5:1.** There are no automated tools that can effectively check this for you, but if you aren't sure about a specific color combination, you can run it through one of many color contrast checkers, such as [WebAIM's color contrast checker](http://webaim.org/resources/contrastchecker/).

Google Chrome's [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) also includes a contrast checker. By selecting an element in the inspector, you can see if the contrast meets the minimum standards.

---

### Type Size

When possible, use the `rem` and `em` units to size everything. Not just font size, but also padding, margins, and any length value. This ensures that your design scales up and down uniformly if the user changes their browser's text size. It's common for vision-impaired users to resize their browser up to 200% zoom.

We use the `rem` unit nearly everywhere in Foundation, and even wrote a Sass function to make it a little easier. The `rem-calc()` function can take one or more pixel values and convert them to proper `rem` values.

```scss
.element {
  width: rem-calc(300);
  padding: rem-calc(10 16);
}
```

---

### More Resources

- [WebAIM: Fonts](http://webaim.org/techniques/fonts/)
- [WebAIM: Links and HyperText](http://webaim.org/techniques/hypertext/)
- [WebAIM: Writing Clearly and Simply](http://webaim.org/techniques/semanticstructure/)
- [WebAIM: Color Contrast Checker](http://webaim.org/resources/contrastchecker/)

---

## Print Styles

Foundation includes print styles developed by HTML5 Boilerplate to give you some basic print-specific styles. These are activated when you print through a media query. It includes:

- Clearing out backgrounds, box shadows and text shadows
- Appending link URLs after the anchor text
- Adding borders to `<blockquote>` and `<pre>` elements
- Page cleanup and window minimization

On top of that, Foundation includes a couple of simple classes you can use to control elements printing, or not printing. Simply attach `.show-for-print` to an element to only show when printing, and `.hide-for-print` to hide something when printing.




# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

```html_example
<a href="#" class="primary large hollow button">Large button</a>
<a href="#" class="primary hollow button">Regular button</a>
<a href="#" class="primary small hollow button">Small button</a>
<a href="#" class="primary tiny hollow button">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```

```html_example
<a href="#" class="secondary large hollow button">Large button</a>
<a href="#" class="secondary hollow button">Regular button</a>
<a href="#" class="secondary small hollow button">Small button</a>
<a href="#" class="secondary tiny hollow button">Tiny button</a>
```



# Button Groups

<p class="lead">Button groups are containers for related action items. They're great when you need to display a group of actions in a bar. These build off the button styles and work perfectly with the grid.</p>

---

## Basics

Add the `.button-group` class to a container, and inside it place any number of buttons. The buttons are separated by a small border.

```html_example
<div class="button-group">
  <a class="button">One</a>
  <a class="button">Two</a>
  <a class="button">Three</a>
</div>
```

---

## Sizing

Button groups can be sized with the same classes as standard buttons: `.tiny`, `.small`, and `.large`.

```html_example
<div class="small button-group">
  <a class="button">Small</a>
  <a class="button">Button</a>
  <a class="button">Group</a>
</div>
```

---

## Coloring

Buttons within a button group can be colored individually with the `.secondary`, `.success`, `.warning`, and `.alert` classes.

```html_example
<div class="button-group">
  <a class="secondary button">View</a>
  <a class="success button">Edit</a>
  <a class="warning button">Share</a>
  <a class="alert button">Delete</a>
</div>
```

The entire group can also be colored using the same classes.

```html_example
<div class="success button-group">
  <a class="button">Harder</a>
  <a class="button">Better</a>
  <a class="button">Faster</a>
  <a class="button">Stronger</a>
</div>
```

---


## Even-width Group

Add the `.expanded` class to the container to make a full-width button group. Each item will automatically size itself based on how many buttons there are, up to a maximum of six.

```html_example
<div class="expanded button-group">
  <a class="button">Expanded</a>
  <a class="button">Button</a>
  <a class="button">Group</a>
</div>
```

---

## Stacking

A button group can be made vertical with the `.stacked` class. You can also use `.stacked-for-small` to only stack a button group on small screens, or `.stacked-for-medium` to only stack on small and medium screens.

```html_example
<div class="stacked-for-small button-group">
  <a class="button">How</a>
  <a class="button">Low</a>
  <a class="button">Can</a>
  <a class="button">You</a>
  <a class="button">Go</a>
</div>
```

---

## Split Buttons

To build a split button, just create a button group with two buttons.

To create a button with only an arrow, add the class `.arrow-only`. Note that the button still needs a label for screen readers, which can be embedded inside the button with a `.show-for-sr` element. In the example below, an assistive device will read the arrow button as "Show menu".

```html_example
<div class="button-group">
  <a class="button">Primary Action</a>
  <a class="dropdown button arrow-only">
    <span class="show-for-sr">Show menu</span>
  </a>
</div>
```



# Breadcrumbs

<p class="lead">Breadcrumbs come in handy to show a navigation trail for users clicking through your site.</p>

To make a set of breadcrumb links, just add the class `.breadcrumbs` to a `<ul>`, and then add links instead of `<li>` elements.

The current page doesn't require a link or a class, but you should add some explanatory text for AT that indicates which item is the current page.

To mark a disabled item, add the class `.disabled` to the `<li>`, and just use plain text instead of a link.

<div class="warning callout">
  <p>We use a CSS <code>::after</code> element containing a slash character to create the separator between items. Some screen readers will read this character out loud&mdash;if this is an issue, you can use a background image or a separate element with <code>aria-hidden="true"</code> to create the separator instead.</p>
</div>

```html_example
<nav aria-label="You are here:" role="navigation">
  <ul class="breadcrumbs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li class="disabled">Gene Splicing</li>
    <li>
      <span class="show-for-sr">Current: </span> Cloning
    </li>
  </ul>
</nav>
```



# Dialogs

Modal dialogs, or pop-up windows, are handy for prototyping and production. Foundation includes Reveal, a jQuery modal plugin, to make this easy for you. 

<a href="http://foundation.zurb.com/sites/docs/reveal.html" class="button">Foundation's Reveal</a>




# Dropdown Menu
<p class="lead"> Change a basic Menu into an expandable dropdown menu with the Dropdown Menu plugin.</p>

## Horizontal

Dropdown menus build on the [Menu](http://foundation.zurb.com/sites/docs/menu.html) component's syntax. Add the class `.dropdown` and the attribute `data-dropdown-menu` to the menu container to set up the dropdown.

```html
<ul class="dropdown menu" data-dropdown-menu>
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
</ul>
```

To create dropdown menus, nest a new `<ul>` inside an `<li>`. You can nest further to create more levels of dropdowns.

<div class="primary callout">
  <p>Note that the <code>&lt;ul&gt;</code> goes <em>after</em> the <code>&lt;a&gt;</code>, and not inside of it.</p>
</div>

```html
<ul class="dropdown menu" data-dropdown-menu>
  <li>
    <a href="#">Item 1</a>
    <ul class="menu">
      <li><a href="#">Item 1A</a></li>
      <!-- ... -->
    </ul>
  </li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
</ul>
```

<ul class="dropdown menu" data-dropdown-menu>
  <li>
    <a>Item 1</a>
    <ul class="menu">
      <li><a href="#Item-1A">Item 1A</a></li>
      <li>
        <a href="#Item-1B">Item 1B</a>
        <ul class="menu">
          <li><a href="#Item-1Bi">Item 1B i</a></li>
          <li><a href="#Item-1Bii">Item 1B ii</a></li>
          <li>
            <a href="#Item-1Biii">Item 1B iii</a>
            <ul class="menu">
              <li><a href="#Item-1Biiialpha">Item 1B iii alpha</a></li>
              <li><a href="#Item-1Biiiomega">Item 1B iii omega</a></li>
            </ul>
          </li>
          <li>
            <a href="#Item-1Biv">Item 1B iv</a>
            <ul class="menu">
              <li><a href="#Item-1Bivalpha">Item 1B iv alpha</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#Item-1C">Item 1C</a></li>
    </ul>
  </li>
  <li>
    <a href="#Item-2">Item 2</a>
    <ul class="menu">
      <li><a href="#Item-2A">Item 2A</a></li>
      <li><a href="#Item-2B">Item 2B</a></li>
    </ul>
  </li>
  <li><a href="#Item-3">Item 3</a></li>
  <li><a href="#Item-4">Item 4</a></li>
</ul>

---

## Vertical

Add the `.vertical` class to the top-level menu to make it vertical. Sub-menus are automatically vertical, regardless of the orientation of the top-level menu.

<div class="primary callout">
  <p>Menus are block-level elements, which means they stretch to fill the width of their container. To make the below example less goofy, we've hard-coded a <code>max-width</code> on the menu.</p>
</div>

```html
<ul class="vertical dropdown menu" data-dropdown-menu style="max-width: 300px;">
  <li><a href="#">Item 1</a></li>
  <!-- ... -->
</ul>
```

<ul class="vertical dropdown menu" data-dropdown-menu style="max-width: 300px;">
  <li>
    <a>Item 1</a>
    <ul class="menu">
      <li><a href="#Item-1A">Item 1A</a></li>
      <li>
        <a href="#Item-1B">Item 1B</a>
        <ul class="menu">
          <li><a href="#Item-1Bi">Item 1B i</a></li>
          <li><a href="#Item-1Bii">Item 1B ii</a></li>
          <li>
            <a href="#Item-1Biii">Item 1B iii</a>
            <ul class="menu">
              <li><a href="#Item-1Biiialpha">Item 1B iii alpha</a></li>
              <li><a href="#Item-1Biiiomega">Item 1B iii omega</a></li>
            </ul>
          </li>
          <li>
            <a href="#Item-1Biv">Item 1B iv</a>
            <ul class="menu">
              <li><a href="#Item-1Bivalpha">Item 1B iv alpha</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#Item-1C">Item 1C</a></li>
    </ul>
  </li>
  <li>
    <a href="#Item-2">Item 2</a>
    <ul class="menu">
      <li><a href="#Item-2A">Item 2A</a></li>
      <li><a href="#Item-2B">Item 2B</a></li>
    </ul>
  </li>
  <li><a href="#Item-3">Item 3</a></li>
  <li><a href="#Item-4">Item 4</a></li>
</ul>

---

## Sticky Navigation

See the documentation for the [Sticky](sticky.html#sticky-navigation) plugin to see how to easily make a sticky nav bar. 

---

### Preventing FOUC

Before the JavaScript on your page loads, the dropdown menus will not have arrows. However, once the JavaScript file has loaded, the arrows will appear causing a [flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). You can prevent this by adding the `is-dropdown-submenu-parent` class manually. 

```html
<ul class="dropdown menu" data-dropdown-menu>
  <li class="is-dropdown-submenu-parent">
    <a href="#">Item 1</a>
    <ul class="menu">
      <li><a href="#">Item 1A</a></li>
      <!-- ... -->
    </ul>
  </li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
</ul>
```




# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>
        How many puppies?
        <input type="number" value="100">
      </label>
    </div>
  </div>
</form>
```



# Progress Bar
<p class="lead">Show your progress. A simple way to add progress bars to your layouts. You only need two HTML elements to make them and they're easy to customize.</p>


## Basics

A progress bar has two elements: the container `.progress`, and the meter `.progress-meter`. The `role` and `aria-` attributes in the code example clarify the status of the bar:

- `aria-valuemin`: Minimum value.
- `aria-valuemax`: Maximum value.
- `aria-valuenow`: Current value.

If the value of the progress bar is not numeric, also add the attribute `aria-valuetext`, which should include a human-readable version of the bar's value.

```html_example
<div class="progress" role="progressbar" tabindex="0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-meter"></div>
</div>
```

Add a `width` CSS property to the inner meter to fill the progress bar.

```html_example
<div class="progress" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 50%"></div>
</div>
```

---

## Colors

A progress bar can be styled with the `.secondary`, `.success`, `.warning`, and `.alert` colors.

```html_example
<div class="secondary progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 25%"></div>
</div>

<div class="success progress">
  <div class="progress-meter" style="width: 50%"></div>
</div>

<div class="warning progress">
  <div class="progress-meter" style="width: 50%"></div>
</div>

<div class="alert progress">
  <div class="progress-meter" style="width: 75%"></div>
</div>
```

---

## With Text

You can add text inside the meter of a progress bar. Make sure the text you use in the meter is also used in the `aria-valuetext` attribute.

```html_example
<div class="progress" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
  <span class="progress-meter" style="width: 25%">
    <p class="progress-meter-text">25%</p>
  </span>
</div>
```



# Slider
<p class="lead">This handy lil slider is perfect for setting specific values within a range.</p>


## Basics

Create a slider by adding the class `.slider` and the attribute `data-slider` to a container element. You should also define both a starting and maximum value for the slider.

Inside the container are three elements:
- The handle (`.slider-handle`), which the user drags.
- The fill (`.slider-fill`), which resizes dynamically based on where the handle is.
- A hidden `<input>`, which is where the value of the slider is stored.

```html_example
<div class="slider" data-slider data-initial-start="50" data-end="200">
  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <input type="hidden">
</div>
```

---

## Vertical

To get *vertical*, just add a `.vertical` class and `data-vertical="true"` the slider.

```html_example
<div class="slider vertical" data-slider data-initial-start="25" data-end="200" data-vertical="true">
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <input type="hidden">
</div>
```

---

## Disabled

Add the class `.disabled` to disable interaction with the slider.

```html_example
<div class="slider disabled" data-slider data-initial-start="78">
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <input type="hidden">
</div>
```

---

## Two Handles

Two-handle sliders can be used to define a range of values, versus a single value. To make a two-handle slider, add a second handle, and a second `<input>`. This works with horizontal and vertical sliders.

You can add IDs to the `<input>`s inside the sliders to make it easier to access the values. If you don't, the plugin will add an ID to each for you.

Note that the first handle manipulates the first `<input>`, while the second handle manipulates the second `<input>`.

```html_example
<div class="slider" data-slider data-initial-start="25" data-initial-end="75">
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <input type="hidden">
  <input type="hidden">
</div>
```

---

## Data Binding

Data binding allows you to connect the slider to an external `<input>` field. With data binding set up, dragging the handle will change the value inside the text field, and editing the number in the text field will move the slider in real-time.

To set it all up, create an `<input>` with an ID and add `aria-controls="id"` to the slider handle, where `id` is the ID of the `<input>`.

```html_example
<div class="small-10 columns">
  <div class="slider" data-slider data-initial-start="50">
    <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput1"></span>
    <span class="slider-fill" data-slider-fill></span>
  </div>
</div>
<div class="small-2 columns">
  <input type="number" id="sliderOutput1">
</div>
```

---

Or with a step size:

```html_example
<div class="small-10 columns">
  <div class="slider" data-slider data-initial-start="50" data-step="5">
    <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput2"></span>
    <span class="slider-fill" data-slider-fill></span>
  </div>
</div>
<div class="small-2 columns">
  <input type="number" id="sliderOutput2">
</div>
```
---

## Native Range Slider

In Foundation 6.2, we introduced styles for `<input type="range">`, the native HTML element for range sliders. It's not supported in every browser, namely IE9 and some older mobile browsers. [View browser support for the range input type.](http://caniuse.com/#feat=input-range)

```html_example
<input type="range" min="1" max="100" step="1">
```

If you're using the Sass version of Foundation, add this line to your main Sass file:

```scss
@include foundation-range-input;
```

It's possible to use both the JavaScript slider and the native slider in the same codebase, as the CSS selectors used don't overlap. Here's what's different about the native slider:

- Less markup: just write `<input type="range">` and you're good.
- No JavaScript is needed, which guarantees it runs faster in most browsers.
- To disable the slider, add `disabled` as an attribute, instead of a class.
- No support for vertical orientation.
- No support for two handles.




# Switch

## Basics

Add the `.switch` class to an element to create a switch. Inside the switch, add an `<input type="checkbox">` with the class `.switch-input`. Next to that, create a `<label>` with the class `.switch-paddle`.

Give the `<input>` a unique ID and point the `<label>` to it with the `for` attribute. This makes the switch clickable.

<div class="primary callout">
  <p>Inside the switch label is screen reader-only text, which uses the <code>.show-for-sr</code> class to visually mask the text.</p>
</div>

<div class="callout warning">
  <p>Make sure the HTML of the switch goes in the order you see above&mdash;<code>&lt;input&gt;</code>, then <code>&lt;label&gt;</code></p>
</div>

```html_example
<div class="switch">
  <input class="switch-input" id="exampleSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-paddle" for="exampleSwitch">
    <span class="show-for-sr">Download Kittens</span>
  </label>
</div> 
```

---

## Radio Switch

You can also use `<input type="radio">` instead of `checkbox` to create a series of options.

```html_example
<div class="switch">
  <input class="switch-input" id="exampleRadioSwitch1" type="radio" checked name="testGroup">
  <label class="switch-paddle" for="exampleRadioSwitch1">
    <span class="show-for-sr">Bulbasaur</span>
  </label>
</div>
```

<div class="switch">
  <input class="switch-input" id="exampleRadioSwitch2" type="radio" name="testGroup">
  <label class="switch-paddle" for="exampleRadioSwitch2">
    <span class="show-for-sr">Charmander</span>
  </label>
</div> 

<div class="switch">
  <input class="switch-input" id="exampleRadioSwitch3" type="radio" name="testGroup">
  <label class="switch-paddle" for="exampleRadioSwitch3">
    <span class="show-for-sr">Squirtle</span>
  </label>
</div>

---

## Sizing Classes

Use the classes `.tiny`, `.small`, or `.large` to change the switch size.

```html_example
<div class="switch tiny">
  <input class="switch-input" id="tinySwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-paddle" for="tinySwitch">
    <span class="show-for-sr">Tiny Sandwiches Enabled</span>
  </label>
</div>

<div class="switch small">
  <input class="switch-input" id="smallSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-paddle" for="smallSwitch">
    <span class="show-for-sr">Small Portions Only</span>
  </label>
</div> 

<div class="switch large">
  <input class="switch-input" id="largeSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-paddle" for="largeSwitch">
    <span class="show-for-sr">Show Large Elephants</span>
  </label>
</div> 
```

---

## Inner Labels

You can place active and inactive text inside of a switch. The active text (`.switch-active`) only displays when the switch is on, and the inactive text (`.switch-inactive`) only displays when the switch is off.

Active/inactive text goes inside of the switch's `<label>`.

<div class="primary callout">
  <p>Depending on the length of the words you place inside the switch, you may need to fine-tune the <code>left</code> or <code>right</code> CSS properties of the text to get it positioned right.</p>
</div>

<div class="primary callout">
  <p>Add <code>aria-hidden="true"</code> to these labels to prevent AT from reading them.</p>
</div>

```html_example
<p>Do you like me?</p>
<div class="switch large">
  <input class="switch-input" id="yes-no" type="checkbox" name="exampleSwitch">
  <label class="switch-paddle" for="yes-no">
    <span class="show-for-sr">Do you like me?</span>
    <span class="switch-active" aria-hidden="true">Yes</span>
    <span class="switch-inactive" aria-hidden="true">No</span>
  </label>
</div>
```




# Tabs
<p class="pre">Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.</p>


## Basics

There are two pieces to a tabbed interface: the tabs themselves, and the content for each tab. The tabs are an element with the class `.tabs`, and each item has the class `.tabs-title`. Each tab contains a link to a tab. The `href` of each link should match the ID of a tab.

```html
<ul class="tabs" data-tabs id="example-tabs">
  <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
  <li class="tabs-title"><a href="#panel2">Tab 2</a></li>
</ul>
```

The tab content container has the class `.tabs-content`, while each section has the class `.tabs-panel`. Each content pane also has a unique ID, which is targeted by a link in the tabstrip.

```html
<div class="tabs-content" data-tabs-content="example-tabs">
  <div class="tabs-panel is-active" id="panel1">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </div>
  <div class="tabs-panel" id="panel2">
    <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
  </div>
</div>
```

Put it all together, and we get this:

<ul class="tabs" data-tabs id="example-tabs">
  <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
  <li class="tabs-title"><a href="#panel2">Tab 2</a></li>
  <li class="tabs-title"><a href="#panel3">Tab 3</a></li>
  <li class="tabs-title"><a href="#panel4">Tab 4</a></li>
  <li class="tabs-title"><a href="#panel5">Tab 5</a></li>
  <li class="tabs-title"><a href="#panel6">Tab 6</a></li>
</ul>

<div class="tabs-content" data-tabs-content="example-tabs">
  <div class="tabs-panel is-active" id="panel1">
    <p>one</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </div>
  <div class="tabs-panel" id="panel2">
    <p>two</p>
    <img class="thumbnail" src="assets/img/generic/rectangle-7.jpg">
  </div>
  <div class="tabs-panel" id="panel3">
    <p>three</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </div>
  <div class="tabs-panel" id="panel4">
    <p>four</p>
    <img class="thumbnail" src="assets/img/generic/rectangle-2.jpg">
  </div>
  <div class="tabs-panel" id="panel5">
    <p>five</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </div>
  <div class="tabs-panel" id="panel6">
    <p>six</p>
    <img class="thumbnail" src="assets/img/generic/rectangle-8.jpg">
  </div>
</div>

---

## Vertical Tabs

Add the `.vertical` class to a tabstrip to stack tabs vertically. You can also place the tabstrip and the tab contents in a grid to make them sit side-by-side.

```html_example
<div class="row collapse">
  <div class="medium-3 columns">
    <ul class="tabs vertical" id="example-vert-tabs" data-tabs>
      <li class="tabs-title is-active"><a href="#panel1v" aria-selected="true">Tab 1</a></li>
      <li class="tabs-title"><a href="#panel2v">Tab 2</a></li>
      <li class="tabs-title"><a href="#panel3v">Tab 3</a></li>
      <li class="tabs-title"><a href="#panel4v">Tab 4</a></li>
      <li class="tabs-title"><a href="#panel3v">Tab 5</a></li>
      <li class="tabs-title"><a href="#panel4v">Tab 6</a></li>
    </ul>
    </div>
    <div class="medium-9 columns">
    <div class="tabs-content vertical" data-tabs-content="example-vert-tabs">
      <div class="tabs-panel is-active" id="panel1v">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="tabs-panel" id="panel2v">
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
      </div>
      <div class="tabs-panel" id="panel3v">
        <img class="thumbnail" src="assets/img/generic/rectangle-3.jpg">
      </div>
      <div class="tabs-panel" id="panel4v">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="tabs-panel" id="panel5v">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="tabs-panel" id="panel6v">
        <img class="thumbnail" src="assets/img/generic/rectangle-5.jpg">
      </div>
    </div>
  </div>
</div>
```




# Tables
<p class="lead">Okay, they're not the sexiest things ever, but tables get the job done (for tabular data, of course). They have responsive modifiers to help solve some of your layout issues based on your tables needs.</p>


## Basics

No bells or whistles here, just a straight up table for all of your basic table needs.

```html_example
<table>
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
```

---

## Hover State

Need to spiff up the table just a tad? Just add the class `.hover` to lightly darken the table rows on hover.

```html
<table class="hover">
</table>
```

<table class="hover">
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>

---

## Stacked Table

To stack a table on small screens, add the class `.stack`.

```html
<table class="stack">
</table>
```

<table class="stack">
  <thead>
    <tr>
      <th>Cookies</th>
      <th>Taste</th>
      <th>Calories</th>
      <th>Overall</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chocolate Chip</td>
      <td>Tastey</td>
      <td>120cal</td>
      <td>7.5/10</td>
    </tr>
    <tr>
      <td>Snickerdoodle</td>
      <td>Delicious</td>
      <td>95cal</td>
      <td>8/10</td>
    </tr>
    <tr>
      <td>Oatmeal Raisin</td>
      <td>Superb</td>
      <td>10cal</td>
      <td>11/10</td>
    </tr>
  </tbody>
</table>

---

## Scrolling Table

Got a lot of tubular tabular data? Add a wrapper element with the class `.table-scroll` around your table to enable horizontal scrolling.

<div class="primary callout">
  <p>The wrapping element was added in Foundation 6.2&mdash;prior to that, you just added the class <code>.scroll</code> to the table itself. However, this method doesn't work great with Internet Explorer 9. <strong>If you don't need IE9 support, you can just add <code>.scroll</code> to your table, and the wrapping element isn't necessary.</strong>
</div>

```html
<div class="table-scroll">
  <table></table>
</div>
```

<div class="table-scroll">
  <table>
    <thead>
      <tr>
        <th>This is the description!</th>
        <th>One</th>
        <th>Two</th>
        <th>Three</th>
        <th>Four</th>
        <th>Five</th>
        <th>Six</th>
        <th>Seven</th>
        <th>Eight</th>
        <th>Nine</th>
        <th>Ten</th>
        <th>Eleven</th>
        <th>Twelve</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="display:block; width:400px;">These are all the words that people use to describe Foundation 6!</td>
        <td>Cool</td>
        <td>Swag</td>
        <td>Chill</td>
        <td>Killer</td>
        <td>Rad</td>
        <td>Baller</td>
        <td>OMG</td>
        <td>Sweet</td>
        <td>Awesome</td>
        <td>Beast</td>
        <td>Dope</td>
        <td>Tubular</td>
      </tr>
      <tr>
        <td>These are some words that people use to describe other web frameworks.</td>
        <td>Whatevs</td>
        <td>Ugh.</td>
        <td>LOL</td>
        <td>K</td>
        <td>Aight</td>
        <td>Eh.</td>
        <td>Grrr...</td>
        <td>Meh.</td>
        <td>TTYL</td>
        <td>Bleh.</td>
        <td>Really?</td>
        <td>Why?</td>
      </tr>
      <tr>
        <td>Here are some great super heros.</td>
        <td>Batman</td>
        <td>Superman</td>
        <td>Spiderman</td>
        <td>Wonder Woman</td>
        <td>Hulk</td>
        <td>Nicolas Cage</td>
        <td>Antman</td>
        <td>Aquaman</td>
        <td>Captain America</td>
        <td>Wolverine</td>
        <td>Thor</td>
        <td>Iron Man</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Here's a footer, just in case</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</div>




# Animations

[Foundation's Motion UI](http://foundation.zurb.com/sites/docs/motion-ui.html) is a standalone library that powers the transition effects used in a number of Foundation components. 

<a href="http://foundation.zurb.com/sites/docs/motion-ui.html" class="button">Motion UI Documentation</a>