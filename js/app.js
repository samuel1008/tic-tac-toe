// wait for the DOM to finish loading
$(document).ready(function() {
  var numOfClicks = 0;
  var player1 = "X";
  var player2 = "O";


  // all code to manipulate the DOM
  // goes inside this function
  $(".box").click(function(event){
    if(!$(this).text()){

      if(numOfClicks % 2 === 0){
        $(this).text(player1);
        numOfClicks++;
        checkWinner(player1);
      }
      else if(numOfClicks % 2 !== 0){
        $(this).text(player2);
        numOfClicks++;
        checkWinner(player2);
      }
    }


  });

  $(".btn").on("click", function refreshPAge(event) {
    $(".box").text("");
  });

  function checkWinner(player){
    if(((((((((( $("#box1").text()=== player1 ) && ( $("#box2").text()=== player1) ) && ( $("#box3").text()=== player1)) || ( (( $("#box4").text()=== player1 ) && ( $("#box5").text()=== player1) ) && ( $("#box6").text()=== player1))) || ( (( $("#box7").text()=== player1 ) && ( $("#box8").text()=== player1) ) && ( $("#box9").text()=== player1))) || ((( $("#box1").text()=== player1 ) && ( $("#box4").text()=== player1) ) && ( $("#box7").text()=== player1))) || ((( $("#box2").text()=== player1 ) && ( $("#box5").text()=== player1) ) && ( $("#box8").text()=== player1))) || ((( $("#box3").text()=== player1 ) && ( $("#box6").text()=== player1) ) && ( $("#box9").text()=== player1))) || ((( $("#box1").text()=== player1 ) && ( $("#box5").text()=== player1) ) && ( $("#box9").text()=== player1))) || ((( $("#box3").text()=== player1 ) && ( $("#box5").text()=== player1) ) && ( $("#box7").text()=== player1))){
      alert(player + " wins!");
    }
    if(((((((((( $("#box1").text()=== player2 ) && ( $("#box2").text()=== player2) ) && ( $("#box3").text()=== player2)) || ( (( $("#box4").text()=== player2 ) && ( $("#box5").text()=== player2) ) && ( $("#box6").text()=== player2))) || ( (( $("#box7").text()=== player2 ) && ( $("#box8").text()=== player2) ) && ( $("#box9").text()=== player2))) || ((( $("#box1").text()=== player2 ) && ( $("#box4").text()=== player2) ) && ( $("#box7").text()=== player2))) || ((( $("#box2").text()=== player2 ) && ( $("#box5").text()=== player2) ) && ( $("#box8").text()=== player2))) || ((( $("#box3").text()=== player2 ) && ( $("#box6").text()=== player2) ) && ( $("#box9").text()=== player2))) || ((( $("#box1").text()=== player2 ) && ( $("#box5").text()=== player2) ) && ( $("#box9").text()=== player2))) || ((( $("#box3").text()=== player2 ) && ( $("#box5").text()=== player2) ) && ( $("#box7").text()=== player2))) {
      alert(player + " wins!");
    }
  }

});
