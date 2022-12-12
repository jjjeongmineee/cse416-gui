import {Card, CardMedia} from "@mui/material";
import aaPercent from "../data/images/aaPercent.png";
import {useRecoilValue} from "recoil";
import {planTypeAtom} from "../atom";
import {PlanType} from "../data/constants";

export function SmdPlot() {
    const planType = useRecoilValue(planTypeAtom);

    return (
        <Card sx={{height: '100%', width: '100%'}} hidden={planType !== PlanType.SMD}>
            <CardMedia
                component="img"
                image={aaPercent}
            />
        </Card>
    );
}
