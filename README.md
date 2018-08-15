##### RED Interactive Agency - Ad Technology

# tmpl-standard-base

[Getting Started](#getting-started)

[FAT Framework](#fat-framework)

[Ad Networks](#ad-networks)

[Binary Assets](#binary-assets)

[Advanced Usage](#advanced-usage)

### Intro

Build banners with ES6 & Greensock animations. Compile using [Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) and deliver to traffic, out-of-the-box, without any boilerplate configuration.

The output is Webpack/Binary-compiled, per-size, per-index into concise IAB-compatible packages:

![Sample Output](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/sample-output.png)

Your job is to build the creative using your ES6/Javascript/Html/CSS abilities. This template uses the [FF0000 Ad Tech framework](https://ff0000-ad-tech.github.io/ad-docs/), but you are welcome to author however you like.

# Getting Started

<a name="getting-started"></a>

1.  [NPM Install](#install) this template
2.  Run [Creative Server](#creative-server)
3.  Begin a [Watch Process](#watch-process)
4.  [Preview](#preview) the result
5.  [Author](#author) your Size/Index & `build.js`
6.  Publish for [Traffic](#traffic)

### System Dependencies
Make sure your machine has at least these versions installed:

 * Node `^9.0.0`
 * NPM `^6.0.0`
 * Python `^2.7.0`
 
You can check your versions in Terminal (or shell of preference): Execute commands `node -v`, `npm -v`, and `python` to see which versions you're running.

If you need to update or install, check online for instructions for your operating system.

### Install Ad Template

<a name="install"></a>

Clone or Download this repo and unzip it. In Terminal, `cd` into the result directory, then:

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

In order to restart Creative Server, use `npm run server`.

### Watch Process

<a name="watch-process"></a>

This template uses ES6. It must be compiled in order to run in a browser.

Creative Server can start a "Watch Process" that will recompile the ad every time its source files are updated (saved).

![CS Watch Process](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/cs-watch-process.png)

If you want more visibility, click ![Terminal Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/terminal-icon.png). This will copy the Webpack command to your clipboard. Paste & execute that in your Terminal. Similarly, clicking ![Webpack Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/webpack-icon.png) will copy the Traffic command to your clipboard, for better visibility when run from a shell.

### Preview

<a name="preview"></a>

The 👁 icon is a browser shortcut to the `2-debug/[size]` folder. Similarly, once a "Traffic Version" has been compiled, the Date/Time indication links to a preview.

### Authoring

<a name="authoring"></a>

#### build.js

To begin authoring a size, open the `1-build/[size]/build.js` file. This is your creative-coding place. It is organized into 3 sections:

1.  **Control** - Access the lifespan of the creative.
2.  **View** - Declare visual elements / components.
3.  **Animation** - Run transitions & effects.

For more information about the framework implemented in this template, see [FAT Framework](#fat-framework).

#### common/

Many devs code up their entire ad in "the build". But remember, this is ES6. You can modularize your code as much as needed. For example, the `./1-build/common/js` folder is a great place to write code that wants to be re-used across all sizes. In fact, shared scripts already exist for doing that: `./1-build/common/js/Common.js` & `./1-build/common/js/AdData.js`.

#### Assets

Images and fonts are [Binary Assets](#binary-assets). To get them compiled into a single payload, declare them like so:

##### Images

```javascript
import { ImageManager } from 'ad-control'
import './images/my_asset.png'

var image = new Image()
image.src = ImageManager.get('my_asset') // id is the filename of the image-asset
```

##### Fonts

```javascript
// Usually done once per font in `./1-build/common/js/AdData.js`.
import './fonts/template_font.ttf'
// "template_font" will get unpacked at runtime and declared via CSS
```



### Publishing

<a name="traffic"></a>

##### Deploy Profiles

Creative Server lets you maintain Profiles for different deploy targets. For each, different settings can be injected into the selected indexes, depending on the intended Network & media targets.

![Deploy Profiles](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/deploy-profiles.png)

Click the "+" icon to define a new profile. Click the ![Settings Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/settings-icon.png) to override index settings for this profile.

##### Bulk Control

Bulk Control lets you run processes, with the current Deploy Profile settings, on all of the selected size/indexes. The output ends up in `./3-traffic/`.

![Bulk Control](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/bulk-control.png)

The dropdown lists plugins that can be used on the selected set of ads. Click the 🔥 icon to execute.

Several plugins are installed by default that simplify publishing:

- [cs-plugin-bulk-compile](https://github.com/ff0000-ad-tech/cs-plugin-bulk-compile), compiles all of the selected ads, at once -- laugh while your CPU cries.
- [cs-plugin-vendor-indexes](https://github.com/ff0000-ad-tech/cs-plugin-vendor-indexes), for when assets are hosted on a 4th party CDN and only then indexes are needed for media. This plugin will transfer indexes from your traffic output to `./4-vendor`.

## FAT Framework

<a name="fat-framework"></a>

FF0000-Ad-Tech is a lightweight, capable Javascript-based framework for instantiating, styling, and animating elements. The benefits of being 100% Javascript include:

- Authoring flexibility
- Execution control
- Packaging

Repos in the [@ff0000-ad-tech GitHub organization](https://github.com/ff0000-ad-tech) with the `ad-...` prefix are the frontend core. We are working on better README documentation for each. In the meantime, all of the modules have up-to-date code docs, which can be found in the [API Docs](https://ff0000-ad-tech.github.io/ad-docs). Search for the class you require.

TODO: Write guides for building standard layouts.

## Ad Networks

<a name="ad-networks"></a>

This template is configured for DCM (Doubleclick Campaign Manager). Other templates for DC Studio, Flashtalking, and Sizmek are available -- contact [us](https://github.com/gmcdev) for specifics.

As much as possible, we have tried to isolate Network interfacing to the `index.html`, so that creative is easily ported from one template-type to another.

Some networks, like Flashtalking, have very unique packaging requirements. In this case, we've built plugins, like [cs-plugin-vendor-ft](https://github.com/ff0000-ad-tech/cs-plugin-vendor-ft) to simplify the packaging process.

## Binary Assets

<a name="binary-assets"></a>

Assets like images & fonts are 25% bigger when expressed as base64 text. Even after gzip, there is significant waste. Loading the assets individually is even worse in terms of load delay.

To solve these problems, we compile all binary assets into a single load that is streamed into the ad and written into the DOM in a single execution loop.

See the [authoring](#authoring) notes above for how to implement.

## Advanced Usage

<a name="advanced-usage"></a>

Alternative workflows, frameworks, and components can be integrated as needed.

For example, Preact/React, Web Components, home-grown modules, etc..._anything that Webpack can load can be compiled_. Be encouraged to modify -- we are always interested in different use-cases. Such efforts will advance the overall project goals: To offer a flexible, lightweight, and intuitive system for building interactive ad content.

If you want to adapt Creative Server to a different setup (index, hierarchy, etc), contact [us](https://github.com/gmcdev) and we can help you with our `webpack.config.js` which has been divided into sub-modules for organizational purposes.

Repos in [@ff0000-ad-tech](https://github.com/ff0000-ad-tech) dealing with Webpack & Creative Server are:

- `wp-...` prefix are webpack related modules.

- `cs-...` prefex are Creative Server related modules.
