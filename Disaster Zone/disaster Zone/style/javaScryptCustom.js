/* custom javaScrypt MDDN201 P3 [2015] (300317288)*/

$(document).ready(function () {
   
    /****^ ALERTS SHOW ^****/
/* CLICK VAR */
    var clickSMS = 0; //SMS
    var clickEMAIL = 0; //EMAIL
    var clickRADIO = 0; //RADIO

/* CLICK BOOL */
    var clickSMSY = true; //SMS
    var clickEMAILY = true; //EMAIL
    var clickRADIOY = true; //RADIO

    /**** NAV CONTENT HIDE SHOW ****/
/* CLICK VAR */
    // var counter to show or hide #hidden ID

    var clickP = 0; //PREPARE
    var clickC = 0; //COMMUNICATION
    var clickH = 0; //HELP OUT
    

/* CLICK BOOL */
    //checks to see if div drop down, has been clicked so its displayed
    //then allows the clearing of that div to hidden

    var clickPY = true; //PREPEARE
    var clickCY = true; //COMMUNICATION
    var clickHY = true; //HELPOUT

    

    /****^ ALERTS SHOW ^****/
    

    /*^^^ SMS ^^^*/
    $(".smsAlert").click(function () {
        //show nav expand div
        $("#smsAlertShow").removeClass("hidden");
        $("#smsAlertShow").animate({ height: "auto" }); //sets hight and animates

        //adds hidden class to other alerts, to hide when div clicked
        $("#emailAlertShow").addClass("hidden");
        $("#radioAlertShow").addClass("hidden");

        //hide helpout
        $("#navHExpand").addClass("hidden");
        clickSMSY = false; //sets click yes to false
        clickSMS = clickSMS + 1; //adds 1 to var

        //hide nav expand div
        if (clickSMS == 2) {
            $("#smsAlertShow").addClass("hidden");
            $("#smsAlertShow").animate({ height: "auto" }); //sets hight to 0%
            clickSMSY = true; //sets click yes to true
            clickSMS = 0;
        }

    });

    /*^^ EMAIL ^^*/
    $(".emailAlert").click(function () {
        //show nav expand div
        $("#emailAlertShow").removeClass("hidden");
        $("#emailAlertShow").animate({ height: "auto" }); //sets hight and animates

        //adds hidden class to other alerts, to hide when div clicked
        $("#smsAlertShow").addClass("hidden");
        $("#radioAlertShow").addClass("hidden");

        //hide helpout
        $("#navHExpand").addClass("hidden");
        clickEMAILY = false; //sets click yes to false
        clickEMAIL = clickEMAIL + 1; //adds 1 to var

        //hide nav expand div
        if (clickEMAIL == 2) {
            $("#emailAlertShow").addClass("hidden");
            $("#emailAlertShow").animate({ height: "auto" }); //sets hight to 0%
            clickEMAILY = true; //sets click yes to true
            clickEMAIL = 0;
        }

    });


    /*^ RADIO ^*/
    $(".radioAlert").click(function () {
        //show nav expand div
        $("#radioAlertShow").removeClass("hidden");
        $("#radioAlertShow").animate({ height: "auto" }); //sets hight and animates

        //adds hidden class to other alerts, to hide when div clicked
        $("#smsAlertShow").addClass("hidden");
        $("#emailAlertShow").addClass("hidden");

        //hide helpout
        $("#navHExpand").addClass("hidden");
        clickRADIOY = false; //sets click yes to false
        clickRADIO = clickRADIO + 1; //adds 1 to var

        //hide nav expand div
        if (clickRADIO == 2) {
            $("#radioAlertShow").addClass("hidden");
            $("#radioAlertShow").animate({ height: "auto" }); //sets hight to 0%
            clickRADIOY = true; //sets click yes to true
            clickRADIO = 0;
        }

    });

    /****^ ALERTS SHOW END ^****/

/*++ PREPARE ++*/

    $(".navPrep").click(function () {
        //show nav expand div
        $("#navPExpand").removeClass("hidden");
        $("#navPExpand").animate({ height: "auto" }); //sets hight and animates
        clickPY = false; //sets click yes to false
        clickP = clickP + 1; //adds 1 to var

        //hide nav expand div
        if (clickP == 2) {
            $("#navPExpand").addClass("hidden");
            $("#navPExpand").animate({ height: "auto" }); //sets hight to 0%
            clickPY = true; //sets click yes to true
            clickP = 0; //sets var to 0
        }

    });

/*+++ COMMUNICATION +++*/

    $(".navCommunication").click(function () {
        //show nav expand div
        $("#navComExpand").removeClass("hidden");
        $("#navComExpand").animate({ height: "auto" }); //sets hight and animates
        clickCY = false; //sets click yes to false
        clickC = clickC + 1; //adds 1 to var

        //hide nav expand div
        if (clickC == 2) {
            $("#navComExpand").addClass("hidden");
            $("#navComExpand").animate({ height: "auto" }); //sets hight to 0%
            clickCY = true; //sets click yes to true
            clickC = 0; //sets var to 0
        }

    });


/*++++ HELP OUT ++++*/

    $(".navHelpOut").click(function () {
        //show nav expand div
        $("#navHExpand").removeClass("hidden");
        $("#navHExpand").animate({ height: "auto" }); //sets hight and animates
        clickH = clickH + 1; //adds 1 to var
        clickHY = false; //sets click yes to false

        //hide nav expand div
        if (clickH == 2) {
            $("#navHExpand").addClass("hidden");
            $("#navHExpand").animate({ height: "auto" }); //sets hight to 0%
            clickHY = true; //sets click yes to true
            clickH = 0;
            
        }

    });

    /*^& CLEAR ALL DROP DOWNS ON CLICK MAIN CONTAINER &^*/
    $("#mainContainerApi").click(function () {

/*+++++ HEADER INFO +++++*/
        
 /*++ PREPARE ++ */
        if (clickPY === false) {
            $("#navPExpand").addClass("hidden");
            $("#navPExpand").animate({ height: "auto" }); //sets hight to 0%
            clickP = 0;
        } 

/*+++ COMMUNICATION +++ */
        if (clickCY === false) {
            $("#navComExpand").addClass("hidden");
            $("#navComExpand").animate({ height: "auto" }); //sets hight to 0%
            clickC = 0;
        } 
        
/*++++ HELP OUT ++++ }*/
        if (clickHY === false) {
            $("#navHExpand").addClass("hidden");
            $("#navHExpand").animate({ height: "auto" }); //sets hight to 0%
            clickH = 0;
        }

/*+++++ ALERT INFO +++++*/

/*+ SMS +*/
        if (clickSMSY === false) {
        $("#smsAlertShow").addClass("hidden");
        $("#smsAlertShow").animate({ height: "auto" }); //sets hight to 0%
        clickSMS = 0;
            
        }

/*++ EMAIL ++*/
        if (clickEMAILY === false) {
        $("#emailAlertShow").addClass("hidden");
        $("#emailAlertShow").animate({ height: "auto" }); //sets hight to 0%
        clickEMAIL = 0;
        
        }

/*++ RADIO ++*/
        if (clickRADIOY === false) {
        $("#radioAlertShow").addClass("hidden");
        $("#radioAlertShow").animate({ height: "auto" }); //sets hight to 0%
        clickRADIO = 0;
        }

    });
});
