import React from 'react';

export default function Score(props) {
	
	return (
		<CircularProgressbar value={100-el*100} text={`p=${el}`} minValue={75} circleRatio={0.75}/>
	);
}
