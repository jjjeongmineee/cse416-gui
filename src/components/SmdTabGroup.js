import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {a11yProps, TabPanel} from "./TabPanel";
import SummaryTable from "./SummaryTable";
import {useRecoilState} from "recoil";
import {smdPlanIdxAtom} from "../atom";
import {DistrictPlanTable} from "./DistrictPlanTable";

export function SmdTabGroup({districtPlanList}) {
    const [smdPlanIdx, setSmdPlanIdx] = useRecoilState(smdPlanIdxAtom);

    const handleChange = (event, newValue) => {
        setSmdPlanIdx(newValue);
    }

    return (
        <div>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={smdPlanIdx} onChange={handleChange} aria-label="data tabs">
                    {districtPlanList.map((p, idx) => {
                        return (<Tab label={p.planName} sx={{margin: "auto"}} {...a11yProps(idx)}/>);
                    })}
                </Tabs>
            </Box>
            {districtPlanList.map((p, idx) => {
                return (
                    <TabPanel value={smdPlanIdx} index={idx}>
                        <DistrictPlanTable districtPlan={{}}/>
                    </TabPanel>
                );
            })}
        </div>
    );
}
