/* Geolocation API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */

/*=/ VARABLES \=*/
var mapUserMarker; //var for marker
var mapObject; //var for the google map
var userLatLng; //latLng of user
var accuracyDraw; //circle for measuring accuracy
var geocoder; //geocode to address
var mapLoad = 0; //sets mapLoad to [0]
var geoRefresh = 1; //sets geoRefresh function
var latitude; //lat for warning system, based off userLatLng var
var longitude; //lng for warning system, based off userLatLng var
var fourDPR = 10000;  //sets rounding var
var alertCircleStrokeWeight = 2; //sets stroke weight for alert circle



/* 1# = DISASTER WARNING LOCATION ARRAYS =*/
//location warning LAT 
var disasterLocLatArray = [
    -40.9881, //[0] - LAT || PAEKAKARIKI EARTHQUAKE
    -40.9800, //[1] - LAT || PAEKAKARIKI FIRE CAMPBELL PARK
    -41.3000, //[2] - LAT || WELLINGTON FLOOD BASIN RESERVE
    -36.8485, //[3] - LAT || AUCKLAND HURRICANE
    -39.0556, //[4] - LAT || NEW PLYMOUTH TORNADO
    -41.2955, //[5] - LAT || WELLINGTON FIRE TE ARO 
];
//location warning LNG 
var disasterLocLngArray = [
    174.9510, //[0] - LNG || PAEKAKARIKI EARTHQUAKE
    174.9560, //[1] - LNG || PAEKAKARIKI FIRE CAMPBELL PARK
    174.7801, //[2] - LNG || WELLINGTON FLOOD BASIN RESERVE
    174.7633, //[3] - LNG || AUCKLAND HURRICANE
    174.0752, //[4] - LNG || NEW PLYMOUTH TORNADO
    174.7756, //[5] - LNG || WELLINGTON FIRE TE ARO 
];
/* 1# = DISASTER LOCATION ARRAYS [END] =*/

/* 1.1# VOLCANO WARNING LOCATION ARRAYS */
var volcanoWarningLatArray = [
    -39.2817,  //[0] - LAT || MOUNT RUAPEHU
    -37.5226,  //[1] - LAT || WHITE ISLAND
    -37.2862,  //[2] - LAT || MAYOR ISLAND
    -38.2267,  //[3] - LAT || OKATAINA AKA MOUNT TARAWERA
    -38.0800,  //[4] - LAT || ROTORUA AKA UTUHINA
    -36.8485,  //[5] - LAT || AUCKLAND VOLCANIC FIELD
    -39.2968,  //[6] - LAT || TARANAKI
    -39.1569,  //[7] - LAT || NAGAURUHOE
    -39.2727,  //[8] - LAT || TONGARIRO
    -38.4825,  //[9] - LAT || TAUPO
    -29.2667, //[10] - LAT || KERMADEC ISLANDS
];

var volcanoWarningLngArray = [
    175.5685,  //[0] - LNG || MOUNT RUAPEHU
    177.1797,  //[1] - LNG || WHITE ISLAND
    176.2514,  //[2] - LNG || MAYOR ISLAND
    176.5067,  //[3] - LNG || OKATAINA AKA MOUNT TARAWERA
    176.2700,  //[4] - LNG || ROTORUA AKA UTUHINA
    174.7633,  //[5] - LNG || AUCKLAND VOLCANIC FIELD
    174.0634,  //[6] - LNG || TARANAKI
    175.6321,  //[7] - LNG || NAGAURUHOE
    175.5802,  //[8] - LNG || TONGARIRO
    175.5428,  //[9] - LNG || TAUPO
    177.9167, //[10] - LNG || KERMADEC ISLANDS

];
/* 1.1# VOLCANO WARNING LOCATION ARRAYS [END]*/

/* 1.2# VOLCANO MARKER VAR ARRAY */
var volcanoMarkerArray = [
    , //[0]
    , //[1]
    , //[2]
    , //[3]
    , //[4]
    , //[5]
    , //[6]
    , //[7]
    , //[8]
    , //[9]
    , //[10]
];

/* 1.2# VOLCANO MARKER VAR ARRAY [END] */

/* 1.3# VOLCANO MARKER TITLE ARRAY */
var volcanoMarkerTitleArray = [
    'Mount Ruapehu',            //[0] MOUNT RUAPEHU
    'White Island',             //[1] WHITE ISLAND
    'Mayor Island',             //[2] MAYOR ISLAND
    'Mount Tarawera',           //[3] OKATAINA AKA MOUNT TARAWERA
    'Utuhina Caldera',          //[4] ROTORUA AKA UTUHINA
    'Auckland Volcanic Field',  //[5] AUCKLAND VOLCANIC FIELD
    'Mount Taranaki',           //[6] TARANAKI
    'Mount Ngauruhoe',          //[7] NAGAURUHOE
    'Mount Tongariro',          //[8] TONGARIRO
    'Taupo Caldera',            //[9] TAUPO
    'Kermadec Islands',        //[10] KERMADEC ISLANDS
];

/* 1.3# VOLCANO MARKER TITLE ARRAY [END]*/

/* 2# == DISASTER OFFSET ARRAY ==*/
//sets offset depending on severity of the disaster, this offset will alert users with in the defined range to a disaster
var disasterOffsetArray = [
    0.0379, //[0] - LAT || 1 SEVERE
    0.0300, //[1] - LNG || 1 SEVERE
    0.0279, //[2] - LAT || 2 Strong
    0.0200, //[3] - LNG || 2 Strong
    0.0179, //[4] - LAT || 3 Moderate
    0.0100, //[5] - LNG || 3 Moderate
    0.0089, //[6] - LAT || 4 Light
    0.0050, //[7] - LNG || 4 Light
    0.0044, //[8] - LAT || 5 Weak
    0.0025, //[9] - LNG || 5 Weak
];

/* 2# == DISASTER OFFSET ARRAY [END] ==*/

/* 3# === DISASTER MARKER ARRAY === */
var disasterMarkerAY = [
    ,//[0] - EARTHQUAKE
    ,//[1] - FIRE
    ,//[2] - FLOOD
    ,//[3] - HURRICANE
    ,//[4] - TORNADO
    ,//[5] - FIRE TE ARO
];
/* 3# === DISASTER MARKER ARRAY [END] === */

/* 3.1# ===- DISASTER MARKER TITLE ARRAY -=== */
//stores titles for each event in an array
var disasterMarkerTitleArray = [
    'Earthquake Paekakariki [SEVERE]',//[0] - EARTHQUAKE PAEK
    'Fire Paekakariki [MODERATE]',//[1] - FIRE PAEK
    'Flood Wellington [LIGHT]',//[2] - FLOOD WELL
    'Hurricane Wellington [STRONG]',//[3] - HURRICANE WELL
    'Tornado Wellington [WEAK]',//[4] - TORNADO WELL
    'Fire Wellington [WEAK]',//[5] - FIRE TE ARO WELL

];
/* 3.1# ===- DISASTER MARKER TITLE ARRAY [END] -=== */

/* 4# ==== DISASTER ICON ARRAY ==== */
var iconArray = [
    // 4.0 EARTHQUAKE, Flood , Hurricane, Tornado , Fire , Volcano
    //Severe Strong Moderate Light Weak
    './media/img/mapKeys/event/severe/earthquakeS.png',    //[0] SEVERE 
    './media/img/mapKeys/event/strong/earthquakeST.png',   //[1] STRONG
    './media/img/mapKeys/event/moderate/earthquakeM.png',  //[2] MODERATE
    './media/img/mapKeys/event/light/earthquakeL.png',     //[3] LIGHT
    './media/img/mapKeys/event/weak/earthquakeW.png',      //[4]  WEAK
    // 4.1 = FLOOD flood =
    './media/img/mapKeys/event/severe/floodS.png',         //[5] SEVERE 
    './media/img/mapKeys/event/strong/floodST.png',        //[6] STRONG
    './media/img/mapKeys/event/moderate/floodM.png',       //[7] MODERATE
    './media/img/mapKeys/event/light/floodL.png',          //[8] LIGHT
    './media/img/mapKeys/event/weak/floodW.png',           //[9]  WEAK
    // 4.2 == HURRICANE ==
    './media/img/mapKeys/event/severe/hurricaneS.png',    //[10] SEVERE 
    './media/img/mapKeys/event/strong/hurricaneST.png',   //[11] STRONG
    './media/img/mapKeys/event/moderate/hurricaneM.png',  //[12] MODERATE
    './media/img/mapKeys/event/light/hurricaneL.png',     //[13] LIGHT
    './media/img/mapKeys/event/weak/hurricaneW.png',      //[14]  WEAK
    // 4.3 === TORNADO ===
    './media/img/mapKeys/event/severe/tornadoS.png',      //[15] SEVERE 
    './media/img/mapKeys/event/strong/tornadoST.png',     //[16] STRONG
    './media/img/mapKeys/event/moderate/tornadoM.png',    //[17] MODERATE
    './media/img/mapKeys/event/light/tornadoL.png',       //[18] LIGHT
    './media/img/mapKeys/event/weak/tornadoW.png',        //[19]  WEAK
    // 4.4 ==== FIRE ====
    './media/img/mapKeys/event/severe/fireS.png',         //[20] SEVERE 
    './media/img/mapKeys/event/strong/fireST.png',        //[21] STRONG
    './media/img/mapKeys/event/moderate/fireM.png',       //[22] MODERATE
    './media/img/mapKeys/event/light/fireL.png',          //[23] LIGHT
    './media/img/mapKeys/event/weak/fireW.png',           //[24]  WEAK
    // 4.5 ===== VOLCANO =====
    './media/img/mapKeys/event/severe/volcanoS.png',      //[25] SEVERE 
    './media/img/mapKeys/event/strong/volcanoST.png',     //[26] STRONG
    './media/img/mapKeys/event/moderate/volcanoM.png',    //[27] MODERATE
    './media/img/mapKeys/event/light/volcanoL.png',       //[28] LIGHT
    './media/img/mapKeys/event/weak/volcanoW.png',        //[29] WEAK
];
var iconVolcanoArray = [
    // 4.5 ===== VOLCANO =====
    './media/img/mapKeys/event/severe/volcanoS.png',      //[0] SEVERE 
    './media/img/mapKeys/event/strong/volcanoST.png',     //[1] STRONG
    './media/img/mapKeys/event/moderate/volcanoM.png',    //[2] MODERATE
    './media/img/mapKeys/event/light/volcanoL.png',       //[3] LIGHT
    './media/img/mapKeys/event/weak/volcanoW.png',        //[4] WEAK
];
/* 4# ==== DISASTER ICON ARRAY [END] ==== */

/* 4.1# ==== DISASTER ICON STANDARD ARRAY ==== */
var disasterIconStandardArray = [
    './media/img/mapKeys/key/earthquake.png', //[0] EARTHQUAKE
    './media/img/mapKeys/key/fire.png',       //[1] FIRE
    './media/img/mapKeys/key/flood.png',      //[2] FLOOD
    './media/img/mapKeys/key/hurricane.png',  //[3] HURRICANE
    './media/img/mapKeys/key/tornado.png',    //[4] TORNADO
    './media/img/mapKeys/key/volcano.png',    //[5] VOLCANO


];

/* 4.1# ==== DISASTER ICON STANDARD ARRAY [END] ==== */

/* #5.0 ===== CIRCLE ARRAY =====*/
//stores circles in array
var alertCircleMarkerArray = [
    ,//[0] - EARTHQUAKE
    ,//[1] - FIRE
    ,//[2] - FLOOD
    ,//[3] - HURRICANE
    ,//[4] - TORNADO
    ,//[5] - FIRE TE ARO
];

/* 5# ===== ALERT CIRCLE ARRAY [END] =====*/
//sets radius for each disaster type meters to km 1km = 1000 meters
var alertCirlceRadiusArray = [
    50000,//[0] SEVERE   || 50km
    40000,//[1] STRONG   || 40km
    20000,//[2] MODERATE || 20km
    5000,//[3] LIGHT     || 5km
    1500,//[4] WEAK      || 1.5km
];

/* 5# ===== ALERT CIRCLE ARRAY END =====*/

/* 6# ====== ALERT CIRCLE COLORS ARRAY ======*/
var alertCircleColorArray = [
    '#e52419',//[0] SEVERE 
    '#f68824',//[1] STRONG
    '#f2c92d',//[2] MODERATE
    '#31c95c',//[3] LIGHT
    '#4ecbf2',//[4]  WEAK

];

/* 6# ====== ALERT CIRCLE COLORS ARRAY [END] ======*/

/* 7# ======= ALERT CIRCLE RADUIS ARRAY =======*/

/* 7# ======= ALERT CIRCLE RADUIS [END] =======*/

/*=/ VARABLES END \=*/

var mapOptions = {
    //MAP OPTIONS
    zoom: 10, //sets zoom level
    draggable: true, //disable drag
    zoomControl: true, //disable or enable zoom
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    disableDoubleClickZoom: true, //disables zoom
    scrollwheel: false, //disables scroll wheel
    disableDefaultUI: true, //disables UI
    center: userLatLng, //center map

    /* STYLE SETTINGS */
    styles: [{
        //WATER
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#183052"
        }]
    }, {
        //LANDSCAPE
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#378048"
        }]
    }, {
        //ROAD
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "color": "#f9f9f9"
        }, {
            "lightness": -37
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#49717f"
        }]
    }, {
        //TEXT ELEMENTS STROKE
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#201c1b"
        }, {
            "weight": 2
        }, {
            "gamma": 0.84
        }]
    }, {
        //TEXT ELEMENTS FILL
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#f9f9f9"
        }]
    }, {
        //SECTORS
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
            "weight": 0.6
        }, {
            "color": "#ae00ff"
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        //PARKS
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#2d632b"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
    }],
    /* STYLE SETTINGS */

};

/* 0# == VOLCANO JSON READ == */




/* 0 == VOLCANO JSON READ [END]== */


/* 1# == ON LOAD SET STYLE MAP AND STARTING LOCATION ==*/
window.onload = function () {
    console.log('windowOnLoad'); //debug
    geoLocateUser();
    volJSON(); //Loads JSON Data volcanos geonet

    //on first loop create map
    if (mapLoad === 1) {
        /* = 1# GOOGLE MAP CREATE = */
        mapObject = new google.maps.Map(document.getElementById("googleAPI"), mapOptions);

        /*====== 2# DISASTER MARKER CREATION AND ALERT CIRCLE ======*/

        /* 1.0# = EARTHQUAKE [SEVERE] = */
        disasterMarkerAY[0] = new google.maps.Marker({
            map: mapObject,
            title: disasterMarkerTitleArray[0],
            position: { lat: disasterLocLatArray[0], lng: disasterLocLngArray[0] }, //PAEKAKARIKI
            icon: iconArray[0],
        });

        // 1.0# ALERT CIRCLE MARKER
        alertCircleMarkerArray[0] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[0], // sets alert radius from array 
            fillColor: alertCircleColorArray[0], //sets color of fill from array
            strokeColor: alertCircleColorArray[0], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        alertCircleMarkerArray[0].bindTo('center', disasterMarkerAY[0], 'position'); //binds circle to location of marker

        /* 1.1# == FIRE [MODERATE] ==*/
        disasterMarkerAY[1] = new google.maps.Marker({
            map: mapObject,
            title: disasterMarkerTitleArray[1],
            position: { lat: disasterLocLatArray[1], lng: disasterLocLngArray[1] }, //PAEKAKARIKI
            icon: iconArray[22],
        });

        // 1.1# ALERT CIRCLE MARKER
        alertCircleMarkerArray[1] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[2], // sets alert radius from array 
            fillColor: alertCircleColorArray[2], //sets color of fill from array
            strokeColor: alertCircleColorArray[2], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        alertCircleMarkerArray[1].bindTo('center', disasterMarkerAY[1], 'position'); //binds circle to location of marker

        /* 1.2# == FLOOD [LIGHT] ==*/
        disasterMarkerAY[2] = new google.maps.Marker({
            map: mapObject,
            title: disasterMarkerTitleArray[2],
            position: { lat: disasterLocLatArray[2], lng: disasterLocLngArray[2] }, //WELLINGTON
            icon: iconArray[8],

        });

        // 1.2# ALERT CIRCLE MARKER
        alertCircleMarkerArray[2] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[3], // sets alert radius from array 
            fillColor: alertCircleColorArray[3], //sets color of fill from array
            strokeColor: alertCircleColorArray[3], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        alertCircleMarkerArray[2].bindTo('center', disasterMarkerAY[2], 'position'); //binds circle to location of marker

        /* 1.3# ===  HURRICANE [STRONG] ===*/
        disasterMarkerAY[3] = new google.maps.Marker({
            map: mapObject,
            title: disasterMarkerTitleArray[3],
            position: { lat: disasterLocLatArray[3], lng: disasterLocLngArray[3] }, //WELLINGTON
            icon: iconArray[11],
        });

        // 1.3# ALERT CIRCLE MARKER
        alertCircleMarkerArray[3] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[1], // sets alert radius from array 
            fillColor: alertCircleColorArray[1], //sets color of fill from array
            strokeColor: alertCircleColorArray[1], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        alertCircleMarkerArray[3].bindTo('center', disasterMarkerAY[3], 'position'); //binds circle to location of marker


        /* 1.4# ==== TORNADO [WEAK] ====*/
        disasterMarkerAY[4] = new google.maps.Marker({
            map: mapObject,
            title: disasterMarkerTitleArray[4],
            position: { lat: disasterLocLatArray[4], lng: disasterLocLngArray[4] }, //WELLINGTON
            icon: iconArray[19],
        });

        // 1.4# ALERT CIRCLE MARKER
        alertCircleMarkerArray[4] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[4], // sets alert radius from array 
            fillColor: alertCircleColorArray[4], //sets color of fill from array
            strokeColor: alertCircleColorArray[4], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        alertCircleMarkerArray[4].bindTo('center', disasterMarkerAY[4], 'position'); //binds circle to location of marker

        /* 1.5# ===== FIRE TE ARO [WEAK] =====*/
        disasterMarkerAY[5] = new google.maps.Marker({
            map: mapObject,
            title: disasterMarkerTitleArray[5],
            position: { lat: disasterLocLatArray[5], lng: disasterLocLngArray[5] }, //WELLINGTON
            icon: iconArray[24],
        });

        // 1.5# ALERT CIRCLE MARKER
        alertCircleMarkerArray[5] = new google.maps.Circle({
            map: mapObject,
            radius: alertCirlceRadiusArray[4], // sets alert radius from array 
            fillColor: alertCircleColorArray[4], //sets color of fill from array
            strokeColor: alertCircleColorArray[4], //sets stroke color from array
            strokeWeight: alertCircleStrokeWeight, //sets stroke weight from var
        });

        alertCircleMarkerArray[5].bindTo('center', disasterMarkerAY[5], 'position'); //binds circle to location of marker

        /*====== 2# DISASTER MARKER CREATION [END] ======*/

        /* 3# === VOLCANO MARKERS CREATE === */
        //NEEDS WORK
        var test = 0;
        var test2 = 2;
        var volcanoLevel2Array = [];
        volcanoLevel2Array = volcanoLevelArray;
        //3.0 MOUNT RUAPEHU 
        if (volcanoLevel2Array[11] > test) {
            volcanoMarkerArray[0] = new google.maps.Marker({
                map: mapObject,
                title: volcanoMarkerTitleArray[0],
                position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                icon: iconVolcanoArray[0],
            });
        }

        else {
            volcanoMarkerArray[0] = new google.maps.Marker({
                map: mapObject,
                title: volcanoMarkerTitleArray[0],
                position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
                icon: disasterIconStandardArray[5],
            });

        }
        /* TEMP DISABLED
        //3.0 MOUNT RUAPEHU 
        volcanoMarkerArray[0] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[0],
            position: { lat: volcanoWarningLatArray[0], lng: volcanoWarningLngArray[0] },
            icon: disasterIconStandardArray[5],
        });
        

        //3.1 WHITE ISLAND
        volcanoMarkerArray[1] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[1],
            position: { lat: volcanoWarningLatArray[1], lng: volcanoWarningLngArray[1] },
            icon: disasterIconStandardArray[5],
        });

        //3.2 MAYOR ISLAND
        volcanoMarkerArray[2] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[2],
            position: { lat: volcanoWarningLatArray[2], lng: volcanoWarningLngArray[2] },
            icon: disasterIconStandardArray[5],
        });

        //3.3 OKATAINA AKA MOUNT TARAWERA
        volcanoMarkerArray[3] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[3],
            position: { lat: volcanoWarningLatArray[3], lng: volcanoWarningLngArray[3] },
            icon: disasterIconStandardArray[5],
        });

        //3.4 ROTORUA AKA UTUHINA
        volcanoMarkerArray[4] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[4],
            position: { lat: volcanoWarningLatArray[4], lng: volcanoWarningLngArray[4] },
            icon: disasterIconStandardArray[5],
        });

        //3.5 AUCKLAND VOLCANIC FIELD
        volcanoMarkerArray[5] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[5],
            position: { lat: volcanoWarningLatArray[5], lng: volcanoWarningLngArray[5] },
            icon: disasterIconStandardArray[5],
        });


        //3.6 TARANAKI
        volcanoMarkerArray[6] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[6],
            position: { lat: volcanoWarningLatArray[6], lng: volcanoWarningLngArray[6] },
            icon: disasterIconStandardArray[5],
        });

        //3.7 NAGAURUHOE
        volcanoMarkerArray[7] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[7],
            position: { lat: volcanoWarningLatArray[7], lng: volcanoWarningLngArray[7] },
            icon: disasterIconStandardArray[5],
        });

        //3.8 TONGARIRO
        volcanoMarkerArray[8] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[8],
            position: { lat: volcanoWarningLatArray[8], lng: volcanoWarningLngArray[8] },
            icon: disasterIconStandardArray[5],
        });


        //3.9 TAUPO
        volcanoMarkerArray[9] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[9],
            position: { lat: volcanoWarningLatArray[9], lng: volcanoWarningLngArray[9] },
            icon: disasterIconStandardArray[5],
        });


        //3.10 KERMADEC ISLANDS
        volcanoMarkerArray[10] = new google.maps.Marker({
            map: mapObject,
            title: volcanoMarkerTitleArray[10],
            position: { lat: volcanoWarningLatArray[10], lng: volcanoWarningLngArray[10] },
            icon: disasterIconStandardArray[5],
        });

        */


        /* 3# === VOLCANO MARKERS CREATE [END] === */

        /* 4# === DISASTER ALERT UI ELEMENTS === */

        /* 4# === DISASTER ALERT UI ELEMENTS === */


    }


}

/* 1# = ON LOAD SET STYLE MAP AND STARTING LOCATION [END] =*/
/* 1.1# =- PUBNUB REALTIME STORE INFO -= */
function pubs() {
    pubnub = PUBNUB.init({
        publish_key: 'pub-c-afe941da-29b9-4d8c-a2a5-b79cd7aa797b',
        subscribe_key: 'sub-c-189f8734-04e1-11e6-a6dc-02ee2ddab7fe'
    })

    pubnub.subscribe({
        channel: "myMap",
        message: function (message, channel) {
            console.log(message)
            latLng = message['LatLng'];
        },

    })
}
/* 1.1# =- PUBNUB REALTIME STORE INFO -= */

/* 1.2# =-- CONVERT LatLng TO ADDRESS --= */
function writeAddressName(latLng) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        "location": latLng
    },
    function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            console.log('geoLocationOK'); //debug
            //formatted address from latLng
            document.getElementById("mapAddress").innerHTML = results[0].formatted_address + "<br/>";
            //+= for debugging, to show all addresses = to just show one address at a time

        }

        else
            //if address cant be found show error code
            document.getElementById("errorCantFind").innerHTML = "No address found" + "<br />";
    });

    //set marker creation on load of map
    if (mapLoad === 1) {
        //create map marker
        console.log('mapMarkerSetPositonInital'); //debug
        mapUserMarker = new google.maps.Marker({
            map: mapObject,
            position: userLatLng,
        })

    }
        //change marker position to new user LatLng
    else {
        console.log('mapMarkerSetPositon'); //debug
        mapUserMarker.setPosition(userLatLng); //mapUserMarker LatLng

    }
    /* [accuracyDraw DISABLED]   mapObject.fitBounds(accuracyDraw.getBounds()); */
}
/* 1.2# =-- CONVERT LatLng TO ADDRESS --= */

/* 2# == GEO LOCATE USER == */
function geoLocateUser() {
    //loadPubNub Realtime GEOLOCATION API FUNCTION
    pubs();
    //add 1 to mapLoad varable
    mapLoad += 1;

    // If the browser supports the Geolocation API
    if (navigator.geolocation) {
        console.log('geoLocateUser'); //debug
        var positionOptions = {
            enableHighAccuracy: true, //accuracy 
            timeout: 10 * 2000 // 10 seconds

        };
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);

    }
    else {
        console.log('doesNotSupport'); //debug
        document.getElementById("errorCantFind").innerHTML = "<p>Your browser doesn't support location</p>";
    }

}
/* 2# == GEO LOCATE USER END ==*/

/* 3# === SUCCESS LOCATION OF USER === */
function geolocationSuccess(position) {
    userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    console.log('mapPositionSucess'); //debug
    // Write the formatted address
    writeAddressName(userLatLng);
    center: userLatLng; //centers map position to that of user latLng

}

/* 3# === SUCCESS LOCATION OF USER [END] ===*/

/* 4# ====  GEO LOCATION ERROR ==== */
function geolocationError(positionError) {
    document.getElementById("errorCantFind").innerHTML = "Error: " + positionError.message + "<br />";
}
/* 4# ====  GEO LOCATION ERROR [END]==== */

/* 5# ===== RE DRAW MARKER ===== */
function reDraw() {
    /*DISPLAY WARNING IF USER IS NEAR DISASTER */

    /* DEBUG SECTION */

    console.log('reDraw');//writes to debug redraw
    console.log(geoRefresh); //checks value of geoRefresh

    /* DEBUG SECTION END */

    /* sets center of map [DISABED]*/
    mapObject.setCenter(userLatLng)

}
/* 5# ===== RE DRAW MARKER [END] ===== */

/* 6# ====== REFRESH MARKER LOCATION ====== */
setInterval(function () {

    reDraw();
    /* 6.0# ====== GeoLocate User Every Second refresh ======*/
    //if geoRefresh var = 10, then run geolocation function and reset geoRefresh to 1
    if (geoRefresh === 10) {
        geoLocateUser();
        console.log('geoLocateUser'); //writes to debug geoLocateUser

        
        
        /* 6.1# ======- PUSH DATA TO FIREBASE -====== [DISABLED]*/
         
        firebaseAPI(); //firebase function call from firebaseAPI scrypt

        /* 6.2# ======-- BREAK USER LATLNG INTO LAT AND LNG --====== */
        //SET VAR
        latitude = userLatLng.lat(); //sets latitude to userLatLng lat value
        longitude = userLatLng.lng(); //sets lon to userLatLng lat value

        //ROUND VAR
        latitude = Math.round(latitude * fourDPR) / fourDPR; //round lat to 4 decimal places
        longitude = Math.round(longitude * fourDPR) / fourDPR; //round lng to 4 decimal places

        //DEBUG
        console.log(latitude);
        console.log(longitude);
        //DEBUG END

        /*BREAK USER LATLNG INTO LAT AND LNG [END] */

        /* 6.3# ======--- GEOLOCATION ALERTS ---====== [DISABLED] */
        //Displays alert if user is within a defined radius of event, the event radius is dependent on the severity of the event.

        //0# - EARTHQUAKE PAEKAKARIKI || SEVERE
        if (latitude <= disasterLocLatArray[0] + disasterOffsetArray[0] && latitude >= disasterLocLatArray[0] - disasterOffsetArray[0] && longitude <= disasterLocLngArray[0] + disasterOffsetArray[1] && longitude >= disasterLocLngArray[0] - disasterOffsetArray[1]) {
            //TEXT CONTENT
            document.getElementById("disasterAlert0").textContent = "EARTHQUAKE";
            document.getElementById("disasterAlertValue0").textContent = "6.3";

            //CSS
            $("#disasterAlert0").css({ "visibility": "visible" }); //makes div visible
            $("#disasterAlertSeverity0").css({ "background-color": "#f8522c" }); //sets bg color to that of severity of event
            console.log('ALERT: Earthquake'); //debug

        }

        //0# - EARTHQUAKE PAEKAKARIKI || SEVERE 
        else {
            //TEXT CONTENT
            document.getElementById("disasterAlert0").textContent = "";
            document.getElementById("disasterAlertValue0").textContent = "";

            //CSS
            $("#disasterAlert0").css({ "visibility": "hidden" }); //makes div visible
            $("#disasterAlertSeverity0").css({ "visibility": "hidden" }); //sets bg color to that of severity of event
            console.log('ALERT: Earthquake RESET'); //debug

        };


        //1# - FIRE PAEKAKARIKI || MODERATE
        if  (latitude <= disasterLocLatArray[1] + disasterOffsetArray[4] && latitude >= disasterLocLatArray[1] - disasterOffsetArray[4] && longitude <= disasterLocLngArray[1] + disasterOffsetArray[5] && longitude >= disasterLocLngArray[1] - disasterOffsetArray[5]) {
            //TEXT CONTENT
            document.getElementById("disasterAlert1").textContent = "FIRE";
            document.getElementById("disasterAlertValue1").textContent = "25";

            //CSS
            $("#disasterAlert1").css({ "visibility": "visible" }); //makes div visible
            $("#disasterAlertSeverity1").css({ "background-color": "#f8f72d" }); //sets bg color to that of severity of event
            console.log('ALERT: FIRE'); //debug
        }

        //1# - FIRE PAEKAKARIKI || MODERATE
        else {
            //TEXT CONTENT
            document.getElementById("disasterAlert1").textContent = "";
            document.getElementById("disasterAlertValue1").textContent = "";

            //CSS
            $("#disasterAlert1").css({ "visibility": "hidden" }); //makes div visible
            $("#disasterAlertSeverity1").css({ "visibility": "hidden" }); //sets bg color to that of severity of event
            console.log('ALERT: FIRE RESET'); //debug

        };

        //2# - FLOOD WELLINGTON || LIGHT
        if (latitude <= disasterLocLatArray[2] + disasterOffsetArray[6] && latitude >= disasterLocLatArray[2] - disasterOffsetArray[6] && longitude <= disasterLocLngArray[2] + disasterOffsetArray[7] && longitude >= disasterLocLngArray[2] - disasterOffsetArray[7]) {
            //TEXT CONTENT
            document.getElementById("disasterAlert2").textContent = "FLOOD";
            document.getElementById("disasterAlertValue2").textContent = "2.20m";

            //CSS
            $("#disasterAlert2").css({ "visibility": "visible" }); //makes div visible
            $("#disasterAlertSeverity2").css({ "background-color": "#20a276" }); //sets bg color to that of severity of event
            console.log('ALERT: FLOOD'); //debug
        }

        //2# - FLOOD WELLINGTON || LIGHT
        else {
        //TEXT CONTENT
        document.getElementById("disasterAlert2").textContent = "";
        document.getElementById("disasterAlertValue2").textContent = "";

        //CSS
        $("#disasterAlert2").css({ "visibility": "hidden" }); //makes div visible
        $("#disasterAlertSeverity2").css({ "visibility": "hidden" }); //sets bg color to that of severity of event
        console.log('ALERT: FLOOD RESET'); //debug

    };

        //3# - HURRICANE WELLINGTON || STRONG
        if (latitude <= disasterLocLatArray[3] + disasterOffsetArray[2] && latitude >= disasterLocLatArray[3] - disasterOffsetArray[2] && longitude <= disasterLocLngArray[3] + disasterOffsetArray[3] && longitude >= disasterLocLngArray[3] - disasterOffsetArray[3]) {
            //TEXT CONTENT
            document.getElementById("disasterAlert3").textContent = "HURRICANE";
            document.getElementById("disasterAlertValue3").textContent = "210 KPH";

            //CSS
            $("#disasterAlert3").css({ "visibility": "visible" }); //makes div visible
            $("#disasterAlertSeverity3").css({ "background-color": "#f8b22c" }); //sets bg color to that of severity of event
            console.log('ALERT: HURRICANE'); //debug
        }

        //3# - HURRICANE WELLINGTON || STRONG
        else {
            //TEXT CONTENT
            document.getElementById("disasterAlert3").textContent = "";
            document.getElementById("disasterAlertValue3").textContent = "";

            //CSS
            $("#disasterAlert3").css({ "visibility": "hidden" }); //makes div visible
            $("#disasterAlertSeverity3").css({ "visibility": "hidden" }); //sets bg color to that of severity of event
            console.log('ALERT: HURRICANE RESET'); //debug

        };

        //4# - TORNADO WELLINGTON || WEAK
        if (latitude <= disasterLocLatArray[4] + disasterOffsetArray[8] && latitude >= disasterLocLatArray[4] - disasterOffsetArray[8] && longitude <= disasterLocLngArray[4] + disasterOffsetArray[9] && longitude >= disasterLocLngArray[4] - disasterOffsetArray[9]) {
            //TEXT CONTENT
            document.getElementById("disasterAlert4").textContent = "TORNADO";
            document.getElementById("disasterAlertValue4").textContent = "104 KPH";

            //CSS
            $("#disasterAlert4").css({ "visibility": "visible" }); //makes div visible
            $("#disasterAlertSeverity4").css({ "background-color": "#34e6f2" }); //sets bg color to that of severity of event
            console.log('ALERT: TORNADO'); //debug
        }

        //4# - TORNADO WELLINGTON || WEAK
        else {
            //TEXT CONTENT
            document.getElementById("disasterAlert4").textContent = "";
            document.getElementById("disasterAlertValue4").textContent = "";

            //CSS
            $("#disasterAlert4").css({ "visibility": "hidden" }); //makes div visible
            $("#disasterAlertSeverity4").css({ "visibility": "hidden" }); //sets bg color to that of severity of event
            console.log('ALERT: TORNADO RESET'); //debug

        };



        //5# - FIRE WELLINGTON TE ARO || WEAK
        if (latitude <= disasterLocLatArray[5] + disasterOffsetArray[6] && latitude >= disasterLocLatArray[5] - disasterOffsetArray[6] && longitude <= disasterLocLngArray[5] + disasterOffsetArray[7] && longitude >= disasterLocLngArray[5] - disasterOffsetArray[7]) {
            //TEXT CONTENT
            document.getElementById("disasterAlert5").textContent = "FIRE";
            document.getElementById("disasterAlertValue5").textContent = "9";

            //CSS
            $("#disasterAlert5").css({ "visibility": "visible" }); //makes div visible
            $("#disasterAlertSeverity5").css({ "background-color": "#34e6f2" }); //sets bg color to that of severity of event
            console.log('ALERT: FIRE'); //debug
        }

        //5# - FIRE WELLINGTON TE ARO || WEAK
        else {
            //TEXT CONTENT
            document.getElementById("disasterAlert5").textContent = "";
            document.getElementById("disasterAlertValue5").textContent = "";

            //CSS
            $("#disasterAlert5").css({ "visibility": "hidden" }); //makes div visible
            $("#disasterAlertSeverity5").css({ "visibility": "hidden" }); //sets bg color to that of severity of event
            console.log('ALERT: FIRE RESET'); //debug

        };



        /* 6.3# ======--- GEOLOCATION ALERTS [END] ---====== */

        /* 6.3# ======--- GEOLOCATION ALERTS v2 ---====== [DISABLED]
        //Trying using radius of circle to alert to events works on draggable marker 
        var dragable_marker = new google.maps.Marker({
            position: new google.maps.LatLng(-33.868625, 151.210274),
            map: mapObject,
            draggable: true
        });

        google.maps.event.addListener(dragable_marker, 'dragend', function (e) {
            alert(alertCircleMarkerArray[0].getBounds().contains(dragable_marker.getPosition()));
        }); 

        /* 6.3# ======--- GEOLOCATION ALERTS v2 [END] ---====== */

        geoRefresh = 2; //reset value to 2

    }
        //if geoRefresh var = > 10 then add 1 to geoRefresh 
    else {
        geoRefresh += 1;
        console.log('ALERT: None'); //debug

        /* IF NO DISASTERS ALERTS SET ALL TO NONE */

    }

    //geoLocateUser();

}, 3300); //33000

/* 6# ====== REFRESH MARKER LOCATION [END] ====== */
