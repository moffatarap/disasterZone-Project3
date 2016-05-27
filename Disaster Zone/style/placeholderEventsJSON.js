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

/* 1# TEMP FUNCTION */
window.onload = function () {
    phJSON();
};

/* 1# TEMP FUNCTION [END]*/

/* 2# EARTHQUAKE FUNCTION */
function phJSON() {
    $.getJSON(phEvents, function (data) {
        $.each(data.properties, function (i, ph) {
            //data id displayed in table row || this one is volcano title
            if (i < phEventLength) {
                phPublicIdArray[i] = ph.publicid;
                phOriginTimeArray[i] = ph.origintime;
                phDepthArray[i] = ph.depth; //access first element
                phIntensityArray[i] = ph.intensity; //access second element
                //earthQDepthArray[i] = ph.properties.depth;
                //earthQTimeArray[i] = ph.properties.origintime;
                //earthQIDNameArray[i] = ph.id;

                i++;
            }
            else {
                //doNothing
            }

        });

        /* DEBUGGING */
        console.log("#1");
        console.log(phPublicIdArray);



        //[DEBUG DISPLAY]document.getElementById("errorCantFind").innerHTML = volcanoLevelArray[11];

        //earthQuakeMarkerCreateLoop(); //calls earthquake marker loop
    });

}
/* 2# EARTHQUAKE FUNCTION [END]*/
