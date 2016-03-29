/**** GOOGLE MAPS API Disaster Zone MDDN352 P1 [2016] (300317288) ****/
/* CODE ADAPTED FROM http://www.sitepoint.com/working-with-geolocation-and-google-maps-api/ */

function writeAddressName(latLng) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        "location": latLng
    },
    function (results, status) {
        if (status == google.maps.GeocoderStatus.OK)
            document.getElementById("mapAddress").innerHTML += results[0].formatted_address;
        else
            document.getElementById("error").innerHTML += "Unable to retrieve your address" + "<br />";
    });
}
/* SUCESSFUL LOCATION OF USER */
function geolocationSuccess(position) {
    var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    // Write the formatted address
    writeAddressName(userLatLng);

    /* GOOGLE MAPS STYLE and options */
    var mapOptions = {
        //MAP OPTIONS
        zoom: 16, //sets zoom level
        draggable: false, //disable drag
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
            },{ 
                "lightness": -37 }]
        },{
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{ 
                "color": "#49717f" }] 
        }, {
            //TEXT ELEMENTS STROKE
            "elementType": "labels.text.stroke",
            "stylers": [{ 
                "visibility": "on" 
            },{ 
                "color": "#201c1b"
            },{ 
                "weight": 2 
            },{ 
                "gamma": 0.84 }]
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
            },{ 
                "color": "#ae00ff"
            }]
        },{
            "elementType": "labels.icon",
            "stylers": [{ 
                "visibility": "off" }]
        }, {
            //PARKS
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ 
                "color": "#2d632b"
            }]
        },{
            "featureType": "administrative.locality",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"}]
        },{
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"}]
        },{
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"}]
        },{
        }],
    
        /* STYLES END */
        center:userLatLng
    };

    // Draw the map
    var mapObject = new google.maps.Map(document.getElementById("googleAPI"), mapOptions);

    // Place the marker
    new google.maps.Marker({
        map: mapObject,
        position: userLatLng
    });

    // Draw a circle around the user position to have an idea of the current localization accuracy
    var circle = new google.maps.Circle({
        center: userLatLng,
        radius: position.coords.accuracy,
        map: mapObject,
        fillColor: '#e88329',
        fillOpacity: 0.5,
        strokeColor: '#1f1b1a',
        strokeOpacity: 0.9
    });

    mapObject.fitBounds(circle.getBounds());
}

function geolocationError(positionError) {
    document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
}
/* LOCATE USER */
function geolocateUser() {

    // If the browser supports the Geolocation API
    if (navigator.geolocation) {
        var positionOptions = {
            enableHighAccuracy: true, //accuracy 
            timeout: 10 * 2000 // 10 seconds
        };
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
    }
    else
        document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
}

window.onload = geolocateUser;

   
   






    

