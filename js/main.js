var turn;

function init() {
  turn = "X" ;
  displayOutput("it is " + turn + "'s turn.");
  }

function displayOutput(out){
  document.getElementById('output').innerText = out;
}

function switchTurn(){
  if(turn == "X")
    {
      turn = "O";
    }
  else {
    turn = "X";
  }
  displayOutput("it is " + turn + "'s turn.");
}

function move(id)
{
  if(turn != "")
  {
    if(id.innerText == "")
    {
        id.innerText = turn;
        if(checkforwin(turn))
        {
          turn = "";
        }
        else
        {
          switchTurn();
        }
    }
    else
    {
    displayOutput("the square is already taken");
    }
  }
}
function checkrow(num1, num2, num3){
  if((turn == document.getElementById("s" + num1).innerText) &&
      (turn == document.getElementById("s" + num2).innerText) &&
      (turn == document.getElementById("s" + num3).innerText)){
    return 1;
  }
  else {
    return 0;
  }
}

function checkforwin(turn)
  {
    if(checkrow(1,2,3)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else if(checkrow(4,5,6)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else if(checkrow(7,8,9)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else if(checkrow(1,4,7)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else if(checkrow(2,5,8)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else if(checkrow(3,6,9)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else if(checkrow(1,5,9)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else if(checkrow(3,5,7)){
      displayOutput(turn + " has won!");
      return 1;
    }
    else {
      return 0;
    }
  }

function reset(){
  for (var i = 1; i <=9; i++)
  {
    document.getElementById('s' + i ).innerText = "";
  }
  turn = 'X';
  displayOutput("it is " + turn + "'s turn.");
}

function computerTurn(){
  wincheck();
}

function wincheck()
{
  
}
