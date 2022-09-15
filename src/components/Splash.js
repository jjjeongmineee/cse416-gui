import React from 'react';
import PictureButton from './PictureButton.js';

export default class Splash extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='splashRoot'>
				<PictureButton text='Louisiana' path={require('./images/louisiana.jpg')}/>
				<PictureButton text='Nevada' path={require('./images/nevada.jpg')}/>
				<PictureButton text='Mississippi' path={require('./images/mississippi.jpg')}/>
			</div>
		)
	}
}
