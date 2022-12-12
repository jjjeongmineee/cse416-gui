import {useRecoilState, useRecoilValue} from "recoil";
import {districtPlanListAtom, planTypeAtom, stateNameAtom} from "../atom";
import React, {useEffect} from "react";
import {PlanType} from "../data/constants";
import axios from "axios";
import Data from "../data/Data";
import {MmdTabGroup} from "./MmdTabGroup";

export function MmdTabPanels() {
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
        <div hidden={planType !== PlanType.MMD}>
            <MmdTabGroup districtPlanList={districtPlanList}/>
        </div>
    );
}
