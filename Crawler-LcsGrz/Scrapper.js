const request = require('request');
const cheerio = require('cheerio')

/*
//Callbacks
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

*/


//Callbacks
const crawler = (callback) => {
  request.post("http://noticias.ulp.edu.ar/php/functions/functions.php?operacion=7", (err, res, body) => {
    if (err) { return console.log(err); }
    const $ = cheerio.load(body)
    callback($('div#titulo-portada').text())
  })
}

crawler((datos) => {
  console.log(datos)
})




//Promesas - VERIFICAR SI FUNCIONA
/*
const CrawlerPromesa = () =>{
    return new Promise((resolve, reject) => {
        let flag = true
        let x = 0
        let datos = ""

        while(flag){}
    request.post({url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php', form: { 'group_no': x }}, (err, res, body) => {
        if (err) { return console.log(err); }

        const $ = cheerio.load(body)

        if (body !== "") {
            x++
            datos += $('div.titulo-portada').text();
        }
        else
            flag = false
    })
})}

CrawlerPromesa().then(datos => console.log(datos)).catch(error => console.error(error))*/