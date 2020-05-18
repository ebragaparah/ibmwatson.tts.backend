import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import commentsRoute from './comments/routes';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/comments', commentsRoute);

export default app;
