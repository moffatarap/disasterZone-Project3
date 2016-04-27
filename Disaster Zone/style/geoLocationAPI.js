/*=/ VARABLES \=*/
var mapMarker; //var for marker
var mapObject; //var for the google map
var userLatLng; //latLng of user
var accuracyDraw; //circle for measuring accuracy
var geocoder; //geocode to address
var mapLoad = 0; //sets mapLoad to [0]
var geoRefresh = 1; //sets geoRefresh function
var firebaseDB; //creates firebaseDB var
var latitude; //lat for warning system, based off userLatLng var
var longitude; //lng for warning system, based off userLatLng var


/* 1# = DISASTER WARNING LOCATION ARRAYS =*/
//location warning LAT 
var locWLatArray = [
    -40.9881, //[0] PAEKAKARIKI EARTHQUAKE
    -40.9858,//[1] 36c wellington road FIRE
    

];
//location warning LNG 
var locWLngArray = [
    174.9510,//[0] PAEKAKARIKI EARTHQUAKE
    174.9537,//[1] 36c wellington road FIRE
];
/* 1# = DISASTER LOCATION ARRAYS [END] =*/

/* 2# == DISASTER OFFSET ARRAY ==*/
var disasterOffsetArray = [
    0.0379,//[0] - LAT || 1 SEVERE
    0.0300,//[1] - LNG || 1 SEVERE
    ,//[2] - LAT ||  
    ,//[3] - LNG ||
    ,//[4] - LAT ||
    ,//[5] - LNG ||
    ,//[6] - LAT ||
    ,//[7] - LNG ||
    ,//[8] - LAT ||
    ,//[9] - LNG ||


];
/* 2# == DISASTER OFFSET ARRAY [END] ==*/

/*=/ VARABLES END \=*/

var mapOptions = {
    //MAP OPTIONS
    //zoom: 3, //sets zoom level
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



/* 1# == ON LOAD SET STYLE MAP AND STARTING LOCATION ==*/
window.onload = function () {
    geoLocateUser();
    console.log('windowOnLoad'); //debug
    //on first loop create map
    if (mapLoad === 1) {
        mapObject = new google.maps.Map(document.getElementById("googleAPI"), mapOptions);

        //firebase database
        firebaseDB = new Firebase("<https://disasterzone.firebaseio.com/>");
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
            
            //sets zoom level to fit location on screen
            mapObject.fitBounds(results[0].geometry.viewport);
        }
        else
            //if address cant be found show error code
            document.getElementById("errorCantFind").innerHTML = "No address found" + "<br />";
    });

    //set marker creation on load of map
    if (mapLoad === 1) {
        //create map marker
        console.log('mapMarkerSetPositonInital'); //debug
        mapMarker = new google.maps.Marker({
            map: mapObject,
            position: userLatLng,
        })

}
    //change marker position to new user LatLng
    else {
        console.log('mapMarkerSetPositon'); //debug
        mapMarker.setPosition(userLatLng); //mapMarker LatLng
        
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

/* 4.1# ====- BREAK USERLATLNG TO TWO VAIRABLES -==== */

/* 4.1# ====- BREAK USERLATLNG TO TWO VAIRABLES [END] -==== */

/* 5# ===== RE DRAW MARKER ===== */
function reDraw() {
    /*DISPLAY WARNING IF USER IS NEAR DISASTER */
    
    /* DEBUG SECTION */

    console.log('reDraw');//writes to debug redraw
    console.log(geoRefresh); //checks value of geoRefresh

    /* DEBUG SECTION END */

    //sets center of map*/
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

        /* 6.1# ======- PUSH DATA TO FIREBASE -====== */
        //savesUserLatLng to firebase
        firebaseDB.push({
            latLngUser: userLatLng.toString(), //latLng to db
            addressUser: document.getElementById("mapAddress").innerHTML, //formatted address to db from html
            geoLocateFail: document.getElementById("errorCantFind").innerHTML, //if fail save to db
           // alert: document.getElementById("errorCantFind").innerHTML, //if alert to disaster is found save to db
        });

        /* 6.2# ======-- BREAK USER LATLNG INTO LAT AND LNG --====== */
        //SET VAR
        latitude = userLatLng.lat(); //sets latitude to userLatLng lat value
        longitude = userLatLng.lng(); //sets lon to userLatLng lat value

        //ROUND VAR
        latitude = Math.round(latitude * 10000) / 10000; //round lat to 4 decimal places
        longitude = Math.round(longitude * 10000) / 10000; //round lng to 4 decimal places

        //DEBUG
        console.log(latitude);
        console.log(longitude);
        //DEBUG END

        /*BREAK USER LATLNG INTO LAT AND LNG [END] */
        
        /* 6.3# ======--- GEOLOCATION ALERTS ---====== */
        /* 1# = EARTHQUAKE [STATE HIGHWAY 355-359] = */
        //if (latitude === locWLatArray[0] && longitude === locWLngArray[0]) {
        //    document.getElementById("errorCantFind").innerHTML = "<p>Warning: Earthquake</p>" + "<br/>";
        //    console.log('ALERT: Earthquake'); //debug
        //}
        ///* 2# = FIRE [40 WELLINGTON RD] = */
        //else if (latitude === locWLatArray[1] && longitude === locWLngArray[1]) {
        //    document.getElementById("errorCantFind").innerHTML = "<p>Warning: Bushfire</p>" + "<br/>";
        //    console.log('ALERT: Fire'); //debug
        //}
        /* 6.3# ======--- GEOLOCATION ALERTS [END] ---====== */
        if (latitude <= locWLatArray[0] + 0.0379 && latitude >= locWLatArray[0] - 0.0379 && longitude <= locWLngArray[0] + 0.0300 && longitude >= locWLngArray[0] - 0.0300) {
            document.getElementById("errorCantFind").innerHTML = "<p>Warning: Earthquake</p>" + "<br/>";
            console.log('ALERT: Earthquake'); //debug
        };
        /* 6.3# ======--- GEOLOCATION ALERTS RE-DO ---====== */
        
        /* 6.3# ======--- GEOLOCATION ALERTS RE-DO [END] ---====== */
        geoRefresh = 2; //reset value to 2
        
    }
    //if geoRefresh var = > 10 then add 1 to geoRefresh 
    else {
        geoRefresh += 1;
        console.log('ALERT: None'); //debug
    }
    
    //geoLocateUser();

}, 3300); //33000

/* 6# ====== REFRESH MARKER LOCATION [END] ====== */
