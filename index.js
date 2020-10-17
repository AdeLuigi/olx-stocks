const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
mongoose.connect(
  'mongodb://ademario:ademario@cluster0-shard-00-00.pltac.mongodb.net:27017,cluster0-shard-00-01.pltac.mongodb.net:27017,cluster0-shard-00-02.pltac.mongodb.net:27017/test?replicaSet=atlas-g6lqg4-shard-0&ssl=true&authSource=admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
app.use(cors());
app.use(routes);
app.use(express.json());

app.listen(3333);
