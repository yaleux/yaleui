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