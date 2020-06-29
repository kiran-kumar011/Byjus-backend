const http = require('http');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const mongoUri =
  process.env.NODE_ENV === 'production'
    ? 'mongodb+srv://kiran:kiran@123@cluster0-fj53c.mongodb.net/byjus?retryWrites=true&w=majority'
    : 'mongodb://127.0.0.1:27017/byjus';

console.log(mongoUri, 'uri');
mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    connectTimeoutMS: 1000 * 60 * 5,
    poolSize: 10,
    family: 4,
    useUnifiedTopology: true,
  },
  (err, connection) => {
    err
      ? console.log(err, 'Something went wrong...')
      : console.log('MongDB connected');
  }
);

const app = require('./app');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server started...');
});
