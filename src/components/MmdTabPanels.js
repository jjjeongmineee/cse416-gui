import {useRecoilState, useRecoilValue} from "recoil";
import {dataTypeAtom, dataTypeIndexSelector, planTypeAtom, stateNameAtom} from "../atom";
import {districtPlanQuery} from "../api/districtPlan";
import {a11yProps, TabPanel} from "./TabPanel";
import SummaryTable from "./SummaryTable";
import React from "react";
import {DataType, PlanType} from "../data/constants";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PoliticalTable from "./PoliticalTable";
import RacialTable from "./RacialTable";

export function MmdTabPanels() {
    const stateName = useRecoilValue(stateNameAtom);
    const planType = useRecoilValue(planTypeAtom);
    const [dataType, setDataType] = useRecoilState(dataTypeAtom);
    const dataTypeIndex = useRecoilValue(dataTypeIndexSelector);
    const districtPlan = useRecoilValue(districtPlanQuery({
        selectedState: stateName,
        planType: planType,
        dataType: dataType
    }));

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                setDataType(DataType.SUMMARY);
                break;
            case 1:
                setDataType(DataType.POLITICAL);
                break;
            case 2:
                setDataType(DataType.RACIAL);
                break;
        }
    }

    return (
        <div hidden={planType !== PlanType.MMD}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={dataTypeIndex} onChange={handleChange} aria-label="data tabs">
                    <Tab label={DataType.SUMMARY} sx={{margin: "auto"}} {...a11yProps(0)}/>
                    <Tab label={DataType.POLITICAL} sx={{margin: "auto"}} {...a11yProps(1)}/>
                    <Tab label={DataType.RACIAL} sx={{margin: "auto"}} {...a11yProps(2)}/>
                </Tabs>
            </Box>
            <TabPanel value={dataTypeIndex} index={0}>
                <SummaryTable summary={districtPlan}/>
            </TabPanel>
            <TabPanel value={dataTypeIndex} index={1}>
                <PoliticalTable political={districtPlan}/>
            </TabPanel>
            <TabPanel value={dataTypeIndex} index={2}>
                <RacialTable racial={districtPlan}/>
            </TabPanel>
        </div>
    );
}
