const request = require("request");

request("https://swapi.dev/api/films/1/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body));
  }
});
