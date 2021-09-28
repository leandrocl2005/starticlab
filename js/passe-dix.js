let gameState = 'start';
let dices_array = [];

function throwDices() {
  const dice1 = 1 + Math.round(5 * Math.random());
  const dice2 = 1 + Math.round(5 * Math.random());
  const dice3 = 1 + Math.round(5 * Math.random());
  dices_array = [dice1, dice2, dice3];
  return dices_array
}

function changeDices() {

  if (gameState !== 'start') {
    return ;
  } 

  // jogas os dados
  const faces = throwDices();
  console.log(faces);

  // muda as imagens dos dados
  const dice1Image  = document.getElementById('dice-1');
  const dice2Image  = document.getElementById('dice-2');
  const dice3Image  = document.getElementById('dice-3');
  dice1Image.src = `assets/img/dice-${faces[0]}.svg`
  dice2Image.src = `assets/img/dice-${faces[1]}.svg`
  dice3Image.src = `assets/img/dice-${faces[2]}.svg`

  changeInstruction(`A soma foi ${faces[0]+faces[1]+faces[2]}`);

  showPlayAgainButton();
  
  // muda status do jogo
  gameState = 'end';

}

function startAgain() {
  gameState = 'start';

  // esconder o botão de jogar novamente
  hidePlayAgainButton();

  // mudar as instruções
  changeInstruction('Clique em algum dado para jogar');
}


function changeInstruction(text) {
  const textToChange = document.getElementById('text-instruction');
  textToChange.innerText = text;
}

function showPlayAgainButton() {
  const result_btn = document.getElementById('start-game-again-btn');
  result_btn.style.display = 'block';  
}

function hidePlayAgainButton() {
  const result_btn = document.getElementById('start-game-again-btn');
  result_btn.style.display = 'none';  
}
