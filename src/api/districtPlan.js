import {selectorFamily} from "recoil";
import axios from "axios";
import Data from "../data/Data";
import {DataType, PlanType} from "../data/constants";

export const districtPlanQuery = selectorFamily({
    key: "districtPlanQuery",
    get: ({selectedState, planType, dataType}) => async ({get}) => {
        const planTypeCode = planType === 'S' ? 'smd' : 'mmd';
        const dataTypeCode = dataType.toLowerCase();
        const res = await axios.get("http://localhost:8080/muze/data/states/" + Data[selectedState].postal + "/" + planTypeCode + "/" + dataTypeCode);
        return res.data;
    }
});

export function getDistrictPlan(selectedState, planType = PlanType.SMD, dataType = DataType.SUMMARY) {
    const planTypeCode = planType === PlanType.SMD ? 'smd' : 'mmd';
    const dataTypeCode = dataType.toLowerCase();
    const districtPlan = {center: null, zoom: null, bounds: null};
    axios.get("http://localhost:8080/muze/data/states/" + Data[selectedState].postal + "/" + planTypeCode + "/" + dataTypeCode)
        .then(res => {
            districtPlan.center = res.data.center;
            districtPlan.zoom = res.data.zoom;
            districtPlan.bounds = JSON.parse(res.data.bounds);
        })
        .catch(e => {console.log(e)});
    return districtPlan;
}
