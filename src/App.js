import {BrowserRouter, Route, Routes} from "react-router-dom";
import StatePage from "./routes/StatePage";
import Home from "./routes/Home";
import {RecoilRoot} from "recoil";
import {Reference} from "./routes/Reference";

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/louisiana" element={<StatePage stateName='Louisiana'/>}/>
                    <Route path="/nevada" element={<StatePage stateName='Nevada'/>}/>
                    <Route path="/mississippi" element={<StatePage stateName='Mississippi'/>}/>
                    <Route path="/georgia" element={<StatePage stateName='Georgia'/>}/>
                    <Route path="/references" element={<Reference/>}/>
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
