import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import {PlanType} from "../data/constants";
import {useRecoilState} from "recoil";
import {planTypeAtom} from "../atom";

export default function DistrictPlanTypeSelector() {
    const [planType, setPlanType] = useRecoilState(planTypeAtom);

    const handleChange = (event) => {
        switch (event.target.value) {
            case PlanType.SMD:
                setPlanType(PlanType.SMD);
                break;
            case PlanType.MMD:
                setPlanType(PlanType.MMD);
                break;
        }
    }

    return (
        <Box sx={{p: 3}}>
            <FormControl fullWidth>
                <InputLabel id="plan-select-label">Select a District Plan Type</InputLabel>
                <Select
                    labelId="plan-select-label"
                    id="plan-select"
                    label="Plan"
                    value={planType}
                    onChange={handleChange}
                >
                    <MenuItem value={PlanType.SMD}>{PlanType.SMD}</MenuItem>
                    <MenuItem value={PlanType.MMD}>{PlanType.MMD}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
