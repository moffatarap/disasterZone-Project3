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


/* DISASTER LOCATION ARRAY */
//write location warnings array
var locationWarningArray = [
    //                     lat                 lng
    new google.maps.LatLng(-40.98590134003134, 174.95394012824352), //[0] 40 wellington rd
    new google.maps.LatLng(-40.980371999999996, 174.96758169999998), //[1] // 355-359 state highway paekak
    , //[2]

];

//var locatonWarningTest = new google.maps.LatLng(-40.980371999999996, 174.96758169999998);
                                                

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

/* 4.1# ====- BREAK USERLATLNG TO TWO VAIRABLES -====
var newMapCenter = mapObject.getCenter(); //getCenter
var latitude = newMapCenter.lat(); //lat
var longitude = newMapCenter.lng(); //lng  */
/* 4.1# ====- BREAK USERLATLNG TO TWO VAIRABLES [END] -==== */

/* 5# ===== RE DRAW MARKER ===== */
function reDraw() {
    var userLatLngToWarn = userLatLng;
    /*DISPLAY WARNING IF USER IS NEAR DISASTER 
    if (userLatLng === userLatLng) {
        document.getElementById("errorCantFind").innerHTML = "<p>Warning: Earthquake</p>" + "<br/>";

    } */
    console.log('reDraw');//writes to debug redraw
    //locationWarningArray[2] = userLatLng;

    /* DEBUG SECTION */

    //console.log(locationWarningArray[1]);
    //console.log(userLatLng);

    console.log(userLatLngToWarn); //checking value of function
    console.log(geoRefresh); //checks value of geoRefresh

    //NEW LATLNG
    //console.log(latitude);
    /* DEBUG SECTION END */

    latitude = userLatLng.lat();
    console.log(latitude);

    if (latitude === -40.980371999999996) {
        document.getElementById("errorCantFind").innerHTML = "<p>Warning: Earthquake</p>" + "<br/>";

    } 


    //sets center of map*/
    mapObject.setCenter(userLatLng)

}
/* 5# ===== RE DRAW MARKER [END] ===== */

/* 6# ====== REFRESH MARKER LOCATION ====== */
setInterval(function () {

    reDraw();
    /*GeoLocate User Every Second refresh*/
    //if geoRefresh var = 10, then run geolocation function and reset geoRefresh to 1
    if (geoRefresh === 10) {
        geoLocateUser();
        console.log('geoLocateUser'); //writes to debug geoLocateUser

        /* PUSH DATA TO FIREBASE */
        //savesUserLatLng to firebase
        firebaseDB.push({
            latLngUser: userLatLng.toString(), //latLng to db
            addressUser: document.getElementById("mapAddress").innerHTML, //formatted address to db from html
            geoLocateFail: document.getElementById("errorCantFind").innerHTML, //if fail save to db
        });

        geoRefresh = 1;
        
    }
    //if geoRefresh var = > 10 then add 1 to geoRefresh 
    else {
        geoRefresh += 1;

    }
    
    //geoLocateUser();

}, 3300); //33000

/* 6# ====== REFRESH MARKER LOCATION [END] ====== */
