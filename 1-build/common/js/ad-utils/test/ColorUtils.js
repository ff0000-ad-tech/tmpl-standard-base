import { expect } from 'chai'
import {
	ColorUtils,
} from '../index'

describe('Color Utils', function() {
	describe('toRgba', function () {
		it('should turn hex string to RGBA object', function() {
			expect(ColorUtils.toRgba('#FF0000')).to.deep.equal({
				r: 255,
				g: 0,
				b: 0,
				a: 1
			})
		})
	})
	
	describe('toRgbaString', function () {
		it('should turn RGBA object to rgba() string', function() {
			const rgbaObj = {
				r: 255,
				g: 0,
				b: 0,
				a: 1
			}

			expect(ColorUtils.toRgbaString(rgbaObj)).to.equal('rgba(255,0,0,1)')
		})
	})
})