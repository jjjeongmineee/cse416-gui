import React from 'react';

export default class ImageButton extends React.Component {
	render(){
		const src = this.props.src;
		const text = this.props.text;
		return (
			<div className='thirdSquare'>
				<div className='imgWrapper'>
					<img src={src} alt={text}/>
				</div>
				<div className='imgBtnText'>{text}</div>
			</div>
		);
	}
}
