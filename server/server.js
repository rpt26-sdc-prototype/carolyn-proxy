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
app.get('/:page', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

// GET Request from "IMAGE GALLERY's Sever Port"
app.get('/images/:page', async (req, res) => {
  const { data } = await axios.get(`http://localhost:4012/images/${req.params.page}`)
  res.send(data);
})

// server connection
const PORT = process.env.PORT || 4011;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} 👍!`)
});
