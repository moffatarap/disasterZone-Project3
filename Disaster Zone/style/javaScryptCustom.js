/* custom javaScrypt MDDN352 P1 [2016] (300317288)*/

$(document).ready(function () {
    /**** NAV HIDE AND SHOW PHONE ****/
    var clickHamburger = true; //NAV ICON CLICK

    /* CLICK VARABLE */
    var clickHC = 0; //Hamburger contain

    $("#nav .grid_1").click(function () {
    //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
       

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        if (clickHC == 2) {
            $("#hamburgerContain").addClass("hidden");
            
            clickHamburger = true; //sets click yes to true
            clickHC = 0; //resets value
        }  

    });




});

