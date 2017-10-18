# Yale UI Pattern Library (formerly the UI Style Guide)
Source for [Yale UI Style Guide](https://yaleux.github.io/yaleui/)
Based on Foundation for Sites

### The Yale UI Pattern Library (formerly the UI Style Guide) is undergoing a complete rewrite, based on Bootstrap 4, for improved performance and accessibility. This library may temporarily be used as a visual reference but it is no longer being maintained. For early access to the new style guide please e-mail ux@yale.edu (link sends e-mail) and we will notify you when a beta is available.


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

The quickest way to get started, just download the assets and link the CSS file in your project. Take a look at the examples folder for inspiration.

[Download Assets](https://yaleux.github.io/yaleui/YaleUI.zip)

```
  <head>
      <!-- ... -->
      <link rel="stylesheet" href="assets/css/app.css">
      <!-- ... -->
  </head>
```

### Advanced (Custom Build)

Requirements:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

####  Setup

Download the Yale UI Style Guide with Git:


```bash
git clone https://github.com/yaleux/yaleui
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd yaleui
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

## Contributing Releases

To contribute resleases to the Yale UI Style Guide, you will need the following:

1. Permission from the owner of this repository (ask to be added as a collaborator)
2. Install YaleITS Get AWS Token: https://git.yale.edu/AWS/yaleits-get_awstoken

### Publish to Github Pages

To publish a change to github pages, first run a full build and then user our gh-publish script as follows:

```bash
npm run build
./gh-publish.bash
```

You should now see your changes at https://yaleux.github.io/yaleui/

### Create and release a new version

The following sequence will:
1. Increase (bump) the version tag
2. Deploy the changes to a new versioned folder in our CDN (using get_awstoken)

```bash
npm run bump
npm run deploy
```
