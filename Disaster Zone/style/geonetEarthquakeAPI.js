/* Geonet Earthquake API Disaster Zone MDDN352 P3 13.1 - [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetEarthQuake = "https://json.ey.nz/www.geonet.org.nz/quakes/services/felt.json"; //saves goenet url as var
var geonetEarthQuakeLocal = "./json/geoNetEarthquakeVal.json"
var earthQEventLength = 8; //sets earthquake array max events
var earthQRadiusMulti = 2; //sets earthquake alert radius to be multiplyed by
/*== ARRAYS ==*/

/* 1# EARTHQUAKE VARABLE ARRAYS */
//Earthquake Intensity || Light,Weak,Moderate,Strong,Severe
var earthQIntesityArray = [
];

//Earthquake Magitude
var earthQMagnitudeArray = [
];

//Earthquake coordinates || LAT LNG
var earthQLatLngArray = [
];

//Earthquake ID || Geonets name for the event
var earthQIDNameArray = [
];

//Earthequake Depth 
var earthQDepthArray = [
];

//Earthquake Time
var earthQTimeArray = [
];

/* TEMP FUNCTION FOR TESTING */
window.onload = function () {
    earthJSON();
};

/* 1# EARTHQUAKE VARABLE ARRAYS [END]*/
function earthJSON() {
    $.getJSON(geonetEarthQuakeLocal, function (data) {
        $.each(data.features, function (i, eq) {
            //data id displayed in table row || this one is volcano title
            if (i < earthQEventLength) {
                earthQIntesityArray[i] = eq.properties.intensity;
                earthQMagnitudeArray[i] = eq.properties.magnitude;
                earthQLatLngArray[i] = eq.geometry.coordinates[0];
                earthQDepthArray[i] = eq.properties.depth;
                earthQTimeArray[i] = eq.properties.origintime;
                earthQIDNameArray[i] = eq.id;
                

                i++;
            }
            else {
                //doNothing
            }

        });

        /* DEBUGGING */
        console.log('#1 Intensity');
        console.log(earthQIntesityArray); //display value of title array
        console.log('#2 Magitude');
        console.log(earthQMagnitudeArray); //display value of level array
        console.log('#3');
        console.log(earthQLatLngArray); //display value of activity array
        console.log('#4');
        console.log(earthQDepthArray); //display value of depth array
        console.log('5');
        console.log(earthQTimeArray); //display value of time array
        console.log('6')
        console.log(earthQIDNameArray); //display value of name array
        
        //[DEBUG DISPLAY]document.getElementById("errorCantFind").innerHTML = volcanoLevelArray[11];

        //volcanoMarkerCreateLoop(); //calls vol marker loop
    });

}
