// Initializing express
const express = require('express');
const api = require('./routes');
const app = express();

//Default port
const port = process.env.PORT || 3000;

app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  } else {
		console.log(`Server is listening on ${port}`);
	}
});