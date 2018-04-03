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
		patron: 'article',
		patronTitulo:'h2.article-title',
		patronImg:'article .item-image img',
		patronUrl:'a href'
	},
	lpsl:{
		url:"http://www.lapuntasanluis.com/",
		patron: 'article',
		patronTitulo:'h2.article-title',
		patronImg:'img src',
		patronUrl:'a href'
	}
}

const CrawlerPromesa = (pagina) => {
	const { url, patron, patronTitulo, patronImg, patronUrl } = diarios[pagina];
    return new Promise((resolve, reject) => {
        request.post(url, (err, res, body) => {
            if (err) { reject(error); }
            //const noticias = []
            const $ = cheerio.load(body)
            $(patronImg).each(function(index, el) {

            	//console.log(index)
            	//console.log(el[])
            	//console.log(el)
            	console.log(el.attribs.src)
			});
            
            const data = "asd"//$(patron).text().trim()
            resolve(data)
        })
    })
}

CrawlerPromesa('slinforma').then(data => console.log(data)).catch(error => console.error(error))
