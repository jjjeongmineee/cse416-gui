import React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

import ImageButton from './ImageButton.js';

import louisiana from './images/louisiana.jpg';
import nevada from './images/nevada.jpg';
import mississippi from './images/mississippi.jpg';

export default class Splash extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchStr: ''};
		this.onChange = this.onChange.bind(this);

		// The list of states currently implemented as a list of dictionaries containing a name and image
		this.stateList = [{text: 'Louisiana', src: louisiana},
							{text: 'Nevada', src: nevada},
							{text: 'Mississippi', src: mississippi}];
	}

	// Update the state's search string on change
	onChange = (event) => this.setState({searchStr: event.target.value});

	render(){
		// Match the search string to the list of states (case insensitive)
		const searchStr = this.state.searchStr.toLowerCase();
		const effStateList = this.stateList.filter(e => e.text.toLowerCase().includes(searchStr));

		return (
			<div className='splashRoot'>
				<Box sx={{display: 'flex', alignItems: 'flex-end'}}>
					<SearchIcon sx={{mr: 1, my: 0.5}}/>
					<TextField id='search' label='Search for a state' variant='standard' type='search' onChange={this.onChange}/>
				</Box>
				<div className='images'>
					{effStateList.map(e => (
						<ImageButton text={e.text} src={e.src} key={e.text}/>
					))}
				</div>
			</div>
		)
	}
}
