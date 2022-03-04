window.onload = () => {
    
    
    const player1 = {
        name: prompt("Please enter your name", "Player1"),
        position: 1

    };

    const player2 = {
        name: prompt("Please enter your name", "Player2"),
        position: 1

    };

    const rollDice = () => {
        return Math.floor(Math.random() * 11) + 2;
    };

    const movePlayer = (dice) => {
        let holder = currentPlayer.position
        let newPosition = holder += dice;
        
      const myInterval =  setInterval(function() {
            document.querySelector(`#p${currentPlayer.position}`).innerHTML = "";
        currentPlayer.position++;
        console.log(currentPlayer.position);
        console.log(newPosition);
        
        if (currentPlayer == player1) {
            document.querySelector(`#p${currentPlayer.position}`).innerHTML = currentPlayer.name;
        } else if (currentPlayer == player2) {
            document.querySelector(`#p${currentPlayer.position}`).innerHTML = currentPlayer.name;
        }
       
        if (currentPlayer.position == newPosition) {
            clearInterval(myInterval);
        }
            
        
        
        }
        
        , 300);

        
        

        
    };


    const updateTurn = () => {
        if( document.querySelector('#name').innerHTML == player1.name){ 
            document.querySelector('#name').innerHTML = player2.name;
            currentPlayer = player2;
        } else {
            document.querySelector('#name').innerHTML = player1.name;
            currentPlayer = player1;
        }
       
};




    let currentPlayer = player1.name;
    document.querySelector('#name').innerHTML = currentPlayer;
    


    document.querySelector('#roll').onclick = () => {
        let dice = rollDice();
        updateTurn();
        movePlayer(dice);
        document.querySelector('#diceresult').innerHTML = dice;
        
    };
    

    
};