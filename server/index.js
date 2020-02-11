// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.resolve(__dirname, '../client/build')));

// app.get('/*', function(req, res) {
// 	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// app.listen(process.env.PORT || 4000, () => console.log(`App listening!`));

// import { renderToString } from 'react-dom/server'
// import { Helmet } from 'react-helmet';
const Helmet = require('react-helmet');
const App = require('../client/src/containers/App');
// import App from '../client/src/containers/App';
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/*', (req, res) => {
	const app = renderToString(<App />);
	const helmet = Helmet.renderStatic();

	const html = `
<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="app">
						${app}
        </div>
    </body>
</html>
`;

	res.send(html);
	console.log(html);
});

app.listen(process.env.PORT || 4000);
