import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class AnalysisTab extends React.Component {
	render(){
		const selectedTab = this.props.selectedTab;
		const tabIndex = this.props.tabIndex;
		const stateName = this.props.stateName;

		return (
			<div role="tabpanel" hidden={selectedTab !== tabIndex} id={`analysisTab${tabIndex}`} aria-labelledby={`analysisTab${tabIndex}`} className='tabPanel'>
				{selectedTab === tabIndex && (
					<div className='analysisSubpane'>
					</div>
				)}
			</div>
		);
	}
}
