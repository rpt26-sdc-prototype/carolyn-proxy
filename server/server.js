const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });


// app.use(cors);

// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));

// middleware for data sent to database
app.use(express.json());


// GET Request for proxy
app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});


// GET Request from "IMAGE GALLERY" Server Port
app.get('/images/:id', async (req, res) => {
  const { data } = await axios.get(`http://localhost:4012/images/${req.params.id}`)
  res.send(data);
})

// GET Request from "REVIEWS" Server Port
app.get('/reviews/:id', async (req, res) => {
  const { data } = await axios.get(`http://localhost:4052/reviews/${req.params.id}`);
  res.send(data);
});


// // GET Request from "MORE LIKE THIS" Server Port
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

// GET Request from "METADATA" Server Port
app.get(`/api/product/:id`, async (req, res) => {
  let { data } = await axios.get(`http://localhost:4032/api/product/${req.params.id}`);
  res.send(data);
});

// server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Anthony's Proxy is listening on PORT ${PORT} 👍!`)
});
