fetch("https://frontend-take-home.fetchrewards.com/form", {
  method: "GET",
  Headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({}),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
