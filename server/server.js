const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

// cors, static files, and middleware for database
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// GET Request for proxy
app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});


// Image Routes
app.get('/images/:id', async (req, res) => {
  // const { data } = await axios.get(`http://localhost:4012/images/${req.params.id}`)
  const { data } = await axios.get(`http://100.24.35.141:4012/images/${req.params.id}`)
  res.send(data);
})

// Reviews Routes
app.get('/reviews/:id', async (req, res) => {
  // const { data } = await axios.get(`http://localhost:4052/reviews/${req.params.id}`);
  const { data } = await axios.get(`http://18.144.23.11:4052/reviews/${req.params.id}`);
  res.send(data);
});


// More Like This Routes
app.get('/morelikethis/:id', async (req, res) => {
  await axios.get(`http://localhost:4022/morelikethis/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to server', err);
      res.status(404).end();
    });
});

// MetaData Routes
app.get(`/api/product/:id`, async (req, res) => {
  let { data } = await axios.get(`http://localhost:4032/api/product/${req.params.id}`);
  res.send(data);
});

// server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Anthony's Proxy is listening on PORT ${PORT} 👍!`)
});
