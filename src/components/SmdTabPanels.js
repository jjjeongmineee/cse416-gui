import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {a11yProps, TabPanel} from "./TabPanel";
import {useRecoilState} from "recoil";
import {smdPlanIdxAtom} from "../atom";
import {DistrictPlanTable} from "./DistrictPlanTable";

export function SmdTabPanels({districtPlanList}) {
    const [smdPlanIdx, setSmdPlanIdx] = useRecoilState(smdPlanIdxAtom);

    const handleChange = (event, newValue) => {
        setSmdPlanIdx(newValue);
    }

    return (
        <div>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={smdPlanIdx} onChange={handleChange} aria-label="data tabs">
                    {districtPlanList.length > 0 && districtPlanList.map((p, idx) => {
                        return (
                            <Tab key={`SmdTab${idx}`} label={p.planName} sx={{margin: "auto"}} {...a11yProps(idx)}/>);
                    })}
                </Tabs>
            </Box>
            {districtPlanList.length > 0 && districtPlanList.map((p, idx) => {
                return (
                    <TabPanel key={`SmdTabPanel${idx}`} value={smdPlanIdx} index={idx}>
                        <DistrictPlanTable summary={p.summary}/>
                    </TabPanel>
                );
            })}
        </div>
    );
}
