/* Geonet Volcano API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/

/*== ARRAYS ==*/
/*
window.onload = function () {
$(function(){
    $.getJSON ('./json/geoNetVolcanoVal.json',function(data){
        console.log("Volcano Info");
        $('#severityScale').append(data.properties[0].volcanoID);
        
    })
}

)}
*/
//window.onload = function() {
//var json = {
//    "features": [{
//        "type": "Feature",
//        "geometry": {
//            "type": "Point",
//            "coordinates": [174.77, -36.985]
//        },
//        "properties": {
//            "volcanoID": "aucklandvolcanicfield",
//            "volcanoTitle": "Auckland Volcanic Field",
//            "level": 0,
//            "activity": "No volcanic unrest.",
//            "hazards": "Volcanic environment hazards."
//        }
//   }]
//}

//for (var i = 0; i < json.features.length; i++) {
//    var obj = json.properties[i];
//    if (obj.category == 1) {
//        $("#alertscontain").append("<tr><td>" + obj.volcanoID + " " + obj.volcanoTitle + "</td><td></td></tr>");
//    }
//    else if (obj.category == 2) {
//        $("#alertscontain").append("<tr><td></td><td>" + obj.volcanoID + " " + obj.volcanoTitle + "</td></tr>");
//    }
//}

//}

$(function () {
    //gets JSON from defined locaiton [LOCAL]
    $.getJSON('./json/geoNetVolcanoVal.json', function (data) {
        //each data features array is looped for its length
        $.each(data.features, function (i, f) {
            //data id displayed in table row || this one is volcano title
            var tblRow = "<tr>" + "<td>" + f.properties.volcanoTitle + "</td>" + 
             "<td>" + f.properties.level + "</td>" + "<td>" + f.properties.activity + "</td>" + "<td>" + f.properties.hazards + "</td>" + "</tr>"
            $(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
        });

    });

});
