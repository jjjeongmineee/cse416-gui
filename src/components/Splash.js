/**
 * The splash screen for the app.
 * Displays a list of tiles of images of a state and the state name that are clickable, and a search bar that filters them.
 */

import React from 'react';
import {useNavigate} from 'react-router-dom';
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import ImageButton from './ImageButton.js';
import Banner from './Banner.js';
import Data from './Data.js';

import louisiana from './images/louisiana.jpg';
import nevada from './images/nevada.jpg';
import mississippi from './images/mississippi.jpg';

import axios from 'axios';

export default function Splash(props){
	const navigate = useNavigate();
	return (<SplashLOC navigate={navigate} {...props}/>);
}

// The lower order splash component, does all the hard stuff but takes advantage of the useNavigate hook
class SplashLOC extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchStr: '', stateList: []};
		this.onChange = this.onChange.bind(this);
		this.labelBounds = this.labelBounds.bind(this);
		this.onStateClicked = this.onStateClicked.bind(this);

		// A mapping of state names to images
		this.stateImgMap = {'louisiana': louisiana, 'nevada': nevada, 'mississippi': mississippi};

		// Get the list of currently implemented states from the server
		axios.get("http://localhost:5000/muze-1.0-SNAPSHOT/data/states/list").then(res => this.setState({stateList: res.data}));
	}

	// Update the state's search string on change
	onChange = (event) => this.setState({searchStr: event.target.value});

	labelBounds = (layer, name) => {
		layer.on('mouseover', e => layer.bindTooltip(name).openTooltip());
		layer.on('click', e => this.onStateClicked(name));
	}

	titleCase = str => str.split(' ').map(s => s[0].toUpperCase()+s.substring(1)).join(' ');

	onStateClicked(stateName){
		stateName = stateName.toLowerCase();
		axios.get("http://localhost:5000/muze-1.0-SNAPSHOT/data/states/select/" + stateName).then(res => {
			if (res.status === 200)
				this.props.navigate("/" + stateName);
		});
	}

	render(){
		// Match the search string to the list of states (case insensitive)
		const searchStr = this.state.searchStr.toLowerCase();
		console.log(this.state.stateList);
		const effStateList = this.state.stateList.filter(e => e.toLowerCase().includes(searchStr));

		return (
			<div className='stateRoot'>
				<Banner title={"CSE 416 Team Muze"}/>
				<div className='contentRoot'>
					<Card sx={{flex: '1', height: '100%'}}>
					<CardContent sx={{width: '100%', height: '100%'}}>
							<MapContainer center={[39.8283, -98.5795]} zoom={4} dragging={false} scrollWheelZoom={false} attributionControl={false}>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								{effStateList.map(e => (
									<GeoJSON data={Data[e].stateBounds} style={{weight: 1}} onEachFeature={(f, l) => this.labelBounds(l, this.titleCase(e))}/>
								))}
								</MapContainer>
					</CardContent>
					</Card>

					<Card sx={{flex: '1'}}>
					<CardContent>
						<Box sx={{display: 'flex', alignItems: 'flex-end', padding: '0px 0px 8px 0px'}}>
							<SearchIcon sx={{mr: 1, my: 0.5}}/>
							<TextField id='search' label='Search for a state' variant='standard' type='search' onChange={this.onChange}/>
						</Box>
						<div className='images'>
							{effStateList.map(e => (
								<ImageButton text={this.titleCase(e)} src={this.stateImgMap[e]} onClick={this.onStateClicked} key={e}/>
							))}
						</div>
					</CardContent>
					</Card>
				</div>
			</div>
		)
	}
}
