import Box from "@mui/material/Box";
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import React from "react";
import {useRecoilValue} from "recoil";
import {selectedStatePlanQuery} from "../api/state";
import {Card, CardContent} from "@mui/material";

export default function DistrictMap({stateName}) {
    const selectedStatePlan = useRecoilValue(selectedStatePlanQuery(stateName));

    return (
        <Card sx={{height: '100%', width: '100%'}}>
            <CardContent sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <Box sx={{width: '100%', height: '100%'}} className='mapWrapper'>
                    <MapContainer center={selectedStatePlan.center} zoom={selectedStatePlan.zoom}
                                  scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {<GeoJSON data={selectedStatePlan.bounds} style={{weight: 1}}/>}
                    </MapContainer>
                </Box>
            </CardContent>
        </Card>
    );
}
