/**
 * @name Velvet.events
 * @desc
 * 	<a href="https://github.com/ff0000-ad-tech/ad-velvet">Github repo</a>
 * 	<br><br>
 * 	This module has custom events to be used with {@link Velvet}
 */

/**
 * @memberOf Velvet.events
 * @const {string} INIT
 * @desc
 *     Represents a 'velvetInit', fired when Velvet has completed its data load.
 * @example
 * Velvet.events.INIT
 */
export const INIT = 'velvetInit'

/**
 * @memberOf Velvet.events
 * @const {string} FAIL
 * @desc
 *     Represents a 'velvetFail', fired if Velvet has a fail during its load.
 * @example
 * Velvet.events.FAIL
 */
export const FAIL = 'velvetFail'

/**
 * @memberOf Velvet.events
 * @const {string} STATIC
 * @desc
 *     Represents a 'velvetStatic', fired when the ad_rotation in the loaded segment JSON has USE_STATIC rather than an addata slug.
 * @example
 * Velvet.events.STATIC
 */
export const STATIC = 'velvetStatic'
