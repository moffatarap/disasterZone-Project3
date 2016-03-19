/**** GOOGLE MAPS API Disaster Zone MDDN201 P3 [2015] (300317288) ****/

/*** CUSTOM SETTINGS ***/
var map;
var marker;

/** NEW MAP METHOD **/
/** CUSTOM UI ELEMENTS  START **/
function CenterControl(controlDiv, map) {

    //MAIN CUSTOM UI CONTAINER
    var controlUI = document.createElement('div'); //creates div element
    controlUI.style.backgroundColor = '#183152'; //sets background color
    controlUI.style.backgroundColor = 'rgba(24,49,82,0.95)';
    /* BORDER*/
    /*L*/
    controlUI.style.borderTopLeftRadius = '0.6em';
    controlUI.style.borderBottomLeftRadius = '0.2em';
    /*R*/
    controlUI.style.borderTopRightRadius = '0.6em';
    controlUI.style.borderBottomRightRadius = '0.2em';
    controlUI.style.padding = '2%';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)'; //sets shadow
    controlUI.style.cursor = 'pointer'; //sets custom pointers
    controlUI.style.textAlign = 'left'; //sets text alignment
    controlUI.style.width = '20vw'; //sets width
    //MARGIN
    controlUI.style.marginRight = '2%';
    controlUI.style.marginBottom = '2%'; //sets margin

    controlDiv.appendChild(controlUI);

    /*++ CUSTOM UI KEY ++*/
    // Set CSS for the control interior.
    var keyTitleText = document.createElement('div'); //creates div element
    keyTitleText.style.color = 'rgb(25,25,25)'; //sets text color
    keyTitleText.style.fontFamily = 'lato'; //sets font family
    keyTitleText.innerHTML = '<h7>Key</h7>'; //sets text

    controlUI.appendChild(keyTitleText);

    /*++ CUSTOM UI KEY CONTENT ALERT LEVEL ++*/
    var alertLevelText = document.createElement('div'); //creates div element
    alertLevelText.style.color = 'rgb(25,25,25)'; //sets text color
    alertLevelText.style.backgroundColor = '#C4D7ED'; //sets background color
    alertLevelText.style.width = '100%';
    alertLevelText.style.overflow = 'hidden';
    alertLevelText.style.display = 'inline-block';
    alertLevelText.innerHTML = '<table><tr><td><h5>Severe</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/severe.jpg"></td><td>&nbsp;</td><td><h5>Earthquake</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/earthquake.png"></td></tr><tr><td><h5>Strong</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/strong.jpg"></td><td>&nbsp;</td><td><h5>Flood</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/flood.png"></td></tr><tr><td><h5>Moderate</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/moderate.jpg"></td><td>&nbsp;</td><td><h5>Hurricane</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/hurricane.png"></td></tr><tr><td><h5>Light</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/light.jpg"></td><td>&nbsp;</td><td><h5>Tornado</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/tornado.png"></td></tr><tr><td><h5>Weak</h5></td><td><img class="imgKeyColor" id="imgColorSize" src="./media/img/mapKeys/dangerLevels/weak.jpg"></td><td>&nbsp;</td><td><h5>Fire</h5></td><td><img class="imgKeyDisasterCode" id="imgDisasterEvent" src="./media/img/mapKeys/key/fire.png"></td></tr></table>';//sets text

    controlUI.appendChild(alertLevelText);

    /* KEY UI END */
}


function NewsControl(newsUIDiv, map) {

    //MAIN CUSTOM UI CONTAINER
    var newsUI = document.createElement('div'); //creates div element
    newsUI.style.backgroundColor = '#C4D7ED'; //sets background color
    newsUI.style.padding = '2%';
    newsUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)'; //sets shadow
    newsUI.style.cursor = 'pointer'; //sets custom pointers
    newsUI.style.textAlign = 'left'; //sets text alignment
    newsUI.style.width = '23.5vw'; //sets width
    newsUI.style.height = '83.2vh'; //does not accept %
    newsUI.style.overflow = 'scroll';
    
    //MARGIN
    newsUI.style.marginRight = '2%';
    newsUI.style.marginBottom = '2%'; //sets margin

    newsUIDiv.appendChild(newsUI); //must equal name set in function eg newsUIDiv

    /*+++ CONTENT ROW 5 BRAZIL +++*/
    var newsContentR5UI = document.createElement('div'); //creates div element
    newsContentR5UI.style.height = 'auto'; //height
    newsContentR5UI.innerHTML = ' <div class="NSCR5" id ="hidden">' + '<h2>Hurricane Brazil [Moderate]</h2>' + '<p>The threat for a Hurricane building off the Atlantic coast is moderate, due to wild weather conditions. Citizens of Brazil are advised to take extra care, this storm may pass without building to a full blown Hurricane but expect high winds and hail. Over the next 48 hours be ready to batten down the hatches should this tropical storm brew into a Hurricane. Be advised to keep up to date with the latest information, here on disaster zone and local news and weather broadcasts. Send any updates to us on <a href="mailto:reportdisaster@disasterzone.com?subject=Report%20A%20%Disaster">updates@disasterzone.com</a>.</p>' + '</div>';

    newsUI.appendChild(newsContentR5UI); //most important line, makes child of main div

    /*+++ CONTENT ROW 4 USA +++*/
    var newsContentR4UI = document.createElement('div'); //creates div element
    newsContentR4UI.style.height = 'auto'; //height
    newsContentR4UI.innerHTML = ' <div class="NSCR4" id ="hidden">' + '<h2>Tornado Warning Illinois USA [Moderate]</h2>' + '<p> The threat for a Tornado is high in the Illinois county region, residents have are advised to prepare for a  Tornado that could build over the next few days. Due to temperate weather conditions, make sure to have your house and family ready in the event this storm creates a Tornado. Keep tabs on local weather stations, and regional radio broadcasts for up to date information. If you are in the Illinois region and spot a developing Tornado, please advise us at <a href="mailto:reportdisaster@disasterzone.com?subject=Report%20A%20%Disaster">updates@disasterzone.com</a> Be careful out there and take all necessary precautions, if you don&#39;t have to travel somewhere over the next few days, we are advising you don&#39;t stay at home and get ready for what might eventuate.</p>' + '</div>';

    newsUI.appendChild(newsContentR4UI); //most important line, makes child of main div

    /*+++ CONTENT ROW 3 THAI +++*/
    var newsContentR3UI = document.createElement('div'); //creates div element
    newsContentR3UI.style.height = 'auto'; //height
    newsContentR3UI.innerHTML = ' <div class="NSCR3" id ="hidden">' + '<h2>Flood Northern Thailand [Strong]</h2>' + '<p>Torrential downpours over the last three days in the northern province of Chiang Rai caused widespread flooding. State officials report the Mekong and Sai Rivers have overflowed and are flooding Chiang Rai. Farm lands and houses have been most affected by this ongoing event. Local authorities have declared this flooding a natural disaster and relief from the government is on its way to support and help with clean up. More than 1,000 homes have been affected by the flooding, and local farm lands. Thai Meteorological Department say that, over the next 24 hours rain should start to ease up there is a low risk of flash flooding in some areas. Keep up to date with the latest information, on this ongoing event here and on local via radio and TV broadcasts.</p>' + '</div>';

    newsUI.appendChild(newsContentR3UI); //most important line, makes child of main div

    /*++ CONTENT ROW 2 AU ++*/
    var newsContentR2UI = document.createElement('div'); //creates div element
    newsContentR2UI.style.height = 'auto'; //height
    newsContentR2UI.innerHTML = '<div class="NSCR2" id ="hidden">' + '<h2>Bushfire Western Australia [Severe]</h2>' + '<p> A large bush fire is burning across Western Australia more than 80,000 hectares of forest has been affected. The fire has been burning for several days now local authorities of Perth have declared this event a natural disaster; people affected are eligible for state assistance. Residences of Perth are being asked to prepare for an evacuation if the fire cannot be stemmed over the next 48 hours. Dry conditions high temperatures over the past month are to blame, for this rampant out of control bush fire. Keep up to date with the latest information, on this ongoing event here and on local via radio and TV broadcasts.</p>' + '</div>'; //sets line height

    newsUI.appendChild(newsContentR2UI);

    /*++ CONTENT ROW 1 NZ ++*/
    var newsContentR1UI = document.createElement('div'); //creates div element
    newsContentR1UI.style.height = 'auto'; //height
    newsContentR1UI.innerHTML = '<div class="NSCR1" id ="hidden" onclick="goToLoc()">' + '<h2>Earthquake New Zealand [Light]</h2>' + '<p>A light Earthquake 3.5 magnitude on the Richter scale centred 25 km of Taumarunui has struck New Zealand. Reports of light damage to houses and pathways some water piping and sewage may have been affected. Be ready for aftershocks make sure to have your earthquake survival kits ready. Tune into local radio stations and news broadcasts for up-to date information, we will continue monitoring the situation and update as the situation unfolds. To view up-to date information on earthquakes in New Zealand please visit <a href="http://www.geonet.org.nz" target="_blank">Geonet</a> , any reports on damages or further aftershocks update us on <a href="mailto:reportdisaster@disasterzone.com?subject=Report%20A%20%Disaster">updates@disasterzone.com</a></p>'; //sets text
    
    newsUI.appendChild(newsContentR1UI); //must equal name set in above, eg newsUI
}

/*** START MAP ***/

function initMap() {
    /******* ARRAY POS METHOD *******/
    var mapPositions = [
        new google.maps.LatLng(-38.8833, 175.2617), //[0] TAUMARUNI EARTH QUAKE NZ
        new google.maps.LatLng(-31.9522, 115.8589), //[1] PERTH BUSH FIRE AUS
        new google.maps.LatLng(19.9094, 99.8275), //[2] CHIANG RAI FLOOD THAILAND
        new google.maps.LatLng(40.0000, -89.0000), //[3] ILLINOIS TORNADO USA
        new google.maps.LatLng(-15.4700, -47.5500), //[4] HURRICANE BRAZIL
    ]


    /******+ MARKERS ARRAY +******/

    var mapMarkers = [
            //[0] NZ Taumarunui
            {
                "title": 'Taumarunui: Earthquake',
                "description": '<div id ="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="" class="">Taumarunui Earthquake</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Light</li><li>3.5 Magnitude</li><li>Damage Reports: Light damage to houses and water piping</li></ul>' + '<h4>Donate</h4>' + '<p>Donate to Disaster Zone relief fund</p>' + '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style =" width:4vw; height:auto;"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>' + '<h4>Volunteer</h4>' + '<p>In the area want to help out? <br> Contact Disaster Zone volunteer service (0800 3427 8372)</p>' + '</div>'
            },
            //[1] AUS Perth
            {
                "title": 'Perth: Bush Fire',
                "description": '<div id ="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="" class="">Perth Bushfire</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Severe</li><li>Damage Reports: 80,000 hectares of forest burned <br> endangering the city of Perth.</li></ul>' + '<h4>Donate</h4>' + '<p>Donate to Disaster Zone relief fund</p>' + '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style =" width:4vw; height:auto;"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>' + '<h4>Volunteer</h4>' + '<p>In the area want to help out? <br> Contact Disaster Zone volunteer service (0800 3427 8372)</p>' + '</div>'
            },
            //[2] THAI Chiang Rai
            {
                "title": 'Chiang Rai: Flood',
                "description": '<div id ="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="" class="">Chiang Rai Flood</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Strong</li><li>Damage Reports: 1,000 homes effected, farm lands flooded.</li></ul>' + '<h4>Donate</h4>' + '<p>Donate to Disaster Zone relief fund</p>' + '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style =" width:4vw; height:auto;"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>' + '<h4>Volunteer</h4>' + '<p>In the area want to help out? <br> Contact Disaster Zone volunteer service (0800 3427 8372)</p>' + '</div>'
            },
            //[3] USA Illiois
            {
                "title": 'Illinois: Tornado',
                "description": '<div id ="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="" class="">Illinois Tornado Warning</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Moderate</li><li>Damage Reports: None</li></ul>' + '</div>'
            },
            //[4] Brazil
            {
                "title": 'Brazil: Hurricane',
                "description": '<div id ="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="" class="">Brazil  Hurricane Warning</h3>' + '<ul style="list-style-type:none;"><li>Danger Level: Weak</li><li>Damage Reports: None</li></ul>' + '</div>'
            }

    ];

    /**_IMAGE ICON ARRAY _**/
    var iconArray = [
        './media/img/mapKeys/event/light/earthquakeL.png',  //[0] TAUMARUNI EARTH QUAKE NZ
        './media/img/mapKeys/event/severe/fireS.png',      //[1] PERTH BUSH FIRE AUS
        './media/img/mapKeys/event/strong/floodST.png',    //[2] CHIANG RAI FLOOD THAILAND
        './media/img/mapKeys/event/moderate/tornadoM.png', //[3] ILLINOIS TORNADO USA
        './media/img/mapKeys/event/weak/hurricaneW.png'    //[4]  HURRICANE BRAZIL
    ];

    /**__ NEWS SHOW HIDE ARRAY __**/
    var newsShowArray = [
        0, //[0] = NZ
        1, //[1] = AUS
        2, //[2] = THAI
        3, //[3] = USA
        4, //[4] = BRAZIL
         
    ]

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

        var infoWindow = new google.maps.InfoWindow(); //creates new infowindow for each marker
        

        var map = new google.maps.Map(document.getElementById("googleAPI"), mapOptions);
        var i = 0; // starting number

        /*++ CUSTOM UI START ++*/

        /* MAP KEY */
        var centerControlDiv = document.createElement('div'); //creates new element 
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
        /* MAP KEY */
        

        /***** NEWS MAIN ******/
        var newsUIDiv = document.createElement('div'); //creates new element 
        var newsControl = new NewsControl(newsUIDiv, map);
        newsUIDiv.index = 4;
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(newsUIDiv);
        /* NEWS MAIN END */

        /*++ CUSTOM UI END ++*/


        /* FUNCTION CREATES ICONS OVER TIME */
var interval = setInterval(function () {

            var data = mapMarkers[i] //markers data from markers array
            var myLatlng = mapPositions[i]; //loads positions from Map position array
            var icon = iconArray[i]; //loads icon from array
            var newsShow = newsShowArray[i]; //news show or hide array

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title,
                icon: icon,
                animation: google.maps.Animation.DROP
    });

    /** SETS MARKER DESCRIPTION DESPLAY ON CLICK **/
    /* REMOVES HIDDEN ID FROM NEWS UI*/
    //use if else and array to show and hide elements
            
           if (newsShow === 0) {
               $(".NSCR1").removeAttr("id");
            }
            
            if (newsShow === 1) {
                $(".NSCR2").removeAttr("id");
            }

            if (newsShow === 2) {
                $(".NSCR3").removeAttr("id");
            }

            if (newsShow === 3) {
                $(".NSCR4").removeAttr("id");
             }

            if (newsShow === 4) {
                $(".NSCR5").removeAttr("id");
            }

    /*++ PAN TO FUNCTION ++*/
            var center = myLatlng;
            map.panTo(center);

            
            (function (marker, data) {

                //on click make maker set to description
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent(data.description);
                    infoWindow.open(map, marker);
                    
              });
                //ADD IN BOUNCE HERE

            })(marker, data);

            i++;
            //if map markers = 4 stop creating markers
            if (i == mapMarkers.length) {
                clearInterval(interval);
            }
        }, 4700 * 2); //intival time
    }
}






    

