/* Geonet Volcano API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/
var geonetVolcano = "./json/geoNetVolcanoVal.json"; //saves metserivice url as var
var volTitleLength = 12;
/*== ARRAYS ==*/

//volcano titles
var volcanoTitleArray = [
];
//volcano levels
var volcanoLevelArray = [
];
//volcano activity
var volcanoActivityArray = [
];

//stores activtiy array
var volcanoHazardsArray = [

];
/* WORKS AND DISPLAYS IN WEBPAGES
$(function () {
    //gets JSON from defined locaiton [LOCAL './json/geoNetVolcanoVal.json' REMOTE 'http://api.geonet.org.nz/volcano/val']
    $.getJSON(geonetVolcano, function (data) {
        //each data features array is looped for its length
        $.each(data.features, function (i, f) {
            //data id displayed in table row || this one is volcano title
            var tblRow = "<tr>" + "<td>" + f.properties.volcanoTitle + "</td>" + 
             "<td>" + f.properties.level + "</td>" + "<td>" + f.properties.activity + "</td>" + "<td>" + f.properties.hazards + "</td>" + "</tr>"
            $(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
        });

    });

}); */



var tblRow = 0;
/* SAVING ALL ROWS TO ARRAYS */
//$(function () {
//    //gets JSON from defined locaiton [LOCAL './json/geoNetVolcanoVal.json' REMOTE 'http://api.geonet.org.nz/volcano/val']
//    $.getJSON(geonetVolcano, function (data) {
//        //each data features array is looped for its length
//        $.each(data.features, function (i, f) {
//            //data id displayed in table row || this one is volcano title
//            tblRow = "<tr>" + "<td>" + f.properties.volcanoTitle + "</td>" +
//             "<td>" + f.properties.level + "</td>" + "<td>" + f.properties.activity + "</td>" + "<td>" + f.properties.hazards + "</td>" + "</tr>"
//            $(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
//        });

//        $.each(data.features, function (i, f) {
//            //data id displayed in table row || this one is volcano title
//            if (i < volTitleLength) {
//            volcanoTitleArray[i] = f.properties.volcanoTitle;
//            volcanoLevelArray[i] = f.properties.level;
//            volcanoActivityArray[i] = f.properties.activity;
//            volcanoHazardsArray[i] = f.properties.hazards;
//            i++;
//            }
//            else {
//                //adds 1 to counter for arrays
//                $(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
//            }
             
//        });

//        //save var tblRow to equal volcanoTitleArray
//        //volcanoTitleArray === tblRow;
//        console.log('#1')
//        console.log(volcanoTitleArray)
//        console.log('#2')
//        console.log(volcanoLevelArray)
//        console.log('#3')
//        console.log(volcanoActivityArray)
//        console.log('#4')
//        console.log(volcanoHazardsArray)
//    });

//});
window.onload = function () {
    volJSON();
}

function volJSON() {
    //gets JSON from defined locaiton [LOCAL './json/geoNetVolcanoVal.json' REMOTE 'http://api.geonet.org.nz/volcano/val']
    $.getJSON(geonetVolcano, function (data) {
        //    //each data features array is looped for its length
        //    $.each(data.features, function (i, f) {
        //        //data id displayed in table row || this one is volcano title
        //        tblRow = "<tr>" + "<td>" + f.properties.volcanoTitle + "</td>" +
        //         "<td>" + f.properties.level + "</td>" + "<td>" + f.properties.activity + "</td>" + "<td>" + f.properties.hazards + "</td>" + "</tr>"
        //        $(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
        //    });

        $.each(data.features, function (i, f) {
            //data id displayed in table row || this one is volcano title
            if (i < volTitleLength) {
                volcanoTitleArray[i] = f.properties.volcanoTitle;
                volcanoLevelArray[i] = f.properties.level;
                volcanoActivityArray[i] = f.properties.activity;
                volcanoHazardsArray[i] = f.properties.hazards;
                i++;
            }
            else {
                ////adds 1 to counter for arrays
                //$(tblRow).appendTo("#userdata tbody"); //appends all user data to userdata id under tbody
            }

        });

        //save var tblRow to equal volcanoTitleArray
        console.log('#1')
        console.log(volcanoTitleArray)
        console.log('#2')
        console.log(volcanoLevelArray)
        console.log('#3')
        console.log(volcanoActivityArray)
        console.log('#4')
        console.log(volcanoHazardsArray)
    });


}