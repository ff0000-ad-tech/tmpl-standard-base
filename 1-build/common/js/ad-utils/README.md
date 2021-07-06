##### RED Interactive Agency - Ad Technology

[![npm (tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-utils.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-utils)
[![GitHub issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-utils.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-utils)
[![npm downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-utils.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-utils)

[![GitHub contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-utils.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-utils/graphs/contributors/)
[![GitHub commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-utils.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-utils/commits/master)
[![npm license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-utils.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-utils/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

---

# ad-utils

A package of stand alone utilies for Array, Math, Text, Object, etc

## API

## <a name="ArrayUtils" href="./docs/ArrayUtils.md">ArrayUtils</a>

-   <a href="./docs/ArrayUtils.md#ArrayUtils.combine">.combine(arr1, arr2)</a>
-   <a href="./docs/ArrayUtils.md#ArrayUtils.copy">.copy(array)</a>
-   <a href="./docs/ArrayUtils.md#ArrayUtils.insertAt">.insertAt(array, index, arguments)</a>
-   <a href="./docs/ArrayUtils.md#ArrayUtils.removeAt">.removeAt(array, index)</a>
-   <a href="./docs/ArrayUtils.md#ArrayUtils.remove">.remove(array, item)</a>
-   <a href="./docs/ArrayUtils.md#ArrayUtils.shuffle">.shuffle(array)</a>
-   <a href="./docs/ArrayUtils.md#ArrayUtils.contains">.contains(array, item)</a>

## <a name="ColorUtils" href="./docs/ColorUtils.md">ColorUtils</a>

-   <a href="./docs/ColorUtils.md#ColorUtils.toRgba">.toRgba(color, alpha)</a>
-   <a href="./docs/ColorUtils.md#ColorUtils.toRgbaString">.toRgbaString(color, alpha)</a>
-   <a href="./docs/ColorUtils.md#ColorUtils.hue">.hue(obj)</a>
-   <a href="./docs/ColorUtils.md#ColorUtils.saturation">.saturation(obj)</a>
-   <a href="./docs/ColorUtils.md#ColorUtils.contrast">.contrast(obj)</a>
-   <a href="./docs/ColorUtils.md#ColorUtils.tint">.tint(obj)</a>
-   <a href="./docs/ColorUtils.md#ColorUtils.transform">.transform(obj)</a> ⇒ <code>string</code> \| <code>object</code>
-   <a href="./docs/ColorUtils.md#ColorUtils.invert">.invert(obj)</a>

## <a name="DcsUtils" href="./docs/DcsUtils.md">DcsUtils</a>

-   <a href="./docs/DcsUtils.md#DcsUtils.addVideoMetrics">.addVideoMetrics(player, message)</a>
-   <a href="./docs/DcsUtils.md#DcsUtils.addYouTubeVideoMetrics">.addYouTubeVideoMetrics(player)</a>

## <a name="ImageUtils" href="./docs/ImageUtils.md">ImageUtils</a>

-   <a href="./docs/ImageUtils.md#ImageUtils.fitImageAtCoordinate">.fitImageAtCoordinate(target, originX, originY, source)</a>
-   <a href="./docs/ImageUtils.md#ImageUtils.fitCanvasImageAtCoordinate">.fitCanvasImageAtCoordinate(target, params, fitParams, imgSourceWidth, imgSourceHeight)</a>

## <a name="LocationUtils" href="./docs/LocationUtils.md">LocationUtils</a>

-   <a href="./docs/LocationUtils.md#LocationUtils.getGPSData">.getGPSData(callbackSuccess, callbackFail)</a>

## <a name="MathUtils" href="./docs/MathUtils.md">MathUtils</a>

-   <a href="./docs/MathUtils.md#MathUtils.toRadians">.toRadians(degree)</a>
-   <a href="./docs/MathUtils.md#MathUtils.toDegrees">.toDegrees(radian)</a>
-   <a href="./docs/MathUtils.md#MathUtils.random">.random(a, b, increment)</a>
-   <a href="./docs/MathUtils.md#MathUtils.randomBoolean">.randomBoolean(weight)</a>
-   <a href="./docs/MathUtils.md#MathUtils.rel">.rel(a0, a1, b0, b1, bX)</a>
-   <a href="./docs/MathUtils.md#MathUtils.inRange">.inRange(val, a, b)</a> ⇒ <code>boolean</code>
-   <a href="./docs/MathUtils.md#MathUtils.isNumber">.isNumber(num)</a>
-   <a href="./docs/MathUtils.md#MathUtils.toNumber">.toNumber(str)</a>
-   <a href="./docs/MathUtils.md#MathUtils.restrict">.restrict()</a>
-   <a href="./docs/MathUtils.md#MathUtils.getAnglePoint">.getAnglePoint()</a> ⇒ <code>array</code>
-   <a href="./docs/MathUtils.md#MathUtils.getAngle">.getAngle()</a>
-   <a href="./docs/MathUtils.md#MathUtils.getDistance">.getDistance()</a> ⇒ <code>number</code>

## <a name="MonetUtils" href="./docs/MonetUtils.md">MonetUtils</a>

## <a name="MotionUtils" href="./docs/MotionUtils.md">MotionUtils</a>

-   <a href="./docs/MotionUtils.md#MotionUtils.setSpeedLimits">.setSpeedLimits(negX, posX, negY, posY)</a>
-   <a href="./docs/MotionUtils.md#MotionUtils.setSpeedMultiplier">.setSpeedMultiplier(multi)</a>
-   <a href="./docs/MotionUtils.md#MotionUtils.activate">.activate(callback)</a>
-   <a href="./docs/MotionUtils.md#MotionUtils.deactivate">.deactivate()</a>
-   <a href="./docs/MotionUtils.md#MotionUtils.callibrate">.callibrate()</a>

## <a name="ObjectUtils" href="./docs/ObjectUtils.md">ObjectUtils</a>

-   <a href="./docs/ObjectUtils.md#ObjectUtils.objectifier">.objectifier</a>
-   <a href="./docs/ObjectUtils.md#ObjectUtils.get">.get(str, ctxObj)</a>
-   <a href="./docs/ObjectUtils.md#ObjectUtils.set">.set(str, val, ctxObj)</a>
-   <a href="./docs/ObjectUtils.md#ObjectUtils.clone">.clone(obj)</a> ⇒ <code>object</code>
-   <a href="./docs/ObjectUtils.md#ObjectUtils.defaults">.defaults(obj, defaultObj, recursive)</a>

## <a name="TextUtils" href="./docs/TextUtils.md">TextUtils</a>

-   <a href="./docs/TextUtils.md#TextUtils.addSpaces_new">.addSpaces()(numberOfSpaces)</a> ⇒ <code>string</code>
-   <a href="./docs/TextUtils.md#TextUtils.getSpecialCharacter_new">.getSpecialCharacter()(requestedCharacter, isCapital)</a> ⇒ <code>string</code>
-   <a href="./docs/TextUtils.md#TextUtils.trimStartAndEnd_new">.trimStartAndEnd()(target)</a> ⇒ <code>string</code>
-   <a href="./docs/TextUtils.md#TextUtils.removeSpaces_new">.removeSpaces()(str)</a> ⇒ <code>string</code>
-   <a href="./docs/TextUtils.md#TextUtils.pad_new">.pad()(\_target, \_count)</a> ⇒ <code>string</code>
-   <a href="./docs/TextUtils.md#TextUtils.injectBreakTags">.injectBreakTags(str, indexes)</a>

---
