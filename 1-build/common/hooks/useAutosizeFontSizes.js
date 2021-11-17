import { h } from 'preact'

const useAutosizeFontSizes = (elArray, maxWidth, minFontSize, useHeight = false) => {
	let finalFontSize = 9999

	const getScrollWidth = (el) => {
		return el.scrollWidth
	}

	// Get the elements current font size
	const getCurrentFontSize = (el) => {
		return getComputedStyle(el).getPropertyValue('font-size')
	}

	const resizeFont = (el) => {
		const fsString = getCurrentFontSize(el)
		// strip the 'px'  from the font size we get so we can subtract from it
		const fs = Number(fsString.substring(0, fsString.length - 2))
		const newFs = fs - 1

		if (newFs < minFontSize) {
			elArray.map((el) => {
				finalFontSize = minFontSize
				el.style.fontSize = `${minFontSize}px`
			})
		} else if (newFs < finalFontSize) {
			elArray.map((el) => {
				el.style.fontSize = `${newFs}px`
			})
			finalFontSize = newFs
			checkTextSize(el)
		}
	}

	// While the width of the text is larger than the max width
	// Then resize the font lower by 1px
	const checkTextSize = (el) => {
		if (getScrollWidth(el) > maxWidth) {
			resizeFont(el)
		}
	}

	// Iterate over each element passed in and run checkTextSize on it
	elArray.map((el) => {
		checkTextSize(el)
	})

	return finalFontSize
}

export default useAutosizeFontSizes
