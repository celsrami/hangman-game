const callToApi = () => {
  // Llamamos a la API
  return fetch('https://dev.adalab.es/api/random/word')
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      return response;
    });
};

export default callToApi;