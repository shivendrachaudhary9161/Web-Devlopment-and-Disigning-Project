function convertTemperature() {
  const tempInput = document.getElementById("temperature").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("result");

  if (tempInput === "" || isNaN(tempInput)) {
    resultDiv.innerHTML = "❌ Please enter a valid number!";
    return;
  }

  const temp = parseFloat(tempInput);
  let celsius, fahrenheit, kelvin;

  if (unit === "C") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "F") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = (temp - 32) * 5/9 + 273.15;
  } else if (unit === "K") {
    celsius = temp - 273.15;
    fahrenheit = (temp - 273.15) * 9/5 + 32;
    kelvin = temp;
  }

  resultDiv.innerHTML = `
    🌡️ Celsius: ${celsius.toFixed(2)} °C<br>
    🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    ❄️ Kelvin: ${kelvin.toFixed(2)} K
  `;
}
