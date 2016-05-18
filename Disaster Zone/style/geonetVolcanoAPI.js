/* Geonet Volcano API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var tblRow = 0; //TEMP
var geonetVolcano = "./json/geoNetVolcanoVal.json"; //saves metserivice url as var
var volTitleLength = 12; //sets array length
/*== ARRAYS ==*/

/* 1.1# VOLCANO VARABLE ARRAYS */
//volcano titles
var volcanoTitleArray = [
];
//volcano levels
var volcanoLevelArray = [
];
//volcano activity
var volcanoActivityArray = [
];

//stores activtiy array
var volcanoHazardsArray = [ //11

];
/* 1.1# VOLCANO VARABLE ARRAY [END]*/


window.onload = function () {
    volJSON();
}
// VOL JSON is called as a function in geolocationAPI
function volJSON() {
    //gets JSON from defined locaiton [LOCAL './json/geoNetVolcanoVal.json' REMOTE 'http://api.geonet.org.nz/volcano/val']
    $.getJSON(geonetVolcano, function (data) {
        /* [USED TO DISPLAY IN TEST PAGE FOR DEBUG]
        //each data features array is looped for its length
            $.each(data.features, function (i, f) {
                //data id displayed in table row || this one is volcano title
                tblRow = "<tr>" + "<td>" + f.properties.volcanoTitle + "</td>" +
                 "<td>" + f.properties.level + "</td>" + "<td>" + f.properties.activity + "</td>" + "<td>" + f.properties.hazards + "</td>" + "</tr>"
                $(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
            }); */

        $.each(data.features, function (i, f) {
            //data id displayed in table row || this one is volcano title
            if (i < volTitleLength) {
                volcanoTitleArray[i] = f.properties.volcanoTitle;
                volcanoLevelArray[i] = f.properties.level;
                volcanoActivityArray[i] = f.properties.activity;
                volcanoHazardsArray[i] = f.properties.hazards;
                i++;
            }
            else {
                //doNothing
            }

        });

        /* DEBUGGING */
        console.log('#1')
        console.log(volcanoTitleArray) //display value of title array
        console.log('#2')
        console.log(volcanoLevelArray) //display value of level array
        console.log('#3')
        console.log(volcanoActivityArray) //display value of activity array
        console.log('#4')
        console.log(volcanoHazardsArray) //display value of hazard array
    });


}