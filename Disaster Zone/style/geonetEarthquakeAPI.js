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
var earthQLatArray = [
];

var earthQLngArray = [
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

/* TEMP FUNCTION FOR TESTING 
window.onload = function () {
    earthJSON();
}; */

/* 1# EARTHQUAKE VARABLE ARRAYS [END]*/

/* 2# EARTHQUAKE FUNCTION */
function earthJSON() {
    $.getJSON(geonetEarthQuakeLocal, function (data) {
        $.each(data.features, function (i, eq) {
            //data id displayed in table row || this one is volcano title
            if (i < earthQEventLength) {
                earthQIntesityArray[i] = eq.properties.intensity;
                earthQMagnitudeArray[i] = eq.properties.magnitude;
                earthQLatArray[i] = eq.geometry.coordinates[1]; //access first element
                earthQLngArray[i] = eq.geometry.coordinates[0]; //access second element
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
        console.log('#3 LAT LNG');
        console.log(earthQLatArray); //display value of activity array
        console.log(earthQLngArray); //display value of activity array
        console.log('#4 Depth');
        console.log(earthQDepthArray); //display value of depth array
        console.log('5 Time');
        console.log(earthQTimeArray); //display value of time array
        console.log('6 ID')
        console.log(earthQIDNameArray); //display value of name array
        
        //[DEBUG DISPLAY]document.getElementById("errorCantFind").innerHTML = volcanoLevelArray[11];

        //volcanoMarkerCreateLoop(); //calls vol marker loop
    });

}
/* 2# EARTHQUAKE FUNCTION [END]*/

/* 3# BIND CIRCLE TO MIDDLE MARKER 
function bindCircle() {
    alertCircleMarkerArray[i].bindTo('center', disasterMarkerAY[i], 'position'); //binds circle to location of marker
} */

/* 3# BIND CIRCLE TO MIDDLE MARKER [END]*/

/* 4# ==== EARTHQUAKE MARKER LOOP ==== */
function earthQuakeMarkerCreateLoop() {
    for (i = 0; i < earthQEventLength; i++) {
        //loop until i = earthQEventLength Var

        if (earthQIntesityArray[i])


    }
}
/* 4# ==== EARTHQUAKE MARKER LOOP [END]==== */