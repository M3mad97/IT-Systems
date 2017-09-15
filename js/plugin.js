/*global $, jQuery, alert*/
// Carousel Speed 
$(document).ready(function () {
    "use strict";
    
    $('.carousel').carousel({
        
        interval: 2000
        
    });
// Theme Color
    
// Show & hidden Option box
    $('.gear-op').click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    // Change Theme color on Click
    var colorLi = $('.color-option ul li'),
        scrollButton = $("#scroll-top");
    colorLi
        .eq(0).css("background-color", "#2980D9").end()
        .eq(1).css("background-color", "#2ECC71").end()
        .eq(2).css("background-color", "#9B59B6").end()
        .eq(3).css("background-color", "#DB3A34");
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });
    $(window).load(function () {


        // Loading Elements

        $(".loading-overlay .spinner").fadeOut(2000, function () {

            // Show The Scroll

            $("body").css("overflow", "auto");

            $(this).parent().fadeOut(2000, function () {

                $(this).remove();
            });
        });
    });
    //loading Screen
    $(window).on('load', function () {
        $(".loading-overlay .sk-folding-cube").fadeOut(2000, function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(2000, function () {
                $(this).remove();
            });
        });
    });
    
    //Scroll Top Button

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 650) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop : 0}, 3000);
    });
});