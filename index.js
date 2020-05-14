import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('home sweet home');
});


app.listen(port, () => {
  console.log('server');
});
