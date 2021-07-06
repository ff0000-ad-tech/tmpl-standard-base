<a name="Velvet.events"></a>

## Velvet.events
**Kind**: static class of [<code>Velvet</code>](#Velvet)  

* [.events](#Velvet.events)
    * [new events()](#new_Velvet.events_new)
    * [.INIT](#Velvet.events.INIT) : <code>string</code>
    * [.FAIL](#Velvet.events.FAIL) : <code>string</code>
    * [.STATIC](#Velvet.events.STATIC) : <code>string</code>

<a name="new_Velvet.events_new"></a>

### new events()
<a href="https://github.com/ff0000-ad-tech/ad-velvet">Github repo</a>
	<br><br>
	This module has custom events to be used with [Velvet](#Velvet)

<a name="Velvet.events.INIT"></a>

### events.INIT : <code>string</code>
Represents a 'velvetInit', fired when Velvet has completed its data load.

**Kind**: static constant of [<code>events</code>](#Velvet.events)  
**Example**  
```js
Velvet.events.INIT
```
<a name="Velvet.events.FAIL"></a>

### events.FAIL : <code>string</code>
Represents a 'velvetFail', fired if Velvet has a fail during its load.

**Kind**: static constant of [<code>events</code>](#Velvet.events)  
**Example**  
```js
Velvet.events.FAIL
```
<a name="Velvet.events.STATIC"></a>

### events.STATIC : <code>string</code>
Represents a 'velvetStatic', fired when the ad_rotation in the loaded segment JSON has USE_STATIC rather than an addata slug.

**Kind**: static constant of [<code>events</code>](#Velvet.events)  
**Example**  
```js
Velvet.events.STATIC
```
