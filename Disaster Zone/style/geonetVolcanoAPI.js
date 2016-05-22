/* Geonet Volcano API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetVolcano = "https://json.ey.nz/api.geonet.org.nz/volcano/val"; //saves geonet url as var "./json/geoNetVolcanoVal.json"
var volTitleLength = 12; //sets array length
var volRadiusMulti = 10; //sets volcano alert radius to be multiplyed by this number original [5]
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


//window.onload = function () {
//    volJSON();
//}

// VOL JSON is called as a function in geolocationAPI
function volJSON() {
   $.getJSON(geonetVolcano, function (data) {
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

        volcanoMarkerCreateLoop(); //calls vol marker loop
    });

}

/* 2.0# PUSH ACTIVE VOLCANO DATA TO ARRAY */
function pushToArray() {
    //Add active volcano to array
    volActiveArray.push('Alert Level ' + volcanoLevelArray[i] + ' ' + volcanoMarkerTitleArray[i]);

    //DEBUG Log Active Volcano
    console.log(volcanoMarkerTitleArray[i]);
    console.log(volActiveArray);
}
/* 2.0# PUSH ACTIVE VOLCANO DATA TO ARRAY [END] */

/* 2.1# BIND CIRCLE TO MIDDLE MARKER */
function bindCircle() {
    volcanoAlertCircleMarkerArray[i].bindTo('center', volcanoMarkerArray[i], 'position'); //binds circle to location of marker
}

/* 2.1# BIND CIRCLE TO MIDDLE MARKER [END]*/

/* 2.2# ==-- VOLCANO MARKER LOOP --== */
function volcanoMarkerCreateLoop() {
        for (i = 0; i < volcanoMarkerArray.length; i++) {
            //Loop until i = the length of MarkerArray
            console.log('markerCreate');

            if (volcanoLevelArray[i] > 0) {
                //IF volcano alert level is larger than 0 make markers

                //VOL ALERT = 1
                if (volcanoLevelArray[i] === 1) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i],
                        position: { lat: volcanoWarningLatArray[i], lng: volcanoWarningLngArray[i] },
                        icon: iconVolcanoArray[4],
                    });

                    pushToArray(); //pushes active volcanos to array

                    // circle alert create
                    volcanoAlertCircleMarkerArray[i] = new google.maps.Circle({
                        map: mapObject,
                        radius: alertCirlceRadiusArray[4] * volRadiusMulti, // sets alert radius from array 
                        fillColor: alertCircleColorArray[4], //sets color of fill from array
                        strokeColor: alertCircleColorArray[4], //sets stroke color from array
                        strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                    });

                    bindCircle(); //binds circle to marker
                
                }
                    
                    
                

                //VOL ALERT = 2
                if (volcanoLevelArray[i] === 2) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i],
                        position: { lat: volcanoWarningLatArray[i], lng: volcanoWarningLngArray[i] },
                        icon: iconVolcanoArray[3],
                    });

                    pushToArray(); //pushes active volcanos to array

                    // circle alert create
                    volcanoAlertCircleMarkerArray[i] = new google.maps.Circle({
                        map: mapObject,
                        radius: alertCirlceRadiusArray[3] * volRadiusMulti, // sets alert radius from array 
                        fillColor: alertCircleColorArray[3], //sets color of fill from array
                        strokeColor: alertCircleColorArray[3], //sets stroke color from array
                        strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                    });

                    bindCircle(); //binds circle to marker

                }

                //VOL ALERT = 3
                if (volcanoLevelArray[i] === 3) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i],
                        position: { lat: volcanoWarningLatArray[i], lng: volcanoWarningLngArray[i] },
                        icon: iconVolcanoArray[2],
                    });

                    pushToArray(); //pushes active volcanos to array

                    // circle alert create
                    volcanoAlertCircleMarkerArray[i] = new google.maps.Circle({
                        map: mapObject,
                        radius: alertCirlceRadiusArray[2] * volRadiusMulti, // sets alert radius from array 
                        fillColor: alertCircleColorArray[2], //sets color of fill from array
                        strokeColor: alertCircleColorArray[2], //sets stroke color from array
                        strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                    });

                    bindCircle(); //binds circle to marker
                }

                //VOL ALERT = 4
                if (volcanoLevelArray[i] === 4) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i],
                        position: { lat: volcanoWarningLatArray[i], lng: volcanoWarningLngArray[i] },
                        icon: iconVolcanoArray[1],
                    });

                    pushToArray(); //pushes active volcanos to array

                    // circle alert create
                    volcanoAlertCircleMarkerArray[i] = new google.maps.Circle({
                        map: mapObject,
                        radius: alertCirlceRadiusArray[1] * volRadiusMulti, // sets alert radius from array 
                        fillColor: alertCircleColorArray[1], //sets color of fill from array
                        strokeColor: alertCircleColorArray[1], //sets stroke color from array
                        strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                    });

                    bindCircle(); //binds circle to marker
                }

                //VOL ALERT = 5
                if (volcanoLevelArray[i] === 5) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i],
                        position: { lat: volcanoWarningLatArray[i], lng: volcanoWarningLngArray[i] },
                        icon: iconVolcanoArray[0],
                    });

                    pushToArray(); //pushes active volcanos to array

                    // circle alert create
                    volcanoAlertCircleMarkerArray[i] = new google.maps.Circle({
                        map: mapObject,
                        radius: alertCirlceRadiusArray[0] * volRadiusMulti, // sets alert radius from array 
                        fillColor: alertCircleColorArray[0], //sets color of fill from array
                        strokeColor: alertCircleColorArray[0], //sets stroke color from array
                        strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
                    });

                    bindCircle(); //binds circle to marker
                }

           }

            /* VOL ALERT = 0 Display Normal Icon
            else {
                volcanoMarkerArray[i] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[i],
                    position: { lat: volcanoWarningLatArray[i], lng: volcanoWarningLngArray[i] },
                    icon: disasterIconStandardArray[5],
                }); 
                
                //DEBUG Log Active Volcano
                console.log(volcanoMarkerTitleArray[i]);
            }*/
                        
        }

    };

/* 2.2 # ==-- VOLCANO MARKER LOOP [END] --== */


