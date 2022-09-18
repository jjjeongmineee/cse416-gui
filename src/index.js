import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Splash from './components/Splash.js';
import StatePage from './components/StatePage.js';
import './index.css';
import reportWebVitals from './reportWebVitals';

// THIS FUNCTION TESTS TO SEE IF THIS APP HAS
// DATA IN LOCAL STORAGE. IF IT DOES, TRUE IS
// RETURNED, ELSE FALSE 
function isInLocalStorage() {
	return localStorage.getItem("top5-data") != null;
}

function loadListsFromJSON(jsonFilePath) {
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			let text = this.responseText;
			let lists = JSON.parse(text).top5Lists;

			// GO THROUGH THE LISTS AND SAVE EACH USING THEIR KEY
			for (let i = 0; i < lists.length; i++) {
				let listData = lists[i];
				let listString = JSON.stringify(listData);
				localStorage.setItem("top5-list-" + listData.key, listString);
			}

			// THIS IS OUR SESSION DATA THAT WE'LL NEED TO
			// HELP US DEAL WITH THE LISTS
			localStorage.setItem("top5-data", JSON.stringify(
				{
					"nextKey" : 3,
					"counter" : 3,
					"keyNamePairs" : [
						{"key": "0", "name": "Games"},
						{"key": "1", "name": "Movies"}, 
						{"key": "2", "name": "Pink Floyd Songs"}
					]
			}));
			launch();
		}
	}
	xmlhttp.open("GET", jsonFilePath, true);
	xmlhttp.send();
}

function launch() {
	// IF NO DATA IS IN LOCAL STORAGE THEN LOAD ALL THE TEST
	// DATA FROM THE JSON FILE AND PUT IT THERE
	ReactDOM.render(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Splash/>}/>
				<Route path="/louisiana" element={<StatePage stateName='Louisiana'/>}/>
				<Route path="/nevada" element={<StatePage stateName='Nevada'/>}/>
				<Route path="/mississippi" element={<StatePage stateName='Mississippi'/>}/>
			</Routes>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

if (!isInLocalStorage()) {
	loadListsFromJSON("./data/default_lists.json");
}
else {
	launch();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

