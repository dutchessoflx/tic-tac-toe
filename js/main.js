
console.log(`tic tac toe`);
let winner = null;
let roundCount  = 0;
let redScore    = 0;
let blueScore   = 0;
const drawConditional= $('div.grid').length;
const winCondition = $('div.top').length;
const winningClasses = ['div.top','div.middle','div.bottom','div.left','div.center','div.right','div.diagonalTwo','div.diagonalTwo']
const markTurn = function(target){
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
      roundCount += 1;
      blueScore += 1;
      console.log(`WINNER BLUE`);
      return winner = 'Blue';
  }else if($(currentClass).children('.red').length === winCondition){
    roundCount += 1;
    redScore += 1;
    console.log(`WINNER RED`);
    return winner = 'Red';
}
}
};
$(".grid").on('click',function(ev){
          // console.log('click','ev', ev,'current target', ev.currentTarget,'location', ev.clientX, ev.clientY);

          markTurn(ev.currentTarget);
          scoreCount();
          whoWins();
          // winRed();
          // winBlue();
        //   if($('div').children('p').length === drawConditional){
        //       if(winBlue()=== false && winRed() === false){
        //         roundCount += 1;
        //         console.log(`its a draw`);
        //         return winner = 'Draw'
        // }}
        });



      //   const winBlue = function(){
      //   if($('div.top').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   }else if($('div.middle').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   }else if($('div.bottom').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   }else if($('div.left').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   }else if($('div.center').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   }else if($('div.right').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   }else if($('div.diagonalOne').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   }else if($('div.diagonalTwo').children('.blue').length === winCondition){
      //     roundCount += 1;
      //     blueScore += 1;
      //     console.log(`WINNER BLUE`);
      //     return winner = 'Blue';
      //   // }else if($('div').children('p').length === 9){
      //   //   console.log(`its a draw`);
      //   }
      // };

        // const winRed = function(){
        // if($('div.top').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red';
        // }else if($('div.middle').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red'
        // }else if($('div.bottom').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red'
        // }else if($('div.left').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red'
        // }else if($('div.center').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red'
        // }else if($('div.right').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red'
        // }else if($('div.diagonalOne').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red'
        // }else if($('div.diagonalTwo').children('.red').length === winCondition){
        //   roundCount += 1;
        //   redScore += 1;
        //   console.log(`WINNER RED`);
        //   return winner = 'Red';
        // }
        // // else if($('div').children('p').length === drawConditional){
        // //   // roundCount += 1;
        // //   console.log(`its a draw`);
        // //   return winner = 'Draw'
        //
        // // }

      // };

          const display = function(){
            const $findDisplay =$('#display');
            $findDisplay.html(`<p>${winner} Wins! Play Again?</p>`);
          };


      const scoreCount = function(){
        if(winner === 'Red'){
          display();
          $('#redScore').text(redScore);
          $('#roundCount').text(roundCount);
          console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);

        }else if(winner === 'Blue'){
          display();
          $('#blueScore').text(blueScore);
          $('#roundCount').text(roundCount);
            console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);
      }else{
        const display = $('<p>Its a Draw. Play Again?</p>')
        $('#roundCount').text(roundCount);
          console.log(`round count:`, roundCount, `red`, redScore , `blue`, blueScore);
      }
    };
    // console.log(3$('p#red'));



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
