player_1 = localStorage.getItem("player1_name_input");
player_2 = localStorage.getItem("player2_name_input");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1").innerHTML = player_1 + ":";
document.getElementById("player2").innerHTML = player_2 + ":";

document.getElementById("Player1_score").innerHTML = player_1_score;
document.getElementById("Player2_score").innerHTML = player_2_score;


document.getElementById("n3").innerHTML = "Question turn - " + player_1;
document.getElementById("n2").innerHTML = "Answer turn - " + player_2;
