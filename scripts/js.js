window.onload = () => {
    
    //These two objects are the players, they has two properties, name and current position
    const player1 = {
        name: prompt("Please enter your name", "Player1"), //When the screen loads, the playes will be asked to give their names
        position: 1

    };

    const player2 = {
        name: prompt("Please enter your name", "Player2"),
        position: 1

    };

    //This is the roll dice function, it returns a number between 2 and 12
    const rollDice = () => {
        return Math.floor(Math.random() * 11) + 2; 
    };

    const movePlayer = (dice) => {
        console.log(dice);
        let holder = currentPlayer.position;
        document.querySelector(`#p${holder}`).innerHTML = "";
        let newPosition = holder += dice;
        currentPlayer.position = newPosition;

        if (currentPlayer.position >= 100) {
            alert(`${currentPlayer.name} is the winner!`);
            location.reload();
        }
      
        
        
        if (currentPlayer == player1) {
            document.querySelector(`#p${newPosition}`).innerHTML = currentPlayer.name;
        } else if (currentPlayer == player2) {
            document.querySelector(`#p${newPosition}`).innerHTML = currentPlayer.name;
        }
       
       risk(newPosition);
    };

    //This function is called after the player has moved. It tells if the player has landed on a snake head or at the bottom of a ladder
    const risk = (newPosition) => {
        switch (newPosition) {
            case 4:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(25);
            break;

            case 13:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(46);
            break;

            case 42:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(63);
            break;

            case 33:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(49);
            break;

            case 50:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(69);
            break;

            case 62:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(81);
            break;

            case 74:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(92);
            break;

            case 27:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(5);
            break;

            case 40:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(3);
            break;

            case 43:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(18);
            break;

            case 54:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(31);
            break;

            case 66:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(45);
            break;

            case 76:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(58);
            break;

            case 89:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(53);
            break;

            case 99:
            document.querySelector(`#p${newPosition}`).innerHTML = "";
            moveToPosition(99);
            break;
        }
    };

    //This function updates the position property of the player
    const moveToPosition = (newPosition) => {
        currentPlayer.position = newPosition;
        if (currentPlayer == player1) {
            document.querySelector(`#p${newPosition}`).innerHTML = currentPlayer.name;
        } else if (currentPlayer == player2) {
            document.querySelector(`#p${newPosition}`).innerHTML = currentPlayer.name;
        }
    };


    //This function updates the player turn, it also changes the innerHTML which represents the current player who has to play
    const updateTurn = () => {
        if( document.querySelector('#name').innerHTML == player1.name){ 
            document.querySelector('#name').innerHTML = player2.name;
            currentPlayer = player2;
        } else {
            document.querySelector('#name').innerHTML = player1.name;
            currentPlayer = player1;
        }

        if(document.querySelector('#name').innerHTML == player1.name) {
            document.querySelector('#next').innerHTML = player2.name;
        } else {
            
            document.querySelector('#next').innerHTML = player1.name;
            
        }
       
};




    let currentPlayer = player1.name;
    document.querySelector('#name').innerHTML = currentPlayer;
    document.querySelector('#next').innerHTML = player2.name;


    document.querySelector('#roll').onclick = () => {
        let dice = rollDice();
        updateTurn();
        movePlayer(dice);
        document.querySelector('#diceresult').innerHTML = dice;
        
    };
    

    
};