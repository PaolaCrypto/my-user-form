fetch("https://frontend-take-home.fetchrewards.com/form").then((response) => {
  console.log(response);
  return response.json();
});
