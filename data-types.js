const formData = new FormData();

const btn = document.querySelector("#submit");
const form = document.querySelector("#submit-form");
const data = document.querySelector("#data-form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

let dataForm = `https://frontend-take-home.fetchrewards.com/form`;
console.log(dataForm);
