
console.log(`tic tac toe`);
let winner = null;
let roundCount  = 0;
let redScore    = 0;
let blueScore   = 0;
const drawConditional= $('div.grid').length;
const winCondition = $('div.top').length;
const winningClasses = ['div.top','div.middle','div.bottom','div.left','div.center','div.right','div.diagonalOne','div.diagonalTwo']


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
$(".grid").on('click',function(ev){
          // console.log('click','ev', ev,'current target', ev.currentTarget,'location', ev.clientX, ev.clientY);
          whosTurn(ev.currentTarget);
          whoWins();
          scoreCount();

        });

const scoreCount = function(){
        const $findDisplay =$('#display');
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

$('#playAgain').on('click',function(){
    $('p.token').remove();
    $('#roundCount').text(roundCount);
  });

$('#newGame').on('click',function(){
    $('p.token').remove();
    roundCount  = 0;
    redScore    = 0;
    blueScore   = 0;
    $('#redScore').text(redScore);
    $('#blueScore').text(blueScore);
    $('#roundCount').text(roundCount);
  })
