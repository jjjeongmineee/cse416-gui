/**
 * A temporary setup for prototyping.  Takes the place of the server.
 */

// louisiana data
import louisianaStateBounds from './geojson/louisianaStateBounds.json';
import louisianaCountyBounds from './geojson/louisianaCountyBounds.json';
import louisianaDistrictBounds from './geojson/louisianaDistrictBounds.json';

// nevada data
import nevadaStateBounds from './geojson/nevadaStateBounds.json';
import nevadaCountyBounds from './geojson/nevadaCountyBounds.json';
import nevadaDistrictBounds from './geojson/nevadaDistrictBounds.json'

// mississippi data
import mississippiStateBounds from './geojson/mississippiStateBounds.json';
import mississippiCountyBounds from './geojson/mississippiCountyBounds.json';
import mississippiDistrictBounds from './geojson/mississippiDistrictBounds.json';

var Data;
export default Data = {
	'louisiana': {
		center: [30.58, -92.32],
		zoom: 7,
		stateBounds: louisianaStateBounds,
		countyBounds: louisianaCountyBounds,
		districtBounds: louisianaDistrictBounds
	},
	'nevada': {
		center: [38.629, -116.631],
		zoom: 6,
		stateBounds: nevadaStateBounds,
		countyBounds: nevadaCountyBounds,
		districtBounds: nevadaDistrictBounds
	},
	'mississippi': {
		center: [32.697, -89.655],
		zoom: 7,
		stateBounds: mississippiStateBounds,
		countyBounds: mississippiCountyBounds,
		districtBounds: mississippiDistrictBounds
	}
};

