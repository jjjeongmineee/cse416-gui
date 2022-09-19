/**
 * A class for showing the actual map of a state.
 */

import React from 'react';
import Box from '@mui/material/Box';
import {MapContainer, TileLayer} from 'react-leaflet';

import Data from './Data.js';
import Bounds from './Bounds.js';

export default class MapTab extends React.Component {
	render(){
		const selectedTab = this.props.selectedTab;
		const tabIndex = this.props.tabIndex;
		const stateName = this.props.stateName;
		return (
			<div role="tabpanel" hidden={selectedTab !== tabIndex} id={`mapTab${tabIndex}`} aria-labelledby={`mapTab${tabIndex}`} className='mapTab'>
				{selectedTab === tabIndex && (
					<Box sx={{width: '100%', height: '100%'}}>
						<MapContainer center={Data[stateName].center} zoom={Data[stateName].zoom} scrollWheelZoom={true}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Bounds file={Data[stateName].stateBounds}/>
							<Bounds file={Data[stateName].countyBounds}/>
						</MapContainer>
					</Box>)}
			</div>
		);
	}
}


