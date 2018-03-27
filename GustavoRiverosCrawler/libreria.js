const request = require('request');
request('http://noticias.ulp.edu.ar/php/functions/functions.php?operacion=7', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  //console.log(body);
  //console.log(body.explanation);
});

const cheerio = require('cheerio')
const $ = cheerio.load(request)
const titulos =  $('div.titulo-portada a').each(function(){ 
    
    attr('href');}) 
console.log(titulos)