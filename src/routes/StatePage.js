/**
 * The page shown when a state image is clicked.
 */

import React from 'react';
import Banner from '../components/Banner.js';
import {Card, CardContent} from "@mui/material";
import Box from "@mui/material/Box";
import Data from "../data/Data";
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import {Bound} from "../components/Bound";
import DistrictPlanInformationTabs from "../components/DistrictPlanInformationTabs";
import {useSetRecoilState} from "recoil";
import {stateNameAtom} from "../atom";

export default function StatePage({stateName}) {
    const center = Data[stateName].center;
    const zoom = Data[stateName].zoom;
    const setStateName = useSetRecoilState(stateNameAtom);
    setStateName(stateName);

    return (
        <div>
            <Banner title={stateName}/>
            <div className='stateRoot'>
                <div className='contentRoot'>
                    <Card sx={{height: '100%', width: '100%'}}>
                        <CardContent sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <Box sx={{width: '100%', height: '100%'}} className='mapWrapper'>
                                <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {/*{statePlan.bounds && <GeoJSON data={statePlan.bounds} style={{weight: 1}}/>}*/}
                                    {<Bound/>}
                                </MapContainer>
                            </Box>
                        </CardContent>
                    </Card>
                    <DistrictPlanInformationTabs stateName={stateName}/>
                </div>
            </div>
        </div>
    );
}
