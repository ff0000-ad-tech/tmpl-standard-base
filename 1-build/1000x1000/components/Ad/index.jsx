import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import ComponentBasic from '../ComponentBasic'
import ComponentMethods from '../ComponentMethods'
import DemoElement from '../DemoElement'
import TextFit from '../TextFit'
import HookTextFit from '../HookTextFit'
import Cta from '../Cta'
import MatchupInline from '../MatchupInline'
import MatchupStacked from '../MatchupStacked'
import Networks from '../Networks'
import SpritePlayer from '../SpritePlayer'

// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'
import '@size/images/woman_bike_spritesheet.png'

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
					<DemoElement name="Component TextFit" width="250px" height="150px">
						<TextFit minFontSize={1} maxFontSize={50}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</TextFit>
					</DemoElement>
					<DemoElement name="Hook TextFit" width="250px" height="150px">
						<HookTextFit />
					</DemoElement>
					<DemoElement name="Component CTA" width="150px" height="150px">
						<Cta text="Click Me Now!" />
					</DemoElement>
					<DemoElement name="Component CTA Fit" width="150px" height="150px">
						<Cta text="Click Me now or else!" fit width="120px" height="30px" minFont="1" />
					</DemoElement>
					<DemoElement name="ESPN Matchup Inline" width="300px" height="150px">
						<MatchupInline homeTeamName="Alabama State" homeTeamRank="4" vsat="vs" awayTeamName="Mississippi State" awayTeamRank="1" />
					</DemoElement>
					<DemoElement name="ESPN Matchup Stacked" width="300px" height="150px">
						<MatchupStacked homeTeamName="Alabama State" homeTeamRank="4" vsat="vs" awayTeamName="Mississippi State" awayTeamRank="1" />
					</DemoElement>
					<DemoElement name="ESPN Networks" width="200px" height="150px">
						<Networks networks={adData.networks} logoHeight="20" />
					</DemoElement>
					<DemoElement name="Sprite Player" width="200px" height="150px">
						<SpritePlayer
							className="ad__spriteplayer-woman"
							spritesheet="woman_bike_spritesheet"
							autoStart
							frames={39}
							duration={1}
							loopCount={30}
							speed={1}
						/>
					</DemoElement>
				</div>
			</div>
		)
	}
}
export default Ad
