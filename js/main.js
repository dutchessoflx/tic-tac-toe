
console.log(`tic tac toe`);
let hue = 0;



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


$(".grid").on('click',function(ev){
          // console.log('click','ev', ev,'current target', ev.currentTarget,'location', ev.clientX, ev.clientY);
          markTurn(ev.currentTarget);
          winBlue();
          winRed();
        });

        const winBlue = function(){
        if($('div.top').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        }else if($('div.middle').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        }else if($('div.bottom').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        }else if($('div.left').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        }else if($('div.center').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        }else if($('div.right').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        }else if($('div.diagonalOne').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        }else if($('div.diagonalTwo').children('.blue').length === 3){
          console.log(`WINNER BLUE`);
        // }else if($('div').children('p').length === 9){
        //   console.log(`its a draw`);
        }
      };

        const winRed = function(){
        if($('div.top').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div.middle').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div.bottom').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div.left').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div.center').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div.right').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div.diagonalOne').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div.diagonalTwo').children('.red').length === 3){
          console.log(`WINNER RED`);
        }else if($('div').children('p').length === 9){
          console.log(`its a draw`);
        }
      };

    // console.log(3$('p#red'));
