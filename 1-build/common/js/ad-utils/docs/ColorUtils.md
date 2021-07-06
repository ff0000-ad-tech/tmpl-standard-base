<a name="ColorUtils"></a>

## ColorUtils
**Kind**: global class  
**Npmpackage**:   

* [ColorUtils](#ColorUtils)
    * [new ColorUtils()](#new_ColorUtils_new)
    * [.toRgba(color, alpha)](#ColorUtils.toRgba)
    * [.toRgbaString(color, alpha)](#ColorUtils.toRgbaString)
    * [.hue(obj)](#ColorUtils.hue)
    * [.saturation(obj)](#ColorUtils.saturation)
    * [.contrast(obj)](#ColorUtils.contrast)
    * [.tint(obj)](#ColorUtils.tint)
    * [.transform(obj)](#ColorUtils.transform) ⇒ <code>string</code> \| <code>object</code>
    * [.invert(obj)](#ColorUtils.invert)

<a name="new_ColorUtils_new"></a>

### new ColorUtils()
This class contains methods for manipulating color.<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<pre class="sunlight-highlight-javascript">
import { ColorUtils } from 'ad-utils'
</pre>

<a name="ColorUtils.toRgba"></a>

### ColorUtils.toRgba(color, alpha)
Returns an object containing r, g, b, a properties

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> \| <code>object</code> | the color to convert, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| alpha | <code>number</code> | the optional alpha value for the return string: overrides the alpha value of an RGBA color.  	If undefined, will default to the alpha value of the color. |

<a name="ColorUtils.toRgbaString"></a>

### ColorUtils.toRgbaString(color, alpha)
Returns the rgba() string representing a given color and optional alpha

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> \| <code>object</code> | the color to convert, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| alpha | <code>number</code> | the optional alpha value for the return string: overrides the alpha value of an RGBA color. If undefined, will default to the alpha value of the color. |

<a name="ColorUtils.hue"></a>

### ColorUtils.hue(obj)
Apply a hue shift to a given color; returns either an 'rgba()' string or an rgba{} object

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall hue shift, see Properties for more info |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> \| <code>object</code> | the source color to hue shift, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| color | <code>string</code> \| <code>object</code> | synonymous with the from parameter |
| amount | <code>number</code> | amount to shift the colors in a range of 0-360 |
| format | <code>string</code> | either 'object' or 'string' - which determines whether to return an 'rgba()' string or  	an {r:, g:, b:, a:} object. If undefined, defaults to 'string'. |

**Example**  
```js
// convert to full grayscale
ColorUtils.hue({
	from: '#99aa33',
	amount: 66,
	format: 'object'
})
// returns {r: 51, g: 170, b: 79, a: 1}
```
<a name="ColorUtils.saturation"></a>

### ColorUtils.saturation(obj)
Change the color saturation of a given color; returns either an 'rgba()' string or an rgba{} object

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> \| <code>object</code> | the source color to saturate, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| color | <code>string</code> \| <code>object</code> | synonymous with the from parameter |
| amount | <code>number</code> | the total saturation of the from. 0 = grayscale, 1 = full, original color |
| format | <code>string</code> | either 'object' or 'string' - which determines whether to return an 'rgba()' string or  	an {r:, g:, b:, a:} object. If undefined, defaults to 'string'. |

**Example**  
```js
// convert to full grayscale
ColorUtils.saturation({
	from: '#99aa33',
	amount: 0,
	format: 'object'
});
// returns {r: 86, g: 86, b: 86, a: 1}
```
<a name="ColorUtils.contrast"></a>

### ColorUtils.contrast(obj)
Change the contrast of the target; returns either an 'rgba()' string or an rgba{} object

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> \| <code>object</code> | the source color to begin with, represented as a HEX string:"#ff0000", an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}., |
| color | <code>string</code> \| <code>object</code> | synonymous with the from parameter |
| amount | <code>number</code> | the contrast of the target. 0 = no contrast, 1 = original contrast, >1 = more and more, to infinity and beyond! |
| format | <code>string</code> \| <code>object</code> | either 'object' or 'string' - which determines whether to return an 'rgba()' string or  	an {r:, g:, b:, a:} object. If undefined, defaults to 'string'. |

**Example**  
```js
// get your whites whiter and brights brighter
ColorUtils.contrast({
	from: '#aa0011'
	amount: 1.3,
	format: 'object'
});
// returns {r: 221, g: 0, b: 22, a: 1}
```
<a name="ColorUtils.tint"></a>

### ColorUtils.tint(obj)
Tint a color uniformly to a given color; returns either an 'rgba()' string or an rgba{} object

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> \| <code>object</code> | the source color to begin with, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| color | <code>string</code> \| <code>object</code> | synonymous with the from parameter |
| to | <code>string</code> \| <code>object</code> | the target color to tint to, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| amount | <code>number</code> | the percentage of color to apply to the target. Defaults to 1, which is 100% color tinting |
| format | <code>string</code> \| <code>object</code> | either 'object' or 'string' - which determines whether to return an 'rgba()' string,  	or an {r:, g:, b:, a:} object. If undefined, defaults to 'string'. |

**Example**  
```js
// tint to green
ColorUtils.tint({
	from: '#ffff00',
	to: '#00ff00',
	amount: 1,
	format: 'object'
});
// returns {r: 0, g: 255, b: 0, a: 1 };

// tint 50% to green
ColorUtils.tint({
	from: '#ffff00',
	to: '#00ff00',
	amount: 0.5
});
// returns 'rgba(128, 128, 0, 1)'
```
<a name="ColorUtils.transform"></a>

### ColorUtils.transform(obj) ⇒ <code>string</code> \| <code>object</code>
Color Transforms a color to another color by pulling colors out of original source;

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  
**Returns**: <code>string</code> \| <code>object</code> - either an 'rgba()' string or an rgba{} object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> \| <code>object</code> | the source color to begin with, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| color | <code>string</code> \| <code>object</code> | synonymous with the from parameter |
| to | <code>string</code> \| <code>object</code> | the target color to transform to, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| amount | <code>number</code> | the percentage of color to apply to the target. Defaults to 1, which is 100% color transform |
| format | <code>string</code> | either 'object' or 'string' - which determines whether to return an 'rgba()' string or  	an {r:, g:, b:, a:} object. If undefined, defaults to 'string'. |

**Example**  
```js
// remove all colors but greens
ColorUtils.transform({
	from: '#ffff00',
	to: '#00ff00',
	amount: 1,
	format: 'object'
});
// returns {r: 0, g: 255, b: 0, a: 1 };

// remove all colors but greens
ColorUtils.transform({
	from: '#ffff00',
	to: '#00ff00',
	amount: 1
});
// returns 'rgba(0, 255, 0, 1)'
```
<a name="ColorUtils.invert"></a>

### ColorUtils.invert(obj)
Invert the color; returns either an 'rgba()' string or an rgba{} object

**Kind**: static method of [<code>ColorUtils</code>](#ColorUtils)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with parameters for overall inversion, see Properties for more info |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> \| <code>object</code> | the color to invert, represented as a HEX string:"#ff0000",  	an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ),  	or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. |
| color | <code>string</code> \| <code>object</code> | synonymous with the from parameter |
| format | <code>string</code> | either 'object' or 'string' - which determines whether to return an 'rgba()' string or  	an {r:, g:, b:, a:} object. If undefined, defaults to 'string'. |

**Example**  
```js
// invert and return result as object
ColorUtils.invert({
	color: '#ff0000',
	format: 'object'
});
// returns {r: 0, g: 255, b: 255, a: 1 };

// invert and return result as string
ColorUtils.invert({
	color: '#ff0000'
});
// returns 'rgba(0, 255, 255, 1)'
```
