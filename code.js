function calculateEnergyLoss() {
  var activePower = parseFloat(document.getElementById("activePower").value);
  var reactivePower = parseFloat(
    document.getElementById("reactivePower").value
  );

  if (isNaN(activePower) || isNaN(reactivePower)) {
    alert(
      "Будь ласка, введіть коректні числові значення для активної та реактивної потужностей."
    );
    return;
  }

  var apparentPower = Math.sqrt(
    Math.pow(activePower, 2) + Math.pow(reactivePower, 2)
  );
  var powerFactor = activePower / apparentPower;

  var activeEnergyLoss =
    Math.pow(apparentPower, 2) * (1 - Math.pow(powerFactor, 2));
  var reactiveEnergyLoss =
    Math.pow(apparentPower, 2) * Math.pow(powerFactor, 2);

  var resultMessage =
    "Втрати активної енергії: " + activeEnergyLoss.toFixed(2) + " ват\n";
  resultMessage +=
    "Втрати реактивної енергії: " + reactiveEnergyLoss.toFixed(2) + " вар";

  document.getElementById("result").innerText = resultMessage;
}
