import {BrowserRouter, Route, Routes} from "react-router-dom";
import StatePage from "./routes/StatePage";
import Home from "./routes/Home";
import {RecoilRoot} from "recoil";
import {Suspense} from "react";

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/louisiana" element={<StatePage stateName='Louisiana'/>}/>
                        <Route path="/nevada" element={<StatePage stateName='Nevada'/>}/>
                        <Route path="/mississippi" element={<StatePage stateName='Mississippi'/>}/>
                    </Routes>
                </Suspense>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
