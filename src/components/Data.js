/**
 * A temporary setup for prototyping.  Takes the place of the server.
 */

import louisianaStateBounds from './geojson/louisianaStateBounds.json';
import nevadaStateBounds from './geojson/nevadaStateBounds.json';
import mississippiStateBounds from './geojson/mississippiStateBounds.json';

var Data;
export default Data = {
	'Louisiana': {
		center: [30.58, -92.32],
		zoom: 7,
		stateBounds: louisianaStateBounds
	},
	'Nevada': {
		center: [38.6, -116.9],
		zoom: 7,
		stateBounds: nevadaStateBounds
	},
	'Mississippi': {

		zoom: 7,
		stateBounds: mississippiStateBounds
	}
};

