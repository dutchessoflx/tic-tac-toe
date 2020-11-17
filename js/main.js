
console.log(`tic tac toe`);
let winner = null;
let roundCount  = 0;
let redScore    = 0;
let blueScore   = 0;
const drawConditional= $('div.grid').length;
const winCondition = $('div.top').length;
const winningClasses = ['div.top','div.middle','div.bottom','div.left','div.center','div.right','div.diagonalOne','div.diagonalTwo'];
let computersChoice = ['div#1','div#2','div#3','div#4','div#5','div#6','div#7','div#8','div#9'];
const $findDisplay =$('#display');

const computersTurn = function(){
   const currentChoiceIndex = Math.floor(Math.random() * computersChoice.length)
   const currentChoice = computersChoice[currentChoiceIndex];
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
          computersChoice.splice((currentChoiceIndex), 1);
          console.log(computersChoice);
          console.log(computersChoice.indexOf(currentChoice));
        };
};

const whosTurn = function(target){
  if($('p.token').length %2 === 0){
    const $tokenBlue = $('<p class="token blue">');
          $tokenBlue.css({
            width: 20 + 'px',
            height: 20 + 'px',
            backgroundColor: 'blue',
          });
            if(target.childElementCount >= 1 ){
              console.log(`illegal move`);
            }else{
              $(target).append($tokenBlue);
              computersChoice.splice(((target.id) - 1), 1);
              console.log(target.id);
              console.log(computersChoice.indexOf(target.id));
              console.log(target.id.indexOf(computersChoice));
              console.log(computersChoice);
            };

  }else{
        const $tokenRed = $('<p class="token red">');
              $tokenRed.css({
                  width: 20 + 'px',
                  height: 20 + 'px',
                  backgroundColor: 'red',
                });

            if(target.childElementCount >= 1 ){
                console.log(`illegal move`);
                }else{
                  $(target).append($tokenRed);
                  computersChoice.splice(((target.id) - 1), 1);
                  console.log(computersChoice);
                };
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
        }else if($('div.grid').children('p').length === drawConditional){
          roundCount += 1;
          console.log(`its a draw`);
          return winner = 'Draw'

}}
};

const scoreCount = function(){

        if(winner === 'Red'){
          $findDisplay.html(`<p>${winner} Wins! Play Again?</p>`);
          $('#redScore').text(redScore);
          $('#roundCount').text(roundCount);
          console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);

        }else if(winner === 'Blue'){
          $findDisplay.html(`<p>${winner} Wins! Play Again?</p>`);
          $('#blueScore').text(blueScore);
          $('#roundCount').text(roundCount);
            console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);
          }else if(winner === 'Draw'){
            $findDisplay.html('<p>Its a Draw. Play Again?</p>');
            $('#roundCount').text(roundCount);
            console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);
      }
    };

$(".grid").on('click',function(ev){
          console.log('click','ev', ev,'current target', ev.currentTarget,'location', ev.clientX, ev.clientY, `id` , ev.currentTarget.id);
          console.log(computersChoice.indexOf());
          whosTurn(ev.currentTarget);
          whoWins();
          scoreCount();

        });

$('#playAgain').on('click',function(){
    $('p.token').remove();
    $('#roundCount').text(roundCount);
    $findDisplay.html(`<p>Let's Play Tic-Tac-Toe</p>`);
    computersChoice = ['div#1','div#2','div#3','div#4','div#5','div#6','div#7','div#8','div#9'];
  });

$('#newGame').on('click',function(){
    $('p.token').remove();
    roundCount  = 0;
    redScore    = 0;
    blueScore   = 0;
    computersChoice = ['div#1','div#2','div#3','div#4','div#5','div#6','div#7','div#8','div#9'];
    $findDisplay.html(`<p>Let's Play Tic-Tac-Toe</p>`);
    $('#redScore').text(redScore);
    $('#blueScore').text(blueScore);
    $('#roundCount').text(roundCount);
  })

$('#computer').on('click', function(){
  computersTurn();
})
