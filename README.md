##### RED Interactive Agency - Ad Technology

# tmpl-standard-base
Build banners with ES6 & Greensock animations. Compile using [Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) and deliver to traffic, out-of-the-box, without any boilerplate configuration.

The output is Webpack/FBA-compiled, per-size, per-index into concise IAB-compatible packages:

![Sample Output](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/sample-output.png)

Your job is to build the creative using your ES6/Javascript/Html/CSS abilities. This template uses the [FF0000 Ad Tech framework](https://ff0000-ad-tech.github.io/ad-docs/), but you are welcome to author however you like.

## FBA Compiling
Binary assets like images & fonts are 25% bigger when expressed as base64 text. Even after gzip, there is significant waste. Loading the assets individually is even worse in terms of load delay.

To solve these problems, we compile all binary assets into a single load that is streamed into the ad and written into the DOM in a single execution loop. 

You don't have to worry about it, just:

```javascript
import { ImageManager } from 'ad-control'
import './images/my_asset.png'

var image = new Image()
image.src = ImageManager.get('my_asset')
```

##### Advanced Usage
Alternative applications & workflows can be integrated as needed. For example, Preact/React and/or other Javascript libraries & frameworks, Web Components, etc...anything that Webpack can handle can be compiled.

If you want to adapt Creative Server to a different hierarchy, contact us and we can help you get your head around the `webpack.config.js` which has been divided into sub-modules for organization.

## Getting Started
Clone this repo locally. Then:
```
npm install
```

This will install the top-level and build-level packages. Then:
```
npm run server
```

See the README for Creative Server for more info:

https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md

## 
