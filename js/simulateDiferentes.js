function throwDices() {
  const dice1 = 1 + Math.round(5 * Math.random());
  const dice2 = 1 + Math.round(5 * Math.random());
    return [dice1, dice2];
}


function simulateDiferentes() {

  const input_number_simulation = document.getElementById('number-simulations')
  const number_of_simulations = Number(input_number_simulation.value);

  
  if (number_of_simulations > 1000000){
    showSimulationFormError();
    return;
  }
  hideSimulationFormError();

  const diferentes_iguais = new Array(2).fill(0);
  

  for (var i = 0; i < number_of_simulations; i++) {
    const dices = throwDices();
  if (dices[0] === dices[1]){
    diferentes_iguais[1] += 1; 
  } else {
    diferentes_iguais[0] += 1;
  } 
  }

  document.getElementById(`diferentes`).innerText = diferentes_iguais[0];
  document.getElementById(`iguais`).innerText = diferentes_iguais[1];
}

function showSimulationFormError() {
  const error_text = document.getElementById('simulation-form-error');
  error_text.style.display = 'block';
}

function hideSimulationFormError() {
  const error_text = document.getElementById('simulation-form-error');
  error_text.style.display = 'none';
}