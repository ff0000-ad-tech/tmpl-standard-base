/**
 * @memberOf Velvet
 * @method convertBreaks
 * @param {string} str
 * 	The string to convert
 * @description
 * 	Converts the string new line and return characters to html break tags
 * @example
 * // Get the string from Velvet
 * var myString = Velvet.get('myString') // "This Is\r\nMy Sentence"
 * // convert to html friendly
 * myString = Velvet.convertBreaks(myString)  // "This Is<br>My Sentence"
 */
export const convertBreaks = str => str.replace(/\r?\n|\r/g, '<br>')
