/* custom javaScrypt MDDN352 P1 [2016] (300317288)*/

$(document).ready(function () {


});

$(window).resize(function () {
    if (window.innerWidth < 480) {

        $('.LatestNews').replaceWith('<h3><a href="">News Link</a></h3>');

    } else if (window.innerWidth > 480) {

        // Change back to original .LatestNews

    }
}).resize();
