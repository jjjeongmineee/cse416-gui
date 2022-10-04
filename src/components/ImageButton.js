/**
 * A simple class that shows an image with blur and darkening (animated down on hover) and text over it.
 */

import React from 'react';

export default function ImageButton(props){
	return (
		<div className='thirdSquare'>
			<div className='imgWrapper' onClick={() => props.onClick(props.text)}>
				<img src={props.src} alt={props.text}/>
			</div>
			<div className='imgBtnText'>{props.text}</div>
		</div>
	);
}
