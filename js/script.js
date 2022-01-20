function playGame(playerInput) {
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    /*if(randomNumber == 1){
      computerMove = 'kamień'; 
    } else if (randomNumber == 2) {
    computerMove = 'papier';
    } else if (randomNumber == 3) {
        computerMove = 'nożyce';
    printMessage('Mój ruch to: ' + computerMove);
    }*/

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(randomNumber);

    /*if(playerInput == '1'){
      argPlayerMove = 'kamień';
    } else if (playerInput == 2) {
        argPlayerMove = 'papier';
    } else if (playerInput == 3) {
        argPlayerMove = 'nożyce';
        printMessage('Mój ruch to: ' + argPlayerMove);
    } else {
         printMessage('Nieznany ruch')
        }*/

    function getMoveName(randomNumber)
    if (randomNumber == 1) {
        getMoveName = 'kamień';
    } else if (randomNumber == 2) {
        getMoveName = 'papier';
    } else if (randomNumber == 3) {
        getMoveName = 'nożyce';
    } else {
        printMessage('Nieznany ruch')
    }

    function displayResult(argComputerMove, argPlayerMove)
    console.log('moves:', argComputerMove, argPlayerMove);
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }

    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Komputer wygrywa!');
    }

    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }

    if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Komputer wygrywa!');
    }

    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }

    if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Komputer wygrywa!');
    }

    if (argComputerMove == argPlayerMove) {
        printMessage('Macie remis!');
    }
}
document.getElementById('play-rock').addEventListener('click', function () {
    printMessage('Zagrałeś kamień!');
});

document.getElementById('play-paper').addEventListener('click', function () {
    printMessage('Zagrałeś papier!');
});

document.getElementById('play-scissors').addEventListener('click', function () {
    printMessage('Zagrałeś nożyce!');
});


