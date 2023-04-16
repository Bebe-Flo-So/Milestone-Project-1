document.addEventListener('DOMContentLoaded', () => {

 const cardsList = [
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
 const grid = document.querySelector('.gameGrid');
 const attemptsHolder = document.querySelector('.attemptsHolder');
 const foundHolder = document.querySelector('.foundHolder');
 const cardsInGame = 5;

 let attempts = 0;
 let foundCards = 0;
 attemptsHolder.textContent = attempts;
 foundHolder.textContent = foundCards;

 let chosenCards = [];
 let chosenCardsIds = [];

 function initiateBoard(){
    for (let i = 0; i < cardsList.length; i++) {
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
    if(this.getAttribute('src') != 'assets/whitesquares.jpg'){
        chosenCards.push(cardsList[cardid].name);
        chosenCardsIds.push(cardid);
        this.setAttribute('src', cardsList[cardid].image);
        if(chosenCards.length == 2){
            setTimeout(checkForMatch, 400);
        }
    }

}    
}
   
function checkForMatch(){
    attempts++;
    let cards = document.querySelectorAll('img');
    let firstCard = chosenCardsIds[0];
    let secondCard = chosenCardsIds[1];
    if(chosenCards[0] == chosenCards[1]){
        foundCards++;
        cards[firstCard].setAttribute('src','assets/whitesquare.jpg');
        cards[secondCard].setAttribute('src', 'assets/whitesquare.jpg');
    }else{
        cards[firstCard].setAttribute('src','assets/dots.jpg');
        cards[secondCard].setAttribute('src', 'assets/dots.jpg');

    }
    chosenCards = [];
    chosenCardsIds = [];
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;
    if(foundCards === cardsInGame) {
        alert('Great Job')
    }

}




 initiateBoard();
 
})