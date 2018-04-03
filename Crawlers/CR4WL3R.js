const request = require('request')
const cheerio = require('cheerio')

const paginas = {
	'noticiasulp': {
		'http://noticias.ulp.edu.ar/php/functions/functions.php?operacion=7',
		'div#titulo-portada'
	},
	'diariosl':{
		"http://eldiariodesanluis.com/",
		'h3 a.title'
	},
	'slinforma':{
		"http://www.sanluisinforma.com.ar/",
		'h2.article-title'
	},
	'lpsl':{
		"http://www.lapuntasanluis.com/",
		'h2.article-title'
	}
}

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
