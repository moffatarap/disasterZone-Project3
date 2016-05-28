/* Placeholder Event JSON Disaster Zone MDDN352 P3 13.6 - [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var phEvents = "./json/placeHolderEvents.json"; //var local file of json
var phEventLength = 4; //var sets length of events json
var phAlertLevelText = "Alert "; //alert var
var phContent = document.createElement('div'); //creates vairable that is a div
var phHurrincaneAlertMulti = 10; //sets var for alert radius of hurricane
var phTornadoAlertMulti = 40; //sets var alert radius tornado
/*== ARRAYS ==*/
//Name of event
var phPublicIdArray = [
];

//Time of event
var phOriginTimeArray = [

];
//Depth of event
var phDepthArray = [

];
//intensity of event
var phIntensityArray = [

];
//lat lng location of event
var phLatArray = [

];

var phLngArray = [

];

//location name
var phLocationName = [

];

//marker array
var phMarkerArray = [

];
/* 1# TEMP FUNCTION 
window.onload = function () {
    phJSON();
};*/

/* 1# TEMP FUNCTION [END]*/

/* 2# PLACEHOLDER FUNCTION */
function phJSON() {
    $.getJSON(phEvents, function (data) {
        $.each(data.properties, function (i, ph) {
            //data id displayed in table row || this one is volcano title
            if (i < phEventLength) {
                phPublicIdArray[i] = ph.publicid;
                //phOriginTimeArray[i] = ph.origintime;
                phDepthArray[i] = ph.depth; //access first element
                phIntensityArray[i] = ph.intensity; //access second element
                phLatArray[i] = ph.coordinates[1]; //access second element
                phLngArray[i] = ph.coordinates[0]; //access first element
                phLocationName[i] = ph.location; //location name
                i++;
            }
            else {
                //doNothing
            }

        });

        /* DEBUGGING */
        console.log("#1");
        console.log(phPublicIdArray);
        console.log("#2");
        //console.log(phOriginTimeArray);
        console.log("#3");
        console.log(phDepthArray);
        console.log("#4");
        console.log(phIntensityArray);
        console.log("#5");
        console.log(phLatArray);
        console.log("#6");
        console.log(phLngArray);
        console.log("#7");
        console.log(phLocationName);

        phMarkerCreateLoop(); //calls placeholder marker loop
    });

}
/* 2#  PLACEHOLDER FUNCTION [END]*/
/* 3.2# MARKER ANIMATION*/


/* 3.2# MARKER ANIMATION [END]*/
/* 3# === PLACEHOLDER MARKER LOOP FUNCTION === */
function phMarkerCreateLoop() {

    if (phIntensityArray[0] === "light") {
    phMarkerArray[0] = new google.maps.Marker({
        map: mapObject,
        title: "Light " + phPublicIdArray[0] + " " + phLocationName[0],
        position: { lat: phLatArray[0], lng: phLngArray[0] }, //PAEKAKARIKI
        icon: iconArray[23],
    });

    phMarkerArray[0].setAnimation(google.maps.Animation.DROP);
    
        // circle alert create
    phEventsAlertCircleMarkerArray[0] = new google.maps.Circle({
        map: mapObject,
        radius: alertCirlceRadiusArray[3], // sets alert radius from array 
        fillColor: alertCircleColorArray[3], //sets color of fill from array
        strokeColor: alertCircleColorArray[3], //sets stroke color from array
        strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
    });

    phEventsAlertCircleMarkerArray[0].bindTo('center', phMarkerArray[0], 'position'); //binds circle to location of marker
    }

    if (phIntensityArray[1] === "moderate") {
        phMarkerArray[1] = new google.maps.Marker({
            map: mapObject,
            title: "Moderate " + phPublicIdArray[1] + " " + phLocationName[1],
            position: { lat: phLatArray[1], lng: phLngArray[1] }, //PAEKAKARIKI
            icon: iconArray[7],
        });

        phMarkerArray[1].setAnimation(google.maps.Animation.DROP);

        // circle alert create
        phEventsAlertCircleMarkerArray[1] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[2], // sets alert radius from array 
            fillColor: alertCircleColorArray[2], //sets color of fill from array
            strokeColor: alertCircleColorArray[2], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        phEventsAlertCircleMarkerArray[1].bindTo('center', phMarkerArray[1], 'position'); //binds circle to location of marker
    }

    if (phIntensityArray[2] === "strong") {
        phMarkerArray[2] = new google.maps.Marker({
            map: mapObject,
            title: "Strong " + phPublicIdArray[2] + " " + phLocationName[2],
            position: { lat: phLatArray[2], lng: phLngArray[2] },
            icon: iconArray[11],
        });

        phMarkerArray[2].setAnimation(google.maps.Animation.DROP);

        // circle alert create
        phEventsAlertCircleMarkerArray[2] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[1] * phHurrincaneAlertMulti, // sets alert radius from array 
            fillColor: alertCircleColorArray[1], //sets color of fill from array
            strokeColor: alertCircleColorArray[1], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        phEventsAlertCircleMarkerArray[2].bindTo('center', phMarkerArray[2], 'position'); //binds circle to location of marker
    }

    if (phIntensityArray[3] === "weak") {
        phMarkerArray[3] = new google.maps.Marker({
            map: mapObject,
            title: "Weak " + phPublicIdArray[3] + " " + phLocationName[3],
            position: { lat: phLatArray[3], lng: phLngArray[3] },
            icon: iconArray[19],
        });

        phMarkerArray[3].setAnimation(google.maps.Animation.DROP);

        // circle alert create
        phEventsAlertCircleMarkerArray[3] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[4] * phTornadoAlertMulti, // sets alert radius from array 
            fillColor: alertCircleColorArray[4], //sets color of fill from array
            strokeColor: alertCircleColorArray[4], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        phEventsAlertCircleMarkerArray[3].bindTo('center', phMarkerArray[3], 'position'); //binds circle to location of marker
    }
        //for (i = 0; i < phEventLength; i++) {

    //    //PH Weak
    //    //if (phIntensityArray[i] === "weak") {
    //    //    phMarkerArray[i] = new google.maps.Marker({
    //    //        //create marker
    //    //        map: mapObject,
    //    //        title: phPublicIdArray[i],
    //    //        position: { lat: phLatArray[i], lng: phLngArray[i] },
    //    //        icon: iconArray[24],
    //    //    });
    //    //}
    //}
}

/* 3# === PLACEHOLDER MARKER LOOP FUNCTION [END] === */
