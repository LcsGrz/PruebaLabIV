const request = require('request');
const cheerio = require('cheerio')

//Callbacks
let c = 0
let arr = ""
const crawlerRecursivo = (callback) => {
  request.post({ url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php',form: { 'group_no': c } }, (err, res, body) => {
    if (err) callback(err);
    
    const $ = cheerio.load(body)

    if (body !== "") {
      c++
      arr += $('div.titulo-portada').text();
      crawlerRecursivo(callback)
    }
    else
      callback(arr)
  })
}

//crawlerRecursivo((datos) => {console.log(datos)})

const crawler = (callback) => {
  request.post("http://noticias.ulp.edu.ar/php/functions/functions.php?operacion=7", (err, res, body) => {
    if (err) { callback(err); }
    const $ = cheerio.load(body)
    callback($('div#titulo-portada').text())
  })
}

//crawler((datos) => {console.log(datos)})

//Promesas

const CrawlerPromesa = (pagina) =>{
    return new Promise((resolve, reject) => {
      request.post(pagina, (err, res, body) => {
        if (err) { reject(error); }
        const $ = cheerio.load(body)
        const data = $('div#titulo-portada').text()
        resolve(data)
      })
})}

CrawlerPromesa("http://noticias.ulp.edu.ar/php/functions/functions.php?operacion=7").then(data => console.log(data)).catch(error => console.error(error))