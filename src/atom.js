import {atom, selector} from "recoil";
import {PlanType} from "./data/constants";
import axios from "axios";
import Data from "./data/Data";

export const statePlanAtom = atom({
    key: "statePlanAtom",
    default: {}
})

export const planTypeAtom = atom({
    key: "planTypeAtom",
    default: PlanType.SMD
})

export const stateNameAtom = atom({
    key: "stateNameAtom",
    default: ""
});

// export const districtPlanSelector = selector({
//     key: "districtPlanSelector",
//     get: async ({get}) => {
//         const stateName = get(stateNameAtom);
//         const planType = get(planTypeAtom);
//         const dataType = get(dataTypeAtom);
//         const planTypeCode = planType === PlanType.SMD ? 'smd' : 'mmd';
//         const dataTypeCode = dataType.toLowerCase();
//         const res = await axios.get("http://localhost:8080/muze/data/states/" + Data[stateName].postal + "/" + planTypeCode + "/" + dataTypeCode);
//         return res.data;
//     }
// })

export const districtPlanListAtom = atom({
    key: "districtPlanListAtom",
    default: []
})

export const districtPlanListSelector = selector({
    key: "districtPlanListSelector",
    get: async ({get}) => {
        const stateName = get(stateNameAtom);
        const planType = get(planTypeAtom);
        const planTypeCode = planType === PlanType.SMD ? 'smd' : 'mmd';
        const res = await axios.get("http://localhost:8080/muze/data/states/" + Data[stateName].postal + "/" + planTypeCode + "/plans");
        return res.data;
    }
})

export const districtPlanIndex = selector({
    key: "districtPlanIndex",
    get: async ({get}) => {
        const planList = get(districtPlanListSelector);
        const selectedDistrictPlan = get(selectedDistrictPlanAtom);

        planList.findIndex((planName) => {
            return planName === selectedDistrictPlan.name
        });

    }
})

export const selectedDistrictPlanAtom = atom({
    key: "selectedDistrictPlanAtom",
    default: {}
})

export const smdPlanIdxAtom = atom({
    key:"smdPlanIdxAtom",
    default: 0
})

export const mmdPlanIdxAtom = atom({
    key:"mmdPlanIdxAtom",
    default: 0
})

export const boundsAtom = atom({
    key:"",
    default: null
})
