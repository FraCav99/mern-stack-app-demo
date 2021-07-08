const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const postRoute = require('./routes/postRoute');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/', postRoute);

mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Successfully connected to DB!'))
  .catch(err =>
    console.log(`An error occur when connect to DB: ${err.message}`)
  );

app.listen(process.env.PORT || 3001, () => console.log('Server is running.'));
