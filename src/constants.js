const PLANETS_NAMES = [
  "uranus",
  "neptune",
  "jupiter",
  "mars",
  "mercure",
  "saturne",
  "terre",
  "venus",
];

export const PLANETS_WITH_RING = ["saturne", "uranus"];

let apiFetchAllUrl =
  "https://api.le-systeme-solaire.net/rest/bodies/?satisfy=any";

PLANETS_NAMES.forEach((planetName) => {
  apiFetchAllUrl += "&filter[]=id,eq," + planetName;
});

export const FETCH_ALL_API_URL = apiFetchAllUrl;
export const FETCH_API_URL = "https://api.le-systeme-solaire.net/rest/bodies/";

export const UNITY_CONVERSION_AU_TO_KM = 0.00000000668;
export const UNITY_CONVERSION_KELVIN_TO_CELSIUS = 273.15;

export const SOLAR_SIZE_IN_KM = 695700;
export const SOLAR_SIZE_IN_EM = 8.7;
