const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("unit-input");

const lengthResult = document.getElementById("length-result");
const volumResult = document.getElementById("volum-result");
const massResult = document.getElementById("mass-result");
const toggleBtn = document.getElementById("toggle-mode");

// Når brukeren klikker på knappen "Convert":
convertBtn.addEventListener("click", function () {
  const value = Number(inputEl.value);

  if (!value) {
    alert("Please enter a number");
    return;
  }

  // Konverteringsfaktorer
  const meterToFeet = 3.281;
  const literToGallon = 0.264;
  const kiloToPound = 2.204;

  //Beregninger
  const metersToFeet = value * meterToFeet;
  const feetToMeters = value / meterToFeet;

  const literToGallons = value * literToGallon;
  const gallonsToLiters = value / literToGallon;

  const kilosToPounds = value * kiloToPound;
  const poundsToKilos = value / kiloToPound;

  // Funksjon som runder ned til 3 desimaler:
  function roundDown(num) {
    return Math.floor(num * 1000) / 1000;
  }

  // Oppdaterer HTML med resultatene:
  lengthResult.textContent = `${value} meters = ${roundDown(
    metersToFeet
  )} feet | ${value} feet = ${roundDown(feetToMeters)} meters`;

  volumResult.textContent = `${value} liters = ${roundDown(
    literToGallons
  )} gallons | ${value} gallons = ${roundDown(gallonsToLiters)} liters`;

  massResult.textContent = `${value} kilos = ${roundDown(
    kilosToPounds
  )} pounds | ${value} pounds = ${roundDown(poundsToKilos)} kilos`;
});

inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertBtn.click();
  }
});

// Mørk modus funksjonalitet
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
