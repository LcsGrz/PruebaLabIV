const request = require('request');
const cheerio = require('cheerio');

const i= 0;

/*request.post({ url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php', form: { 'group_no':0 } }, (err, response, body) => {
  if(err) { return console.log(err) }
  
  const $ = cheerio.load(body);
  $('div.titulo-portada a').each (function (i, elemento) {
	  const a = $(this);
	  const links = a.attr('href');
	  console.log(a.text());
	  console.log(links);
	})
});*/

//**********CON CALLBACK*****
/*const crawler = ( callback) => {
	const arr = new Array();
	request.post({ url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php', form: { 'group_no':0 } }, (err, response, body) => {
		if(err) { return console.log(err) }
		const $ = cheerio.load(body);
		$('div.titulo-portada a').each (function (i, elemento) {
			const a = $(this);
			const links = a.attr('href');
			arr[i] = { detalle: links, titulo: a.text().trim() };
			i++;
		})
		callback(arr)
	});     
}
crawler((arr) => console.log(arr))*/

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

CrawlerPromesa("http://www.sanluisinforma.com.ar/", 'h2.article-title')
.then(data => console.log(data))
.catch(error => console.error(error))