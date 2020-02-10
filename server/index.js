const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', function(req, res) {
	console.log('jippie');
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(process.env.PORT || 4000);
