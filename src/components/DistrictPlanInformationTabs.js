import React from "react";
import DistrictPlanTypeSelector from "./DistrctPlanTypeSelector";
import {Button, Card, CardContent} from "@mui/material";
import {PlanType} from "../data/constants";
import {useSetRecoilState} from "recoil";
import {mmdPlanIdxAtom, planTypeAtom, smdPlanIdxAtom} from "../atom";
import {SmdTabPanels} from "./SmdTabPanels";
import {MmdTabPanels} from "./MmdTabPanels";

export default function DistrictPlanInformationTabs() {
    const setPlanType = useSetRecoilState(planTypeAtom);
    const setSmdPlanIdx = useSetRecoilState(smdPlanIdxAtom);
    const setMmdPlanIdx = useSetRecoilState(mmdPlanIdxAtom);

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
                <SmdTabPanels/>
                <MmdTabPanels/>
            </CardContent>
        </Card>

    );
}
