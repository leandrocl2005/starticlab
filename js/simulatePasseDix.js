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

function throwDices() {
  const dice1 = 1 + Math.round(5 * Math.random());
  const dice2 = 1 + Math.round(5 * Math.random());
  const dice3 = 1 + Math.round(5 * Math.random());
  return [dice1, dice2, dice3];
}


function simulatePasseDix() {

  const input_number_simulation = document.getElementById('number-simulations')
  const number_of_simulations = Number(input_number_simulation.value);

  console.log(`simulando ${number_of_simulations} vezes`)

  if (number_of_simulations > 1000000){
    showSimulationFormError();
    return;
  }
  hideSimulationFormError();

  const sums = new Array(16).fill(0);
  

  for (var i = 0; i < number_of_simulations; i++) {
    const dices = throwDices();
    console.log(dices)
    sums[dices[0] + dices[1] + dices[2] - 3] += 1;
  }

  for (var j = 0; j < 16; j++){
    document.getElementById(`soma-${j+3}`).innerText = sums[j].toString();
  }
}

function showSimulationFormError() {
  const error_text = document.getElementById('simulation-form-error');
  error_text.style.display = 'block';
}

function hideSimulationFormError() {
  const error_text = document.getElementById('simulation-form-error');
  error_text.style.display = 'none';
}