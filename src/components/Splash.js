import React from 'react';
import ImageButton from './ImageButton.js';
import louisiana from './images/louisiana.jpg';
import nevada from './images/nevada.jpg';
import mississippi from './images/mississippi.jpg';

export default class Splash extends React.Component {
	render(){
		return (
			<div className='splashRoot'>
				<ImageButton text='Louisiana' src={louisiana}/>
				<ImageButton text='Nevada' src={nevada}/>
				<ImageButton text='Mississippi' src={mississippi}/>
			</div>
		)
	}
}
