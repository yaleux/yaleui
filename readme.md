# Yale UI Style Guide
Based on Foundation for Sites

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

The Yale UI Style guide is based on the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression


## Getting Started

### Basic (CSS Download)

The quickest way to get started is with the [PLACEHOLDER: basic CSS download](http://example.com). 

### Advanced (Custom Build)

You may want to use our custom build if any of the following applies:

* You are a Sass user
* You want to pick-and-choose elements
* You require significant customization


To create a custom build, follow these [Installation]() instructions.


## Installation


Requirements:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

###  Setup

1. Download the Yale UI Style Guide with Git:


```bash
git clone https://git.yale.edu/amc95/Yale_UI.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd Yale_UI
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
