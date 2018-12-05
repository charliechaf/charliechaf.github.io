


$("#test").click(function(){
		var x =$(window).height();
    	var y = $(window).scrollTop();  //your current y position on the page
$(window).scrollTop(1500);
// alert('hi');
});

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};


var options = {
  valueNames: [ 'name', 'wins', 'guesses', 'score' ]
};

var userList = new List('users', options, headers);

var headers = [ {
  name: "Name",
  wins: "Win Log",
  guesses: "Guess Log",
  score: "Score"
}];


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

// document.getElementById("demo").innerHTML = game_log.player1;


function addFields(){
    var number = playerArray.length;
    var container = document.getElementById("playerGuesses");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("{0}'s Guess:".format(playerArray[i])));
        var input = document.createElement("input");
        input.type = "number";
        input.setAttribute("id", "GuessInput"+i);
        // alert(input.id);
        container.appendChild(input);
        x = container.appendChild(document.createElement("br"));
    }
};

function addWinFields(){
    var number = playerArray.length;
    var container = document.getElementById("playerWins");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){
        container.appendChild(document.createTextNode("{0}'s Wins:".format(playerArray[i])));
        var input = document.createElement("input");
        input.type = "number";
        input.setAttribute("id", "WinInput"+i);
        // alert(input.id);
        container.appendChild(input);
        x = container.appendChild(document.createElement("br"));
    }
};


function add(a, b) {
    return a + b;
}

function updateTable(){
	userList.clear();
	userList.add(headers);
	userList.add(game_log.player1);
	userList.add(game_log.player2);
	userList.add(game_log.player3);
	userList.add(game_log.player4);
	userList.add(game_log.player5);
	userList.add(game_log.player6);
	userList.remove("name", "");
}

function calculateScore(){
	var score = 0;
	var tempScore = 0;
	// var keys = Object.keys(game_log);

	// for (var i = keys.length - 1; i >= 0; i--) {
	// 	console.log(keys)
	// };

	for (var i = game_log.player1.guesses.length - 1; i >= 0; i--) {
	 	if (game_log.player1.guesses[i] == game_log.player1.wins[i]){
	 		tempScore = 10 + game_log.player1.wins[i];
	 		score = tempScore+score;
	 	}
	 	else {
 			tempScore = game_log.player1.wins[i];
	 		score = tempScore+score;	
	 	}
	 };
	game_log.player1.score = score;

	var score = 0;
	var tempScore = 0;
	// var keys = Object.keys(game_log);

	// for (var i = keys.length - 1; i >= 0; i--) {
	// 	console.log(keys)
	// };

	for (var i = game_log.player2.guesses.length - 1; i >= 0; i--) {
	 	if (game_log.player2.guesses[i] == game_log.player2.wins[i]){
	 		tempScore = 10 + game_log.player2.wins[i];
	 		score = tempScore+score;
	 	}
	 	else {
 			tempScore = game_log.player2.wins[i];
	 		score = tempScore+score;	
	 	}
	 };
	game_log.player2.score = score;

	var score = 0;
	var tempScore = 0;
	// var keys = Object.keys(game_log);

	// for (var i = keys.length - 1; i >= 0; i--) {
	// 	console.log(keys)
	// };

	for (var i = game_log.player3.guesses.length - 1; i >= 0; i--) {
	 	if (game_log.player3.guesses[i] == game_log.player3.wins[i]){
	 		tempScore = 10 + game_log.player3.wins[i];
	 		score = tempScore+score;
	 	}
	 	else {
 			tempScore = game_log.player3.wins[i];
	 		score = tempScore+score;	
	 	}
	 };
	game_log.player3.score = score;

	var score = 0;
	var tempScore = 0;

	for (var i = game_log.player4.guesses.length - 1; i >= 0; i--) {
	 	if (game_log.player3.guesses[i] == game_log.player4.wins[i]){
	 		tempScore = 10 + game_log.player4.wins[i];
	 		score = tempScore+score;
	 	}
	 	else {
 			tempScore = game_log.player4.wins[i];
	 		score = tempScore+score;	
	 	}
	 };
	game_log.player4.score = score;

	var score = 0;
	var tempScore = 0;

	for (var i = game_log.player5.guesses.length - 1; i >= 0; i--) {
	 	if (game_log.player5.guesses[i] == game_log.player5.wins[i]){
	 		tempScore = 10 + game_log.player5.wins[i];
	 		score = tempScore+score;
	 	}
	 	else {
 			tempScore = game_log.player5.wins[i];
	 		score = tempScore+score;	
	 	}
	 };
	game_log.player5.score = score;

	var score = 0;
	var tempScore = 0;

	for (var i = game_log.player6.guesses.length - 1; i >= 0; i--) {
	 	if (game_log.player6.guesses[i] == game_log.player6.wins[i]){
	 		tempScore = 10 + game_log.player6.wins[i];
	 		score = tempScore+score;
	 	}
	 	else {
 			tempScore = game_log.player6.wins[i];
	 		score = tempScore+score;	
	 	}
	 };
	game_log.player6.score = score;
;

}

$("#playerSubmit").click(function(){

	playerArray = [];
	round = 1
	game_log.player1.name = $('#player1[type="text"]').val();
	game_log.player2.name = $('#player2[type="text"]').val();
	game_log.player3.name = $('#player3[type="text"]').val();
	game_log.player4.name = $('#player4[type="text"]').val();
	game_log.player5.name = $('#player5[type="text"]').val();
	game_log.player6.name = $('#player6[type="text"]').val();

	
	playerArray.push(game_log.player1.name,game_log.player2.name,game_log.player3.name,game_log.player4.name,game_log.player5.name,game_log.player6.name);
	playerArray = playerArray.filter(function(n){ return n != n.length >0 }); 

	if (playerArray.length <2){
		alert("Whoa. You need at least 2 players.")
	}
	else {
		$("#playerselectforms").css('display','none');
		$("#RoundDropdown").css('display','block');
	}

	updateTable();



})

	

$("#selectNumRounds a").click(function(e){
    selectedRounds = $(this).text();
	$(".alert-success").css('display','block');
	$("#playertable").css('display','block');
	$("#RoundDropdown").css('display','none');

	var N = playerArray.length; 
	playerCodes = Array.apply(null, {length: N}).map(Number.call, Number);
	loopingArray = [];
	loopingPlayer = [];


	for (var i = (Number(selectedRounds)*2) / Math.ceil(playerArray.length); i >= 0; i--) {
	loopingArray.push(playerCodes);
	loopingPlayer = playerArray.concat(loopingPlayer);
	
	RoundMinusOne = round-1;
	cardsDealt = Array.apply(null, {length: Number(selectedRounds)+1}).map(Number.call, Number);
	cardsDealt = cardsDealt.slice(1);
	reved = cardsDealt.slice().reverse();
	cards = reved.concat(cardsDealt);
	
	$("#RoundSummary").html("Round <span class=\"bigger\"> {0}</span>. <br> <br> {1} deal {2} cards! <br> <br> {3}, you guess first!".format(round, loopingPlayer[round-1], cards[round-1], loopingPlayer[round]));
	};

	//alert(loopingPlayer);
	$("#RoundSummary").css('display','block');
	$("#NextRound").css('display','block');
	$("#PreviousRound").css('display','block');
	$(".list").css('display','block');
	addFields();
	//alert(cardsDealed);
	
	// alert(cardsDealt2);
});


$("#playerGuesses").change(function() {
	GuessArray = [];
    for (var i = playerArray.length - 1; i >= 0; i--) {

    	if (parseInt($("#GuessInput"+i).val()) >= 0 ) {

	    	GuessArray.push(parseInt($("#GuessInput"+i).val()));

    	};
    }

    if (GuessArray.length == playerArray.length) {
    	sum = GuessArray.reduce(add, 0);
    	if (sum == cards[round-1]) {
    		alert('you can\'t guess that!');
    	}
    	else {
    		addWinFields();
    		$("#playerWins").css('display','block');

    	}
	
    }
});

// document.getElementById("demo").innerHTML = game_log[0].player2[0].wins;

function addingScores () {
	game_log.player1.guesses[round-1] = parseInt($("#GuessInput"+"0").val());
	game_log.player2.guesses[round-1] = parseInt($("#GuessInput"+"1").val());
	game_log.player3.guesses[round-1] = parseInt($("#GuessInput"+"2").val());
	game_log.player4.guesses[round-1] = parseInt($("#GuessInput"+"3").val());
	game_log.player5.guesses[round-1] = parseInt($("#GuessInput"+"4").val());
	game_log.player6.guesses[round-1] = parseInt($("#GuessInput"+"5").val());


	game_log.player1.wins[round-1] = parseInt($("#WinInput"+"0").val());
	game_log.player2.wins[round-1] = parseInt($("#WinInput"+"1").val());
	game_log.player3.wins[round-1] = parseInt($("#WinInput"+"2").val());
	game_log.player4.wins[round-1] = parseInt($("#WinInput"+"3").val());
	game_log.player5.wins[round-1] = parseInt($("#WinInput"+"4").val());
	game_log.player6.wins[round-1] = parseInt($("#WinInput"+"5").val());
}


$("#NextRound").click(function(){

	if (sum == cards[round-1]) {
		alert('Change your guess.')
	}
	else {


		if (round < Number(selectedRounds)*2) {

			
			addingScores();
			calculateScore("player2");
			updateTable();
			// document.getElementById("demo").innerHTML = game_log.player1.guesses;

			$(".alert-success").css('display','none');		

		round = round +1;

		$("#RoundSummary").html("Round <span class=\"bigger\"> {0}</span>. <br> <br> {1} deal {2} cards! <br> <br> {3}, you guess first!".format(round, loopingPlayer[round-1], cards[round-1], loopingPlayer[round]));
		addFields();
		$("#playerWins").css('display','none');

	}


		else {
	alert("Game Over!");
		}
}

});

$("#PreviousRound").click(function(){

    if (round == 1) {
    alert("This is the first round")
    }

    else {
		$(".alert-success").css('display','none');		

	round = round -1;
	$("#RoundSummary").html("Round <span class=\"bigger\"> {0}</span>. <br> <br> {1} deal {2} cards! <br> <br> {3}, you guess first!".format(round, loopingPlayer[round-1], cards[round-1], loopingPlayer[round]));

	addFields();
	$("#playerWins").css('display','none');
}
});	


$(".btn-group").click(function(){
	$(".alert-success").css('display','block');
	$("#playertable").css('display','block');
	$("#SelectRounds").css('display','none');
});
