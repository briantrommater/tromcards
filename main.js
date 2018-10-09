$(document).ready(function() {

    /* Pick a random number and apply it to the first slide in the slideshow item */
    // $('.carousel-item').eq(Math.floor((Math.random() * $('.carousel-item').length))).addClass("active");

    /* Pick random next slide */
    // $('.carousel-item').carousel(Math.floor((Math.random() * $('.carousel-item').length)));

});

// $('.carousel-item').carousel(Math.floor((Math.random() * $('.carousel-item').length)));

let deckOfCards = ['2C', '2H', '2S', '2D', '3C', '3H', '3S', '3D', '4C', '4H', '4S', '4D',
'5C', '5H', '5S', '5D', '6C', '6H', '6S', '7C', '7H', '7S', '7D', '8C', '8H', '8S', '8D',
'9C', '9H', '9S', '9D', '10C', '10H', '10S', '10D', 'JC', 'JH', 'JS', 'JD', 'QC', 'QH',
'QS', 'QD', 'KC', 'KH', 'KS', 'KD', 'AC', 'AH', 'AS', 'AD'];


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


