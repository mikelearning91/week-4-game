//global variables
var yourWins= 0;
var yourLosses= 0;
var addition=0;
var total= Math.floor((Math.random() * 100) + 19);

var amethyst = Math.floor((Math.random() * 12) + 1);
var diamond = Math.floor((Math.random() * 12) + 1);
var emerald = Math.floor((Math.random() * 12) + 1);
var quartz = Math.floor((Math.random() * 12) + 1);


// fill and empty divs with wins, losses and numbers
var updateAddition = function () {
	$('.addition').empty();
	$('.addition').html(addition);

	$('#yourWins').empty();
	$('#yourWins').html("Wins: " + yourWins);

	$('#yourLosses').empty();
	$('#yourLosses').html("Losses: " + yourLosses);
}


// start game
var start = function (){
addition = 0;
total = Math.floor((Math.random() * 100) + 19);

$('.total').empty();
$('.total').append(total);
// set random variables for each crystal
amethyst = Math.floor((Math.random() * 12) + 1);
diamond = Math.floor((Math.random() * 12) + 1);
emerald = Math.floor((Math.random() * 12) + 1);
quartz = Math.floor((Math.random() * 12) + 1);
updateAddition();
}	

//alerts for win or lose, and filling in the message container
var game = function (){
	if (addition == total) {
		yourWins = yourWins + 1;
		$("#messageBoxContainer").attr("class", "visible");
		$("#message").html("You matched the number!");

	} else if (addition > total) {
		yourLosses = yourLosses + 1; 			
		$("#messageBoxContainer").attr("class", "visible");
		$("#message").html("You didn't match the number. It's okay. Give it another shot!");

	} else {
		updateAddition();
	}
}
// click functions
$('.total').append(total);
$('.addition').append(addition);

$( document ).ready(function() {
	$('#amethyst').click(function(){
		addition = addition + amethyst;
		game();
	})

	$('#diamond').click(function(){
		addition = addition + diamond;
		game();
	})

	$('#emerald').click(function(){
		addition = addition + emerald;
		game();
	})

	$('#quartz').click(function(){
		addition = addition + quartz;
		game();
	})
	$('button').click(function(){
		$("#messageBoxContainer").removeClass("visible");
		start();
	})
});

// game starts on document load 	
$( document ).ready(function() {
start();
});

