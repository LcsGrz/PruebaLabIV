const request = require ('request');
const cheerio = require('cheerio');
const i=0;

/*request.post({url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php', form: { 'group_no': 0 }}, (err, response, html) => {
	if (err) { return console.log(err); }
	const $ = cheerio.load(html);
	$('div.titulo-portada a').each (function (i, elemento) {
		const a = $(this);
		const links = a.attr('href');
		console.log(links);
		console.log(a.text());
	})
});*/

const crawler = (callback) =>{
	const arre= new Array();
	request.post({url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php', form: { 'group_no': 0 }}, (err, response, html) => {
		if (err) { return console.log(err); }
		const $ = cheerio.load(html);
		$('div.titulo-portada a').each (function (i, elemento) {
			const a = $(this);
			const links = a.attr('href');
			//console.log(links);
			//console.log(i);
			arre[i]={ detalle: links, titulo: a.text().trim() };
			i++;
			//console.log(a.text());
		})
		callback(arre)
	});
}

crawler((arre) => console.log(arre))





























































