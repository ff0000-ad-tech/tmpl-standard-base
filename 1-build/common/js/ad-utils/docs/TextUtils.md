<a name="TextUtils"></a>

## TextUtils
**Kind**: global class  

* [TextUtils](#TextUtils)
    * [new TextUtils()](#new_TextUtils_new)
    * [.addSpaces()(numberOfSpaces)](#TextUtils.addSpaces_new) ⇒ <code>string</code>
    * [.getSpecialCharacter()(requestedCharacter, isCapital)](#TextUtils.getSpecialCharacter_new) ⇒ <code>string</code>
    * [.trimStartAndEnd()(target)](#TextUtils.trimStartAndEnd_new) ⇒ <code>string</code>
    * [.removeSpaces()(str)](#TextUtils.removeSpaces_new) ⇒ <code>string</code>
    * [.pad()(_target, _count)](#TextUtils.pad_new) ⇒ <code>string</code>
    * [.injectBreakTags(str, indexes)](#TextUtils.injectBreakTags)

<a name="new_TextUtils_new"></a>

### new TextUtils()
This object contains methods necessary for manipulating text. <br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<pre class="sunlight-highlight-javascript">
import { TextUtils } from 'ad-utils'
</pre>

<a name="TextUtils.addSpaces_new"></a>

### TextUtils.addSpaces()(numberOfSpaces) ⇒ <code>string</code>
**Kind**: static method of [<code>TextUtils</code>](#TextUtils)  
**Returns**: <code>string</code> - Returns the specified number of '&nbsp;' strings.  

| Param | Type | Description |
| --- | --- | --- |
| numberOfSpaces | <code>Number</code> | number of space entities to return |

<a name="TextUtils.getSpecialCharacter_new"></a>

### TextUtils.getSpecialCharacter()(requestedCharacter, isCapital) ⇒ <code>string</code>
**Kind**: static method of [<code>TextUtils</code>](#TextUtils)  
**Returns**: <code>string</code> - Returns entity equivilent for specified character.  

| Param | Type | Description |
| --- | --- | --- |
| requestedCharacter | <code>String</code> | character must match the 'label' key |
| isCapital | <code>Boolean</code> | flag to return the entity as capital |

<a name="TextUtils.trimStartAndEnd_new"></a>

### TextUtils.trimStartAndEnd()(target) ⇒ <code>string</code>
**Kind**: static method of [<code>TextUtils</code>](#TextUtils)  
**Returns**: <code>string</code> - Removes white space from the start and end of a string.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | string to affect |

<a name="TextUtils.removeSpaces_new"></a>

### TextUtils.removeSpaces()(str) ⇒ <code>string</code>
**Kind**: static method of [<code>TextUtils</code>](#TextUtils)  
**Returns**: <code>string</code> - Removes all white space from the string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string from which to remove spaces |

<a name="TextUtils.pad_new"></a>

### TextUtils.pad()(_target, _count) ⇒ <code>string</code>
**Kind**: static method of [<code>TextUtils</code>](#TextUtils)  
**Returns**: <code>string</code> - Pads a number with zeros up to the specified number of places.  

| Param | Type | Description |
| --- | --- | --- |
| _target | <code>String</code> | number to be padded |
| _count | <code>Number</code> | expected result length of the numerical string |

<a name="TextUtils.injectBreakTags"></a>

### TextUtils.injectBreakTags(str, indexes)
Adds "<br>" tags to a block of copy and specified indexes. Reading the sentence, starting
		after the first word, that space would be index 0, then next space would be 1, etc.

**Kind**: static method of [<code>TextUtils</code>](#TextUtils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | A sentence or long block or copy. |
| indexes | <code>Array</code> | An array of numbers representing the index of the space to replace with a "<br>" tag |

