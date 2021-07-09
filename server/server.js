const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const postRoute = require('./routes/postRoute');

require('dotenv').config();

let whitelist = ['http://localhost:3000'];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', postRoute);

// Express error handling triggered when
// make a request from a 'non-whitelist' origin
app.use(function (err, req, res, next) {
  res.json({ err: err.message });
});

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
