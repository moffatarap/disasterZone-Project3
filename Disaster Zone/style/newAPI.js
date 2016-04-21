/*=/ VARABLES \=*/
var mapMarker; //var for marker
var mapObject; //var for the google map
var userLatLng; //latLng of user
var circle; //circle for measuring accuracy 

/*=/ VARABLES END \=*/

/* 1# == ON LOAD SET STYLE MAP AND STARTING LOCATION ==*/
window.onload = function () {
    var mapOptions = {
        //MAP OPTIONS
        zoom: 3, //sets zoom level
        draggable: true, //disable drag
        zoomControl: true, //disable or enable zoom
        zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
        },
        disableDoubleClickZoom: true, //disables zoom
        scrollwheel: false, //disables scroll wheel
        disableDefaultUI: true, //disables UI
        mapTypeId: google.maps.MapTypeId.TERRAIN, //sets terrain view
        center:{ lat: 1.4667, lng: -173.0333 },
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
       
        
    };

    mapObject = new google.maps.Map(document.getElementById("googleAPI"), mapOptions);
    geoLocateUser();
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

/* 2# == GEO LOCATE USER == */
function geoLocateUser() {
    //pubs();
    // If the browser supports the Geolocation API
    if (navigator.geolocation) {
        var positionOptions = {
            enableHighAccuracy: true, //accuracy 
            timeout: 10 * 2000 // 10 seconds

        };
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);

    }
    else
        document.getElementById("errorCantFind").innerHTML = "Your browser doesn't support location";
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

