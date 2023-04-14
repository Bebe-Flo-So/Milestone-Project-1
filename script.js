document.addEventListener('DOMContentLoaded', () => {

 const cardsList = [ =];
    {
        name: 'bee',
        image: 'assets/bee.jpg'
    },
    {
        name: 'bee',
        image: 'assets/bee.jpg'
    },
    {
        name: 'butterfly',
        image: 'assets/butterfly.jpg'
    },
    {
        name: 'butterfly',
        image: 'assets/butterfly.jpg'
    },
    {
        name: 'flower',
        image: 'assets/flower.jpg'
    },
    {
        name: 'flower',
        image: 'assets/flower.jpg'
    },
    {
        name: 'hummingbird',
        image: 'assets/hummingbird.jpg'
    },
    {
        name: 'hummingbird',
        image: 'assets/hummingbird.jpg'
    },
    {
        name: 'ladybug',
        image: 'assets/ladybug.jpg'
    },
    {
        name: 'ladybug',
        image: 'assets/ladybug.jpg'
    }
 ];

 cardsList.sort( () => 0.5 - Math.random() );
 
 const grid = document.querySelector('.game-grid');
 const attemptsHolder = document.querySelector('.attemtsHolder');
 const foundHolder = document.querySelector('.foundHolder');
 const cardsInGame = 10;

 var attempts = 0;
 var foundCards = 0;

 var chosenCards = [];
 var chosenCardsIds = [];

 function initiateBoard(){
    for (var i = 0; i < cardsList.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/dots.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }

 }

 function flipCard(){



 }

 initiateBoard();
 
})