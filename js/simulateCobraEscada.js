function throwDice() {
  const dice = 1 + Math.round(5 * Math.random());
    return dice;
}


function simulateCobraEscada() {

  const input_number_simulation = document.getElementById('number-simulations')
  const number_of_simulations = Number(input_number_simulation.value);

  
  if (number_of_simulations > 1000000){
    showSimulationFormError();
    return;
  }
  hideSimulationFormError();

  const results_sum = new Array(6).fill(0);
  

  for (var i = 0; i < number_of_simulations; i++) {
    const dice = throwDice(); //jogou o dado
    if (dice === 1) {
      results_sum[0] = results_sum[0] + 1;
    }
    else if (dice === 2) {
      results_sum[5] = results_sum[5] + 1;
    }
    else if (dice === 3) {
      results_sum[2] = results_sum[2] + 1;
    }
    else if (dice === 4) {
      results_sum[0] = results_sum[0] + 1;
    }
    else if (dice === 5) {
      results_sum[0] = results_sum[0] + 1;
    }
    else {
      results_sum[5] = results_sum[5] + 1;
    };
  }

  for (var j = 0; j <6; j++){
    document.getElementById(`result-${j + 1}`).innerText = results_sum[j].toString();
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