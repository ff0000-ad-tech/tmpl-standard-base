import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import ComponentBasic from '../ComponentBasic'
import ComponentMethods from '../ComponentMethods'
import DemoElement from '../DemoElement'
import ComponentTextFitParagraph from '../ComponentTextFitParagraph'
import HookTextFit from '../HookTextFit'
import Cta from '../Cta'
import MatchupInline from '../MatchupInline'
import MatchupStacked from '../MatchupStacked'

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
				<div className="ad__inner-container">
					<ComponentBasic />
					<ComponentMethods ref={(el) => (this.componentMethods = el)} />
					<DemoElement name="Component TextFitParagraph" width="250px" height="150px">
						<ComponentTextFitParagraph minFontSize={1} maxFontSize={50}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</ComponentTextFitParagraph>
					</DemoElement>
					<DemoElement name="Hook TextFit" width="250px" height="150px">
						<HookTextFit />
					</DemoElement>
					<DemoElement name="Component CTA" width="150px" height="150px">
						<Cta />
					</DemoElement>
					<DemoElement name="ESPN Lockup Inline" width="300px" height="150px">
						<MatchupInline
							homeTeamName="Alabama State"
							homeTeamRank="4"
							vsat="vs"
							awayTeamName="Mississippi State is cool"
							awayTeamRank="1"
						/>
					</DemoElement>
					<DemoElement name="ESPN Lockup Stacked" width="300px" height="150px">
						<MatchupStacked
							homeTeamName="Alabama State"
							homeTeamRank="4"
							vsat="vs"
							awayTeamName="Mississippi State is cool"
							awayTeamRank="1"
						/>
					</DemoElement>
				</div>
			</div>
		)
	}
}
export default Ad
