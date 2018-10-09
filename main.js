$(document).ready(function() {

    /* Pick a random number and apply it to the first slide in the slideshow item */
    // $('.carousel-item').eq(Math.floor((Math.random() * $('.carousel-item').length))).addClass("active");

    /* Pick random next slide */
    // $('.carousel-item').carousel(Math.floor((Math.random() * $('.carousel-item').length)));

});

// $('.carousel-item').carousel(Math.floor((Math.random() * $('.carousel-item').length)));

let deckOfCards = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']


let clonedCards = [...deckOfCards];

removeCard()

function removeCard() {
    //remove a random card
    let randomCardIdx = Math.floor(Math.random() * clonedCards.length);
    clonedCards.splice(randomCardIdx, 1);

    // shuffle the cards
    let shuffled = shuffle(clonedCards);

    // empty the carousel
    $('.carousel-inner').empty();

    //put new cards back in carousel
    for (let card of shuffled) {
        createCard(card)
    }

    // reinitialize carousel
    $('.carousel').carousel()
}

function shuffle(arr) {
    return arr.map(i => [Math.random(), i])
    .sort((a, b) => a[0] - b[0])
    .map(i => i[1])
}

function createCard(img_src) {
    let activeClass = '';

    if ($('.carousel-item').length === 0) {// are we creating the first card?
        activeClass = 'active';
    }

    let card = `<div class="carousel-item ${activeClass}">
        <img class="d-block w-100 shuffle" src="images/${img_src}.jpg" alt=" slide">
    </div>`

    $('.carousel-inner').append(card);
}
function playClip(){
    if($('.carousel-item').eq(1).hasClass('shuffle')){
         $(this).next().get(0).play();
    }
}

window.setInterval(playClip,1500);


// $('.carousel-item').carousel({
//     pause: "false"
// });

// for (i = 0; i < mix.length; i++) {
//     shuff[i].style.backgroundColor = "red";
// }


