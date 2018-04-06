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
        diario: "San Luis Informa",
		patron: 'article',
		patronTitulo:'h2.article-title',
		patronImg:'.item-image img',
		patronUrl:'a'
	},
	lpsl:{
		url:"http://www.lapuntasanluis.com/",
		patron: 'article',
		patronTitulo:'h2.article-title',
		patronImg:'img',
		patronUrl:'a'
	}
}

const CrawlerPromesa = (pagina) => {
	const { url, patron, patronTitulo, patronImg, patronUrl } = diarios[pagina];
    return new Promise((resolve, reject) => {
        request.post(url, (err, res, body) => {
            if (err) { reject(error); }
            const $ = cheerio.load(body)
            
            const articulos = $(patron)
        	articulos.each(function(index, el) {
        		console.log($(el).find(patronTitulo).text().trim())
        		console.log($(el).find(patronImg).attr('src'))
        		console.log($(el).find(patronUrl).attr('href'))
                console.log('====================')
                
                {
                    "Noticia": [
                        { "Diaro": pagina, "lastName": "Doe" },
                    ]
                }

        	});

            const data = "FIN"//$(patron).text().trim()
            resolve(data)
        })
    })
}

CrawlerPromesa('slinforma').then(data => console.log(data)).catch(error => console.error(error))
//Guardar en archivos