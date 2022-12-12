import React, {useEffect} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {districtPlanListAtom, planTypeAtom, stateNameAtom} from "../atom";
import {PlanType} from "../data/constants";
import axios from "axios";
import Data from "../data/Data";
import {SmdTabGroup} from "./SmdTabGroup";

export function SmdTabPanels() {
    const stateName = useRecoilValue(stateNameAtom);
    const planType = useRecoilValue(planTypeAtom);
    const [districtPlanList, setDistrictPlanList] = useRecoilState(districtPlanListAtom);

    useEffect(() => {
        const planTypeCode = planType === PlanType.SMD ? 'smd' : 'mmd';
        axios.get("http://localhost:8080/muze/data/states/" + Data[stateName].postal + "/" + planTypeCode + "/plans")
            .then((res) => {
                setDistrictPlanList(res.data);
            })
            .catch(e => {
                console.log(e)
            });
    }, [planType]);

    return (
        <div hidden={planType !== PlanType.SMD}>
            <SmdTabGroup districtPlanList={districtPlanList}/>
        </div>
    );
}
