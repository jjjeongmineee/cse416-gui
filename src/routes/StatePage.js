/**
 * The page shown when a state image is clicked.
 */

import React, {useEffect, useRef} from 'react';
import Banner from '../components/Banner.js';
import {Card, CardContent} from "@mui/material";
import Box from "@mui/material/Box";
import Data from "../data/Data";
import {MapContainer, TileLayer} from "react-leaflet";
import {Bound} from "../components/Bound";
import DistrictPlanInformationTabs from "../components/DistrictPlanInformationTabs";
import {useRecoilState, useSetRecoilState} from "recoil";
import {isResetAtom, stateNameAtom} from "../atom";
import {BoxAndWhisker} from "../components/BoxAndWhisker";
import SummaryTable from "../components/SummaryTable";

export default function StatePage({stateName}) {
    const center = Data[stateName].center;
    const zoom = Data[stateName].zoom;
    const mapRef = useRef();
    const setStateName = useSetRecoilState(stateNameAtom);
    const [isReset, setIsReset] = useRecoilState(isResetAtom);
    setStateName(stateName);

    useEffect(() => {
        if(mapRef.current) {
            console.log(mapRef)
            mapRef.current.setView(center, zoom);
        }
        setIsReset(false);
    }, [isReset])

    return (
        <div>
            <Banner title={stateName}/>
            <div className='stateRoot'>
                <div className='contentRoot'>
                    <Card sx={{height: '100%', width: '100%'}}>
                        <CardContent sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <Box sx={{width: '100%', height: '100%'}} className='mapWrapper'>
                                <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} ref={mapRef}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {<Bound/>}
                                </MapContainer>
                            </Box>
                        </CardContent>
                    </Card>
                    <DistrictPlanInformationTabs stateName={stateName}/>
                </div>
            </div>
            <div className='contentRoot'>
                <BoxAndWhisker/>
                <div>
                    <SummaryTable/>
                    {/*<SmdPlot/>*/}
                </div>
            </div>
        </div>
    );
}
