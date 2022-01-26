function displayData(response) {
  console.log(response);
}

let dataForm = `https://frontend-take-home.fetchrewards.com/form`;
console.log(dataForm);

axios.get(dataForm).then(displayData);
