const celciusE1 = document.getElementById("celcius");
const FahrenheitE1 = document.getElementById("Fahrenheit");
const KelvinE1 = document.getElementById("Kelvin");

function computeTemp() {
      const currentValue = +event.target.value;

      switch (event.target.name) {
        case "Celcius":
          KelvinE1.value = currentValue + 273.15
          FahrenheitE1.value = currentValue * 1.8 + 32;
        KelvinE1;
        break;
        case "Fahrenheit":
            celciusE1.value = (currentValue - 32) / 1.8;
            KelvinE1.value = (currentValue - 32) / 1.8  + 273.15;
          KelvinE1;
          break;
          case "Kelvin":
            celciusE1.value = currentValue + 273.15
            FahrenheitE1.value = (currentValue - 273.15) * 1.8 + 32;
          KelvinE1;
          break;

        default:
        break;
      }
}