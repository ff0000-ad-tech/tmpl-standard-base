import { h } from 'preact'

const useAutosizeFontSizes = (elArray, maxWidth, minFontSize) => {
	let finalFontSize = 9999
	const getTheWidth = (el) => {
		return el.getBoundingClientRect().width
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
		console.warn('newFs FONT SIZE====', newFs)
		console.warn('minFontSize FONT SIZE====', minFontSize)
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
		if (getTheWidth(el) > maxWidth) {
			console.warn('EL WIDTH ======', getTheWidth(el))
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

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// import { h } from 'preact'

// const useAutosizeFontSizes = (elArray, maxWidth) => {
// 	let finalFontSize = 9999

// 	// Get the elements current width
// 	const getTheWidth = (el) => {
// 		return el.getBoundingClientRect().width
// 	}

// 	// Get the elements current font size
// 	const getCurrentFontSize = (el) => {
// 		return getComputedStyle(el).getPropertyValue('font-size')
// 	}

// 	const resizeFont = (el) => {
// 		const fsString = getCurrentFontSize(el, 'font-size')
// 		// strip the 'px'  from the font size we get so we can subtract from it
// 		const fs = Number(fsString.substring(0, fsString.length - 2))
// 		const newFs = fs - 1

// 		// If the new font size is going to be less than minFontSize
// 		// then sent finalFontSize to minFontSize and stop any the resizing
// 		// if (newFs < minFontSize) {
// 		// 	finalFontSize = minFontSize
// 		// 	elArray.map((el) => {
// 		// 		el.style.fontSize = `${finalFontSize}px`
// 		// 	})
// 		// 	return
// 		// }
// 		// Font size is larger than minFontSize so do the font resize
// 		if (newFs < finalFontSize) {
// 			elArray.map((el) => {
// 				el.style.fontSize = `${newFs}px`
// 			})
// 			finalFontSize = newFs
// 		}
// 	}

// 	// While the width of the text is larger than the max width
// 	// Then resize the font lower by 1px
// 	const checkTextSize = (el) => {
// 		while (getTheWidth(el) > maxWidth) {
// 			resizeFont(el)
// 		}
// 	}

// 	// Iterate over each element passed in and run checkTextSize on it
// 	elArray.map((el) => {
// 		checkTextSize(el)
// 	})

// 	return finalFontSize
// }

// export default useAutosizeFontSizes
