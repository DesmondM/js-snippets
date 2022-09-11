const response = require("./response");
const request = require("./request");

const makeRequest = (url, data) => {
  request.send(url, data);
  return response.read();
};

const responseData = makeRequest("https://google.com");
console.log(responseData);
