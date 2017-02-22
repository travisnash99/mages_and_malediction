$(document).ready(function(){

var enemyOne = $('#warrior');
var enemyTwo = $('#warrior2');
var enemyThree = $('#archer');
var enemyFour = $('#sorcerer');
var enemyHP = 4;
var enemyDamage = 2;
var playerDamage = 3;
var playerHP = 12;
var combat = false;
var gameOver = false;
var enemylives = 0
function rollDice(){
	return Math.floor(Math.random() * 20 +1);
}

$('#diceRollButton').on('click', function(){
  if(!combat) {return;}


  var chanceToHit = rollDice();
   	var message = "You rolled a(n) "
	$("#rollMessage").html(message + chanceToHit);
	console.log("#rollMessage" + chanceToHit);
   	if (chanceToHit == 20){
   		enemyHP -= 3;
   	}
   	else if (chanceToHit >= 8){
   		enemyHP -= 2;
   	}
   	if (enemyHP <= 0){
   		$(".selectedEnemyContainer").html("");
   		combat = false;
   	if ($(".creatures").length == 0){
   		alert("You Win!");
   	}
   }
   	console.log(enemyHP);
   	console.log( $(".creatures").length);
   	console.log(enemylives);
   	console.log(playerHP)
  });



  // selection phase
   	
$('.creatures').on('click', function(){
	if(combat) {return;}
	enemyHP = 4;
	var clicked = $(this);
	clicked.detach();
	$(".selectedEnemyContainer").html(clicked);
	// getting rid of old enemy potentially
	// enter the combat stage 

	combat = true;
});












});

