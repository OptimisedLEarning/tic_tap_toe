//I used HTML DOM features to process the elements 
// I use in HTML via JavaScript.


//To get to the div with the id of board and
// the div with the class square in the HTML file, 
//I got them by assigning them to the variables 
//with the corresponding DOM tags.

//I created a series called “players” for the game. 
//The elements of the array are X and O.
//Since X was the first to start the game, 
//I assigned players[0] to the currentPlayer variable.


const board = document.getElementById('board')

const squares = document.getElementsByClassName('square')

const players = ['X', 'O']

let currentPlayer = players[0]

// the game state will be printed on the screen
// with the endMessage variable,
//provided that certain conditions are met

const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign='center'
board.after(endMessage)


/*To see the end of the game, 
a message must be printed on the screen 
when the necessary conditions are met. 
For this reason, 
I assigned the h2 tag to the endMessage variable 
so that it can be seen in the HTML document. 
It will print the message 
as a result of the operations performed on the div 
whose id is board using the after function. 
We can print text to the variable with the help of textContent. ‘X’s turn!’ I printed it. I added styles to the tag I created.
*/

const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign='center'
board.after(endMessage)

var someoneWon = false;

/*I have defined the win states of the game in an array.*/
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*I’ve created functions to provide the necessary controls.
I created a function called checkWin 
to check the win status of the game. 

When one of the states in the array is satisfied, 
the relevant player will win the game.*/

function checkWin(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}


/*I created a function called checkTie 
to check the draw status. 
I controlled the texts in all the created frames 
through the for loop. 

This way, the function returns true when all are full 
and no winning status is met.*/

function checkTie(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
}

/*I created a function called “restartButton” 
to reset the actions when the game is restarted. 
We assign the values in the square to “”. 

Then I assigned the message 
that the game will show at the beginning 
to endMessage.textContent. 

I have assigned the default player to X again.*/
function restartButton() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endMessage.textContent=`X's turn!`
    currentPlayer = players[0]
}


/*
I used it in the for loop 
to check the generated functions in the game. 

In this loop, when each frame is clicked, 
the game state will be printed on the screen
 with the endMessage variable, 
 provided that certain conditions are met. 

 I did this using the addEventListener method.
*/



for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== ''){
            return
        }
        squares[i].textContent = currentPlayer
        if(checkWin(currentPlayer)) {
            endMessage.textContent=`Game over! ${currentPlayer} wins!`
            return
        }
        if(checkTie()) {
            endMessage.textContent= `Game is tied!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        if(currentPlayer == players[0]) {
            endMessage.textContent= `X's turn!`
        } else {
            endMessage.textContent= `O's turn!`
        }     
    })   
}