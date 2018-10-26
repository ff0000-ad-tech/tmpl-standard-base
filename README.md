##### RED Interactive Agency - Ad Technology

<!-- Red.Component.title.start -->
# Standard - Base

<!-- Red.Component.title.end -->

[Getting Started](#getting-started)

[Authoring](#authoring)

[Publishing](#traffic)

[Plugins](#plugins)

[FAT Framework](#fat-framework)

[Ad Networks](#ad-networks)

[Binary Assets](#binary-assets)

[Advanced Usage](#advanced-usage)

### Intro

Build banners with ES6 & Greensock animations. Compile using [Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) (Webpack/Babel) and deliver to traffic, out-of-the-box, without any boilerplate configuration.

The output is bundled, per-size, per-index into concise IAB-compatible packages:

![Sample Output](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/sample-output.png)

Your job is to build the creative using your ES6/Javascript/Html/CSS abilities. Please see the [authoring](#authoring) section for more info.

<a name="getting-started"></a>

# Getting Started

1.  [NPM Install](#install) this template
2.  Run [Creative Server](#creative-server)
3.  Begin a [Watch Process](#watch-process)
4.  [Preview](#preview) the result
5.  [Author](#authoring) your Size/Index & `build.js`
6.  Publish for [Traffic](#traffic)

### System Dependencies

Make sure your machine has at least these versions installed:

- Node `^9.0.0`
- NPM `^6.0.0`
- Python `^2.7.0`

You can check your versions in Terminal (or shell of preference): Execute commands `node -v`, `npm -v`, and `python` to see which versions you're running.

If you need to update or install, check online for instructions for your operating system.

<a name="install"></a>

### Install Ad Template

Clone or Download this repo and unzip it. In Terminal, `cd` into the result directory, then:

```sh
npm install
```

This will install the top-level and build-level packages.

<a name="creative-server"></a>

### Creative Server

Creative Server app will help you manage, compile, & package your volume of sizes/indexes. See the [README for Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) for more info:

Run it with this command:

```sh
npm run browser
```

In order to restart Creative Server, use `npm run server`.

<a name="watch-process"></a>

### Watch Process

This template uses ES6. It must be compiled in order to run in a browser.

Creative Server can start a "Watch Process" that will recompile the ad every time its source files are updated (saved).

![CS Watch Process](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/cs-watch-process.png)

If you want more visibility, click ![Terminal Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/terminal-icon.png). This will copy the Webpack command to your clipboard. Paste & execute that in your Terminal. Similarly, clicking ![Webpack Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/webpack-icon.png) will copy the Traffic command to your clipboard, for better visibility when run from a shell.

<a name="preview"></a>

### Preview

The 👁 icon is a browser shortcut to the `2-debug/[size]` folder. Similarly, once a "Traffic Version" has been compiled, the Date/Time indication links to a preview.

<a name="authoring"></a>

## Authoring

- [Scopes](#scopes)
  - [1-build/[size]/](#size)
    - [index.html](#index)
    - [Ad.js](#ad)
  - [1-build/common/](#common)
    - [Animation.js](#common)
    - [AdData.js](#common)
    - [Control.js](#common)
    - [Preflight.js](#common)
- [Modular Strategies](#modular)
- [Aliases](#aliases)
- [Assets](#assets)

FF0000 Ad Tech is a code-based authoring platform.

JavaScript is a powerful way to build ads. Scripting affords flexibility, modularity, dynamic state, better packaging, and more. However, the cognitive load is higher -- HTML/CSS is much easier to read and write. The perfect blend, in our opinion, is JSX. Our roadmap includes a **transition to a JSX pattern**.

In the meantime, our ES6 framework provides all of the tools you need to build any type of interactive display ad.

<a name="scopes"></a>

#### Scopes

<a name="size"></a>

##### 1-build/[size]

Sizes that share similar creative can be added as "size folders", using the `[0-9]x[0-9]` format. Each size folder must have its own `index.html`, `Ad.js`, and `backup.jpg`. The `index.html`'s global `adParams.adWidth` and `adParams.adHeight` object should be updated accordingly:

![Ad Params](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/ad-params.png)

<a name="index"></a>

###### 1-build/[size]/index.html

An Index contains:

- Settings
- Click Tag Defs
- Exit Mechanics
- Preload State
- Polite Loader
- Failover

Each size folder can have one or many indexes. Additional indexes are used to switch the dynamic state to different demographics. These are known as "Dynamic Targets".

Dynamic Targets are defined by duplicating `1-build/[size]/index.html`. The new targets should be formatted like `index_target1.html`, `index_target2.html`, etc... Using this method, you can create lots of variation without loads of redundancy.

![Index Targets](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/index-targets.png)

By additionally creating a folder with the same name, you can import assets specific to that index. Then ES6 import the asset with the Webpack alias: `@index`. During compile, if no folder matching the current index-target is found, `@index` will default to the main index scope.

```javascript
// for example in Ad.js
import { MyModule } from '@index/js/modules.js'
```

<a name="ad"></a>

###### 1-build/[size]/Ad.js

- `Ad.js` - _Size specific_ lifespan & function of the ad. **Note: Ad.js is where the creative authoring starts!**

Import modules into `Ad.js` scope. Instantiate them with overrides, as needed. The remaining authoring scope lives in [1-build/common](#common)

<a name="common"></a>

##### 1-build/common/

Different sizes often share structure, function, and assets. Use the [1-build/common/](#common) path for those assets.

The following JS modules are initially set up as common across sizes:

- `Build.js` - Declare visual elements / components.
- `Animation.js` - Run transitions & effects.
- `AdData.js` - Global stateful object that can be referenced anywhere as `adData`
- `Control.js` - Define event-handlers and other operators.
- `Preflight.js` - Dynamic asset load and other runtime decisions, after the preload, ahead of the build.

<a name="modular"></a>

#### Modular Strategies

Sharing code drastically reduces the footprint of a build, but it requires more data management & logic to deal with the differences. It can get abstract quickly.

To flatten, you can move entire modules to `1-build/[size]/js`. Then import using the `@size` alias, thereby making the module size-specific. Downside here: Code redundancy between sizes. But, it can be more straightforward to comprehend.

Both strategies have their place. It is up to you and your needs.

<a name="aliases"></a>

#### Aliases

There are several aliases that make pathing easier:

- `@common` - `1-build/common`
- `@size` - `1-build/[size]/js`
- `@index` - `1-build/[size]/[index-folder]`

For example:

```javascript
import { MainBorder } from '@common/js/Build.js'
```

<a name="assets"></a>

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

<a name="traffic"></a>

## Publishing

##### Deploy Profiles

Creative Server lets you maintain Profiles for different deploy targets. For each, different settings can be injected into the selected size / indexes, depending on the intended Network & media targets.

![Deploy Profiles](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/deploy-profiles.png)

Click the "+" icon to define a new profile. Click the ![Settings Icon](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/settings-icon.png) to override index settings for this profile.

The dropdown lists [Plugins](#plugins) that can be used on the selected set of ads. Click the 🔥 icon to execute.

![Bulk Compile](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/bulk-control.png)

<a name="plugins"></a>

## Plugins

Plugins are declared as dependencies in the top `./package.json`. Once installed, they will appear in Creative Server in various places, depending on their function.

![Plugins](https://github.com/ff0000-ad-tech/readme-assets/blob/master/tmpl-standard-base/plugins.png)

Several plugins are installed by default that simplify publishing:

- [cs-plugin-bulk-compile](https://github.com/ff0000-ad-tech/cs-plugin-bulk-compile), compiles all of the selected ads, at once -- laugh while your CPU cries.
- [cs-plugin-vendor-indexes](https://github.com/ff0000-ad-tech/cs-plugin-vendor-indexes), for when assets are hosted on a 4th party CDN and only then `index.html` and `backup.jpg` are needed for media. This plugin will transfer those files from your traffic output to `./4-vendor`.

<!-- Red.Component.plugins.start -->
<!-- Red.Component.plugins.end -->

<a name="fat-framework"></a>

## FAT Framework

FF0000-Ad-Tech is a lightweight, capable Javascript-based framework for instantiating, styling, and animating elements. The benefits of being 100% Javascript include:

- Authoring flexibility
- Execution control
- Packaging

Repos in the [@ff0000-ad-tech GitHub organization](https://github.com/ff0000-ad-tech) with the `ad-...` prefix are the frontend core. We are working on better README documentation for each. In the meantime, all of the modules have up-to-date code docs, which can be found in the [API Docs](https://ff0000-ad-tech.github.io/ad-docs). Search for the class you require.

TODO: Write guides for building standard layouts.

<a name="ad-networks"></a>

## Ad Networks

<!-- Red.Component.networks.start -->
This template is a standard banner format, configured for DCM (Doubleclick Campaign Manager).

<!-- Red.Component.networks.end -->

Other templates for Velvet, DC Studio, Flashtalking, and Sizmek are available -- check out this project for a complete library: [tmpl-build-sources](https://github.com/ff0000-ad-tech/tmpl-build-sources).

As much as possible, we have tried to isolate Network interfacing to the `index.html`, so that creative is easily ported from one template-type to another.

Some networks, like Flashtalking, have very unique packaging requirements. In this case, we've built plugins, like [cs-plugin-vendor-ft](https://github.com/ff0000-ad-tech/cs-plugin-vendor-ft) to simplify the packaging process.

<a name="binary-assets"></a>

## Binary Assets

Assets like images & fonts are 25% bigger when expressed as base64 text. Even after gzip, there is significant waste. Loading the assets individually is even worse in terms of load delay.

To solve these problems, we compile all binary assets into a single load that is streamed into the ad and written into the DOM in a single execution loop.

See the [authoring](#authoring) notes above for how to implement.

<a name="advanced-usage"></a>

## Advanced Usage

Alternative workflows, frameworks, and components can be integrated as needed.

For example, Preact/React, Web Components, home-grown modules, etc..._anything that Webpack can load can be compiled_. Be encouraged to modify -- we are always interested in different use-cases. Such efforts will advance the overall project goals: To offer a flexible, lightweight, and intuitive system for building interactive ad content.

If you want to adapt Creative Server to a different setup (index, hierarchy, etc), contact [us](https://github.com/gmcdev) and we can help you with our `webpack.config.js` which has been divided into sub-modules for organizational purposes.

Repos in [@ff0000-ad-tech](https://github.com/ff0000-ad-tech) dealing with Webpack & Creative Server are:

- `wp-...` prefix are webpack related modules.

- `cs-...` prefex are Creative Server related modules.
