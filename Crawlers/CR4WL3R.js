const request = require('request')
const cheerio = require('cheerio')

const diarios = {
	noticiasulp: {
		url: 'http://noticias.ulp.edu.ar/php/functions/functions.php?operacion=7',
		patron: 'div#titulo-portada'
	},
	diariosl:{
		url: "http://eldiariodesanluis.com/",
		patron: 'h3 a.title'
	},
	slinforma:{
		url: "http://www.sanluisinforma.com.ar/",
		patron:'h2.article-title'
	},
	lpsl:{
		url:"http://www.lapuntasanluis.com/",
		patron:'h2.article-title'
	}
}

const CrawlerPromesa = (pagina) => {
    return new Promise((resolve, reject) => {
        request.post(diarios[pagina].url, (err, res, body) => {
            if (err) { reject(error); }
            const $ = cheerio.load(body)
            const data = $(diarios[pagina].patron).text()
            resolve(data)
        })
    })
}

CrawlerPromesa('slinforma').then(data => console.log(data)).catch(error => console.error(error))
