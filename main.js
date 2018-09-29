$(document).ready(function() {

    /* Pick a random number and apply it to the first slide in the slideshow item */
    $('.carousel-item').eq(Math.floor((Math.random() * $('.carousel-item').length))).addClass("active");

    /* Pick random next slide */
    $('.carousel-item').carousel(Math.floor((Math.random() * $('.carousel-item').length)));

});

$('.carousel-item').carousel({
    pause: "false"
});

function playClip(){
    if($('.carousel-item').eq(1).hasClass('active')){
         $(this).next().get(0).play();
    }
}

// window.setInterval(playClip,3200);