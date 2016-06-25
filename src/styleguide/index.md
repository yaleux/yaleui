# The Grid

<p class="lead">The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.</p>

---

## Basics

Start by adding an element with a class of `.row`. This will create a horizontal block to contain vertical columns. Then add elements with a `.column` class within that row. You can use `.column` or `.columns`&mdash;the only difference is grammar. Specify the widths of each column with the `.small-#`, `.medium-#`, and `.large-#` classes.

**Foundation is mobile-first.** Code for small screens first, and larger devices will inherit those styles. Customize for larger screens as necessary.

```html
<div class="row">
  <div class="small-2 large-4 columns"><!-- ... --></div>
  <div class="small-4 large-4 columns"><!-- ... --></div>
  <div class="small-6 large-4 columns"><!-- ... --></div>
</div>
<div class="row">
  <div class="large-3 columns"><!-- ... --></div>
  <div class="large-6 columns"><!-- ... --></div>
  <div class="large-3 columns"><!-- ... --></div>
</div>
<div class="row">
  <div class="small-6 large-2 columns"><!-- ... --></div>
  <div class="small-6 large-8 columns"><!-- ... --></div>
  <div class="small-12 large-2 columns"><!-- ... --></div>
</div>
<div class="row">
  <div class="small-3 columns"><!-- ... --></div>
  <div class="small-9 columns"><!-- ... --></div>
</div>
<div class="row">
  <div class="large-4 columns"><!-- ... --></div>
  <div class="large-8 columns"><!-- ... --></div>
</div>
<div class="row">
  <div class="small-6 large-5 columns"><!-- ... --></div>
  <div class="small-6 large-7 columns"><!-- ... --></div>
</div>
<div class="row">
  <div class="large-6 columns"><!-- ... --></div>
  <div class="large-6 columns"><!-- ... --></div>
</div>
```

<div class="row display">
  <div class="small-2 large-4 columns"><span class="hide-for-large">2</span><span class="show-for-large">4</span></div>
  <div class="small-4 large-4 columns">4</div>
  <div class="small-6 large-4 columns"><span class="hide-for-large">6</span><span class="show-for-large">4</span></div>
</div>
<div class="row display">
  <div class="large-3 columns"><span class="hide-for-large">full</span><span class="show-for-large">3</span></div>
  <div class="large-6 columns"><span class="hide-for-large">full</span><span class="show-for-large">6</span></div>
  <div class="large-3 columns"><span class="hide-for-large">full</span><span class="show-for-large">3</span></div>
</div>
<div class="row display">
  <div class="small-6 large-2 columns"><span class="hide-for-large">6</span><span class="show-for-large">2</span></div>
  <div class="small-6 large-8 columns"><span class="hide-for-large">6</span><span class="show-for-large">8</span></div>
  <div class="small-12 large-2 columns"><span class="hide-for-large">full</span><span class="show-for-large">2</span></div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9</div>
</div>
<div class="row display">
  <div class="large-4 columns"><span class="hide-for-large">full</span><span class="show-for-large">4</span></div>
  <div class="large-8 columns"><span class="hide-for-large">full</span><span class="show-for-large">8</span></div>
</div>
<div class="row display">
  <div class="small-6 large-5 columns"><span class="hide-for-large">6</span><span class="show-for-large">5</span></div>
  <div class="small-6 large-7 columns"><span class="hide-for-large">6</span><span class="show-for-large">7</span></div>
</div>
<div class="row display">
  <div class="large-6 columns"><span class="hide-for-large">full</span><span class="show-for-large">6</span></div>
  <div class="large-6 columns"><span class="hide-for-large">full</span><span class="show-for-large">6</span></div>
</div>

---

### Small Grids

Small grids expand to large screens easier than large grids cram into small screens.

```html
<div class="row">
  <div class="small-2 columns">2 <span class="hide-for-small-only">columns</span></div>
  <div class="small-10 columns">10 columns</div>
</div>
<div class="row">
  <div class="small-3 columns">3 columns</div>
  <div class="small-9 columns">9 columns</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2 columns</div>
  <div class="small-10 columns">10 columns</div>
</div>
<div class="row display">
  <div class="small-3 columns">3 columns</div>
  <div class="small-9 columns">9 columns</div>
</div>

---

### Medium Grid

Medium sized screens will inherit styles from small, unless you specify a different layout using the medium grid classes.

```html
<div class="row">
  <div class="medium-2 columns">2 columns</div>
  <div class="medium-10 columns">10 columns</div>
</div>
<div class="row">
  <div class="medium-3 columns">3 columns</div>
  <div class="medium-9 columns">9 columns</div>
</div>
```

<div class="row display">
  <div class="medium-2 columns">2 columns</div>
  <div class="medium-10 columns">10 columns</div>
</div>
<div class="row display">
  <div class="medium-3 columns">3 columns</div>
  <div class="medium-9 columns">9 columns</div>
</div>

---

## Advanced

### Combined Column/Row

If you need a full-width column to use as a container, put the `.column` and `.row` classes on the same element. You can still nest more grids inside this container like usual.

<div class="warning callout">
  <p>Column rows can use sizing classes like <code>.small-8</code>, but only when used as a top-level container&mdash;not when nested inside another row.</p>
</div>

```html
<div class="column row">
  Row column
</div>
```

<div class="column row display">
  Row column
</div>

---

### Fluid Row

Normally, a row is always 1200 pixels wide. Make a row completely fluid by adding the `.expanded` class.

```html
<div class="expanded row">
</div>
```

---

### Nesting

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

### Offsets

Move blocks up to 11 columns to the right by using classes like `.large-offset-1` and `.small-offset-3`.

```html
<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-11 columns">11</div>
</div>
<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-10 large-offset-1 columns">10, offset 1</div>
</div>
<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-9 large-offset-2 columns">9, offset 2</div>
</div>
<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-8 large-offset-3 columns">8, offset 3</div>
</div>
```

<div class="row display">
  <div class="large-1 columns">1</div>
  <div class="large-11 columns">11</div>
</div>
<div class="row display">
  <div class="large-1 columns">1</div>
  <div class="large-10 large-offset-1 columns">10, offset 1</div>
</div>
<div class="row display">
  <div class="large-1 columns">1</div>
  <div class="large-9 large-offset-2 columns">9, offset 2</div>
</div>
<div class="row display">
  <div class="large-1 columns">1</div>
  <div class="large-8 large-offset-3 columns">8, offset 3</div>
</div>

---

### Incomplete Rows

In order to work around browsers' different rounding behaviors, Foundation will float the last column in a row to the right so the edge aligns. If your row doesn't have a count that adds up to 12 columns, you can tag the last column with a class of `.end` in order to override that behavior.

```html
<div class="row">
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns">3</div>
</div>
<div class="row">
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns end">3 end</div>
</div>
```

<div class="row display-end">
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns">3</div>
</div>
<div class="row display-end">
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns">3</div>
  <div class="medium-3 columns end">3 end</div>
</div>

---

### Gutters

The grid *gutter*&mdash;the space between two columns in a row, and the space between the edge of a grid and the edge of the page&mdash;is responsive, and becomes wider on larger screens.

Breakpoint | Gutter Size
-----------|------------
`small`    | 20px
`medium`   | 30px

---

### Collapse/Uncollapse Rows

The `.collapse` class lets you remove column gutters (padding).

There are times when you won't want each media query to be collapsed or uncollapsed. In this case, use the media query size you want and collapse or uncollapse and add that to your row element. Example shows no gutter at small media size and then adds the gutter to columns at medium.

```html
<div class="row medium-uncollapse large-collapse">
  <div class="small-6 columns">
    Removes gutter at large media query
  </div>
  <div class="small-6 columns">
    Removes gutter at large media query
  </div>
</div>
```

<p class="lead">Scale the browser down to a medium size to see the difference.</p>

<div class="row medium-uncollapse large-collapse">
  <div class="small-6 columns">
    <div class="callout secondary">
      <p class="show-for-small-only">On a small screen, I have gutters!</p>
      <p class="show-for-medium-only">On a medium screen, I have gutters!</p>
      <p class="show-for-large">On a large screen, I have no gutters!</p>
    </div>
  </div>
  <div class="small-6 columns">
    <div class="callout secondary">
      <p class="show-for-small-only">On a small screen, I have gutters!</p>
      <p class="show-for-medium-only">On a medium screen, I have gutters!</p>
      <p class="show-for-large">On a large screen, I have no gutters!</p>
    </div>
  </div>
</div>

---

### Centered Columns

Center your columns by adding a class of `.small-centered` to your column. Large will inherit small centering by default, but you can also center solely on large by applying a `.large-centered` class. To uncenter on large screens, use `.large-uncentered`.

```html
<div class="row">
  <div class="small-3 small-centered columns">3 centered</div>
</div>
<div class="row">
  <div class="small-6 large-centered columns">6 centered</div>
</div>
<div class="row">
  <div class="small-9 small-centered large-uncentered columns">9 centered</div>
</div>
<div class="row">
  <div class="small-11 small-centered columns">11 centered</div>
</div>
```

<div class="row display">
  <div class="small-3 small-centered columns">3 centered</div>
</div>
<div class="row display">
  <div class="small-6 large-centered columns">6 centered, large</div>
</div>
<div class="row display">
  <div class="small-9 small-centered large-uncentered columns">9 centered small</div>
</div>
<div class="row display">
  <div class="small-11 small-centered columns">11 centered</div>
</div>

---

### Source Ordering

Using these source ordering classes, you can shift columns around between our breakpoints. This means if you place sub-navigation below main content on small displays, you have the option to position the sub-navigation on either the left or right of the page for large displays. Prefix push/pull with the size of the device you want to apply the styles to. `.medium-push-#`, `.large-push-#` is the syntax you'll use. Use the number 0 instead to reset a push/pull, such as `.medium-push-0` or `.large-pull-0`.

```html
<div class="row">
  <div class="small-10 small-push-2 columns">10</div>
  <div class="small-2 small-pull-10 columns">2, last</div>
</div>
<div class="row">
  <div class="large-9 large-push-3 columns">9</div>
  <div class="large-3 large-pull-9 columns">3, last</div>
</div>
<div class="row">
  <div class="large-8 large-push-4 columns">8</div>
  <div class="large-4 large-pull-8 columns">4, last</div>
</div>
<div class="row">
  <div class="small-5 small-push-7 medium-7 medium-push-5 columns">7</div>
  <div class="small-7 small-pull-5 medium-5 medium-pull-7 columns">5, last</div>
</div>
<div class="row">
  <div class="medium-6 medium-push-6 columns">6</div>
  <div class="medium-6 medium-pull-6 columns">6, last</div>
</div>
```

<div class="row display">
  <div class="small-10 small-push-2 columns">10</div>
  <div class="small-2 small-pull-10 columns">2, last</div>
</div>
<div class="row display">
  <div class="large-9 large-push-3 columns">9</div>
  <div class="large-3 large-pull-9 columns">3, last</div>
</div>
<div class="row display">
  <div class="large-8 large-push-4 columns">8</div>
  <div class="large-4 large-pull-8 columns">4, last</div>
</div>
<div class="row display">
  <div class="small-5 small-push-7 medium-7 medium-push-5 columns">7</div>
  <div class="small-7 small-pull-5 medium-5 medium-pull-7 columns">5, last</div>
</div>
<div class="row display">
  <div class="medium-6 medium-push-6 columns">6</div>
  <div class="medium-6 medium-pull-6 columns">6, last</div>
</div>

---

### Block Grids

To create a block grid, add a class of the format `[size]-up-[n]` to change the size of all columns within the row. By default, the max number of columns you can use with block grid are 8.

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


## Blues

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #286DC0"></span>
      #286DC0
      <br> $marine
      <br> .primary
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #00356B"></span>
      #00356B
      <br> $yale-blue
      <br> .success
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #63AAFF"></span>
      #63AAFF
      <br> $blue-lt
    </div>
  </div>  
</div>

---

## Grays  

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #786f67"></span>
      #786f67
      <br> $medium-gray
      <br> .secondary
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #222222"></span>
      #222222
      <br> $black
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #4a4a4a"></span>
      #4a4a4a
      <br> $dark-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #DDDDDD"></span>
      #DDDDDD
      <br> $light-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #F9F9F9"></span>
      #F9F9F9
      <br> $off-white
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
      <br> .warning
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #AF1109"></span>
      #AF1109
      <br> .alert
    </div>
  </div>
</div>




# Typography

<p class="lead">This design uses Yale New for headings and Open Sans for paragraph text.</p>

---


## Paragraphs

```html_example 
<p>This is a paragraph. Paragraphs are preset with a
font size, line height and spacing to match the overall vertical
rhythm. To show what a paragraph looks like this needs a little more
content so, did you know that there are storms occurring on Jupiter
that are larger than the Earth? Pretty cool. Wrap strong around type
to <strong>make it bold!</strong>. You can also use em to
<em>italicize your words</em>.</p> 
```

<div class="callout primary">
  <p>If the emphasis of a phrase is important, don't make the emphasis purely visual&mdash;use the `<em>` or `<strong>` tags to mark it as well. Both of these tags have built-in styles, but there's no harm in adding additional styles in specific contexts.</p>
</div>

---

## Header

<div class="callout primary">
  <p>Avoid skipping heading levels when structuring your document, as it confuses screen readers. For example, after using an `h2` in your code, the next heading used should be either `h2` or `h3`. If you need a heading to look bigger or smaller to match a specific style, use CSS to override the default size.</p>
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

<div class="callout primary">
  <p>To make links screen reader-friendly, avoid using vague words like "here" or "read more" within link text. The text of the link itself should adequately describe where the link goes.</p>
</div>


```html_example
<p>Links are very standard, and the color is preset to the <a href="#colors">primary color</a>.</p>
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
Remember to escape angle brackets when printing HTML: `div`
```

---

## Keystrokes

Use the `<kbd>` element to annotate a key stroke or combination.

```html_example
<p>Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows) to play Half-Life 3.</p>
```

---

## Text Accessibility

Text is core to the content of your page, so making it accessible to everyone is important. Here are some general guidelines to follow.

It's best practice to avoid line lengths of fewer than 50 characters or greater than 120 characters. Line lengths of 80 characters are ideal.

Avoid `del`, `s`, and `ins` tags, as screen readers do not alert the user at all that text contained within these tags are special. Some but not all screen readers will give special emphasis to text contained within `em` and `strong` tags.

Avoid styling non-link text with underlines. Some readers will mistake underlined texts for links, and may become confused and try to click on the unerlined text. Also, avoid styling test with to blink, scroll, or have a line through it.


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




# Navigation
<p class="lead">Yale's UI Style Guide uses Foundation's builded patterns. Foundations is bundled with many simple navigation patterns, which can be combined to form more complex, robust responsive navigation solutions.</p>

<div class="callout warning">
<a href="./examples/header-footer.html">
Take a look at our **Yale Header &amp; Footer Example**, which contains sample code for a Yale Header, Top-Bar Menu with Search, and Footer.
</a>
</div>

## Basics: Menu

The Menu is an all-purpose navigation component. It can be aligned horizontally or vertically, can be nested, and supports icons. [Learn more about the Menu.](http://foundation.zurb.com/sites/docs/menu.html)

All menus use the `ul > li > a` pattern. The markup is a little strict, but this makes it easy to attach a navigation plugin to any menu, as you'll see below.

Here's a basic Menu.

```html_example
<nav role="navigation" aria-labelledby="main-menu-heading">
  <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
  <ul class="menu">
    <li class="active"><a href="#">Item One</a></li>
    <li><a href="#">Item Two</a></li>
    <li><a href="#">Item Three</a></li>
  </ul>
</nav>
```

---

To nest menus, add a new `<ul>` inside of an `<li>`, *after* the `<a>` inside.

```html
<nav role="navigation" aria-labelledby="main-menu-heading">
  <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
  <ul class="menu">
    <li>
      <a href="#">Item One</a>
      <ul class="menu">
        <li><a href="#">Item One-one</a></li>
      </ul>
    </li>
    <li><a href="#">Item Two</a></li>
    <li><a href="#">Item Three</a></li>
  </ul>
</nav>
```

---

## Top Bar

Top bar is a simple wrapper around these menu patterns. It supports a left-hand and right-hand section, which collapse on top of each other on small screens. [Learn more about the top bar.](http://foundation.zurb.com/sites/docs/top-bar.html)

<div class="top-bar">
  <div class="top-bar-left">
    <nav role="navigation" aria-labelledby="main-menu-heading">
      <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
      <ul class="dropdown menu" data-dropdown-menu>
        <li class="menu-text">Site Title</li>
        <li><a href="#">One</a></li>
        <li><a href="#">Two</a></li>
        <li><a href="#">Three</a></li>
      </ul>
    </nav>
  </div>
  <div class="top-bar-right">
    <ul role="search" class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><button type="button" class="button">Search</button></li>
    </ul>
  </div>
</div>

---

## Menu Plugins

The basic Menu can be enhanced with one of three **Menu plugins**. All three use the exact same markup to create a different style of multi-tier navigation.

### Dropdown Menu

The dropdown menu plugin (`data-dropdown-menu`) converts a nested menu into a series of dropdown menus. The nested menus can be opened through hover, click, or keyboard. [Learn more about the dropdown menu.](http://foundation.zurb.com/sites/docs/dropdown-menu.html)

<nav role="navigation" aria-labelledby="main-menu-heading">
  <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
  <ul class="dropdown menu" data-dropdown-menu>
    <li class="has-submenu">
      <a>Item 1</a>
      <ul class="submenu menu" data-submenu>
        <li><a href="#">Item 1A Loooong</a></li>
        <li class="has-submenu">
          <a href="#"> Item 1 sub</a>
          <ul class="submenu menu" data-submenu>
            <li><a href="#">Item 1 subA</a></li>
            <li><a href="#">Item 1 subB</a></li>
            <li class="has-submenu">
              <a href="#"> Item 1 sub</a>
              <ul class="submenu menu" data-submenu>
                <li><a href="#">Item 1 subA</a></li>
                <li><a href="#">Item 1 subB</a></li>
              </ul>
            </li>
            <li class="has-submenu">
              <a href="#">Item 1 sub</a>
              <ul class="submenu menu" data-submenu>
                <li><a href="#">Item 1 subA</a></li>
                <li><a href="#">Item 1 subB</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#">Item 1B</a></li>
      </ul>
    </li>
    <li class="has-submenu">
      <a href="#">Item 2</a>
      <ul class="submenu menu" data-submenu>
        <li><a href="#">Item 2A</a></li>
        <li><a href="#">Item 2B</a></li>
      </ul>
    </li>
    <li class="has-submenu">
      <a href="#">Item 3</a>
      <ul class="submenu menu" data-submenu>
        <li><a href="#">Item 3A</a></li>
        <li><a href="#">Item 3B</a></li>
      </ul>
    </li>
    <li><a href="#">Item 4</a></li>
  </ul>
</nav>

---


### Drilldown Menu

The drilldown menu plugin (`data-drilldown`) converts a nested menu into a series of sliding menus. Clicking an item slides the next level menu into view. [Learn more about the drilldown menu.](drilldown-menu.html)

<nav role="navigation" aria-labelledby="main-menu-heading">
  <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
  <ul class="vertical menu" data-drilldown style="width: 300px;" id="m1">
    <li class="has-submenu">
      <a href="#">Item 1</a>
      <ul class="vertical menu" data-submenu id="m2">
        <li class="has-submenu">
          <a href="#">Item 1A</a>
          <ul class="vertical menu" data-submenu id="m3">
            <li><a href="#">Item 1Aa</a></li>
            <li><a href="#">Item 1Ba</a></li>
            <li><a href="#">Item 1Ca</a></li>
            <li><a href="#">Item 1Da</a></li>
            <li><a href="#">Item 1Ea</a></li>
          </ul>
        </li>
        <li><a href="#">Item 1B</a></li>
        <li><a href="#">Item 1C</a></li>
        <li><a href="#">Item 1D</a></li>
        <li><a href="#">Item 1E</a></li>
      </ul>
    </li>
    <li class="has-submenu">
      <a href="#">Item 2</a>
      <ul class="vertical menu" data-submenu>
        <li><a href="#">Item 2A</a></li>
        <li><a href="#">Item 2B</a></li>
        <li><a href="#">Item 2C</a></li>
        <li><a href="#">Item 2D</a></li>
        <li><a href="#">Item 2E</a></li>
      </ul>
    </li>
    <li class="has-submenu">
      <a href="#">Item 3</a>
      <ul class="vertical menu" data-submenu>
        <li><a href="#">Item 3A</a></li>
        <li><a href="#">Item 3B</a></li>
        <li><a href="#">Item 3C</a></li>
        <li><a href="#">Item 3D</a></li>
        <li><a href="#">Item 3E</a></li>
      </ul>
    </li>
    <li><a href="#"> Item 4</a></li>
  </ul>
</nav>


---

### Accordion Menu

The accordion menu plugin (`data-accordion-menu`) converts a nested menu into a series of collapsed accordions. Clicking an item slides down the nested menu. [Learn more about the accordion menu.](accordion-menu.html)

<nav role="navigation" aria-labelledby="main-menu-heading">
  <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
  <ul class="vertical menu" data-accordion-menu>
    <li class="has-submenu">
      <a href="#">Item 1</a>
      <ul class="menu vertical nested is-active" data-submenu>
        <li class="has-submenu">
          <a href="#">Item 1A</a>
          <ul class="menu vertical nested" data-submenu>
            <li><a href="#">Item 1Ai</a></li>
            <li><a href="#">Item 1Aii</a></li>
            <li><a href="#">Item 1Aiii</a></li>
          </ul>
        </li>
        <li><a href="#">Item 1B</a></li>
        <li><a href="#">Item 1C</a></li>
      </ul>
    </li>
    <li class="has-submenu">
      <a href="#">Item 2</a>
      <ul class="menu vertical nested" data-submenu>
        <li><a href="#">Item 2A</a></li>
        <li><a href="#">Item 2B</a></li>
      </ul>
    </li>
    <li><a href="#">Item 3</a></li>
  </ul>
</nav>

---

## Responsive Navigation

Each of the above three patterns has a use in a specific context. But some patterns only work at certain screen sizes. For example, dropdown menus don't work as well on smaller screens, but the same navigation items might work better as a drilldown or an accordion menu at that screen size.

Our responsive menu plugin (`data-responsive-menu`) allows you to take a Menu, and assign different navigation patterns to it at different screen sizes. In the below example, a drilldown menu changes to a dropdown menu at larger screen sizes. [Learn more about the responsive Menu plugin.](responsive-navigation.html#responsive-menu)

<nav role="navigation" aria-labelledby="main-menu-heading">
  <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
  <ul class="vertical menu" data-responsive-menu="drilldown medium-dropdown" style="width: 300px;">
    <li class="has-submenu">
      <a href="#">Item 1</a>
      <ul class="vertical submenu menu" data-submenu id="m2">
        <li class="has-submenu">
          <a href="#">Item 1A</a>
          <ul class="vertical submenu menu" data-submenu id="m3">
            <li><a href="#">Item 1A</a></li>
            <li><a href="#">Item 1B</a></li>
            <li><a href="#">Item 1C</a></li>
            <li><a href="#">Item 1D</a></li>
            <li><a href="#">Item 1E</a></li>
          </ul>
        </li>
        <li><a href="#">Item 1B</a></li>
      </ul>
    </li>
    <li class="has-submenu">
      <a href="#">Item 2</a>
      <ul class="vertical submenu menu" data-submenu>
        <li><a href="#">Item 2A</a></li>
        <li><a href="#">Item 2B</a></li>
      </ul>
    </li>
    <li class="has-submenu">
      <a href="#">Item 3</a>
      <ul class="vertical submenu menu" data-submenu>
        <li><a href="#">Item 3A</a></li>
        <li><a href="#">Item 3B</a></li>
      </ul>
    </li>
  </ul>
</nav>

---

In other situations, you may wish to always display a menu on a larger screen, but hide that same menu behind a click toggle on smaller screens. You can do this with the responsive toggle plugin (`data-responsive-toggle`). This plugin works with any container, not just a menu. [Learn more about the responsive toggle plugin.](responsive-navigation.html#responsive-toggle)

To see the below example in action, scale your browser down. The top bar will be replaced by a smaller title bar. Clicking the icon inside the title bar reveals the top bar.

<div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
  <button class="menu-icon" type="button" data-toggle></button>
  <div class="title-bar-title">Menu</div>
</div>

<div class="top-bar" id="example-menu">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Site Title</li>
      <li class="has-submenu">
        <a href="#">One</a>
        <ul class="submenu menu vertical" data-submenu>
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
  <div class="top-bar-right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><button type="button" class="button">Search</button></li>
    </ul>
  </div>
</div>

---

## Sticky Navigation

See the documentation for the [Sticky](http://foundation.zurb.com/sites/docs/sticky.html#sticky-navigation) plugin to see how to easily make a sticky nav bar.

---

## Menu Accessibility

Menus should be wrapped in a `nav` element to make it easier for screen readers to quickly move to the menu. `nav` elements also benefit from having an ARIA label associated with them. One way of providing an ARIA label is to use an `aria-label` attribute.


Menus also benefit from approprite headings being included within the containing `nav` element. The heading can be visually hidden using the `show-for-sr` class, so that it is only visible to screen readers. Headings can be used as ARIA labels for `nav` elements by giving the heading an `id` attribute and giving the `nav` an `aria-labelledby` attribute whose value equals the value of the heading's `id` attribute.

```html_example
<nav role="navigation" aria-labelledby="main-menu-heading">
  <h2 id="main-menu-heading" class="show-for-sr">Main Menu</h2>
    <ul class="menu">
      <li><a href="#">Item One</a></li>
      <li><a href="#">Item Two</a></li>
      <li><a href="#">Item Three</a></li>
    </ul>
</nav>
```



# Buttons & Links

<p class="lead">Buttons are tied to an **action** of some kind.</p>

It is best to use the `button` or `input type="button"` elements for buttons. These elements have ineractivity and accessibility features built in automatically. When using other elements (e.g. `div` and `li`, functionality such as focus, mouse interaction, and keyboard interaction must be added manually or interaction is inaccessible.
        
One common practice is to use `a` elements instead of `button` elements for styling purposes. That approach is not necessary in the Yale UI framework. It is still best to reserve use of `a` tags for links, and to use `button` or `input type="button"` elements for buttons. Visual appearance can be controlled through CSS and selecting appropriate classes; visual appearance should not influence tag selection.


---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<button class="primary large button">Large button</button>
<button class="primary button">Regular button</button>
<button class="primary small button">Small button</button>
<button class="primary tiny button">Tiny button</button>
```

```html_example
<button class="primary large hollow button">Large button</button>
<button class="primary hollow button">Regular button</button>
<button class="primary small hollow button">Small button</button>
<button class="primary tiny hollow button">Tiny button</button>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<button class="secondary large button">Large button</button>
<button class="secondary button">Regular button</button>
<button class="secondary small button">Small button</button>
<button class="secondary tiny button">Tiny button</button>
```

```html_example
<button  class="secondary large hollow button">Large button</button>
<button  class="secondary hollow button">Regular button</button>
<button  class="secondary small hollow button">Small button</button>
<button  class="secondary tiny hollow button">Tiny button</button>
```

---

## Button Accessibility

It is best to use the `button` or `input type="button"` elements for buttons. These elements have ineractivity and accessibility features built in automatically. 

When using other elements (e.g. `div` and `li`), important functionality such as focus, mouse interaction, and keyboard interaction must be added manually. If the interaction is not added manually, then it will be inaccessible.

One common practice is to use `a` elements instead of `button` elements for styling purposes. **That approach is not necessary with Yale UI.** It is still best to reserve use of `a` tags for links, and to use `button` or `input type="button"` elements for buttons. Visual appearance can be controlled through CSS and selecting appropriate classes; visual appearance should not influence tag selection.

```html_example
<!-- This is best -->
<button class="primary button">Best</button>
<input type="button" class="primary button" value="Also Best" />

<!-- This is acceptable but discouraged -->
<a href="#" class="primary button">Discouraged</a>

<!-- This must be avoided -->
<div class="primary button">Avoid</div>
```


<div class="callout primary">
    <strong>Note:</strong> It is approprite to use `a` elements with `class="button"` if the objective is to create a link that visually resembles a button. An element's **purpose** and **desired visual appearance*** are completely separate concerns.
</div>


```html_example
<!-- This is discouraged -->
<a href="#" class="primary button" onclick="doInteraction()" >Discouraged</a>

<!-- This is appropriate -->
<a href="someurl.com" class="primary button" >Appropriate</a>
```



# Button Groups

<p class="lead">Button groups are containers for related action items. They're great when you need to display a group of actions in a bar. These build off the button styles and work perfectly with the grid.</p>

---

## Basics

Add the `.button-group` class to a container, and inside it place any number of buttons. The buttons are separated by a small border.

```html_example
<div role="group" class="button-group">
  <button class="button">One</button>
  <button class="button">Two</button>
  <button class="button">Three</button>
</div>
```

---

## Sizing

Button groups can be sized with the same classes as standard buttons: `.tiny`, `.small`, and `.large`.

```html_example
<div role="group" class="small button-group">
  <button class="button">Small</button>
  <button class="button">Button</button>
  <button class="button">Group</button>
</div>
```

---

## Coloring

Buttons within a button group can be colored individually with the `.secondary`, `.success`, `.warning`, and `.alert` classes.

```html_example
<div role="group" class="button-group">
  <button class="secondary button">View</button>
  <button class="success button">Edit</button>
  <button class="warning button">Share</button>
  <button class="alert button">Delete</button>
</div>
```

The entire group can also be colored using the same classes.

```html_example
<div role="group" class="hollow secondary button-group">
  <button class="button">Harder</button>
  <button class="button">Better</button>
  <button class="button">Faster</button>
  <button class="button">Stronger</button>
</div>
```

---


## Even-width Group

Add the `.expanded` class to the container to make a full-width button group. Each item will automatically size itself based on how many buttons there are, up to a maximum of six.

```html_example
<div role="group" class="expanded button-group">
  <button class="button">Expanded</button>
  <button class="button">Button</button>
  <button class="button">Group</button>
</div>
```

---

## Stacking

A button group can be made vertical with the `.stacked` class. You can also use `.stacked-for-small` to only stack a button group on small screens, or `.stacked-for-medium` to only stack on small and medium screens.

```html_example
<div role="group" class="stacked-for-small button-group">
  <button class="button">How</button>
  <button class="button">Low</button>
  <button class="button">Can</button>
  <button class="button">You</button>
  <button class="button">Go</button>
</div>
```

---

## Split Buttons

To build a split button, just create a button group with two buttons.

To create a button with only an arrow, add the class `.arrow-only`. Note that the button still needs a label for screen readers, which can be embedded inside the button with a `.show-for-sr` element. In the example below, an assistive device will read the arrow button as "Show menu".

```html_example
<div role="group" class="button-group">
  <button class="button">Primary Action</button>
  <button class="dropdown button arrow-only">
    <span class="show-for-sr">Show menu</span>
  </button>
</div>
```

---

## Button Group Accessibility

Button groups should be given and ARIA role of "group" by adding the `role="group"` attribute to the container. 

Accessibility requires that a a user interface purpose be clear. That purpose can be communicated by using ARIA labels or by associating descriptions with the button container. These labels and descriptions may be visually hidden so long as they are accessible by screen readers.

```html_example 
<div role="group" class="button-group" aria-labelledby="group-label" 
aria-describedby="group-description">   
  <h3 id="group-label" class="show-for-sr">Change widget amount</h3>   
  <span id="group-label" class="show-for-sr">These buttons increase or 
  decrease the amount of widgets in the widget collection.</span>   
  <button class="button">Increase</button>   
  <button class="button">Decrease</button> 
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
<nav aria-labelledby="breadcrumbs-label" role="navigation">
    <h2 id="breadcrumbs-label" class="show-for-sr" >You are here:</h2>
    <ul class="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li class="disabled">Gene Splicing</li>
        <li>
            <span class="show-for-sr">Current: </span>Cloning
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
  <p>Note that the `ul` goes <em>after</em> the `a`, and not inside of it.</p>
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


## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Accessibility

### Labelling Basics
For each control on a form, there must be a label providing information about the control's purpose. This is generally using a `label` element. Form labels provide a number of accessibility benefits. When clicking on a control's `label` element, focus will be applied to the control, thus increasing the size of the clickable area. Also, assistive technology can read the label each form control a blind user interacts with the control.
Form labels can be marked up in one of two ways:
<ol>
  <li>Setting the `for` attribute of the `label` equal to the `id` attribute of the form control being labelled.</li>
  <li>Wrapping the form control within its label.</li>
</ol>
<div class="callout warning">
  While the `placeholder` attribute may be used, it is never a substitute for a `label` element.
</div>

```html_example
<label for="sample-form-control">Form Control</label>
<input type="text" id="sample-form-control" />

<label>Form Control<input type="text" /></label>
```


<div class="callout warning">
  When adding labels to form elements, each `label` element must be associated to exactly one form control, and each form control must have exactly one label.
  `label` elements can <strong>only</strong> be associated with form controls. Associating `label` elements with other elements can create accessibility problems.
</div>

```html_example
<div class="callout alert">

<!-- The following is incorrect because it associates a label element with a div -->
  <label for="form-control-container">Inaccessible Form Label (! Don't do this)</label>
  <div id="form-control-container">
    <input type="text" id="form-control" />
  </div>

</div>
```
---

### Self-Labelling Form Controls

In general, buttons do not require `label` elements. For `button` elements, the text contained within the opening and closing tags functions as a label. For `input type="button"` and `input type="submit"` elements, provde a `value` attribute in lieu of a label.

```html_example
<button>Button</button>
<input type="button" value="Button" />
<input type="submit" value="Submit" />
```

<br>

```html_example
<button class="button primary">Button</button>
<input class="button primary" type="button" value="Button" />
<input class="button primary" type="submit" value="Submit" />
```

---
### Fieldsets
In long forms, groups of fields with a common purpose should be grouped together in a `fieldset` wrapper. Within the `fieldset`, include a `legend` element describing the purpose of the fieldset. Nesting fieldsets should be avoided.

```html_example
  <fieldset class="fieldset">
    <legend>List Your Hobbies</legend>
    <label>Hobby 1<input type="text"></label>
    <label>Hobby 2<input type="text"></label>
    <label>Hobby 3<input type="text"></label>
    <label>Hobby 4<input type="text"></label>
  </fieldset>
```
---
### Checkboxes and Radio Buttons
Checkboxes and radio buttons should generally be wrapped in a `fieldset` and have a `legend` describe the purpose of the controls. This is the semantically correct way to mark up these elements, and assistive technology handles such markup well. Omitting those elements often leads to accessibility errors, even if the form controls are described in other ways.

```html_example
<fieldset class="fieldset">
  <legend>What is your favorite Ivy League school?</legend>
  <label><input type="radio" name="ivy">Brown</label>
  <label><input type="radio" name="ivy">Columbia</label>
  <label><input type="radio" name="ivy">Cornell</label>
  <label><input type="radio" name="ivy">Dartmouth</label>
  <label class="disabled" ><input type="radio" name="ivy" disabled>Harvard</label>
  <label><input type="radio" name="ivy">Penn</label>
  <label><input type="radio" name="ivy">Princeton</label>
  <label><input type="radio" name="ivy">Yale</label>
</fieldset>

<fieldset class="fieldset">
  <legend>What is your Yale affiliation?</legend>
  <label><input type="checkbox" name="affiliation">Undergraduate</label>
  <label><input type="checkbox" name="affiliation">Graduate Student</label>
  <label><input type="checkbox" name="affiliation">Alumni</label>
  <label><input type="checkbox" name="affiliation">Faculty</label>
  <label><input type="checkbox" name="affiliation">Staff</label>
</fieldset>
```
---

### Search Forms
For simple search forms, such as those appearing in the header of many websites, the `input` need not have a label if the search button has a label such as "search" or "submit search" AND the form has a `role="search"` ARIA attribute AND the search button is visually rendered adjacent to the text input. If the visual design calls for an icon or image for the search button (such as magnifying class) in stead of text, adding a span with the text "Search" and a `show-for-sr` class is desirable.

```html_example
<form role="search" aria-label="Site Search">
  <ul class="menu">
    <li><input type="search" placeholder="Search" /></li>
    <li><button type="button" class="small button">search</button></li>
  </ul>
</form>
```

---
### Labeling with ARIA
While using the `label` element is preferable, there may be cases where it is not possible. As a fallback, using ARIA labels (the attributes `aria-label` and `aria-labelledby`) is acceptable.




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
  <p>Make sure the HTML of the switch goes in the order you see above&mdash;`input`, then `label`</p>
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


## Basics

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

Add the class `.hover` to lightly darken the table rows on hover.

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

To stack a table on small screens, add the class `.stack`. To see the below example in action, scale your browser down. 


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

Add a wrapper element with the class `.table-scroll` around your table to enable horizontal scrolling.


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
        <td style="display:block; width:400px;">Nulla tempor sem a purus blandit, eu elementum massa sagittis. Proin tortor enim, suscipit sed magna.</td>
        <td>Nulla</td>
        <td>tempor</td>
        <td>sem</td>
        <td>purus</td>
        <td>blandit</td>
        <td>elementum</td>
        <td>massa</td>
        <td>sagittis</td>
        <td>Proin</td>
        <td>suscipit</td>
        <td>magna</td>
        <td>tortor</td>
      </tr>
      <tr>
        <td>Nulla tempor sem a purus blandit, eu elementum massa sagittis. Proin tortor enim, suscipit sed magna.</td>
        <td>Nulla</td>
        <td>tempor</td>
        <td>sem</td>
        <td>purus</td>
        <td>blandit</td>
        <td>elementum</td>
        <td>massa</td>
        <td>sagittis</td>
        <td>Proin</td>
        <td>suscipit</td>
        <td>magna</td>
        <td>tortor</td>
      </tr>
      <tr>
        <td>Nulla tempor sem a purus blandit, eu elementum massa sagittis. Proin tortor enim, suscipit sed magna.</td>
        <td>Nulla</td>
        <td>tempor</td>
        <td>sem</td>
        <td>purus</td>
        <td>blandit</td>
        <td>elementum</td>
        <td>massa</td>
        <td>sagittis</td>
        <td>Proin</td>
        <td>suscipit</td>
        <td>magna</td>
        <td>tortor</td>
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

---

## Table Accessibility

A comprehensive guide to tables can be found at the <a href="http://www.w3.org/WAI/tutorials/tables/">W3C Accessibility Tutorial for Tables</a>.

### Layout Tables vs. Data Tables
In the past, tables were used to achieve specific layouts, such as correctly aligning the content from multiple columns. We strongly discourage that approach: it is outdated; it violates separation of content and visual presentation, and it creates accessibiltiy problems. 

<div class="warning callout"> 
**Tables must be reserved only for presenting tabular data.**
</div>

### Captions and Summaries
The `caption` element functions as a title or heading for the title. It should be succinct and identify the content of hte table. Screen readers allow users to access a list of all tables on a page, and will also announce each table's `caption` element, if one is provided. Providing a `caption` element also allows screen reader users to decide whether they want to read or skip over a table. The `caption` element should be a child of the `table` element. In lieu of `caption` elements, ARIA labels can be used, as well.
Table summaries provides information about how a data table is structured. If a table is large or complex, captions can explain how rows and columns are related. In previous versions of HTML, a `summary` attribute existed for this purpose. In HTML5, the `summary` attribute is depricated. Summaries can be provided within the `caption` element or with an ARIA description by using the `aria-describedby` attribute.
Using `figure` and `figcaption` is also an appropriate way to provide table captions and summaries. However, when using `figure` and `figcaption`, ARIA labels and descriptions must also be used.

```html_example
<!-- Describing a table using a caption -->
<table class="stack">
  <caption>Degrees Conferred (July 1, 2014 - June 30, 2015)</caption>
  <thead>
    <tr>
      <th scope="col">Degree</th>
      <th scope="col">Men</th>
      <th scope="col">Women</th>
      <th scope="col">Total</th>
      <th scope="col">% who are international</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bachelors</th>
      <td>677</th>
      <td>650</th>
      <td>1327</th>
      <td>10%</th>
    </tr>
    <tr>
      <td>Masters & Post-Masters Certificates</th>
      <td>1,119</th>
      <td>1,101</th>
      <td>2,220%</th>
      <td>29%</th>
    </tr>
  </tbody>
</table>
```

### Table Headers

Simple tables with few rows and columns may only require either one header row or one header column. Longer tables require using both a header row and a header column. In any case, `scope="col"` or `scope="row"` should be added to each table header cell, as appropriate.

It is possible to make tables with more complex columns usable and accessible, but in practice, it is often more difficult than it is worthwhile. In general, it is better to split up data among multiple tables than try to design complex tables.