/**
 * The page shown when a state image is clicked.
 */

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

import MapTab from './MapTab.js';
import AnalysisTab from './AnalysisTab.js';

export default class StatePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {mapSelectedTab: 0, dataSelectedTab: 0};
	}

	render(){
		const stateName = this.props.stateName;
		const mapSelectedTab = this.state.mapSelectedTab;
		const dataSelectedTab = this.state.dataSelectedTab;

		return (
			<div className='stateRoot'>
				<div className='stateBanner'>
					<IconButton onClick={() => console.log("Home")}>
						<HomeIcon/>
					</IconButton>
					<div className='stateLabel'>{stateName}</div>
				</div>
				<div className='stateContent'>
					<div className='halfHolder'>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={mapSelectedTab} onChange={(e, v) => this.setState({mapSelectedTab: v})} aria-label="map tabs">
								<Tab label="Current Districting Plan" id='cdp' aria-controls='cdp'/>
								<Tab label="Multi-Member Districting Plan" id='mmd' aria-controls='mmd'/>
							</Tabs>
						</Box>

						<MapTab selectedTab={mapSelectedTab} tabIndex={0} stateName={stateName}/>
						<MapTab selectedTab={mapSelectedTab} tabIndex={1} stateName={stateName}/>
					</div>

					<div className='halfHolder'>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={dataSelectedTab} onChange={(e, v) => this.setState({dataSelectedTab: v})} aria-label="data tabs">
								<Tab label="Fairness Metrics" id='fm' aria-controls='fm'/>
								<Tab label="Other stuff?" id='os' aria-controls='os'/>
							</Tabs>
						</Box>
						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={0} stateName={stateName}/>
					</div>
				</div>
			</div>
		);
	}
}
