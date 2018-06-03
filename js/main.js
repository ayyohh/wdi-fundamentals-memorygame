console.log("Up and running!");




// array to hold cards and cards in play
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


//function checks for match between cards
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again");
  }
}


var flipCard = function(cardID) {

  console.log("User flipped " + cards[cardID]);
  cardsInPlay.push(cards[cardID]);

  // have 2 cards been picked? are they equal or naw?
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
  else {
    alert("Pick another card");
  }

}
//calls the flipCard function
flipCard();
