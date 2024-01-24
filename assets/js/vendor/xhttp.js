// const xhttp = new XMLHttpRequest();
// const sourceSelect = document.querySelector(".source-countries");
// const destinationSelect = document.querySelector(".destination-countries");
// const flag = document.getElementById("flag");

// let countries;

// xhttp.onreadystatechange = function() {
//   console.log('this.status', this.status);
//   if (this.readyState == 4 && this.status == 200) {
//     countries = JSON.parse(xhttp.responseText);
//     assignValues();
//     handleCountryChange();
//   }
// };
// xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
// xhttp.send();

// function assignValues() {
//   countries.forEach(country => {
//     const option = document.createElement("option");
//     console.log('country',country)
//     option.value = country.cioc;
//     option.textContent = country.name.common;
//     select.appendChild(option);
//   });
// }

// function handleCountryChange() {
//   const countryData = countries.find(
//     country => select.value === country.alpha2Code
//   );
//   flag.style.backgroundImage = `url(${countryData.flag})`;
// }

// select.addEventListener("change", handleCountryChange.bind(this));



const xhttp = new XMLHttpRequest();
const sourceSelect = document.querySelector(".source-countries");
const destinationSelect = document.querySelector(".destination-countries");
const flag = document.getElementById("flag");

let countries;

xhttp.onreadystatechange = function () {
  // console.log('this.status', this.status);
  if (this.readyState == 4 && this.status == 200) {
    countries = JSON.parse(xhttp.responseText);
    assignValues();
    handleCountryChange();
  }
};
xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
xhttp.send();

function assignValues() {
  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.cioc;
    option.textContent = country.name.common;
    sourceSelect.appendChild(option);
    destinationSelect.appendChild(option.cloneNode(true));
  });
}

function handleCountryChange() {
  const sourceCountryData = countries.find(country => sourceSelect.value === country.alpha2Code);
  const destinationCountryData = countries.find(country => destinationSelect.value === country.alpha2Code);

  // Handle source country change
  if (sourceCountryData) {
    flag.style.backgroundImage = `url(${sourceCountryData.flag})`;
  }

  // Handle destination country change
  // Add your logic for the destination country if needed
}

sourceSelect.addEventListener("change", handleCountryChange);
destinationSelect.addEventListener("change", handleCountryChange);
