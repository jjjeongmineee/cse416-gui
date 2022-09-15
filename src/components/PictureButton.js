import React from 'react';

export default class PictureButton extends React.Component {
	render(){
		const path = this.props.path;
		const text = this.props.text;
		return (
			<div className='thirdSquare'>
				<img src={path} alt={text}/>
				<div className='imgBtnText'>{text}</div>
			</div>
		);
	}
}
