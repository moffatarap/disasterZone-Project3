/* Geonet Earthquake API Disaster Zone MDDN352 P3 13.1 - [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetEarthQuake = "https://json.ey.nz/www.geonet.org.nz/quakes/services/felt.json"; //saves goenet url as var
var earthQEventLength = 8; //sets earthquake array max events
var earthQRadiusMulti = 2; //sets earthquake alert radius to be multiplyed by
/*== ARRAYS ==*/

/* 1# EARTHQUAKE VARABLE ARRAYS */
//Earthquake Intensity || Light,Weak,Moderate,Strong,Severe
var earthQIntesityArray = [
];

//Earthquake Magitude
var earthQMagnitudeArray = [
];

//Earthquake coordinates || LAT LNG
var earthQLatLngArray = [
];


/* 1# EARTHQUAKE VARABLE ARRAYS [END]*/
function earthJSON() {
    //gets JSON from defined locaiton [LOCAL '/json/geoNetEarthquakeVal.json']
    $.getJSON(geonetEarthQuake, function (data) {
        //each data features array is looped for its length
        $.each(data.features, function (i, eq) {
            //data id displayed in table row
            var tblRow = "<tr>" + "<td>" + eq.properties.intensity + "</td>" +
             "<td>" + eq.properties.magnitude + "</td>" + "<td>" + eq.geometry.coordinates + "</td>" + "<td>" + eq.id + "</td>" + "</tr>"
            $(tblRow).appendTo("#userdata2 tbody"); //appends all user data to userdata id under tbody

           
        });

    });
  
});
