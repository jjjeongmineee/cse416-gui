import React from "react";
import Banner from "../components/Banner";
import {StateMap} from "../components/StateMap";
import {Reference} from "./Reference";

export default function Home() {
    return (
        <div>
            <Banner title={"CSE 416 Team Muze"}/>
            <StateMap/>
        </div>
    );
}
