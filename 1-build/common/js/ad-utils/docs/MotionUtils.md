<a name="MotionUtils"></a>

## MotionUtils
**Kind**: global class  
**Npmpackage**:   

* [MotionUtils](#MotionUtils)
    * [new MotionUtils()](#new_MotionUtils_new)
    * [.setSpeedLimits(negX, posX, negY, posY)](#MotionUtils.setSpeedLimits)
    * [.setSpeedMultiplier(multi)](#MotionUtils.setSpeedMultiplier)
    * [.activate(callback)](#MotionUtils.activate)
    * [.deactivate()](#MotionUtils.deactivate)
    * [.callibrate()](#MotionUtils.callibrate)

<a name="new_MotionUtils_new"></a>

### new MotionUtils()
This object is for accessing the mobile/tablet's accelerometer for tilt shifting values<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<pre class="sunlight-highlight-javascript">
import { MotionUtils } from 'ad-utils'
</pre>

<a name="MotionUtils.setSpeedLimits"></a>

### MotionUtils.setSpeedLimits(negX, posX, negY, posY)
Set the minimum and maximum values that can be returned

**Kind**: static method of [<code>MotionUtils</code>](#MotionUtils)  

| Param | Type | Description |
| --- | --- | --- |
| negX | <code>number</code> | minimum value returned when tilting left ( will be a negative number ) |
| posX | <code>number</code> | maximum value returned when tilting right ( will be a positive number ) |
| negY | <code>number</code> | minimum value returned when tilting backward ( will be a negative number ) |
| posY | <code>number</code> | maximum value returned when tilting forward ( will be a positive number ) |

<a name="MotionUtils.setSpeedMultiplier"></a>

### MotionUtils.setSpeedMultiplier(multi)
Set a percentage multiplier to amplify or minimize the returned value.

**Kind**: static method of [<code>MotionUtils</code>](#MotionUtils)  

| Param | Type | Description |
| --- | --- | --- |
| multi | <code>number</code> | a number to multiply the returned value by. Defaults to 1. |

<a name="MotionUtils.activate"></a>

### MotionUtils.activate(callback)
Starts the listening for a move of the device

**Kind**: static method of [<code>MotionUtils</code>](#MotionUtils)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | a passed in method that will be called every time a device movement is detected. |

<a name="MotionUtils.deactivate"></a>

### MotionUtils.deactivate()
Stops the listening for a move of the device.

**Kind**: static method of [<code>MotionUtils</code>](#MotionUtils)  
<a name="MotionUtils.callibrate"></a>

### MotionUtils.callibrate()
Sets the relative zero position to the current orientation of the device.

**Kind**: static method of [<code>MotionUtils</code>](#MotionUtils)  
