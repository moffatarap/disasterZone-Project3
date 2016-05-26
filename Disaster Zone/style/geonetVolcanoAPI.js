/* Geonet Volcano API Disaster Zone MDDN352 P3 12.7 - [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetVolcano = "https://json.ey.nz/api.geonet.org.nz/volcano/val"; //saves geonet url as var " ./json/geoNetVolcanoVal.json"
var goenetVolcanoLocal = "./json/geoNetVolcanoVal.json";
var volTitleLength = 12; //sets array length
var volRadiusMulti = 10; //sets volcano alert radius to be multiplyed by this number original [5]
var volUIVar = "Volcano"; //sets volcano title for UI
var volAlertLevelText = "Alert Level "; //alert level var
var date = new Date(); //gets the date and time

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

//volcano inactvity
var volcanoInactiveArray = [

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

//Text content array
var textContentArray = [
];
/* 1.1# VOLCANO VARABLE ARRAY [END]*/

/* 2.0# ==- CSS VARABLE ARRAYS -== */

//2.1 ==- EVENT TYPE
var eventTypeArray = [
    "eventType0",//[0]
    "eventType1",//[1]
    "eventType2",//[2]
    "eventType3",//[3]
    "eventType4",//[4]
];

var eventLocation = [
    ,
    ,
    ,
    ,
    ,

];

/* 2.0# ==- CSS VARABLE ARRAYS [END]-== */

//document.getElementById("eventType").textContent = volUIVar;
////SET EVENT LOCATION
//document.getElementById("eventLocation").textContent = volcanoMarkerTitleArray[i];
////SET EVENT HAZARDS
//document.getElementById("eventRating").textContent = volAlertLevelText + volcanoLevelArray[i] + " " + volcanoActivityArray[i];
////SET LAST CHECKED EVENT
//document.getElementById("eventTime").textContent = date.toUTCString();

//window.onload = function () {
//    volJSON();
//}

// VOL JSON is called as a function in geolocationAPI
function volJSON() {
    $.getJSON(goenetVolcanoLocal, function (data) {
       $.each(data.features, function (i, vol) {
            //data id displayed in table row || this one is volcano title
            if (i < volTitleLength) {
                volcanoMarkerTitleArray[i] = vol.properties.volcanoTitle;
                volcanoLevelArray[i] = vol.properties.level;
                volcanoActivityArray[i] = vol.properties.activity;
                volcanoHazardsArray[i] = vol.properties.hazards;
                i++;
            }
            else {
                //doNothing
            }

        });

        /* DEBUGGING  
        console.log('#1');
        console.log(volcanoMarkerTitleArray); //display value of title array
        console.log('#2');
        console.log(volcanoLevelArray.toString()); //display value of level array
        console.log('#3');
        console.log(volcanoActivityArray); //display value of activity array
        console.log('#4');
        console.log(volcanoHazardsArray); //display value of hazard array */
        //[DEBUG DISPLAY]document.getElementById("errorCantFind").innerHTML = volcanoLevelArray[11];
        /* DEBUGGING [END] */
        volcanoMarkerCreateLoop(); //calls vol marker loop
    });

}

/* 2.0# PUSH ACTIVE VOLCANO DATA TO ARRAY */
function pushToArray() {
    //Add active volcano to array
    volActiveArray.push('Alert Level ' + volcanoLevelArray[i] + ' ' + volcanoMarkerTitleArray[i]);
    
    /*DEBUG Log Active Volcano
    console.log(volcanoMarkerTitleArray[i]);
    console.log(volActiveArray);  */
}
/* 2.0# PUSH ACTIVE VOLCANO DATA TO ARRAY [END] */

/* 2.1# BIND CIRCLE TO MIDDLE MARKER */
function bindCircle() {
    volcanoAlertCircleMarkerArray[i].bindTo('center', volcanoMarkerArray[i], 'position'); //binds circle to location of marker
}

/* 2.1# BIND CIRCLE TO MIDDLE MARKER [END]*/
var idCount = 0;
/* 2.1# ID FUNCTION */
function idFunction() {
    //if (i === )
    
    if (idCount < 1) {
        for (i2 = 0; i2 < volActiveArray.length; i2++){
    textContentArray[i] = document.createElement('div');
    $(textContentArray[i]).addClass("dummyEvent");
    textContentArray[i].innerHTML = '<img id="eventIcon" src="./media/img/mapKeys/event/weak/volcanoW.png"> <h4 id="eventType0"></h4><h6 id="eventLocation0"></h6><h6 id="eventRating0"></h6><h6 id="eventTime0"></h6><div id="gradientL"></div>';

    $(".eventsList").prepend(textContentArray[i]);
    console.log('create')
    /* 1.0# SET CONTENT */
    //SET EVENT TITLE
    document.getElementById(eventTypeArray[idCount]).textContent = volUIVar;
    //SET EVENT LOCATION
    document.getElementById("eventLocation0").textContent = volcanoMarkerTitleArray[i];
    //SET EVENT HAZARDS
    document.getElementById("eventRating0").textContent = volAlertLevelText + volcanoLevelArray[i] + " " + volcanoActivityArray[i];
    //SET LAST CHECKED EVENT
    document.getElementById("eventTime0").textContent = date.toUTCString();
    /*  1.0# SET CONTENT */
    console.log(idCount);
    
    console.log(idCount);
        }
    }
    idCount++;
}
/* 2.1# ID FUNCTION [END]*/


/* 2.3# ==-- VOLCANO MARKER LOOP --== */
function volcanoMarkerCreateLoop() {
        for (i = 0; i < volcanoMarkerArray.length; i++) {
            //Loop until i = the length of MarkerArray
            //console.log('markerCreate

            //VOL AlERT = 0 
            if (volcanoLevelArray[i] === 0) {
                volcanoInactiveArray.push(volcanoMarkerTitleArray[i]);
               // console.log(volcanoInactiveArray);

            }
            if (volcanoLevelArray[i] > 0) {
                //IF volcano alert level is larger than 0 make markers
               
                //VOL ALERT = 1
                if (volcanoLevelArray[i] === 1) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i] + ' Alert Level ' + volcanoLevelArray[i],
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

                    

                    /* 1# DISPLAY IN UI */
                    idFunction();
                    
                    //var textContent = document.createElement('div');
                    //$(textContent).addClass("dummyEvent");
                    //textContent.innerHTML = '<img id="eventIcon" src="./media/img/mapKeys/event/weak/volcanoW.png"> <h4 id="eventType"></h4><h6 id="eventLocation"></h6><h6 id="eventRating"></h6><h6 id="eventTime"></h6><div id="gradientL"></div>';
                    //$(".eventsList").append(textContent);

                    //textContentArray[i] = document.createElement('div');
                    //$(textContentArray[i]).addClass("dummyEvent");
                    //textContentArray[i].innerHTML = '<img id="eventIcon" src="./media/img/mapKeys/event/weak/volcanoW.png"> <h4 id="eventType0"></h4><h6 id="eventLocation0"></h6><h6 id="eventRating0"></h6><h6 id="eventTime0"></h6><div id="gradientL"></div>';

                    //$(".eventsList").prepend(textContentArray[i]);

                    ///* 1.0# SET CONTENT */
                    ////SET EVENT TITLE
                    //document.getElementById("eventType0").textContent = volUIVar;
                    ////SET EVENT LOCATION
                    //document.getElementById("eventLocation0").textContent = volcanoMarkerTitleArray[i];
                    ////SET EVENT HAZARDS
                    //document.getElementById("eventRating0").textContent = volAlertLevelText + volcanoLevelArray[i] + " " + volcanoActivityArray[i];
                    ////SET LAST CHECKED EVENT
                    //document.getElementById("eventTime0").textContent = date.toUTCString();
                    ///*  1.0# SET CONTENT */

                    /* BROKEN CODE
                    //textContent.append(".eventsList");
                    //document.querySelectorAll(".eventsList").appendChild(textContent);
                    //controlDiv.appendChild(textContent); */
                    /* DISPLAY IN UI [END] */
                    

                
                }
                    
                //VOL ALERT = 2
                if (volcanoLevelArray[i] === 2) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i] + ' Alert Level ' + volcanoLevelArray[i],
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

                    /* 2.0# DISPLAY IN UI 
                    textContentArray[i] = document.createElement('div');
                    $(textContentArray[i]).addClass("dummyEvent");
                    textContentArray[i].innerHTML = '<img id="eventIcon" src="./media/img/mapKeys/event/light/volcanoL.png"> <h4 id="eventType1"></h4><h6 id="eventLocation1"></h6><h6 id="eventRating1"></h6><h6 id="eventTime1"></h6><div id="gradientL"></div>';

                    $(".eventsList").prepend(textContentArray[i]);


                    /* 2.0# SET CONTENT 
                    //SET EVENT TITLE
                    document.getElementById("eventType1").textContent = volUIVar;
                    //SET EVENT LOCATION
                    document.getElementById("eventLocation1").textContent = volcanoMarkerTitleArray[i];
                    //SET EVENT HAZARDS
                    document.getElementById("eventRating1").textContent = volAlertLevelText + volcanoLevelArray[i] + " " + volcanoActivityArray[i];
                    //SET LAST CHECKED EVENT
                    document.getElementById("eventTime1").textContent = date.toUTCString();
                    /*  2.0# SET CONTENT */


                }

                //VOL ALERT = 3
                if (volcanoLevelArray[i] === 3) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i] + ' Alert Level ' + volcanoLevelArray[i],
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

                    /* 3.0# DISPLAY IN UI 
                    textContentArray[i] = document.createElement('div');
                    $(textContentArray[i]).addClass("dummyEvent");
                    textContentArray[i].innerHTML = '<img id="eventIcon" src="./media/img/mapKeys/event/light/volcanoL.png"> <h4 id="eventType2"></h4><h6 id="eventLocation2"></h6><h6 id="eventRating2"></h6><h6 id="eventTime2"></h6><div id="gradientL"></div>';

                    $(".eventsList").prepend(textContentArray[i]);


                    /* 3.0# SET CONTENT 
                    //SET EVENT TITLE
                    document.getElementById("eventType2").textContent = volUIVar;
                    //SET EVENT LOCATION
                    document.getElementById("eventLocation2").textContent = volcanoMarkerTitleArray[i];
                    //SET EVENT HAZARDS
                    document.getElementById("eventRating2").textContent = volAlertLevelText + volcanoLevelArray[i] + " " + volcanoActivityArray[i];
                    //SET LAST CHECKED EVENT
                    document.getElementById("eventTime2").textContent = date.toUTCString();
                    /*  3.0# SET CONTENT */

                    /* 3.0# DISPLAY IN UI [END]*/
                }

                //VOL ALERT = 4
                if (volcanoLevelArray[i] === 4) {
                    volcanoMarkerArray[i] = new google.maps.Marker({
                        //create marker
                        map: mapObject,
                        title: volcanoMarkerTitleArray[i] + ' Alert Level ' + volcanoLevelArray[i],
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
                        title: volcanoMarkerTitleArray[i] + ' Alert Level ' + volcanoLevelArray[i],
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

            /* VOL ALERT = 0 Display Normal Icon*/
            //if show inactive vol = 0 then show inactive volcanos
            if (showInactiveVol === 1){
                volcanoMarkerArray[i] = new google.maps.Marker({
                    //create marker
                    map: mapObject,
                    title: volcanoMarkerTitleArray[i] + ' Alert Level ' + volcanoLevelArray[i],
                    position: { lat: volcanoWarningLatArray[i], lng: volcanoWarningLngArray[i] },
                    icon: disasterIconStandardArray[5],
                }); 
                
                //DEBUG Log Active Volcano
                console.log(volcanoMarkerTitleArray[i]);
            }
                        
        }

    };

/* 2.3 # ==-- VOLCANO MARKER LOOP [END] --== */


