import {atom, selector} from "recoil";
import {DataType, PlanType} from "./data/constants";
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

export const dataTypeAtom = atom({
    key: "dataTypeAtom",
    default: DataType.SUMMARY
})

export const dataTypeIndexSelector = selector({
    key: "dataTypeIndexSelector",
    get: ({get}) => {
        switch (get(dataTypeAtom)) {
            case DataType.SUMMARY:
                return 0;
            case DataType.POLITICAL:
                return 1;
            case DataType.RACIAL:
                return 2;
        }
    }
});

export const stateNameAtom = atom({
    key: "stateNameAtom",
    default: ""
});

export const districtPlanSelector = selector({
    key: "districtPlanSelector",
    get: async ({get}) => {
        const stateName = get(stateNameAtom);
        const planType = get(planTypeAtom);
        const dataType = get(dataTypeAtom);
        const planTypeCode = planType === 'S' ? 'smd' : 'mmd';
        const dataTypeCode = dataType.toLowerCase();
        const res = await axios.get("http://localhost:8080/muze/data/states/" + Data[stateName].postal + "/" + planTypeCode + "/" + dataTypeCode);
        return res.data;
    }
})
