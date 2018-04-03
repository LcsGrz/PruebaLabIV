const CrawlerPromesa = (pagina, seccion) => {
    return new Promise((resolve, reject) => {
        request.post(pagina, (err, res, body) => {
            if (err) { reject(error); }
            const $ = cheerio.load(body)
            const data = $(seccion).text()
            resolve(data)
        })
    })
}

CrawlerPromesa("http://noticias.ulp.edu.ar/php/functions/functions.php?operacion=7", 'div#titulo-portada').then(data => console.log(data)).catch(error => console.error(error))
