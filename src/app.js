import express from 'express';
import bodyParser from 'body-parser';
import commentsRoute from './comments/routes';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/comments', commentsRoute);

export default app;
