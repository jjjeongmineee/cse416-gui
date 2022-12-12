import React, {Suspense} from "react";
import DistrictPlanTypeSelector from "./DistrctPlanTypeSelector";
import {Button, Card, CardContent} from "@mui/material";
import {DataType, PlanType} from "../data/constants";
import {useSetRecoilState} from "recoil";
import {dataTypeAtom, planTypeAtom} from "../atom";
import {SmdTabPanels} from "./SmdTabPanels";
import {MmdTabPanels} from "./MmdTabPanels";

export default function DistrictPlanInformationTabs() {
    const setPlanType = useSetRecoilState(planTypeAtom);
    const setDataType = useSetRecoilState(dataTypeAtom);

    const handleReset = () => {
        setPlanType(PlanType.SMD);
        setDataType(DataType.SUMMARY);
    }

    return (
        <Card sx={{height: '100%', width: '100%'}}>
            <CardContent sx={{width: '100%', height: '100%'}}>
                <Button variant="outlined" onClick={handleReset}>Reset State</Button>
                <DistrictPlanTypeSelector/>
                <Suspense>
                    <SmdTabPanels/>
                    <MmdTabPanels/>
                </Suspense>
            </CardContent>
        </Card>

    );
}
