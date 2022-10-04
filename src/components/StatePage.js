/**
 * The page shown when a state image is clicked.
 */

import React from 'react';
import {useNavigate} from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Banner from './Banner.js';
import MapTab from './MapTab.js';
import AnalysisTab from './AnalysisTab.js';

import axios from 'axios';

export default function StatePage(props){
	const navigate = useNavigate();
	return (<StatePageCore {...props} navigate={navigate}/>);
}

class StatePageCore extends React.Component {
	constructor(props){
		super(props);
		this.state = {mapSelectedTab: 0, dataSelectedTab: 0};
		axios.get("http://localhost:5000/muze-1.0-SNAPSHOT/data/states/current")
			.then(res => this.setState({currentBounds: JSON.parse(res.data.bounds), center: res.data.center, zoom: res.data.zoom}))
			.catch(e => console.log(e));
	}

	render(){
		const stateName = this.props.stateName;
		const mapSelectedTab = this.state.mapSelectedTab;
		const dataSelectedTab = this.state.dataSelectedTab;
		const navigate = this.props.navigate;
		const currentBounds = this.state.currentBounds;
		const center = this.state.center;
		const zoom = this.state.zoom;

		return (
			<div className='stateRoot'>
				<Banner title={stateName}/>
				<div className='contentRoot'>
					<Card sx={{flex: '1', height: '100%'}}>
					<CardContent sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={mapSelectedTab} onChange={(e, v) => this.setState({mapSelectedTab: v})} aria-label="map tabs">
								<Tab label="Current Districting Plan" id='cdp' aria-controls='cdp'/>
								<Tab label="Multi-Member Districting Plan" id='mmd' aria-controls='mmd'/>
							</Tabs>
						</Box>

						<MapTab selectedTab={mapSelectedTab} tabIndex={0} stateName={stateName} bounds={currentBounds} center={center} zoom={zoom}/>
						<MapTab selectedTab={mapSelectedTab} tabIndex={1} stateName={stateName} bounds={currentBounds} center={center} zoom={zoom}/>
					</CardContent>
					</Card>

					<Card sx={{flex: '1', height: '100%'}}>
					<CardContent sx={{width: '100%', height: '100%'}}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={dataSelectedTab} onChange={(e, v) => this.setState({dataSelectedTab: v})} aria-label="data tabs">
								<Tab label="African American Population" id='fm' aria-controls='fm'/>
								<Tab label="Hispanic Population" id='os' aria-controls='os'/>
								<Tab label="Democratic Voters" id='os' aria-controls='os'/>
								<Tab label="Republican Voters" id='os' aria-controls='os'/>
							</Tabs>
						</Box>
						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={0} stateName={stateName}/>
						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={1} stateName={stateName}/>
						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={2} stateName={stateName}/>
						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={3} stateName={stateName}/>
					</CardContent>
					</Card>
				</div>
			</div>
		);
	}
}
