// index.js
const countriesData = require("./Arabic-English-Countries.json");

function getCountryNamesEn() {
  const countryNames = countriesData.map((country) => country.name);
  return countryNames;
}
function getCountryNamesAr() {
  const countryNames = countriesData.map((country) => country.nameAr);
  return countryNames;
}
module.exports = {
  getCountryNamesEn,
  getCountryNamesAr,
};
