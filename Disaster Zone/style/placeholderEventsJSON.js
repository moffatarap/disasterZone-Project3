/* Placeholder Event JSON Disaster Zone MDDN352 P3 13.6 - [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var phEvents = "./json/placeHolderEvents.json"; //var local file of json
var phEventLength = 4; //var sets length of events json
var phAlertLevelText = "Alert "; //alert var
var phContent = document.createElement('div'); //creates vairable that is a div

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

/* 3# === PLACEHOLDER MARKER LOOP FUNCTION === */
function phMarkerCreateLoop() {
    if (phIntensityArray[0] === "weak") {
    phMarkerArray[0] = new google.maps.Marker({
        map: mapObject,
        title: 'ffffffsss',
        position: { lat: phLatArray[0], lng: phLngArray[0] }, //PAEKAKARIKI
        icon: iconArray[0],
    });
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
