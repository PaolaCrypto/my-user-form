function getRequest() {
  fetch("https://frontend-take-home.fetchrewards.com/form", {
    method: "GET",
  })
    .then(validateResponse)
    .then(readResponseAsText)
    .then(logResult)
    .catch(logError);

  window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });
}

let dataForm = `https://frontend-take-home.fetchrewards.com/form`;
console.log(dataForm);
