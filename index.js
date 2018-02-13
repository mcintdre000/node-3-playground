const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

function apiKeyChecker(req, res, next) {
  if (req.headers.apikey === 't$rules') {
    next();
  } else {
    res.status(400).send('You forgot the password, or put the wrong one');
  }
}

app.get('/data', apiKeyChecker, (req, res) => {
  console.log(req.query.name + ' got it!')
  res.json({
    user: 'pretend this is meaningful data, like URLs to pictures of the simpsons',
  });
  next();
});

app.get('/secret', apiKeyChecker, (req, res) => {
  console.log('someone got the secret');
  res.json({
    user: 'more pretending'
  });
})

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
