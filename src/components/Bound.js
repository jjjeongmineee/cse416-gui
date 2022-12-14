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
                    setBounds(districtPlanList[smdPlanIdx].bounds);
                    break;
                case PlanType.MMD:
                    setBounds(districtPlanList[mmdPlanIdx].bounds);
                    break;
            }
        }
    }, [districtPlanList, smdPlanIdx, mmdPlanIdx]);

    return (
        bounds.length > 0 && bounds.map((b) => {
            return (
                <GeoJSON data={JSON.parse(b)} style={{weight: 1}}/>
            );
        })
    );
}
