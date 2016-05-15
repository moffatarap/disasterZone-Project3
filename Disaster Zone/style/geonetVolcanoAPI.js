/* Geonet Volcano API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetVolcano = "http://api.geonet.org.nz/volcano/val&format=js"; //saves metserivice url as var

/*== ARRAYS ==*/

$(function () {
    //gets JSON from defined locaiton [LOCAL './json/geoNetVolcanoVal.json']
    $.getJSON(geonetVolcano, function (data) {
        //each data features array is looped for its length
        $.each(data.features, function (i, f) {
            //data id displayed in table row || this one is volcano title
            var tblRow = "<tr>" + "<td>" + f.properties.volcanoTitle + "</td>" + 
             "<td>" + f.properties.level + "</td>" + "<td>" + f.properties.activity + "</td>" + "<td>" + f.properties.hazards + "</td>" + "</tr>"
            $(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
        });

    });

});
