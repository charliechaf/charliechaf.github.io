var game_log = {
	player1: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player2: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player3: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player4: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player5: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player6: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	}
};


$("#playerSubmit").click(function(){

	playerArray = [];
	game_log.player1.name = $('#Player1Name[type="text"]').val();
	game_log.player2.name = $('#Player2Name[type="text"]').val();
	game_log.player3.name = $('#Player3Name[type="text"]').val();
	game_log.player4.name = $('#Player4Name[type="text"]').val();
	game_log.player5.name = $('#Player5Name[type="text"]').val();
	game_log.player6.name = $('#Player6Name[type="text"]').val();


	playerArray.push(game_log.player1.name,game_log.player2.name,game_log.player3.name,game_log.player4.name,game_log.player5.name,game_log.player6.name);
	playerArray = playerArray.filter(function(n){ return n != n.length >0 });

	if (playerArray.length <2){
		alert("Whoa. You need at least 2 players.")
	}
	else {
        $("#player1").prop('value', game_log.player1.name);
        $("#player2").prop('value', game_log.player2.name);
        $("#player3").prop('value', game_log.player3.name);
        $("#player4").prop('value', game_log.player4.name);
        $("#player5").prop('value', game_log.player5.name);
        $("#player6").prop('value', game_log.player6.name);

        addFields();
	}
})


var round = 1

function addingScores () {

    if (ActiveUser == "player1"){
    game_log.player1.guesses[round-1] = parseInt($("#playerGuess").val());
	game_log.player1.wins[round-1] = parseInt($("#playerWins").val());
    }
    else if (ActiveUser == "player2"){
        game_log.player2.guesses[round-1] = parseInt($("#playerGuess").val());
    	game_log.player2.wins[round-1] = parseInt($("#playerWins").val());
    }
    else if (ActiveUser == "player3"){
        game_log.player3.guesses[round-1] = parseInt($("#playerGuess").val());
        game_log.player3.wins[round-1] = parseInt($("#playerWins").val());
    }
    else if (ActiveUser == "player4"){
        game_log.player4.guesses[round-1] = parseInt($("#playerGuess").val());
        game_log.player4.wins[round-1] = parseInt($("#playerWins").val());
    }
    $('#playerGuess').val('');
    $('#playerWins').val('');
    $("#playerGuess").focus();
};

function addFields(){
    var number = playerArray.length;
    var r= $('<input type="button" value="new button"/>');
        for (i=0;i<number;i++){
            console.log(i)
            $(".sidebar").append(r);
        };
//    var container = document.getElementById("playerGuesses");
//    while (container.hasChildNodes()) {
//        container.removeChild(container.lastChild);
//    }
//    for (i=0;i<number;i++){
//        container.appendChild(document.createTextNode(playerArray[i]));
//        m = container.appendChild(document.createElement("br"));
//        var input = document.createElement("input");
//        input.type = "number";
//        input.setAttribute("id", "GuessInput"+i);
//        // alert(input.id);
//        container.appendChild(input);
//        x = container.appendChild(document.createElement("br"));
};


console.log("page loaded")

var ActiveUser = "player1"

$("#player1").click(function(){
    addingScores();
    ActiveUser = this.id
});


$("#player2").click(function(){
    addingScores();
    ActiveUser = this.id
});

$("#player3").click(function(){
    addingScores();
    ActiveUser = this.id
});

$("#player4").click(function(){
    addingScores();
    ActiveUser = this.id
});

$("#nextRound").click(function(){
    addingScores();
    round = round+1
    var ActiveUser = "player1"
})




var game_log = {
	player1: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player2: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player3: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player4: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player5: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	},
	player6: {
		name: "",
		wins:[],
		guesses:[],
		score:[]
	}
};