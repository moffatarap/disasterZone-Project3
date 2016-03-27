/* custom javaScrypt MDDN352 P1 [2016] (300317288)*/

$(document).ready(function () {
    /**** NAV HIDE AND SHOW PHONE ****/
    var clickHamburger = true; //NAV ICON CLICK

    /* CLICK VARABLE */
    var clickHC; //Hamburger contain

    $("#nav .grid_1").click(function () {
    //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
        $("#hamburgerContain").animate({ height: "auto" }); //sets animation height [FIX]

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        
    

   

});

});

