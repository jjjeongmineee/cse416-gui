import {useRecoilState, useRecoilValue} from "recoil";
import {boundsAtom, districtPlanListAtom, mmdPlanIdxAtom, planTypeAtom, smdPlanIdxAtom} from "../atom";
import {GeoJSON} from "react-leaflet";
import React, {useMemo} from "react";
import {PlanType} from "../data/constants";

export function Bound() {
    const [bounds, setBounds] = useRecoilState(boundsAtom);
    const planType = useRecoilValue(planTypeAtom);
    const districtPlanList = useRecoilValue(districtPlanListAtom);
    const smdPlanIdx = useRecoilValue(smdPlanIdxAtom);
    const mmdPlanIdx = useRecoilValue(mmdPlanIdxAtom);

    useMemo(() => {
        if (districtPlanList && districtPlanList.length) {
            switch (planType) {
                case PlanType.SMD:
                    setBounds(JSON.parse(districtPlanList[smdPlanIdx].bounds));
                    break;
                case PlanType.MMD:
                    setBounds(JSON.parse(districtPlanList[mmdPlanIdx].bounds));
                    break;
            }
        }
    }, [districtPlanList, smdPlanIdx, mmdPlanIdx]);

    return (
        bounds && <GeoJSON data={bounds} style={{weight: 1}}/>
    );
}
