function playGame(playerInput) {

    function getMoveName(numberChoice) {
        if (numberChoice == 1) return 'kamień';
        else if (numberChoice == 2) return 'papier';
        else if (numberChoice == 3) return 'nożyce';
    }

    function displayResult(argComputerMove, argPlayerMove) {

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

    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
}    
document.getElementById('play-rock').addEventListener('click', function () {
    printMessage('Zagrałeś kamień!');
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    printMessage('Zagrałeś papier!');
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    printMessage('Zagrałeś nożyce!');
    playGame(3);
});


