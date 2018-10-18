
//these are arrays holding the 9 games
//all the cool kids are using es6
let deckOfCards = ['2C', '2H', '2S', '2D', '3C', '3H', '3S', '3D', '4C', '4H', '4S', '4D',
'5C', '5H', '5S', '5D', '6C', '6H', '6S', '6D','7C', '7H', '7S', '7D', '8C', '8H', '8S', '8D',
'9C', '9H', '9S', '9D', '10C', '10H', '10S', '10D', 'JC', 'JH', 'JS', 'JD', 'QC', 'QH',
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

//declare some global variables
let clonedCards = [];

let missingCard;

//let's create each game, keeping it super dry
//well, i had a deadline so here ya go..
function club() {
    clonedCards = [...clubs];
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

function diamond() {
    clonedCards = [...diamonds];
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

function heart() {
    clonedCards = [...hearts];
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

//dry as the sahara..  have not repeated myself even once..
function spade() {
    clonedCards = [...spades];
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

function halfDeckR() {
    clonedCards = [...halfDeckRed];
    removeCard()
    $('.carousel').carousel('dispose')
    $('.carousel').carousel({
        interval: 2500
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
        interval: 2500
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
        interval: 2500
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
        interval: 2500
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
        interval: 4500
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
    //gotta console log to test game
    console.log(missingCard.join());
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
//get an integer 0-59, set farts to 8.5% or 1 in 12 clicks
//use modulus to confuse user on why a random fart?
//that old gag...
function guessCard(card) {
    let date = new Date();
    let sec = date.getSeconds();
    console.log(sec);
    if (missingCard == card) {
        document.querySelector("#mariowin").play();
    }
    else if (sec % 3 === 0) {
        document.querySelector("#donkeykong").play();
    }
    else if (sec % 5 === 0) {
        document.querySelector("#mario").play();
    }
    else if (sec % 13 === 0) {
        document.querySelector("#fart1").play();
    }
    else if (sec % 17 === 0) {
        document.querySelector("#fart2").play();
    }
    else {
        document.querySelector("#pacman").play();
    }
    
}
//teach user what a losing sound is
function click1() {
    let date = new Date();
    let sec = date.getSeconds();
    if (sec % 3 === 0) {
        document.querySelector("#pacman").play();
    }
    else if (sec % 5 === 0) {
        document.querySelector("#mario").play();
    }
    else {
        document.querySelector("#donkeykong").play();
    }
}
//teach user what a winning sound is
function hiclick() {
    document.querySelector("#mariowin").play();
}
//new game
function restart() {
    location.reload(true);
}

function hello() {
    let date = new Date();
    let hour = date.getHours();
    console.log(hour);
    if (hour === 14) {
        document.getElementById("hello").innerHTML = "Play TromCards before 3pm or else...";
    }
    else if (hour === 15) {
        document.getElementById("hello").innerHTML = "It's a beautiful day for a game of TromCards...";
    }
    else if (hour === 16) {
        document.getElementById("hello").innerHTML = "Work will be over soon,, kill some time with TromCards";
    }
    else if (hour === 17) {
        document.getElementById("hello").innerHTML = "Quick game of TromCards before dinner time?";
    }
    else if (hour === 18) {
        document.getElementById("hello").innerHTML = "Click Hearts if you love TromCards";
    }
    else if (hour === 19) {
        document.getElementById("hello").innerHTML = "Would be great to play TromCards before 8...";
    }
    else if (hour === 20) {
        document.getElementById("hello").innerHTML = "Nothing on TV, let's play TromCards!";
    }
    else if (hour === 21) {
        document.getElementById("hello").innerHTML = "Fun fact: 99% of people can not beat fulldeck TromCards";
    }
    else if (hour === 22) {
        document.getElementById("hello").innerHTML = "Boy, I'm getting tired... quick game of TromCard before bed?";
    }
    else if (hour === 23) {                            
        document.getElementById("hello").innerHTML = "The day is almost over, don't go to bed until you beat TromCards";
    }
    else if (hour === 0) {
        document.getElementById("hello").innerHTML = "Someone's enjoying some late night TromCards :)";
    }
    else if (hour === 1) {
        document.getElementById("hello").innerHTML = "You're quite the night owl, and TromCards is quite addictive";
    }
    else if (hour === 2) {
        document.getElementById("hello").innerHTML = "Don't you have to work tomorrow? Oh well,, quick game of TromCards?";
    }
    else if (hour === 3) {
        document.getElementById("hello").innerHTML = "Hmmm... TromCards this late??  I would NOT tell you doctor about this";
    }
    else if (hour === 4) {
        document.getElementById("hello").innerHTML = "ZZZZZZZ¸¸¸¸¸¸¸ŹŹŹŹŹŹŹŹ¸¸¸¸¸¸¸ŽŽŽŽŽŽ¸¸¸¸¸¸¸zzzzzzzzzz";
    }
    else if (hour === 5) {
        document.getElementById("hello").innerHTML = "Play TromCards, hit snooze, repeat,,,,,";
    }
    else if (hour === 6) {
        document.getElementById("hello").innerHTML = "Good morning! It's a brand new day.  Make it a TromCards day!";
    }
    else if (hour === 7) {
        document.getElementById("hello").innerHTML = "Don't forget your phone, BUT you can always play TromCards on laptop";
    }
    else if (hour === 8) {
        document.getElementById("hello").innerHTML = "Do OR Don't play TromCards while you are driving to work?";
    }
    else if (hour === 9) {
        document.getElementById("hello").innerHTML = "Nothing will get done till at least 10am,,, might as well play some TromCards";
    }
    else if (hour === 10) {
        document.getElementById("hello").innerHTML = "I hope your day is going well.  How bout some TromCards!";
    }
    else if (hour === 11) {
        document.getElementById("hello").innerHTML = "Beat one of the 9 TromCard decks before lunch --> Brag to friends";
    }
    else if (hour === 12) {
        document.getElementById("hello").innerHTML = "I'll have a turkey sandwich, french onion soup, and a side of TromCards";
    }
    else {
        document.getElementById("hello").innerHTML = "Welcome to TromCards!";
    }

}

hello();







