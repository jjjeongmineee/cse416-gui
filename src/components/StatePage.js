/**
 * The page shown when a state image is clicked.
 */

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import MapTab from './MapTab.js';

export default class StatePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {selectedTab: 0};
	}

	render(){
		const stateName = this.props.stateName;
		const selectedTab = this.state.selectedTab;

		return (
			<div className='stateRoot'>
				<div className='mapHolder'>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={selectedTab} onChange={(e, v) => this.setState({selectedTab: v})} aria-label="basic tabs example">
							<Tab label="Current Districting Plan" id='cdp' ariaControls='cdp'/>
							<Tab label="Multi-Member Districting Plan" id='mmd' ariaControls='mmd'/>
						</Tabs>
					</Box>

					<MapTab selectedTab={selectedTab} tabIndex={0} stateName={stateName}/>
					<MapTab selectedTab={selectedTab} tabIndex={1} stateName={stateName}/>
				</div>
				<div className='dataHolder'>
					<div className='dataChild'>
						Data
					</div>
				</div>
			</div>
		);
	}
}
