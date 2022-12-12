import {useRecoilValue} from "recoil";
import {statePlanAtom} from "../atom";
import {GeoJSON} from "react-leaflet";

export function Bound() {
    const statePlan = useRecoilValue(statePlanAtom);

    return (
        statePlan.bounds && <GeoJSON data={statePlan.bounds} style={{weight: 1}}/>
    );
}
