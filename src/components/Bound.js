import {useRecoilState} from "recoil";
import {boundsAtom} from "../atom";
import {GeoJSON} from "react-leaflet";
import {useEffect} from "react";

export function Bound() {
    const [bounds, setBounds] = useRecoilState(boundsAtom);

    useEffect(() => {

    });

    return (
        bounds && <GeoJSON data={bounds} style={{weight: 1}}/>
    );
}
