/**
 * A simple class that shows an image with blur and darkening (animated down on hover) and text over it.
 */

import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ImageButton(props){
	const navigate = useNavigate();
	return (
		<div className='thirdSquare'>
			<div className='imgWrapper' onClick={() => navigate(props.route)}>
				<img src={props.src} alt={props.text}/>
			</div>
			<div className='imgBtnText'>{props.text}</div>
		</div>
	);
}
