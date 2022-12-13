import {useRecoilValue} from "recoil";
import {districtPlanListAtom, planTypeAtom} from "../atom";
import React from "react";
import {PlanType} from "../data/constants";
import {MmdTabPanels} from "./MmdTabPanels";

export function MmdTabCore() {
    const planType = useRecoilValue(planTypeAtom);
    const districtPlanList = useRecoilValue(districtPlanListAtom);

    return (
        <div hidden={planType !== PlanType.MMD}>
            <MmdTabPanels districtPlanList={districtPlanList}/>
        </div>
    );
}
