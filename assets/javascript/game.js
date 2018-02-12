

$(document).ready(function(){

var wins = 0;
var losses = 0;
var total = 0;
var userNumber = 0;
var randomNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
console.log(randomNumber);

function rando() {
  randomNumber = Math.floor(Math.random() * 101) + 19;
  $(".randomNumber").text(randomNumber);
  $("#userNumber").text(" " + userNumber);

	
crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;
}

rando();

$("#button-1").click(function() {
  userNumber = userNumber + crystal1;
  $("#userNumber").text(" " + userNumber);
  winLoss();
})

$("#button-2").click(function() {
  userNumber = userNumber + crystal2;
  $("#userNumber").text(" " + userNumber);
  winLoss();
})

$("#button-3").click(function() {
  userNumber = userNumber + crystal3;
  $("#userNumber").text(" " + userNumber);
  winLoss();
})

$("#button-4").click(function() {
  userNumber = userNumber + crystal4;
  $("#userNumber").text(" " + userNumber);
  winLoss();
})

function winLoss() {
  if (userNumber === randomNumber) {
  alert("You Win!");
  wins = wins + 1;
  $("#winsTotal").text(wins);
  reset();
}
  else if (userNumber > randomNumber) {
  alert("You Lose!");
  losses = losses + 1;
  $("#lossesTotal").text(losses);
  reset();
}
}

function reset() {
  userNumber = 0;
  $("#userNumber").text(userNumber);
  rando();
}

});