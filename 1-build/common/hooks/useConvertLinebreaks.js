import { h } from 'preact'

const useConvertLineBreaks = (str) => {
	// Split the string on <br> tags
	let arr = str.split('<br>')
	// If array length is 1 or less then no <br> tags were found
	if (arr.length <= 1) return arr

	// Use reduce to add proper jsx <br/> tags after every element in the array
	let result = arr.reduce((r, a) => r.concat(a, <br />), [])
	// Remove the last <br/> that gets added during the reduce
	result.pop()

	return result
}

export default useConvertLineBreaks
