const request = require('request');
const breedName = process.argv.slice(2)[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (body === undefined) {
    console.log("Request Has Failed");
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed Not Found");
    } else {
      console.log(data[0].description);
    }
  }

});



