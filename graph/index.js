
  function plotGraph() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var maxValue = parseFloat(document.getElementById('maxValue').value);

    if (isNaN(inputValue) || isNaN(maxValue)) {
      alert('Please enter valid numeric values!');
      return;
    }

    if (inputValue > maxValue) {
      alert('Input Value cannot be greater than Max Value!');
      return;
    }

    var inputPercentage = (inputValue / maxValue) * 100;
    var remainingPercentage = 100 - inputPercentage;

    document.getElementsByClassName('graph').innerHTML = `
      <div class="progress">
        <div class="progress-bar" style="width: ${inputPercentage}%;">${inputPercentage.toFixed(2)}%</div>
        <div class="progress-bar" style="width: ${remainingPercentage}%;">${remainingPercentage.toFixed(2)}%</div>
      </div>
    `;
  }
