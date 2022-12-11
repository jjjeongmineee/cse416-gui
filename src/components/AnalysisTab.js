import React from 'react';

import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import aaPercent from '../data/images/aaPercent.png';

export default class AnalysisTab extends React.Component {
	pValueToPercent(p){
		if (p > 0.1)
			return 0.2;
		if (p > 0.05)
			return 0.4;
		if (p > 0.01)
			return 0.6;
		if (p > 0.001)
			return 0.8;
		return 1;
	}

	render(){
		const selectedTab = this.props.selectedTab;
		const tabIndex = this.props.tabIndex;
		const stateName = this.props.stateName;

		const pVals = [0.05, 0.01, 0.001];

		return (
			<div role="tabpanel" hidden={selectedTab !== tabIndex} id={`analysisTab${tabIndex}`} aria-labelledby={`analysisTab${tabIndex}`} className='tabPanel'>
				{selectedTab === tabIndex && (
					<div className='analysisSubpane'>
						<div className='graph'>
							<img src={aaPercent} alt='AA percent' className='graphImg'/>
						</div>
						<div className='pValHolder'>
							{pVals.map((el) =>
							<div className='paddedProgress' key={el}>
								<CircularProgressbar value={100-el*100} text={`p=${el}`} minValue={75} circleRatio={0.75} styles={buildStyles({
									rotation: 0.625,
									pathTransitionDuration: 0.5
								})}/>
							</div>)}
						</div>
					</div>
				)}
			</div>
		);
	}
}


