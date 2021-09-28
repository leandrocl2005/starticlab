let gameState = 'start';
let choosed_coin = '';
let not_choosed_coin = '';
let choosed_box = '';

function changeBox(box) {

  if (gameState !== 'start') {
    return ;
  } 

  // abre a caixa clicada
  const boxToChange = document.getElementById(box + '-img');
  boxToChange.src = 'assets/img/mcol-open-box.svg';

  // choose coin
  choose_coin();

  // mostra a moeda
  showCoin();

  // muda as instruções
  if (choosed_coin === 'g'){
    changeInstruction('Encontrou uma moeda de ouro.');
  } else {
    changeInstruction('Encontrou uma moeda de prata.');
  }

  showPlayAgainButton();
  
  
  // muda status do jogo
  gameState = 'end';

}

function startAgain() {
  gameState = 'start';

  // esconder o botão de jogar novamente
  hidePlayAgainButton();

  // mudar as instruções
  changeInstruction('Clique em uma das caixas.');

  // fechar as caixas
  closeBoxes();

  // esconder a moeda
  hideCoin();
}


function changeInstruction(text) {
  const textToChange = document.getElementById('text-instruction');
  textToChange.innerText = text;
}

function choose_coin() {
  choosed_box = shuffle([
    ['g','g'], ['s','s'],['s','g']
  ])[0]

  const random_coin = Math.round(Math.random());
  choosed_coin = choosed_box[random_coin];
  not_choosed_coin = choosed_box[Math.abs(1 - random_coin)];

  return choosed_coin;
}

function showCoin() {
  const coin_image = document.getElementById('result-coin-img');
  if (choosed_coin === 's') {
    coin_image.src = "assets/img/silver-coin.svg";
  } else {
    coin_image.src = "assets/img/gold-coin.svg";
  }
  coin_image.style.display = "block";
}

function hideCoin() {
  const coin_image = document.getElementById('result-coin-img');
  coin_image.style.display = 'none';
}

function showInput() {
  const result_div = document.getElementById('result-game-div');
  result_div.style.display = 'flex';
}

function hideInput() {
  const result_div = document.getElementById('result-game-div');
  result_div.style.display = 'none';
}

function closeBoxes() {
  const box1 = document.getElementById('box-1-img');
  box1.src = 'assets/img/mcol-closed-box.svg';  
  const box2 = document.getElementById('box-2-img');
  box2.src = 'assets/img/mcol-closed-box.svg'; 
  const box3 = document.getElementById('box-3-img');
  box3.src = 'assets/img/mcol-closed-box.svg'; 
}

function showPlayAgainButton() {
  const result_btn = document.getElementById('start-game-again-btn');
  result_btn.style.display = 'block';  
}

function hidePlayAgainButton() {
  const result_btn = document.getElementById('start-game-again-btn');
  result_btn.style.display = 'none';  
}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

