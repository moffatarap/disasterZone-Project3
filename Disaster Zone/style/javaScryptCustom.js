/* custom javaScrypt MDDN352 P1 [2016] (300317288)*/

$(document).ready(function () {
    /**** NAV HIDE AND SHOW PHONE ****/

    /* CLICK VARABLE [SET INITAL NUMBER TO 0]*/
    var clickHC = 0; //Hamburger contain

    /* CLICK BOOL */
    //checks to see if div drop down, has been clicked so its displayed
    //then allows the clearing of that div to hidden

    var clickHamburger = true; //NAV ICON CLICK

    //NAV MAIN HIDE AND SHOW 

    $("#nav .grid_1").click(function () {
    //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
        //$("#hamburgerContain").slideDown(1000); //sets hight and animates

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        if (clickHC == 2) {
            $("#hamburgerContain").addClass("hidden");
            //$("#hamburgerContain").slideUp(1000); //sets hight and animates
            
            clickHamburger = true; //sets click yes to true
            clickHC = 0; //resets value
        }  

    });

    //#0 NAV HOME

    $("#navHome").click(function () {
        //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
        //$("#hamburgerContain").slideDown(1000); //sets hight and animates

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        if (clickHC == 2) {
            $("#hamburgerContain").addClass("hidden");
            //$("#hamburgerContain").slideUp(1000); //sets hight and animates

            clickHamburger = true; //sets click yes to true
            clickHC = 0; //resets value
        }

    });

    //#1 NAV ABOUT

    $("#navAbout").click(function () {
        //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
        //$("#hamburgerContain").slideDown(1000); //sets hight and animates

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        if (clickHC == 2) {
            $("#hamburgerContain").addClass("hidden");
            //$("#hamburgerContain").slideUp(1000); //sets hight and animates

            clickHamburger = true; //sets click yes to true
            clickHC = 0; //resets value
        }

    });

    //#2 NAV DISASTER

    $("#navDisaster").click(function () {
        //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
        //$("#hamburgerContain").slideDown(1000); //sets hight and animates

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        if (clickHC == 2) {
            $("#hamburgerContain").addClass("hidden");
            //$("#hamburgerContain").slideUp(1000); //sets hight and animates

            clickHamburger = true; //sets click yes to true
            clickHC = 0; //resets value
        }

    });

    //#3 NAV SYSTEMS

    $("#navSystems").click(function () {
        //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
        //$("#hamburgerContain").slideDown(1000); //sets hight and animates

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        if (clickHC == 2) {
            $("#hamburgerContain").addClass("hidden");
            //$("#hamburgerContain").slideUp(1000); //sets hight and animates

            clickHamburger = true; //sets click yes to true
            clickHC = 0; //resets value
        }

    });

    //#4 NAV CONCEPT

    $("#navScope").click(function () {
        //show nav expand div
        $("#hamburgerContain").removeClass("hidden");
        //$("#hamburgerContain").slideDown(1000); //sets hight and animates

        clickHamburger = false; //sets true to false
        clickHC = clickHC + 1; //adds 1 to var

        //Hide nav expand
        if (clickHC == 2) {
            $("#hamburgerContain").addClass("hidden");
            //$("#hamburgerContain").slideUp(1000); //sets hight and animates

            clickHamburger = true; //sets click yes to true
            clickHC = 0; //resets value
        }

    });

    /* AUDIO PLAY FUNCTION */
    $(document).ready(function () {
        $("#BGAudio").get(0).play();
        

    });


});




