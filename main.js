const { makeFetch } = require("./makeFetch");

function main() {
  const result = makeFetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  return result;
};

main();