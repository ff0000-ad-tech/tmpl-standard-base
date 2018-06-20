##### RED Interactive Agency - Ad Technology

# tmpl-standard-base

[Getting Started](#getting-started)

[Ad Networks](#ad-networks)

[Binary Compiling](#binary-compiling)

[Advanced Usage](#advanced-usage)

### Intro

Build banners with ES6 & Greensock animations. Compile using [Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) and deliver to traffic, out-of-the-box, without any boilerplate configuration.

The output is Webpack/Binary-compiled, per-size, per-index into concise IAB-compatible packages:

![Sample Output](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/sample-output.png)

Your job is to build the creative using your ES6/Javascript/Html/CSS abilities. This template uses the [FF0000 Ad Tech framework](https://ff0000-ad-tech.github.io/ad-docs/), but you are welcome to author however you like.

# Getting Started

<a name="getting-started"></a>

1.  [Install](#install) this template
2.  Run [Creative Server](#creative-server)
3.  Begin a [Watch Process](#watch-process)
4.  [Preview](#preview) the result
5.  [Author](#author) your Size/Index & `build.js`

### Install

<a name="install"></a>

Make sure you have Node `^9.0.0` and NPM `^6.0.0` installed. Open up your Terminal (or shell of preference): Type `node -v` and `npm -v` to see where you're at.

Download this repo and unzip it. In Terminal, `cd` into the result directory, then:

```sh
npm install
```

This will install the top-level and build-level packages.

### Creative Server

<a name="creative-server"></a>

Creative Server app will help you manage, compile, & package your volume of sizes/indexes. See the [README for Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) for more info:

Run it with this command:

```sh
npm run browser
```

In order restart Creative Server, use `npm run server`.

### Watch Process

<a name="watch-process"></a>

This template uses ES6. It must be compiled in order to run in a browser.

Creative Server can start a "Watch Process" that will recompile the ad every time its source files are updated (saved).

![CS Watch Process](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/cs-watch-process.png)

If you want more visibility, click ![Terminal Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/terminal-icon.png). This will copy the Webpack command to you clipboard. Paste & execute that in your Terminal. Similarly, clicking ![Webpack Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/webpack-icon.png) will copy the Traffic command to your clipboard, for better visibility when run from a shell.

### Preview

<a name="preview"></a>

The 👁 icon is a browser shortcut to the `2-debug/[size]` folder. Similarly, once a "Traffic Version" has been compiled, the Date/Time indication links to a preview.

### Authoring

<a name="authoring"></a>

To begin authoring a size, open the `1-build/[size]/build.js` file. This is your creative-coding place. It is organized into 3 sections:

1.  **Control** - Access the lifespan of the creative.
2.  **View** - Declare visual elements / components.
3.  **Animation** - Run transitions & effects.

Many devs code up their entire ad in this file. But remember, this is ES6. You can modularize your code as much as needed. For example, the `./1-build/common/js` folder is a great place to write code that wants to be re-used across all sizes. In fact, stubs already exist for doing that: `./1-build/common/js/Common.js` & `./1-build/common/js/AdData.js`.

## FAT Framework

FF0000-Ad-Tech is a lightweight, capable Javascript-based framework for instantiating, styling, and animating elements. The benefits of being 100% Javascript include:

- Authoring flexibility
- Execution control
- Packaging

All of the `ad-...` repos in the [@ff0000-ad-tech GitHub organization](https://github.com/ff0000-ad-tech) are the front-end core. We are working on better README documentation for each. In the meantime, all of the modules have up-to-date code docs, which can be found in the [API Docs](https://ff0000-ad-tech.github.io/ad-docs). Search for the class you require.

## Ad Networks

<a name="ad-networks"></a>

This template is configured for DCM (Doubleclick Campaign Manager).

Changing the configuration for DC Studio, Flashtalking, and Sizmek (or many others) is not difficult. Most of your creative execution will be unchanged. Contact [us](https://github.com/gmcdev) for specifics.

## Binary Compiling

<a name="binary-compiling"></a>

Binary assets like images & fonts are 25% bigger when expressed as base64 text. Even after gzip, there is significant waste. Loading the assets individually is even worse in terms of load delay.

To solve these problems, we compile all binary assets into a single load that is streamed into the ad and written into the DOM in a single execution loop.

#### Images

```javascript
import { ImageManager } from 'ad-control'
import './images/my_asset.png'

var image = new Image()
image.src = ImageManager.get('my_asset') // id is the filename of the image-asset
```

#### Fonts

```javascript
import './fonts/template_font.ttf'
// "template_font" will get unpacked at runtime and declared via CSS
```

## Advanced Usage

<a name="advanced-usage"></a>

Alternative workflows, frameworks, and components can be integrated as needed.

For example, Preact/React, Web Components, home-grown modules, etc..._anything that Webpack can load can be compiled_. Be encouraged to adapt -- we are always interested in different use-cases. Such efforts will advance the overall project goals: To offer a flexible, lightweight, and intuitive system for building interactive ad content.

If you want to adapt Creative Server to a different organization (index, hierarchy, etc), contact [us](https://github.com/gmcdev) and we can help you get your head around the `webpack.config.js` which has been divided into sub-modules for organization.

Repos in [@ff0000-ad-tech](https://github.com/ff0000-ad-tech) dealing with Webpack & Creative Server are:

- `wp-...` prefix are webpack related modules.

- `cs-...` prefex are Creative Server related modules.
