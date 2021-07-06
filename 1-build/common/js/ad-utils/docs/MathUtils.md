<a name="MathUtils"></a>

## MathUtils
**Kind**: global class  
**Npmpackage**:   

* [MathUtils](#MathUtils)
    * [new MathUtils()](#new_MathUtils_new)
    * [.toRadians(degree)](#MathUtils.toRadians)
    * [.toDegrees(radian)](#MathUtils.toDegrees)
    * [.random(a, b, increment)](#MathUtils.random)
    * [.randomBoolean(weight)](#MathUtils.randomBoolean)
    * [.rel(a0, a1, b0, b1, bX)](#MathUtils.rel)
    * [.inRange(val, a, b)](#MathUtils.inRange) ⇒ <code>boolean</code>
    * [.isNumber(num)](#MathUtils.isNumber)
    * [.toNumber(str)](#MathUtils.toNumber)
    * [.restrict()](#MathUtils.restrict)
    * [.getAnglePoint()](#MathUtils.getAnglePoint) ⇒ <code>array</code>
    * [.getAngle()](#MathUtils.getAngle)
    * [.getDistance()](#MathUtils.getDistance) ⇒ <code>number</code>

<a name="new_MathUtils_new"></a>

### new MathUtils()
Common math utilities.	<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<pre class="sunlight-highlight-javascript">
import { MathUtils } from 'ad-utils'
</pre>

<a name="MathUtils.toRadians"></a>

### MathUtils.toRadians(degree)
Converts an angle value from Degrees to Radians.

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | An angle value as a degree |

<a name="MathUtils.toDegrees"></a>

### MathUtils.toDegrees(radian)
Converts an angle value from Radians to Degrees.

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| radian | <code>number</code> | An angle value as a radian |

<a name="MathUtils.random"></a>

### MathUtils.random(a, b, increment)
Get a random number between a range of two values, with an option to return to a decimal place. ( Note that
		 due to the inprecision of decimal number calculation in Javascript, you may not get a perfect result when 
		 your increment value is decimal, but the value will be close. A classic Javascript inpreciosn calculation example: 
		 0.1 + 0.2 = 0.30000000000000004 )

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | the first value to find between |
| b | <code>number</code> | the second value to find between |
| increment | <code>number</code> | optionaly set the increment of the random number. Defaults to 1 |

**Example**  
```js
MathUtils.random(1, 3, 1)   // returns 1 or 2 or 3
MathUtils.random(1, 3, 0.5)  // returns 1, 1.5, 2, 2.5 or 3
```
<a name="MathUtils.randomBoolean"></a>

### MathUtils.randomBoolean(weight)
Randomly returns a true or false;

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| weight | <code>number</code> | change the outcome probabilty. Greater than .5 more likely true. Defaults to .5 |

<a name="MathUtils.rel"></a>

### MathUtils.rel(a0, a1, b0, b1, bX)
Calculates a value between two numbers relative to a value between 2 other numbers.
		Returns The proportion between a0 and a1 relative to the bX proportion between b0 and b1

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| a0 | <code>number</code> | the first value to find between |
| a1 | <code>number</code> | the second value to find between |
| b0 | <code>number</code> | the first value to use as relative to a0 |
| b1 | <code>number</code> | the second value to use as relative to a1 |
| bX | <code>number</code> | the value between b0 and b1 |

**Example**  
```js
MathUtils.rel(0, 1, 10, 20, 15) // 0.5
MathUtils.rel(100, 300, 3, 5, 3.5) // 150
```
<a name="MathUtils.inRange"></a>

### MathUtils.inRange(val, a, b) ⇒ <code>boolean</code>
Checks if a value is in the range of two numbers.

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | the number to check |
| a | <code>number</code> | the first value of the range |
| b | <code>number</code> | the second value of the range |

**Example**  
```js
MathUtils.inRange(5, 1, 10) // true
MathUtils.inRange(-5, 1, 10) // false
```
<a name="MathUtils.isNumber"></a>

### MathUtils.isNumber(num)
Returns true if the passed var is a number.

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | the variable to check |

<a name="MathUtils.toNumber"></a>

### MathUtils.toNumber(str)
Takes a numerical string and converts it to number type.

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the variable to convert |

<a name="MathUtils.restrict"></a>

### MathUtils.restrict()
Restricts a value to with a range.

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  
<a name="MathUtils.getAnglePoint"></a>

### MathUtils.getAnglePoint() ⇒ <code>array</code>
Assumes original coordinate rotation is 0 radians

**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  
**Returns**: <code>array</code> - containing an [xValue, yValue] given x1, y1, distance from that starting coordinate, 
		and angle (in *radians*) which the new point should be from the starting coordinate  
<a name="MathUtils.getAngle"></a>

### MathUtils.getAngle()
**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  
**Retuns**: <code>number</code>
		The angle (in *radians*) between two points given x1, y1, x2, y2  
<a name="MathUtils.getDistance"></a>

### MathUtils.getDistance() ⇒ <code>number</code>
**Kind**: static method of [<code>MathUtils</code>](#MathUtils)  
**Returns**: <code>number</code> - The distance between two points given x1, y1, x2, y2  
