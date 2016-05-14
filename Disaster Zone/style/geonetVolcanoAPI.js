/* Geonet Volcano API Disaster Zone MDDN352 P3 [2016] MOFFATARAP (300317288) */
/*=/ VARABLES \=*/

/*== ARRAYS ==*/
window.onload = function () {
$(function(){
    $.getJSON ('./json/geoNetVolcanoVal.json',function(data){
        console.log("Volcano Info");
        $('severityScale').append(data.properties[0].volcanoID);
        
    })
}

)}
