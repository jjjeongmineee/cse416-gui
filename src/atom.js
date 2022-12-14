import {atom, selector} from "recoil";
import {PlanType} from "./data/constants";

export const planTypeAtom = atom({
    key: "planTypeAtom",
    default: PlanType.SMD
});

export const stateNameAtom = atom({
    key: "stateNameAtom",
    default: ""
});

export const districtPlanListAtom = atom({
    key: "districtPlanListAtom",
    default: []
});

export const smdPlanIdxAtom = atom({
    key: "smdPlanIdxAtom",
    default: 0
});

export const mmdPlanIdxAtom = atom({
    key: "mmdPlanIdxAtom",
    default: 0
});

export const boundsAtom = atom({
    key: "boundsAtom",
    default: []
});

export const boundsSelector = selector({
    key: "boundsSelector",
    get: ({get}) => {
        const boundsList = get(boundsAtom);
        return boundsList.map((b) => JSON.parse(b));
    }
});

export const districtEnsembleSummaryAtom = atom({
    key: "districtEnsembleSummaryAtom",
    default: null
});

export const isResetAtom = atom({
    key: "isResetAtom",
    default: false
});

export const isOverlapAtom = atom({
    key: "isOverlapAtom",
    default: false
})
