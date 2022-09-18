/**
 * The page shown when a state image is clicked.
 */

import React from 'react';

import {MapContainer, TileLayer} from 'react-leaflet'

import Data from './Data.js';
import Bounds from './Bounds.js';

export default class StatePage extends React.Component {
	render(){
		const stateName = this.props.stateName;

		return (
			<div className='mapHolder'>
				<MapContainer center={Data[stateName].center} zoom={Data[stateName].zoom} scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Bounds file={Data[stateName].stateBounds}/>
				</MapContainer>
			</div>
		);
	}
}
