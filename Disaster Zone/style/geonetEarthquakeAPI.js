/* Geonet Earthquake API Disaster Zone MDDN352 P3 13.1 - [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetEarthQuake = "https://json.ey.nz/www.geonet.org.nz/quakes/services/felt.json"; //saves goenet url as var
var geonetEarthQuakeLocal = "./json/geoNetEarthquakeVal.json"
var earthQEventLength = 12; //sets earthquake array max events
var earthQRadiusMulti = 4; //sets earthquake alert radius to be multiplyed by
var earthQRadiusDivide = 2; //sets earthquake alert radius division
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
    $.getJSON(geonetEarthQuake, function (data) {
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

        earthQuakeMarkerCreateLoop(); //calls earthquake marker loop
    });

}
/* 2# EARTHQUAKE FUNCTION [END]*/

/* 3# BIND CIRCLE TO MIDDLE MARKER */
function bindCircleEq() {
    earthQAlertCircleMarkerArray[i].bindTo('center', earthquakeMarkerArray[i], 'position'); //binds circle to location of marker
} 

/* 3# BIND CIRCLE TO MIDDLE MARKER [END]*/

/* 3.1# MARKER CREATION FUNCTION */

/* 3.1# MARKER CREATION FUNCTION [END] */

/* 3.2# MARKER ANIMATION*/
function markerAnimaton() {
    earthquakeMarkerArray[i].setAnimation(google.maps.Animation.DROP);
}
/* 3.2# MARKER ANIMATION [END]*/

/* 4# ==== EARTHQUAKE MARKER LOOP ==== */
function earthQuakeMarkerCreateLoop() {
   
   
    for (i = 0; i < earthQEventLength; i++) {
        //loop until i = earthQEventLength Var

       //EARTHQUAKE SEVERITY WEAK
        if (earthQIntesityArray[i] === 'weak') {
            earthquakeMarkerArray[i] = new google.maps.Marker({
               //create marker
                map: mapObject,
                title:earthQIntesityArray[i] + "." + earthQIDNameArray[i],
                position: { lat: earthQLatArray[i], lng: earthQLngArray[i] },
                icon: iconArray[4],
            });

            markerAnimaton(); //sets animation on markers
            
            

            // circle alert create
            earthQAlertCircleMarkerArray[i] = new google.maps.Circle({
                map: mapObject,
                radius: alertCirlceRadiusArray[4] * earthQRadiusMulti, // sets alert radius from array 
                fillColor: alertCircleColorArray[4], //sets color of fill from array
                strokeColor: alertCircleColorArray[4], //sets stroke color from array
                strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
            });

            bindCircleEq(); //binds circle to marker
        }

        //EARTHQUAKE SEVERITY LIGHT
        if (earthQIntesityArray[i] === 'light') {
            earthquakeMarkerArray[i] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: earthQIntesityArray[i] + "." + earthQIDNameArray[i],
                position: { lat: earthQLatArray[i], lng: earthQLngArray[i] },
                icon: iconArray[3],
            });

            markerAnimaton(); //sets animation on markers

            // circle alert create
            earthQAlertCircleMarkerArray[i] = new google.maps.Circle({
                map: mapObject,
                radius: alertCirlceRadiusArray[3] * earthQRadiusMulti, // sets alert radius from array 
                fillColor: alertCircleColorArray[3], //sets color of fill from array
                strokeColor: alertCircleColorArray[3], //sets stroke color from array
                strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
            });

            bindCircleEq(); //binds circle to marker
            
        }

        //EARTHQUAKE SEVERITY MODERATE
        if (earthQIntesityArray[i] === 'moderate') {
            earthquakeMarkerArray[i] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: earthQIntesityArray[i] + "." + earthQIDNameArray[i],
                position: { lat: earthQLatArray[i], lng: earthQLngArray[i] },
                icon: iconArray[2],
            });

            markerAnimaton(); //sets animation on markers

            // circle alert create
            earthQAlertCircleMarkerArray[i] = new google.maps.Circle({
                map: mapObject,
                radius: alertCirlceRadiusArray[2] * earthQRadiusMulti / earthQRadiusDivide, // sets alert radius from array 
                fillColor: alertCircleColorArray[2], //sets color of fill from array
                strokeColor: alertCircleColorArray[2], //sets stroke color from array
                strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
            });

            bindCircleEq(); //binds circle to marker
        }

        //EARTHQUAKE SEVERITY STRONG
        if (earthQIntesityArray[i] === 'strong') {
            earthquakeMarkerArray[i] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: earthQIntesityArray[i] + "." + earthQIDNameArray[i],
                position: { lat: earthQLatArray[i], lng: earthQLngArray[i] },
                icon: iconArray[1],
            });

            markerAnimaton(); //sets animation on markers

            // circle alert create
            earthQAlertCircleMarkerArray[i] = new google.maps.Circle({
                map: mapObject,
                radius: alertCirlceRadiusArray[1] * earthQRadiusMulti / earthQRadiusDivide, // sets alert radius from array 
                fillColor: alertCircleColorArray[1], //sets color of fill from array
                strokeColor: alertCircleColorArray[1], //sets stroke color from array
                strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
            });

            bindCircleEq(); //binds circle to marker
        }


        //EARTHQUAKE SEVERITY SEVERE
        if (earthQIntesityArray[i] === 'severe') {
            earthquakeMarkerArray[i] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: earthQIntesityArray[i] + "." + earthQIDNameArray[i],
                position: { lat: earthQLatArray[i], lng: earthQLngArray[i] },
                icon: iconArray[0],
                
            });

            markerAnimaton(); //sets animation on markers

            // circle alert create
            earthQAlertCircleMarkerArray[i] = new google.maps.Circle({
                map: mapObject,
                radius: alertCirlceRadiusArray[0] * earthQRadiusMulti / earthQRadiusDivide, // sets alert radius from array 
                fillColor: alertCircleColorArray[0], //sets color of fill from array
                strokeColor: alertCircleColorArray[0], //sets stroke color from array
                strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
            });

            bindCircleEq(); //binds circle to marker
        }

    }
}
/* 4# ==== EARTHQUAKE MARKER LOOP [END]==== */
//if (latitude <= locWLatArray[0] + 0.0379 && latitude >= locWLatArray[0] - 0.0379 && longitude <= locWLngArray[0] + 0.0300 && longitude >= locWLngArray[0] - 0.0300) {
