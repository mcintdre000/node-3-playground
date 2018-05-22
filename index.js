const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.get('/data', (req, res) => {
  res.json({
    someData: 'pretend this is meaningful data, like URLs to pictures of the simpsons',
  });
});

app.get('/more-data', (req, res) => {
  res.json({
    moreData: 'I wish this data were protected!',
  });
});

app.get('/telephone', (req, res) => {

  console.log('got a request')
  // res.json({ message: 'Vote for Pedro!' })
  axios.get('http://192.168.1.26:3005/telephone2').then(response => {
    console.log('response.data', response.data)
    const {message} = response.data;
    res.json({ message: 'Vote for Pedro! ' + message })
  }).catch( error => {console.log('error', error);
    res.status(500).json({ message: 'something went wrong'})})
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
