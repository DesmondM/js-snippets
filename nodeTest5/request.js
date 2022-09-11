const axios = require("axios");

axios
  .get("https://www.google.com")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("The error :", err);
  })
  .then(() => {
    console.log("Were are finished");
  });
