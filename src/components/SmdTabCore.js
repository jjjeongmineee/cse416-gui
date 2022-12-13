import React from "react";
import {useRecoilValue} from "recoil";
import {districtPlanListAtom, planTypeAtom} from "../atom";
import {PlanType} from "../data/constants";
import {SmdTabPanels} from "./SmdTabPanels";

export function SmdTabCore() {
    const planType = useRecoilValue(planTypeAtom);
    const districtPlanList = useRecoilValue(districtPlanListAtom);

    return (
        <div hidden={planType !== PlanType.SMD}>
            <SmdTabPanels districtPlanList={districtPlanList}/>
        </div>
    );
}
