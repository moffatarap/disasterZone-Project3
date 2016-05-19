/* Geonet Volcano API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetVolcano = "./json/geoNetVolcanoVal.json"; //saves geonet url as var "https://json.ey.nz/api.geonet.org.nz/volcano/val"
var volTitleLength = 12; //sets array length
var volRadiusMulti = 5;
/*== ARRAYS ==*/

/* 1.1# VOLCANO VARABLE ARRAYS */
//volcano titles
var volcanoMarkerTitleArray = [
    , //[0]  || AUCKLAND VOLCANIC FIELD
    , //[1]  || KERMADEC ISLANDS
    , //[2]  || MAYOR ISLAND
    , //[3]  || NGAURUHOE
    , //[4]  || NORTHLAND
    , //[5]  || OKATAINA AKA MOUNT TARAWERA
    , //[6]  || ROTORUA
    , //[7]  || TAUPO
    , //[8]  || TONGARIRO
    , //[9]  || TARANAKI/EGMONT
    , //[10] || WHITE ISLAND
    , //[11] || RUAPEHU
];

//volcano levels
var volcanoLevelArray = [
    , //[0]  || AUCKLAND VOLCANIC FIELD
    , //[1]  || KERMADEC ISLANDS
    , //[2]  || MAYOR ISLAND
    , //[3]  || NGAURUHOE
    , //[4]  || NORTHLAND
    , //[5]  || OKATAINA AKA MOUNT TARAWERA
    , //[6]  || ROTORUA
    , //[7]  || TAUPO
    , //[8]  || TONGARIRO
    , //[9]  || TARANAKI/EGMONT
    , //[10] || WHITE ISLAND
    , //[11] || RUAPEHU
];
//volcano activity
var volcanoActivityArray = [
    , //[0]  || AUCKLAND VOLCANIC FIELD
    , //[1]  || KERMADEC ISLANDS
    , //[2]  || MAYOR ISLAND
    , //[3]  || NGAURUHOE
    , //[4]  || NORTHLAND
    , //[5]  || OKATAINA AKA MOUNT TARAWERA
    , //[6]  || ROTORUA
    , //[7]  || TAUPO
    , //[8]  || TONGARIRO
    , //[9]  || TARANAKI/EGMONT
    , //[10] || WHITE ISLAND
    , //[11] || RUAPEHU
];

//stores activtiy array
var volcanoHazardsArray = [
    , //[0]  || AUCKLAND VOLCANIC FIELD
    , //[1]  || KERMADEC ISLANDS
    , //[2]  || MAYOR ISLAND
    , //[3]  || NGAURUHOE
    , //[4]  || NORTHLAND
    , //[5]  || OKATAINA AKA MOUNT TARAWERA
    , //[6]  || ROTORUA
    , //[7]  || TAUPO
    , //[8]  || TONGARIRO
    , //[9]  || TARANAKI/EGMONT
    , //[10] || WHITE ISLAND
    , //[11] || RUAPEHU

];
/* 1.1# VOLCANO VARABLE ARRAY [END]*/


window.onload = function () {
    volJSON();
}

// VOL JSON is called as a function in geolocationAPI
function volJSON() {
    //gets JSON from defined locaiton [LOCAL './json/geoNetVolcanoVal.json' REMOTE 'https://json.ey.nz/api.geonet.org.nz/volcano/val']

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
                volcanoMarkerTitleArray[i] = f.properties.volcanoTitle;
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
        console.log('#1');
        console.log(volcanoMarkerTitleArray); //display value of title array
        console.log('#2');
        console.log(volcanoLevelArray.toString()); //display value of level array
        console.log('#3');
        console.log(volcanoActivityArray); //display value of activity array
        console.log('#4');
        console.log(volcanoHazardsArray); //display value of hazard array
        document.getElementById("errorCantFind").innerHTML = volcanoLevelArray[11];
        
        volcanoMarkerCreate(); //calls volcano marker function
    });

/* 3# === VOLCANO MARKERS CREATE === */
    function volcanoMarkerCreate() {

/* 10# ========  WHITE ISLAND ======== */

/*10# ========  WHITE ISLAND [END] ======== */

/* 11# =========  RUAPEHU ========= */

        if (volcanoLevelArray[11] > 0) {
            //IF volcano alert level is larger than 0
       

            /* 11# Alert Level 1 */
         if (volcanoLevelArray[11] === 1) {
                volcanoMarkerArray[11] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[11],
                    position: { lat: volcanoWarningLatArray[11], lng: volcanoWarningLngArray[11] },
                    icon: iconVolcanoArray[4],
                });

             // circle alert create
                volcanoAlertCircleMarkerArray[11] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[11].bindTo('center', volcanoMarkerArray[11], 'position'); //binds circle to location of marker
            }

            /* 11# Alert Level 2 */
            if (volcanoLevelArray[11] === 2) {
                volcanoMarkerArray[11] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[11],
                    position: { lat: volcanoWarningLatArray[11], lng: volcanoWarningLngArray[11] },
                    icon: iconVolcanoArray[3],
                });

            // circle alert create
                volcanoAlertCircleMarkerArray[11] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[11].bindTo('center', volcanoMarkerArray[11], 'position'); //binds circle to location of marker
            }

            /* 11# Alert Level 3 */
            if (volcanoLevelArray[11] === 3) {
                volcanoMarkerArray[11] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[11],
                    position: { lat: volcanoWarningLatArray[11], lng: volcanoWarningLngArray[11] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[11] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[11].bindTo('center', volcanoMarkerArray[11], 'position'); //binds circle to location of marker

            }

            /* 11# Alert Level 4 */
            if (volcanoLevelArray[11] === 4) {
                volcanoMarkerArray[11] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[11],
                    position: { lat: volcanoWarningLatArray[11], lng: volcanoWarningLngArray[11] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[11] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[11].bindTo('center', volcanoMarkerArray[11], 'position'); //binds circle to location of marker
            }

            /* 11# Alert Level 5 */
            if (volcanoLevelArray[11] === 5) {
                volcanoMarkerArray[11] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[11],
                    position: { lat: volcanoWarningLatArray[11], lng: volcanoWarningLngArray[11] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[11] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[11].bindTo('center', volcanoMarkerArray[11], 'position'); //binds circle to location of marker
            }


      
            /* IF VOLCANO LEVEL IS 0 */
       
        }

        /* 11# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[11] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[11],
                position: { lat: volcanoWarningLatArray[11], lng: volcanoWarningLngArray[11] },
                icon: disasterIconStandardArray[5],
            });

        }

/* 11# ========= RUAPEHU [END] ========= */

   }
}
