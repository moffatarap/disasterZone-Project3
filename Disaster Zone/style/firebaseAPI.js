/*Firebase API Disaster Zone MDDN352 P3 [2016] ZELLERPHOE */
//loaded into geoLocationAPI
//TEMP DB loaded
//ACTUAL DB: https://pbwoooo.firebaseio.com

/* VARABLES */
/*tracking people DB*/
var latLngDB; //creates firebaseDB var
latLngDB = new Firebase("<https://disasterzone.firebaseio.com/>");
/*dumby events*/
dummyDB = new Firebase("<https://disaster-zone-events.firebaseio.com/DumbyEvents/>");
/*volcanoEvents*/ 
VolcanoDB = new Firebase("<https://disaster-zone-events.firebaseio.com/Volcano/>");
/*earthquakeEvents*/
var EarthquakeDB; //makes a path for earthquake testing
EarthquakeDB = new Firebase("<https://disaster-zone-events.firebaseio.com/earthquake/>");
var earthquakeID; // for loop for setting up DB

var currentLat;
var currentLong;
var currentMag;
var currentDepth;
/** ARRAYS **/

/*** FUNCTION ***/
function firebaseAPI() {

/*this makes a very large DB that stores the location of all people that access the website*/
    latLngDB.push({
        latLngUser: userLatLng.toString(), //latLng to db
        addressUser: document.getElementById("mapAddress").innerHTML, //formatted address to db from html
        

    }); 


/*earthquake Database*/
EarthquakeDB.remove();
	for (var i = earthQIDNameArray.length - 1; i >= 0; i--) {
		earthquakeID = earthQIDNameArray[i];		
			currentLat = earthQLatArray[i];
			currentLong = earthQLngArray[i];
			currentMag = earthQMagnitudeArray[i];
			currentDepth = earthQDepthArray[i];
			EarthquakeDB.push({
 currentEarthquakes:{
 	earthquakeID,
	currentLat,
	currentLong,
	currentMag,
	currentDepth
 }

});
		}

/*volcano database*/

 VolcanoDB.set({

 currentVolcanosActive:{
    volActiveArray
 },
 allVolcanos:{
    volcanoMarkerTitleArray
},
inactiveVolcanos:{
    volcanoInactiveArray
},
volcanoActivityAndHazards:{
    volcanoHazardsArray,
    volcanoActivityArray
}

});

dummyDB.remove();
 for (var i = phPublicIdArray.length - 1; i >= 0; i--) {
 			DummyID = phPublicIdArray[i];		
			DummyLat = phLatArray[i];
			DummyLng = phLngArray[i];
			DummyLocation = phLocationName[i];
			DummyDepth = phDepthArray[i];
			DummyIntense = phIntensityArray[i];
			dummyDB.push({
				DummyEvents:{
				DummyID,
				DummyLat,
				DummyLng,
				DummyLocation,	
				DummyDepth,
				DummyIntense
				}

				});
 }
         
}