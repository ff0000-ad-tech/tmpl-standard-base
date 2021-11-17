import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import ComponentBasic from '../ComponentBasic'
import ComponentMethods from '../ComponentMethods'
import DemoElement from '../DemoElement'
import ComponentTextFitParagraph from '../ComponentTextFitParagraph'
import HookAutosizeFontSizes from '../HookAutosizeFontSizes'

// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="ad" onClick={this.props.onClick} onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>
				<ComponentBasic ref={(el) => (this.componentBasic = el)} />
				<ComponentMethods ref={(el) => (this.componentMethods = el)} />
				<DemoElement name="Component TextFitParagraph" width="250px" height="150px" ref={(el) => (this.componentTextFitParagraph = el)}>
					<ComponentTextFitParagraph minFontSize={1} maxFontSize={50}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</ComponentTextFitParagraph>
				</DemoElement>
				<DemoElement name="Hook AutosizeFontSizes" width="250px" height="150px" ref={(el) => (this.componentTextFitParagraph = el)}>
					<HookAutosizeFontSizes />
				</DemoElement>
			</div>
		)
	}
}
export default Ad
