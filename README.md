##### RED Interactive Agency - Ad Technology

# tmpl-standard-base

Build banners with ES6 & Greensock animations. Compile using [Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) and deliver to traffic, out-of-the-box, without any boilerplate configuration.

The output is Webpack/Binary-compiled, per-size, per-index into concise IAB-compatible packages:

![Sample Output](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/sample-output.png)

Your job is to build the creative using your ES6/Javascript/Html/CSS abilities. This template uses the [FF0000 Ad Tech framework](https://ff0000-ad-tech.github.io/ad-docs/), but you are welcome to author however you like.

# Getting Started

Make sure you have Node `^9.0.0` and NPM `^6.0.0` installed.

Clone this repo locally. Then:

```
npm install
```

This will install the top-level and build-level packages. Then:

```
npm run server
```

#### Creative Server

This platform will help you manage, compile, & package your volume of sizes/indexes. See the README for Creative Server for more info:

https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md

#### FAT Framework

FF0000-Ad-Tech is a lightweight, capable Javascript-based framework for instantiating, styling, and animating elements.

The syntax may seem verbose. However, there are great benefits of being 100% Javascript, in terms of authoring, execution, as well as packaging.

All of the `ad-...` repos in this GitHub organization are the core. We are working on better README documentation for each. In the meantime, all of the modules have code docs, which can be found in the [API Docs](https://ff0000-ad-tech.github.io/ad-docs).

## Binary Compiling

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
import '../../fonts/template_font.ttf'
// font will get unpacked at runtime and declared via CSS
```

## Advanced Usage

Alternative applications & workflows can be integrated as needed.

For example, Preact/React and/or other Javascript libraries & frameworks, Web Components, etc..._anything that Webpack can load can be compiled_. We are always interested in refining the authoring layer, to be as lightweight & intuitive as possible.

Repos in the [@ff0000-ad-tech](https://github.com/ff0000-ad-tech) organization with a `ad-...` prefix house these authoring libs.

If you want to adapt Creative Server to a different organization, contact us and we can help you get your head around the `webpack.config.js` which has been divided into sub-modules for organization.

`wp-...` prefix are webpack related modules.

`cs-...` prefex are Creative Server related modules.
