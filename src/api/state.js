import axios from "axios";
import {selector, selectorFamily} from "recoil";
import Data from "../data/Data";

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
