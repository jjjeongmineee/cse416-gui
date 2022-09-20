import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class AnalysisPage extends React.Component {
	render(){
		const stateName = this.props.stateName;
		const analysisType = this.props.analysisType;

		return (
			<div role="tabpanel" hidden={selectedTab !== tabIndex} id={`analysisTab${tabIndex}`} aria-labelledby={`analysisTab${tabIndex}`} className='tabPanel'>
				{selectedTab === tabIndex && (
					<Box sx={{width: '100%', height: '100%'}}>
						<MapContainer center={Data[stateName].center} zoom={Data[stateName].zoom} scrollWheelZoom={true}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Bounds file={Data[stateName].stateBounds}/>
							<Bounds file={Data[stateName].countyBounds}/>
						</MapContainer>
					</Box>)}
			</div>
		);
	}
}
