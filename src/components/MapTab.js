/**
 * A class for showing the actual map of a state.
 */

import React from 'react';
import Box from '@mui/material/Box';
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';

import Data from './Data.js';

export default class MapTab extends React.Component {
	render(){
		const selectedTab = this.props.selectedTab;
		const tabIndex = this.props.tabIndex;
		const stateName = this.props.stateName;
		return (
			<div role="tabpanel" hidden={selectedTab !== tabIndex} id={`mapTab${tabIndex}`} aria-labelledby={`mapTab${tabIndex}`} className='tabPanel'>
				{selectedTab === tabIndex && (
					<div className='mapSubpane'>
						<Box sx={{width: '100%', height: '100%'}} className='mapWrapper'>
							<MapContainer center={Data[stateName].center} zoom={Data[stateName].zoom} scrollWheelZoom={true}>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<GeoJSON file={Data[stateName].stateBounds}/>
								<GeoJSON file={Data[stateName].countyBounds}/>
							</MapContainer>
						</Box>

						<div className='spaceBetweend'>
							<div>
								<input type='checkbox' id='county'/>
								<label for='county'>County</label>
							</div>

							<div>
								<input type='checkbox' id='currentDistricting' checked/>
								<label for='currentDistricting'>Current Districting</label>
							</div>

							<div>
								<input type='checkbox' id='redistricting'/>
								<label for='redistricting'>Redistricting</label>
							</div>

							<div>
								<input type='checkbox' id='precinct'/>
								<label for='precinct'>Precinct</label>
							</div>
					</div>
					</div>)}
			</div>
		);
	}
}


