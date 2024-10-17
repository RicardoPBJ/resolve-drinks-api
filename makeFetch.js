async function makeFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

module.exports = { makeFetch };
