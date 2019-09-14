// Rock Paper Scissors Game
// Multiplayer
// Firebase to handle data

// configure to firebase app
var firebaseConfig = {
    apiKey: "AIzaSyB7v_YXzejAGiRI4PEapvdqsKEDqO5oTVw",
    authDomain: "rps-multiplayer-33307.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-33307.firebaseio.com",
    projectId: "rps-multiplayer-33307",
    storageBucket: "rps-multiplayer-33307.appspot.com",
    messagingSenderId: "854193762223",
    appId: "1:854193762223:web:f2ff8a1c1b7bbb559c495a"
};

// intialise the app to web app
// firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
// var database = firebase.database();

var playerName;
var opponentName = "player 2";

window.onload = function() {


    // function get username and set on page
    $("#addName").on("click", function(event) {
        event.preventDefault(); // Don't refresh the page!

        playerName = $("#username").val().trim(); // get username
        var usernameDisplay = $("<h2><span class='bg-highlight text-center pl-4 pr-4'>" + playerName + "</span></h2>");

        $("form").empty();
        $("#addUseText").html(usernameDisplay);

        setTimeout(waitToStartGame, 1000);

        function waitToStartGame() {
            $("#waitingScreen").addClass("d-none");
            $("#gameScreen").removeClass("d-none").addClass("d-block");
        }

        displayVSName();
    });

    // function display versus name
    function displayVSName() {
        console.log(playerName);
        $("#playerName1").append("<h1 class='text-white'>" + playerName + "</h1>");
        $("#playerName2").append("<h1 class='text-white'>" + opponentName + "</h1>");
    }

}

// didYouWin is called after both players have made their selections. It takes your choice and your opponent's choice as arguments.
function didYouWin(yourRPS, opponentRPS) {

    // Run traditional rock, paper, scissors logic and return whether you won, lost, or had a draw.
    switch (yourRPS) {
        case 'rock':
            switch (opponentRPS) {
                case 'rock':
                    return 'draw';
                case 'paper':
                    return 'lose';
                case 'scissors':
                    return 'win';
            }
            break;
        case 'paper':
            switch (opponentRPS) {
                case 'rock':
                    return 'win';
                case 'paper':
                    return 'draw';
                case 'scissors':
                    return 'lose';
            }
            break;
        case 'scissors':
            switch (opponentRPS) {
                case 'rock':
                    return 'lose';
                case 'paper':
                    return 'win';
                case 'scissors':
                    return 'draw';
            }
            break;
    }
}