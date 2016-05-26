/*Firebase API Disaster Zone MDDN352 P3 [2016] ZELLERPHOE */
//loaded into geoLocationAPI
//TEMP DB loaded
//ACTUAL DB: https://pbwoooo.firebaseio.com

/* VARABLES */
var firebaseDB; //creates firebaseDB var
firebaseDB = new Firebase("<https://pbwoooo.firebaseio.com/>");
/** ARRAYS **/

/*** FUNCTION ***/
function firebaseAPI() {

   /** firebaseDB.push({
        latLngUser: userLatLng.toString(), //latLng to db
        addressUser: document.getElementById("mapAddress").innerHTML, //formatted address to db from html
        geoLocateFail: document.getElementById("errorCantFind").innerHTML, //if fail save to db
        alertEQ: document.getElementById("disasterAlert0").innerHTML, //ALERT EARTHQUAKE
        alertFI: document.getElementById("disasterAlert1").innerHTML, //ALERT FIRE
        alertFL: document.getElementById("disasterAlert2").innerHTML, //ALERT FLOOD
        alertHUR: document.getElementById("disasterAlert3").innerHTML, //ALERT HURRICANE
        alertTOR: document.getElementById("disasterAlert4").innerHTML, //ALERT TORNADO
        alertFIT: document.getElementById("disasterAlert5").innerHTML, //ALERT FIRE TE ARO

    }); **/

  /**  firebaseDB.set({
     Events:{
EARTHQUAKE:{
latLngUser: userLatLng.toString(),
addressUser: document.getElementById("mapAddress").innerHTML
},
FIRE:{
latLngUser: userLatLng.toString(),
addressUser: document.getElementById("mapAddress").innerHTML
},
        FLOOD:{
latLngUser: userLatLng.toString(),
addressUser: document.getElementById("mapAddress").innerHTML
},
HURRICANE:{
latLngUser: userLatLng.toString(),
addressUser: document.getElementById("mapAddress").innerHTML
},
        TORNADO:{
latLngUser: userLatLng.toString(),
addressUser: document.getElementById("mapAddress").innerHTML
}
}

    }); **/

firebaseDB.set({

Volcando:{ 
	volActiveArray

}, 
EarthBeQuaking: {
	earthQLatArray,
	earthQLngArray,
	earthQMagnitudeArray,
	earthQDepthArray,
	earthQIDNameArray
}


});
    
}