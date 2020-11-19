
console.log(`tic tac toe`);
let theme = 'standard'
let winner = null;
let playerOne = 'Red';
let playerTwo = 'Blue';
let roundCount    = 0;
let redScore      = 0;
let blueScore     = 0;
let computerScore = 0;
const drawConditional = $('div.grid').length;
const winCondition    = $('div.top').length;
const winningClasses  = ['div.top','div.middleTop','div.middle','div.middleBottom','div.bottom','div.left','div.centerLeft','div.center','div.centerRight','div.right','div.diagonalOne','div.diagonalTwo'];
let computersChoice   = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16', '17','18','19','20','21','22','23','24','25'];
const $findDisplay    = $('#display');
let target = null;
console.log(target, `target`);



const computersTurn = function(){
   const currentChoiceIndex = Math.floor(Math.random() * computersChoice.length)
   const currentChoice = (`div#${computersChoice[currentChoiceIndex]}`);
   console.log(currentChoice);
   const $tokenPurple = $('<p class="token purple invisible">');
         $tokenPurple.css({
          width: 20 + 'px',
          height: 20 + 'px',
          backgroundColor: 'purple',
        });
          if(($(currentChoice).childElementCount >= 1) ){
            console.log(`illegal move`);
          }else{
            $(currentChoice).append($tokenPurple);
            if(theme === 'pacman'){
              $(currentChoice).css('background-image', 'url(images/pacman-cp.png)')
            }else{
              $(currentChoice).css('background-image', 'url(images/computer-token.jpg)')

            }
            computersChoice.splice((computersChoice.indexOf(computersChoice[currentChoiceIndex])), 1);
            console.log(computersChoice);

          };
}; ///how computer makes their turn

const blueTurn = function(){
    const targetDivID = (`div#${target}`);
    console.log(target);
    console.log(targetDivID);
    const $tokenBlue = $('<p class="token blue invisible">');
    $tokenBlue.css({
      width: 20 + 'px',
      height: 20 + 'px',
      backgroundColor: 'blue',
    });

          if(targetDivID.childElementCount >= 1 ){
            console.log(`illegal move`);

          }else{

          $(targetDivID).append($tokenBlue);

            if(theme === 'pacman'){

               $(targetDivID).css('background-image', 'url(images/pacman-blueplayer.png)')

             }else{
               $(targetDivID).css('background-image', 'url(images/X-token._AC_.jpg)')


             }
            computersChoice.splice((computersChoice.indexOf(target)), 1);
            console.log(computersChoice, `compchoice`);



          };

} ///how blue makes their turn
const redTurn = function(){
  const targetDivID = (`div#${target}`);
  const $tokenRed = $('<p class="token red invisible">');
        $tokenRed.css({
            width: 20 + 'px',
            height: 20 + 'px',
            backgroundColor: 'red',
          });

      if(targetDivID.childElementCount >= 1 ){
          console.log(`illegal move`);
          }else{
            $(targetDivID).append($tokenRed);

            if(theme === 'pacman'){
            $(targetDivID).css('background-image', 'url(images/pacman-redplayer.png)')
            }else{
            $(targetDivID).css('background-image', 'url(images/o-token.jpg)')
            }
            computersChoice.splice((computersChoice.indexOf(target)), 1);
            console.log(computersChoice);
          };
}; //how red makes their turn

const whoPlayerOne = function(){
  if(playerOne === 'Blue'){
    blueTurn();
  }
  else if(playerOne === 'Red'){
    redTurn();
  } else if(playerone === 'Computer'){
    computersTurn();
  }

};

const whoPlayerTwo = function(){
  if(playerTwo === 'Blue'){
    blueTurn();
  }
  else if(playerTwo === 'Red'){
    redTurn();

  }else if(playerTwo === 'Computer'){
    computersTurn();
  }

};


const whosTurn = function(){
  if($('p.token').length %2 === 0){
    whoPlayerOne();

  }else{
        whoPlayerTwo();
        };
};///checking whos turn it is so no one goes twice

const whoWins = function(){
  for(let i=0; i < winningClasses.length; i++){

      const currentClass = winningClasses[i];
        if($(currentClass).children('.blue').length === winCondition){
        console.log(`WINNER BLUE`);
        roundCount += 1;
        blueScore += 1;
        return winner = 'Blue';

        }else if($(currentClass).children('.red').length === winCondition){
          roundCount += 1;
          redScore += 1;
          console.log(`WINNER RED`);
          return winner = 'Red';

        }else if($(currentClass).children('.purple').length === winCondition){
          roundCount += 1;
          computerScore += 1;
          console.log(`WINNER COMPUTER`);
          return winner = 'Computer';
        }else if($('div.grid').children('p').length === drawConditional){
          roundCount += 1;
          console.log(`its a draw`);
          return winner = 'Draw'

}}
}; ///checking if someone has won
const gameEnd = function(){
for( let i=0;i< computersChoice.length; i++){
  const currentDiv = computersChoice[i]
  console.log(currentDiv);
  const $tokenInvisible = $('<p class="token invisible">');
        $tokenInvisible.css({
         width: 20 + 'px',
         height: 20 + 'px',
         backgroundColor: 'green',
       });
  $(`div#${currentDiv}`).append($tokenInvisible);
}};///once someone wins no one can keep playing


const scoreCount = function(){

        if(winner === 'Red'){
          $findDisplay.html(`<p>${winner} Wins! Play Again?</p>`);
          $('#redScore').text(redScore);
          $('#roundCount').text(roundCount);
          gameEnd();
          $('#redGif').css({contentVisibility: 'visible'});
          $('#redWinsText').css({contentVisibility: 'visible'});
          console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);

        }else if(winner === 'Blue'){
          $findDisplay.html(`<p>${winner} Wins! Play Again?</p>`);
          $('#blueScore').text(blueScore);
          $('#roundCount').text(roundCount);
          gameEnd();
          $('#blueGif').css({contentVisibility: 'visible'});
          $('#blueWinsText').css({contentVisibility: 'visible'});
            console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);

        }else if(winner === 'Computer'){
              $findDisplay.html(`<p>${winner} Wins! Play Again?</p>`);
              $('#computerScore').text(computerScore);
              $('#roundCount').text(roundCount);
              gameEnd();
              $('#computerGif').css({contentVisibility: 'visible'});
              $('#computerWinsText').css({contentVisibility: 'visible'});
                console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore, `computer`, computerScore);

        }else if(winner === 'Draw'){
            $findDisplay.html('<p>Its a Draw. Play Again?</p>');
            $('#roundCount').text(roundCount);
            console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);
      }
    }; ///if someone has won celebrate it

const clearBoard = function(){
    winner = null;
  playerOne = 'Red';
  playerTwo = 'Blue';
  $('p.token').remove();
  $findDisplay.html(`<p>Let's Play Tic-Tac-Toe</p>`);
  computersChoice = ['1','2','3','4','5','6','7','8','9'];
  $('div.grid').css('background-image', 'none');
  $('#blueGif').css({contentVisibility: 'hidden'});
  $('#blueWinsText').css({contentVisibility: 'hidden'});
  $('#redGif').css({contentVisibility: 'hidden'});
  $('#redWinsText').css({contentVisibility: 'hidden'});
  $('#computerGif').css({contentVisibility: 'hidden'});
  $('#computerWinsText').css({contentVisibility: 'hidden'});
  $('#computerScoreBox').css({contentVisibility: 'hidden'});
}; ///clears the board to play again


$(".grid").on('click',function(ev){
  target = ev.currentTarget.id;
  console.log(`target`, target);
  // console.log('click','ev', ev,'current target', ev.currentTarget,'location', ev.clientX, ev.clientY, `id` , ev.target);
  // console.log(ev.currentTarget.id);
  whosTurn();
  whoWins();
  scoreCount();

});//// clicking on the grid places a token and starts/progresses the game


$('#playAgain').on('click',function(){
    clearBoard();
    $('#roundCount').text(roundCount);
    winner      = null;

  });//new round button

$('#newGame').on('click',function(){
    clearBoard();
    roundCount    = 0;
    redScore      = 0;
    blueScore     = 0;
    computerScore = 0;
    winner      = null;

    $('#redScore').text(redScore);
    $('#blueScore').text(blueScore);
    $('#roundCount').text(roundCount);
  }); ///new game button

$('#computer').on('click', function(){
  $('#computerScoreBox').css({visibility: 'visible'})
  $('#computerGif').css({contentVisibility: 'hidden'})
   computersTurn();
   whoWins();
   scoreCount();
}); ///computer player button

$('#pacmanTheme').on('click', function(){
  theme = 'pacman';
  clearBoard();
  $('#redGif').css('zIndex', '1');
  $('#blueGif').css('zIndex', '1');
  $('#computerGif').css('zIndex', '1');
  $('#gameboard').css('border', '2px solid rgb(0, 54, 244)');
  $('.grid').css('border', '2px dotted gold');
  $('#redScoreBox').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('#blueScoreBox').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('#computerScoreBox').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('#roundCount').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('#computer').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('#newGame').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('#playAgain').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('#whoStarts').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'})
  $('#theme').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'})
  $('#round').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('input').css({backgroundImage: 'url(images/black-background.jpg)', border: '2px dotted gold', color: 'gold'});
  $('body').css({backgroundImage: 'url(images/pacman-background.jpg)'});
  $('#gameboard').css({backgroundColor: 'black', border: '2px solid rgb(0, 54, 244)'});
  $('div#round').addClass('pacman');
  $('div.grid').addClass('pacman');


});////pacman theme button

$('#standard').on('click', function(){
  theme= 'standard';
  clearBoard();
    $('#redGif').css('zIndex', '10');
    $('#blueGif').css('zIndex', '10');
    $('#computerGif').css('zIndex', '10');
    $('body').css('background-image', 'url(images/wooden-background.jpg)')
    $('#gameboard').css({backgroundColor: 'rgb(38, 94, 62)', border: '2px solid rgb(106, 21, 21)'});
    $('.grid').css('border', '2px solid black');
    $('#redScoreBox').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
    $('#blueScoreBox').css({backgroundImage: 'url(images/div-background.jpg)', border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
    $('#computerScoreBox').css({backgroundImage: 'url(iimages/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
    $('#roundCount').css({backgroundImage: 'url(images/div-background.jpg)',  border: 'none', color: 'rgb(106, 21, 21)'});
    $('#computer').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
    $('#newGame').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
    $('#playAgain').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
    $('#whoStarts').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'})
    $('#theme').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'})
    $('#round').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
    $('input').css({backgroundImage: 'url(images/div-background.jpg)',  border: '2px solid rgb(106, 21, 21)', color: 'rgb(106, 21, 21)'});
  }); ///standard theme button

$('#playerBlue').on('click', function(){
  playerOne = 'Blue';
  playerTwo = 'Red';
});/// player blue goes first

$('#playerRed').on('click', function(){
  playerOne = 'Red';
  playerTwo = 'Blue';
}); ///player red goes first

$('#playerComputer').on('click', function(){
  $('#computerScoreBox').css({visibility: 'visible'})
  $('#computerGif').css({contentVisibility: 'hidden'})
   computersTurn();
  playerOne = 'Computer';
  playerTwo = 'Blue';
}); /// computer player goes first
