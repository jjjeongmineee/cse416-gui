import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, {useState} from "react";
import PropTypes from "prop-types";
import DistrictPlanTypeSelector from "./DistrctPlanTypeSelector";
import {Card, CardContent} from "@mui/material";
import SummaryTable from "./SummaryTable";
import PoliticalTable from "./PoliticalTable";
import RacialTable from "./RacialTable";

const DataType = {
    SUMMARY: "Summary",
    POLITICAL: "Political",
    RACIAL: "Racial"
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DistrictPlanInformationTabs() {
    const [dataType, setDataType] = useState(DataType.SUMMARY);
    const [dataTypeIndex, setDataTypeIndex] = useState(0);

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                setDataType(DataType.SUMMARY);
                setDataTypeIndex(newValue);
                break;
            case 1:
                setDataType(DataType.POLITICAL);
                setDataTypeIndex(newValue);
                break;
            case 2:
                setDataType(DataType.RACIAL);
                setDataTypeIndex(newValue);
                break;
        }
    }

    return (
        <Card sx={{height: '100%', width: '100%'}}>
            <CardContent sx={{width: '100%', height: '100%'}}>
                <DistrictPlanTypeSelector/>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={dataTypeIndex} onChange={handleChange} aria-label="data tabs">
                        <Tab label={DataType.SUMMARY} sx={{margin: "auto"}} {...a11yProps(0)}/>
                        <Tab label={DataType.POLITICAL} sx={{margin: "auto"}} {...a11yProps(1)}/>
                        <Tab label={DataType.RACIAL} sx={{margin: "auto"}} {...a11yProps(2)}/>
                    </Tabs>
                </Box>
                <TabPanel value={dataTypeIndex} index={0}>
                    <SummaryTable/>
                </TabPanel>
                <TabPanel value={dataTypeIndex} index={1}>
                    <PoliticalTable/>
                </TabPanel>
                <TabPanel value={dataTypeIndex} index={2}>
                    <RacialTable/>
                </TabPanel>
            </CardContent>
        </Card>
    );
}
