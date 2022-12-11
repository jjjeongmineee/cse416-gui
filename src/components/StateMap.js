import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import Data from "../data/Data";
import {titleCase} from "../Utils";
import React from "react";
import {useNavigate} from "react-router-dom";
import {stateListQuery} from "../api/state";
import {useRecoilValue} from "recoil";

export default function StateMap() {
    const navigate = useNavigate();
    const stateList = useRecoilValue(stateListQuery);

    const labelBounds = (layer, name) => {
        layer.on('mouseover', e => layer.bindTooltip(name).openTooltip());
        layer.on('click', e => onStateClicked(name));
    }
    const onStateClicked = (stateName) => {
        navigate("/" + stateName);
    }

    return (
        <div className='stateRoot'>
            <div className='contentRoot'>
                <Card sx={{flex: '1', height: '100%'}}>
                    <CardContent sx={{width: '100%', height: '100%'}}>
                        <MapContainer center={[39.8283, -98.5795]} zoom={4} dragging={true} scrollWheelZoom={false}
                                      attributionControl={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {stateList.map(s => (
                                <GeoJSON data={Data[s].stateBounds} style={{weight: 1}}
                                         onEachFeature={(f, l) => labelBounds(l, titleCase(s))}/>
                            ))}
                        </MapContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
