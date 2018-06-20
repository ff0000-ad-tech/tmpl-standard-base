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

Make sure you have Node `^9.0.0` and NPM `^6.0.0` installed.

Clone this repo locally. Then:

```
npm install
```

This will install the top-level and build-level packages. Then:

```
npm run server
```

The output will include the address where CS is running:

![Creative Server Launch](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/creative-server-launch.png)

#### Creative Server

This platform will help you manage, compile, & package your volume of sizes/indexes. See the [README for Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) for more info:

#### FAT Framework

FF0000-Ad-Tech is a lightweight, capable Javascript-based framework for instantiating, styling, and animating elements. The benefits of being 100% Javascript include:

- Authoring flexibility
- Execution control
- Packaging

All of the `ad-...` repos in the [@ff0000-ad-tech GitHub organization](https://github.com/ff0000-ad-tech) are the frontened core. We are working on better README documentation for each. In the meantime, all of the modules have up-to-date code docs, which can be found in the [API Docs](https://ff0000-ad-tech.github.io/ad-docs). Search for the class you require.

## Ad Networks

<a name="ad-networks"></a>

This template is configured for DCM (Doubleclick Campaign Manager).

Changing the configuration for DC Studio, Flashtalking, and Sizmek (or many others) is not difficult. Most of your creative execution will be unchanged. Contact [gmcdev](https://github.com/gmcdev) for specifics.

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
