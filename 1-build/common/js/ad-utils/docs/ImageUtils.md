<a name="ImageUtils"></a>

## ImageUtils

**Kind**: global class  
**Npmpackage**:

-   [ImageUtils](#ImageUtils)
    -   [new ImageUtils()](#new_ImageUtils_new)
    -   [.fitImageAtCoordinate(target, originX, originY, source)](#ImageUtils.fitImageAtCoordinate)

<a name="new_ImageUtils_new"></a>

### new ImageUtils()

This object contains methods necessary for manipulating images.<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<br>

<pre class="sunlight-highlight-javascript">
import { ImageUtils } from 'ad-utils'
</pre>

<a name="ImageUtils.fitImageAtCoordinate"></a>

### ImageUtils.fitImageAtCoordinate(target, originX, originY, source)

Positions a background image to fit the div size while centering around a point. If the point is beyond the size bounds, it will align to that side.

**Kind**: static method of [<code>ImageUtils</code>](#ImageUtils)

| Param   | Type                 | Description                                                                   |
| ------- | -------------------- | ----------------------------------------------------------------------------- |
| target  | <code>element</code> | The div with a background image                                               |
| originX | <code>number</code>  | The x position to center on                                                   |
| originY | <code>number</code>  | The y position to center on                                                   |
| source  | <code>img</code>     | Optional pass in a source img tag to skip the need to load to get source data |

### ImageUtils.fitCanvasImageAtCoordinate(target, params, fitParams, imgSourceWidth, imgSourceHeight)

Positions a background image to fit the div size while centering around a point. If the point is beyond the size bounds, it will align to that side.

**Kind**: static method of [<code>ImageUtils</code>](#ImageUtils)

| Param              | Type                     | Description                                                                                                    |
| ------------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| target             | <code>CanvasImage</code> | The CanvasImage with a image source to fit within a specific dimension                                         |
| params             | <code>object</code>      | The parameters of the CanvasImage upon instantiation                                                           |
| fitParams          | <code>object</code>      | The parameters defining the width, height, and origin in which to fit the image                                |
| fitParams.width    | <code>number</code>      | NUMBER determining the width to fit the CanvasImage into - affects CanvasImage.width and CanvasImage.sourceW   |
| fitParams.height   | <code>number</code>      | NUMBER determining the height to fit the CanvasImage into - affects CanvasImage.height and CanvasImage.sourceH |
| fitParams.origin   | <code>object</code>      | OBJECT containing orientation coordinates for the image's fitTo positioning                                    |
| fitParams.origin.x | <code>number</code>      | NUMBER for X coordinate around which to focus resizing and fitting of the image horizontally                   |
| fitParams.origin.y | <code>number</code>      | NUMBER for Y coordinate around which to focus resizing and fitting of the image vertically                     |
| imgSourceWidth     | <code>number</code>      | NUMBER for the original width of the source image                                                              |
| imgSourceHeight    | <code>number</code>      | NUMBER for the original height of the source image                                                             |
