/**
 * The page shown when a state image is clicked.
 */

import React from 'react';
import Banner from '../components/Banner.js';
import DistrictMap from "../components/DistrictMap";
import DistrictPlanInformationTabs from "../components/DistrictPlanInformationTabs";


export default function StatePage({stateName}) {
    return (
        <div>
            <Banner title={stateName}/>
            <div className='stateRoot'>
                <div className='contentRoot'>
                    <DistrictMap stateName={stateName}/>
                    <DistrictPlanInformationTabs/>
                </div>
            </div>
        </div>
    );
}

// export default function StatePage(props) {
//     const navigate = useNavigate();
//     return (<StatePageCore {...props} navigate={navigate}/>);
// }
//
//
// class StatePageCore extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {stateList: []};
//
//         // Get the list of currently implemented states from the server
//         const stateListApi = axios.get("http://localhost:8080/muze/data/states/list");
//         const selectedStateApi = axios.get("http://localhost:8080/muze/data/states/select/" + Data[this.props.stateName].postal);
//
//         stateListApi.then(res => {
//             this.setState({stateList: res.data});
//         }).catch(e => console.log(e));
//         selectedStateApi.then(res => {
//             this.setState({currentBounds: JSON.parse(res.data.bounds), center: res.data.center, zoom: res.data.zoom});
//         }).catch(e => console.log(e));
//     }
//
//     render() {
//         const stateName = this.props.stateName;
//         const mapSelectedTab = this.state.mapSelectedTab;
//         const dataSelectedTab = this.state.dataSelectedTab;
//         const navigate = this.props.navigate;
//         const currentBounds = this.state.currentBounds;
//         const center = this.state.center;
//         const zoom = this.state.zoom;
//         const planList = ["Single-Member Districting Plan", "Multi-Member Districting Plan"];
//         const polTab = this.state.polTab;
//         const racTab = this.state.racTab;
//
//
//         if (currentBounds != null && dataSelectedTab === 0) return (
//             <div className='stateRoot'>
//                 <Banner title={stateName} stateList={this.state.stateList}/>
//                 <div className='contentRoot'>
//                     <Card sx={{flex: '1', height: '100%'}}>
//                         <CardContent sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
//                             <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
//                                 <FormControl fullWidth>
//                                     <InputLabel id="plan-select-label">{planList[0]}</InputLabel>
//                                     <Select
//                                         labelId="plan-select-label"
//                                         id="plan-select"
//                                         label="Plan"
//                                         onChange={(e, v) => this.setState({mapSelectedTab: 1})}
//                                     >
//                                         {
//                                             planList.map(e => (
//                                                 <MenuItem value={e}>{e}</MenuItem>
//                                             ))
//                                         }
//                                     </Select>
//                                 </FormControl>
//
//                                 {/*<Tabs value={mapSelectedTab} onChange={(e, v) => this.setState({mapSelectedTab: v})} aria-label="map tabs">
// 								<Tab label="Current Districting Plan" id='cdp' aria-controls='cdp'/>
// 								<Tab label="Multi-Member Districting Plan" id='mmd' aria-controls='mmd'/>
// 							</Tabs>*/}
//                             </Box>
//
//                             <MapTab selectedTab={mapSelectedTab} tabIndex={0} stateName={stateName}
//                                     bounds={currentBounds} center={center} zoom={zoom}/>
//                             <MapTab selectedTab={mapSelectedTab} tabIndex={1} stateName={stateName}
//                                     bounds={currentBounds} center={center} zoom={zoom}/>
//                         </CardContent>
//                     </Card>
//
//                     <Card sx={{flex: '1', height: '100%'}}>
//                         <CardContent sx={{width: '100%', height: '100%'}}>
//                             <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
//                                 <Tabs value={dataSelectedTab} onChange={(e, v) => this.setState({dataSelectedTab: v})}
//                                       aria-label="data tabs">
//                                     <Tab label="Summary" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                     <Tab label="Political" sx={{margin: "auto"}} id='os' aria-controls='os'/>
//                                     <Tab label="Racial" sx={{margin: "auto"}} id='os' aria-controls='os'/>
//                                 </Tabs>
//                             </Box>
//                             {/*<AnalysisTab selectedTab={dataSelectedTab} tabIndex={0} stateName={stateName}/>
// 						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={1} stateName={stateName}/>
// 						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={2} stateName={stateName}/>
// 						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={3} stateName={stateName}/>*/}
//                             <TableContainer component={Paper}>
//                                 <Table sx={{minWidth: 500}} aria-label="simple table">
//                                     <TableHead>
//                                         <TableRow>
//                                             <TableCell sx={{margin: "auto", fontWeight: "bold"}}>Type of
//                                                 Data</TableCell>
//                                             <TableCell sx={{marginLeft: "100px", fontWeight: "bold"}}>Data
//                                                 Value</TableCell>
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         <TableRow>
//                                             <TableCell sx={{margin: "auto"}}>Number of District Plans</TableCell>
//                                             <TableCell sx={{margin: "auto"}}>3</TableCell>
//                                         </TableRow>
//                                         <TableRow>
//                                             <TableCell sx={{margin: "auto"}}>Total Population</TableCell>
//                                             <TableCell sx={{margin: "auto"}}>10000000</TableCell>
//                                         </TableRow>
//                                         <TableRow>
//                                             <TableCell sx={{margin: "auto"}}>Republican/Democratic Split</TableCell>
//                                             <TableCell sx={{margin: "auto"}}>3000000 / 7000000</TableCell>
//                                         </TableRow>
//                                         <TableRow>
//                                             <TableCell sx={{margin: "auto"}}>Number of Opportunity Districts</TableCell>
//                                             <TableCell sx={{margin: "auto"}}>3</TableCell>
//                                         </TableRow>
//                                         <TableRow>
//                                             <TableCell sx={{margin: "auto"}}>District with Lowest Fairness</TableCell>
//                                             <TableCell sx={{margin: "auto"}}>3</TableCell>
//                                         </TableRow>
//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         );
//
//         if (currentBounds != null && dataSelectedTab === 1) return (
//             <div className='stateRoot'>
//                 <Banner title={stateName} stateList={this.state.stateList}/>
//                 <div className='contentRoot'>
//                     <Card sx={{flex: '1', height: '100%'}}>
//                         <CardContent sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
//                             <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
//                                 <FormControl fullWidth>
//                                     <InputLabel id="plan-select-label">{planList[0]}</InputLabel>
//                                     <Select
//                                         labelId="plan-select-label"
//                                         id="plan-select"
//                                         label="Plan"
//                                         onChange={(e, v) => this.setState({mapSelectedTab: 1})}
//                                     >
//                                         {
//                                             planList.map(e => (
//                                                 <MenuItem value={e}>{e}</MenuItem>
//                                             ))
//                                         }
//                                     </Select>
//                                 </FormControl>
//
//                                 {/*<Tabs value={mapSelectedTab} onChange={(e, v) => this.setState({mapSelectedTab: v})} aria-label="map tabs">
// 								<Tab label="Current Districting Plan" id='cdp' aria-controls='cdp'/>
// 								<Tab label="Multi-Member Districting Plan" id='mmd' aria-controls='mmd'/>
// 							</Tabs>*/}
//                             </Box>
//
//                             <MapTab selectedTab={mapSelectedTab} tabIndex={0} stateName={stateName}
//                                     bounds={currentBounds} center={center} zoom={zoom}/>
//                             <MapTab selectedTab={mapSelectedTab} tabIndex={1} stateName={stateName}
//                                     bounds={currentBounds} center={center} zoom={zoom}/>
//                         </CardContent>
//                     </Card>
//
//                     <Card sx={{flex: '1', height: '100%'}}>
//                         <CardContent sx={{width: '100%', height: '100%'}}>
//                             <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
//                                 <Tabs value={dataSelectedTab} onChange={(e, v) => this.setState({dataSelectedTab: v})}
//                                       aria-label="data tabs">
//                                     <Tab label="Summary" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                     <Tab label="Political" sx={{margin: "auto"}} id='os' aria-controls='os'/>
//                                     <Tab label="Racial" sx={{margin: "auto"}} id='os' aria-controls='os'/>
//                                 </Tabs>
//                             </Box>
//                             {/*<AnalysisTab selectedTab={dataSelectedTab} tabIndex={0} stateName={stateName}/>
// 						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={1} stateName={stateName}/>
// 						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={2} stateName={stateName}/>
// 						<AnalysisTab selectedTab={dataSelectedTab} tabIndex={3} stateName={stateName}/>*/}
//                             <Tabs value={polTab} onChange={(e, v) => this.setState({polTab: v})}>
//                                 <Tab label="Overview" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="Seat/Vote Share" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="R vs D" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="Opportunity Districts" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="Box and whisker" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                             </Tabs>
//
//                             <div style={{visibility: this.visibilityCheck(0)}}>Political Data Overview</div>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         );
//
//         if (currentBounds != null && dataSelectedTab === 2) return (
//             <div className='stateRoot'>
//                 <Banner title={stateName} stateList={this.state.stateList}/>
//                 <div className='contentRoot'>
//                     <Card sx={{flex: '1', height: '100%'}}>
//                         <CardContent sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
//                             <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
//                                 <FormControl fullWidth>
//                                     <InputLabel id="plan-select-label">{planList[0]}</InputLabel>
//                                     <Select
//                                         labelId="plan-select-label"
//                                         id="plan-select"
//                                         label="Plan"
//                                         onChange={(e, v) => this.setState({mapSelectedTab: 1})}
//                                     >
//                                         {
//                                             planList.map(e => (
//                                                 <MenuItem value={e}>{e}</MenuItem>
//                                             ))
//                                         }
//                                     </Select>
//                                 </FormControl>
//
//                                 {/*<Tabs value={mapSelectedTab} onChange={(e, v) => this.setState({mapSelectedTab: v})} aria-label="map tabs">
// 								<Tab label="Current Districting Plan" id='cdp' aria-controls='cdp'/>
// 								<Tab label="Multi-Member Districting Plan" id='mmd' aria-controls='mmd'/>
// 							</Tabs>*/}
//                             </Box>
//
//                             <MapTab selectedTab={mapSelectedTab} tabIndex={0} stateName={stateName}
//                                     bounds={currentBounds} center={center} zoom={zoom}/>
//                             <MapTab selectedTab={mapSelectedTab} tabIndex={1} stateName={stateName}
//                                     bounds={currentBounds} center={center} zoom={zoom}/>
//                         </CardContent>
//                     </Card>
//
//                     <Card sx={{flex: '1', height: '100%'}}>
//                         <CardContent sx={{width: '100%', height: '100%'}}>
//                             <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
//                                 <Tabs value={dataSelectedTab} onChange={(e, v) => this.setState({dataSelectedTab: v})}
//                                       aria-label="data tabs">
//                                     <Tab label="Summary" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                     <Tab label="Political" sx={{margin: "auto"}} id='os' aria-controls='os'/>
//                                     <Tab label="Racial" sx={{margin: "auto"}} id='os' aria-controls='os'/>
//                                 </Tabs>
//                             </Box>
//                             <Tabs value={racTab} onChange={(e, v) => this.setState({racTab: v})}>
//                                 <Tab label="Overview" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="African American" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="Asian American" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="Hispanic" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="White" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                                 <Tab label="Others" sx={{margin: "auto"}} id='fm' aria-controls='fm'/>
//                             </Tabs>
//
//                             <div style={{visibility: this.visibilityCheck(0)}}>Racial Data Overview</div>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         );
//     }
// }
