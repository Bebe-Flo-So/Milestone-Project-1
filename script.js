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
 attemptsHolder.textContent = attempts;
 foundHolder.textContent = foundCards;

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
    if(chosenCards.length != 2){
     var cardid = this.getAttribute('data-id');
    if(this.getAttribute('src') !='assets/dots.jpg'){
        chosenCards.push(cardsList[cardId].name);
        chosenCardsIds.push(cardId);
        this.setAttribute('src', cardsList[cardId].image);
        if(chosenCards.length == 2){
            setTimeout(checkForMatch, 400);
        }
    }

}    
}
   
function checkForMatch(){
    attempts++;
    var cards = document.querySelectorAll('img');
    var firstCard = chosenCardsIds[0];
    var secondCard = chosenCardsIds[1];
    if(chosenCards[0] ==chosenCards[1]){
        foundCards++;
        foundCards[firstCard].setAttribute('src','images')

    }
}

 initiateBoard();
 
})