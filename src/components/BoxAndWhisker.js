import {Card, CardHeader, CardMedia} from "@mui/material";
import smd from "../data/images/SMD.png";
import mmd from "../data/images/MMD.png";

export function BoxAndWhisker() {
    return (
        <div>
            <Card sx={{height: '100%', width: '100%', marginBottom: "50px"}}>
                <CardHeader title="SMD"/>
                <CardMedia
                    component="img"
                    image={smd}
                />
            </Card>
            <Card sx={{height: '100%', width: '100%', marginBottom: "50px"}}>
                <CardHeader title="MMD"/>
                <CardMedia
                    component="img"
                    image={mmd}
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
