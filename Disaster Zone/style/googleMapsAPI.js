/**** GOOGLE MAPS API Disaster Zone MDDN352 P2 [2016] (300317288) ****/
/* CODE ADAPTED FROM http://www.sitepoint.com/working-with-geolocation-and-google-maps-api/ */

/*=/ VARABLES \=*/
var mapMarker; //var for marker
var mapObject; //var for the google map
var userLatLng; //latLng of user
var circle; //circle for measuring accuracy 

/*=/ VARABLES END \=*/

/* PUBNUB API REALTIME DATA [WORKING]*/
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

/* PUBNUB API REALTIME DATA END */

/* INITILIZE MAP START */
function initialise() {
    /* GOOGLE MAPS STYLE and options */
    var mapOptions = {
        //MAP OPTIONS
        zoom: 16, //sets zoom level
        draggable: false, //disabled for mobile deivces and computers drag
        zoomControl: true, //disable or enable zoom
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        disableDoubleClickZoom: true, //disables zoom
        scrollwheel: false, //disables scroll wheel
        disableDefaultUI: true, //disables UI
        mapTypeId: google.maps.MapTypeId.ROADMAP, //sets terrain view
        /* STYLES */
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
    }

    // DRAW GOOGLE MAP
    mapObject = new google.maps.Map(document.getElementById("googleAPI"), mapOptions);

    //DRAW NEW MARKER
    mapMarker = new google.maps.Marker({
        map: mapObject,
        position: userLatLng
    })
    //DRAW CIRCLE
    circle = new google.maps.Circle({
        center: userLatLng,
        radius: position.coords.accuracy,
        map: mapObject,
        fillColor: '#e88329',
        fillOpacity: 0.5,
        strokeColor: '#1f1b1a',
        strokeOpacity: 0.85
    });

    mapObject.fitBounds(circle.getBounds());

    //calls geolocation
    

}
/* INITILIZE MAP END */

/* CONVERT LATLNG TO ADDRESS [WORKING]*/
function writeAddressName(latLng) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        "location": latLng
    },
    function (results, status) {
        if (status == google.maps.GeocoderStatus.OK)
            //formatted address from latLng
            document.getElementById("mapAddress").innerHTML += results[0].formatted_address + "<br/>";
            //+= for debugging, to show all addresses = to just show one address at a time

        else
            //if address cant be found show error code
            document.getElementById("errorCantFind").innerHTML = "No address found" + "<br />";
    });
}

/* CONVERT LATLNG TO ADDRESS END */

/* MAP OPTOIONS */
/* MAP OPTOIONS END */
/* SUCESSFUL LOCATION OF USER */
function geolocationSuccess(position) {
    userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    // Write the formatted address
    writeAddressName(userLatLng);

    

        /* STYLES END */
        center: userLatLng
    };

    /* [DISABLED FOR TESTING]
    // DRAW GOOGLE MAP
    mapObject = new google.maps.Map(document.getElementById("googleAPI"), mapOptions);

    //DRAW NEW MARKER
    mapMarker = new google.maps.Marker({
        map: mapObject,
        position: userLatLng
    })
    //DRAW CIRCLE
    circle = new google.maps.Circle({
        center: userLatLng,
        radius: position.coords.accuracy,
        map: mapObject,
        fillColor: '#e88329',
        fillOpacity: 0.5,
        strokeColor: '#1f1b1a',
        strokeOpacity: 0.85
    });

    mapObject.fitBounds(circle.getBounds()); */
//}

/* IF ERROR FUNCTION */
function geolocationError(positionError) {
    document.getElementById("errorCantFind").innerHTML = "Error: " + positionError.message + "<br />";
}
/* IF ERROR FUNCTION END */

/* GEOLOCATE USER */
function geoLocateUser() {
    pubs();
    
    // If the browser supports the Geolocation API
    if (navigator.geolocation) {
        var positionOptions = {
            enableHighAccuracy: true, //accuracy 
            timeout: 10 * 2000 // 10 seconds

        };
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);

        //initialise();


    }
    else
        document.getElementById("errorCantFind").innerHTML = "Your browser doesn't support location";
}

/* GEOLOCATE USER END*/

/* MOVE MARKER TO UPDATED LOCATION */
function reDraw() {

    //sets mapMarker to the position of user LatLng
    mapMarker.setPosition(userLatLng);
    //sets center of map
    mapObject.setCenter(userLatLng)

}

/* GET NEW GEOLOCATION AND MOVE MARKER */
setInterval(function () {

    reDraw();
    geoLocateUser()

}, 33000);

//window.onload = geoLocateUser;
window.onload = initialise;











