import {Switch} from "@mui/material";
import {useRecoilState} from "recoil";
import {isOverlapAtom} from "../atom";

export default function OverlapButton() {
    const [isOverlap, setIsOverlap] = useRecoilState(isOverlapAtom);

    const handleChange = (event) => {
        setIsOverlap(event.target.checked);
    };

    return (
        <div>
            <Switch
                checked={isOverlap}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    );
}
