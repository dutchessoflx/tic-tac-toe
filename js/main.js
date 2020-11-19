
console.log(`tic tac toe`);
let winner = null;
let playerOne = 'Blue';
let playerTwo = 'Red';
let roundCount    = 0;
let redScore      = 0;
let blueScore     = 0;
let computerScore = 0;
const drawConditional = $('div.grid').length;
const winCondition    = $('div.top').length;
const winningClasses  = ['div.top','div.middle','div.bottom','div.left','div.center','div.right','div.diagonalOne','div.diagonalTwo'];
let computersChoice   = ['1','2','3','4','5','6','7','8','9'];
const $findDisplay    = $('#display');
let target = null;
console.log(target, `target`);

// let blueToken = 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)'
// let redToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)'
// let computerToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)'

const computersTurn = function(){
   const currentChoiceIndex = Math.floor(Math.random() * computersChoice.length)
   const currentChoice = (`div#${computersChoice[currentChoiceIndex]}`);
   console.log(currentChoice);
   const $tokenPurple = $('<p class="token purple">');
         $tokenPurple.css({
          width: 20 + 'px',
          height: 20 + 'px',
          backgroundColor: 'purple',
        });
          if(($(currentChoice).childElementCount >= 1) ){
            console.log(`illegal move`);
          }else{
            $(currentChoice).append($tokenPurple);
            $(currentChoice).css('background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)')
            computersChoice.splice((computersChoice.indexOf(computersChoice[currentChoiceIndex])), 1);
            console.log(computersChoice);

          };
};
const blueTurn = function(){
  const targetDivID = (`div#${target}`);
  console.log(target);
  console.log(targetDivID);
  const $tokenBlue = $('<p class="token blue">');
  $tokenBlue.css({
      width: 20 + 'px',
      height: 20 + 'px',
      backgroundColor: 'blue',
    });

          if(targetDivID.childElementCount >= 1 ){
            console.log(`illegal move`);

          }else{

          $(targetDivID).append($tokenBlue);
            // $(target).css('background-image', blueToken);
            computersChoice.splice((computersChoice.indexOf(target)), 1);
            console.log(computersChoice, `compchoice`);



          };

}
const redTurn = function(){
  const targetDivID = (`div#${target}`);
  const $tokenRed = $('<p class="token red">');
        $tokenRed.css({
            width: 20 + 'px',
            height: 20 + 'px',
            backgroundColor: 'red',
          });

      if(targetDivID.childElementCount >= 1 ){
          console.log(`illegal move`);
          }else{
            $(targetDivID).append($tokenRed);
            $(targetDivID).css('background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)')
            computersChoice.splice((computersChoice.indexOf(target)), 1);
            console.log(computersChoice);
          };
};

const whichPlayerOne = function(){
  if(playerOne === 'Blue'){
    blueTurn();
  }
  else if(playerOne === 'Red'){
    redTurn();
  } else if(playerone === 'Computer'){
    computersTurn();
  }

};

const whichPlayerTwo = function(){
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
    whichPlayerOne();

  }else{
        whichPlayerTwo();
        };
};

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
};
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
}};


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
    };

const clearBoard = function(){
  $('#redGif').css({visibility: 'hidden'});
  $('#blueGif').css({visibility: 'hidden'});
  $('#computerGif').css({visibility: 'hidden'});
  winner = null;
  $('p.token').remove();
  $findDisplay.html(`<p>Let's Play Tic-Tac-Toe</p>`);
  computersChoice = ['1','2','3','4','5','6','7','8','9'];
  $('div').css('background-image', 'none');
  $('#blueGif').css({contentVisibility: 'hidden'});
  $('#blueWinsText').css({contentVisibility: 'hidden'});
  $('#redGif').css({contentVisibility: 'hidden'});
  $('#redWinsText').css({contentVisibility: 'hidden'});
  $('#computerGif').css({contentVisibility: 'hidden'});
  $('#computerWinsText').css({contentVisibility: 'hidden'});
};

$(".grid").on('click',function(ev){
  target = ev.currentTarget.id;
  console.log(`target`, target);
  // console.log('click','ev', ev,'current target', ev.currentTarget,'location', ev.clientX, ev.clientY, `id` , ev.target);
  // console.log(ev.currentTarget.id);
  whosTurn();
  whoWins();
  scoreCount();

  });


$('#playAgain').on('click',function(){
    clearBoard();
    $('#roundCount').text(roundCount);
    winner      = null;

  });

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
  });

$('#computer').on('click', function(){
  $('#computerScoreBox').css({visibility: 'visible'})
  $('#computerGif').css({contentVisibility: 'hidden'})
   computersTurn();
   whoWins();
   scoreCount();
});

$('#pacmanTheme').on('click', function(){
  $('body').css('background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/pacman-background.jpg)')
  $('#gameboard').css('background-color', 'black');
  $('.grid').css('border', '2px dotted gold');
  blueToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/pacman-blueplayer.jpg)'
  redToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/pacman-redplayer.png)'
  computerToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/pacman-cp.png)'
});

  $('#standard').on('click', function(){
    $('body').css('background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/wooden-background.jpg)')
    $('#gameboard').css('background-color', 'aqua');
    $('.grid').css('border', '2px solid black');
    blueToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)'
    redToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)'
    computerToken = 'background-image', 'url(/Users/Brooke/SEI/projects/tic-tac-toe/images/blueToken.jpg)'

  });

$('#playerBlue').on('click', function(){
  playerOne = 'Blue';
  playerTwo = 'Red';
});

$('#playerRed').on('click', function(){
  playerOne = 'Red';
  playerTwo = 'Blue';
});

$('#playerComputer').on('click', function(){
  playerOne = 'Computer';
  playerTwo = 'Blue';
});
