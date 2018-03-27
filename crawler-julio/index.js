  const request = require('request');
const cheerio = require('cheerio')
/* request('http://ulp.edu.ar', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:',body); // Print the HTML for the Google homepage.
}); */



let c = 0
let arr = ""
const crawler = (callback) => {

  request.post({
    url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php',
    form: { 'group_no': c }
  }, (err, res, body) => {
    if (err) { return console.log(err); }

    const $ = cheerio.load(body)

    if (body !== "") {
      c++
      arr += $('div.titulo-portada').text();
      crawler(callback)
    }
    else
      callback(arr)
  })  
}

crawler((datos) => {
  console.log(datos)
})

//PASAR A PROMESAS