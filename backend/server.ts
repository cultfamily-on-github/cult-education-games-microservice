import { opine, serveStatic } from 'https://deno.land/x/opine@2.3.3/mod.ts';
import { opineCors } from 'https://deno.land/x/cors/mod.ts';

const pathToIndexHTML = `${Deno.cwd()}/docs`;
const pathToAssets = `${pathToIndexHTML}/assets`;
const app = opine();

app.use(opineCors());

app.use(serveStatic(pathToIndexHTML));
app.use(serveStatic(pathToAssets));

app.get('/', function (req, res) {
	console.log(`serving index html from ${pathToIndexHTML}`);
	res.sendFile(`${pathToIndexHTML}/index.html`);
});

const port = Number(Deno.args[0]);

if (Deno.args[0].indexOf(443) === -1) {
	app.listen(port, () => console.log(`server has started on http://localhost:${port} 🚀`));
} else {

	const pathToCertificates = '/etc/letsencrypt/live/cultplayground.org';
    const pathToCertFile = `${pathToCertificates}/fullchain.pem`
    const pathToKeyFile = `${pathToCertificates}/privkey.pem`

	console.log(`reading cert file from ${pathToCertFile}`);
	console.log(`reading key file from ${pathToKeyFile}`);

	const cert = await Deno.readTextFile(pathToCertFile);
	const key = await Deno.readTextFile(pathToKeyFile);

	console.log(cert.length);
	console.log(key.length);

	const options = {
		port,
		certFile: pathToCertFile,
		keyFile: pathToKeyFile
	};

	try {
		await app.listen(options);
		console.log(`server has started on https://localhost:${port} 🚀`);
	} catch (error) {
		console.log(`shit happened: ${error}`);
	}
}
