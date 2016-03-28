/**** GOOGLE MAPS API Disaster Zone MDDN352 P1 [2016] (300317288) ****/

/*** CUSTOM SETTINGS ***/
var map;
var marker;

/** NEW MAP METHOD **/

/*** START MAP ***/

function initMap() {
    /******* ARRAY POS METHOD ******
    var mapPositions = [
        new google.maps.LatLng(-38.8833, 175.2617), //[0] TAUMARUNI EARTH QUAKE NZ
        new google.maps.LatLng(-31.9522, 115.8589), //[1] PERTH BUSH FIRE AUS
        new google.maps.LatLng(19.9094, 99.8275), //[2] CHIANG RAI FLOOD THAILAND
        new google.maps.LatLng(40.0000, -89.0000), //[3] ILLINOIS TORNADO USA
        new google.maps.LatLng(-15.4700, -47.5500), //[4] HURRICANE BRAZIL
    ] */

    /** AFTER WINDOW LOADS FUNCTION **/

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

            center: { lat: 1.4667, lng: -173.0333 } //starting Kiribati
        };

        /* GEO LOCATION */
        var infoWindow = new google.maps.InfoWindow(); //creates new infowindow for each marker
        /* GEO LOCATION END */



    }

       
    }






    

