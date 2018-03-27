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

const crawler = new Promise(e,f) => {
	const arr = new Array();
	request.post({ url: 'http://noticias.ulp.edu.ar/php/includes/autoload_process.php', form: { 'group_no':0 } }, (err, response, body) => {
		if(err) { return f; }
		const $ = cheerio.load(body);
		$('div.titulo-portada a').each (function (i, elemento) {
			const a = $(this);
			const links = a.attr('href');
			arr[i] = titulo: a.text().trim()
			arr.map = links
			i++;
		})
		return e;
	});     
}
crawler((arr) => console.log(arr))