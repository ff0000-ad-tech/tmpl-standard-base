##### 160over90 - Ad Technology

# Standard - Base

[Getting Started](#getting-started)

[Authoring](#authoring)

- [Scopes](#scopes)
- [Assets](#assets)
- [Variation](#variation)
- [Aliases](#aliases)
- [Excluded Folders](#excluded)
- [Modular Strategies](#modular)

[Publishing](#traffic)

[Plugins](#plugins)

[Ad Networks](#ad-networks)

[Binary Assets](#binary-assets)

[Advanced Usage](#advanced-usage)

### Intro

Build banners with [Preact](https://preactjs.com/) (aka React/JSX) & [GSAP](https://greensock.com/gsap/). Compile using [Creative Server](https://github.com/ff0000-ad-tech/wp-creative-server/blob/master/README.md) (Webpack/Babel) and deliver to traffic, out-of-the-box, without any boilerplate configuration.

Boilerplate is **~15k**, assuming GSAP-CDN is cached. The output is bundled, per-size, per-index into concise IAB-compatible packages:

![Sample Output](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/sample-output.png)

The goal of this framework is

- Technical flexibility
- Size/Speed
- Ease-of-use

Most ad-authoring suites are opinionated and specific to their intended ad-network. FF0000-Ad-Tech is a blank slate: Just adaptable, lightweight, and easy-to-author HTML units.

We commonly run these ads in Google Studio with Dynamic Content. They've run in Sizmek and Flashtalking. Or they can be run as generic HTML ads in almost any display network. They have also been adapted to work with proprietary vendors like Netflix, ESPN, and Twitch.

This toolset has been in constant use & development since 2011.

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

- Node `^14.3.0`
- NPM `^6.0.0`

You can check your versions in Terminal (or shell of preference): Execute commands `node -v` and `npm -v`. If you need to update or install, check online for instructions for your operating system.

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

This template must be compiled (webpacked) in order to run in a browser.

Creative Server can start a "Watch Process" that will recompile the ad every time its source files are saved.

![CS Watch Process](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/cs-watch-process.png)

If you want more visibility, click ![Terminal Icon](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/terminal-icon.png). This will copy the Webpack command to your clipboard. Paste & execute that in your Terminal. Similarly, clicking ![Webpack Icon](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/webpack-icon.png) will copy the Traffic command to your clipboard, for better visibility when run from a shell.

<a name="preview"></a>

### Preview

The 👁 icon links to the `2-debug/[size]` folder. Similarly, the **Date/Time-->** indication links to a traffic preview.

<a name="authoring"></a>

## Authoring

<a name="scopes"></a>

### Scopes

- [1-build/[size]](#size)
  - [index.html](#index)
  - [build.js](#build)
  - [components](#components)
    - [Control](#components)
    - [Ad](#components)
- [1-build/common](#common)
  - [fonts](#fonts)
  - [AdData.js](#common)
  - [Preflight.js](#common)

<a name="size"></a>

#### 1-build/[size]

Sizes that share similar creative can be added as "size folders", using the `[0-9]x[0-9]` format. Each size folder must have its own `index.html`, `build.js`, and `backup.jpg`.

The `index.html`'s global `adParams.adWidth` and `adParams.adHeight` object should be updated accordingly:

![Ad Params](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/ad-params.png)

<a name="index"></a>

##### 1-build/[size]/index.html

An Index contains:

- Click Tag
- Settings (`window.adParams`)
- Backup JPG
- Exit Mechanics
- Preload DOM
- Failover

A build can have many sizes. A size can have many indexes. See [Variation](#variation) for more detail.

Add any build-specific data you need to `window.adParams`. This will be available throughout your build.

DOM the preloader in `<div id="preloader">...</div>` and add to the top `<style>...</style>` block as needed.

<a name="build"></a>

##### 1-build/[size]/build.js

- `build.js` - Preflight & top Preact render function of the ad.

<a name="components"></a>

##### 1-build/[size]/components/\*\*/\*

Components are where the creative authoring starts! This is straight-forward JSX/Preact/React/SASS-style authoring.

Importing fonts & image assets will cause them to be bundled into the [fba-payload.png](#binary-assets). Importing components (javascript) or CSS will be bundled into the `build.bundle.js`.

See the [Assets](#assets) section for examples.

See [Alias](#aliases) for more information on resolving imports to different locations in the build.

<a name="common"></a>

#### 1-build/common/

Different sizes often share structure, function, and assets. Use the [1-build/common/](#common) path for those assets, components, and libs.

The following modules are initially set up as common across sizes:

- `common/js/AdData.js` - Global stateful object that can be referenced anywhere as `adData`
- `common/js/Preflight.js` - Dynamic asset load and other runtime decisions, after the preload, ahead of the build.

<a name="assets"></a>

### Assets

Images and fonts are [Binary Assets](#binary-assets). To get them compiled into a single payload, declare them like so:

#### Images

```javascript
import { ImageManager } from 'ad-control'
import '@size/images/my_asset.png'

var image = new Image()
image.src = ImageManager.get('my_asset') // id is the filename of the image-asset
```

#### Fonts

```javascript
// Usually done once per font in `./1-build/common/js/AdData.js`.
import '@common/fonts/template_font.ttf'
// "template_font" will get unpacked at runtime and declared via CSS
```

#### Components

```javascript
// import size-specific component, from `1-build/[@size]/components` folder
import '@size/components/MyComponent'

// import shared component, from `1-build/common/components` folder
import '@common/components/MySharedComponent'
```

<a name="variation"></a>

### Variation

#### Sizes

To add a size, duplicate an existing `1-build/[@size]` folder. Now you can tailor this build-size to your needs. Consider the [Module Strategies](#modular) as you scale a campaign.

To make this process go smoothly, make sure to import build-assets with the `@size` alias. This will alleviate you needing to update your imports, per-size.

#### Indexes

To generate variations of an existing size, duplicate an existing `1-build/[@size]/[@index]`. This index will load the same `build.js`. Use the `window.adParams` as defined in the `index.html` to add variation data or control.

![Index Targets](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/index-targets.png)

The `@index` alias can be used when an index variation of the same size needs to import assets specific to itself. In this case `@size` would not work without appending an index-key from the `window.adParams`.

Instead, you can create a folder with the same name as the index variation. Then import the asset with the alias: `@index`. During compile, if no folder matching the current index-target is found, `@index` will default to the main index scope.

<a name="aliases"></a>

### Aliases

There are several aliases that make pathing easier:

- `@common` - `1-build/common`
- `@size` - `1-build/[size]/js`
- `@index` - `1-build/[size]/[index-folder]`

For example:

```javascript
import { Logo } from '@common/components/Logo.js'
```

<a name="excluded"></a>

### Excluded Folders

These folders will not copied to `2-debug` or `3-traffic`:

- js
- components
- styles
- fonts
- images

Content in these folders are expected to be imported somewhere in the build, and thus bundled in the output.

Use different folder-names if you have dynamic assets that need to be available at runtime.

<a name="modular"></a>

### Modular Strategies

Sharing code (aka, writing components in `1-build/common`) drastically reduces the footprint of a build, but it requires more data management & logic to deal with the differences. It can get abstract quickly.

To flatten, you can move shared components to a specific `1-build/[size]/js`. Then import using the `@size` alias, thereby making the module size-specific. Downside here: Code redundancy between sizes. But, it can be more straightforward to comprehend.

Both strategies have their place. It is up to you and your needs.

<a name="traffic"></a>

## Publishing

##### Deploy Profiles

Creative Server lets you maintain Profiles for different deploy targets. For each, different settings can be injected into the selected size / indexes, depending on the intended Network & media targets.

![Deploy Profiles](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/deploy-profiles.png)

Click the "+" icon to define a new profile. Click the ![Settings Icon](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/settings-icon.png) to override index settings for this profile.

The dropdown lists [Plugins](#plugins) that can be used on the selected set of ads. Click the 🔥 icon to execute.

![Bulk Compile](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/bulk-control.png)

<a name="plugins"></a>

## Plugins

Plugins are declared as dependencies in the top `./package.json`. Once installed, they will appear in Creative Server in various places, depending on their function.

![Plugins](https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/tmpl-standard-base/plugins.png)

Several plugins are installed by default that simplify publishing:

- [cs-plugin-bulk-compile](https://github.com/ff0000-ad-tech/cs-plugin-bulk-compile), compiles all of the selected ads, at once -- laugh while your CPU cries.
- [cs-plugin-vendor-indexes](https://github.com/ff0000-ad-tech/cs-plugin-vendor-indexes), for when assets are hosted on a 4th party CDN and only then `index.html` and `backup.jpg` are needed for media. This plugin will transfer those files from your traffic output to `./4-vendor`.

<a name="ad-networks"></a>

## Ad Networks

This template is a standard banner format, configured for general HTML display, ala DCM (Doubleclick Campaign Manager).

Other templates for DC Studio, Flashtalking, and Sizmek have been created. Templates have also been built for several proprietary dynamic solutions like 160over90's Velvet-DPS & Netflix's Monet.

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

For example, Web Components, home-grown modules, etc..._anything that Webpack can load can be compiled_. Be encouraged to modify -- we are always interested in different use-cases. Such efforts will advance the overall project goals: To offer a flexible, lightweight, and intuitive system for building interactive ad content.

If you want to adapt Creative Server to a different setup (index, hierarchy, etc), contact [us](https://github.com/gmcdev) and we can help you with our `webpack.config.js` which has been divided into sub-modules for organizational purposes.

Repos in [@ff0000-ad-tech](https://github.com/ff0000-ad-tech) dealing with Webpack & Creative Server are:

- `wp-...` prefix are webpack related modules.

- `cs-...` prefex are Creative Server related modules.
