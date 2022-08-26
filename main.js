// Declaring all used Variables
gameBoard = document.querySelectorAll('div.box')
resetButton = document.querySelector('button.reset')
startButton = document.querySelector('button.start')
amountOfDraw = document.querySelector('h2.drawScore')
drawScore = 0
amountOfXwins = document.querySelector('h2.xScore')
xScore = 0
amountofOwins = document.querySelector('h2.oScore')
oScore = 0
var clickCounter = 1
var X = 'X'
var O = 'O'
var playerTurn = X
var isGameOver = false
var sound = new Audio("clicksound.mp3")
winnerTitle = document.querySelector('h2.winner')
changingScoreX = document.querySelector('span.xSpan')
changingScoreO = document.querySelector('span.oSpan')
changingScoreDraw = document.querySelector('span.drawSpan')


// button to Reset board using a for loop to iterate over every square and resetting them, Also resets necessary variables to initial value
resetButton.addEventListener('click', function(event){
    for(let k = 0; k < gameBoard.length; k++){
            clickCounter = 1
            console.log(gameBoard[k].textContent = '')
            winnerTitle.textContent = ''
            isGameOver = false
            gameBoard[k].style.color = 'black'
        }

}) 

// button to restart game, clears whole board with for loop, redeclares all variables to starting values
startButton.addEventListener('click', function(event){
    for(let k = 0; k < gameBoard.length; k++){
            clickCounter = 1
            oScore = 0
            xScore = 0
            drawScore = 0
            console.log(gameBoard[k].textContent = '')
            changingScoreDraw.textContent = 0
            changingScoreO.textContent = 0
            changingScoreX.textContent = 0
            winnerTitle.textContent = ''
            isGameOver = false
            gameBoard[k].style.color = 'black'
    }
})

// Sees whos turn it is using modulus function. Also checks to see if game is over before inputting 
for(let i = 0; i < gameBoard.length; i++){
    gameBoard[i].addEventListener('click', function (){
        if(clickCounter % 2 == 0 && gameBoard[i].textContent == '' && isGameOver === false){
            sound.volume = 0.2
            sound.currentTime = 0
            sound.play()
            clickCounter = parseInt(clickCounter) + 1
            playerTurn = X
            var xSelect = event.target
            xSelect.textContent = X
            xSelect.style.opacity = 1

        } else if(clickCounter % 2 == 1 && gameBoard[i].textContent == '' && isGameOver === false){
            sound.volume = 0.2
            sound.currentTime = 0;
            sound.play();
            clickCounter = parseInt(clickCounter) + 1
            playerTurn = O
            var oSelect = event.target
            oSelect.textContent = O
            oSelect.style.opacity = 1
        }
        // If statements to check all possible win/draw conditions. 
        if(gameBoard[0].textContent === 'X' && gameBoard[1].textContent === 'X' && gameBoard[2].textContent === 'X' && isGameOver === false){
            gameBoard[0].style.color = '#e46e6e'
            gameBoard[1].style.color = '#e46e6e'
            gameBoard[2].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore 
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
                            
        }
        else if(gameBoard[3].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[5].textContent === 'X' && isGameOver === false){
            gameBoard[3].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[5].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
                
        }
        else if(gameBoard[6].textContent === 'X' && gameBoard[7].textContent === 'X' && gameBoard[8].textContent === 'X' && isGameOver === false){
            gameBoard[6].style.color = '#e46e6e'
            gameBoard[7].style.color = '#e46e6e'
            gameBoard[8].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
            
        }
        else if(gameBoard[0].textContent === 'X' && gameBoard[3].textContent === 'X' && gameBoard[6].textContent === 'X' && isGameOver === false){
            gameBoard[0].style.color = '#e46e6e'
            gameBoard[3].style.color = '#e46e6e'
            gameBoard[6].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
            
        }
        else if(gameBoard[1].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[7].textContent === 'X' && isGameOver === false){
            gameBoard[1].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[7].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
            
        }
        else if(gameBoard[2].textContent === 'X' && gameBoard[5].textContent === 'X' && gameBoard[8].textContent === 'X' && isGameOver === false){
            gameBoard[2].style.color = '#e46e6e'
            gameBoard[5].style.color = '#e46e6e'
            gameBoard[8].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
            
        }
        else if(gameBoard[0].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[8].textContent === 'X' && isGameOver === false){
            gameBoard[0].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[8].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
            
        }
        else if(gameBoard[2].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[6].textContent === 'X' && isGameOver === false){
            gameBoard[2].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[6].style.color = '#e46e6e'
            xScore = xScore + 1
            changingScoreX.textContent = xScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
            
        }
        else if(gameBoard[0].textContent === 'O' && gameBoard[1].textContent === 'O' && gameBoard[2].textContent === 'O' && isGameOver === false){
            gameBoard[0].style.color = '#e46e6e'
            gameBoard[1].style.color = '#e46e6e'
            gameBoard[2].style.color = '#e46e6e'
            oScore = oScore + 1
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 2 wins'
            isGameOver = true
            
        }
        else if(gameBoard[3].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[5].textContent === 'O' && isGameOver === false){
            gameBoard[3].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[5].style.color = '#e46e6e'
            oScore = oScore + 1
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 1 wins'
            isGameOver = true
            
        }
        else if(gameBoard[6].textContent === 'O' && gameBoard[7].textContent === 'O' && gameBoard[8].textContent === 'O' && isGameOver === false){
            gameBoard[6].style.color = '#e46e6e'
            gameBoard[7].style.color = '#e46e6e'
            gameBoard[8].style.color = '#e46e6e'
            oScore = oScore + 1
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 1 wins'
            isGameOver = true
            
        }
        else if(gameBoard[0].textContent === 'O' && gameBoard[3].textContent === 'O' && gameBoard[6].textContent === 'O' && isGameOver === false){
            oScore = oScore + 1
            gameBoard[0].style.color = '#e46e6e'
            gameBoard[3].style.color = '#e46e6e'
            gameBoard[6].style.color = '#e46e6e'
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 1 wins'
            isGameOver = true
            
        }
        else if(gameBoard[1].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[7].textContent === 'O' && isGameOver === false){
            gameBoard[1].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[7].style.color = '#e46e6e'
            oScore = oScore + 1
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 1 wins'
            isGameOver = true
            
        }
        else if(gameBoard[2].textContent === 'O' && gameBoard[5].textContent === 'O' && gameBoard[8].textContent === 'O' && isGameOver === false){
            gameBoard[2].style.color = '#e46e6e'
            gameBoard[5].style.color = '#e46e6e'
            gameBoard[8].style.color = '#e46e6e'
            oScore = oScore + 1
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 1 wins'
            isGameOver = true
            
        }
        else if(gameBoard[0].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[8].textContent === 'O' && isGameOver === false){
            gameBoard[0].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[8].style.color = '#e46e6e'
            oScore = oScore + 1
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 1 wins'
            isGameOver = true
            
        }
        else if(gameBoard[2].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[6].textContent === 'O' && isGameOver === false){
            gameBoard[2].style.color = '#e46e6e'
            gameBoard[4].style.color = '#e46e6e'
            gameBoard[6].style.color = '#e46e6e'
            oScore = oScore + 1
            changingScoreO.textContent = oScore
            winnerTitle.textContent = 'Player 1 wins'
            isGameOver = true
            
            //game displays draw if amount of clicks is equal to 10
        } else if((clickCounter === 10) && (isGameOver === false)){
            drawScore = drawScore + 1
            changingScoreDraw.textContent = drawScore
            winnerTitle.innerHTML = 'DRAW'
            isGameOver = true
            
        }
    })
}
//creates hover function using mouseover event listener
for(let i = 0; i < gameBoard.length; i++){
  gameBoard[i].addEventListener('mouseover', function(){
    if(clickCounter % 2 == 0 && gameBoard[i].textContent == '' && isGameOver === false){
        gameBoard[i].style.backgroundImage = "url('./x3.png')"
        gameBoard[i].style.opacity = 0.3
    }else if(clickCounter % 2 == 1 && gameBoard[i].textContent == '' && isGameOver === false){
        gameBoard[i].style.backgroundImage = "url('./o2.jpg')"
        gameBoard[i].style.opacity = 0.3
    }
        gameBoard[i].addEventListener('mouseout', function(){
        gameBoard[i].style.backgroundImage = ""
        gameBoard[i].style.opacity = 1
        }) 
    })
}
