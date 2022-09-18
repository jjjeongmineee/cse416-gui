import {useMap} from "react-leaflet";
import L from "leaflet";

export default function Bounds({file}) {
	const map = useMap();
	L.geoJSON(file).addTo(map);
	return null;
}
