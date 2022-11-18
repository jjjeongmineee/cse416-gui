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
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {titleCase} from "./Utils";

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
		axios.get("http://localhost:8080/muze/data/states/list")
			.then(res => {
				this.setState({stateList: res.data});
				console.log(res.data);
			})
			.catch(e => console.log(e));
	}

	// Update the state's search string on change
	onChange = (event) => this.setState({searchStr: event.target.value});

	labelBounds = (layer, name) => {
		layer.on('mouseover', e => layer.bindTooltip(name).openTooltip());
		layer.on('click', e => this.onStateClicked(name));
	}

	onStateClicked(stateName){
		this.props.navigate("/" + stateName.toLowerCase());
	}

	onStateSelected = (event) => this.onStateClicked(event.target.value);

	render(){
		// Match the search string to the list of states (case insensitive)
		// const searchStr = this.state.searchStr.toLowerCase();
		// const effStateList = this.state.stateList.filter(e => e.toLowerCase().includes(searchStr));
		return (
			<div className='stateRoot'>
				<Banner title={"CSE 416 Team Muze"} stateList={this.state.stateList}/>
				<div className='contentRoot'>
					<Card sx={{flex: '1', height: '100%'}}>
					<CardContent sx={{width: '100%', height: '100%'}}>
							<MapContainer center={[39.8283, -98.5795]} zoom={4} dragging={true} scrollWheelZoom={false} attributionControl={false}>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								{this.state.stateList.map(e => (
									<GeoJSON data={Data[e].stateBounds} style={{weight: 1}} onEachFeature={(f, l) => this.labelBounds(l, titleCase(e))}/>
								))}
								</MapContainer>
					</CardContent>
					</Card>

					{/* <Card sx={{flex: '1'}}>
					<CardContent>
						<Box sx={{display: 'flex', alignItems: 'flex-end', padding: '0px 0px 8px 0px'}}>
							<SearchIcon sx={{mr: 1, my: 0.5}}/>
							<TextField id='search' label='Search for a state' variant='standard' type='search' onChange={this.onChange}/>
						</Box>
						<div className='images'>
							{effStateList.map(e => (
								<ImageButton text={this.titleCase(e)} src={this.stateImgMap[e.toLowerCase()]} onClick={this.onStateClicked} key={e}/>
							))}
						</div>
					</CardContent>
					</Card> */}

				</div>
			</div>
		)
	}
}
