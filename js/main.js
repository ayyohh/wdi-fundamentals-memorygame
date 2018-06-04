console.log("Up and running!");

// array to hold cards and cards in play
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
    },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];

var cardsInPlay = [];


//function checks for match between cards
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again");
  }
};


var flipCard = function() {
    var cardID = this.getAttribute('data-id');

  console.log("User flipped " + cards[cardID].rank);
  console.log("User flipped " + cards[cardID].suit);
  console.log("User flipped " + cards[cardID].cardImage);
  cardsInPlay.push(cards[cardID].rank);

  this.setAttribute('src', cards[cardID].cardImage);

  // have 2 cards been picked? are they equal or naw?
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
  else {
    alert("Pick another card");
  }
};

//function that creates game board
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};
//calls the flipCard function
createBoard();
