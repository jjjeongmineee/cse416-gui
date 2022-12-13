import React, {useEffect, useMemo} from "react";
import DistrictPlanTypeSelector from "./DistrctPlanTypeSelector";
import {Button, Card, CardContent} from "@mui/material";
import {PlanType} from "../data/constants";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
    districtEnsembleSummaryAtom,
    districtPlanListAtom,
    mmdPlanIdxAtom,
    planTypeAtom,
    smdPlanIdxAtom,
    stateNameAtom
} from "../atom";
import {SmdTabCore} from "./SmdTabCore";
import {MmdTabCore} from "./MmdTabCore";
import axios from "axios";
import Data from "../data/Data";

export default function DistrictPlanInformationTabs() {
    const stateName = useRecoilValue(stateNameAtom);
    const [planType, setPlanType] = useRecoilState(planTypeAtom);
    const setSmdPlanIdx = useSetRecoilState(smdPlanIdxAtom);
    const setMmdPlanIdx = useSetRecoilState(mmdPlanIdxAtom);
    const setDistrictPlanList = useSetRecoilState(districtPlanListAtom);
    const setDistrictEnsembleSummaryAtom = useSetRecoilState(districtEnsembleSummaryAtom);

    useMemo(() => {
        const planTypeCode = planType === PlanType.SMD ? 'smd' : 'mmd';
        axios.get("http://localhost:8080/muze/data/states/" + Data[stateName].postal + "/" + planTypeCode + "/plans")
            .then((res) => {
                setDistrictPlanList(res.data.districtPlanList);
                setDistrictEnsembleSummaryAtom(res.data.ensembleSummary);
            })
            .catch(e => {
                console.log(e)
            });
    }, [planType]);

    const handleReset = () => {
        setPlanType(PlanType.SMD);
        setSmdPlanIdx(0);
        setMmdPlanIdx(0);
    }

    return (
        <Card sx={{height: '100%', width: '100%'}}>
            <CardContent sx={{width: '100%', height: '100%'}}>
                <Button variant="outlined" onClick={handleReset}>Reset State</Button>
                <DistrictPlanTypeSelector/>
                <SmdTabCore/>
                <MmdTabCore/>
            </CardContent>
        </Card>

    );
}
