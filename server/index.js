const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(process.env.PORT || 4000);

// import { Helmet } from 'react-helmet';
// const app = express();
// const path = require('path');

// app.use(express.static(path.resolve(__dirname, '../client/build')));

// const server = () => {
// 	app.get('/*', (req, res) => {
// 		const app = renderToString(<App />, document.getElementById('root'));
// 		const helmet = Helmet.renderStatic();

// 		const html = `
// <!doctype html>
// <html ${helmet.htmlAttributes.toString()}>
//     <head>
//         ${helmet.title.toString()}
//         ${helmet.meta.toString()}
//         ${helmet.link.toString()}
//     </head>
//     <body ${helmet.bodyAttributes.toString()}>
//         <div id="app">
// 						${app}
//         </div>
//     </body>
// </html>
// `;

// 		res.send(html);
// 	});

// 	app.listen(process.env.PORT || 4000);
// };
// export default server;
