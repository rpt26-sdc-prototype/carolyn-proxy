const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

// configs
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });


// app.use(cors);
// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));

// middleware for data sent to database
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// server connection
const PORT = process.env.PORT || 4011;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`));
