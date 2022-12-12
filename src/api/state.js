import axios from "axios";
import {selector, selectorFamily} from "recoil";
import Data from "../data/Data";
import {DataType, PlanType} from "../data/constants";

export const stateListQuery = selector({
    key: "stateListQuery",
    get: async ({get}) => {
        const res = await axios.get("http://localhost:8080/muze/data/states/list");
        return res.data;
    }
});

export const selectedStatePlanQuery = selectorFamily({
    key: "selectedStatePlanQuery",
    get: selectedState => async () => {
        const res = await axios.get("http://localhost:8080/muze/data/states/select/" + Data[selectedState].postal);
        return {
            bounds: JSON.parse(res.data.bounds),
            center: res.data.center,
            zoom: res.data.zoom
        };
    }
});

export function getSelectedStatePlan(selectedState, callback) {
    const selectedStatePlan = {center: null, zoom: null, bounds: null};
    axios.get("http://localhost:8080/muze/data/states/select/" + Data[selectedState].postal)
        .then(res => {
            selectedStatePlan.center = res.data.center;
            selectedStatePlan.zoom = res.data.zoom;
            selectedStatePlan.bounds = JSON.parse(res.data.bounds);
            callback({
                center: res.data.center,
                zoom: res.data.zoom,
                bounds: JSON.parse(res.data.bounds)
            });
        })
        .catch(e => {console.log(e)});
    console.log(selectedStatePlan.center);
    return selectedStatePlan;
}
