<a name="ArrayUtils"></a>

## ArrayUtils
**Kind**: global class  
**Npmpackage**:   

* [ArrayUtils](#ArrayUtils)
    * [new ArrayUtils()](#new_ArrayUtils_new)
    * [.combine(arr1, arr2)](#ArrayUtils.combine)
    * [.copy(array)](#ArrayUtils.copy)
    * [.insertAt(array, index, arguments)](#ArrayUtils.insertAt)
    * [.removeAt(array, index)](#ArrayUtils.removeAt)
    * [.remove(array, item)](#ArrayUtils.remove)
    * [.shuffle(array)](#ArrayUtils.shuffle)
    * [.contains(array, item)](#ArrayUtils.contains)

<a name="new_ArrayUtils_new"></a>

### new ArrayUtils()
This object contains additional methods for manipulating arrays.<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<pre class="sunlight-highlight-javascript">
import { ArrayUtils } from 'ad-utils'
</pre>

<a name="ArrayUtils.combine"></a>

### ArrayUtils.combine(arr1, arr2)
A 'more friendly' concat function.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>array</code> | first array |
| arr2 | <code>array</code> | second array appended to the first |

<a name="ArrayUtils.copy"></a>

### ArrayUtils.copy(array)
Creates a unique duplicate of the given array.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | the array to duplicate |

<a name="ArrayUtils.insertAt"></a>

### ArrayUtils.insertAt(array, index, arguments)
Adds elements at a provided index. Returns a new array.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | the array to modify |
| index | <code>number</code> | the index to insert elements |
| arguments | <code>arguments</code> | the elements to insert |

<a name="ArrayUtils.removeAt"></a>

### ArrayUtils.removeAt(array, index)
Removes an element at a provided index. Returns a new array.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | the array to modify |
| index | <code>number</code> | the index of the element to remove |

<a name="ArrayUtils.remove"></a>

### ArrayUtils.remove(array, item)
Removes all instances of an element from the given array. Returns a new array.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | the array to modify |
| item | <code>number</code> \| <code>string</code> | the item to remove from the array |

<a name="ArrayUtils.shuffle"></a>

### ArrayUtils.shuffle(array)
Shuffles the array into a random order.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | the array to modify |

<a name="ArrayUtils.contains"></a>

### ArrayUtils.contains(array, item)
Determines if a given array contains a given element. Returns a boolean.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | the array to check |
| item | <code>number</code> \| <code>string</code> | the item to check for in the array |

