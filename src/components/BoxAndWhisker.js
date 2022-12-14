import {Card, CardHeader, CardMedia} from "@mui/material";
import aaPercent from "../data/images/aaPercent.png";

export function BoxAndWhisker() {
    return (
        <div>
            <Card sx={{height: '100%', width: '100%', marginBottom: "50px"}}>
                <CardHeader title="SMD"/>
                <CardMedia
                    component="img"
                    image={aaPercent}
                />
            </Card>
            <Card sx={{height: '100%', width: '100%', marginBottom: "50px"}}>
                <CardHeader title="MMD"/>
                <CardMedia
                    component="img"
                    image={aaPercent}
                />
            </Card>
            {/*<Card sx={{height: '100%', width: '100%', marginBottom: "50px"}}>*/}
            {/*    <CardHeader title="Both"/>*/}
            {/*    <CardMedia*/}
            {/*        component="img"*/}
            {/*        image={aaPercent}*/}
            {/*    />*/}
            {/*</Card>*/}
        </div>
    );
}
