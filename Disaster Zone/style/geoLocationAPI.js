/*=/ VARABLES \=*/
var mapMarker; //var for marker
var mapObject; //var for the google map
var userLatLng; //latLng of user
var accuracyDraw; //circle for measuring accuracy
var geocoder; //geocode to address
var mapLoad = 0; //sets mapLoad to [0]
var geoRefresh = 1; //sets geoRefresh function
var firebaseDB; //creates firebaseDB var
/* SET VARABLE NUMBERE */


/* LOCATION ARRAY */

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
        if (status == google.maps.GeocoderStatus.OK) {
            //formatted address from latLng
            document.getElementById("mapAddress").innerHTML += results[0].formatted_address + "<br/>";
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
        mapMarker = new google.maps.Marker({
            map: mapObject,
            position: userLatLng,
        })

        /*create circle under the map marker [DISALBED ]
        accuracyDraw = new google.maps.Circle({
            center: userLatLng,
            radius: 2, //needs to be set dynamically 
            map: mapObject,
            fillColor: '#e88329',
            fillOpacity: 0.5,
            strokeColor: '#1f1b1a',
            strokeOpacity: 0.85
        }); */

    }
    //change marker position to new user LatLng
    else {
        mapMarker.setPosition(userLatLng); //mapMarker LatLng
        /* accuracyDraw.setPosition(userLatLng); //cirlce LatLng [NOT MOVING] */
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
        var positionOptions = {
            enableHighAccuracy: true, //accuracy 
            timeout: 10 * 2000 // 10 seconds

        };
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
        
    }
    else {
        document.getElementById("errorCantFind").innerHTML = "Your browser doesn't support location";
    }
    
}
/* 2# == GEO LOCATE USER END ==*/

/* 3# === SUCCESS LOCATION OF USER === */
function geolocationSuccess(position) {
    userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

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

    //sets mapMarker to the position of user LatLng
    /* SEEMS TO OVERLAP [DISALBED]? 
    //mapMarker.setPosition(userLatLng);
    //circle.setPosition(userLatLng);
    
    //sets center of map*/
    //[breaks]accuracyDraw.setPosition(userLatLng);
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
        //saves LatLng to firebase
        //var latLngDB = userLatLng.toString();

        //push data to Firebase
        //savesUserLatLng to firebase
        firebaseDB.push({
            latLngUser: userLatLng.toString(),
            addressUser: latlng.toString(),
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
