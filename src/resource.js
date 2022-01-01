export function fetchPlanetsData(url) {
  return fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        throw error;
      }
    );
}
