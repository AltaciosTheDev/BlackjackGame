//Declare initial variables that are necessary to have initial conditioons 
let message = ''
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let player = {
    name: 'Enzo Altamirano',
    coin: 500   
}
//Declare variables that will store DOM elements 
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let playerEL = document.getElementById('player-el')

//Just use the player object to fill the player element 
playerEL.textContent = player.name + ': $' + player['coin']


// Functions: 1)random 2)start game 3)render game 4)new card 


//Declaring getRandomCard Function -> function needs to return the random number that will be stored in the card 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1    
//If conditionals to hard modify the values that the function will return.  
    if(randomNumber > 10){          //Ace(1) = 11, 
        return 10 
    }
    else if(randomNumber === 1){   //jack,queen,king(11,12,13) = 10 
        return 11 
    }
    else{
        return randomNumber        //Any other number will return randomNumber normally 
    }
}

//Declare function startGame -> function needs to store the cards values,sum, and change states
function startGame(){
    isAlive = true                      //state changes to true b/c game started
    let firstCard = getRandomCard()     //create variable to store randomCard in firstCard
    let secondCard = getRandomCard()    //create variable to store randomCard in secondCard
    cards = [firstCard, secondCard]     //Array cards will store the first 2 cards generated
    sum = firstCard + secondCard        //Sum will sum up the first 2 cards generated
    renderGame()
}

//Declare function renderGame -> function needs to change all the elements of the DOM
function renderGame(){
    //RENDER MESSAGE
        //Different conditions to render message 
        if(sum<21){
            message = "Do you want to draw a new card?"
        }
        else if(sum===21){
            message = "You have got blackjack! :)"
            hasBlackJack = true
        }
        else{
            message = "You are out of the game! :("
            isAlive = false
        }
        messageEl.textContent = message
    
    //RENDER CARDS
        //Render the inital content in cards element
        cardsEl.textContent = 'Cards:'
        //Iterate with a for loop ver the array of cards to render each card in the DOM 
        for(let i=0; i<cards.length;i++){
            cardsEl.textContent += ' ' + cards[i] + ' '
        }
    
    //RENDER SUM  
        //Render the sum content in sum element 
        sumEl.textContent = 'Sum: ' + sum
    
}

//Declare function New Card ->  function needs to draw need card, modify array, modify sum but only activate on certain conditions 
function newCard(){
    //newCard function will only be able to be invoked if player is alive and with no jackpot
    if(isAlive == true && hasBlackJack==false){
        let card = getRandomCard() //generate new randomCard
        cards.push(card)           //push new card to the array 
        sum += card               //add new card to the sum 
        renderGame()              //with these changes, render the game once more
    }
}
