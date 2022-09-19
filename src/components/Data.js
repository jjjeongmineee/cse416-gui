/**
 * A temporary setup for prototyping.  Takes the place of the server.
 */

import louisianaStateBounds from './geojson/louisianaStateBounds.json';

import nevadaStateBounds from './geojson/nevadaStateBounds.json';
import nevadaCountyBounds from './geojson/nevadaCountyBounds.json';
import nevadaDistrictBounds from './geojson/nevadaDistrictBounds.json'

import mississippiStateBounds from './geojson/mississippiStateBounds.json';

var Data;
export default Data = {
	'Louisiana': {
		center: [30.58, -92.32],
		zoom: 7,
		stateBounds: louisianaStateBounds
	},
	'Nevada': {
		center: [38.629, -116.631],
		zoom: 7,
		stateBounds: nevadaStateBounds,
		districtBounds: nevadaDistrictBounds,
		countyBounds: nevadaCountyBounds
	},
	'Mississippi': {
		center: [32.697, -89.655],
		zoom: 7,
		stateBounds: mississippiStateBounds
	}
};

