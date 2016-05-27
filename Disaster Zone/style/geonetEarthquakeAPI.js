/* Geonet Earthquake API Disaster Zone MDDN352 P3 13.1 - [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetEarthQuake = "https://json.ey.nz/www.geonet.org.nz/quakes/services/felt.json"; //saves goenet url as var
var geonetEarthQuakeLocal = "./json/geoNetEarthquakeVal.json"
var earthQEventLength = 6; //sets earthquake array max events
var earthQRadiusMulti = 4; //sets earthquake alert radius to be multiplyed by
var earthQRadiusDivide = 2; //sets earthquake alert radius division
var earthUIVar = "Earthquake"; //sets volcano title for UI
var earthAlertLevelText = "Alert "; //alert level var
var earthTextContent = document.createElement('div'); //creates vairable that is a div


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

//Earthquake Depth 
var earthQDepthArray = [
];

//Earthquake Time
var earthQTimeArray = [
];

//Text content array
var earthQTextContentArray = [
];


//TEXT ARRAY
var earthQTextInnerHtmlArray = [
    '<img id="eventIcon" src="./media/img/mapKeys/event/weak/earthquakeW.png"> <h4 id="earthQEventType0"></h4><h6 id="earthQEventLocation0"></h6><h6 id="earthQEventRating0"></h6><h6 id="earthQEventTime0"></h6><div id="gradientL"></div>', //[0]
    '<img id="eventIcon" src="./media/img/mapKeys/event/light/earthquakeL.png"> <h4 id="earthQEventType1"></h4><h6 id="earthQEventLocation1"></h6><h6 id="earthQEventRating1"></h6><h6 id="earthQEventTime1"></h6><div id="gradientL"></div>', //[1]
    '<img id="eventIcon" src="./media/img/mapKeys/event/moderate/earthquakeM.png"> <h4 id="earthQEventType2"></h4><h6 id="earthQEventLocation2"></h6><h6 id="earthQEventRating2"></h6><h6 id="earthQEventTime2"></h6><div id="gradientL"></div>', //[2]
    '<img id="eventIcon" src="./media/img/mapKeys/event/strong/earthquakeST.png"> <h4 id="earthQEventType3"></h4><h6 id="earthQEventLocation3"></h6><h6 id="earthQEventRating3"></h6><h6 id="earthQEventTime3"></h6><div id="gradientL"></div>', //[3]
    '<img id="eventIcon" src="./media/img/mapKeys/event/severe/earthquakeS.png"> <h4 id="earthQEventType4"></h4><h6 id="earthQEventLocation4"></h6><h6 id="earthQEventRating4"></h6><h6 id="earthQEventTime4"></h6><div id="gradientL"></div>', //[4]

];

/* TEMP FUNCTION FOR TESTING 
window.onload = function () {
    earthJSON();
}; */

/* 1# EARTHQUAKE VARABLE ARRAYS [END]*/

/* 1.1# ==- CSS VARABLE ARRAYS -== */

//EVENT TYPE
var earthQEventTypeArray = [
    "earthQEventType0", //[0]
    "earthQEventType1", //[1]
    "earthQEventType2", //[2]
    "earthQEventType3", //[3]
    "earthQEventType4", //[4]
];

//EVENT LOCATION
var earthQEventLocationArray = [
    "earthQEventLocation0", //[0]
    "earthQEventLocation1", //[1]
    "earthQEventLocation2", //[2]
    "earthQEventLocation3", //[3]
    "earthQEventLocation4", //[4]
];

//EVENT RATING
var earthQEventRatingArray = [
    "earthQEventRating0", //[0]
    "earthQEventRating1", //[1]
    "earthQEventRating2", //[2]
    "earthQEventRating3", //[3]
    "earthQEventRating4", //[4]
];

//EVENT TIME
var earthQEventTimeArray = [
    "earthQEventTime0", //[0]
    "earthQEventTime1", //[1]
    "earthQEventTime2", //[2]
    "earthQEventTime3", //[3]
    "earthQEventTime4", //[4]
];

/* 2.1# ==- CSS VARABLE ARRAYS [END]-== */

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

        /* DEBUGGING 
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
        console.log(earthQIDNameArray); //display value of name array */
        
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

/* 3.1# DATEFORMATS function */


/* 3.2# MARKER ANIMATION*/
function markerAnimaton() {
    earthquakeMarkerArray[i].setAnimation(google.maps.Animation.DROP);
}
/* 3.2# MARKER ANIMATION [END]*/

/* 3.3# UI DISPLAY */

/* 3.3# CAP FIRST LETTER [END]*/

/* 4# ==== EARTHQUAKE MARKER LOOP ==== */
function earthQuakeMarkerCreateLoop() {
    
    for (i = 0; i < earthQEventLength; i++) {
        //loop until i = earthQEventLength Var


        /* CONVERT JSON DATE TIME TO UTC */
        var earthQTimeFormat = earthQTimeArray[i]; //for formatting earthquake event time based off json
        var dateFromat = /(\d{2})\.(\d{2})\.(\d{4})/; //wanted date format
        var earthQDateFormat = new Date(earthQTimeFormat.replace(dateFromat, '$3-$2-$1')); //replacing date format
        /* CONVERT JSON DATE TIME TO UTC [END]*/


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
            
            /* 1# DISPLAY IN UI */
            //idFunction();
            earthQTextContentArray[i] = document.createElement('div');
            $(earthQTextContentArray[i]).addClass("dummyEvent");
            earthQTextContentArray[i].innerHTML = earthQTextInnerHtmlArray[0];

            $(".eventsList").prepend(earthQTextContentArray[i]);
            //earthQIDNameArray[i];
            
            // 1.0# SET CONTENT
            //SET EVENT TITLE
            document.getElementById(earthQEventTypeArray[0]).textContent = earthUIVar;
            //SET EVENT LOCATION
            document.getElementById(earthQEventLocationArray[0]).textContent = earthQIDNameArray[i];
            //SET EVENT HAZARDS
            document.getElementById(earthQEventRatingArray[0]).textContent = earthAlertLevelText + earthQIntesityArray[i];
            //SET LAST CHECKED EVENT
            document.getElementById(earthQEventTimeArray[0]).textContent = earthQDateFormat.toUTCString();
            /* 1# DISPLAY IN UI [END] */
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

            /* 2# DISPLAY IN UI */
            earthQTextContentArray[i] = document.createElement('div');
            $(earthQTextContentArray[i]).addClass("dummyEvent");
            earthQTextContentArray[i].innerHTML = earthQTextInnerHtmlArray[1];

            $(".eventsList").append(earthQTextContentArray[i]);
            //earthQIDNameArray[i];
            
            // 2.0# SET CONTENT
            //SET EVENT TITLE
            document.getElementById(earthQEventTypeArray[1]).textContent = earthUIVar;
            //SET EVENT LOCATION
            document.getElementById(earthQEventLocationArray[1]).textContent = earthQIDNameArray[i];
            //SET EVENT HAZARDS
            document.getElementById(earthQEventRatingArray[1]).textContent = earthAlertLevelText + earthQIntesityArray[i];
            //SET LAST CHECKED EVENT
            document.getElementById(earthQEventTimeArray[1]).textContent = earthQDateFormat.toUTCString();
            /* 2# DISPLAY IN UI [END] */
            
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

            /* 3# DISPLAY IN UI */
            earthQTextContentArray[i] = document.createElement('div');
            $(earthQTextContentArray[i]).addClass("dummyEvent");
            earthQTextContentArray[i].innerHTML = earthQTextInnerHtmlArray[2];

            $(".eventsList").prepend(earthQTextContentArray[i]);
            //earthQIDNameArray[i];

            // 3.0# SET CONTENT
            //SET EVENT TITLE
            document.getElementById(earthQEventTypeArray[2]).textContent = earthUIVar;
            //SET EVENT LOCATION
            document.getElementById(earthQEventLocationArray[2]).textContent = earthQIDNameArray[i];
            //SET EVENT HAZARDS
            document.getElementById(earthQEventRatingArray[2]).textContent = earthAlertLevelText + earthQIntesityArray[i];
            //SET LAST CHECKED EVENT
            document.getElementById(earthQEventTimeArray[2]).textContent = earthQDateFormat.toUTCString();
            /* 3# DISPLAY IN UI [END] */
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

            /* 4# DISPLAY IN UI */
            earthQTextContentArray[i] = document.createElement('div');
            $(earthQTextContentArray[i]).addClass("dummyEvent");
            earthQTextContentArray[i].innerHTML = earthQTextInnerHtmlArray[3];

            $(".eventsList").prepend(earthQTextContentArray[i]);
            // 4.0# SET CONTENT
            //SET EVENT TITLE
            document.getElementById(earthQEventTypeArray[3]).textContent = earthUIVar;
            //SET EVENT LOCATION
            document.getElementById(earthQEventLocationArray[3]).textContent = earthQIDNameArray[i];
            //SET EVENT HAZARDS
            document.getElementById(earthQEventRatingArray[3]).textContent = earthAlertLevelText + earthQIntesityArray[i];
            //SET LAST CHECKED EVENT
            document.getElementById(earthQEventTimeArray[3]).textContent = earthQDateFormat.toUTCString();
            /* 4# DISPLAY IN UI [END] */
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

            /* 5# DISPLAY IN UI */
            earthQTextContentArray[i] = document.createElement('div');
            $(earthQTextContentArray[i]).addClass("dummyEvent");
            earthQTextContentArray[i].innerHTML = earthQTextInnerHtmlArray[4];

            $(".eventsList").prepend(earthQTextContentArray[i]);
            // 5.0# SET CONTENT
            //SET EVENT TITLE
            document.getElementById(earthQEventTypeArray[4]).textContent = earthUIVar;
            //SET EVENT LOCATION
            document.getElementById(earthQEventLocationArray[4]).textContent = earthQIDNameArray[i];
            //SET EVENT HAZARDS
            document.getElementById(earthQEventRatingArray[4]).textContent = earthAlertLevelText + earthQIntesityArray[i];
            //SET LAST CHECKED EVENT
            document.getElementById(earthQEventTimeArray[4]).textContent = earthQDateFormat.toUTCString();
            /* 5# DISPLAY IN UI [END] */
        }

    }
}
/* 4# ==== EARTHQUAKE MARKER LOOP [END]==== */
//if (latitude <= locWLatArray[0] + 0.0379 && latitude >= locWLatArray[0] - 0.0379 && longitude <= locWLngArray[0] + 0.0300 && longitude >= locWLngArray[0] - 0.0300) {
