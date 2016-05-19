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
        /* 0# AUCKLAND VOLCANIC FIELD */
        if (volcanoLevelArray[0] > 0) {
            //IF volcano alert level is larger than 0


            /* 0# Alert Level 1 */
            if (volcanoLevelArray[0] === 0) {
                volcanoMarkerArray[0] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[0],
                    position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[0] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[0].bindTo('center', volcanoMarkerArray[0], 'position'); //binds circle to location of marker
            }

            /* 0# Alert Level 2 */
            if (volcanoLevelArray[0] === 0) {
                volcanoMarkerArray[0] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[0],
                    position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[0] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[0].bindTo('center', volcanoMarkerArray[0], 'position'); //binds circle to location of marker
            }

            /* 0# Alert Level 3 */
            if (volcanoLevelArray[0] === 0) {
                volcanoMarkerArray[0] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[0],
                    position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[0] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[0].bindTo('center', volcanoMarkerArray[0], 'position'); //binds circle to location of marker

            }

            /* 0# Alert Level 4 */
            if (volcanoLevelArray[0] === 0) {
                volcanoMarkerArray[0] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[0],
                    position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[0] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[0].bindTo('center', volcanoMarkerArray[0], 'position'); //binds circle to location of marker
            }

            /* 0# Alert Level 5 */
            if (volcanoLevelArray[0] === 0) {
                volcanoMarkerArray[0] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[0],
                    position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[0] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[0].bindTo('center', volcanoMarkerArray[0], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 0# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[0] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[0],
                position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 0# AUCKLAND VOLCANIC FIELD [END] */

        /* 1# =  KERMADEC ISLANDS = */
        if (volcanoLevelArray[1] > 0) {
            //IF volcano alert level is larger than 0


            /* 1# Alert Level 1 */
            if (volcanoLevelArray[1] === 1) {
                volcanoMarkerArray[1] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[1],
                    position: { lat: volcanoWarningLatArray[1], lng: volcanoWarningLngArray[1] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[1] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[1].bindTo('center', volcanoMarkerArray[1], 'position'); //binds circle to location of marker
            }

            /* 1# Alert Level 2 */
            if (volcanoLevelArray[1] === 2) {
                volcanoMarkerArray[1] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[1],
                    position: { lat: volcanoWarningLatArray[1], lng: volcanoWarningLngArray[1] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[1] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[1].bindTo('center', volcanoMarkerArray[1], 'position'); //binds circle to location of marker
            }

            /* 1# Alert Level 3 */
            if (volcanoLevelArray[1] === 3) {
                volcanoMarkerArray[1] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[1],
                    position: { lat: volcanoWarningLatArray[1], lng: volcanoWarningLngArray[1] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[1] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[1].bindTo('center', volcanoMarkerArray[1], 'position'); //binds circle to location of marker

            }

            /* 1# Alert Level 4 */
            if (volcanoLevelArray[1] === 4) {
                volcanoMarkerArray[1] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[1],
                    position: { lat: volcanoWarningLatArray[1], lng: volcanoWarningLngArray[1] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[1] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[1].bindTo('center', volcanoMarkerArray[1], 'position'); //binds circle to location of marker
            }

            /* 1# Alert Level 5 */
            if (volcanoLevelArray[1] === 5) {
                volcanoMarkerArray[1] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[1],
                    position: { lat: volcanoWarningLatArray[1], lng: volcanoWarningLngArray[1] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[1] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[1].bindTo('center', volcanoMarkerArray[1], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 1# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[1] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[1],
                position: { lat: volcanoWarningLatArray[1], lng: volcanoWarningLngArray[1] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 1# =   [END]= */

        /* 2# ==  MAYOR ISLAND == */
        if (volcanoLevelArray[2] > 0) {
            //IF volcano alert level is larger than 0


            /* 2# Alert Level 1 */
            if (volcanoLevelArray[2] === 1) {
                volcanoMarkerArray[2] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[2],
                    position: { lat: volcanoWarningLatArray[2], lng: volcanoWarningLngArray[2] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[2] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[2].bindTo('center', volcanoMarkerArray[2], 'position'); //binds circle to location of marker
            }

            /* 2# Alert Level 2 */
            if (volcanoLevelArray[2] === 2) {
                volcanoMarkerArray[2] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[2],
                    position: { lat: volcanoWarningLatArray[2], lng: volcanoWarningLngArray[2] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[2] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[2].bindTo('center', volcanoMarkerArray[2], 'position'); //binds circle to location of marker
            }

            /* 2# Alert Level 3 */
            if (volcanoLevelArray[2] === 3) {
                volcanoMarkerArray[2] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[2],
                    position: { lat: volcanoWarningLatArray[2], lng: volcanoWarningLngArray[2] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[2] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[2].bindTo('center', volcanoMarkerArray[2], 'position'); //binds circle to location of marker

            }

            /* 2# Alert Level 4 */
            if (volcanoLevelArray[2] === 4) {
                volcanoMarkerArray[2] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[2],
                    position: { lat: volcanoWarningLatArray[2], lng: volcanoWarningLngArray[2] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[2] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[2].bindTo('center', volcanoMarkerArray[2], 'position'); //binds circle to location of marker
            }

            /* 2# Alert Level 5 */
            if (volcanoLevelArray[2] === 5) {
                volcanoMarkerArray[2] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[2],
                    position: { lat: volcanoWarningLatArray[2], lng: volcanoWarningLngArray[2] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[2] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[2].bindTo('center', volcanoMarkerArray[2], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 2# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[2] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[2],
                position: { lat: volcanoWarningLatArray[2], lng: volcanoWarningLngArray[2] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 2# ==  MAYOR ISLAND [END]== */

        /* 3# ===  NGAURUHOE === */
        if (volcanoLevelArray[3] > 0) {
            //IF volcano alert level is larger than 0


            /* 3# Alert Level 1 */
            if (volcanoLevelArray[3] === 1) {
                volcanoMarkerArray[3] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[3],
                    position: { lat: volcanoWarningLatArray[3], lng: volcanoWarningLngArray[3] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[3] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[3].bindTo('center', volcanoMarkerArray[3], 'position'); //binds circle to location of marker
            }

            /* 3# Alert Level 2 */
            if (volcanoLevelArray[3] === 2) {
                volcanoMarkerArray[3] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[3],
                    position: { lat: volcanoWarningLatArray[3], lng: volcanoWarningLngArray[3] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[3] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[3].bindTo('center', volcanoMarkerArray[3], 'position'); //binds circle to location of marker
            }

            /* 3# Alert Level 3 */
            if (volcanoLevelArray[3] === 3) {
                volcanoMarkerArray[3] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[3],
                    position: { lat: volcanoWarningLatArray[3], lng: volcanoWarningLngArray[3] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[3] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[3].bindTo('center', volcanoMarkerArray[3], 'position'); //binds circle to location of marker

            }

            /* 3# Alert Level 4 */
            if (volcanoLevelArray[3] === 4) {
                volcanoMarkerArray[3] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[3],
                    position: { lat: volcanoWarningLatArray[3], lng: volcanoWarningLngArray[3] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[3] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[3].bindTo('center', volcanoMarkerArray[3], 'position'); //binds circle to location of marker
            }

            /* 3# Alert Level 5 */
            if (volcanoLevelArray[3] === 5) {
                volcanoMarkerArray[3] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[3],
                    position: { lat: volcanoWarningLatArray[3], lng: volcanoWarningLngArray[3] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[3] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[3].bindTo('center', volcanoMarkerArray[3], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 3# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[3] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[3],
                position: { lat: volcanoWarningLatArray[3], lng: volcanoWarningLngArray[3] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 3# ===  NGAURUHOE [END]=== */

        /* 4# ====  NORTHLAND ==== */
        if (volcanoLevelArray[4] > 0) {
            //IF volcano alert level is larger than 0


            /* 4# Alert Level 1 */
            if (volcanoLevelArray[4] === 1) {
                volcanoMarkerArray[4] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[4],
                    position: { lat: volcanoWarningLatArray[4], lng: volcanoWarningLngArray[4] },
                    icon: iconVolcanoArray[4],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[4] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[4].bindTo('center', volcanoMarkerArray[4], 'position'); //binds circle to location of marker
            }

            /* 4# Alert Level 2 */
            if (volcanoLevelArray[4] === 2) {
                volcanoMarkerArray[4] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[4],
                    position: { lat: volcanoWarningLatArray[4], lng: volcanoWarningLngArray[4] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[4] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[4].bindTo('center', volcanoMarkerArray[4], 'position'); //binds circle to location of marker
            }

            /* 4# Alert Level 3 */
            if (volcanoLevelArray[4] === 3) {
                volcanoMarkerArray[4] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[4],
                    position: { lat: volcanoWarningLatArray[4], lng: volcanoWarningLngArray[4] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[4] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[4].bindTo('center', volcanoMarkerArray[4], 'position'); //binds circle to location of marker

            }

            /* 4# Alert Level 4 */
            if (volcanoLevelArray[4] === 4) {
                volcanoMarkerArray[4] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[4],
                    position: { lat: volcanoWarningLatArray[4], lng: volcanoWarningLngArray[4] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[4] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[4].bindTo('center', volcanoMarkerArray[4], 'position'); //binds circle to location of marker
            }

            /* 4# Alert Level 5 */
            if (volcanoLevelArray[4] === 5) {
                volcanoMarkerArray[4] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[4],
                    position: { lat: volcanoWarningLatArray[4], lng: volcanoWarningLngArray[4] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[4] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[4].bindTo('center', volcanoMarkerArray[4], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 4# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[4] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[4],
                position: { lat: volcanoWarningLatArray[4], lng: volcanoWarningLngArray[4] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 4# ====  NORTHLAND [END]==== */

        /* 5# =====  OKATAINA AKA MOUNT TARAWERA ===== */
        if (volcanoLevelArray[5] > 0) {
            //IF volcano alert level is larger than 0


            /* 5# Alert Level 1 */
            if (volcanoLevelArray[5] === 1) {
                volcanoMarkerArray[5] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[5],
                    position: { lat: volcanoWarningLatArray[5], lng: volcanoWarningLngArray[5] },
                    icon: iconVolcanoArray[4],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[5] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[5].bindTo('center', volcanoMarkerArray[5], 'position'); //binds circle to location of marker
            }

            /* 5# Alert Level 2 */
            if (volcanoLevelArray[5] === 2) {
                volcanoMarkerArray[5] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[5],
                    position: { lat: volcanoWarningLatArray[5], lng: volcanoWarningLngArray[5] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[5] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[5].bindTo('center', volcanoMarkerArray[5], 'position'); //binds circle to location of marker
            }

            /* 5# Alert Level 3 */
            if (volcanoLevelArray[5] === 3) {
                volcanoMarkerArray[5] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[5],
                    position: { lat: volcanoWarningLatArray[5], lng: volcanoWarningLngArray[5] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[5] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[5].bindTo('center', volcanoMarkerArray[5], 'position'); //binds circle to location of marker

            }

            /* 5# Alert Level 4 */
            if (volcanoLevelArray[5] === 4) {
                volcanoMarkerArray[5] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[5],
                    position: { lat: volcanoWarningLatArray[5], lng: volcanoWarningLngArray[5] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[5] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[5].bindTo('center', volcanoMarkerArray[5], 'position'); //binds circle to location of marker
            }

            /* 5# Alert Level 5 */
            if (volcanoLevelArray[5] === 5) {
                volcanoMarkerArray[5] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[5],
                    position: { lat: volcanoWarningLatArray[5], lng: volcanoWarningLngArray[5] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[5] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[5].bindTo('center', volcanoMarkerArray[5], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 5# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[5] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[5],
                position: { lat: volcanoWarningLatArray[5], lng: volcanoWarningLngArray[5] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 5# =====  OKATAINA AKA MOUNT TARAWERA [END]===== */

        /* 6# ======  ROTORUA ====== */
        if (volcanoLevelArray[6] > 0) {
            //IF volcano alert level is larger than 0


            /* 6# Alert Level 1 */
            if (volcanoLevelArray[6] === 1) {
                volcanoMarkerArray[6] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[6],
                    position: { lat: volcanoWarningLatArray[6], lng: volcanoWarningLngArray[6] },
                    icon: iconVolcanoArray[4],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[6] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[6].bindTo('center', volcanoMarkerArray[6], 'position'); //binds circle to location of marker
            }

            /* 6# Alert Level 2 */
            if (volcanoLevelArray[6] === 2) {
                volcanoMarkerArray[6] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[6],
                    position: { lat: volcanoWarningLatArray[6], lng: volcanoWarningLngArray[6] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[6] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[6].bindTo('center', volcanoMarkerArray[6], 'position'); //binds circle to location of marker
            }

            /* 6# Alert Level 3 */
            if (volcanoLevelArray[6] === 3) {
                volcanoMarkerArray[6] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[6],
                    position: { lat: volcanoWarningLatArray[6], lng: volcanoWarningLngArray[6] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[6] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[6].bindTo('center', volcanoMarkerArray[6], 'position'); //binds circle to location of marker

            }

            /* 6# Alert Level 4 */
            if (volcanoLevelArray[6] === 4) {
                volcanoMarkerArray[6] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[6],
                    position: { lat: volcanoWarningLatArray[6], lng: volcanoWarningLngArray[6] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[6] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[6].bindTo('center', volcanoMarkerArray[6], 'position'); //binds circle to location of marker
            }

            /* 6# Alert Level 5 */
            if (volcanoLevelArray[6] === 5) {
                volcanoMarkerArray[6] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[6],
                    position: { lat: volcanoWarningLatArray[6], lng: volcanoWarningLngArray[6] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[6] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[6].bindTo('center', volcanoMarkerArray[6], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 6# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[6] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[6],
                position: { lat: volcanoWarningLatArray[6], lng: volcanoWarningLngArray[6] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 6# ======  ROTORUA [END]====== */

        /* 7# ======= TAUPO ======= */
        if (volcanoLevelArray[7] > 0) {
            //IF volcano alert level is larger than 0


            /* 7# Alert Level 1 */
            if (volcanoLevelArray[7] === 1) {
                volcanoMarkerArray[7] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[7],
                    position: { lat: volcanoWarningLatArray[7], lng: volcanoWarningLngArray[7] },
                    icon: iconVolcanoArray[4],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[7] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[7].bindTo('center', volcanoMarkerArray[7], 'position'); //binds circle to location of marker
            }

            /* 7# Alert Level 2 */
            if (volcanoLevelArray[7] === 2) {
                volcanoMarkerArray[7] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[7],
                    position: { lat: volcanoWarningLatArray[7], lng: volcanoWarningLngArray[7] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[7] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[7].bindTo('center', volcanoMarkerArray[7], 'position'); //binds circle to location of marker
            }

            /* 7# Alert Level 3 */
            if (volcanoLevelArray[7] === 3) {
                volcanoMarkerArray[7] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[7],
                    position: { lat: volcanoWarningLatArray[7], lng: volcanoWarningLngArray[7] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[7] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[7].bindTo('center', volcanoMarkerArray[7], 'position'); //binds circle to location of marker

            }

            /* 7# Alert Level 4 */
            if (volcanoLevelArray[7] === 4) {
                volcanoMarkerArray[7] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[7],
                    position: { lat: volcanoWarningLatArray[7], lng: volcanoWarningLngArray[7] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[7] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[7].bindTo('center', volcanoMarkerArray[7], 'position'); //binds circle to location of marker
            }

            /* 7# Alert Level 5 */
            if (volcanoLevelArray[7] === 5) {
                volcanoMarkerArray[7] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[7],
                    position: { lat: volcanoWarningLatArray[7], lng: volcanoWarningLngArray[7] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[7] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[7].bindTo('center', volcanoMarkerArray[7], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 7# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[7] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[7],
                position: { lat: volcanoWarningLatArray[7], lng: volcanoWarningLngArray[7] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* 7# ======= TAUPO [END]======= */


        /* 8# ======== TONGARIRO ======== */
        if (volcanoLevelArray[8] > 0) {
            //IF volcano alert level is larger than 0


            /* 8# Alert Level 1 */
            if (volcanoLevelArray[8] === 1) {
                volcanoMarkerArray[8] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[8],
                    position: { lat: volcanoWarningLatArray[8], lng: volcanoWarningLngArray[8] },
                    icon: iconVolcanoArray[4],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[8] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[8].bindTo('center', volcanoMarkerArray[8], 'position'); //binds circle to location of marker
            }

            /* 8# Alert Level 2 */
            if (volcanoLevelArray[8] === 2) {
                volcanoMarkerArray[8] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[8],
                    position: { lat: volcanoWarningLatArray[8], lng: volcanoWarningLngArray[8] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[8] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[8].bindTo('center', volcanoMarkerArray[8], 'position'); //binds circle to location of marker
            }

            /* 8# Alert Level 3 */
            if (volcanoLevelArray[8] === 3) {
                volcanoMarkerArray[8] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[8],
                    position: { lat: volcanoWarningLatArray[8], lng: volcanoWarningLngArray[8] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[8] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[8].bindTo('center', volcanoMarkerArray[8], 'position'); //binds circle to location of marker

            }

            /* 8# Alert Level 4 */
            if (volcanoLevelArray[8] === 4) {
                volcanoMarkerArray[8] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[8],
                    position: { lat: volcanoWarningLatArray[8], lng: volcanoWarningLngArray[8] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[8] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[8].bindTo('center', volcanoMarkerArray[8], 'position'); //binds circle to location of marker
            }

            /* 8# Alert Level 5 */
            if (volcanoLevelArray[8] === 5) {
                volcanoMarkerArray[8] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[8],
                    position: { lat: volcanoWarningLatArray[8], lng: volcanoWarningLngArray[8] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[8] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[8].bindTo('center', volcanoMarkerArray[8], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 8# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[8] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[8],
                position: { lat: volcanoWarningLatArray[8], lng: volcanoWarningLngArray[8] },
                icon: disasterIconStandardArray[5],
            });

        }
/* 8# ======== TONGARIRO [END]======== */

/* 9# ==========  TARANAKI/EGMONT ========== */
        if (volcanoLevelArray[9] > 0) {
            //IF volcano alert level is larger than 0


            /* 9# Alert Level 1 */
            if (volcanoLevelArray[9] === 1) {
                volcanoMarkerArray[9] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[9],
                    position: { lat: volcanoWarningLatArray[9], lng: volcanoWarningLngArray[9] },
                    icon: iconVolcanoArray[4],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[9] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[9].bindTo('center', volcanoMarkerArray[9], 'position'); //binds circle to location of marker
            }

            /* 9# Alert Level 2 */
            if (volcanoLevelArray[9] === 2) {
                volcanoMarkerArray[9] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[9],
                    position: { lat: volcanoWarningLatArray[9], lng: volcanoWarningLngArray[9] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[9] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[9].bindTo('center', volcanoMarkerArray[9], 'position'); //binds circle to location of marker
            }

            /* 9# Alert Level 3 */
            if (volcanoLevelArray[9] === 3) {
                volcanoMarkerArray[9] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[9],
                    position: { lat: volcanoWarningLatArray[9], lng: volcanoWarningLngArray[9] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[9] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[9].bindTo('center', volcanoMarkerArray[9], 'position'); //binds circle to location of marker

            }

            /* 9# Alert Level 4 */
            if (volcanoLevelArray[9] === 4) {
                volcanoMarkerArray[9] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[9],
                    position: { lat: volcanoWarningLatArray[9], lng: volcanoWarningLngArray[9] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[9] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[9].bindTo('center', volcanoMarkerArray[9], 'position'); //binds circle to location of marker
            }

            /* 9# Alert Level 5 */
            if (volcanoLevelArray[9] === 5) {
                volcanoMarkerArray[9] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[9],
                    position: { lat: volcanoWarningLatArray[9], lng: volcanoWarningLngArray[9] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[9] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[9].bindTo('center', volcanoMarkerArray[9], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 9# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[9] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[9],
                position: { lat: volcanoWarningLatArray[9], lng: volcanoWarningLngArray[9] },
                icon: disasterIconStandardArray[5],
            });

        }
/* 9# ==========  TARANAKI/EGMONT [END] ========== */

/* 10# ==========  WHITE ISLAND ========== */
        if (volcanoLevelArray[10] > 0) {
            //IF volcano alert level is larger than 0


            /* 10# Alert Level 1 */
            if (volcanoLevelArray[10] === 1) {
                volcanoMarkerArray[10] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[10],
                    position: { lat: volcanoWarningLatArray[10], lng: volcanoWarningLngArray[10] },
                    icon: iconVolcanoArray[4],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[10] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[4], //sets color of fill from array
                    strokeColor: alertCircleColorArray[4], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[10].bindTo('center', volcanoMarkerArray[10], 'position'); //binds circle to location of marker
            }

            /* 10# Alert Level 2 */
            if (volcanoLevelArray[10] === 2) {
                volcanoMarkerArray[10] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[10],
                    position: { lat: volcanoWarningLatArray[10], lng: volcanoWarningLngArray[10] },
                    icon: iconVolcanoArray[3],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[10] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[3], //sets color of fill from array
                    strokeColor: alertCircleColorArray[3], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[10].bindTo('center', volcanoMarkerArray[10], 'position'); //binds circle to location of marker
            }

            /* 10# Alert Level 3 */
            if (volcanoLevelArray[10] === 3) {
                volcanoMarkerArray[10] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[10],
                    position: { lat: volcanoWarningLatArray[10], lng: volcanoWarningLngArray[10] },
                    icon: iconVolcanoArray[2],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[10] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[2], //sets color of fill from array
                    strokeColor: alertCircleColorArray[2], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[10].bindTo('center', volcanoMarkerArray[10], 'position'); //binds circle to location of marker

            }

            /* 10# Alert Level 4 */
            if (volcanoLevelArray[10] === 4) {
                volcanoMarkerArray[10] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[10],
                    position: { lat: volcanoWarningLatArray[10], lng: volcanoWarningLngArray[10] },
                    icon: iconVolcanoArray[1],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[10] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[1], //sets color of fill from array
                    strokeColor: alertCircleColorArray[1], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[10].bindTo('center', volcanoMarkerArray[10], 'position'); //binds circle to location of marker
            }

            /* 10# Alert Level 5 */
            if (volcanoLevelArray[10] === 5) {
                volcanoMarkerArray[10] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[10],
                    position: { lat: volcanoWarningLatArray[10], lng: volcanoWarningLngArray[10] },
                    icon: iconVolcanoArray[0],
                });

                // circle alert create
                volcanoAlertCircleMarkerArray[10] = new google.maps.Circle({
                    map: mapObject,
                    radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                    fillColor: alertCircleColorArray[0], //sets color of fill from array
                    strokeColor: alertCircleColorArray[0], //sets stroke color from array
                    strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                });
                volcanoAlertCircleMarkerArray[10].bindTo('center', volcanoMarkerArray[10], 'position'); //binds circle to location of marker
            }



            /* IF VOLCANO LEVEL IS 0 */

        }

            /* 10# Alert Level 0 [SHOW STANDARD ICON]*/
        else {
            volcanoMarkerArray[10] = new google.maps.Marker({
                //create marker
                map: mapObject,
                title: volcanoMarkerTitleArray[10],
                position: { lat: volcanoWarningLatArray[10], lng: volcanoWarningLngArray[10] },
                icon: disasterIconStandardArray[5],
            });

        }

/*10# ==========  WHITE ISLAND [END] ========== */

/* 11# ============  RUAPEHU ============ */

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

/* 11# =========== RUAPEHU [END] =========== */

   }
}
