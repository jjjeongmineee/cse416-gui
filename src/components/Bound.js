import {useRecoilValue, useSetRecoilState} from "recoil";
import {boundsAtom, boundsSelector, districtPlanListAtom, mmdPlanIdxAtom, planTypeAtom, smdPlanIdxAtom} from "../atom";
import React, {useEffect, useMemo, useRef} from "react";
import {PlanType} from "../data/constants";
import {GeoJSON} from "react-leaflet";

export function Bound() {
    const setBounds = useSetRecoilState(boundsAtom);
    const planType = useRecoilValue(planTypeAtom);
    const districtPlanList = useRecoilValue(districtPlanListAtom);
    const smdPlanIdx = useRecoilValue(smdPlanIdxAtom);
    const mmdPlanIdx = useRecoilValue(mmdPlanIdxAtom);
    const bounds = useRecoilValue(boundsSelector);
    const geoJsonRef = useRef();

    useMemo(() => {
        if (districtPlanList && districtPlanList.length) {
            switch (planType) {
                case PlanType.SMD:
                    setBounds(districtPlanList[smdPlanIdx].boundsList);
                    break;
                case PlanType.MMD:
                    setBounds(districtPlanList[mmdPlanIdx].boundsList);
                    break;
            }
        }
    }, [districtPlanList, smdPlanIdx, mmdPlanIdx]);

    useEffect(() => {
        if (geoJsonRef.current) {
            geoJsonRef.current.clearLayers()   // remove old data
            geoJsonRef.current.addData(bounds) // might need to be geojson.features
        }
    }, [geoJsonRef, bounds])

    return (
        <div>
            bounds.length > 0 && <GeoJSON ref={geoJsonRef} data={bounds} style={{weight: 1}}/>
        </div>
    );
}
