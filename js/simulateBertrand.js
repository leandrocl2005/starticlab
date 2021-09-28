function shuffle(array) {
  var currentIndex = array.length,  randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function choose_coins() {
  choosed_box = shuffle([
    ['g','g'], ['s','s'],['s','g']
  ])[0]

  const random_coin = Math.round(Math.random());
  choosed_coin = choosed_box[random_coin];
  not_choosed_coin = choosed_box[Math.abs(1 - random_coin)];

  return [choosed_coin, not_choosed_coin];
}


function simulateBertrand() {

  const input_number_simulation = document.getElementById('number-simulations')
  const number_of_simulations = Number(input_number_simulation.value);

  console.log(`simulando ${number_of_simulations} vezes`)

  if (number_of_simulations > 1000000){
    showSimulationFormError();
    return;
  }
  hideSimulationFormError();

  let goldGold = 0;
  let goldSilver = 0;
  let silverGold = 0;
  let silverSilver = 0;

  for (var i = 0; i < number_of_simulations; i++) {
    const coins = choose_coins();
    if (coins[0] === 'g'  && coins[1] === 'g') { goldGold += 1;}
    if (coins[0] === 'g'  && coins[1] === 's') { goldSilver += 1;}
    if (coins[0] === 's'  && coins[1] === 'g') { silverGold += 1;}
    if (coins[0] === 's'  && coins[1] === 's') { silverSilver += 1;}
  }

  document.getElementById('gold-gold').innerText = goldGold.toString();
  document.getElementById('gold-silver').innerText = goldSilver.toString();
  document.getElementById('silver-gold').innerText = silverGold.toString();
  document.getElementById('silver-silver').innerText = silverSilver.toString();

}

function showSimulationFormError() {
  const error_text = document.getElementById('simulation-form-error');
  error_text.style.display = 'block';
}

function hideSimulationFormError() {
  const error_text = document.getElementById('simulation-form-error');
  error_text.style.display = 'none';
}