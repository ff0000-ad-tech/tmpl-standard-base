<a name="ObjectUtils"></a>

## ObjectUtils
**Kind**: global class  
**Npmpackage**:   

* [ObjectUtils](#ObjectUtils)
    * [new ObjectUtils()](#new_ObjectUtils_new)
    * [.objectifier](#ObjectUtils.objectifier)
    * [.get(str, ctxObj)](#ObjectUtils.get)
    * [.set(str, val, ctxObj)](#ObjectUtils.set)
    * [.clone(obj)](#ObjectUtils.clone) ⇒ <code>object</code>
    * [.defaults(obj, defaultObj, recursive)](#ObjectUtils.defaults)

<a name="new_ObjectUtils_new"></a>

### new ObjectUtils()
Utilities for affecting objects.<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<pre class="sunlight-highlight-javascript">
import { ObjectUtils } from 'ad-utils'
</pre>

<a name="ObjectUtils.objectifier"></a>

### ObjectUtils.objectifier
This object is parent to a number of utility funcitons

**Kind**: static property of [<code>ObjectUtils</code>](#ObjectUtils)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| objectifier.get | <code>function</code> | [get](#ObjectUtils.get) |
| objectifier.set | <code>function</code> | [set](#ObjectUtils.set) |

<a name="ObjectUtils.get"></a>

### ObjectUtils.get(str, ctxObj)
Gets a property with a nested property key string.
	<br><br>
	<b>NOTE!!!</b>
	This method is on the [objectifier](#ObjectUtils.objectifier) object!

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | a data string representing the key of desire property splited by dot.  	Array index is represented by number. For example, 'myObj.property1.0' means  	I'm pointing to the [0] element in my propperty1 array inside of myObj. |
| ctxObj | <code>object</code> | the context object to find the property under, defaults to window |

**Example**  
```js
let myObj = {
	prop1: [ 'a', 'b', 'c' ],
	prop2: {
		string: 'I am prop2',
		func: function() {
			alert('!!')
		}
	}
}

let val = ObjectUtils.objectifier.get( 'prop1.0', myObj );
// your val should be 'a'

val = ObjectUtils.objectifier.get( 'prop2.string', myObj );
// your val should be 'I am prop2'
```
<a name="ObjectUtils.set"></a>

### ObjectUtils.set(str, val, ctxObj)
Sets a property value with a nested property key string.
	<br><br>
	<b>NOTE!!!</b>
	This method is on the [objectifier](#ObjectUtils.objectifier) object!

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | a data string representing the key of desire property splited by dot. 	Array index is represented by number. For example, 'myObj.property1.0' means 	I'm pointing to the [0] element in my propperty1 array inside of myObj. |
| val | <code>any</code> | the value to set for th property |
| ctxObj | <code>object</code> | the context object to find the property under, defaults to window |

**Example**  
```js
//
let myObj = {
	prop1: [ 'a', 'b', 'c' ],
	prop2: {
		string: 'I am prop2'
	}
};
ObjectUtils.objectifier.set( 'prop1.0', 123, myObj );
// myObj.prop1[0] is now 123
ObjectUtils.objectifier.set( 'prop2.string', 'hello', myObj );
// myObj.prop2.string is now 'hello'
```
<a name="ObjectUtils.clone"></a>

### ObjectUtils.clone(obj) ⇒ <code>object</code>
Get a clone of an object without reference.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)  
**Returns**: <code>object</code> - cloned object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object to clone |

**Example**  
```js
let oldObj = {
	a: 1,
	b: 2
};

let newObj = ObjectUtils.clone( oldObj );

newObj.a = 'xyz';
// oldObj.a is still 1
```
<a name="ObjectUtils.defaults"></a>

### ObjectUtils.defaults(obj, defaultObj, recursive)
Get an object using an object as a default, when a property doesn't in the object,
	it takes it from the default object if it exists. It also checks nested objects. 
	It is useful for setting up an object to store default values.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object contains custom properties to overide default properties |
| defaultObj | <code>object</code> | an object contains properties to default to |
| recursive | <code>boolean</code> | flag for if the property check should be executed recursively 	otherwise it will just be one level |

**Example**  
```js
// our default object as a base set up
let defaultObj = {
    name: 'Person',
    weight: 0,
    age: 0,
    gender: 'male',
    locationDetail: {
        state: 'CA',
        city: 'Los Angeles'
    }
};

// the custom object
let customObj = {
    name: 'Bob',
    weight: 140,
    age: 30,
    locationDetail: {
        city: 'Santa Monica',
        street: 'Ocean Park'
    }
};

let result = ObjectUtils.defaults( customObj, defaultObj, true );

// your result object should look like
{
	name: 'Bob',
    weight: 140,
    age: 30,
    gender: 'male',
    locationDetail: {
        state: 'CA',
        city: 'Santa Monica',
        street: 'Ocean Park'
    }
}

//if not recursive
let result = ObjectUtils.defaults( customObj, defaultObj, false );

// your result object should look like ( notice that it takes the whole locationDetail object )
{
	name: 'Bob',
    weight: 140,
    age: 30,
    gender: 'male',
    locationDetail: {
        city: 'Santa Monica',
        street: 'Ocean Park'
    }
}
```
