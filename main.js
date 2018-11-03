$(document).ready(function() {
    var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
    var rand = Math.floor(Math.random() * colors.length);
    $('.change').css("background-color", colors[rand]);
});
//these are arrays holding the 9 games
//all the cool kids are using es6
let deckOfCards = ['2C', '2H', '2S', '2D', '3C', '3H', '3S', '3D', '4C', '4H', '4S', '4D',
'5C', '5H', '5S', '5D', '6C', '6H', '6S', '6D','7C', '7H', '7S', '7D', '8C', '8H', '8S', '8D',
'9C', '9H', '9S', '9D', '10C', '10H', '10S', '10D', 'JC', 'JH', 'JS', 'JD', 'QC', 'QH',
'QS', 'QD', 'KC', 'KH', 'KS', 'KD', 'AC', 'AH', 'AS', 'aceD'];

let doubleDeck = ['2C', '2H', '2S', '2D', '3C', '3H', '3S', '3D', '4C', '4H', '4S', '4D',
'5C', '5H', '5S', '5D', '6C', '6H', '6S', '6D','7C', '7H', '7S', '7D', '8C', '8H', '8S', '8D',
'9C', '9H', '9S', '9D', '10C', '10H', '10S', '10D', 'JC', 'JH', 'JS', 'JD', 'QC', 'QH',
'QS', 'QD', 'KC', 'KH', 'KS', 'KD', 'AC', 'AH', 'AS', 'aceD', '2C', '2H', '2S', '2D', '3C', '3H', '3S', '3D', '4C', '4H', '4S', '4D', '5C', '5H', '5S', '5D', '6C', '6H', '6S', '6D','7C', '7H', '7S', '7D', '8C', '8H', '8S', '8D', '9C', '9H', '9S', '9D', '10C', '10H', '10S', '10D', 'JC', 'JH', 'JS', 'JD', 'QC', 'QH',
'QS', 'QD', 'KC', 'KH', 'KS', 'KD', 'AC', 'AH', 'AS', 'aceD'];

let diamonds = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'aceD'];
let hearts = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];
let spades = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'];
let clubs = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC'];

let halfDeckRed = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
'aceD','2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];
let halfDeckBlack = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
'AS', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC'];
let singleDigits = ['2C', '2H', '2S', '2D', '3C', '3H', '3S', '3D', '4C', '4H', '4S', '4D',
'5C', '5H', '5S', '5D', '6C', '6H', '6S', '6D', '7C', '7H', '7S', '7D', '8C', '8H', '8S', '8D',
'9C', '9H', '9S', '9D'];
let broadways = ['10C', '10H', '10S', '10D', 'JC', 'JH', 'JS', 'JD', 'QC', 'QH', 'QS', 'QD',
'KC', 'KH', 'KS', 'KD', 'AC', 'AH', 'AS', 'aceD'];

let easiest = ['aceD', 'AH', 'AC', 'AS'];
let easier = ['KC', 'KH', 'KS', 'KD', 'QC', 'QH', 'QS', 'QD'];
//declare some global variables
let clonedCards = [];

let missingCard;

//let's create each game
//clone deck using spread
function club() {
    clonedCards = [...clubs];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1200 //set interval in milliseconds 
    })
    //make game buttons disappear and go to carousel
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    //once the carousel ends go to the end screen
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function diamond() {
    clonedCards = [...diamonds];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1200
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function heart() {
    clonedCards = [...hearts];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1200
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function spade() {
    clonedCards = [...spades];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1200
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function halfDeckR() {
    clonedCards = [...halfDeckRed];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1800
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function halfDeckB() {
    clonedCards = [...halfDeckBlack];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1800
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

//by the way... 3 dots is a 'spread' in es6
//it's not like i'm saying 'to be continued...'
function number() {
    clonedCards = [...singleDigits];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1800
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function picture() {
    clonedCards = [...broadways];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 1800
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
           thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function full() {
    clonedCards = [...deckOfCards];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 2400
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

function twoDeck() {
    clonedCards = [...doubleDeck];
    console.log(clonedCards);
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 3600
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}
function quads() {
    clonedCards = [...easiest];
    console.log(clonedCards);
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 333
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}
function royalty() {
    clonedCards = [...easier];
    console.log(clonedCards);
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 444
    })
    let theseDisappear = document.getElementsByClassName("begin");
        for (let thing of theseDisappear) {
            thing.style.display = "none";
    }
    $('.carousel').on('slid.bs.carousel', function (e) {
        let num_cards = $('.carousel-item').length
        if ( (num_cards - 1) === e.to) {
            $('.carousel-inner').empty();
            let fiftyTwoAppear = document.getElementsByClassName("containerA");
                for (let stuff of fiftyTwoAppear) {
                    stuff.style.display = "block";
                }
        }
    })
}

//splice will return the spliced and modify resulting arr
//mathfloor & random to generate missing card
function removeCard() {
    //remove a random card
    let randomCardIdx = Math.floor(Math.random() * clonedCards.length);
    missingCard = clonedCards.splice(randomCardIdx, 1);
    console.log(missingCard)
    // shuffle the cards
    let shuffled = shuffle(clonedCards);
    // empty the carousel
    $('.carousel-inner').empty();
    //put new cards back in carousel
    for (let card of shuffled) {
        createCard(card)
    }
}
//nasty shuffle :)
function shuffle(arr) {
    return arr.map(i => [Math.random(), i])
    .sort((a, b) => a[0] - b[0])
    .map(i => i[1])
}
//must have active class else carousel wont start
function createCard(img_src) {
    let activeClass = '';

    if ($('.carousel-item').length === 0) {// are we creating the first card?
        activeClass = 'active';
    }
//lets not write 52 carousels.. that would be ridiculous
    let card = `<div class="carousel-item ${activeClass}">
        <img class="d-block w-100 shuffle" src="images/${img_src}.jpg" alt=" slide">
    </div>`

    $('.carousel-inner').append(card);
}
//if the carousel has finished, let's go to end screen
$('.carousel').on('slid.bs.carousel', function (e) {
    let num_cards = $('.carousel-item').length
    if ( (num_cards - 1) === e.to) {
        $('.carousel-inner').empty();
        let fiftyTwoAppear = document.getElementsByClassName("containerA");
            for (let stuff of fiftyTwoAppear) {
            stuff.style.display = "block";
            }
    }
})

function hourlySwitch(card) {
    let date = new Date();
    let hour = date.getHours();
    if (hour < 18) {
        guessCardSafe(card);
    }
    else {
        guessCard(card);
    }
}

//get an integer 0-59, set farts to 8.5% or 1 in 12 clicks
//use modulus to confuse user on why a random fart?
//that old gag...
//10-27 testing a new high percentage(57%) fart mode
function guessCard(card) {
    let date = new Date();
    let sec = date.getSeconds();
    if (missingCard == card) {
        document.querySelector("#mariowin").play();
        document.body.style.background = "Chartreuse";
        setTimeout(function restart() {
            location.reload(true);
        }, 3200);
    }
    else if (sec % 3 === 0) {
        document.body.style.background = "Maroon";
        document.querySelector("#pacman").play();
    }
    else if (sec % 5 === 0) {
        document.body.style.background = "DeepPink";
        document.querySelector("#fart8").play();
    }
    else if (sec % 7 === 0) {
        document.body.style.background = "IndianRed";
        document.querySelector("#fart2").play();
    }
    else if (sec % 11 === 0) {
        document.body.style.background = "LightCoral";
        document.querySelector("#donkeykong").play();
    }
    else if (sec % 13 === 0) {
        document.body.style.background = "MediumVioletRed";
        document.querySelector("#mario").play();
    }
    else if (sec % 17 === 0) {
        document.body.style.background = "MediumOrchid";
        document.querySelector("#fart4").play();
    }
    else if (sec % 19 === 0) {
        document.body.style.background = "Sienna";
        document.querySelector("#fart5").play();
    }
    else if (sec % 23 === 0) {
        document.body.style.background = "Tomato";
        document.querySelector("#fart6").play();
    }
    else if (sec % 29 === 0) {
        document.body.style.background = "SaddleBrown";
        document.querySelector("#fart7").play();
    }
    else if (sec % 4 === 0) {
        document.body.style.background = "Peru";
        document.querySelector("#fart3").play();
    }
    else {
        document.body.style.background = "FireBrick";
        document.querySelector("#fart1").play();
    }
    
}

//professional fart-less mode :(
function guessCardSafe(card) {
    let date = new Date();
    let sec = date.getSeconds();
    if (missingCard == card) {
        document.querySelector("#mariowin").play();
        document.body.style.background = "Chartreuse";
        setTimeout(function restart() {
            location.reload(true);
        }, 2500);
    }
    else if (sec % 3 === 0) {
        document.body.style.background = "DarkRed";
        document.querySelector("#donkeykong").play();
    }
    else if (sec % 5 === 0) {
        document.body.style.background = "HotPink";
        document.querySelector("#mario").play();
    }
    else {
        document.body.style.background = "FireBrick";
        document.querySelector("#pacman").play();
    }
}

//new game
function restart() {
    location.reload(true);
}





